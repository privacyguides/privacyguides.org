---
title: "Outils de Productivité"
icon: material/file-sign
---

La plupart des suites bureautiques en ligne ne prennent pas en charge l'E2EE, ce qui signifie que le fournisseur de cloud a accès à tout ce que vous faites. La politique de confidentialité peut protéger légalement vos droits, mais elle ne fournit pas de contraintes techniques d'accès.

## Suites Bureautiques

Nous recommandons d'utiliser une suite Office locale. Si vous utilisez Microsoft Windows, nous vous conseillons d'opter pour Microsoft Office car il bénéficie du soutien de [MDAG](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-application-guard/md-app-guard-overview) qui empêche les fichiers Word, PowerPoint et Excel non fiables d'accéder aux ressources fiables. Application Guard ouvre des fichiers non fiables dans un conteneur isolé avec [Hyper-V](https://fr.wikipedia.org/wiki/Hyper-V) d'activé. Sur macOS [iWork](https://www.apple.com/fr/iwork/) implémente [App Sandbox](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html).

Pour les autres plateformes, considérez ci-dessous :

### LibreOffice

!!! recommendation

    ![Logo de LibreOffice](assets/img/productivity/libreoffice.svg){ align=right }
    
    **LibreOffice** est une suite bureautique gratuite et open-source aux fonctionnalités étendues.
    
    [Page d'accueil](https://www.libreoffice.org){ .md-button .md-button--primary } [Politique de confidentialité](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .md-button }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://www.libreoffice.org/download/download/)
        - [:fontawesome-brands-apple: macOS](https://www.libreoffice.org/download/download/)
        - [:fontawesome-brands-linux: Linux](https://www.libreoffice.org/download/download/)
        - [:pg-flathub: Flatpak](https://www.libreoffice.org/download/download/)
        - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/editors/libreoffice/)
        - [:pg-openbsd: OpenBSD](https://openports.se/editors/libreoffice)
        - [:pg-netbsd: NetBSD](https://pkgsrc.se/misc/libreoffice)
        - [:fontawesome-brands-google-play: Google Play](https://www.libreoffice.org/download/android-and-ios/)
        - [:fontawesome-brands-app-store-ios: App Store](https://www.libreoffice.org/download/android-and-ios/)
        - [:fontawesome-brands-git: Source](https://www.libreoffice.org/about-us/source-code)

### OnlyOffice

!!! recommendation

    ![Logo OnlyOffice](assets/img/productivity/onlyoffice.svg){ align=right }
    
    **OnlyOffice** est une suite bureautique gratuite et open-source basée sur le cloud et dotée de nombreuses fonctionnalités, notamment l'intégration avec Nextcloud.
    
    [Page d'accueil](https://www.onlyoffice.com){ .md-button .md-button--primary } [Privacy Policy](https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0){ .md-button }
    
    ??? downloads
    
        - [:fontawesome-brands-windows: Windows](https://www.onlyoffice.com/download-desktop.aspx)
        - [:fontawesome-brands-apple: macOS](https://www.onlyoffice.com/download-desktop.aspx)
        - [:fontawesome-brands-linux: Linux](https://www.onlyoffice.com/download-desktop.aspx)
        - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/www/onlyoffice-documentserver/)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.onlyoffice.documents)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id944896972)
        - [:fontawesome-brands-github: Source](https://github.com/ONLYOFFICE)

### Framadate

!!! warning
    PrivateBin utilise JavaScript pour gérer le chiffrement, vous devez donc faire confiance au fournisseur dans la mesure où il n'injecte pas de JavaScript malveillant pour obtenir votre clé privée.

    ![Logo Framadate](assets/img/productivity/framadate.svg){ align=right }
    
    **Framadate** est un service en ligne gratuit et open-source pour planifier un rendez-vous ou prendre une décision rapidement et facilement. Aucune inscription n'est requise.
    
    [:octicons-home-16: Page d'accueil](https://cryptpad.fr){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptpad.fr/pad/#/2/pad/view/GcNjAWmK6YDB3EO2IipRZ0fUe89j43Ryqeb4fjkjehE/){ .card-link title="Politique de Confidentialité" }
    [:octicons-info-16:](https://docs.cryptpad.fr/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/xwiki-labs/cryptpad){ .card-link title="Code Source" }
    [:octicons-heart-16:](https://opencollective.com/cryptpad){ .card-link title=Contribuer }

## Organisation

### PrivateBin

!!! recommendation

    ![Logo PrivateBin](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** est un service de collage en ligne minimaliste et open-source où le serveur n'a aucune connaissance des données collées. Les données sont chiffrées/déchiffrées dans le navigateur en utilisant AES 256 bits. Il s'agit de la version améliorée de ZeroBin. Il existe une [liste d'instances] (https://privatebin.info/directory/).
    
    [:octicons-home-16: Homepage ](https://privatebin.info){ .md-button .md-button--primary }
    [:octicons-server-16:](https://privatebin.info/directory/){ .card-link title="Instances publiques"}
    [:octicons-info-16:](https://github.com/PrivateBin/PrivateBin/wiki/FAQ){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/PrivateBin/PrivateBin){ .card-link title="Code Source" }
