class Terrain {
	constructor(world) {
		this.world = world;
		this.radius = Game.utils.random(4, 20);

		this.geometry = new THREE.PlaneGeometry(20, 20, 20, 20);
		this.material = new THREE.MeshPhongMaterial({
			color: "red",
			side: THREE.DoubleSide,
			flatShading: THREE.FlatShading
		});
		this.mesh = new THREE.Mesh(this.geometry, this.material);

		this.vertices = this.mesh.geometry.attributes.position.array;
		for(var i = 0; i < this.vertices.length; i+=3){
			let x = this.vertices[i];
			let y = this.vertices[i + 1];
			this.vertices[i + 2] = Game.utils.random(-0.4, 0.4);
		}
		this.geometry.dynamic = true;
		this.geometry.verticesNeedUpdate = true;
		this.world.game.scene.add(this.mesh);
		this.mesh.rotation.x = -1.1
		console.log(this.mesh)
	}

	render() {
		
	}

	update() {
		//this.mesh.rotation.z += 0.01
		for(var i = 0; i < this.vertices.length; i+=3){
			this.vertices[i] += 0.1;
		}


	}
}