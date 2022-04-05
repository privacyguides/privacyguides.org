---
title: Integrating Metadata Removal
description: "Integrate metadata removal on a system level (placeholder desc.)"
icon: 'material/material-data-matrix-remove'
---

## Operating System Integration

### macOS

[Automator](https://support.apple.com/guide/automator/welcome/mac) is an app used to create workflows for automating repetitive tasks. Automator is developed by Apple and is bundled by default in macOS.

Workflows created in Automator can be easily integrated into the operating system, making accessing those workflows very convenient. This guide will show you how to integrate a metadata removal workflow into Finder.

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
*ExifTool version 12.30 was used for this guide.
<br>
More information on ExifTool can be found on our [metadata removal tools](/metadata-removal-tools/) page.*
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
*Workflow inspired by [Christopher Anderton](https://gist.github.com/christopheranderton/0cd24b29ee20483f748b54ec79b0958b).*
<br>
*Worth mentioning: the open source [ImageOptim](https://imageoptim.com/mac) app integrates into Finder's Services menu by default.*
</small>

#### Enabling & using the workflow

1. After saving the workflow, it will be placed as a .workflow file in `~/Library/Services/`

2. Ensure the workflow is enabled by going to *System Preferences > Extensions > Finder* and enabling the workflow you created

3. The workflow will be accessible through *Quick Actions* in the context menu in Finder