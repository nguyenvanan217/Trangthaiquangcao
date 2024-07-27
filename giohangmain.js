var btnAddCards = document.querySelectorAll(".add-to-cart");
var iConCard = document.querySelector(".icon i");
var listCard = document.querySelector(".card ul")
var deleteProduct = document.querySelectorAll(".card ul i");
// lấy ảnh tên giá của sản phẩm
btnAddCards.forEach(function(btn,index) {
    btn.addEventListener("click", function() {
        var img = btn.parentElement.querySelector("img").src;
        var name = btn.parentElement.querySelector("h3").innerText;
        var price = btn.parentElement.querySelector("p").innerText;
        addProductToCart(img, name, price);
        alert("Đã thêm sản phẩm vào giỏ hàng")
    });
});

// thực thi thêm sản phẩm để thêm vào giỏ hàng
function addProductToCart(img, name, price) {
    var newProduct = document.createElement("li");
    // Trích xuất giá trị số từ chuỗi price
    var basePrice = price.match(/\d+/)[0]; // Giả sử price có dạng "Price: $xx"
    newProduct.innerHTML = `
        <strong>${name}</strong>
        <img src=${img} alt="">
        <div class="buy">
            <p>số lượng:</p> <span class="count">1</span><button class="increase">+</button><button class="decrease">-</button>
        </div>
        <span class="price">Price: $${basePrice}</span>
        <i class="bi bi-trash-fill"></i>`;
    // Thiết lập giá cơ bản cho sản phẩm
    newProduct.setAttribute('data-base-price', basePrice);
    listCard.appendChild(newProduct);
}
//xóa 1 sản phẩm bằng cách Gắn sự kiện click lên phần tử cha (ul)
listCard.addEventListener("click", function(event) {
    // Kiểm tra nếu phần tử kích hoạt sự kiện là phần tử i
    if (event.target.tagName === 'I') {
        // Xóa phần tử li chứa sản phẩm
        event.target.parentElement.remove();
    }
});
// xử lí bật mở giỏ hàng
iConCard.addEventListener("click", function() {
    if (listCard.style.display === 'none' || listCard.style.display === '') {
        listCard.style.display = 'block';
    } else {
        listCard.style.display = 'none';
    }
});
// xử lí tăng giảm số lượng sản phẩm và giá sản phẩm 
document.querySelector('.card-products ul').addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('increase') || target.classList.contains('decrease')) {
        const isIncrease = target.classList.contains('increase');
        const listItem = target.closest('li');
        const countSpan = listItem.querySelector('.count');
        let quantity = parseInt(countSpan.textContent, 10);
        const priceSpan = listItem.querySelector('.price');
        
        // Lấy giá cơ bản từ một thuộc tính data-* (ví dụ: data-base-price) của mỗi sản phẩm
        const basePrice = parseInt(listItem.getAttribute('data-base-price'));

        if (isIncrease) {
            quantity++;
        } else {
            quantity = quantity > 1 ? quantity - 1 : 1;
        }

        countSpan.textContent = quantity;
        const newPrice = basePrice * quantity;
        priceSpan.textContent = `Price: $${newPrice}`;
    }
});