const PenMode = {
    isActive: false,
    originalHTML: null,

    activate() {
      if (this.isActive) return;

      console.log("Activating Pen Mode...");
      this.isActive = true;

      // Save original HTML for potential deactivation
      const paletteSection = document.querySelector(".palette-section");
      if (paletteSection) {
        this.originalHTML = paletteSection.cloneNode(true);
      }

      // Apply transformations
      this.injectStyles();
      this.transformHTML();
      this.initializeSushiTrain();
      this.adjustLayout();

      console.log("Pen Mode Activated!");
    },

    injectStyles() {
      // Check if styles already injected
      if (document.getElementById("pen-mode-styles")) return;

      const link = document.createElement("link");
      link.id = "pen-mode-styles";
      link.rel = "stylesheet";
      link.href = "pen-mode.css"; // Load external CSS
      document.head.appendChild(link);
    },

    transformHTML() {
      const mainContent = document.querySelector(".main-content");
      if (!mainContent) return;

      // Remove palette section
      const paletteSection = document.querySelector(".palette-section");
      if (paletteSection) {
        paletteSection.remove();
      }

      // Create sushi train container
      const sushiContainer = document.createElement("div");
      sushiContainer.className = "sushi-train-container";
      sushiContainer.innerHTML = `
      <!-- Entry Hole -->
      <div class="sushi-hole entry"></div>
      
      <!-- Character Train -->
      <div class="character-train"></div>
      
      <!-- Exit Hole -->
      <div class="sushi-hole exit"></div>
    `;

      // Move grid section into sushi container
      const gridSection = document.querySelector(".grid-section");
      if (gridSection) {
        // Insert sushi container before grid section
        gridSection.parentNode.insertBefore(sushiContainer, gridSection);
        // Move grid section inside sushi container (after character-train)
        const characterTrain = sushiContainer.querySelector(".character-train");
        characterTrain.parentNode.insertBefore(gridSection, characterTrain.nextSibling);
      }
    },

    /**
     * Adjust layout spacing
     */
    adjustLayout() {
      const headerContainer = document.getElementById("header-container");
      if (headerContainer) {
        headerContainer.style.marginBottom = "4rem";
      }
    },

    /**
     * Initialize the Sushi Train system
     */
    initializeSushiTrain() {
      if (typeof SushiTrain === "undefined") {
        console.error("SushiTrain module not found!");
        return;
      }

      // Initialize the train
      SushiTrain.init();
    },
  };

  const SushiTrain = {
    characters: [],
    currentIndex: 0,
    trainElements: [],
    container: null,
    isAnimating: false,
    animationId: null,
    path: [],
    entryPos: null,
    exitPos: null,

    // Configuration
    config: {
      speed: 0.13,
      characterSpacing: 15,
      pathOffset: 35,
      verticalOffset: 95,
      verticalAdjust: 65,
      exitTriggerOffset: 2, // Trigger exit this many positions before the end
    },

    init() {
      this.container = document.querySelector(".character-train");
      if (!this.container) {
        console.error("Character train container not found");
        return;
      }

      this.shuffleCharacters();

      setTimeout(() => {
        this.createPath();
        if (this.path.length > 0) {
          this.startAnimation();
        } else {
          console.error("Path creation failed");
        }
      }, 100);
    },

    shuffleCharacters() {
      this.characters = [];

      // Check if PALETTE_CATEGORIES exists
      if (typeof PALETTE_CATEGORIES === "undefined") {
        console.error("PALETTE_CATEGORIES not found");
        return;
      }

      PALETTE_CATEGORIES.forEach((category) => {
        this.characters.push(...category.chars);
      });

      // Fisher-Yates shuffle
      for (let i = this.characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.characters[i], this.characters[j]] = [this.characters[j], this.characters[i]];
      }

      this.currentIndex = 0;
    },

    createPath() {
      const gridContainer = document.querySelector(".grid-container");
      if (!gridContainer) {
        console.error("Grid container not found for path creation");
        return;
      }

      const sushiContainer = document.querySelector(".sushi-train-container");
      if (!sushiContainer) {
        console.error("Sushi train container not found");
        return;
      }

      const gridRect = gridContainer.getBoundingClientRect();
      const containerRect = this.container.getBoundingClientRect();

      const gridLeft = gridRect.left - containerRect.left;
      const gridTop = gridRect.top - containerRect.top;
      const gridWidth = gridRect.width;
      const gridHeight = gridRect.height;

      const gridCenterX = gridLeft + gridWidth / 2;
      const gridCenterY = gridTop + gridHeight / 2;

      const halfWidth = gridWidth / 2 + this.config.pathOffset;
      const halfHeight = gridHeight / 2 + (this.config.verticalOffset || this.config.pathOffset);

      const pathTop = gridCenterY - halfHeight + this.config.verticalAdjust;
      const pathBottom = gridCenterY + halfHeight + this.config.verticalAdjust;
      const pathLeft = gridCenterX - halfWidth;
      const pathRight = gridCenterX + halfWidth;

      this.path = [];
      const segmentsPerSide = 50;

      // Entry point at top-left
      const entryPoint = { x: pathLeft, y: pathTop };
      this.path.push(entryPoint);

      // Top side (left to right)
      for (let i = 1; i < segmentsPerSide; i++) {
        const t = i / segmentsPerSide;
        this.path.push({
          x: pathLeft + t * (pathRight - pathLeft),
          y: pathTop,
        });
      }

      // Right side (top to bottom)
      for (let i = 0; i < segmentsPerSide; i++) {
        const t = i / segmentsPerSide;
        this.path.push({
          x: pathRight,
          y: pathTop + t * (pathBottom - pathTop),
        });
      }

      // Bottom side (right to left)
      for (let i = 0; i < segmentsPerSide; i++) {
        const t = i / segmentsPerSide;
        this.path.push({
          x: pathRight - t * (pathRight - pathLeft),
          y: pathBottom,
        });
      }

      // Left side (bottom to top) - stop early and cut across to exit hole
      const leftSideSegments = Math.floor(segmentsPerSide * 0.85); // Go 85% up left side
      for (let i = 0; i < leftSideSegments; i++) {
        const t = i / segmentsPerSide;
        this.path.push({
          x: pathLeft,
          y: pathBottom - t * (pathBottom - pathTop),
        });
      }

      // Add diagonal transition from left side to exit hole (top-left, offset from entry)
      const exitPoint = { x: pathLeft + 40, y: pathTop };
      const currentY = pathBottom - (leftSideSegments / segmentsPerSide) * (pathBottom - pathTop);

      // Create diagonal path to top-left
      for (let i = 1; i <= 5; i++) {
        const t = i / 5;
        this.path.push({
          x: pathLeft,
          y: currentY + t * (pathTop - currentY),
        });
      }

      // Then move horizontally to the right to reach exit hole
      for (let i = 1; i <= 5; i++) {
        const t = i / 5;
        this.path.push({
          x: pathLeft + t,
          y: pathTop,
        });
      }

      this.entryPos = this.path[0];
      this.exitPos = this.path[this.path.length - 1];

      console.log(`Path created: ${this.path.length} points, exit trigger at ${this.path.length - this.config.exitTriggerOffset}`);

      this.positionHoles();
    },

    positionHoles() {
      if (!this.entryPos || !this.exitPos) return;

      const entryHole = document.querySelector(".sushi-hole.entry");
      const exitHole = document.querySelector(".sushi-hole.exit");

      if (entryHole) {
        entryHole.style.left = this.entryPos.x + "px";
        entryHole.style.top = this.entryPos.y + "px";
        entryHole.style.transform = "translate(-50%, -50%)";
      }

      if (exitHole) {
        // Position exit hole 40px to the right of where path actually ends
        exitHole.style.left = this.exitPos.x + 40 + "px";
        exitHole.style.top = this.exitPos.y + "px";
        exitHole.style.transform = "translate(-50%, -50%)";
      }
    },

    startAnimation() {
      this.isAnimating = true;
      this.animate();
    },

    animate() {
      if (!this.isAnimating || !this.path || this.path.length === 0) return;

      // Clean up exited elements
      this.trainElements = this.trainElements.filter((el) => {
        if (el.hasExited) {
          el.element.remove();
          return false;
        }
        return true;
      });

      // Add new character if needed
      const lastElement = this.trainElements[this.trainElements.length - 1];
      if (this.trainElements.length === 0 || (lastElement && lastElement.pathProgress > this.config.characterSpacing)) {
        this.addCharacter();
      }

      // Update all characters
      this.trainElements.forEach((el) => {
        if (el.isPaused) return;

        // Don't update progress if already exiting
        if (el.isExiting) return;

        el.pathProgress += this.config.speed;

        // Calculate exit trigger point (a few positions before the end)
        const exitTriggerPoint = this.path.length - this.config.exitTriggerOffset;

        // Check if character should start exiting
        if (el.pathProgress >= exitTriggerPoint) {
          el.isExiting = true;

          // DON'T snap position - let it exit from current position
          // Just start the exit animation
          el.element.style.animation = "exitHole 1s ease-in-out forwards";

          setTimeout(() => {
            el.hasExited = true;
          }, 1000);
          return;
        }

        // Normal path animation
        const pathIndex = Math.floor(el.pathProgress);

        if (pathIndex < 0 || pathIndex >= this.path.length) return;

        const pos = this.path[pathIndex];
        if (!pos) return;

        el.element.style.left = pos.x + "px";
        el.element.style.top = pos.y + "px";
        el.element.style.transform = "translate(-50%, -50%)";

        if (el.pathProgress > 5) {
          el.element.classList.add("visible");
        }
      });

      this.animationId = requestAnimationFrame(() => this.animate());
    },

    addCharacter() {
      if (this.characters.length === 0) {
        this.shuffleCharacters();
        return;
      }

      const char = this.characters[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.characters.length;

      const element = document.createElement("div");
      element.className = "train-char";
      element.textContent = char;

      if (this.path.length > 0) {
        const startPos = this.path[0];
        element.style.left = startPos.x + "px";
        element.style.top = startPos.y + "px";
      }

      element.style.animation = "enterHole 0.6s ease-out";

      let hoverTimeout;

      element.addEventListener("mouseenter", () => {
        const trainEl = this.trainElements.find((el) => el.element === element);
        if (trainEl) {
          trainEl.isPaused = true;
          element.style.transform = "translate(-50%, -50%) scale(1.5)";
        }
      });

      element.addEventListener("mouseleave", () => {
        hoverTimeout = setTimeout(() => {
          const trainEl = this.trainElements.find((el) => el.element === element);
          if (trainEl) {
            trainEl.isPaused = false;
            element.style.transform = "translate(-50%, -50%)";
          }
        }, 100);
      });

      element.addEventListener("click", () => {
        clearTimeout(hoverTimeout);

        // Update State (from main app)
        if (typeof State !== "undefined") {
          State.currentChar = char;
          State.isEraserMode = false;
        }

        // Update eraser button
        const eraserBtn = document.getElementById("eraserBtn");
        if (eraserBtn) eraserBtn.classList.remove("active");

        // Update current character display
        this.updateCurrentCharDisplay();

        // Visual feedback
        document.querySelectorAll(".train-char").forEach((el) => {
          el.classList.remove("selected");
        });
        element.classList.add("selected");

        // Show toast
        if (typeof UIUtils !== "undefined") {
          UIUtils.showToast(`Selected: ${char}`);
        }

        // Unpause
        const trainEl = this.trainElements.find((el) => el.element === element);
        if (trainEl) {
          trainEl.isPaused = false;
          element.style.transform = "translate(-50%, -50%)";
        }
      });

      this.container.appendChild(element);

      this.trainElements.push({
        element: element,
        char: char,
        pathProgress: 0,
        isPaused: false,
        isExiting: false,
        hasExited: false,
      });
    },

    updateCurrentCharDisplay() {
      const display = document.getElementById("currentCharDisplay");
      if (display && typeof State !== "undefined") {
        display.textContent = State.currentChar;
      }
    },

    stop() {
      this.isAnimating = false;
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
    },
  };

// window.PenMode = PenMode;
// window.SushiTrain = SushiTrain;