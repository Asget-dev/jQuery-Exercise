// jQuery changing style and classes property Getter and Setter
//use JjQuery methods like css() addClass() and removeClass() to change the look of DOM element
const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');//^ start with
const $pdfs = $('a[href$=".pdf"]');//matched at the end .pdf

$secureLinks.attr('target','_black');
$pdfs.attr('download', true);

$odd.css('backgroundColor', 'blue');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');
