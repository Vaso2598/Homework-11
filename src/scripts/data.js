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
		card.classList.add("mt-2");
		card.classList.add("col-3");
		card.innerHTML = `
            <h2>${product.title}</h2>
			<div class="category mb-3">
            	<span class="badge text-bg-info">${product.brand}</span>
            	<span class="badge text-bg-primary">${product.category}</span>
			</div>
			<div class="border rounded-2 height-150px overflow-auto" >
            	<p class="m-2">${product.description}</p>
			</div>
			<div class="category mt-2">
				<span class="badge rounded-pill text-bg-warning">${product.price} €</span>
            	<span class="badge rounded-pill text-bg-danger">${product.discountPercentage}%</span>
			</div>
			<div class="my-2 category">
				<span class="badge rounded-pill text-bg-success">Rating: ${product.rating}</span>
				<span class="badge rounded-pill text-bg-danger">In Stock: ${product.stock}</span>
			</div>
			<div class="pos-relative">
				<button id="right-${product.id}" type="button" class="buttonR"></button>
				<div id="productImg-${product.id}" class="scroll">
					${product.images.map((images) => {
						return `
						<div class="productImage">
							<img src="${images}">
						</div>`;
					})}
				</div>
				<button id="left-${product.id}" type="button" class="buttonL"></button>
			</div>
        `;
		productLists.appendChild(card);

		const buttonRight = document.getElementById(`right-${product.id}`);
		const buttonLeft = document.getElementById(`left-${product.id}`);

		buttonRight.onclick = () => {
			document.getElementById(`productImg-${product.id}`).scrollLeft += 250;
		};

		buttonLeft.onclick = () => {
			document.getElementById(`productImg-${product.id}`).scrollLeft -= 250;
		};
	});
};
