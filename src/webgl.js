import * as THREE from 'three'
class WebGL {
    constructor() {
        this.init()
    }
    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement)
        const animate = () => {
            requestAnimationFrame(animate)
            this.createCube();
            this.cube.rotation.x += 1;
            this.renderer.render(this.scene, this.camera)
        }
        animate()
    }
    createCube() {
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
        this.camera.position.z = 5;

        
    }
    animate() {
        
    }
}

export default WebGL;