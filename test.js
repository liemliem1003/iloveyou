function createParticle(){
	var fireworks = document.getElementById("fireworks");
	var particular = document.getElementById("particular");
	const size = Math.floor(Math.random() * 20 + 5);
	fireworks.appendChild(particular.cloneNode(true));
	var firstPos = [
		x= Math.floor(Math.random() * 20 + 5),
		y= Math.floor(Math.random() * 20 + 5),
	]
	var destination = [
		x= Math.floor(Math.random() * 20 + 5),
		y= Math.floor(Math.random() * 20 + 5),
	]
	console.log(firstPos)
}
createParticle()