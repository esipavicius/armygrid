export function reloadDocumentLazyImages() {
    document.querySelectorAll('img').forEach(img => {
        if (img.classList.contains('lazyloaded')) {
            img.classList.remove('lazyloaded');
            img.classList.add('lazyload');
        }
    });
}