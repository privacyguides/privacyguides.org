---
title: Git Recommendations
---

Als je veranderingen aan deze website direct op de web editor van GitHub.com maakt, zou je je hier geen zorgen over moeten maken. Als je lokaal ontwikkelt en/of een ervaren website-editor bent (die waarschijnlijk lokaal zou moeten ontwikkelen!), overweeg dan deze aanbevelingen.

## SSH Key Commit Signing inschakelen

U kunt een bestaande SSH-sleutel gebruiken voor ondertekening, of [een nieuwe aanmaken](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

1. Configureer je Git client om standaard commits en tags te ondertekenen (verwijder `--global` om alleen standaard te ondertekenen voor deze repo):
   ```
   git config --global commit.gpgsign true
   git config --global gpg.format ssh
   git config --global tag.gpgSign true
   ```
2. Kopieer bijvoorbeeld jouw SSH publieke sleutel naar jouw klembord:
   ```
   pbcopy < ~/.ssh/id_ed25519.pub
    # Copies the contents of the id_ed25519.pub file to your clipboard
   ```
3. Stel je SSH sleutel in voor ondertekening in Git met het volgende commando, waarbij je de laatste string tussen aanhalingstekens vervangt door de publieke sleutel in je klembord:
   ```
   git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
   ```

Zorg ervoor dat je [je SSH sleutel toevoegt aan je GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account) **als een Signing Key** (in tegenstelling tot of in aanvulling op als een Authentication Key).

## Rebase op Git pull

Gebruik `git pull --rebase` in plaats van `git pull` als je wijzigingen van GitHub naar je lokale machine trekt. Op deze manier zullen je lokale wijzigingen altijd "bovenop" de laatste wijzigingen op GitHub staan, en je vermijdt merge commits (die niet zijn toegestaan in deze repo).

Je kunt dit als standaard gedrag instellen:

```
git config --global pull.rebase true
```

## Rebase van `main` voor het indienen van een PR

Als je aan jouw eigen branch werkt, voer dan deze commando's uit voordat je een PR indient:

```
git fetch origin
git rebase origin/main
```
