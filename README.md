# 💝 Aye San Valentín - Página Web

Sitio web para arreglos de San Valentín 2026

## 🚀 Deploy a GitHub Pages con gh-pages

### Configuración Inicial (Solo una vez)

1. **Crea un repositorio en GitHub:**
   - Ve a GitHub.com
   - Click en "New repository"
   - Nombre: `Aye_San_Valentin`
   - Deja todo por defecto y crea el repositorio

2. **Conecta tu proyecto local con GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - San Valentín site"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/Aye_San_Valentin.git
   git push -u origin main
   ```

### Deploy (Cada vez que quieras actualizar)

Desde la carpeta `San_valentin`:

```bash
npm run deploy
```

Este comando:
1. Hace el build automáticamente (`npm run build`)
2. Sube la carpeta `dist` a la rama `gh-pages`
3. GitHub Pages sirve automáticamente desde esa rama

**Tu sitio estará en:** `https://TU_USUARIO.github.io/Aye_San_Valentin/`

### Verificar configuración en GitHub

Después del primer deploy:
1. Ve a tu repositorio en GitHub
2. Settings > Pages
3. Deberías ver "Your site is published at..."
4. La branch debe ser `gh-pages` (se configura automáticamente)

## 🛠️ Desarrollo Local

```bash
cd San_valentin
npm install
npm run dev
```

Abre: `http://localhost:5173`

## 📝 Comandos Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build
- `npm run deploy` - Deploy a GitHub Pages

## 🛠️ Tecnologías

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## ⚠️ Importante

- Las imágenes deben estar en `public/` para funcionar en producción
- Si cambias el nombre del repositorio, actualiza `base` en `vite.config.js`
