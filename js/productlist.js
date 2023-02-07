fetch("https://kea-alt-del.dk/t7/api/products?limit=15")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  // fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //Lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("p").textContent = product.price;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //produkt er udsolgt lav en betingelse
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  // produkt er på udsalg, lav en betingelse
  if (product.discount) {
    copy.querySelector("article").classList.add("offer");
    copy.querySelector("article").classList.add("offerPrice");
  }
  //appende til DOM
  document.querySelector("main").appendChild(copy);
}

/*
<template id="smallProductTemplate">
        <section class="grid_1">
          <article class="smallProduct">
            <div>
              <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Blue Nike t-shirt" />
              <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
              <h4>Price</h4>
              <p>895,-</p>
              <p><a href="product.html">See product</a></p>
            </div>
          </article>
        </section>
      </template>
*/

/*
id	1163
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
season	"Summer"
productionyear	2011
usagetype	"Sports"
productdisplayname	"Sahara Team India Fanwear Round Neck Jersey"
price	895
discount	null
brandname	"Nike"
soldout	0
*/
