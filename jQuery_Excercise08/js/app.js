// jQuery changing element property Getter and Setter
//to download file in a new window 

const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');//^ start with
const $pdfs = $('a[href$=".pdf"]');//matched at the end .pdf

$secureLinks.attr('target','_black');
$pdfs.attr('download', true);


