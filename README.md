# Uniform Blogs

Sitio web corporativo para UniformSA, una empresa especializada en uniformes para diversos sectores en Arabia Saudita. El sitio está desarrollado con Next.js y optimizado para un despliegue rápido y eficiente.

## Características

- Diseño moderno y receptivo
- Optimizado para SEO
- Modo oscuro/claro
- Páginas de blog con contenido detallado para cada sector
- Multilingüe (inglés y árabe)
- Formulario de contacto
- Diseñado para altas conversiones

## Tecnologías

- Next.js 14
- React
- Tailwind CSS
- Framer Motion para animaciones
- TypeScript

## Despliegue con Netlify

Para desplegar este proyecto en Netlify:

1. Clona este repositorio en GitHub
2. Conecta tu cuenta de Netlify a GitHub
3. Selecciona este repositorio para crear un nuevo sitio
4. Configura las siguientes opciones de compilación:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Configura las variables de entorno necesarias en Netlify
6. Haz clic en "Deploy site"

## Estructura del Proyecto

- `/app` - Rutas y páginas de Next.js
- `/components` - Componentes reutilizables de React
- `/lib` - Utilidades y funciones auxiliares
- `/public` - Archivos estáticos (imágenes, etc.)
- `/content` - Contenido del blog y textos

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Licencia

Proyecto privado - Todos los derechos reservados 