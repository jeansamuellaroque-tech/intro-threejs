import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

import { initAnimations, updateMixer } from './animacion.js';

let camera, scene, renderer, stats, object;
let clock = new THREE.Clock();

init();

function init() {

    const container = document.getElementById('canvas-container');

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.set(100, 200, 300);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 5);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 5);
    dirLight.position.set(0, 200, 100);
    scene.add(dirLight);

    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(2000, 2000),
        new THREE.MeshPhongMaterial({ color: 0x999999 })
    );
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    const grid = new THREE.GridHelper(2000, 20);
    scene.add(grid);

    const loader = new FBXLoader();

   loader.load('./assets/models/fbx/character.fbx', (group) => {

        object = group;
        object.scale.set(1, 1, 1);

        object.traverse(child => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });

        scene.add(object);

        initAnimations(object);

    });

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 100, 0);
    controls.update();

    stats = new Stats();
    document.body.appendChild(stats.dom);

    window.addEventListener('resize', onResize);

    animate();
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    updateMixer(delta);

    renderer.render(scene, camera);
    stats.update();
}