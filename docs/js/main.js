addEventListener("load", function() {
	const game = new Game();

	let startTime = 0;
	(function animate() {
		game.render();
		game.update();

		//Update frame rate
		let delta = (performance.now() - startTime) / 1000;
		Game.constants.frameRate = 1 / delta;
		startTime = performance.now();

		//Update total frames
		Game.constants.frameCount++;

		//Loop
		requestAnimationFrame(animate);
	})();

	addEventListener("resize", function() {
		//Resize canvas
		game.renderer.setSize(innerWidth, innerHeight);
		game.camera.aspect = innerWidth / innerHeight;
		game.camera.updateProjectionMatrix();
	});

	addEventListener("mousemove", function(event) {
		//Update mouse
		Game.constants.mouse = {
			x: event.clientX,
			y: event.clientY
		};
	});

	addEventListener("keydown", function(event) {
		Game.constants.keyIsPressed = true;
		Game.constants.keyCode = event.keyCode;
		Game.constants.activeKeys[event.keyCode] = event;
	});

	addEventListener("keyup", function(event) {
		Game.constants.keyIsPressed = false;
		Game.constants.keyCode = event.keyCode;
		delete Game.constants.activeKeys[event.keyCode];
	});
});