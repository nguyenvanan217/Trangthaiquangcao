// mở khi nhấp vào nút mua hàng
const btnOpen = document.querySelector("#btnOpen");
btnOpen.addEventListener("click", function () {
  document.querySelector("#adress-form").style.display = "flex";
});
// đóng khi nhấp vào nút icon close
const btnClose = document.querySelector("#btnClose");
btnClose.addEventListener("click", function () {
  document.querySelector("#adress-form").style.display = "none";
});
// đóng khi nhấp vào khối overlay
const eventOverlay = document.querySelector("#overlay");
eventOverlay.addEventListener("click", function () {
  document.querySelector("#adress-form").style.display = "none";
});
