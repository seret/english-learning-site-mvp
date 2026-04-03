// Performance monitoring script for English Learning Site
// This script can be run as a GitHub Action or standalone

const { performance } = window;

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      pageLoadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
      totalBblockingTime: 0
    };
  }

  start() {
    if ('performance' in window) {
      this.collectMetrics();
      this.setupObservers();
      this.sendToAnalytics();
    }
  }

  collectMetrics() {
    const entries = performance.getEntriesByType('navigation');
    if (entries.length > 0) {
      const nav = entries[0];
      this.metrics.pageLoadTime = nav.loadEventEnd - nav.loadEventStart;
    }

    const paintEntries = performance.getEntriesByType('paint');
    paintEntries.forEach((entry) => {
      if (entry.name === 'first-paint') {
        this.metrics.firstContentfulPaint = Math.round(entry.startTime);
      }
      if (entry.name === 'largest-contentful-paint') {
        this.metrics.largestContentfulPaint = Math.round(entry.startTime);
      }
    });

    const layoutEntries = performance.getEntriesByType('layout-shift');
    layoutEntries.forEach((entry) => {
      if (!entry.hadShifted) return;
      this.metrics.cumulativeLayoutShift += entry.value;
    });

    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      this.metrics.firstInputDelay = Math.round(fidEntries[0].startTime);
      this.metrics.totalBblockingTime = Math.round(fidEntries[0].duration);
    }
  }

  setupObservers() {
    // Observe for Core Web Vitals
    const observer = new PerformanceObserver((entries) => {
      entries.forEach((entry) => {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            this.metrics.largestContentfulPaint = Math.round(entry.startTime);
            break;
          case 'first-input':
            this.metrics.firstInputDelay = Math.round(entry.startTime);
            this.metrics.totalBblockingTime = Math.round(entry.duration);
            break;
          case 'layout-shift':
            if (entry.hasShifted) {
              this.metrics.cumulativeLayoutShift += entry.value;
            }
            break;
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }

  sendToAnalytics() {
    // Integrate with Google Analytics or similar service
    console.log('Performance metrics:', this.metrics);
    
    // Example: Send to Google Analytics
    if (typeof gtag === 'function') {
      gtag('event', 'performance_metrics', {
        page_load_time: this.metrics.pageLoadTime,
        first_contentful_paint: this.metrics.firstContentfulPaint,
        largest_contentful_paint: this.metrics.largestContentfulPaint,
        cumulative_layout_shift: this.metrics.cumulativeLayoutShift,
        first_input_delay: this.metrics.firstInputDelay,
        total_blocking_time: this.metrics.totalBblockingTime
      });
    }
  }
}

// Export for use in React application
export default new PerformanceMonitor();

// Auto-start if included directly in browser
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const monitor = new PerformanceMonitor();
    monitor.start();
  });
}