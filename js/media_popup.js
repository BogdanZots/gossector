const mediaDivs = document.querySelectorAll('.video-overlay');
const videoPopup = document.querySelector('#videoPopup');
const closePop = document.querySelector('#closeMediaPopup');
const mediaTarget = document.querySelector('#mediaTarget');

mediaDivs.forEach(function(el) {
el.addEventListener('click', function(e) {
	let iFrameSrc = el.parentNode.children[1].firstChild.nextSibling.src;
	mediaTarget.src = iFrameSrc;
	videoPopup.classList.toggle('popup--visible');
});
});

if (closePop !== null) {
	closePop.addEventListener('click', function (e) {
		videoPopup.classList.toggle('popup--visible');
	});
}
