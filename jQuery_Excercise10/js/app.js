// jQuery changing style and classes property Getter and Setter
//use JjQuery methods like css() addClass() and removeClass() to change the look of DOM element
const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');//^ start with
const $pdfs = $('a[href$=".pdf"]');//matched at the end .pdf
const $pdfCheckBox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

$secureLinks.attr('target','_black');
$pdfs.attr('download', 'true');

$odd.css('backgroundColor', 'blue');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
    event.preventDefault();
    //check if checkbox has been checked
    //if zero checkbox are checked
    if ($(':checked').length = 0){
        //prevent download of document
        event.preventDefault();
        //alert the user
        alert('Please check the box to all PDF download');
    }
})

$('#links').append($pdfCheckBox);