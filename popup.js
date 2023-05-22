function captureFullScreen() {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, function(dataUrl) {
      const screenshotPreview = document.getElementById('screenshot-preview');
      screenshotPreview.src = dataUrl;
      screenshotPreview.style.display = 'inline'; // Show the preview container
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const captureFullScreenBtn = document.getElementById('capture-fullscreen');
    captureFullScreenBtn.addEventListener('click', captureFullScreen);
  
    const screenshotPreview = document.getElementById('screenshot-preview');
    screenshotPreview.style.display = 'none'; // Hide the preview container initially
  });
  