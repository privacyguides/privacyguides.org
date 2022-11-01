---
title: Git Recommendations
---
If you make changes to this website on GitHub.com's web editor directly, you shouldn't have to worry about this. If you are developing locally and/or are a long-term website editor (who should probably be developing locally!), consider these recommendations.

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

Use `git pull --rebase` instead of `git pull` when pulling in changes from GitHub to your local machine. This way your local changes will always be "on top of" the latest changes on GitHub, and you avoid merge commits (which are disallowed in this repo).

You can set this to be the default behavior:

```
git config --global pull.rebase true
```

## Rebase from `main` before submitting a PR

If you are working on your own branch, run these commands before submitting a PR:

```
git fetch origin
git rebase origin/main
```
