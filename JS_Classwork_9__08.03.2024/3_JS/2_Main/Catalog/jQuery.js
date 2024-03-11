jQuery(document).on('ready', (e) => {

	// jQuery('#phone_btn').click(() => {
	// 	alert('You clicked button')
	// })

	jQuery('#phone_btn').on('click', (e) => {
		// this.toggleClass('active')
		// jQuery('#phone_btn').addClass('active')
		jQuery('#phone_btn').attr('data-fuck-attr', '80085')

		if (('#products_area').show === true) {
			jQuery('#products_area').hide()
		} else {
			jQuery('#products_area').show()
		}

		jQuery('.heading_label_amount_of_goods').html(
			'<div>Test</div>'
		)
	})
})


// TODO: need delete or change on jQuery

// const BTN = document.querySelector('#phone_btn')
// BTN.addEventListener('click', () => {
// 	alert('You clicked btn!')
// })