---
title: Uploading Images
description: A guide for website contributors on uploading images in the proper format and location.
---

If you make changes to this website that involve adding new images or replacing existing ones, here are a couple of general recommendations:

## Images

- We **prefer** SVG images, but if those do not exist we can use PNG images. Additionally, for cover images, we prefer that they are obtained from [Unsplash](https://unsplash.com) and are in the WebP format.

Company logos should be square if possible, and at least 200x200px if they are PNGs (non-vector images).

## Optimization

### PNG

Use the [OptiPNG](https://sourceforge.net/projects/optipng) tool to optimize PNG images:

```bash
optipng -o7 file.png
```

### SVG

#### Inkscape

[Scour](https://github.com/scour-project/scour) all SVG images.

In Inkscape:

1. File Save As..
2. Set type to Optimized SVG (*.svg)

In the **Options** tab:

- **Number of significant digits for coordinates** > **5**
- [x] Turn on **Shorten color values**
- [x] Turn on **Convert CSS attributes to XML attributes**
- [x] Turn on **Collapse groups**
- [x] Turn on **Create groups for similar attributes**
- [ ] Turn off **Keep editor data**
- [ ] Turn off **Keep unreferenced definitions**
- [x] Turn on **Work around renderer bugs**

In the **SVG Output** tab under **Document options**:

- [ ] Turn off **Remove the XML declaration**
- [x] Turn on **Remove metadata**
- [x] Turn on **Remove comments**
- [x] Turn on **Embeded raster images**
- [x] Turn on **Enable viewboxing**

In the **SVG Output** under **Pretty-printing**:

- [ ] Turn off **Format output with line-breaks and indentation**
- **Indentation characters** > Select **Space**
- **Depth of indentation** > **1**
- [ ] Turn off **Strip the "xml:space" attribute from the root SVG element**

In the **IDs** tab:

- [x] Turn on **Remove unused IDs**
- [ ] Turn off **Shorten IDs**
- **Prefix shortened IDs with** > `leave blank`
- [x] Turn on **Preserve manually created IDs not ending with digits**
- **Preserve the following IDs** > `leave blank`
- **Preserve IDs starting with** > `leave blank`

#### CLI

The same can be achieved with the [Scour](https://github.com/scour-project/scour) command:

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

### WebP

Use the [cwebp](https://developers.google.com/speed/webp/docs/using) command to convert PNG or JPEG image files to WebP format:

```bash
cwebp -q 70 -m 6 input_file -o output.webp
```
