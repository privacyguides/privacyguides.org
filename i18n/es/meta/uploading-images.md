---
title: Subiendo imágenes
---

He aquí un par de normas generales para contribuir a las Guías de privacidad:

## Imágenes

- **Preferimos** las imágenes SVG, pero si no existen podemos utilizar imágenes PNG

Los logotipos de empresa tienen un tamaño de lienzo de:

- 128x128px
- 384x128px

## Optimización

### PNG

Utiliza [OptiPNG](https://sourceforge.net/projects/optipng/) para optimizar la imagen PNG:

```bash
optipng -o7 file.png
```

### SVG

#### Inkscape

[Explora](https://github.com/scour-project/scour) todas las imágenes SVG.

En Inkscape:

1. Archivo Guardar como...
2. Establecer tipo a SVG optimizado (*.svg)

En la pestaña **Opciones**:

- **Número de cifras significativas para las coordenadas** > **5**
- [x] Activar **Acortar valores de color**
- [x] Activar **Convertir atributos CSS a atributos XML**
- [x] Activar **Colapsar grupos**
- [x] Activar **Crear grupos para atributos similares**
- [ ] Desactivar **Conservar datos del editor**
- [ ] Desactivar **Mantener definiciones no referenciadas**
- [x] Activar **Solucionar errores del renderizador**

En la pestaña **Salida SVG** bajo **Opciones de documento**:

- [ ] Desactivar **Eliminar la declaración XML**
- [x] Activar **Eliminar metadatos**
- [x] Activar **Eliminar comentarios**
- [x] Activar **Imágenes rasterizadas incrustadas**
- [x] Activar **Activar viewboxing**

En la **salida SVG** bajo **Pretty-printing**:

- [ ] Desactivar **Formato de salida con saltos de línea y sangría**
- **Caracteres de sangría** > Seleccionar **Espacio**
- **Profundidad de sangría** > **1**
- [ ] Desactivar **Eliminar el atributo "xml:space" del elemento SVG raíz**

En la pestaña **IDs**:

- [x] Activar **Eliminar ID no utilizados**
- [ ] Desactivar **Acortar IDs**
- **Prefijo de IDs acortadas con** > `dejar en blanco`
- [x] Activar **Conservar ID creados manualmente que no terminen con dígitos**
- **Conservar los siguientes IDs** > `dejar en blanco`
- **Conservar IDs que empiezan por** > `dejar en blanco`

#### CLI

Lo mismo puede conseguirse con el comando [Scour](https://github.com/scour-project/scour):

```bash
scour --set-precision=5 \
      --create-groups \
      --renderer-workaround \
      --remove-descriptive-elements \
      --enable-comment-stripping \
      --enable-viewboxing \
      --indent=space \
      --nindent=1 \
      --no-line-breaks \
      --enable-id-stripping \
      --protect-ids-noninkscape \
      input.svg output.svg
```
