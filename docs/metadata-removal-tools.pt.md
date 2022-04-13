---
title: Ferramentas de Remoção de Metadados
icon: material/tag-remove
---

Ao partilhar ficheiros, certifique-se de que remove os metadados associados. Os arquivos de imagem geralmente incluem [EXIF](https://en.wikipedia.org/wiki/Exif) dados. As fotos às vezes até incluem [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System) coordenadas nos metadados do arquivo.

## Desktop

### MAT2

!!! recomendação

    ![logótipo MAT2](/assets/img/metadata-removal/mat2.svg){ align=right }
    
    **MAT2*** é um software livre, que permite que os metadados sejam removidos dos tipos de arquivo de imagem, áudio, torrent e documentos. Ele fornece tanto uma ferramenta de linha de comando como uma interface gráfica de usuário através de uma [extensão para Nautilus](https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), o gerenciador de arquivos padrão de [GNOME](https://www.gnome.org), e [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), o gerenciador de arquivos padrão de [KDE](https://kde.org).
    
    Para usuários Linux, uma ferramenta gráfica de terceiros [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) alimentada pelo MAT2 existe e está [disponível no Flathub](https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).
    
    [Visite 0xacab.org](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://pypi.org/project/mat2)
    - [:fontawesome-brands-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
    - [:fontawesome-brands-linux: Linux](https://pypi.org/project/mat2)
    - [:fontawesome-solid-earth-americas: Web](https://0xacab.org/jvoisin/mat2#web-interface)
    - [:fontawesome-brands-gitlab: Source](https://0xacab.org/jvoisin/mat2)

### ExifCleaner

!!! recomendação

    ![ExifCleaner logo](/assets/img/metadata-removal/exifcleaner.svg){ align=right }
    
    **ExifCleaner** é um aplicativo gráfico de código aberto e gratuito que usa [ExifTool](https://exiftool.org) para remover [EXIF](https://en.wikipedia.org/wiki/Exif) metadados de imagens, vídeos e documentos PDF usando uma interface simples de arrastar e soltar. Ele suporta processamento em lote de vários núcleos e modo escuro.
    
    [Visite exifcleaner.com](https://exifcleaner.com){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://github.com/szTheory/exifcleaner/releases)
    - [:fontawesome-brands-apple: macOS](https://github.com/szTheory/exifcleaner/releases)
    - [:fontawesome-brands-linux: Linux](https://github.com/szTheory/exifcleaner/releases)
    - [:fontawesome-brands-github: Source](https://github.com/szTheory/exifcleaner)

## Telemóvel

### Exif Scrambled Exif

!!! recomendação

    ![logo Scrambled Exif](/assets/img/metadata-removal/scrambled-exif.svg){ align=right }
    
    **Scrambled Exif*** é uma ferramenta de remoção de metadados para o Android. Pode remover dados [EXIF](https://en.wikipedia.org/wiki/Exif) para muitos formatos de arquivo e foi traduzido para [many](https://gitlab.com/juanitobananas/scrambled-exif/-/tree/master/app/src/main/res) idiomas.
    
    [Visite gitlab.com](https://gitlab.com/juanitobananas/scrambled-exif){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.jarsilio.android.scrambledeggsif)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/com.jarsilio.android.scrambledeggsif)
    - [:fontawesome-brands-gitlab: Source](https://gitlab.com/juanitobananas/scrambled-exif)

### Imagepipe

!!! info

    Imagepipe só está disponível a partir do F-Droid e não no Google Play. Se você está procurando uma aplicação de pintura no Google Play sugerimos [Pocket Paint](https://play.google.com/store/apps/details?id=org.catrobat.paintroid).

!!! recomendação

    ![logótipo Imagepipe](/assets/img/metadata-removal/imagepipe.svg){ align=right }
    
    **Imagepipe** é um aplicativo de pintura para Android que pode ser usado para retocar fotos e também excluir os metadados de [EXIF](https://en.wikipedia.org/wiki/Exif). Foi traduzido para [many](https://codeberg.org/Starfish/Imagepipe#translations) idiomas.
    
    [Visite codeberg.org](https://codeberg.org/Starfish/Imagepipe){ .md-button .md-button--primary }
    
    **Downloads***
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/de.kaffeemitkoffein.imagepipe/)
    - [:fontawesome-brands-git: Source](https://codeberg.org/Starfish/Imagepipe)

### Metapho

!!! atenção

    Metapho é uma fonte fechada. Nós o recomendamos, devido às poucas escolhas que existem para os dispositivos iOS.

!!! recomendação

    ![logotipo Metapho](/assets/img/metadata-removal/metapho.jpg){ align=right }
    
    Metapho é um visualizador simples e limpo de metadados de fotos como data, nome do arquivo, tamanho, modelo da câmera, velocidade do obturador e localização.
    
    [Visite zininworks.com](https://zininworks.com/metapho){ .md-button .md-button--primary } [Política de Privacidade](https://zininworks.com/privacy/){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/metapho/id914457352)

## Linha de comando

### ExifTool

!!! recomendação

    ![logo ExifTool](/assets/img/metadata-removal/exiftool.png){ align=right }
    
    **ExifTool** é a biblioteca [original](https://en.wikipedia.org/wiki/ExifTool) biblioteca perl e aplicativo de linha de comando para leitura, escrita e edição de meta-informações (EXIF, IPTC, XMP, e mais) em uma grande variedade de formatos de arquivo (JPEG, TIFF, PNG, PDF, RAW, e mais).
    
    É frequentemente um componente de outras aplicações de remoção do EXIF e está na maioria dos repositórios de distribuição Linux.
    
    [Visite exiftool.org](https://exiftool.org){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://exiftool.org)
    - [:fontawesome-brands-apple: macOS](https://exiftool.org)
    - [:fontawesome-brands-linux: Linux](https://exiftool.org)
    - [:fontawesome-brands-git: Fonte](https://sourceforge.net/projects/exiftool)
    - [:fontawesome-brands-github: Fonte](https://github.com/exiftool/exiftool)

Para apagar dados de um diretório de arquivos:

```bash
exiftool -all= *.file_extension
```
