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
      pathOffset: 30,
      verticalOffset: 88,
      verticalAdjust: 53,
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

///////////////////
// State Management
///////////////////

const State = {
  // Grid state
  grid: Array(10)
    .fill()
    .map(() => Array(10).fill("")),
  GRID_SIZE: 10,

  // Drawing state
  currentChar: "█",
  isDrawing: false,
  lastDrawnCell: null,
  isEraserMode: false,

  // Selection state
  selectedCell: null,
  hoveredCell: null,

  // Copy/paste state
  copiedCell: null,

  // Drag-and-drop state
  isDraggingToMove: false,
  draggedCell: null,
  draggedContent: null,
  isShiftPressed: false,

  history: [],
  maxHistorySize: 50,

  // Building info state
  currentBuildingInfo: {
    name: "",
    artist: "",
  },

  // Language state
  currentLang: localStorage.getItem("language") || "en",

  // Initialize or reset grid
  initializeGrid() {
    this.grid = Array(this.GRID_SIZE)
      .fill()
      .map(() => Array(this.GRID_SIZE).fill(""));
  },

  // Get cell content
  getCell(row, col) {
    return this.grid[row]?.[col] || "";
  },

  // Set cell content
  setCell(row, col, value) {
    if (row >= 0 && row < this.GRID_SIZE && col >= 0 && col < this.GRID_SIZE) {
      this.grid[row][col] = value;
    }
  },

  // Get cell by index
  getCellByIndex(index) {
    const row = Math.floor(index / this.GRID_SIZE);
    const col = index % this.GRID_SIZE;
    return this.getCell(row, col);
  },

  // Set cell by index
  setCellByIndex(index, value) {
    const row = Math.floor(index / this.GRID_SIZE);
    const col = index % this.GRID_SIZE;
    this.setCell(row, col, value);
  },

  // Clear all state
  reset() {
    this.initializeGrid();
    this.selectedCell = null;
    this.hoveredCell = null;
    this.lastDrawnCell = null;
    this.isDrawing = false;
    this.copiedCell = null;
  },

  // Save current state to history
  saveHistory() {
    // Deep clone the grid
    const gridCopy = this.grid.map((row) => [...row]);
    this.history.push(gridCopy);

    // Limit history size
    if (this.history.length > this.maxHistorySize) {
      this.history.shift();
    }
  },

  // Undo to previous state
  undo() {
    if (this.history.length > 0) {
      this.grid = this.history.pop();
      return true;
    }
    return false;
  },
};

///////////////////
// local storage
///////////////////

const Storage = {
  keys: {
    GRID: "loserLaneGrid",
    LAST_SAVED: "loserLaneLastSaved",
    LANGUAGE: "language",
    EXAMPLE_CLICKED: "exampleClicked",
    LANDSCAPE_HINT: "landscapeHintShown",
  },

  // Save grid to localStorage
  saveGrid(grid) {
    try {
      localStorage.setItem(this.keys.GRID, JSON.stringify(grid));
      localStorage.setItem(this.keys.LAST_SAVED, new Date().toISOString());
      return true;
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
      return false;
    }
  },

  // Load grid from localStorage
  loadGrid(gridSize) {
    try {
      const savedGrid = localStorage.getItem(this.keys.GRID);

      if (!savedGrid) return null;

      const parsedGrid = JSON.parse(savedGrid);

      if (!Array.isArray(parsedGrid) || parsedGrid.length === 0) {
        return null;
      }

      // Ensure the grid is the correct size
      return Array(gridSize)
        .fill()
        .map((_, i) => {
          if (parsedGrid[i] && Array.isArray(parsedGrid[i])) {
            return [...parsedGrid[i].slice(0, gridSize), ...Array(gridSize).fill("")].slice(0, gridSize);
          }
          return Array(gridSize).fill("");
        });
    } catch (e) {
      console.error("Failed to load from localStorage:", e);
      this.clearGrid();
      return null;
    }
  },

  // Clear grid data
  clearGrid() {
    try {
      localStorage.removeItem(this.keys.GRID);
      localStorage.removeItem(this.keys.LAST_SAVED);
      return true;
    } catch (e) {
      console.error("Failed to clear localStorage:", e);
      return false;
    }
  },

  // Get/set language
  getLanguage() {
    return localStorage.getItem(this.keys.LANGUAGE) || "en";
  },

  setLanguage(lang) {
    localStorage.setItem(this.keys.LANGUAGE, lang);
  },

  // Generic getters/setters
  get(key) {
    return localStorage.getItem(key);
  },

  set(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      console.error(`Failed to set ${key}:`, e);
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },
};

///////////////////
// building display renderer
///////////////////

const BuildingRenderer = {
  // Standardized building renderer
  render(gridData, container, options = {}) {
    const { fontSize = "2.2rem", gridSize = 10, backgroundColor = "#120303", textColor = "var(--theme-color-alpha)", opacity = "0.9" } = options;

    container.innerHTML = "";
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${gridSize}, 0.6em)`;
    container.style.gap = "0";
    container.style.fontSize = fontSize;
    container.style.justifyContent = "center";
    container.style.background = backgroundColor;
    container.style.lineHeight = "1";

    gridData.forEach((row) => {
      row.forEach((cell) => {
        const cellDiv = document.createElement("div");
        cellDiv.textContent = cell;
        cellDiv.style.background = backgroundColor;
        cellDiv.style.color = textColor;
        cellDiv.style.aspectRatio = "1 / 1.5";
        cellDiv.style.display = "flex";
        cellDiv.style.alignItems = "center";
        cellDiv.style.justifyContent = "center";
        cellDiv.style.fontSize = "inherit";
        cellDiv.style.width = "0.6em";
        cellDiv.style.height = "1.2em";
        cellDiv.style.textAlign = "center";
        cellDiv.style.opacity = opacity;
        container.appendChild(cellDiv);
      });
    });
  },

  // Render building preview in modal
  renderPreview(grid, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.render(grid, container, {
      fontSize: "14px",
    });
  },

  // Render building for sharing
  renderSharePreview(grid, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.render(grid, container, {
      fontSize: "1.4rem",
    });
  },

  // Create gallery item building display
  renderGalleryItem(building, gridSize = 10) {
    const buildingDiv = document.createElement("div");
    buildingDiv.className = "gallery-building";

    const buildingColor = COLOURS.BUILDINGS[Math.floor(Math.random() * COLOURS.BUILDINGS.length)];
    buildingDiv.style.color = buildingColor;
    buildingDiv.style.fontSize = "14px";
    buildingDiv.style.display = "grid";
    buildingDiv.style.gridTemplateColumns = "repeat(10, 0.6em)";
    buildingDiv.style.gap = "0";
    buildingDiv.style.lineHeight = "1";
    buildingDiv.style.justifyContent = "center";

    // Calculate empty rows for bottom alignment
    const emptyRows = gridSize - building.art.length;

    // Add empty rows at the top
    for (let rowNum = 0; rowNum < emptyRows; rowNum++) {
      for (let i = 0; i < 10; i++) {
        const emptyCell = this._createCell(" ");
        buildingDiv.appendChild(emptyCell);
      }
    }

    // Add the building art
    building.art.forEach((line) => {
      for (let i = 0; i < 10; i++) {
        const char = line[i] || " ";
        const charSpan = this._createCell(char);
        buildingDiv.appendChild(charSpan);
      }
    });

    return buildingDiv;
  },

  // Helper to create a single cell
  _createCell(content) {
    const cell = document.createElement("span");
    cell.style.display = "inline-block";
    cell.style.width = "0.6em";
    cell.style.height = "0.9em";
    cell.style.textAlign = "center";
    cell.style.aspectRatio = "1 / 1.5";
    cell.textContent = content;
    return cell;
  },

  // Trim empty rows from grid
  trimGrid(grid) {
    let trimmed = [...grid];

    // Remove empty rows from top
    while (trimmed.length > 0 && trimmed[0].every((cell) => cell === "")) {
      trimmed.shift();
    }

    // Remove empty rows from bottom
    while (trimmed.length > 0 && trimmed[trimmed.length - 1].every((cell) => cell === "")) {
      trimmed.pop();
    }

    return trimmed;
  },

  // Format grid for game submission
  formatForSubmission(grid, buildingName, artistName, gridSize = 10) {
    const trimmedGrid = this.trimGrid(grid);

    const artLines = trimmedGrid.map((row) => {
      const line = row.map((cell) => (cell === "" ? " " : cell)).join("");
      const paddedLine = line.padEnd(gridSize, " ");
      return `            "${paddedLine}"`;
    });

    return `    {
        name: "${buildingName}",
        artist: "${artistName}",
        art: [
${artLines.join(",\n")}
        ]
    },`;
  },
};

/////////////////
// ui util
/////////////////

const UIUtils = {
  // Show toast notification
  showToast(message, duration = 2500) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, duration);
  },

  // Update custom cursor for cell
  updateCellCursor(cellElement, isEraserMode, currentChar) {
    if (isEraserMode) {
      cellElement.style.cursor =
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="2" y="18" font-size="18" font-family="Courier New, monospace" fill="%23999">X</text></svg>\') 12 12, crosshair';
    } else {
      const char = currentChar || "█";
      const encodedChar = encodeURIComponent(char);
      cellElement.style.cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="2" y="18" font-size="18" font-family="Courier New, monospace" fill="%23999">${encodedChar}</text></svg>') 12 12, crosshair`;
    }
  },

  // Highlight selected cell
  highlightCell(index) {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.classList.remove("active");
    });

    if (index !== null) {
      const cell = document.querySelector(`[data-index="${index}"]`);
      if (cell) cell.classList.add("active");
    }
  },

  // Clear validation errors
  clearValidationErrors() {
    const buildingNameError = document.getElementById("buildingNameError");
    const artistNameError = document.getElementById("artistNameError");

    if (buildingNameError) buildingNameError.textContent = "";
    if (artistNameError) artistNameError.textContent = "";
  },

  // Show/hide modal
  showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("show");
  },

  hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("show");
  },

  // Toggle info popup
  toggleInfo() {
    const popup = document.getElementById("info-popup");
    if (popup) popup.classList.toggle("show");
  },

  closeInfo() {
    const popup = document.getElementById("info-popup");
    if (popup) popup.classList.remove("show");
  },

  // Show landscape hint (mobile only)
  showLandscapeHint(t) {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      ("ontouchstart" in window && window.innerWidth <= 768);
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile && isPortrait && !Storage.get(Storage.keys.LANDSCAPE_HINT)) {
      const hint = document.getElementById("landscapeHint");
      if (!hint) return;

      setTimeout(() => {
        hint.classList.add("show");
        hint.textContent = t("landscapeHint");

        setTimeout(() => {
          hint.classList.remove("show");
        }, 4000);
      }, 500);

      Storage.set(Storage.keys.LANDSCAPE_HINT, "true");
    }
  },

  // Get element or throw error
  getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with id "${id}" not found`);
    }
    return element;
  },

  // Safely get element value
  getInputValue(id) {
    const element = this.getElement(id);
    return element ? element.value.trim() : "";
  },

  // Set element text content
  setTextContent(id, text) {
    const element = this.getElement(id);
    if (element) element.textContent = text;
  },
};

/////////////////
// grid controller
/////////////////

const GridController = {
  // Initialize the grid
  init() {
    const gridElement = document.getElementById("grid");
    if (!gridElement) return;

    gridElement.innerHTML = "";

    for (let i = 0; i < State.GRID_SIZE * State.GRID_SIZE; i++) {
      const cell = this._createCell(i);
      gridElement.appendChild(cell);
    }

    // Global mouse/touch event listeners
    this._addGlobalListeners();
  },

  // Create a single cell with all event handlers
  _createCell(index) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = index;
    cell.draggable = true;

    // Drag events
    cell.addEventListener("dragstart", (e) => this._handleDragStart(e, index, cell));
    cell.addEventListener("dragend", (e) => this._handleDragEnd(e, cell));
    cell.addEventListener("dragover", (e) => this._handleDragOver(e, cell));
    cell.addEventListener("dragleave", (e) => this._handleDragLeave(e, cell));
    cell.addEventListener("drop", (e) => this._handleDrop(e, index, cell));

    // Mouse events
    cell.addEventListener("mousedown", (e) => this._handleMouseDown(e, index));
    cell.addEventListener("mouseenter", (e) => this._handleMouseEnter(e, index));
    cell.addEventListener("mouseleave", (e) => this._handleMouseLeave(e, index));
    cell.addEventListener("click", () => this._handleClick(index));
    cell.addEventListener("contextmenu", (e) => this._handleContextMenu(e, index));

    // Touch events
    cell.addEventListener("touchstart", (e) => this._handleTouchStart(e, index));
    cell.addEventListener("touchmove", (e) => this._handleTouchMove(e));

    return cell;
  },

  // Drag event handlers
  _handleDragStart(e, index, cell) {
    if (!State.isShiftPressed) {
      e.preventDefault();
      return;
    }

    State.isDraggingToMove = true;
    State.draggedCell = index;
    State.draggedContent = State.getCellByIndex(index);
    cell.style.opacity = "0.5";
    e.dataTransfer.effectAllowed = "move";
  },

  _handleDragEnd(e, cell) {
    cell.style.opacity = "1";
    State.draggedCell = null;
    State.draggedContent = null;
    State.isDraggingToMove = false;
  },

  _handleDragOver(e, cell) {
    if (!State.isDraggingToMove) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    cell.style.background = "rgba(99, 248, 99, 0.3)";
  },

  _handleDragLeave(e, cell) {
    if (!State.isDraggingToMove) return;
    cell.style.background = "";
  },

  _handleDrop(e, index, cell) {
    if (!State.isDraggingToMove) return;
    e.preventDefault();
    cell.style.background = "";

    if (State.draggedCell !== null && State.draggedCell !== index) {
      const fromRow = Math.floor(State.draggedCell / State.GRID_SIZE);
      const fromCol = State.draggedCell % State.GRID_SIZE;
      const toRow = Math.floor(index / State.GRID_SIZE);
      const toCol = index % State.GRID_SIZE;

      // Move the character
      State.setCell(toRow, toCol, State.draggedContent);
      State.setCell(fromRow, fromCol, "");

      this.update();
      UIUtils.showToast(`Moved: ${State.draggedContent || "empty"}`);
    }
  },

  // Mouse event handlers
  _handleMouseDown(e, index) {
    if (!State.isShiftPressed) {
      State.isDrawing = true;
      State.lastDrawnCell = null;
      this._drawCell(index);
    }
  },

  _handleMouseEnter(e, index) {
    State.hoveredCell = index;

    if (State.isShiftPressed) {
      e.target.style.background = "rgba(99, 248, 99, 0.4)";
      e.target.style.transform = "scale(1.05)";
    }

    if (State.isDrawing && !State.isShiftPressed && !State.isDraggingToMove) {
      this._drawCell(index);
    }

    if (!State.isDraggingToMove) {
      UIUtils.updateCellCursor(e.target, State.isEraserMode, State.currentChar);
    }
  },

  _handleMouseLeave(e, index) {
    State.hoveredCell = null;

    if (State.isShiftPressed) {
      e.target.style.background = "";
      e.target.style.transform = "";
    }

    e.target.style.cursor = "";
  },

  _handleClick(index) {
    if (State.isDraggingToMove) return;

    const row = Math.floor(index / State.GRID_SIZE);
    const col = index % State.GRID_SIZE;

    if (State.isEraserMode) {
      State.setCell(row, col, "");
      this.update();
    } else {
      if (State.getCell(row, col)) {
        PaletteController.selectChar(State.getCell(row, col));
      } else {
        State.setCell(row, col, State.currentChar);
        this.update();
      }
    }

    State.selectedCell = index;
    UIUtils.highlightCell(index);
  },

  _handleContextMenu(e, index) {
    e.preventDefault();
    ContextMenu.show(e, index);
  },

  // Touch event handlers
  _handleTouchStart(e, index) {
    e.preventDefault();
    State.isDrawing = true;
    State.lastDrawnCell = null;
    this._drawCell(index);
  },

  _handleTouchMove(e) {
    e.preventDefault();
    if (!State.isDrawing) return;

    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element && element.classList.contains("cell")) {
      const touchIndex = parseInt(element.dataset.index);
      this._drawCell(touchIndex);
    }
  },

  // Draw on a cell
  _drawCell(index) {
    if (State.lastDrawnCell === index) return;

    State.saveHistory(); // ADD THIS LINE - save BEFORE changing

    const row = Math.floor(index / State.GRID_SIZE);
    const col = index % State.GRID_SIZE;

    if (State.isEraserMode) {
      State.setCell(row, col, "");
    } else {
      State.setCell(row, col, State.currentChar);
    }

    this.update();
    State.lastDrawnCell = index;
  },
  // Update grid display
  update() {
    document.querySelectorAll(".cell").forEach((cell, index) => {
      cell.textContent = State.getCellByIndex(index);
    });
    Storage.saveGrid(State.grid);
  },

  // Clear the grid
  clear() {
    State.saveHistory();
    State.reset();
    this.update();
    UIUtils.highlightCell(null);
    Storage.clearGrid();
    UIUtils.showToast(window.t("gridCleared"));
  },

  // Add global event listeners
  _addGlobalListeners() {
    document.addEventListener("mouseup", () => {
      State.isDrawing = false;
      State.lastDrawnCell = null;
    });

    document.addEventListener("touchend", () => {
      State.isDrawing = false;
      State.lastDrawnCell = null;
    });
  },
};

/////////////////
// palette
/////////////////

const PaletteController = {
  // Initialize palette
  init() {
    const paletteElement = document.getElementById("palette");
    if (!paletteElement) return;

    PALETTE_CATEGORIES.forEach((category) => {
      const categoryDiv = this._createCategory(category);
      paletteElement.appendChild(categoryDiv);
    });
  },

  // Create a category section
  _createCategory(category) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "palette-category";

    const title = document.createElement("div");
    title.className = "palette-title";
    title.textContent = category.name;
    title.setAttribute("data-i18n", category.name);
    categoryDiv.appendChild(title);

    const charsDiv = document.createElement("div");
    charsDiv.className = "palette-chars";

    category.chars.forEach((char) => {
      const btn = this._createCharButton(char);
      charsDiv.appendChild(btn);
    });

    categoryDiv.appendChild(charsDiv);
    return categoryDiv;
  },

  // Create a character button
  _createCharButton(char) {
    const btn = document.createElement("button");
    btn.className = "char-btn";
    btn.textContent = char;
    btn.addEventListener("click", () => this.selectChar(char));
    return btn;
  },

  // Select a character
  selectChar(char) {
    State.currentChar = char;

    const currentCharDisplay = document.getElementById("currentCharDisplay");
    if (currentCharDisplay) {
      currentCharDisplay.textContent = char;
    }

    this._deactivateEraser();
    this._updateSelection(char);
  },

  // Toggle eraser mode
  toggleEraser() {
    State.isEraserMode = !State.isEraserMode;
    const eraserBtn = document.getElementById("eraserBtn");

    if (!eraserBtn) return;

    if (State.isEraserMode) {
      eraserBtn.classList.add("active");
      UIUtils.showToast("Eraser mode activated");
      this._deselectAllChars();
    } else {
      eraserBtn.classList.remove("active");
      UIUtils.showToast("Eraser mode deactivated");
      this.selectChar(State.currentChar);
    }
  },

  // Deactivate eraser mode
  _deactivateEraser() {
    State.isEraserMode = false;
    const eraserBtn = document.getElementById("eraserBtn");
    if (eraserBtn) {
      eraserBtn.classList.remove("active");
    }
  },

  // Update palette button selection
  _updateSelection(char) {
    document.querySelectorAll(".char-btn").forEach((btn) => {
      btn.classList.toggle("selected", btn.textContent === char);
    });
  },

  // Deselect all character buttons
  _deselectAllChars() {
    document.querySelectorAll(".char-btn").forEach((btn) => {
      btn.classList.remove("selected");
    });
  },
};

/////////////////
// keyboard
/////////////////

const KeyboardHandler = {
  _secretBuffer: [],
  _secretCode: "pen",

  // Initialize keyboard listeners
  init() {
    document.addEventListener("keydown", (e) => this._handleKeyDown(e));
    document.addEventListener("keyup", (e) => this._handleKeyUp(e));
  },

  _checkSecretCode(key) {
    if (key.length === 1 && key.match(/[a-z]/i)) {
      this._secretBuffer.push(key.toLowerCase());
      if (this._secretBuffer.length > 10) {
        this._secretBuffer.shift();
      }
      const recentKeys = this._secretBuffer.slice(-this._secretCode.length).join("");
      if (recentKeys === this._secretCode) {
        this._onSecretCodeDetected();
        this._secretBuffer = [];
      }
    }
  },

  _onSecretCodeDetected() {
    UIUtils.showToast("🖊️ PEN MODE ACTIVATED!");
    console.log("Secret code 'pen' detected!");

    // Activate pen mode (NEW CODE)
    if (typeof PenMode !== "undefined") {
      PenMode.activate();
    } else {
      console.error("PenMode module not loaded!");
    }
  },

  // Handle keydown events
  _handleKeyDown(e) {
    this._checkSecretCode(e.key);

    // Handle Shift key for drag-to-move mode
    if (e.key === "Shift") {
      State.isShiftPressed = true;
      this._showDragIndicator();
      return;
    }

    // Handle Undo (Cmd/Ctrl + Z)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && !e.shiftKey) {
      State.undo();
      GridController.update();
      UIUtils.showToast("Undo");
      e.preventDefault();
      return;
    }

    // Handle modal keyboard shortcuts
    if (this._isModalOpen("modalOverlay")) {
      this._handleModalKeys(e);
      return;
    }

    // Ensure a cell is selected
    if (State.selectedCell === null) {
      State.selectedCell = 0;
      UIUtils.highlightCell(0);
    }

    const row = Math.floor(State.selectedCell / State.GRID_SIZE);
    const col = State.selectedCell % State.GRID_SIZE;

    // Copy/Paste operations
    if (this._handleCopyPaste(e)) {
      return;
    }

    // Arrow key navigation
    if (this._handleArrowKeys(e, row, col)) {
      return;
    }

    // Delete/Backspace
    if (this._handleDelete(e, row, col)) {
      return;
    }

    // Space to place character
    if (this._handleSpace(e, row, col)) {
      return;
    }

    // Handle printable characters
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      PaletteController.selectChar(e.key);
      State.setCell(row, col, e.key);
      GridController.update();
      e.preventDefault();
    }
  },

  // Handle keyup events
  _handleKeyUp(e) {
    if (e.key === "Shift") {
      State.isShiftPressed = false;
      State.isDraggingToMove = false;
      this._hideDragIndicator();
    }
  },

  // Handle copy/paste operations
  _handleCopyPaste(e) {
    const key = e.key.toLowerCase();
    const isCtrlOrCmd = e.ctrlKey || e.metaKey;

    // C for copy (with or without Ctrl)
    if (key === "c" && (!isCtrlOrCmd || isCtrlOrCmd)) {
      CopyPaste.copy();
      e.preventDefault();
      return true;
    }

    // V for paste (with or without Ctrl)
    if (key === "v" && (!isCtrlOrCmd || isCtrlOrCmd)) {
      CopyPaste.paste();
      e.preventDefault();
      return true;
    }

    return false;
  },

  // Handle arrow key navigation
  _handleArrowKeys(e, row, col) {
    let newCell = null;

    if (e.key === "ArrowUp" && row > 0) {
      newCell = State.selectedCell - State.GRID_SIZE;
    } else if (e.key === "ArrowDown" && row < State.GRID_SIZE - 1) {
      newCell = State.selectedCell + State.GRID_SIZE;
    } else if (e.key === "ArrowLeft" && col > 0) {
      newCell = State.selectedCell - 1;
    } else if (e.key === "ArrowRight" && col < State.GRID_SIZE - 1) {
      newCell = State.selectedCell + 1;
    }

    if (newCell !== null) {
      State.selectedCell = newCell;
      UIUtils.highlightCell(newCell);
      e.preventDefault();
      return true;
    }

    return false;
  },

  // Handle delete/backspace
  _handleDelete(e, row, col) {
    if (e.key === "Backspace" || e.key === "Delete") {
      State.setCell(row, col, "");
      GridController.update();
      e.preventDefault();
      return true;
    }
    return false;
  },

  // Handle space bar
  _handleSpace(e, row, col) {
    if (e.key === " ") {
      if (State.isEraserMode) {
        State.setCell(row, col, "");
      } else {
        State.setCell(row, col, State.currentChar);
      }
      GridController.update();
      e.preventDefault();
      return true;
    }
    return false;
  },

  // Handle modal keyboard shortcuts
  _handleModalKeys(e) {
    if (e.key === "Enter") {
      SubmissionController.submit();
      e.preventDefault();
    } else if (e.key === "Escape") {
      ModalController.close();
      e.preventDefault();
    }
  },

  // Check if modal is open
  _isModalOpen(modalId) {
    const modal = document.getElementById(modalId);
    return modal && modal.classList.contains("show");
  },

  // Show drag-to-move indicator
  _showDragIndicator() {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.style.borderColor = "rgba(99, 248, 99, 0.3)";
      cell.style.borderWidth = ".5px";
      cell.style.borderStyle = "solid";
    });
  },

  // Hide drag-to-move indicator
  _hideDragIndicator() {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.style.borderColor = "";
      cell.style.borderWidth = "";
      cell.style.borderStyle = "";
    });
  },
};

//////////////
// copy paste
///////////////////

const CopyPaste = {
  // Copy cell content
  copy() {
    const cellIndex = State.hoveredCell !== null ? State.hoveredCell : State.selectedCell;

    if (cellIndex !== null) {
      State.copiedCell = State.getCellByIndex(cellIndex);
      State.currentChar = State.copiedCell || "";
      PaletteController.selectChar(State.currentChar);
      UIUtils.showToast(State.copiedCell ? `Copied: ${State.copiedCell}` : "Copied empty cell");
    } else {
      UIUtils.showToast("Hover over a cell first!");
    }
  },

  // Paste cell content
  paste() {
    if (State.copiedCell === null) {
      UIUtils.showToast("Nothing to paste! Copy a cell first.");
      return;
    }

    const cellIndex = State.hoveredCell !== null ? State.hoveredCell : State.selectedCell;

    if (cellIndex !== null) {
      State.setCellByIndex(cellIndex, State.copiedCell);
      State.currentChar = State.copiedCell;
      PaletteController.selectChar(State.currentChar);
      GridController.update();
      UIUtils.showToast(State.copiedCell ? `Pasted: ${State.copiedCell}` : "Pasted empty cell");
    } else {
      UIUtils.showToast("Hover over a cell first!");
    }
  },
};

// Context Menu Module
const ContextMenu = {
  element: null,

  // Show context menu
  show(event, cellIndex) {
    this.close();

    this.element = document.createElement("div");
    this.element.className = "context-menu";
    this.element.style.top = event.clientY + "px";
    this.element.style.left = event.clientX + "px";

    const copyBtn = this._createButton("Copy (C)", () => this._handleCopy(cellIndex));
    const pasteBtn = this._createButton("Paste (V)", () => this._handlePaste(cellIndex), State.copiedCell === null);
    const clearBtn = this._createButton("Clear (X)", () => this._handleClear(cellIndex));

    this.element.appendChild(copyBtn);
    this.element.appendChild(pasteBtn);
    this.element.appendChild(clearBtn);

    document.body.appendChild(this.element);

    setTimeout(() => {
      document.addEventListener("click", () => this.close());
    }, 0);
  },

  // Close context menu
  close() {
    if (this.element) {
      this.element.remove();
      this.element = null;
    }
    document.removeEventListener("click", () => this.close());
  },

  // Create menu button
  _createButton(text, onClick, disabled = false) {
    const btn = document.createElement("button");
    btn.className = "context-menu-item";
    btn.textContent = text;
    btn.disabled = disabled;

    if (!disabled) {
      btn.onclick = () => {
        onClick();
        this.close();
      };
    }

    return btn;
  },

  // Handle copy action
  _handleCopy(cellIndex) {
    State.copiedCell = State.getCellByIndex(cellIndex);
    State.currentChar = State.copiedCell || "";
    PaletteController.selectChar(State.currentChar);
    UIUtils.showToast(State.copiedCell ? `Copied: ${State.copiedCell}` : "Copied empty cell");
  },

  // Handle paste action
  _handlePaste(cellIndex) {
    if (State.copiedCell !== null) {
      State.setCellByIndex(cellIndex, State.copiedCell);
      State.currentChar = State.copiedCell;
      PaletteController.selectChar(State.currentChar);
      GridController.update();
      UIUtils.showToast(State.copiedCell ? `Pasted: ${State.copiedCell}` : "Pasted empty cell");
    }
  },

  // Handle clear action
  _handleClear(cellIndex) {
    State.setCellByIndex(cellIndex, "");
    GridController.update();
    UIUtils.showToast("Cleared cell");
  },
};

/////////////////
// example loader
/////////////////

// Example Loader Module
const ExampleLoader = {
  // Load a random example
  loadRandom() {
    const exampleBtn = document.querySelector(".btn-copy");
    if (exampleBtn) {
      exampleBtn.classList.remove("first-time");
      Storage.set(Storage.keys.EXAMPLE_CLICKED, "true");
    }

    const randomIndex = Math.floor(Math.random() * TORONTO_BUILDINGS.length);
    const example = TORONTO_BUILDINGS[randomIndex];

    this.loadSpecific(example);

    const artistName = example.artist || this._getRandomHandle();
    UIUtils.showToast(`${window.t("loadedExample")}${example.name} by ${artistName}!`);
  },

  // Load a specific example
  loadSpecific(building) {
    State.initializeGrid();

    const startRow = State.GRID_SIZE - building.art.length;

    building.art.forEach((line, artRowIndex) => {
      const gridRowIndex = startRow + artRowIndex;
      for (let colIndex = 0; colIndex < State.GRID_SIZE; colIndex++) {
        const char = line[colIndex] || "";
        State.setCell(gridRowIndex, colIndex, char === " " ? "" : char);
      }
    });

    GridController.update();
    State.selectedCell = null;
    UIUtils.highlightCell(null);
  },

  // Get a random cute handle
  _getRandomHandle() {
    const handles = [
      "anonymous_panda",
      "cosmic_koala",
      "digital_bunny",
      "pixel_penguin",
      "creative_owl",
      "melody_kitten",
      "sunny_fox",
      "starry_sloth",
    ];
    return handles[Math.floor(Math.random() * handles.length)];
  },
};

// Gallery Module
const Gallery = {
  // Populate the gallery with recent buildings
  populate() {
    const galleryElement = document.getElementById("galleryScroll");
    if (!galleryElement) return;

    const recentBuildings = TORONTO_BUILDINGS.slice(-60).reverse();

    recentBuildings.forEach((building) => {
      const item = this._createGalleryItem(building);
      galleryElement.appendChild(item);
    });
  },

  // Create a single gallery item
  _createGalleryItem(building) {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const buildingDiv = BuildingRenderer.renderGalleryItem(building, State.GRID_SIZE);

    const infoDiv = this._createInfoSection(building);

    item.appendChild(buildingDiv);
    item.appendChild(infoDiv);

    item.onclick = () => {
      ExampleLoader.loadSpecific(building);
      UIUtils.showToast(`Loaded: ${building.name}`);
    };

    return item;
  },

  // Create info section for gallery item
  _createInfoSection(building) {
    const infoDiv = document.createElement("div");
    infoDiv.className = "gallery-info";

    const buildingName = document.createElement("div");
    buildingName.className = "gallery-building-name";
    buildingName.textContent = building.name;

    const artistName = document.createElement("div");
    artistName.className = "gallery-artist-name";
    artistName.textContent = `by ${building.artist || "Anonymous"}`;

    infoDiv.appendChild(buildingName);
    infoDiv.appendChild(artistName);

    return infoDiv;
  },
};

// submission

// Modal Controller Module
const ModalController = {
  // Open the submission modal
  open() {
    UIUtils.clearValidationErrors();

    const previewContainer = document.getElementById("buildingPreview");
    BuildingRenderer.renderPreview(State.grid, "buildingPreview");

    UIUtils.showModal("modalOverlay");

    setTimeout(() => {
      const nameInput = document.getElementById("modalBuildingName");
      if (nameInput) nameInput.focus();
    }, 100);
  },

  // Close the modal
  close() {
    UIUtils.hideModal("modalOverlay");

    const nameInput = document.getElementById("modalBuildingName");
    const artistInput = document.getElementById("modalArtistName");

    if (nameInput) nameInput.value = "";
    if (artistInput) artistInput.value = "";

    UIUtils.clearValidationErrors();
  },
};

// Submission Controller Module
const SubmissionController = {
  // Submit the building
  submit() {
    UIUtils.clearValidationErrors();

    let buildingName = UIUtils.getInputValue("modalBuildingName");
    let artistName = UIUtils.getInputValue("modalArtistName");

    if (!this._validate(buildingName, artistName)) {
      return;
    }

    // Format names
    buildingName = buildingName.replace(/\s+/g, "_").toUpperCase();
    artistName = artistName.replace(/\s+/g, "_");

    // Store for sharing
    State.currentBuildingInfo.name = buildingName;
    State.currentBuildingInfo.artist = artistName;

    const formattedObject = BuildingRenderer.formatForSubmission(State.grid, buildingName, artistName, State.GRID_SIZE);

    this._submitToGoogleForm(buildingName, artistName, formattedObject);
  },

  // Validate form inputs
  _validate(buildingName, artistName) {
    let hasError = false;

    if (!buildingName) {
      UIUtils.setTextContent("buildingNameError", window.t("enterBuildingName"));
      const nameInput = document.getElementById("modalBuildingName");
      if (nameInput) nameInput.focus();
      hasError = true;
    } else if (buildingName.length > 30) {
      UIUtils.setTextContent("buildingNameError", window.t("buildingNameTooLong"));
      const nameInput = document.getElementById("modalBuildingName");
      if (nameInput) nameInput.focus();
      hasError = true;
    }

    if (!artistName) {
      UIUtils.setTextContent("artistNameError", window.t("enterArtistName"));
      if (!hasError) {
        const artistInput = document.getElementById("modalArtistName");
        if (artistInput) artistInput.focus();
      }
      hasError = true;
    } else if (artistName.length > 30) {
      UIUtils.setTextContent("artistNameError", window.t("artistNameTooLong"));
      if (!hasError) {
        const artistInput = document.getElementById("modalArtistName");
        if (artistInput) artistInput.focus();
      }
      hasError = true;
    }

    return !hasError;
  },

  // Submit to Google Form
  _submitToGoogleForm(buildingName, artistName, formattedObject) {
    const formData = new URLSearchParams();
    formData.append("entry.1432455807", "Montreal");
    formData.append("entry.540203602", buildingName);
    formData.append("entry.1023700221", artistName);
    formData.append("entry.1869243340", formattedObject);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSeI6SFIJq0mfRlNYxAKm-36wQas02aU5HM4EyQZiIhEKZhdag/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        ModalController.close();
        ShareController.showOptions();
      })
      .catch((error) => {
        ModalController.close();
        UIUtils.showToast(window.t("submitFailed"));
        console.error("Submission error:", error);
      });
  },
};

/////////////////
// share
/////////////////
// Share Controller Module
const ShareController = {
  // Show share options modal
  async showOptions() {
    BuildingRenderer.renderSharePreview(State.grid, "shareBuildingPreview");

    UIUtils.showModal("shareModalOverlay");

    UIUtils.setTextContent("shareCardBuildingName", State.currentBuildingInfo.name);
    UIUtils.setTextContent("shareCardArtistName", `by ${State.currentBuildingInfo.artist}`);

    const shareCard = this._createShareCard();
    const container = document.getElementById("shareCardContainer");
    container.innerHTML = "";
    container.appendChild(shareCard);
    container.classList.remove("hidden");

    await new Promise((resolve) => setTimeout(resolve, 100));

    try {
      const canvas = await html2canvas(shareCard, {
        backgroundColor: "#0a0202",
        scale: 2,
        logging: false,
        useCORS: true,
      });

      const imageDataUrl = canvas.toDataURL("image/png");
      container.classList.add("hidden");

      this._createShareButtons(imageDataUrl);
      UIUtils.showToast("Image generated successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      container.classList.add("hidden");
      UIUtils.showToast("Error creating image - text sharing still available");
      this._createShareButtons(null);
    }
  },

  // Close share modal
  close() {
    UIUtils.hideModal("shareModalOverlay");
    ExampleLoader.loadRandom();
  },

  // Create share card for screenshot
  _createShareCard() {
    const card = document.createElement("div");
    card.className = "share-card";

    const buildingDisplay = document.createElement("div");
    buildingDisplay.className = "share-card-building-display";

    const buildingArt = document.createElement("div");
    buildingArt.className = "share-card-building-art";

    const trimmedGrid = BuildingRenderer.trimGrid(State.grid);
    const emptyRows = State.GRID_SIZE - trimmedGrid.length;
    const fullGrid = [
      ...Array(emptyRows)
        .fill()
        .map(() => Array(State.GRID_SIZE).fill("")),
      ...trimmedGrid,
    ];

    BuildingRenderer.render(fullGrid, buildingArt, { fontSize: "18px" });

    buildingDisplay.appendChild(buildingArt);
    card.appendChild(buildingDisplay);

    const buildingName = document.createElement("div");
    buildingName.className = "share-card-building-name";
    buildingName.textContent = State.currentBuildingInfo.name || "BUILDING";
    card.appendChild(buildingName);

    const artistName = document.createElement("div");
    artistName.className = "share-card-artist-name";
    artistName.textContent = `by ${State.currentBuildingInfo.artist || "Anonymous"}`;
    card.appendChild(artistName);

    const footer = document.createElement("div");
    footer.className = "share-card-footer";
    footer.textContent = "omarieclaire.github.io/loserlanemontreal";
    card.appendChild(footer);

    return card;
  },

  // Create share buttons
  _createShareButtons(imageDataUrl) {
    const container = document.getElementById("shareButtonsContainer");
    if (!container) return;

    container.innerHTML = "";

    const shareUrl = "https://omarieclaire.github.io/loserlanemontreal/";
    const shareText = `${window.t("buildingShareText")} "${State.currentBuildingInfo.name}" ${window.t("buildingShareTextEnd")}`;

    // Native share button
    if (navigator.share) {
      const shareBtn = this._createNativeShareButton(imageDataUrl, shareText, shareUrl);
      container.appendChild(shareBtn);
    }

    // Download button
    if (imageDataUrl) {
      const downloadBtn = this._createDownloadButton(imageDataUrl);
      container.appendChild(downloadBtn);
    }

    // Copy text button
    const copyBtn = this._createCopyTextButton(shareText, shareUrl);
    container.appendChild(copyBtn);
  },

  // Create native share button
  _createNativeShareButton(imageDataUrl, shareText, shareUrl) {
    const btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.textContent = window.t("shareButton");

    btn.onclick = async () => {
      try {
        if (imageDataUrl) {
          const response = await fetch(imageDataUrl);
          const blob = await response.blob();
          const file = new File([blob], `${State.currentBuildingInfo.name}-loserLane.png`, { type: "image/png" });

          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: "LoserLane Building",
              text: shareText,
              files: [file],
            });
          } else {
            await navigator.share({
              title: "LoserLane Building",
              text: `${shareText}\n\n${shareUrl}`,
            });
          }
        } else {
          await navigator.share({
            title: "LoserLane Building",
            text: `${shareText}\n\n${shareUrl}`,
          });
        }
        UIUtils.showToast(window.t("sharedSuccess"));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Share failed:", err);
        }
      }
    };

    return btn;
  },

  // Create download button
  _createDownloadButton(imageDataUrl) {
    const btn = document.createElement("button");
    btn.className = "btn btn-secondary";
    btn.textContent = window.t("downloadButton");

    btn.onclick = () => {
      const link = document.createElement("a");
      link.download = `${State.currentBuildingInfo.name}-loserLane.png`;
      link.href = imageDataUrl;
      link.click();
      UIUtils.showToast(window.t("downloadSuccess"));
    };

    return btn;
  },

  // Create copy text button
  _createCopyTextButton(shareText, shareUrl) {
    const btn = document.createElement("button");
    btn.className = "btn btn-secondary";
    btn.textContent = window.t("copyTextButton");

    btn.onclick = () => {
      const textToCopy = `${shareText}\n\n${shareUrl}`;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          UIUtils.showToast(window.t("copiedSuccess"));
        })
        .catch(() => {
          UIUtils.showToast(window.t("copyFailed"));
        });
    };

    return btn;
  },
};

/////////////////
// language
/////////////////

const LanguageController = {
  // Initialize language system
  init() {
    this._buildLookup();
    this._setupToggle();
    this.update();
  },

  // Build translation lookup objects
  _buildLookup() {
    window.LANG = {
      en: {},
      fr: {},
    };

    TRANSLATIONS.forEach((item) => {
      window.LANG.en[item.key] = item.en;
      window.LANG.fr[item.key] = item.fr;
    });
  },

  // Setup language toggle button
  _setupToggle() {
    const langToggle = document.getElementById("lang-toggle");
    if (!langToggle) return;

    langToggle.textContent = State.currentLang === "en" ? "FR" : "EN";

    langToggle.addEventListener("click", () => {
      State.currentLang = State.currentLang === "en" ? "fr" : "en";
      Storage.setLanguage(State.currentLang);
      location.reload();
    });
  },

  // Update all translatable elements
  update() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (window.LANG[State.currentLang][key]) {
        element.textContent = window.LANG[State.currentLang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (window.LANG[State.currentLang][key]) {
        element.placeholder = window.LANG[State.currentLang][key];
      }
    });
  },

  // Translation function
  translate(key) {
    return window.LANG[State.currentLang][key] || key;
  },
};

// Global translation function
window.t = (key) => LanguageController.translate(key);

/////////////////
// main
/////////////////

const App = {
  // Initialize the application
  init() {
    this._setupTheme();
    this._initializeModules();
    this._loadInitialData();
    this._setupEventListeners();
    this._showLandscapeHint();
  },

  // Setup theme color
  _setupTheme() {
    const THEME_COLOR = COLOURS.BUILDINGGEN[Math.floor(Math.random() * COLOURS.BUILDINGGEN.length)];
    document.documentElement.style.setProperty("--theme-color", THEME_COLOR);
    document.documentElement.style.setProperty("--theme-color-alpha", THEME_COLOR);
  },

  // Initialize all modules
  _initializeModules() {
    LanguageController.init();
    GridController.init();
    PaletteController.init();
    KeyboardHandler.init();
    Gallery.populate();
    PaletteController.selectChar(State.currentChar);
  },

  // Load initial data
  _loadInitialData() {
    const loaded = Storage.loadGrid(State.GRID_SIZE);

    if (loaded) {
      State.grid = loaded;
      GridController.update();
    } else {
      GridController.update();
      ExampleLoader.loadRandom();
    }

    this._checkExampleButton();
  },

  // Check if example button should be highlighted
  _checkExampleButton() {
    const exampleBtn = document.querySelector(".btn-copy");
    if (exampleBtn && !Storage.get(Storage.keys.EXAMPLE_CLICKED)) {
      exampleBtn.classList.add("first-time");
    }
  },

  // Setup global event listeners
  _setupEventListeners() {
    // Click outside modals to close
    const modalOverlay = document.getElementById("modalOverlay");
    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target.id === "modalOverlay") {
          ModalController.close();
        }
      });
    }

    const shareModalOverlay = document.getElementById("shareModalOverlay");
    if (shareModalOverlay) {
      shareModalOverlay.addEventListener("click", (e) => {
        if (e.target.id === "shareModalOverlay") {
          ShareController.close();
        }
      });
    }

    // Info popup close on outside click
    document.addEventListener("click", (e) => {
      const popup = document.getElementById("info-popup");
      const button = document.getElementById("info-toggle");

      if (popup && button && popup.classList.contains("show")) {
        if (!popup.contains(e.target) && e.target !== button) {
          popup.classList.remove("show");
        }
      }
    });
  },

  // Show landscape hint for mobile
  _showLandscapeHint() {
    window.addEventListener("load", () => {
      UIUtils.showLandscapeHint(window.t);
    });
  },
};

// Global functions (for HTML onclick handlers)
window.clearGrid = () => GridController.clear();
window.toggleEraser = () => PaletteController.toggleEraser();
window.loadRandomExample = () => ExampleLoader.loadRandom();
window.addToGame = () => ModalController.open();
window.closeModal = () => ModalController.close();
window.submitBuilding = () => SubmissionController.submit();
window.closeShareModal = () => ShareController.close();
window.toggleInfo = () => UIUtils.toggleInfo();
window.closeInfo = () => UIUtils.closeInfo();

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
