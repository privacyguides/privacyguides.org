---
title: Windows Overview
icon: material/microsoft-windows
description: Microsoft Windows is a common operating system which is extremely non-private out of the box. Our guide covers making some improvements to your computer without replacing your OS.
---
**Microsoft Windows** is a common OS shipped with many PCs by default. The following guides aim to provide some ways to improve privacy and reduce the default telemetry and data stored by disabling some unnecessary features. Over time, Microsoft adds features to the OS which can sometimes rely on cloud-based services. These features will often require certain types of [optional data](https://privacy.microsoft.com/data-collection-windows) that is sometimes sent to remote servers for processing.

One of the newest examples was called **Recall**, a part of the Copilot AI feature set. Recall periodically screenshots anything you've seen on your PC in order to show it to you at a later date. These "helpful" features create considerable metadata which can be forensically analyzed. In most cases browsing history is sufficient and this feature can be safely disabled. The main concerns with Recall was that the data is stored in a local database that is decrypted when your device is powered on, meaning it is an easy target for hackers if the device ever becomes infected with malware. Recall will not redact sensitive information like copied passwords or financial information from the database, but it does protect against making screenshots of any copyrighted content protected by digital rights management (DRM) systems.

Unfortunately, this feature was added without too much thought about the privacy implications of having such a feature enabled by default (which it now [no longer is](https://wired.com/story/microsoft-recall-off-default-security-concerns)). It is not an isolated example, however. Another example was Microsoft automatically [enabling folder backups to OneDrive](https://neowin.net/news/windows-11-is-now-automatically-enabling-onedrive-folder-backup-without-asking-permission) on new Windows 11 installations without asking for permission.

You can enhance your privacy and security on Windows without downloading any third-party tools with these guides:

- Initial Installation (coming soon)
- [Group Policy Settings](group-policies.md)
- Privacy Settings (coming soon)
- Application Sandboxing (coming soon)
- Security Hardening (coming soon)

<div class="admonition example" markdown>
<p class="admonition-title">This section is new</p>

This section is a work in progress, because it takes considerably more time and effort to make a Windows installation more privacy friendly than other operating systems.

</div>

## Privacy Notes

Microsoft Windows, particularly those versions aimed at consumers like the **Home** version often don't prioritize privacy friendly features by [default](https://theguardian.com/technology/2015/jul/31/windows-10-microsoft-faces-criticism-over-privacy-default-settings). As a result we often see more [data collection](https://en.wikipedia.org/wiki/Criticism_of_Microsoft#Telemetry_and_data_collection) than necessary, without any real warnings that this is the default behavior. In an attempt to compete with Google in the advertising space, [Cortana](https://en.wikipedia.org/wiki/Cortana_(virtual_assistant)) has included unique identifiers such as an "advertising ID" in order to correlate usage and assist advertisers in targeted advertising.  At launch, telemetry could not be disabled in non-enterprise editions of Windows 10. It still cannot be disabled, but Microsoft added the ability to [reduce](https://extremetech.com/computing/243079-upcoming-windows-update-reduces-spying-microsoft-still-mum-data-collects) the data that is sent to them.

With Windows 11 there are a number of restrictions or defaults such as:

- Requiring the use of a Microsoft account instead of a local account.
- Making it more difficult to find local account options for Windows **Pro** and **Enterprise**.
- Enabling all data collection options by default, requiring users to "opt out".
- Heavily integrating Microsoft services like Bing, OneDrive, and Teams in ways which are difficult to remove and presented as the only option to users.
- Setting the default browser always to Edge, or reverting to Edge if it's changed.
- Adding cloud-based AI features to many areas in Windows and various Microsoft Apps.
- Unnecessarily storing sensitive data. Even data which is stored locally and not sent to Microsoft is still a target for hackers or malware on your device.

Microsoft often uses the automatic updates feature to add new functionality to your device and make changes that collect your data and are enabled by default. Some [privacy features](https://blogs.windows.com/windows-insider/2023/11/16/previewing-changes-in-windows-to-comply-with-the-digital-markets-act-in-the-european-economic-area) such as the option to *opt out* of syncing an online Microsoft account with Windows, require you to select a country in the EEA (European Economic Area) during installation. It can be changed to your real country after Windows is installed.

## Windows Editions

Many critical privacy and security features are unfortunately locked away behind higher-cost editions of Windows, instead of being available in Windows **Home**. Some features missing from **Home** include Bitlocker Drive Encryption, Hyper-V, and Windows Sandbox. In our Windows guides we will cover how to use all of these features appropriately, so having a premium edition of Windows will be necessary.

Windows **Enterprise** provides the most flexibility when it comes to configuring privacy and security settings built in to Windows. For example, they are the only editions that allow you to enable the highest level of restrictions on data sent to Microsoft via telemetry tools. Unfortunately, Enterprise is not available for retail purchase, so it may not be available to you.

The best version available for *retail* purchase is Windows **Pro** as it has nearly all of the features you'll want to use to secure your device, including Bitlocker, Hyper-V, etc. The only thing missing is some of the most restrictive limitations on Microsoft's telemetry unfortunately.

Students and teachers may be able to obtain a Windows **Education** (equivalent to Enterprise) or **Pro Education** license (equivalent to Pro) for free, including on personal devices, from their educational institution. Many schools partner with Microsoft via OnTheHub or Microsoft Azure for Education, so you can check those sites or your school's benefits page to see if you qualify. Whether or not you are able to get these licenses depends entirely on your institution. This may be the best way for many people to obtain an Enterprise-level edition of Windows for personal use. There are no additional privacy or security risks associated with using an Education license compared to the retail versions.

It is not recommended to use third party modified versions of Windows such as Windows AME. Since modified versions of Windows like Windows AME don't receive updates, security features and antivirus definitions in Windows Defender will fall behind the current threat landscape, opening you up to attacks, thus making you even less secure.

## Obtaining Windows

Currently, only Windows 11 license keys are available for purchase, but these keys will work on Windows 10 as well, so you can still purchase a Windows 11 Pro key to activate a Windows 10 install.

The official [Media Creation Tool](https://microsoft.com/software-download/windows11) is the best way to put a Windows installer on a USB flash drive. Third-party tools like Rufus or Etcher may unexpectedly modify the files, which could lead to boot issues or other troubles when installing.

This tool only lets you install a **Home** or **Pro** installation, as there are no publicly available downloads for Windows **Enterprise** edition. If you have an **Enterprise** license key, you can easily upgrade a **Pro** installation. To do this, install Windows **Pro** without entering a license key during setup, then enter your **Enterprise** key in the Settings app after completing the install. Your **Pro** install will be upgraded to **Enterprise** automatically after entering a valid license key.

If you are installing an **Education** license then you will typically have a private download link that will be provided alongside your license key when you obtain it from your institution's benefits portal.
