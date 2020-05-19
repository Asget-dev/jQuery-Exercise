//Hide the spoiler text
//when the button is pressed
//show the spoiler text
//hide the "Riveal spoiler" button

//even if the browser dosn't support a javascript the two metoed works
//append() adding element after the DOM
//prepend() adding element before the DOM



//create the button 
const $button = $('<button> Reveal Spoiler</button>')
//append to web page
$('.spoiler').append($button);


//Hide the spoiler text
$('.spoiler span').hide();
//when the button is pressed
$('.spoiler button').click(function(){

    //show the spoiler text
    $('.spoiler span').show();
    //hide the button
    $('.spoiler button').hide();
});










