(() => {
    const mount = document.querySelector('[data-site-footer]');
    if (!mount) return;

    fetch('/footer.html')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Footer request failed: ${response.status}`);
            }

            return response.text();
        })
        .then((html) => {
            mount.outerHTML = html;
        })
        .catch((error) => {
            console.error('Failed to load shared footer.', error);
        });
})();
