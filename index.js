// variables for setup

let container;
let camera;
let renderer;
let scene;
let bust;

function init() {
  container = document.querySelector('.scene');

  //create a scene

  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 500;

  //camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-50, 40, 350);

  //renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);
  //load model
  let loader = new THREE.GLTFLoader();
  loader.load('./3d/scene.gltf', (gltf) => {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });
}

init();
