// jQuery-specific selector


// const $odd = $('a:odd')
// $odd.hide();

const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');//^ start with
// $secureLinks.hide();

const $pdfs = $('a[href$=".pdf"]');//matched at the end .pdf
$pdfs.hide();


