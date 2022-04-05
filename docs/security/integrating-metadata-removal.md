---
title: Integrating Metadata Removal
description: "Guides for integrating metadata removal solutions in a native fashion."
icon: 'material/material-data-matrix-remove'
---

When sharing files, it's important to remove associated metadata. Image files commonly include [EXIF](https://en.wikipedia.org/wiki/Exif) data, and sometimes photos even include GPS coordinates within its metadata.

While there are plenty of metadata removal tools, nothing beats a native implementation. The guides featured here aim to offer practical metadata removal solutions by integrating in a native fashion.

## Operating System Integration

### macOS

[Automator](https://support.apple.com/guide/automator/welcome/mac) is an app used to create workflows for automating repetitive tasks. Automator is developed by Apple and is bundled by default in macOS.

Workflows created in Automator can be easily integrated into macOS menus, making accessing those workflows very convenient. This guide will show you how to integrate a metadata removal workflow using Automator & ExifTool.

![ExifTool Quick Action](/assets/img/integrating-metadata-removal/preview-macos.jpg)

#### Prerequisites

1. [Homebrew](https://brew.sh): a package manager.

	```
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
	```
	
2. [ExifTool](https://exiftool.org): a tool for viewing and manipulating image, audio, video, and PDF metadata.

	```
	brew install exiftool
	```

3. [Tag](https://github.com/jdberry/tag/): a tool to manipulate tags on macOS.

	```
	brew install tag
	```

You can check if ExifTool is installed by running `exiftool -ver`. You should see a version number. Next, confirm that ExifTool is installed at `/opt/homebrew/bin/exiftool` by running `which exiftool`.

<small>
*More information on ExifTool can be found on our [metadata removal tools](/metadata-removal-tools/) page.*
</small>

#### Creating the workflow

1. Open Automator and select *File > New*

2. Choose to create a *Quick Action* workflow

3. Setup the workflow as follows:

	Workflow receives current `files or folders` in `Finder.app`

4. Drag the `Set Spotlight Comments for Finder Items` action to the workflow.

5. Enter a single space (yes, a space) into the Spotlight comments action.

6. Drag the `Run Shell Script` action to the workflow

7. Setup the action as follows:

	Shell: `/bin/zsh` &nbsp; &nbsp; &nbsp; Pass input: `as arguments`

8. In the code box for the action, enter the following:

	```
	PATH=/opt/homebrew/bin
	for f in "$@"
	do	
	exiftool -all= "$f"; tag -r "*" "$f"
	done
	```

9. Save the Quick Action workflow and give it a name

If you wish to override the original image, add `-overwrite_original` before `-all=`.

![ExifTool workflow](/assets/img/integrating-metadata-removal/workflow.jpg)

<small>
*Workflow adapted from [Christopher Anderton](https://gist.github.com/christopheranderton/0cd24b29ee20483f748b54ec79b0958b).*
<br>
*Worth mentioning: the open source [ImageOptim](https://imageoptim.com/mac) app integrates into Finder's Services menu by default.*
</small>

#### Enabling & using the workflow

1. After saving the workflow, it will be placed as a .workflow file in `~/Library/Services/`

2. Ensure the workflow is enabled by going to *System Preferences > Extensions > Finder* and enabling the workflow you created

3. The workflow will be accessible through *Quick Actions* in the context menu in Finder

### iOS/iPadOS

[Shortcuts](https://support.apple.com/guide/shortcuts/welcome/ios) is an app for building macros and automations with tight operating system integration. Shortcuts is developed by Apple.

Shortcuts in one's library can be made accessible through the system Share Sheet, making accessing those shortcuts very convenient. This guide will show you how to build a metadata removal shortcut and integrate it into the system Share Sheet.

**It's important to note that this method of metadata removal is not as comprehensive at removing metadata as using utilities like [ExifTool](/metadata-removal-tools/#exiftool) and [mat2](/metadata-removal-tools/#mat2) are.** The lack of quality metadata removal apps on the App Store is what makes this solution worthwhile.

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

![Metadata removal shortcut](/assets/img/integrating-metadata-removal/shortcut.png)

#### Enabling & using the Shortcut

1. The shortcut should be available through the system Share Sheet.
	- If it is not, then a phone restart may be required.
2. Optionally, you can add the shortcut to your home screen.

<small>
*Want to view metadata? Check out the [Metadata Viewer Shortcut](https://www.reddit.com/r/shortcuts/comments/bhi7mg/shortcut_to_view_image_metadata/)!*
</small>


### Windows

Windows allows users to place files in a *SendTo* folder which then appear in the *Send to* context menu. This guide will show you how to add an ExifTool script to this menu.

![Send to metadata removal shortcut](/assets/img/integrating-metadata-removal/sendto.jpg)

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

	```
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