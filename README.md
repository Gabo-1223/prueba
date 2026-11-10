# 🛒 NexusTech & Gaming Store

> **Proyecto académico — Electiva III**  
> Autor: **Angel Romero** · GitHub: [@Gabo-1223](https://github.com/Gabo-1223)

Plataforma de e-commerce para componentes de PC y videojuegos digitales, desarrollada sobre Material Dashboard (Material UI v4). Incluye catálogo de hardware, tienda de juegos estilo Steam/Eneba, promociones de bundles (PC + juegos gratis) y carrito de compras interactivo.

---

## ✨ Features (Características)

| Característica | Descripción |
|---|---|
| 🌙 **Modo oscuro (Dark Mode)** | Paleta personalizada Slate/Indigo implementada con Material UI v4 — cómoda para la vista |
| 📱 **Diseño responsivo** | Adaptable a cualquier resolución: desktop, tablet y móvil gracias al sistema de Grid de Material UI |
| 🖥️ **Catálogo de Hardware** | Tarjetas GPU, CPU, laptops y almacenamiento con filtros por categoría y botón "Añadir al carrito" |
| 🎮 **Tienda de Juegos** | Estilo Steam/Eneba: portadas, precios, descuentos y etiquetas de género para cada juego |
| 🎁 **Bundles & Promociones** | Combos PC + juegos AAA gratuitos con cuenta regresiva y ahorro destacado |
| 🛒 **Carrito interactivo** | Badge en tiempo real en la barra de navegación, resumen de compra y modal de checkout |
| 📊 **Dashboard con gráficos** | Métricas de ventas, productos más vendidos y charts con Chartist |
| 👤 **Página de perfil** | Perfil de usuario personalizable con módulo de tabla de órdenes |
| 🧩 **Módulos de tablas** | Tablas de datos con paginación y formato para inventario y pedidos |

---

## 📁 Folder Structure (Estructura de Carpetas)

```
material-dashboard-material-ui-v4/
│
├── public/
│   └── index.html              # Punto de entrada HTML, meta tags
│
├── src/
│   ├── assets/
│   │   ├── css/                # Estilos globales y overrides del tema oscuro
│   │   ├── img/                # Imágenes y logotipos
│   │   └── jss/                # Estilos JSS (Material UI) y paleta de colores
│   │
│   ├── components/
│   │   ├── Card/               # Card, CardHeader, CardBody, CardFooter
│   │   ├── CustomInput/        # Inputs personalizados
│   │   ├── Footer/             # Pie de página con créditos
│   │   ├── Grid/               # GridItem y GridContainer (wrapper de MUI Grid)
│   │   ├── Navbars/            # AdminNavbar y AdminNavbarLinks (con badge del carrito)
│   │   ├── Sidebar/            # Barra lateral con rutas de navegación
│   │   └── Typography/         # Componentes de texto: Primary, Info, Muted...
│   │
│   ├── context/
│   │   └── CartContext.js      # Estado global del carrito (CartProvider + useCart hook)
│   │
│   ├── data/
│   │   ├── hardwareData.js     # Catálogo de componentes PC (GPU, CPU, laptops, storage)
│   │   ├── gamesData.js        # Catálogo de videojuegos con precios y descuentos
│   │   └── bundlesData.js      # Definición de bundles PC + juegos gratis
│   │
│   ├── layouts/
│   │   └── Admin.js            # Layout principal: Sidebar + Navbar + contenido
│   │
│   ├── views/
│   │   ├── Dashboard/          # Dashboard con stats, featured deals y charts
│   │   ├── Hardware/           # Vista del catálogo de hardware con filtros
│   │   ├── GamesStore/         # Tienda de juegos estilo Steam/Eneba
│   │   ├── Bundles/            # Promociones y combos con juegos gratis
│   │   ├── Cart/               # Carrito de compras y checkout
│   │   └── UserProfile/        # Perfil de usuario y tabla de órdenes
│   │
│   ├── routes.js               # Definición de rutas de la aplicación
│   └── index.js                # Punto de entrada React, envuelve la app con CartProvider
│
├── .env                        # Variables de entorno (SKIP_PREFLIGHT_CHECK, etc.)
├── iniciar.bat                 # Script de inicio rápido para Windows
├── package.json                # Dependencias y metadatos del proyecto
└── README.md                   # Este archivo
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| **React** | 17.x | Biblioteca principal de UI — componentes y estado |
| **Material UI (MUI v4)** | 4.x | Sistema de diseño: Grid, Cards, Buttons, Icons |
| **React Router** | v5 | Navegación entre páginas (SPA) |
| **React Context API** | — | Estado global del carrito sin Redux |
| **Chartist / react-chartist** | — | Gráficos de barras y líneas en el Dashboard |
| **Perfect Scrollbar** | — | Scroll personalizado en el Sidebar |
| **Node.js** | 16 LTS recomendado | Entorno de ejecución (compatible con v18+ con flag) |
| **npm** | 8+ | Gestión de dependencias |
| **JSS** | — | CSS-in-JS para estilos dinámicos con Material UI |
| **HTML5 / CSS3** | — | Estructura base y estilos globales |

---

## 📸 Screenshots / Demostración

> 💡 **Demo planeada:** [https://Gabo-1223.github.io/material-dashboard-material-ui-v4](https://Gabo-1223.github.io/material-dashboard-material-ui-v4)

### Vista previa de la interfaz

| Pantalla | Descripción |
|---|---|
| **Dashboard** | Estadísticas de ventas, productos destacados y gráficos de rendimiento |
| **Hardware** | Catálogo de GPUs, CPUs, laptops y almacenamiento con filtros por categoría |
| **Games Store** | Tienda de videojuegos con portadas, precios y descuentos activos |
| **Bundles** | Ofertas combo: compra una PC y recibe juegos AAA gratis |
| **Cart** | Resumen de compra, cantidades y modal de confirmación de checkout |

> 📷 *Para añadir capturas de pantalla, coloca las imágenes en `/public/screenshots/` y agrégalas aquí con:*  
> `![Nombre](./public/screenshots/nombre.png)`

---

## 🚀 How to Start (Guía de Inicio Rápido)

### Requisitos previos

- [Node.js v16 LTS](https://nodejs.org/) o superior instalado
- npm v8 o superior (incluido con Node.js)
- Git instalado

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Gabo-1223/material-dashboard-material-ui-v4.git

# 2. Entrar a la carpeta del proyecto
cd material-dashboard-material-ui-v4

# 3. Instalar dependencias
npm install --legacy-peer-deps
```

### Iniciar el servidor de desarrollo

**Windows (PowerShell):**
```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm.cmd start
```

**Windows (CMD / símbolo del sistema):**
```cmd
set NODE_OPTIONS=--openssl-legacy-provider
npm start
```

**Linux / macOS:**
```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

> 🌐 La aplicación se abre automáticamente en **http://localhost:3000**

### Script de inicio rápido (solo Windows)

También puedes ejecutar directamente el archivo `iniciar.bat` incluido en la raíz del proyecto haciendo doble clic o desde la terminal:

```cmd
iniciar.bat
```

### Generar build de producción

```bash
# Windows PowerShell
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm.cmd run build

# Linux / macOS
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

Los archivos optimizados se generarán en la carpeta `/build/`.

---

## 📄 Licencia y Créditos

- Plantilla base: [Material Dashboard - Creative Tim](https://www.creative-tim.com/product/material-dashboard-react)
- Adaptación y desarrollo: **Angel Romero** — Electiva III
- GitHub: [@Gabo-1223](https://github.com/Gabo-1223)

---

<p align="center">
  Desarrollado con ❤️ por <strong>Angel Romero</strong> · Electiva III
</p>
