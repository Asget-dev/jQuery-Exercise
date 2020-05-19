//using Events with Dynamically Added Elements


$('.spoiler').on('click', 'button',function(){
    //show the spoiler text
    $('.spoiler span').show();
    //hide the button
    $('.spoiler button').hide();
})
//create the button 
const $button = $('<button> Reveal Spoiler</button>');
//append to web page
$('.spoiler').append($button);

//Hide the spoiler text
$('.spoiler span').hide();






