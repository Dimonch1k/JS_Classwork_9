const BASE_URL = 'https://squid-app-9utho.ondigitalocean.app/api'

function initListenerOnPage() {
	//! get elements
	const REG_FORM = document.querySelector('#reg_form')

	//! add listeners to elements
	//? actions after press "register"

	REG_FORM.addEventListener('submit', (e) => {
		e.preventDefault()
		const REG_DATA = getDataFromLoginForm()
		if (REG_DATA) {
			registerNewUser(REG_DATA)
		}
	})
}

function registerNewUser(data) {
	console.log('DATA', data)

	let requestOptions = {
		method: 'POST',
		body: data
	}
	fetch(`${BASE_URL}/auth/local/register`, requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error))
}


function getDataFromLoginForm() {
	//! get elements
	const EMAIL = document.querySelector('#reg_email')
	const PASSWORD = document.querySelector('#reg_password')
	const CONFIRM_PASSWORD = document.querySelector('#reg_confirm_password')

	//! check if passwords is twins:)
	if (CONFIRM_PASSWORD.value !== PASSWORD.value) {
		alert('Password isn\'t correct!!!')
		return null
	}

	//! get data from elements
	return {
		'email': EMAIL.value,
		'password': PASSWORD.value,
		'confirm_password': CONFIRM_PASSWORD.value
	}
}


document.addEventListener('DOMContentLoaded', (e) => {
	//! init
	initListenerOnPage()
})