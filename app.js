if ('serviceworker' in navigator) {
    navigator.serviceworker.register
        ('service.worker.js');
}
document.querySelector('body').innerHTML = "FUNCIONANDO"