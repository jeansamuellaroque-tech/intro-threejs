import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

let mixer;
let actions = {};
let activeAction;

const loader = new FBXLoader();

// ⚠️ USA LOS NOMBRES EXACTOS DE TUS ARCHIVOS
const animations = [
    { key: "1", file: "Crouch To Stand.fbx" },
    { key: "2", file: "Taunt.fbx" },
    { key: "3", file: "Mma Kick.fbx" },
    { key: "4", file: "Fall flat.fbx" },
    { key: "5", file: "Breakdance 1990.fbx" }
];

export function initAnimations(model) {

    mixer = new THREE.AnimationMixer(model);

    let loadedCount = 0;

    animations.forEach(anim => {

        loader.load('../assets/models/fbx/' + anim.file, (data) => {

            const clip = data.animations[0];
            const action = mixer.clipAction(clip);

            action.setLoop(THREE.LoopRepeat);
            action.clampWhenFinished = true;

            actions[anim.key] = action;

            loadedCount++;

            console.log("✅ Animación cargada:", anim.file);

            // 👉 Solo activar teclado cuando TODO esté cargado
            if (loadedCount === animations.length) {
                console.log("🔥 TODAS LAS ANIMACIONES LISTAS");
                enableKeyboard();
            }

        }, undefined, (error) => {
            console.error("❌ Error cargando:", anim.file, error);
        });

    });

}

// 🎮 ACTIVAR TECLADO (SOLO CUANDO TODO ESTÁ LISTO)
function enableKeyboard() {

    window.addEventListener("keydown", (e) => {

        console.log("🎮 Tecla presionada:", e.key);

        const action = actions[e.key];

        if (!action) {
            console.warn("⚠️ No hay animación para:", e.key);
            return;
        }

        if (activeAction) {
            activeAction.fadeOut(0.5);
        }

        action.reset().fadeIn(0.5).play();
        activeAction = action;

    });

}

// 🔄 UPDATE
export function updateMixer(delta) {
    if (mixer) mixer.update(delta);
}