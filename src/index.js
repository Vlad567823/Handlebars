import products from "../data";
import productsTemplate from "../templates/products.hbs";

const markup = productsTemplate(products);

document.getElementById("app").innerHTML = markup;