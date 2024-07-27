//Khai báo biến
// var fullName = 'Nguyễn Văn An';
// // Gọi hàm thông báo
// alert(fullName);
/**
 * 1 suyệt 2 sao là ra cái ni
 */



/**
 Giới thiệu 1 số hàm built-in
 1) Alert
 2) Console(log,warn,error)
 3) Confirm
 4) Prompt
 5) Set timeout
 6) Set interval
 */
//  2 Console
var thongbao='Đây là dòng thông báo của console.log!'
var canhbao='Không được nhấn vào đây!'
var loi='Lỗi ở đây!'
console.log(thongbao)
console.warn(canhbao)
console.error(loi)
//  3 Confirm: có thêm chữ ok hoặc hủy
confirm('Xác nhận bạn đủ tuổi!')
//  4 Prompt:có thêm ô để mình điền tuổi
prompt('Nhập tuổi của bạn!')
//  5 Set timeout:sau khi 1 web 1 giây thì hắn hiện
setTimeout(function(){ 
    alert('Thông Báo! Bạn Không đủ tuổi!')
},1000)
//  6 Set interval: Cách 1 giây chạy 1 lần
setInterval(function(){
    console.log('Thông Báo! Đề nghị thoát gấp'+Math.random())
},1000)