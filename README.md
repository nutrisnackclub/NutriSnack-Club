
# NutriSnack Club — Sitio Web

Landing page de productos y combos con carrito lateral, navegación sticky con scroll interno, animaciones y diseño basado en el logo.

## Contenidos
- `index.html`: secciones Productos, Combos, Pedido (CTA), Nosotros, Contacto.
- `styles.css`: colores, fondos alternados, animaciones (rebote/zoom), responsive.
- `script.js`: carrito (agregar/eliminar, total, email prellenado), notificaciones verdes, scroll suave.
- `logo.jpeg`: tu logo.
- `README.md`: esta guía.

---

## Ver en tu computadora
1. Abre `index.html` con doble clic.
2. (Opcional) Servidor local:
   ```bash
   python -m http.server 8000
   ```
   Luego ve a `http://localhost:8000`.

---

## Publicar en GitHub Pages
1. Crea un repositorio público (ej: `nutrisnack-club`).
2. Sube `index.html`, `styles.css`, `script.js`, `logo.jpeg` y este `README.md`.
3. Ve a **Settings → Pages**.
4. **Source**: `Deploy from a branch` → **Branch**: `main` y carpeta `/ (root)`.
5. Guarda. Tu sitio quedará en una URL del estilo:
   `https://TU-USUARIO.github.io/nutrisnack-club/`

---

## Cómo editar
### Email destino
En `script.js` cambia:
```js
const emailDestino = "dominguez.o.gaston@gmail.com";
```

### Productos/Combos y precios
En `index.html` busca las tarjetas dentro de **Productos** y **Combos** y edita:
- `src` de la imagen
- `<h3>` (nombre)
- `<p class="price">`
- Atributos del botón: `data-nombre` y `data-precio`

### Logo
Reemplaza `logo.jpeg` por tu archivo con el **mismo nombre** o cambia la ruta en `index.html`.

### Textos
- Descripción bajo el título (cabecera).
- Párrafos en **Nosotros**.
- Placeholders del formulario en **Contacto**.

### Colores
En `styles.css` ajusta estas variables:
```css
--primary: #d3582e;
--accent:  #6a3b1a;
--bg:      #fff8f0;
--alt:     #fff2e6;
```

---

## Buenas prácticas
- **Optimiza imágenes** (TinyPNG/Squoosh) para mejor velocidad.
- Usa **tamaños consistentes** (ej: 1200×800 para productos).
- Cambia **precios** en todas las apariciones (nombre/`data-precio`).
- Revisa en **celular** tras cada cambio.
- Haz **commits pequeños** con descripción clara.

---

## Ideas futuras
- Botón de **WhatsApp** para pedidos.
- **Testimonios** con estrellas y fotos.
- **Newsletter** (suscripción).
- **Blog** con tips.
- **Galería** o feed de Instagram.
- **Pagos online** con enlaces de Mercado Pago/PayPal.

---

¡Disfruta tu sitio y que lluevan los pedidos! 🧡
