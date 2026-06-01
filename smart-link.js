// Smart App Store Link Routing + Non-iOS Detection
(function () {
  'use strict';

  var APP_STORE_URL = 'https://apps.apple.com/app/id0000000000';

  function isIOS() {
    return /iPhone|iPad|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  function isMac() {
    return /Macintosh|MacIntel/.test(navigator.userAgent || navigator.platform);
  }

  // Show non-iOS banner for Android/Windows users
  function showNonIOSBanner() {
    var banner = document.querySelector('.non-ios-banner');
    if (banner) {
      banner.style.display = 'block';
    }
  }

  // Detect platform on load
  if (!isIOS() && !isMac()) {
    document.addEventListener('DOMContentLoaded', showNonIOSBanner);
  }

  // Handle smart link clicks
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-smartlink]');
    if (!link) return;

    e.preventDefault();

    if (isIOS()) {
      window.location.href = APP_STORE_URL;
    } else if (isMac()) {
      window.open(APP_STORE_URL, '_blank');
    } else {
      showNonIOSBanner();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
})();
