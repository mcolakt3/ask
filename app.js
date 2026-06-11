const PASSWORD = "1234"; // şifre burada

// giriş kontrolü
function login(){
    const pass = document.getElementById("password").value;

    if(pass === PASSWORD){
        localStorage.setItem("auth","ok");
        showApp();
    } else {
        document.getElementById("error").innerText = "Hatalı şifre!";
    }
}

// sayfa açılış kontrolü
window.onload = function(){
    if(localStorage.getItem("auth") === "ok"){
        showApp();
    }
}

// giriş sonrası
function showApp(){
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("app").style.display = "block";

    loadProducts();
}

// ürünleri yükle
let products = [];

function loadProducts(){
    fetch("products.json")
    .then(res => res.json())
    .then(data => {
        products = data;
        render(products);
    });
}

// render
function render(list){
    const box = document.getElementById("product-list");

    box.innerHTML = list.map(p => `
        <div class="card">
            <h3>${p.ProductName}</h3>
            <p>Barkod: ${p.Barcode}</p>
            <p>Stok: ${p.Quantity}</p>
        </div>
    `).join("");
}

// arama
document.addEventListener("input", e=>{
    if(e.target.id === "search"){
        const q = e.target.value.toLowerCase();

        const filtered = products.filter(p =>
            p.ProductName.toLowerCase().includes(q) ||
            String(p.Barcode).includes(q)
        );

        render(filtered);
    }
});
