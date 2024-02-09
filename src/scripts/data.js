fetch("https://dummyjson.com/products?limit=6")
	.then((res) => res.json())
	.then((res) => {
		let serverResponse = res;
		console.log("Server Response is:", serverResponse);
		renderProducts(serverResponse.products);
	});

const productLists = document.getElementById("productLists");

const renderProducts = (products) => {
	products.map((product) => {
		const card = document.createElement("div");
		card.classList.add("card");
		card.classList.add("col-3");
		card.innerHTML = `
            <h2>${product.title}</h2>
            <h3>${product.brand}</h3>
            <p>${product.category}</p>
            <p>${product.description}</p>
            <p>${product.discountPercentage}</p>
			<button id="right" type="button">L</button>
			<div id="productImg" class="scroll">
				${product.images.map((images) => {
					return `
					<div class="productImage">
						<img src="${images}">
					</div>`;
				})}
			</div>
			<button id="left" type="button">R</button>
            <p>${product.price} €</p>
            <p>${product.rating}</p>
            <p>${product.stock}</p>
        `;
		productLists.appendChild(card);
	});
};

const buttonRight = document.getElementById("right");

buttonRight.onclick = () => {
	document.getElementById("productImg").scrollLeft += 20;
};
