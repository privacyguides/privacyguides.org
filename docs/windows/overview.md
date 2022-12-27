---
title: Windows Overview
icon: material/microsoft-windows
---

## Windows

Windows is a proprietary operating system created by Microsoft Inc. in 1985. It is primarily focused on personal computing and is now the most popular desktop OS, used by about [75%](https://gs.statcounter.com/os-market-share/desktop/worldwide) of all desktop users. However, it has its own privacy and security issues.

## Issues present in Windows

Over the years, Microsoft has demonstrated a lot of privacy-invasive behaviour with their software and services. They have continually taken advantage of the fact that Windows is the most wide-used desktop OS, and that most people don't change the default settings, in order to collect users' personal information.

Windows 10 was [criticized](https://www.theguardian.com/technology/2015/jul/31/windows-10-microsoft-faces-criticism-over-privacy-default-settings) for having default settings that sent a lot of data and telemetry back to Microsoft, including:

!!! quote "[Criticism of Microsoft - Wikipedia](https://en.wikipedia.org/wiki/Criticism_of_Microsoft#Telemetry_and_data_collection)"
    User's contacts and calendar events, location data and history, "telemetry" (diagnostics data) ... and "advertising ID", as well as further data when the Cortana assistant is enabled.

At launch, telemetry could not be disabled in non-enterprise editions of Windows 10. Only after [criticism](https://www.theverge.com/2016/7/21/12246266/france-microsoft-privacy-windows-10-cnil) from the France data protection commission, the [Electronic Frontier Foundation](https://www.eff.org/deeplinks/2016/08/windows-10-microsoft-blatantly-disregards-user-choice-and-privacy-deep-dive) and the [European Union](https://www.reuters.com/article/us-microsoft-dataprotection-eu-idUSKBN15Z1UI), Microsoft changed the way they collect telemetry, allowing users to choose between "Basic" (now renamed as `Required`) and "Full", with "Basic" mode collecting [much less telemetry](https://www.extremetech.com/computing/243079-upcoming-windows-update-reduces-spying-microsoft-still-mum-data-collects). Along with that, Microsoft collects a [lot more data from Windows 10](https://web.archive.org/web/20210711143017/https://privacytools.io/operating-systems/#win10).

With the launch of Windows 11, a lot of [other](https://www.windowscentral.com/one-thing-microsoft-didnt-discuss-windows-11-privacy) [concerns](https://www.pcworld.com/article/539183/windows-11-review-an-unnecessary-replacement-for-windows-10.html) were raised, such as:

- Integration of Microsoft Teams into the OS, which would encourage users to switch to the service, allowing Microsoft to collect even more data.
- Removing the ability to have local accounts in Windows 11 Home, therefore forcing you to log into a Microsoft account so as to collect more data.
- Having all data collection options on by default
- Working with Amazon to bring Android apps to Windows through the Windows Subsystem for Android, likely allowing both Microsoft and Amazon to collect data about Android app usage on Windows.
- Using users in a P2P way to distribute Windows updates to reduce load in Microsoft's servers without users' consent.

## Choosing your Windows edition

While using Windows, it is better to select either Windows **Enterprise** Edition or **Education** Edition because it gives more control over the system for hardening it for privacy and security by giving access to stops the OS from sending any Telemetry data using GP Editor.

If you cannot get the above editions, you must opt for **Professional** Edition.

#### Editions to avoid 

- It is not recommended to use forks or modified versions of Windows such as Windows AME. It should be avoided at all cost. Since modified versions of Windows, such as AME, don't get updates, antivirus programs like Defender can fall out of date or be disabled entirely, opening you up to attacks.

- Windows **Home** edition is **not** recommended as it does not have many advantages that Professional edition provides such as BitLocker Drive Encryption, Hyper-V, Windows Sandbox, etc. It also uploads Bitlocker Encryption keys to Microsoft servers which actually defies the aspect of encryption implemented in a different way.

##### Recommendations

We recommend you choose Windows 11 over Windows 10 as it is the latest version and brings many security-related improvements with it by default such as [Secure Boot](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-secure-boot), [VBS](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-vbs), [HVCI](https://docs.microsoft.com/en-us/windows-hardware/drivers/bringup/device-guard-and-credential-guard), etc. Windows 10 will stop getting updates after [October 14, 2025](https://docs.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro).

### Installing Windows

We recommend that you use the official [Media Creation tool](https://www.microsoft.com/software-download/windows11) to flash the ISO to the USB, over third-party options such as Rufus, Balena Etcher, etc., so that you don't tamper the ISO.

#### Downloading ISO

To download the ISO. Follow these steps :

- Download Media Creation tool under `Windows 11 Installation Media`
- Open a Command prompt terminal in the directory where `mediacreationtool.exe` is downloaded.
- And Input the following Command :
    ```
    mediacreationtool.exe /Eula Accept /Retail /MediaArch x64 /MediaLangCode en-US /MediaEdition Enterprise
    ```
- If it asks for Activation key, Use this Generic Key `XGVPP-NMH47-7TTHJ-W3FW7-8HV2C`. This will just allow you to download the ISO but activation is totally upon the user.
- Accept the UAC prompt
- Download the ISO file or flash to a USB as you wish

!!! info "Note"
    - The ISO will consists **only** of Professional, Education & Enterprise edition with a size of ~4.2 GB (Instead of >5.5GB when you download the Multi-Edition ISO) when you download using the above way no other editions such as Home included in it.
    - If you want to change the Language of the ISO file, Just change the `en-US` part with the appropriate language and country code as per your needs.

### Activating Windows

Activating Education/Enterprise edition is different because for Enterprise Edition it needs to be a part of an enterprise network or buying an enterprise License for several devices and use it for your one device & for Education Edition it needs to be a part of school network or managed by a school administrator.

For activating Professional edition, you can buy the license key from resellers (not recommended) or the [Microsoft Store](https://www.microsoft.com/d/windows-11-pro/dg7gmgf0d8h4?rtc=1).

If you are currently using Pro and want to upgrade to Enterprise. Then, Follow the guide [here](https://www.kapilarya.com/how-to-upgrade-windows-11-pro-to-enterprise-edition)

!!! abstract "Note"
    This guide will be mostly on Windows 11 but some of the recommendations can be applied to Windows 10 too.

!!! danger "Warning"
    If you are going to install Windows 11, Then install it only on supported devices and it is not recommended to use tools/scripts that are available online to bypass the requirements which totally breaks the security of Windows 11 which it is aimed for.

*[GP]: Group Policy
*[VBS]: Virtualization-Based Security
*[HVCI]: Hypervisor-Protected Code Integrity
*[AME]: Ameliorated
*[P2P]: Peer-to-Peer