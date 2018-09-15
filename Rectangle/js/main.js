function main() {
	var canvas = document.getElementById('practice');
	if (!canvas) {
		console.log('failed to retrieve the <canvas> element');
		return;
	}

	var ctx = canvas.msGetInputContext('2d');

	ctx.fillStyle = 'rgba(0,0,255,1.0)';
	ctx.fillRect(120, 10, 150, 150);
}
