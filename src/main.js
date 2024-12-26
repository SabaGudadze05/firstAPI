document.addEventListener("DOMContentLoaded", function () {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const cardsSection = document.querySelector("#card_section");
            console.log(cardsSection);

            data.products.forEach((product) => {
                const cardArticle = document.createElement("article");
                cardArticle.classList.add("card_article");

                cardArticle.innerHTML = `
            <section class="img_section">
                <img class="img_class" src="${product.thumbnail}" alt="${product.title}" />
            </section>
            <section class="informations_section">
                <h2 class="product_name">${product.title}</h2>
                <p class="product_desc">${product.description}</p>
                <h3 class="prodcut_price">$${product.price}</h3>
                <button class="view_product_btn" >View Product</button>
            </section>
            `;

                cardsSection.appendChild(cardArticle);

                const viewProductButton =
                    cardArticle.querySelector(".view_product_btn");

                console.log(viewProductButton);

                viewProductButton.addEventListener("click", () => {
                    localStorage.setItem("productId", product.id);
                    window.location.href = "second.html";
                });
            });
        });
});
document.addEventListener("DOMContentLoaded", function () {
    const productId = localStorage.getItem("productId");

    if (productId) {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                const product = data.products.find((p) => p.id == productId);
                if (product) {
                    const informationSideSection =
                        document.querySelector("#product_details");
                    informationSideSection.innerHTML = `
                        <section class="product_details" id="product_details">
                            <section class="card_side">
                                <img class="secon_page_image" src="${product.thumbnail}" alt="${product.title}" />
                            </section>
                            <section class="information_side">
                                <h2 class="product_name">${product.title}</h2>
                                <h3 class="category">category: <span>${product.category}</span></h3>
                                <p class="full_description">${product.description}</p>
                                <section class="reviw_section">
                                    <h4 class="star_numbers">${product.rating}</h4>
                                    <i class="fa-solid fa-star star"></i>
                                </section>
                                <h3 class="prodcut_price">$${product.price}</h3>
                                <button class="add_cart_button">
                                    Add To Cart
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </button>
                            </section>
                        </section>
                    `;
                }
            });
    } else {
        console.error("Product ID not found.");
    }
});



const pagination = () =>{
    

}
