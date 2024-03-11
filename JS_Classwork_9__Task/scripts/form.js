// start point
document.addEventListener("DOMContentLoaded", () => {
	// init
	const FORM = document.querySelector("#data")
	const NAME = document.querySelector("#name")
	const SURNAME = document.querySelector("#surname")
	const AGE = document.querySelector("#age")

	// actions
	FORM.addEventListener("submit", (e) => {
		e.preventDefault()

		// read data from fields
		const DATA = {
			name: NAME.value,
			surname: SURNAME.value,
			age: AGE.value
		}

		// set to LS
		localStorage.setItem("data", JSON.stringify(DATA))

		// navigate to about.html
		const PATH = document.querySelector("#data").getAttribute("data-href")
		alert(PATH)

		window.open(PATH, "_self")
	})
})