var widths = document.getElementsByTagName('html')[0].clientWidth
if (widths<739){
var lengslider = document.getElementsByClassName('items')[0].clientWidth
let span = document.getElementById('click-l');
let span1 = document.getElementById('click-r');
let items = document.getElementsByClassName('items')
let product_page = Math.ceil(items.length / 5);
let l = 0;
let movePer = 50;
let maxMove = 560;
span.addEventListener('click', function () {
	l = l + movePer;
	if (items == 1) {
		l = 0;
	}
	for (const i of items) {
		if (l > maxMove) { l = l - movePer; }
		i.style.left = '-' + l + '%';
	}
})
span1.addEventListener('click', () => {
	l = l - movePer;
	if (l <= 0) {
		l = 0;
	}
	for (const i of items) {
		if (product_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}
)
}
if(widths>1024){
let span = document.getElementById('click-l');
let span1 = document.getElementById('click-r');
let items = document.getElementsByClassName('items')
let product_page = Math.ceil(items.length / 5);
let l = 0;
let movePer = 20.2;
let maxMove = 175;
span.addEventListener('click', function () {
	console.log(123)
	l = l + movePer;
	if (items == 1) {
		l = 0;
	}
	for (const i of items) {
		if (l > maxMove) { l = l - movePer; }
		i.style.left = '-' + l + '%';
	}
})
span1.addEventListener('click', () => {
	console.log(999)
	l = l - movePer;
	if (l <= 0) {
		l = 0;
	}
	for (const i of items) {
		if (product_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}
)
}