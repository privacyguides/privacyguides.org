---
title: Recomendaciones de Git
---

Si realizas cambios en este sitio web en el editor web de GitHub.com directamente, no deberías tener que preocuparte por esto. Si estás desarrollando localmente y/o eres un editor de sitios web a largo plazo (¡que probablemente deberías estar desarrollando localmente!), ten en cuenta estas recomendaciones.

## Activa la firma de compromiso de claves SSH

Puedes utilizar una clave SSH existente para firmar, o [crear una nueva](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

1. Configura tu cliente Git para que firme commits y etiquetas por defecto (elimina `--global` para que solo firme por defecto para este repositorio):
   ```
   git config --global commit.gpgsign true
   git config --global gpg.format ssh
   git config --global tag.gpgSign true
   ```
2. Copia tu clave pública SSH a tu portapapeles, por ejemplo:
   ```
   pbcopy < ~/.ssh/id_ed25519.pub
    # Copies the contents of the id_ed25519.pub file to your clipboard
   ```
3. Configura tu clave SSH para firmar en Git con el siguiente comando, sustituyendo la última cadena entre comillas por la clave pública de tu portapapeles:
   ```
   git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
   ```

Asegúrate de que [añades tu clave SSH a tu cuenta de GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account) **como Clave de firma** (en lugar de o además de como Clave de autenticación).

## Rebase en Git pull

Usa `git pull --rebase` en lugar de `git pull` al mover cambios de GitHub a tu máquina local. De esta forma, tus cambios locales estarán siempre "encima" de los últimos cambios en GitHub, y evitarás las confirmaciones de fusión (que no están permitidas en este repositorio).

Puedes establecer que éste sea el comportamiento por defecto:

```
git config --global pull.rebase true
```

## Rebase de `main` antes de enviar un PR

Si estás trabajando en tu propia rama, ejecuta estos comandos antes de enviar un PR:

```
git fetch origin
git rebase origin/main
```
