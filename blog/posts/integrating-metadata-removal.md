---
date:
    created: 2022-04-09
categories:
    - Tutorials
authors:
    - contributors
links:
    - Metadata Removal Tools: https://www.privacyguides.org/data-redaction/
tags:
    - macOS
    - iOS
    - Windows
license: BY-SA
description: When sharing files, it's important to remove associated metadata. Image files commonly include Exif data, and sometimes photos even include GPS coordinates within its metadata.
schema_type: AnalysisNewsArticle
---
# Removing Metadata From Your Photos, Videos, and Other Files

When sharing files, it's important to remove associated metadata. Image files commonly include [Exif](https://en.wikipedia.org/wiki/Exif) data, and sometimes photos even include GPS coordinates within its metadata.<!-- more -->

While there are plenty of metadata removal tools, they typically aren't convenient to use. The guides featured here aim to detail how to integrate metadata removal tools in a simple fashion by utilizing easy-to-access system features.

## macOS

This guide uses the [Shortcuts](https://support.apple.com/guide/shortcuts-mac/intro-to-shortcuts-apdf22b0444c/mac) app to add an [ExifTool](https://www.privacyguides.org/data-redaction#exiftool) script to the *Quick Actions* context menu within Finder. Shortcuts is developed by Apple and bundled in with macOS by default.

Shortcuts is quite intuitive to work with, so if you don't like the behavior demoed here then experiment with your own solution. For example, you could set the shortcut to take a clipboard input instead. The sky's the limit.

![ExifTool Quick Action](../assets/images/metadata-removal/preview-macos.webp)

### Prerequisites

1. [Homebrew](https://brew.sh): a package manager.

    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2. ExifTool is a tool for viewing and manipulating image, audio, video, and PDF metadata.

    ```bash
    brew install exiftool
    ```

!!! note
    You can check if ExifTool is installed by running `exiftool -ver`. You should see a version number.

### Creating the Shortcut

1. Open **Shortcuts.app** and create a new shortcut

2. In the shortcut's options, check **Use as Quick Action** and **Finder**

3. Set up the retrieval options:

    - Receive **Images, Media, and PDFs** input from **Quick Actions**
    - If there is no input select **Continue**

4. Add the **Run Shell Script** action to the shortcut. You may need to enable **Allow Running Scripts** in Shortcut.app's settings

5. Set up the shell script action:
     - Select **zsh** from the shell list
     - Set the input to **Shortcut Input**
     - Select **as arguments** for the pass input
     - Leave **Run as administrator** unchecked

6. Use the following as the body of the script:

    ```bash
    for f in "$@"
    do
        exiftool -all= "$f";
    done
    ```

![macOS metadata removal shortcut](../assets/images/metadata-removal/shortcut-macos.webp)

!!! tip "Worth Mentioning"
    The open-source [ImageOptim](https://imageoptim.com/mac) app integrates into Finder's *Services* context menu by default. While it is primarily an image optimization app, it also removes metadata.

### Enabling & using the Shortcut

1. The shortcut will be accessible through **Quick Actions** context menu within Finder.

2. If you want to reposition the shortcut within the context menu, go to:<br>
   **System Preferences** → **Extensions** → **Finder and drag the shortcut's position**.

## iOS and iPadOS

[Shortcuts](https://support.apple.com/guide/shortcuts/welcome/ios) can be made accessible through the system Share Sheet, making accessing those shortcuts very convenient. This guide will show you how to build a metadata removal shortcut and integrate it into the system *Share Sheet*.

!!! warning
    This method of metadata removal is not as comprehensive at removing metadata as utilities like [ExifTool](https://www.privacyguides.org/data-redaction#exiftool) and [mat2](https://www.privacyguides.org/data-redaction#mat2) are.

The lack of *good* metadata removal apps on the App Store is what makes this solution worthwhile.

![Don't preserve metadata shortcut](../assets/images/metadata-removal/preview-ios.webp)

### Prerequisites

1. [Shortcuts](https://apps.apple.com/us/app/shortcuts/id915249334) via the App Store.

### Creating the Shortcut

1. Create a new Shortcut

2. Enter the Shortcut's settings and check **Show in Share Sheet**

3. Add a **Receive** action and set it to receive **Images** from **Share Sheet**

4. Add an **If** action

5. Set the **If** action to **Shortcut Input** and **has any value**

6. Add an **Otherwise** action

7. Add an **End If** action

8. Add a **Convert** action and set it to **If Result** and **Match Input**

9. Finally, add a **Share** action and set that to **Converted Image**

10. Make sure that you uncheck **preserve metadata**

![iOS/iPadOS metadata removal shortcut](../assets/images/metadata-removal/shortcut-ios.webp)

### Enabling & using the Shortcut

1. The shortcut should be available through the system Share Sheet. If it is not, then a device restart may be required.
2. Optionally, you can add the shortcut to your home screen.

## Windows

Windows allows you to place files in a **SendTo** folder which then appear in the *Send to* context menu. This guide will show you how to add an [ExifTool](https://www.privacyguides.org/data-redaction#exiftool) batch script to this menu.

![Send to metadata removal shortcut](../assets/images/metadata-removal/preview-windows.jpg)

### Prerequisites

1. ExifTool is a tool for viewing and manipulating image, audio, video, and PDF metadata. We suggest you read the [Installation instructions](https://exiftool.org/install.html#Windows) on the official website.

!!! note
    You can check if ExifTool is present in your [PATH](https://www.computerhope.com/issues/ch000549.htm) by running `exiftool -ver` in Command Prompt. You should see a version number.

### Creating the shortcut

1. Navigate to `%appdata%\Microsoft\Windows\SendTo`

2. Right click in the **SendTo** folder and create a new **Text Document**

3. Name the file `ExifTool.bat` (any name works, however it must end in `.bat`)

    !!! note
        You may need to check if [file name extensions](https://support.microsoft.com/en-us/windows/common-file-name-extensions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01) are enabled.

4. Open **ExifTool.bat** in Notepad

5. Copy the following into the document:

    ```bat
    exiftool -fast4 -if "$filepermissions =~ /^.w/" %*
    if not errorlevel 0 (
        echo Some files are write protected
        exit /b %errorlevel%
    )
    exiftool -all= %*
    ```

6. Save

### Using the shortcut

1. Right click a supported file and choose **ExifTool.bat** within the *Send to* context menu.
