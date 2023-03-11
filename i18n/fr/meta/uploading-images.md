---
title: Envoi d'images
---

Voici quelques règles générales pour contribuer à Privacy Guides :

## Images

- Nous **préférons** des images SVG, mais si celles-ci n'existent pas, nous pouvons utiliser des images PNG

Les logos d'entreprise ont une taille canvas de :

- 128x128px
- 384x128px

## Optimisation

### PNG

Utilisez le logiciel [OptiPNG](https://sourceforge.net/projects/optipng/) pour optimiser l'image PNG :

```bash
optipng -o7 file.png
```

### SVG

#### Inkscape

[Scour](https://github.com/scour-project/scour) toutes les images SVG.

Dans Inkscape :

1. Fichier Enregistrer sous..
2. Définir le type à SVG optimisé (*.svg)

Dans l'onglet **Options** :

- **Nombre de chiffres significatifs pour les coordonnées** > **5**
- [x] Activez **Raccourcir les valeurs de couleur**
- [x] Activez **Convertir les attributs CSS en attributs XML**
- [x] Activez **Réduire les groupes**
- [x] Activez **Créer des groupes pour des attributs similaires**
- [ ] Désactivez **Conserver les données de l'éditeur**
- [ ] Désactivez **Conserver les définitions non référencées**
- [x] Activez **Contourner les bugs du moteur de rendu**

Dans l'onglet **Sortie SVG** sous **Options du document** :

- [ ] Désactivez **Supprimer la déclaration XML**
- [x] Activez **Supprimer les métadonnées**
- [x] Activez **Supprimer les commentaires**
- [x] Activez **Images matricielles incorporées**
- [x] Activez **Activer le viewboxing**

Dans le document **Sortie SVG** sous **Pretty-printing** :

- [ ] Désactivez **Formatage de la sortie avec sauts de ligne et indentation**
- **Caractères d'indentation** > Sélectionnez **Espace**
- **Profondeur de l'indentation** > **1**
- [ ] Désactivez **Supprimer l'attribut "xml:space" de l'élément SVG racine**

Dans l'onglet **identifiants** :

- [x] Activez **Supprimer les identifiants inutilisés**
- [ ] Désactivez **Raccourcir les identifiants**
- **Préfixer les identifiants raccourcis avec** > `leave blank`
- [x] Activez **Préserver les identifiants créés manuellement ne se terminant pas par des chiffres**
- **Conserver les identifiants suivants** > `leave blank`
- **Préserver les identifiants commençant par** > `leave blank`

#### Invite de commande

La même chose peut être réalisée avec la commande [Scour](https://github.com/scour-project/scour) :

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
