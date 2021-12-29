import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    console.log(response);

    const { data } = response;
    const products = data;

    products.forEach(product => console.log(product.name))

    const filteredProducts = products.filter(product => product.name.includes("Şal"));

    const mappedProducts = filteredProducts.map(product => ({"name": product.name, "image": product.image}));
    console.log(mappedProducts);

    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");
    document.body.appendChild(productContainer);

    mappedProducts.forEach(product => {
      // create a product card to display related data better
      const productCard = document.createElement("div");
      // create the elements that will go inside the product card
      const productImage = document.createElement("img");
      const productName = document.createElement("p");
      
      productCard.classList.add("product-card");
      // product card gets appended to .product-container
      document.querySelector(".product-container").appendChild(productCard);

      productImage.src = product.image;
      productName.innerHTML = product.name;
      
      // image and name get appended to product card
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
    })
  }).catch((err) => console.error(err));
