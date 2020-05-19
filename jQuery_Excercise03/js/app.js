$('#flashMessage').hide();

$('#previewButton').click(function(){
   const title = $('#blogTitleInput').val();//when the user inter a value the Val works
   const content = $('#blogContentInput').val();

   $('#blogTitlePreview').text(title);
   $('#blogContentPreview').html(content);

// $('#flashMessage').hide();
// $('#flashMessage').slideDown(1000);
// $('#flashMessage').delay(3000);
// $('#flashMessage').slideUp;

// or you can type 
$('#flashMessage').slideDown(1000).delay(3000).slideUp();

});