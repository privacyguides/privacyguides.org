---
title: Uploading Images
---

Here are a couple of general rules for contributing to Privacy Guides:

## Images

- We **prefer** SVG images, but if those do not exist we can use PNG images

Company logos have canvas size of:

- 128x128px
- 384x128px

## Optimization

### PNG

Use the [OptiPNG](https://sourceforge.net/projects/optipng/) to optimize the PNG image:

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

1. Number of significant digits for coordinates: 5
2. [x] Shorten color values
3. [x] Convert CSS attributes to XML attributes
4. [x] Collapse groups
5. [x] Create groups for similar attributes
6. [ ] Keep editor data
7. [ ] Keep unreferenced definitions
8. [x] Work around renderer bugs

In the **SVG Output** tab under **Document options**:

1. [ ] Remove the XML declaration
2. [x] Remove metadata
3. [x] Remove comments
4. [x] Embeded raster images
5. [x] Enable viewboxing

In the **SVG Output** under **Pretty-printing**:

1. [ ] Format output with line-breaks and indentation
2. Indentation characters: Space
3. Depth of indentation: 1
4. [ ] Strip the "xml:space" attribute from the root SVG element

In the **IDs** tab:

1. [x] Remove unused IDs
2. [ ] Shorten IDs
3. Prefix shortened IDs with: `leave blank`
4. [x] Preserve manually created IDs not ending with digits
5. Preserve the following IDs: `leave blank`
6. Preserve IDs starting with: `leave blank`

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
