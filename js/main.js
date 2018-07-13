$(document).ready(function() {
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

    $('.close-modal-btn').on('click', function() {
        mModal.removeClass('open');
        dModal.removeClass('open');
    });
})