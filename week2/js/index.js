$(document).ready(function() {
    var rateBtns = $('.flex_btn a');
    var activeCount = 0;

    function handleButtonClick(event) {
        event.preventDefault(); 
        $(this).toggleClass('active');
        activeCount = $('.active').length; 
        updateResult();
    }

    rateBtns.click(handleButtonClick);

    function updateResult() {
        console.log(activeCount)
        $('.result').text('You selected ' + activeCount + ' out of 5.');
    }

    $('#enterButton').click(function() {
        $('.content_prev').removeClass('hide');
        $('.content_box').addClass('hide'); 
        updateResult();
    });
});