class Products {

	#BASE_URL = 'https://fakestoreapi.com/products'

	async getAllProducts() {
		console.log('Start fetching data')

		// 1 Method

		// await fetch('https://fakestoreapi.com/products?limit=5')
		// 	.then(res=>res.json())
		// 	.then(json=>console.log(json))


		// 2 Method

		// let products = await fetch('https://fakestoreapi.com/products?limit=5')
		// products = await products.json()
		// console.log(products)


		// Method to get all products

		let products = await fetch('https://fakestoreapi.com/products?limit=18')
			.then(res => res.json())
			.then(json => {
				return json
			})
		console.log('Finish fetching data')
		this.useLocalStorage('create', products)
		this.useLocalStorage('read')
		this.useLocalStorage('update')
		this.useLocalStorage('delete')
		return products
	}

	useLocalStorage(type, data = null) {
		if (type === 'create') {
			// create
			const dataForLS = JSON.stringify(data)
			localStorage.setItem('products', dataForLS)
			localStorage.setItem('products', dataForLS)
		} else if (type === 'read') {
			// read
			const data = JSON.parse(localStorage.getItem('products'))

		} else if (type === 'update') {
			// 1. Load from LS
			let data = JSON.parse(localStorage.getItem('products'))
			// 2. Some modification
			let newData = data[3]
			// 3. Write new data to LS
			localStorage.setItem('products', JSON.stringify(newData))
		} else if (type === 'delete') {
			localStorage.removeItem('products') // delete by key
			localStorage.clear() // clear all
		}
	}

	async addNewProduct() {
		const postMethod = {
			method: 'POST',
			body: JSON.stringify(
				{
					title: 'test product',
					price: 13.5,
					description: 'lorem ipsum set',
					image: 'https://i.pravatar.cc',
					category: 'electronic'
				}
			)
		}
		await fetch('https://fakestoreapi.com/products', postMethod)
			.then(res => res.json())
			.then(json => json)
	}

	async updateProduct(id = 7) {
		const putMethod = {
			method: 'PUT',
			body: JSON.stringify(
				{
					title: 'test product',
					price: 13.5,
					description: 'lorem ipsum set',
					image: 'https://i.pravatar.cc',
					category: 'electronic'
				}
			)
		}
		await fetch('https://fakestoreapi.com/products/' + id, putMethod)
			.then(response => response.json())
			.catch(error => console.log(error))
	}

	async deleteProduct(id = 6) {
		fetch('https://fakestoreapi.com/products/' + id, {
			method: 'DELETE'
		})
			.then(response => response.json())
			.then(json => json)
	}

	displayProducts(products) {
		console.log('PRODUCTS FOR DISPLAY', products)
		let html = ''
		// generate HTML
		products.forEach((e) => {
			html += `
			<div class="grid-item">
				<div class="product">
					<div class="product_heading">
						<div class="product_new">
							<span class="span_prod_new">
								НОВЕ
							</span>
						</div>
						<div class="product_heart">
							<span class="span_prod_heart">
								<img src="/IMAGES/2_Main/Catalog_images/Prod_Heart.png" alt="Product heart">
							</span>
						</div>
					</div>
				
					<div class="product_box">
						<!--img-->
						<div class="product_img">
							<img src="${e.image}" alt="">
						</div>
				
						<!--content-->
						<div class="product-cont">
							<!--name producer model-->
							<div class="product_label_main_info">
								<!--wash name-->
								<span class="product_wash_name">
									 ${e.title}
								</span>
				
								<!--product producer-->
								<span class="product_producer_name">
									${e.category}
								</span>
				
								<!--product model-->
								<span class="product_model_name">
								 ${e.id}
								</span>
							</div>
				
							<!--price-->
							<div class="product_buy_info">
								<div class="product_label_buy_info">
									<span class="price">
										${e.price}$
									</span>
									<span class="inStock">
									 В наявності
									</span>
								</div>
				
								<div class="add_to_cart">
									<button class="add_product_to_cart" onclick="c.addToCart()">
										<img src="/IMAGES/2_Main/Catalog_images/CartBtn.png"
											alt="add to cart button with image inside">
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`


			// get area for products
			let productArea = document.querySelector('#products_area')

			// set HTML in area
			productArea.innerHTML = html
		})
	}
}


// Problem with WebStorm; no Problem with VScode
function isLogin() {
	//! get jwt from LS
	// const JWT = localStorage.getItem('jwt')
	// const PATCH = window.location
	// if (JWT && PATCH !== '/') {
	// 	window.open('/', '_self')
	// } else if (JWT && PATCH === '/') {
	// 	return
	// } else {
	// 	window.open('/login.html', '_self')
	// }
}

function Logout() {
	const LOG_OUT_BTN = document.querySelector('#logout')
	LOG_OUT_BTN.addEventListener('click', () => {
		localStorage.removeItem('jwt')
		isLogin()
	})
}


// start point
document.addEventListener('DOMContentLoaded', async () => {
	// init
	Logout()
	const p = new Products() // p - products
	isLogin()
	// use
	const products = await p.getAllProducts()
	p.displayProducts(products)
	await p.addNewProduct()
	await p.updateProduct()
	await p.deleteProduct()

	c.addToCart(15)
})