// custom javascript
// menu contoll js
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick=()=>{
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

// onscroll event

let sections =  document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll=()=>{
	sections.foreach(sec => {
		let top  = window.scrollY;
		let offset = sec.offsetTop-150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navlinks.foreach(links =>{
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			})
		}


	})

	let header = document.querySelector('header');
	header.classList.toggle('sticky',window.scrollY > 100);
}