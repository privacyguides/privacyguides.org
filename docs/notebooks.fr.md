---
title: "Bloc-notes"
icon: material/notebook-edit-outline
---

Gardez une trace de vos notes et de vos journaux sans les donner à un tiers.

Si vous utilisez actuellement une application comme Evernote, Google Keep, ou Microsoft OneNote, nous vous suggérons de choisir ici une alternative qui supporte l'E2EE.

## Basé sur le cloud

### Joplin

!!! recommendation

    ![Logo Joplin](assets/img/notebooks/joplin.svg){ align=right }
    
    **Joplin** est une application gratuite, open-source et complète de prise de notes et de tâches à accomplir qui peut gérer un grand nombre de notes écrites en markdown organisées en carnets et en balises. Il offre E2EE et peut se synchroniser via Nextcloud, Dropbox, et plus encore. Il permet également d'importer facilement des notes d'Evernote et des notes en texte brut.
    
    [:octicons-home-16: Page d'accueil](https://joplinapp.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://joplinapp.org/privacy/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://joplinapp.org/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/laurent22/joplin){ .card-link title="Code source" }
    [:octicons-heart-16:](https://joplinapp.org/donate/){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.cozic.joplin)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/joplin/id1315599797)
        - [:simple-github: GitHub](https://github.com/laurent22/joplin-android/releases)
        - [:simple-windows11: Windows](https://joplinapp.org/#desktop-applications)
        - [:simple-apple: macOS](https://joplinapp.org/#desktop-applications)
        - [:simple-linux: Linux](https://joplinapp.org/#desktop-applications)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/joplin-web-clipper/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/joplin-web-clipper/alofnhikmmkdbbbgpnglcpdollgjjfek)

Joplin ne prend pas en charge la protection par mot de passe/PIN de [l'application elle-même ou des notes et cahiers individuels](https://github.com/laurent22/joplin/issues/289). Les données sont toujours chiffrées en transit et à l'emplacement de la synchronisation à l'aide de votre clé principale.

### Standard Notes

!!! recommendation

    ![Logo de Standard Notes](assets/img/notebooks/standard-notes.svg){ align=right }
    
    Standard Notes est une application de notes simple et privée qui rend vos prises de notes faciles et disponibles partout où vous êtes. Il propose E2EE sur toutes les plateformes et une expérience de bureau puissante avec des thèmes et des éditeurs personnalisés. Il a également fait l'objet d'un [audit indépendant (PDF)](https://s3.amazonaws.com/standard-notes/security/Report-SN-Audit.pdf).
    
    [:octicons-home-16: Page d'accueil](https://standardnotes.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://standardnotes.com/privacy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://standardnotes.com/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/standardnotes){ .card-link title="Code source" }
    [:octicons-heart-16:](https://standardnotes.com/donate){ .card-link title=Contribuer }
    
    ??? downloads "Téléchargements"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.standardnotes)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1285392450)
        - [:simple-github: GitHub](https://github.com/standardnotes/app/releases)
        - [:simple-windows11: Windows](https://standardnotes.com)
        - [:simple-apple: macOS](https://standardnotes.com)
        - [:simple-linux: Linux](https://standardnotes.com)
        - [:octicons-globe-16: Web](https://app.standardnotes.com/)

### Cryptee

!!! recommendation

    ![Logo Cryptee](./assets/img/notebooks/cryptee.svg#only-light){ align=right }
    ![Logo Cryptee](./assets/img/notebooks/cryptee-dark.svg#only-dark){ align=right }
    
    **Cryptee** est un éditeur de documents E2EE et une application de stockage de photos à code source ouvert, basés sur le web. Cryptee est une PWA, ce qui signifie qu'elle fonctionne de manière transparente sur tous les appareils modernes sans nécessiter d'applications natives pour chaque plate-forme respective.
    
    [:octicons-home-16: Page d'accueil](https://crypt.ee){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://crypt.ee/privacy){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://crypt.ee/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/cryptee){ .card-link title="Code source" }
    
    ??? downloads "Téléchargements"
    
        - [:octicons-globe-16: PWA](https://crypt.ee/download)

Cryptee offre 100 Mo de stockage gratuit, avec des options payantes si vous avez besoin de plus. L'inscription ne nécessite pas d'e-mail ou d'autres informations permettant d'identifier la personne.

## Blocs-notes locaux

### Org-mode

!!! recommendation

    ! [Logo Org-mode](assets/img/notebooks/org-mode.svg){ align=right }
    
    **Org-mode** est un [mode majeur](https://www.gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html) pour GNU Emacs. Org-mode permet de prendre des notes, de tenir à jour des listes TODO, de planifier des projets et de rédiger des documents à l'aide d'un système de texte brut rapide et efficace. La synchronisation est possible avec des outils de [synchronisation de fichiers](file-sharing.md#file-sync).
    
    [:octicons-home-16: Page d'accueil](https://orgmode.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://orgmode.org/manuals.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://git.savannah.gnu.org/cgit/emacs/org-mode.git){ .card-link title="Code source" }
    [:octicons-heart-16:](https://liberapay.com/bzg){ .card-link title=Contribuer }

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum](https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

- Les clients doivent être open-source.
- Toute fonctionnalité de synchronisation cloud doit être E2EE.
- Doit permettre l'export de documents dans un format standard.

### Dans le meilleur des cas

- La fonctionnalité de sauvegarde/synchronisation locale doit prendre en charge le chiffrement.
- Les plateformes basées sur le cloud doivent permettre le partage de documents.
