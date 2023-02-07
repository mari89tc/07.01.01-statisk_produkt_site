const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?limit=15&category=" + category)
  .then((res) => res.json())
  .then(showProducts);

document.querySelector("h2").textContent = category;

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
  copy.querySelector(".price").textContent = product.price;
  let beforePrice = product.price;
  copy.querySelector(".price").textContent = beforePrice + ",-";
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //produkt er udsolgt lav en betingelse
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  // produkt er på udsalg, lav en betingelse
  if (product.discount) {
    copy.querySelector("article").classList.add("offer");
    let newPrice = product.price - product.discount;
    copy.querySelector(".offerPrice").textContent = "Now " + newPrice + ",-";
    copy.querySelector(".price").classList.add("strikethrough");
  }
  // produkt er på udsalg og udsolgt,lav en betingelse
  //   if (product.souldout && product.discount) {
  //     copy.querySelector("article").classList.add("soldOut offer");
  //     //copy.querySelector("article").classList.add("offer");
  //     let newPrice = product.price - product.discount;
  //     copy.querySelector(".offerPrice").textContent = "Now " + newPrice + ",-";
  //     copy.querySelector(".price").classList.add("strikethrough");
  //   }

  //opdater selv med udskift af id
  copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);

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
