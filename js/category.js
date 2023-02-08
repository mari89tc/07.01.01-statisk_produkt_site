fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(product) {
  //console.log(product);
  // fang template
  const template = document.querySelector(".categoriesTemplate").content;
  //Lav en kopi
  const clone = template.cloneNode(true);
  //ændre indhold
  clone.querySelector("a").textContent = product.category;
  clone.querySelector("a").href = `productlist.html?category=${product.category}`;
  //appender
  document.querySelector("main ul").appendChild(clone);
}

/*
id	1165
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
basecolour	"Blue"
season	"Summer"
productionyear	2013
usagetype	"Sports"
productdisplayname	"Mean Team India Cricket Jersey"
parsed	1
soldout	0
relid	1165
price	2495
discount	45
variantname	"Authentic Jersey"
brandname	"Nike"
brandbio	"Nike, creating experiences for today’s athlete"
brandimage	"http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg"
agegroup	"Adults-Men"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	"<p>Polyester<br />Machine wash</p>"
sizefitdesc	null
description	"<p>Blue jersey with a tipped collar, concealed, half buttoned placket, Nike print on the right chest, Team India print and applique on the front, short sleeves, tri-colour side panels, print at the back</p>"
styledesc	"<p>Root for our country in style with this team India jersey from Nike. The Dri-fit fabric and panel"
*/
