---
title: Afbeeldingen uploaden
---

Hier zijn een paar algemene regels voor het bijdragen aan Privacy Guides:

## Afbeeldingen

- Wij geven **de voorkeur aan** SVG-afbeeldingen, maar als die niet bestaan, kunnen we PNG-afbeeldingen gebruiken

Bedrijfslogo's hebben canvas grootte van:

- 128x128px
- 384x128px

## Optimalisatie

### PNG

Gebruik [OptiPNG](https://sourceforge.net/projects/optipng/) om de PNG-afbeelding te optimaliseren:

```bash
optipng -o7 file.png
```

### SVG

#### Inkscape

[Scour](https://github.com/scour-project/scour) alle SVG-afbeeldingen.

In Inkscape:

1. Bestand Opslaan Als..
2. Type instellen op Geoptimaliseerde SVG (*.svg)

In het tabblad **Opties**:

- **Aantal significante cijfers voor coördinaten** > **5**
- [x] Zet aan **Kleurwaarden inkorten**
- [x] Zet **aan Zet CSS-attributen om in XML-attributen**
- [x] Zet **aan Samengevoegde groepen**
- [x] Zet **aan Maak groepen voor vergelijkbare kenmerken**
- [ ] Schakel **Bewaar bewerkingsgegevens** uit
- [ ] Schakel **uit zonder verwijzing gedefinieerde definities**
- [x] Zet **Werk rond renderbugs** aan

In het tabblad **SVG-uitvoer** onder **Documentopties**:

- [ ] Schakel **Verwijder de XML declaratie** uit
- [x] Zet **Metadata verwijderen** aan
- [x] Schakel **Reacties verwijderen** in
- [x] Schakel **ingevoegde rasterafbeeldingen** in
- [x] Zet **'viewboxen' aan**

In de **SVG Output** onder **Pretty-printing**:

- [ ] Schakel **Formatteer uitvoer uit met regeleinden en inspringen**
- **Inspringing tekens** > Selecteer **spatie**
- **Inspringing** > **1**
- [ ] Schakel **Strip het kenmerk "xml:space" uit het hoofdSVG-element**

In het **IDs** tabblad:

- [x] Schakel in **Ongebruikte ID's verwijderen**
- [ ] Schakel **Korte ID's** uit
- **Voorvoegsel verkorte IDs met** > `leeg laten`
- [x] Zet **Handmatig aangemaakte IDs aan die niet eindigen met cijfers**
- **Behoud de volgende IDs** > `laat leeg`
- **Behoud ID's beginnend met** > `laat leeg`

#### CLI

Hetzelfde kan worden bereikt met het commando [Scour](https://github.com/scour-project/scour):

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

--8<-- "includes/abbreviations.nl.txt"
