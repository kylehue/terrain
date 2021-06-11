class World {
	constructor(game) {
		this.game = game;
		//World constants
		this.size = 500;
		this.bounds = {
			min: {
				x: -this.size / 2,
				y: -this.size / 2
			},
			max: {
				x: this.size / 2,
				y: this.size / 2
			}
		}

		//World objects
		this.terrain = new Terrain(this);
	}

	render() {

	}

	update() {
		//Update things
		this.terrain.update();
	}

	getRandomPosition() {
		/*let x = Game.utils.random(this.bounds.min.x, this.bounds.max.x);
		let y = Game.utils.random(this.bounds.min.y, this.bounds.max.y);
		return Game.utils.createVector(x, y);*/
	}
}