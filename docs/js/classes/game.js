class Game {
	constructor() {
		this.camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000);
		this.camera.position.z = 20;
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer({
			antialias: true
		});

		this.light = new THREE.DirectionalLight("white", 1);
		this.light.position.set(0, 0, 20);

		this.scene.add(this.light);
		this.renderer.setSize(innerWidth, innerHeight);
		document.body.appendChild(this.renderer.domElement);

		//Game objects
		this.world = new World(this);
	}

	render() {
		//Render world
		this.renderer.render(this.scene, this.camera);
		this.world.render();
	}

	update() {
		//Update world
		this.world.update();
	}
}

Game.utils = {
	lerp: function(start, stop, per) {
		return per * (stop - start) + start;
	},
	dist: function(x1, y1, z1, x2, y2, z2) {
		return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1));
	},
	map: function(n, start1, stop1, start2, stop2) {
		return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
	},
	random: function() {
		if (arguments.length == 2 && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
			return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
		} else if (arguments.length == 1 && typeof arguments[0] == "number") {
			return Math.random() * arguments[0];
		} else if (Array.isArray(arguments[0])) {
			return arguments[0][Math.floor(Math.random() * arguments[0].length)];
		} else if (arguments.length > 2) {
			let args = [...arguments];
			return args[Math.floor(Math.random() * args.length)];
		}
	},
	hexToRGB: function(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		console.log(result)
		return {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		};
	},
	keyIsDown: function(keyCode) {
		return keyCode in Game.constants.activeKeys;
	}
}

Game.constants = {
	mouse: {
		x: 0,
		y: 0
	},
	frameCount: 0,
	frameRate: 0,
	keyIsPressed: false,
	keyCode: null,
	activeKeys: {}
}