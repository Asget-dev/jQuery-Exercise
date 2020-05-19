$('#flashMessage').hide();
$('#flashMessage').slideDown(1000);
$('#flashMessage').delay(3000);
$('#flashMessage').slideUp;

//or you can type like thise
// $('#flashMessage').hide().slideDown(1000).delay(3000).slideUp;


const title = "My First Blog Post";
const content = "This is my <strong>first</strong> post!";

$('#blogTitlPreview').text(title);
$('#blogContentPreview').html(content);

or
// $('#blogTitlPreview').text("My First Blog Post");
// $('#blogContentPreview').text("This is my first post!");