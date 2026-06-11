let products = [];

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products);
  });

function renderProducts(items){

  const container = document.getElementById("product-list");

  container.innerHTML = items.map(product => `
    <div class="card">
      <h3>${product.ProductName}</h3>

      <div class="barcode">
        Barkod: ${product.Barcode}
      </div>

      <p>
        Birim: ${product.UoM}
      </p>

      <p class="stock">
        Stok: ${product.Quantity}
      </p>
    </div>
  `).join("");
}

document
.getElementById("search")
.addEventListener("input", function(){

  const text = this.value.toLowerCase();

  const filtered = products.filter(p =>
      p.ProductName.toLowerCase().includes(text) ||
      String(p.Barcode).includes(text)
  );

  renderProducts(filtered);
});