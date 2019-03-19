if ('serviceworker' in navigator) {
    navigator.serviceWorker.register
        ('service.worker.js');
}
document.querySelector('body').innerHTML = "ola mundinho"