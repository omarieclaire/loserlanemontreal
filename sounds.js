class SoundManager {
  constructor() {
    this.sounds = new Map();
    this.isMuted = false;
    this.globalVolume = 1.0;
    this.isInitialized = false;
    this.muteKey = "m";
    this.loadSettings();
    this.setupKeyListener();
  }

  // Initialize audio context on first user interaction
  initializeAudio() {
    if (this.isInitialized) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioContext = new AudioContext();
      }
      this.isInitialized = true;
      console.log("Audio initialized successfully");
    } catch (error) {
      console.error("Failed to initialize audio:", error);
    }
  }

updateMuteButton() {
  const muteButton = document.getElementById("mute-button");
  if (muteButton) {
    if (this.isMuted) {
      muteButton.classList.add("muted");
    } else {
      muteButton.classList.remove("muted");
    }
  }
}

// Add this method to get language from your game
getCurrentLanguage() {
  // You'll need to hook this up to your language system
  // For now, check the lang toggle button
  const langButton = document.getElementById("lang-toggle");
  if (langButton) {
    return langButton.textContent === 'FR' ? 'en' : 'fr';
  }
  return 'en';
}

  // Add a sound to the manager
  addSound(name, src, loop = false) {
    console.log(`Adding sound: ${name} from ${src}`);
    const audio = new Audio();

    audio.addEventListener("loadeddata", () => {
      console.log(`Sound loaded: ${name}`);
    });

    audio.addEventListener("error", (e) => {
      console.error(`Failed to load sound ${name}:`, e);
    });

    audio.loop = loop;
    audio.volume = this.globalVolume;
    audio.src = src;
    this.sounds.set(name, audio);
  }

  play(name, volume = null) {
    // Initialize on first play
    if (!this.isInitialized) {
      this.initializeAudio();
    }

    const sound = this.sounds.get(name);
    if (!sound) {
      console.error(`Sound '${name}' not found.`);
      return;
    }

    if (this.isMuted) {
      console.log(`Sound '${name}' muted`);
      return;
    }

    // Set volume - use provided volume or fall back to global volume
    if (volume !== null) {
      sound.volume = Math.min(Math.max(volume, 0), 1) * this.globalVolume;
    } else {
      sound.volume = this.globalVolume;
    }

    sound.currentTime = 0;

    sound
      .play()
      .then(() => console.log(`Playing sound: ${name} at volume ${sound.volume}`))
      .catch((error) => console.error(`Error playing sound '${name}':`, error));
  }

  playRandomSound(soundArray, volume = null) {
    if (!Array.isArray(soundArray) || soundArray.length === 0) {
      console.error("Invalid sound array provided");
      return;
    }

    const randomSound = soundArray[Math.floor(Math.random() * soundArray.length)];
    this.play(randomSound, volume);
  }

  // Stop a sound by name
  stop(name) {
    const sound = this.sounds.get(name);
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  }

  // Set the global volume
  setGlobalVolume(volume) {
    this.globalVolume = Math.min(Math.max(volume, 0), 1);
    this.sounds.forEach((sound) => (sound.volume = this.globalVolume));
    this.saveSettings();
  }

muteAll() {
    this.isMuted = true;
    // Pause any currently playing sounds
    this.sounds.forEach((sound) => {
      if (!sound.paused) {
        sound.pause();
      }
    });
    this.saveSettings();
    this.updateMuteButton(); // Update button here too
  }

  // Unmute all sounds
  unmuteAll() {
    this.isMuted = false;
    this.saveSettings();
    this.updateMuteButton(); // Update button here too
  }

  toggleMute() {
    this.isMuted ? this.unmuteAll() : this.muteAll();
  }

  setupMuteButton() {
    const muteButton = document.getElementById("mute-button");
    if (muteButton) {
      this.updateMuteButton(); // Set initial state
      muteButton.addEventListener("click", () => this.toggleMute());
    }
  }
  // Reset all sounds
  resetAll() {
    this.sounds.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  }

  // Load saved settings
  loadSettings() {
    const savedVolume = localStorage.getItem("globalVolume");
    const savedMutedState = localStorage.getItem("isMuted");
    if (savedVolume) this.globalVolume = parseFloat(savedVolume);
    if (savedMutedState) this.isMuted = savedMutedState === "true";
  }

  // Save settings to localStorage
  saveSettings() {
    localStorage.setItem("globalVolume", this.globalVolume);
    localStorage.setItem("isMuted", this.isMuted);
  }

  // Set up key listener for mute toggle
  setupKeyListener() {
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === this.muteKey) {
        this.toggleMute();
      }
    });
  }
}
