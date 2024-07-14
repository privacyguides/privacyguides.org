---
title: Windows Overview
icon: simple/windows
---
**Microsoft Windows** is Microsoft's proprietary desktop operating system.

We recommend using a version of Windows that is [currently receiving official updates](https://learn.microsoft.com/lifecycle/products) by Microsoft; don't use third party versions of Windows and don't use an unsupported version of Windows. Also don't rely on Microsoft's Extended Security Updates that require third party scripts to use.

## Guides

You can enhance your privacy and security on Windows without downloading any third-party tools with these guides:

- Initial Installation (coming soon)
- [Group Policy Settings](group-policies.md)
- Privacy Settings (coming soon)
- Application Sandboxing (coming soon)
- Security Hardening (coming soon)

## Privacy Considerations

- Windows Home requires you to use a Microsoft account instead of a local account, the option is hidden away even on Pro editions and higher.
- Telemetry is enabled by default.
- Microsoft services such as OneDrive and Bing are heavily integrated into the OS and lack E2EE or the ability to easilly remove them.
- Copilot doesn't run locally and sends data to the cloud.
- Recall feature which stores screenshots of your activity locally on your device and decrypts this data when you power on your device, making it a possible target for hackers.

Some privacy features in Windows 11 are locked to devices in the European Union. We have not yet found a way to reliably access those settings worldwide.

## Windows Editions

Telemetry cannot be fuly disabled on Windows Home and Pro editions, but the Enterprise edition allows you to fully disable it.

Many privacy and security features are restricted to the Pro and Enterprise (or equivalent) editions of Windows. Some features missing from **Windows Home Edition** include Bitlocker Drive Encryption, Hyper-V, and Windows Sandbox.

**Windows Enterprise** provides the most flexibility when it comes to configuring privacy and security settings built in to Windows. For example, they are the only editions that allow you to enable the highest level of restrictions on data sent to Microsoft via telemetry tools. Unfortunately, Enterprise is not available for retail purchase, so it may not be available to you.

The best version available for *retail* purchase is **Windows Pro Edition**. This version does not allow you to set some of the most restrictive limitations on Microsoft's telemetry, but does have Bitlocker, Hyper-V, etc.

Students and teachers may be able to obtain **Windows Education** (equivalent to Enterprise) or **Windows Pro Education** (equivalent to Pro) for free (including on personal devices) from their educational institution. Many schools partner with Microsoft via OnTheHub or Microsoft Azure for Education, so you can check those sites or your school's benefits page to see if you qualify. Whether or not you are able to get these licenses depends entirely on your institution. This may be the best way for many people to obtain an Enterprise-level edition of Windows for personal use. There are no additional privacy or security risks associated with using an Education license compared to the retail versions.

It is not recommended to use forks or modified versions of Windows such as Windows AME. Since modified versions of Windows like Windows AME don't receive updates, security features and antivirus definitions in Windows Defender will fall behind the current threat landscape, opening you up to attacks.

## Obtaining Windows

Currently, only Windows 11 license keys are available for purchase, but these keys will work on Windows 10 as well, so you can still purchase a Windows 11 Pro key to activate a Windows 10 install.

The official [Media Creation tool](https://www.microsoft.com/software-download/windows10) is the best way to put a Windows installer on a USB flash drive. Third-party tools like Rufus or Etcher may unexpectedly modify the files, which could lead to boot issues or other troubles with installing.

This tool only lets you install a Home or Pro edition installation, as there are no publicly available downloads for Windows Enterprise Edition. However, if you have an Enterprise Edition license key, you can easily upgrade a Pro installation. Just install Windows Pro without entering a license key during setup, then enter your Enterprise key in the Settings app after completing the install. Your Pro Edition install will upgrade to Enterprise Edition automatically after entering a valid license key.

If you are installing an Education edition, typically a private download will be provided alongside your license key when you obtain it from your institution's benefits portal.
