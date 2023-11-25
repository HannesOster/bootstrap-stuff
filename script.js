document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('#progress-btn');
    let progressBar = document.querySelector('.progress-bar');
    let successAlert = document.querySelector('.alert-success'); 

    button.addEventListener('click', function() {
        var currentProgress = parseInt(progressBar.style.width) || 0;
        var newProgress = currentProgress + 10;
        newProgress = Math.min(newProgress, 100);
        progressBar.style.width = newProgress + '%';
        progressBar.innerHTML = newProgress + '%';
        if (newProgress === 100) {
            successAlert.removeAttribute('hidden');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const pushButton = document.querySelector('#delay-button'); 

    pushButton.addEventListener('click', function(event) {
        event.preventDefault();
        pushButton.style.backgroundColor = 'white';
        pushButton.innerHTML = '<span class="spinner-border spinner-border-sm text-primary" role="status" aria-hidden="true"></span> Loading...';

        setTimeout(function() {
            pushButton.innerHTML = 'Push me!';
            pushButton.style.backgroundColor = '';
            
        }, 5000);
    });
});

