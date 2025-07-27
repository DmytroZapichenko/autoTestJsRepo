// playwright.config.js
module.exports = {
    use: {
      browserName: 'chromium',
      headless: false, 
      viewport: { width: 1280, height: 720 }, 
    },
    projects: [
      {
        name: 'chromium',
        use: { browserName: 'chromium' },
      },
    ],
  };