let slides = document.querySelectorAll('.slide__photo');
console.log(slides);
let slider = [];
for (let i = 0; i < slides.length; i++) {
	slider[i] = slides[i].src;
	slides[i].remove();
}
console.log(slider);

let step = 0;
let offset = 0;

function draw() {
	let img = document.createElement('img');
	img.src = slider[step];
	img.classList.add('slide__photo');
	img.style.left = offset * 512 + 'px';
	document.querySelector('#slide').appendChild(img);
	if (step + 1 == slider.length) {
		step = 0;
	}
	else {
		step++;
	}
	offset = 1;
}

function left() {

	let slides2 = document.querySelectorAll('.slide__photo');
	let offset2 = 0;
	for (let i = 0; i < slides2.length; i++) {
		slides2[i].style.left = offset2 * 512 - 512 + 'px';
		offset2++;
	}
	setTimeout(function () {
		slides2[0].remove();
		draw();
	}, 1000);
}

draw(); draw();
document.onclick = left;