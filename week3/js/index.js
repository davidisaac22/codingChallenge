$(document).ready(function() {
    $('.question').click(function() {
        $(this).toggleClass('active');
        const answer = $(this).next('.answer');
        if ($(this).hasClass('active')) {
            answer.addClass('active');
        } else {
            answer.removeClass('active');
        }
    });
});