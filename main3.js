// // /*

// // Giới thiệu về các toán tử trong Javascript
// // 1. Toán Tử số học-Arithmetic
// // 2. Toán Tử Gán-Assignment
// // 3. Toán Tử so sánh-Comparision
// // 4. Toán Tử logic-Logical

// // */
// // //1. Toán Tử số học-Arithmetic
// var a=1+2
// console.log(a)

// // // 2. Toán Tử Gán-Assignment
// var fullName='Nguyễn Văn An';  /*Dấu = là toán tử gán*/

// 3. Toán Tử so sánh-Comparision
// var b=1
// var c=2
// if (b<c){
//     alert("Đúng")
// }

// // 4. Toán Tử logic-Logical: xác nhận điều kiện là đúng hay sai
// var d=1
// var f=2
// if (d>0 && f>0){
//     alert("d và f lớn hơn 0!")
// }



// // /*
// // Toán tử số học
// // +
// // -
// // *
// // ** lũy thừa
// // / chia
// // % chia dư
// // ++
// // --
// // */
// // var a=8;
// // var b=2;
// // var c=a%b;
// // console.log(c);





// /*
// Toán Tử Gán
// biết rồi
// */

//  //toán tử ++,--

// var a=10
// var output=a++ + --a
// console.log('output:',output)
// Output sẽ ra gì:.....?


// var a = 3;
// var output = ++a * a--;
// console.log('output:',output); 
// Output sẽ ra mấy:.....?




// // *****Toán tử chuỗi - String operator

// var firtName='Nguyen'
// var lastName='Van An'
// console.log(firtName + ' ' + lastName)

// var Name='Nguyen'
// Name=Name+' Van An'
// console.log(Name)



// /* Toán Tử so sánh
// if else vs mấy cái >= đồ rứa
// lưu ý :Toán tử "==" so sánh giá trị của hai toán hạng mà không quan tâm đến kiểu dữ liệu.
// Tuy nhiên, toán tử "===" so sánh giá trị cũng như kiểu dữ liệu của hai toán hạng.
// */
// var a='Hello'
// var b='Hello'
// if(a==b){
//     console.log('Dieu kien đúng')
// } else{
//     console.log('Dieu kien sai')
// }



// var a = 1;
// var b = -1;
// var c = 0;
// var d = 0;

// var e = a <= b;
// var f = c === d;
// var g = a >= c;

// console.log(e, f, g) 
// What is the output?
// A) false true true
// B) true false true
// C) false false true

// z=0===false
// console.log(z)
// What is the output?
// A) true
// B) false






/*kiểu dữ liệu boolean*/
// var a = true;
// var b = false;
// var c = a || b;
// var d = b && c;

// console.log(c, d);
// What is the output?
// A) true true
// B) false true
// C) false false
// D) True false

// Với toán tử hoặc (||), nếu xuất hiện ít nhất 1 vế bằng true thì kết quả trả về sẽ là true.
// Còn với toán tử và (&&), nếu xuất hiện ít nhất 1 vế bằng false thì kết quả trả về sẽ là false.





/*
Kiểu Dữ liệu nguyên thủy
    -Number
    -String
    -Boolean
    -Undefined
    -Null
    -Symbol
Kiểu dữ liệu phức tạp
    -Function
    -Object
*/

// //Function
// var myFunction=function(){
//     alert('Hi!')
// }
// myFunction();
////Object
// var myOject={
//     name: 'An Nguyen',
//     age: 18,
//     adress:'Ha Noi',
//     myFunction:function(){

//     }
// };
// console.log('myObject',myOject);

// var myArray=['javascript','python']
// console.log(myArray)


// var a = '1';
// var b = 2;

// var c = typeof a;
// var d = typeof b;
// var e = typeof d;

// console.log(c, d, e) 
// What is the Output: ?
// A string number number
// B number number string
// C string number string
//Chú ý: Kết quả trả về của typeof sẽ luôn là 1 chuỗi, vậy nên typeof của d sẽ là 'string'.


/*Toán Tử so sánh
===
!==
*/
// var a=1
// var b='1'
// console.log(a==b)
// // What is the output???
// // A) false
// // B) True