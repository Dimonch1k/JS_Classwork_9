class Cart {
	#checkExistingCart() {
		if (!localStorage.getItem('cart')) {
			return false
		}
		return true
	}

	addToCart(id) {
		// 	check if exist
		if (this.#checkExistingCart()) {
			let cart = JSON.parse(localStorage.getItem('cart'))
			cart.push(id)
			localStorage.setItem('cart', JSON.stringify(cart))
			this.changeCounter('#counter')
		} else {
			const cart = [id]
			localStorage.setItem('cart', JSON.stringify(cart))
			this.changeCounter('#counter')
		}
	}

	changeCounter(selector) {
		if (localStorage.getItem('cart')) {
			document.querySelector(selector).innerHTML = JSON.parse(localStorage.getItem('cart')).length + ' товара'
		}
	}
}


document.addEventListener('DOMContentLoaded', () => {
	c.changeCounter('#counter')
})