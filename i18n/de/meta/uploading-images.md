---
title: Bilder hochladen
---

Hier sind einige allgemeine Regeln um zu Privacy Guides beizutragen:

## Bilder

- Wir **bevorzugen** SVG-Bilder, aber wenn diese nicht vorhanden sind, können wir PNG-Bilder verwenden

Firmenlogos haben eine Leinwandgröße von:

- 128x128px
- 384x128px

## Optimierung

### PNG

Verwende [OptiPNG](https://sourceforge.net/projects/optipng/) um das PNG-Bild zu optimieren:

```bash
optipng -o7 file.png
```

### SVG

#### Inkscape

[Scour](https://github.com/scour-project/scour) alle SVG-Bilder.

In Inkscape:

1. Speichern unter...
2. Dateityp auf "Optimiertes SVG (*.svg)" setzen

In der **Optionen** Registerkarte:

- **Anzahl der signifikaten Stellen für Koordinaten** > **5**
- [x] Einschalten **Farbwerte kürzen**
- [x] Einschalten **CSS-Attribute in XML-Attribute umwandeln**
- [x] Einschalten **Gruppen zusammenklappen**
- [x] Einschalten **Gruppen für ähnliche Attribute erstellen**
- [ ] Ausschalten **Editor-Daten erhalten**
- [ ] Ausschalten **Unreferenzierte Definitionen erhalten**
- [x] Einschalten **Renderer-Fehler umgehen**

In der **SVG-Ausgabe** Registerkarte unter **Dokumenteinstellungen**:

- [ ] Ausschalten **XML-Deklaration entfernen**
- [x] Einschalten **Metadaten entfernen**
- [x] Einschalten **Kommentare entfernen**
- [x] Einschalten **Rasterbilder einbetten**
- [x] Einschalten **Viewbox aktivieren**

In der **SVG-Ausgabe** Registerkarte unter **Formatierung**:

- [ ] Ausschalten **Ausgabe mit Zeilenumbrüchen und Einrückungen formatieren**
- **Zeichen für Einrückungen** > Wähle **Leerzeichen**
- **Einrücktiefe** > **1**
- [ ] Ausschalten **"xml:space"-Attribut vom SVG-Wurzelelement entfernen**

In der **IDs** Registerkarte:

- [x] Einschalten **Unbenutzte IDs entfernen**
- [ ] Ausschalten **IDs kürzen**
- **Präfix für gekürzte IDs** > `leer lassen`
- [x] Einschalten **Manuell erstellte IDs, die nicht mit Ziffern enden, erhalten**
- **Folgende IDs erhalten** > `leer lassen`
- **IDs mit folgendem Präfix erhalten** > `leer lassen`

#### CLI

Das Gleiche kann mit dem [Scour](https://github.com/scour-project/scour) Befehl erreicht werden:

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
