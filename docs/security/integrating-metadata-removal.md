---
title: Integrating Metadata Removal
description: "Guides for integrating metadata removal solutions in a native fashion."
icon: 'material/data-matrix-remove'
---

When sharing files, it's important to remove associated metadata. Image files commonly include [EXIF](https://en.wikipedia.org/wiki/Exif) data, and sometimes photos even include GPS coordinates within its metadata.

While there are plenty of metadata removal tools, it's hard to beat the convenience of ones with native system integration. The guides featured here aim to detail how to integrate metadata removal tools in a simple fashion by utilizing system components.

## Operating System Integration

### macOS

This guide uses the [Shortcuts](https://support.apple.com/guide/shortcuts-mac/intro-to-shortcuts-apdf22b0444c/mac) app to add an ExifTool script to the *Quick Actions* context menu within Finder. Shortcuts is developed by Apple and bundled in with macOS by default.

![ExifTool Quick Action](/assets/img/integrating-metadata-removal/preview-macos.png)

#### Prerequisites

1. [Homebrew](https://brew.sh): a package manager.

    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2. [ExifTool](https://exiftool.org): a tool for viewing and manipulating image, audio, video, and PDF metadata.

    ```bash
    brew install exiftool
    ```

You can check if ExifTool is installed by running `exiftool -ver`. You should see a version number. Next, take note of where ExifTool is installed by running `which exiftool`.

<small>
*More information on ExifTool can be found on our [metadata removal tools](/metadata-removal-tools/) page.*
</small>

#### Creating the Shortcut

1. Open Shortcuts.app and create a new shortcut

2. In the shortcut's options, enable *Use as Quick Action*

    Beneath this toggle, select *Finder*
    
3. Setup the retrieval options as follows:

    Receive *Images, Media, and PDFs* input from `Quick Actions`<br>
    If there's no input: `Continue`
    
4. Add the *Run Shell Script* action to the shortcut

    You may need to enable *Allow Running Scripts* in Shortcut.app's settings
    
5. Setup the shell script action as follows:

    Shell: `zsh`<br>
    Input: `Shortcut Input`<br>
    Pass Input: `as arguments`<br>
    Run as administrator: `false`
    
6. Use the following as the body of the script:

    ```bash
    PATH=/opt/homebrew/bin
    for f in "$@"
    do
        exiftool -all= "$f";
    done
    return $@
    ```
    
    You should set your path to output of `which exiftool`.

![macOS metadata removal shortcut](/assets/img/integrating-metadata-removal/shortcut-macos.png)

<small>
*Worth mentioning: the open source [ImageOptim](https://imageoptim.com/mac) app integrates into Finder's Services menu by default.*
</small>

#### Enabling & using the Shortcut

1. Ensure the shortcut is enabled by going to *System Preferences > Extensions > Finder* and enabling the shortcut you created.

    In this menu, you can drag to reposition the shortcut.

3. The shortcut will be accessible through *Quick Actions* context menu within Finder.

### iOS/iPadOS

[Shortcuts](https://support.apple.com/guide/shortcuts/welcome/ios) can be made accessible through the system Share Sheet, making accessing those shortcuts very convenient. This guide will show you how to build a metadata removal shortcut and integrate it into the system Share Sheet.

**It's important to note that this method of metadata removal is not as comprehensive at removing metadata as utilities like [ExifTool](/metadata-removal-tools/#exiftool) and [mat2](/metadata-removal-tools/#mat2) are.** The lack of *good* metadata removal apps on the App Store is what makes this solution somewhat worthwhile.

![Don't preserve metadata shortcut](/assets/img/integrating-metadata-removal/preview-ios.png)

#### Prerequisites

1. [Shortcuts](https://apps.apple.com/us/app/shortcuts/id915249334) via the App Store.

#### Creating the Shortcut

1. Create a new Shortcut

2. Enter the Shortcut's settings and enable *Show in Share Sheet*

3. Set the Share Sheet retrieval options as follows:

    Recieve `Images` input from `Share Sheet`<br>
    If there's no input: `Continue`

4. Add an *If* action

5. Set the *If* action as follows:

    If `Shortcut Input` `has any value`<br>
    Otherwise<br>
    Select photos *(add this action)*<br>
    End If

6. Add the *Convert Image* action after the *End If*

    Convert `If Result` to `Match Input`<br>
    Preserve Metadata: **false**

7. Add the *Share* action

    Share `Converted Image`

![iOS/iPadOS metadata removal shortcut](/assets/img/integrating-metadata-removal/shortcut-ios.png)

#### Enabling & using the Shortcut

1. The shortcut should be available through the system Share Sheet.
    - If it is not, then a phone restart may be required.
2. Optionally, you can add the shortcut to your home screen.

### Windows

Windows allows users to place files in a *SendTo* folder which then appear in the *Send to* context menu. This guide will show you how to add an ExifTool script to this menu.

![Send to metadata removal shortcut](/assets/img/integrating-metadata-removal/preview-windows.jpg)

#### Prerequisites

1. [ExifTool](https://exiftool.org): a tool for viewing and manipulating image, audio, video, and PDF metadata.

    [Installation instructions](https://exiftool.org/install.html#Windows)

You can check if ExifTool is present in your [PATH](https://www.computerhope.com/issues/ch000549.htm) by running `exiftool -ver` in Command Prompt. You should see a version number.

#### Creating the shortcut

1. Navigate to *%appdata%\Microsft\Windows\SendTo*

2. Right click in the *SendTo* folder and create a new *Text Document*

3. Name the file *ExifTool.bat* (any name works, however it must end in *.bat*)

    You may need to [enable](https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/) *File name extensions*

4. Open *ExifTool.bat* in Notepad

5. Copy the following into the document:

    ```bash
    exiftool -fast4 -if "$filepermissions =~ /^.w/" %*
    if not errorlevel 0 (
        echo Some files are write protected
        exit /b %errorlevel%
        )
    exiftool -all= %*
    ```

6. Save

#### Using the shortcut

1. Right click a supported file and choose *ExifTool.bat* within the *Send to* context menu
