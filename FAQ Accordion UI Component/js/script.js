// Update the share result display in script.js
if (navigator.share) {
    await navigator.share({
        title: title,
        text: text,
        url: url
    });
    shareResult.innerHTML = `
        <div class="success-message">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p>Content shared successfully!</p>
        </div>
    `;
} else {
    shareResult.innerHTML = `
        <div class="error-message">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>Web Share API not supported in your browser.</p>
            <p>Try this in Chrome on Android or Safari on iOS.</p>
            <div class="social-fallback">
                <button class="social-share" data-platform="twitter">Share on Twitter</button>
                <button class="social-share" data-platform="facebook">Share on Facebook</button>
            </div>
        </div>
    `;
}