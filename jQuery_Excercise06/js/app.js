//using Events(this) Object and DOM Traversal with Dynamically Added Elements


$('.spoiler').on('click', 'button',function(event){
    //show the spoiler text
    $(event.target).prev().show();
    //hide the button
    $(event.target).hide();//or we can type $(this).hide();
})

//create the button 
const $button = $('<button> Reveal Spoiler</button>');
//append to web page
$('.spoiler').append($button);

//Hide the spoiler text
$('.spoiler span').hide();
