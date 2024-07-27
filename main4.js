// /*Hàm trong js
// */
// function showDialog() {
//     alert('Hello các bạn');
// }
// showDialog();



// 1. Tham số trong hàm
// -định nghĩa
// -kiểu dữ liệu (ko giới hạn)
// -tính private (Riêng tư)
// -1 tham số  ( )
// -Nhiều tham số
// 2.Truyền Tham số
//    - 1 tham số
//    -nhiều thamm số
// 3 Arguments?
//     -đối tượng arguments
//     -Giới Thiệu Vòng For



// function writeLog(message, message2) {
//     console.log(typeof message)
//     console.log(message2)
// }
// writeLog('Test',12);

        //Vòng for
// function writeLog(){
//     var myString='';
//     for(var i of arguments){
//         myString += `${i}- `;
//     }
//     console.log(myString)
// }
// writeLog('Log1','Log2','Log3')


// // return trong function
// var isComfirm = confirm('message')
// console.log(isComfirm)


// // Hàm Cộng
// function cong(a,b){
//     return a+b;
// }
// var result=cong(2,8);
// console.log(result)


/* các trường hợp khác
1 nếu trùng tên hàm thì cái vừa ghi sẽ đè lên cái ghi đầu tiên
2 khai báo biến trong hàm
3 hàm trong hàm
*/
// 1. giống tên hàm
// function messLog(){
//     console.log('Hello1')
// }
// function messLog(){
//     console.log('Hello2')
// }
// messLog()

// // 2.khai báo biến trong hàm
// function messLog(){
//    var fullName=('Nguyen An')
//    console.log(fullName)
// }
// messLog()

// 3.Định nghĩa hàm trong hàm
// function messLog(){
//     function messLog2(){
//         console.log('Message 2');
//     }
//     messLog2();
// }
// messLog();




// Các loại hàm
// 1. Declaration function: có thể gọi hàm trước khi ghi hàm
showMessage();
function showMessage(){
    console.log('Declaration function')
}
//2 Expression function: không thể gọi hàm trước khi ghi hàm
// showMessage2();
var showMessage2=function testName(){
    console.log('Expression function')
    document.getElementById
}
// showMessage2();
// setTimeout(function testName(){

// });
// var myObject={
//     myFunction: function testName(){

//     }
// }

