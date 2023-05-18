window.addEventListener('DOMContentLoaded', () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.extension.getURL('styles.css');
    document.head.appendChild(link);
  });