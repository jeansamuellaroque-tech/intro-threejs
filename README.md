# 🎮 Intro Three.js – Carga de modelo FBX

## 📌 Descripción

Este proyecto implementa una escena de graficación 3D en la web utilizando Three.js.

Se carga un modelo 3D en formato **FBX** (Samba Dancing) con animación, demostrando el uso de **FBXLoader**, iluminación básica y renderizado en tiempo real con WebGL.

---

## 📁 Estructura del proyecto

```id="tree01"
intro-threejs/
│
├── index.html              # Página principal
│
└── assets/
    ├── build/              # Núcleo de Three.js
    │   ├── three.core.js
    │   └── three.module.js
    │
    ├── css/
    │   └── main.css        # Estilos
    │
    ├── js/
    │   └── main.js         # Lógica principal 3D
    │
    ├── jsm/
    │   ├── controls/       # Controles de cámara
    │   ├── curves/         # Utilidades matemáticas
    │   ├── libs/           # Librerías auxiliares
    │   └── loaders/
    │       └── FBXLoader.js  # Carga de modelos FBX
    │
    └── models/
        └── fbx/
            └── Samba Dancing.fbx  # Modelo animado
```

---

## ⚙️ Funcionamiento

El proyecto funciona de la siguiente manera:

1. `index.html`:

   * Define el entorno web
   * Configura **importmap** para usar módulos de Three.js
   * Carga `main.js`

2. `main.js`:

   * Crea la escena (`Scene`)
   * Configura la cámara (`Camera`)
   * Inicializa el renderizador (`WebGLRenderer`)
   * Agrega luces
   * Usa `FBXLoader` para cargar el modelo
   * Ejecuta la animación

---

## 🚀 Ejecución

### ✔️ Recomendado: Live Server

1. Abrir en Visual Studio Code
2. Instalar **Live Server**
3. Ejecutar `index.html`

---

### ✔️ Alternativa: Servidor local

```bash id="run01"
python -m http.server
```

Abrir en navegador:

```id="run02"
http://localhost:8000
```

---

## 🎯 Objetivos

* Comprender el uso de Three.js
* Cargar modelos 3D en formato FBX
* Aplicar animaciones
* Entender la estructura de un proyecto 3D web
* Implementar renderizado en tiempo real

---

## 🧠 Conceptos aplicados

* Coordenadas 3D (X, Y, Z)
* Transformaciones (rotación, escala, traslación)
* Iluminación básica
* Renderizado WebGL
* Carga de modelos externos

---

## 🎨 Recursos

* Modelo obtenido de Mixamo
* Librería principal: Three.js

---

## ⚠️ Notas importantes

* No abrir directamente `index.html` sin servidor (problemas con módulos ES)
* Requiere navegador moderno (Chrome, Edge, Firefox)
* Puede tardar en cargar dependiendo del modelo FBX

---

## 👨‍💻 Autor

**Jean Samuel Laroque**

---

## ✨ Resultado esperado

* Visualización de un personaje 3D animado
* Renderizado fluido en navegador
* Interacción básica con la escena (según implementación)

---

## 📚 Referencias

* https://threejs.org/docs/
* https://threejs.org/examples/
* https://www.mixamo.com/

---

🚀 Proyecto académico de introducción a la graficación 3D.
