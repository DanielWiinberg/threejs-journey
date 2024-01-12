import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube1 = new THREE.Mesh(geometry, material)

// cube1.position.set(1,1,1);

// cube1.scale.set(2, 0.5, 0.5)

// cube1.rotation.reorder('YXZ')
// cube1.rotation.x = Math.PI*0.25
// cube1.rotation.y = Math.PI*0.25

// console.log({cube1})

const group = new THREE.Group();
scene.add(group);

group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
cube2.position.set(-2, 0, 0);
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube3.position.set(2, 0, 0)
group.add(cube3);

group.rotation.x = Math.PI * 0.25

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0,0,5);

// camera.lookAt(mesh.position);

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)