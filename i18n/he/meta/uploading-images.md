---
title: העלאת תמונות
---

הנה כמה כללים כלליים לתרומה ל-Privacy Guides:

## תמונות

- אנחנו **מעדיפים** תמונות SVG, אבל אם אלה לא קיימות נוכל להשתמש בתמונות PNG

לסמלי החברה יש גודל קנבס של:

- 128x128 פיקסלים
- 384x128 פיקסלים

## אופטימיזציה

### PNG

השתמש ב-[OptiPNG](https://sourceforge.net/projects/optipng/) כדי לבצע אופטימיזציה של תמונת PNG:

```bash
optipng -o7 file.png
```

### SVG

#### Inkscape

[סרקו](https://github.com/scour-project/scour) את כל תמונות ה-SVG.

ב-Inkscape:

1. File Save As..
2. הגדר את הסוג ל-SVG אופטימיזציה (*.svg)

בלשונית **האפשרויות**:

- **מספר הספרות המשמעותיות עבור קואורדינטות** > **5**
- [x] Turn on **Shorten color values**
- [x] Turn on **Convert CSS attributes to XML attributes**
- [x] Turn on **Collapse groups**
- [x] Turn on **Create groups for similar attributes**
- [ ] Turn off **Keep editor data**
- [ ] Turn off **Keep unreferenced definitions**
- [x] Turn on **Work around renderer bugs**

In the **SVG Output** tab under **Document options**:

- [ ] תכבה **הסר את הצהרת ה-XML**
- [x] הפעל **הסר מטא נתונים**
- [x] הפעל **הסר תגובות**
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

ניתן להשיג את אותו הדבר עם הפקודה [Scour](https://github.com/scour-project/scour):

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
