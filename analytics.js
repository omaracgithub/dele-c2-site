// GA4 CTA + Outbound Click Tracker for DELE C2 site
(function () {
  'use strict';

  function trackEvent(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  // Track all CTA clicks (App Store links)
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link) return;

    var href = link.href || '';

    // App Store CTA clicks
    if (href.includes('apps.apple.com') || href.includes('itunes.apple.com')) {
      trackEvent('cta_click', {
        link_url: href,
        link_text: link.textContent.trim().substring(0, 50),
        page_location: window.location.pathname
      });
    }

    // Outbound link clicks
    if (link.hostname && link.hostname !== window.location.hostname) {
      trackEvent('outbound_click', {
        link_url: href,
        link_domain: link.hostname,
        page_location: window.location.pathname
      });
    }
  });
})();
