---
title: Windows Overview
icon: material/microsoft-windows
---
**Microsoft Windows** is a proprietary operating system in widespread use. Recent versions of Windows, especially Windows 11, are widely considered to be the most privacy-invasive and least secure modern operating systems.

If you have the choice between Windows 10 and Windows 11, we would recommend using Windows 10 for as long as possible. Windows 10 will be supported until October 2025. However, no current version of Windows respects your privacy without extensive modifications that are often undone by future updates from Microsoft. Consider [Linux](../linux-overview.md) if you'd prefer an operating system that respects your privacy and preferences.

Microsoft continually adds new cloud-based features to Windows 11 which are enabled by default without user consent. Most recently (as of May 2024), they've introduced a built-in keylogger called **Recall** (part of their AI features) which records every keystroke on your device, and records your screen by screenshotting at regular intervals. This data is stored unsafely in a local database that is decrypted when your device is powered on, meaning it is an easy target for hackers. It will not redact sensitive information like copied passwords or financial information from the database, but it does protect Hollywood movie studios by not recording copyrighted content. This feature is currently only on certain newer devices, but it serves as an example of how little Microsoft cares about your security and privacy.

## Guides

You can enhance your privacy and security on Windows without downloading any third-party tools with these guides:

- Initial Installation (coming soon)
- [Group Policy Settings](group-policies.md)
- Privacy Settings (coming soon)
- Application Sandboxing (coming soon)
- Security Hardening (coming soon)

This section is a work in progress, because it takes considerably more time and effort to make a Windows installation usable compared to other operating systems. Additional guides are coming soon!

## Privacy History

Especially since the release of Windows 8, Microsoft has demonstrated extremely privacy-invasive behavior with their operating system releases, consistently taking advantage of the fact that Windows is the most widely-used desktop operating system. Windows 10 was widely [criticized](https://www.theguardian.com/technology/2015/jul/31/windows-10-microsoft-faces-criticism-over-privacy-default-settings) for having default settings that sent a lot of data and telemetry back to Microsoft, [including](https://en.wikipedia.org/wiki/Criticism_of_Microsoft#Telemetry_and_data_collection) "User's contacts and calendar events, location data and history, 'telemetry' (diagnostics data) [...] and 'advertising ID', as well as further data when the Cortana assistant is enabled" (which it is by default). Windows 10 also made it much more challenging to change default applications (such as your web browser) away from Microsoft-provided apps, which is behavior that still persists today.

At launch, telemetry could not be disabled in non-enterprise editions of Windows 10. It still cannot be disabled, but Microsoft added the ability to [reduce the teletetry](https://www.extremetech.com/computing/243079-upcoming-windows-update-reduces-spying-microsoft-still-mum-data-collects) sent to them.

Windows 11 has introduced even more privacy-invasive behavior, including:

- Being forced to use a Microsoft account instead of a local account on Home editions, and still hiding away local account options on Pro editions and higher.
- Enabling virtually all data collection options by default.
- Heavily integrating Microsoft services like Bing, OneDrive, and Teams in ways which are difficult to remove.
- Adding (cloud-based) AI features to many areas in Windows and various Microsoft Apps.
- Unnecessarily storing massive amounts of sensitive data. Even data which is stored locally and not sent to Microsoft is still a target for hackers or malware on your device.

Microsoft often abuses the automatic updates feature to add new functionality to your device that collects your data and is enabled by default.

Some privacy features in Windows 11 are locked to devices in the European Union. We have not yet found a way to reliably access those settings worldwide.

## Windows Editions

Many critical privacy and security features are unfortunately locked away behind higher-cost editions of Windows, instead of being available in Windows Home Edition. Some features missing from **Windows Home Edition** include Bitlocker Drive Encryption, Hyper-V, and Windows Sandbox. In our Windows guides we will cover how to use all of these features appropriately, so having a premium edition of Windows will be critical.

**Windows Enterprise** provides the most flexibility when it comes to configuring privacy and security settings built in to Windows. For example, they are the only editions that allow you to enable the highest level of restrictions on data sent to Microsoft via telemetry tools. Unfortunately, Enterprise is not available for retail purchase, so it may not be available to you.

The best version available for *retail* purchase is **Windows Pro Edition**. This version does not allow you to set some of the most restrictive limitations on Microsoft's telemetry unfortunately, but does have nearly all of the features you'll want to use to secure your device, including Bitlocker, Hyper-V, etc.

Students and teachers may be able to obtain **Windows Education** (equivalent to Enterprise) or **Windows Pro Education** (equivalent to Pro) for free (including on personal devices) from their educational institution. Many schools partner with Microsoft via OnTheHub or Microsoft Azure for Education, so you can check those sites or your school's benefits page to see if you qualify. Whether or not you are able to get these licenses depends entirely on your institution. This may be the best way for many people to obtain an Enterprise-level edition of Windows for personal use. There are no additional privacy or security risks associated with using an Education license compared to the retail versions.

It is not recommended to use forks or modified versions of Windows such as Windows AME. Since modified versions of Windows like Windows AME don't receive updates, security features and antivirus definitions in Windows Defender will fall behind the current threat landscape, opening you up to attacks.

## Obtaining Windows

Currently, only Windows 11 license keys are available for purchase, but these keys will work on Windows 10 as well, so you can still purchase a Windows 11 Pro key to activate a Windows 10 install.

The official [Media Creation tool](https://www.microsoft.com/software-download/windows10) is the best way to put a Windows installer on a USB flash drive. Third-party tools like Rufus or Etcher may unexpectedly modify the files, which could lead to boot issues or other troubles with installing.

This tool only lets you install a Home or Pro edition installation, as there are no publicly available downloads for Windows Enterprise Edition. However, if you have an Enterprise Edition license key, you can easily upgrade a Pro installation. Just install Windows Pro without entering a license key during setup, then enter your Enterprise key in the Settings app after completing the install. Your Pro Edition install will upgrade to Enterprise Edition automatically after entering a valid license key.

If you are installing an Education edition, typically a private download will be provided alongside your license key when you obtain it from your institution's benefits portal.
