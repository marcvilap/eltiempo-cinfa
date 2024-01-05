/* REVEAL EFFECT
 ********************************************************************************/
const elements = document.querySelectorAll('.reveal-group')
const observer = new IntersectionObserver(entries => {
	entries.forEach(({ isIntersecting, target }) => target.classList.toggle('reveal-active', isIntersecting))
})
elements.forEach(element => observer.observe(element))

/* PLAU VIDEO
 ********************************************************************************/
const playVideo = document.querySelector('#play-video') as HTMLButtonElement | null
const targetVideo = document.querySelector('#target-video') as HTMLVideoElement | null
if (playVideo && targetVideo) {
	playVideo.addEventListener('click', () => {
		playVideo.remove()
		targetVideo.play()
		targetVideo.setAttribute('controls', 'controls')
	})
}
