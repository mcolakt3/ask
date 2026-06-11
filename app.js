const products = [
 {
   Barcode: 9696000000013,
   ProductName: "80 GPD Membran",
   Quantity: 350,
   UoM: "ADET",
   SellingPrice: 0
 },
 {
   Barcode: 9696000000051,
   ProductName: "HF-3 CTO Karbon Filtre",
   Quantity: 210,
   UoM: "ADET",
   SellingPrice: 0
 },
 {
   Barcode: 9696000000068,
   ProductName: "10\" GAC - Karbon Filtre",
   Quantity: 250,
   UoM: "ADET",
   SellingPrice: 0
 },
 {
   Barcode: 9696000000075,
   ProductName: "10\" Karbonlu Shell Kab (Karbon)",
   Quantity: 500,
   UoM: "ADET",
   SellingPrice: 0
 },
 {
   Barcode: 9696000000082,
   ProductName: "2,5\" Sediment Filtre",
   Quantity: 70,
   UoM: "ADET",
   SellingPrice: 0
 },
 {
   Barcode: 9696000000099,
   ProductName: "2,5\" GAC Karbon Filtre",
   Quantity: 250,
   UoM: "ADET",
   SellingPrice: 0
 }
];

const list = document.getElementById("product-list");
const search = document.getElementById("search");

// Ürünleri ekrana bas
function render(items) {
    list.innerHTML = "";

    items.forEach(p => {
        list.innerHTML += `
            <div class="product">
                <div class="barcode">Barkod: ${p.Barcode}</div>
                <div><strong>${p.ProductName}</strong></div>
                <div class="stock">Stok: ${p.Quantity} ${p.UoM}</div>
            </div>
        `;
    });
}

// İlk yükleme
render(products);

// Arama (barkod + isim)
search.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    const filtered = products.filter(p =>
        p.ProductName.toLowerCase().includes(value) ||
        String(p.Barcode).includes(value)
    );

    render(filtered);
});
