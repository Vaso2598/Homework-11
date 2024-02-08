fetch("https://dummyjson.com/products?limit=5")
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
		card.innerHTML = `
            <img src="${product.thumbnail}">
            <h2>${product.title}</h2>
            <h3>${product.brand}</h3>
            <p>${product.category}</p>
            <p>${product.description}</p>
            <p>${product.discountPercentage}</p>
            ${product.images.map((images) => {
							return `<img src="${images}">`;
						})}
            <p>${product.price} €</p>
            <p>${product.rating}</p>
            <p>${product.stock}</p>
        `;
		productLists.appendChild(card);
	});
};
