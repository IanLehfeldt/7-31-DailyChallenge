$(document).ready(function () {
    console.log('Script.js is sourced!!');
    clickCounter = 0;

    $('body').on('click', '.delete',  function () {
        console.log('delete button clicked');
        $(this).parent().remove();
    });

    $('body').on('click', '.swap', function () {
        console.log('swap button clicked');
        $(this).parent().toggleClass('yellowDiv');
    });

    $('#create').on('click', function () {
        $('body').append('<div> <p>' + clickCounter++ 
        + '</p><button class="swap">Swap</button> ' 
        + ' <button class="delete">Delete</button></div>');
    });
});