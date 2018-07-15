Reveal.addEventListener('demo-modal', function() {
    var mModalBtn = $('.m-modal-btn'),
        dModalBtn = $('.d-modal-btn'),
        mModal = $('.m-modal'),
        dModal = $('.d-modal'),
        ixFrame = $('#ix-frame');
    mModalBtn.on('click', function() {
        mModal.addClass('open');
    });
    dModalBtn.on('click', function() {
        dModal.addClass('open');
    });
    mModal.on('click', function() {
        mModal.removeClass('open');
    });
    dModal.on('click', function() {
        dModal.removeClass('open');
    });
    ixFrame.on('click', function(e) {
        e.stopPropagation();
    });
});

Reveal.addEventListener('hack1-trigger', function() {
    $('#hack-1').html('<script async src="//jsfiddle.net/psdmac/eg37z6x2/50/embed/html,result/dark/"></script>');
});

Reveal.addEventListener('hack2-trigger', function() {
    $('#hack-2').html('<script async src="//jsfiddle.net/psdmac/m3dae2f7/46/embed/html,result/dark/"></script>');
});

Reveal.addEventListener('hack3-trigger', function() {
    $('#hack-3').html('<script async src="//jsfiddle.net/psdmac/tcobrw71/7/embed/html/dark/"></script>');
});

