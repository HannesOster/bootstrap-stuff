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

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(progressBar, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0