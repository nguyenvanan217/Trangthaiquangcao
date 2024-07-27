var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(coursesStr) {
    var coursarray=coursesStr.split(', ')
    return coursarray
}
// Expected results
console.log(strToArray(coursesStr)) 


function getContentLength(content) {
    var dodai=content.length
    return dodai
}
// Mở tab Console để xem kết quả trực quan
console.log(getContentLength('JavaScript'));
console.log(getContentLength('Hello World'));


function getUpperCaseName(name){
    var hello=name.toUpperCase()
    return hello;
}
// Expected results:
console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"