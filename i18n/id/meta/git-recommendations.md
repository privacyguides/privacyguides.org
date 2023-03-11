---
title: Rekomendasi Git
---

Jika Anda membuat perubahan pada situs web ini di editor web GitHub.com secara langsung, Anda tidak perlu khawatir tentang hal ini. Jika Anda mengembangkan secara lokal dan/atau merupakan editor situs web jangka panjang (yang mungkin harus mengembangkan secara lokal!), pertimbangkan rekomendasi ini.

## Enable SSH Key Commit Signing

You can use an existing SSH key for signing, or [create a new one](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

1. Configure your Git client to sign commits and tags by default (remove `--global` to only sign by default for this repo):
   ```
   git config --global commit.gpgsign true
   git config --global gpg.format ssh
   git config --global tag.gpgSign true
   ```
2. Copy your SSH public key to your clipboard, for example:
   ```
   pbcopy < ~/.ssh/id_ed25519.pub
    # Copies the contents of the id_ed25519.pub file to your clipboard
   ```
3. Set your SSH key for signing in Git with the following command, replacing the last string in quotes with the public key in your clipboard:
   ```
   git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
   ```

Ensure you [add your SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account) **as a Signing Key** (as opposed to or in addition to as an Authentication Key).

## Rebase on Git pull

Gunakan `git pull --rebase` alih-alih `git pull` saat menarik perubahan dari GitHub ke mesin lokal Anda. Dengan cara ini perubahan lokal Anda akan selalu "di atas" perubahan terbaru di GitHub, dan Anda menghindari komit gabungan (yang dilarang dalam repo ini).

Anda dapat mengatur ini menjadi perilaku default:

```
git config --global pull.rebase true
```

## Rebase dari `utama` sebelum mengirimkan PR

Jika Anda bekerja pada cabang Anda sendiri, jalankan perintah ini sebelum mengirimkan PR:

```
git fetch origin
git rebase origin/main
```
