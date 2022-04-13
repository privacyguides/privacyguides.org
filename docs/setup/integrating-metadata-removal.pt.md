---
title: Integração da Remoção de Metadados
description: "Guias para integrar soluções de remoção de metadados de uma forma nativa."
icon: 'material/data-matrix-remove'
---

Ao compartilhar arquivos, é importante remover os metadados associados. Os arquivos de imagem geralmente incluem [EXIF](https://en.wikipedia.org/wiki/Exif) dados, e às vezes as fotos até incluem coordenadas GPS dentro dos seus metadados.

Embora existam muitas ferramentas de remoção de metadados, elas normalmente não são convenientes de usar. Os guias aqui apresentados têm como objectivo detalhar como integrar ferramentas de remoção de metadados de uma forma simples, utilizando funcionalidades de fácil acesso ao sistema.

!!! dica "Related"
    Para uma lista das ferramentas de remoção de metadados que recomendamos, visite nossa página [ferramentas de remoção de metadados](/metadata-removal-tools/) .

## macOS

Este guia usa o [Atalhos](https://support.apple.com/guide/shortcuts-mac/intro-to-shortcuts-apdf22b0444c/mac) app para adicionar um script ExifTool ao *Acções rápidas* menu de contexto dentro do Finder. O Shortcuts é desenvolvido pela Apple e incluído com macOS por padrão.

Os atalhos são bastante intuitivos para se trabalhar, por isso, se não gostar do comportamento aqui demonstrado, então experimente a sua própria solução. Por exemplo, você poderia definir o atalho para pegar uma entrada de clipboard em seu lugar. O céu é o limite.

![ExifTool Ação Rápida](/assets/img/integrating-metadata-removal/preview-macos.png)

### Pré-requisitos

1. [Homebrew](https://brew.sh): um gestor de pacotes.

    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2. [ExifTool](/metadata-removal-tools/#exiftool): uma ferramenta para visualização e manipulação de metadados de imagem, áudio, vídeo e PDF.

    ```bash
    instalar exiftool
    ```

!!! nota
    Você pode verificar se o ExifTool está instalado executando `exiftool -ver`. Você deve ver um número de versão.

### Criando o Atalho

1. Abrir **Shortcuts.app** e criar um novo atalho

2. Nas opções do atalho, verifique **Use como ação rápida** e **Finder**

3. Configure as opções de recuperação:

    - Receber **Imagens, Mídia e PDFs** entrada de **Ações rápidas**
    - Se não houver entrada seleccione **Continuar**

4. Adicione o **Run Shell Script** ação para o atalho. Você pode precisar habilitar **Allow Running Scripts** em Shortcut.app's settings

5. Configure a ação do shell script:
     - Selecione **zsh** da lista da shell
     - Defina a entrada para **Atalho Entrada**
     - Selecione **como argumentos** para a entrada do passe
     - Deixar **Executar como administrador** desmarcado

6. Use o seguinte como o corpo do roteiro:

    ```bash
    for f in "$@"
    do
        exiftool -all= "$f";
    done
    ```

![atalho de remoção de metadados macOS](/assets/img/integrating-metadata-removal/shortcut-macos.png)

!!! dica "Worth Mentioning"
    The open source [ImageOptim](https://imageoptim.com/mac) app integrates into Finder's *Services* context menu by default. Embora seja principalmente um aplicativo de otimização de imagens, ele também remove metadados.

### Activando & usando o Atalho

1. O atalho estará acessível através de **Acções rápidas** menu de contexto dentro do Finder.

2. Se você quiser reposicionar o atalho dentro do menu de contexto, vá para:<br> **Preferências do Sistema** → **Extensões** → **Localizar e arrastar a posição do atalho**.

## iOS e iPadOS

[Atalhos](https://support.apple.com/guide/shortcuts/welcome/ios) podem ser tornados acessíveis através do sistema Share Sheet, tornando o acesso a esses atalhos muito conveniente. Este guia irá mostrar-lhe como construir um atalho de remoção de metadados e integrá-lo no sistema *Share Sheet*.

!!! atenção
    Este método de remoção de metadados não é tão abrangente na remoção de metadados como utilitários como [ExifTool](/metadata-removal-tools/#exiftool) e [mat2](/metadata-removal-tools/#mat2) são.

A falta de *bom* aplicações de remoção de metadados na App Store é o que faz esta solução valer a pena.

![Não preservar o atalho de metadados](/assets/img/integrating-metadata-removal/preview-ios.png)

### Pré-requisitos

1. [Atalhos](https://apps.apple.com/us/app/shortcuts/id915249334) através da App Store.

### Criando o Atalho

1. Criar um novo Atalho

2. Digite as configurações do Atalho e verifique **Show in Share Sheet**

3. Adicionar um **Receber** acção e defini-lo para receber **Imagens** de **Partilhar Folha**

4. Adicionar um **Se** acção

5. Definir o **Se** acção para **Entrada de atalho** e **tem qualquer valor**

6. Adicionar um **Caso contrário** acção

7. Adicionar um **End Se** acção

8. Adicionar um **Converter** acção e defini-lo como **Se Resultado** e **Match Input**

9. Finalmente, adicione um **Share** action e defina isso para **Converted Image**

10. Certifique-se de desmarcar **preservar metadados**

![atalho de remoção de metadados iOS/iPadOS](/assets/img/integrating-metadata-removal/shortcut-ios.png)

### Activando & usando o Atalho

1. O atalho deve estar disponível através da Folha de Partilha do sistema. Se não for, então pode ser necessário reiniciar o dispositivo.
2. Opcionalmente, você pode adicionar o atalho para o seu ecrã inicial.

## Windows

O Windows permite que os usuários coloquem arquivos em uma pasta **SendTo** que então aparecem no menu de contexto *Send to* . Este guia irá mostrar-lhe como adicionar um script em lote ExifTool a este menu.

![Enviar para o atalho de remoção de metadados](/assets/img/integrating-metadata-removal/preview-windows.jpg)

### Pré-requisitos

1. [ExifTool](/metadata-removal-tools/#exiftool): uma ferramenta para visualização e manipulação de metadados de imagem, áudio, vídeo e PDF. We suggest you read the [Installation instructions](https://exiftool.org/install.html#Windows) on the official website.

!!! nota
    Você pode verificar se ExifTool está presente no seu [PATH](https://www.computerhope.com/issues/ch000549.htm) executando `exiftool -ver` no Prompt de Comando. Você deve ver um número de versão.

### Criando o atalho

1. Navegar para `%appdata%\Microsoft\Windows\SendTo`

2. Clique com o botão direito na pasta **SendTo** e crie um novo **Text Document**

3. Nome do arquivo `ExifTool.bat` (qualquer nome funciona, porém deve terminar em `.bat`)

    !!! nota
     Você pode precisar verificar se [extensões de nome de arquivo](https://support.microsoft.com/en-us/windows/common-file-name-extensions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01) estão habilitados.

4. Abrir **ExifTool.bat** no Bloco de Notas

5. Copie o seguinte para o documento:

    ```bat
    exiftool -fast4 -if "$filepermissions =~ /^.w/" %*
    se não houver nível de erro 0 (
        echo Alguns arquivos são protegidos contra gravação
        sair /b %errorlevel%
    )
    exiftool -all= %*
    ```

6. Salvar

### Usando o atalho

1. Clique com o botão direito do rato num ficheiro suportado e escolha **ExifTool.bat** dentro do *Enviar para* menu de contexto
