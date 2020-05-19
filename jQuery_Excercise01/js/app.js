const box = document.querySelector('.box');
// box.style.display = "none";



box.addEventListener('click', function(){
    alert('You clicked me!');
});

//or
$('.box').click(function(){
    alert('You clicked me');
});

JQuery('.box').hide();
$('.box').hide;
$('.box').show;