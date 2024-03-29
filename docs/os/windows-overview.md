---
title: Windows Overview
icon: simple/windows
description: Windows is a traditonal operating system developed by Microsoft that provides a platform for running software applications and managing computer hardware.
---

## Hardware and Firmware Security

### Choosing a Secure Hardware

- Choose a secured-core PC that has long-term lifetime support. The Microsoft Surface for Business series is the best option in this regard.
- Choose a PC with Microsoft Pluton.

<details class="note" markdown>
<summary>Secure Launch and Secure Boot</summary>

TBC

</details>

### Firmware Settings

- Enable Secure Boot and, if applicable, disable the third-party Microsoft UEFI CA. 
- Enable Virtualization settings.
- Enable Dynamic Root of Trust for Measurement (DRTM).
- If available, set Thunderbolt Security Settings to the highest level.
- Be sure to set a firmware password.
- Configure Boot Sequence to exclusively boot from your hard drive while disabling all other items, if accessible.
- Enable Trusted Platform Module (TPM) and designate Microsoft Pluton as default if applicable.

## Operating System Security

### Choose the Correct Version and Edition

Use Windows 11 Enterprise, version 23H2 as your operating system. 

### Out-of-Box-Experience (OOBE)

- Select your region to European Economic Area (EEA) or Switzerland and allow optional diagnostic data.
- Use a local account instead of a Microsoft account.
- After OOBE, enable Smart App Control in Start → Windows Security → App & Browser Control → Smart App Control.

<details class="note" markdown>
<summary>Activate Windows Enterprise</summary>

For Key Management Service (KMS) activation, execute the following command from an elevated command prompt:

```
cd "c:\windows\system32"
cscript slmgr.vbs /skms input.your.kms.server.here
cscript slmgr.vbs /ato
```

For Multiple Activation Key (MAK) activation, execute the following command from an elevated command prompt:

```
cd "c:\windows\system32"
cscript slmgr.vbs /ipk input-your-mak-key-here
cscript slmgr.vbs /ato
```

</details>

<details class="note" markdown>
<summary>Upgrade Windows</summary>

To upgrade from Windows Home to Windows Pro, enter your product key in Sttings → System → Activation → Change product key.

To upgrade from Windows Pro to Windows Enterprise, execute the following command from an elevated command prompt:

```
cd "c:\windows\system32"
cscript slmgr.vbs /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
cscript slmgr.vbs /ato
```

Please note that the above command will not activate Windows Enterprise.
</details>

<details class="info" markdown>
<summary>Command Prompt and Group Policy</summary>

TBC

</details>

### Install Updates

Installing updates is crucial. Windows Update delivers updates to Windows and Windows Recovery Environment (Windows RE) automatically. You can also manually check for updates in Start → Settings → Windows Update. If you have other Windows installation media, such as Windows Preinstallation Environment (Windows PE) or Windows RE that is not recognized by the current Windows operating system, you should [update](https://learn.microsoft.com/en-us/windows/deployment/update/media-dynamic-update) them manually. You should also enable automatic updates in Microsoft Store in Start → Microsoft Store → Profile Icon → Settings → App Updates.

<details class="info" markdown>
<summary>Types of Windows updates</summary>

**Feature updates** are released annually to add new features and functionality to Windows.

**Quality updates**, which encompass security and non-security fixes such as security updates, critical updates, servicing stack updates, and driver updates, are typically released on the second Tuesday of each month but can be released at any time.

</details>

### Security Baselines

A security baseline is a group of Microsoft-recommended configuration settings that explains their security implication.

- [Download](https://www.microsoft.com/en-us/download/details.aspx?id=55319) the following files: `Windows 11 v23H2 Security Baseline.zip` and `LGPO.zip`.
- Unzip both files. In `LGPO\LGPO_30`, copy `LGPO.exe` to `Windows 11 v23H2 Security Baseline\Scripts\Tools`.
- In `Windows 11 v23H2 Security Baseline\Scripts`, execute the following command from an elevated command prompt:
  ```
  Set-ExecutionPolicy -Scope Process Unrestricted
  .\Baseline-LocalInstall.ps1 -Win11NonDomainJoined
  ```

You can track security baseline updates using [this](https://techcommunity.microsoft.com/gxcuf89792/rss/board?board.id=Microsoft-Security-Baselines) RSS feed.

### Application Security

Most applications on Windows are not sandboxed. In Microsoft Store, only the apps without the permission "This app can access all your files, peripheral devices, apps, programs, and registry" are sandboxed. If you sideload apps, only those with the file extensions `.msix`, `.msixbundle`, `.appx`, `.appxbundle`, and without the permission "This app can access all your files, peripheral devices, apps, programs, and registry" are sandboxed.

Smart App Control can check the security of apps while they are running. You should enable Smart App Control in Start → Windows Security → App & Browser Control → Smart App Control.

You can also use Windows Sandbox to run untrusted apps. Enable Windows Sandbox in Start → Settings → System → Optional Fetures → More Windows Features. Open Windows Sandbox in Start → Windows Sandbox. You can transfer files and apps into Windows Sandbox by copying them.

### Device Encryption

BitLocker is a disk encryption feature. Before enabling Bitlocker, you should configure it to use stronger encryption methods as well as allow for more secure unlocking methods:

- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\BitLocker Drive Encryption\Choose drive encryption method and cipher strength (Windows 10 [Version 1511] and later)` and set the options to `XTS-AES 256-bit`, `XTS-AES 256-bit`, `AES-CBC 256-bit` respectively.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\BitLocker Drive Encryption\Operating System Drives\Require additional authentication at startup` and set the options to unchecked, `Allow TPM`, `Allow startup PIN with TPM`, `Allow startup key with TPM` and `Allow startup key and PIN with TPM` respectively.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\BitLocker Drive Encryption\Operating System Drives\Allow enhanced PINs for startup`.

You should enable Bitlocker in Start → Windows Security → Device Security → Data Encryption. You should set a strong PIN for BitLocker and encrypt the entire disk space.

### Antivirus Protection

Windows include Windows Security, which provides the latest antivirus protection.

- Enable all options in Start → Windows Security → App & Browser Control → Reputation Based Protection.
- Enable all options in Start → Windows Security → App & Browser Control → Exploit Protection → System Settings.
- Enable all options in Start → Windows Security → Virus & Threat Protection → Virus & Threat Protection Settings.
- Enable the option in Start → Windows Security → Virus & Threat Protection → Ransomware Protection → Controlled Folder Access.
- Enable `Block all inbound connections` options in Start → Windows Security → Firewall and Network Protection → Public Network/Private Network/Domain Network.
- Check if `Memory access protection` is displayed in Start → Windows Security → Device Security → Core Isolation. If not, enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\BitLocker Drive Encryption\Disable new DMA devices when this computer is locked`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Scan\Turn on e-mail scanning`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Scan\Scan removable drives`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Scan\Scan network files`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Scan\Run full scan on mapped network drives`.
- Execute `setx /M MP_FORCE_USE_SANDBOX 1` from an elevated command prompt.

### Account Security

You should use a local user account for daily tasks. Use complex passwords for your accounts. You can create a local user account in Start → Settings → Accounts → Other users → Add account → I don't have this person's sign-in information → Add a user without a Microsoft account. You should add security questions to your local account in case you forget your password in Start  → Settings → Accounts → Sign-in options → Update your security questions. You can also create a password reset disk for your local account. In the search box on the taskbar, type `Control Panel`, and then choose it from the list of results. In the Control Panel search box, type `create password reset`. Select `Create a password reset disk`, and follow the remaining instructions.

You can hide your account info when logging in by enabling the Group Policy `Computer Configuration\Windows Settings\Security Settings\Local Policies\Security Options\Interactive logon: Don’t display last signed-in` and `Computer Configuration\Windows Settings\Security Settings\Local Policies\Security Options\Interactive logon: Don’t display username at sign-in`. You can also find the related option in Start → Settings → Accounts → Sign-in Options.

### Network & Bluetooth Security

- Disable all options in Start → Settings → Network & Internet → Advanced Network Setings → Private Networks/Public Networks. Set options in Start → Settings → Network & Internet → Advanced Network Setings → All Networks to disable public folder sharing, use 128-bit encryption and enable password protected sharing.
- Enable MAC Address Randomization in Start → Settings → Network & Internet → WLAN → Random Hardware Addresses and set the option in Start → Settings → Network & Internet → WLAN → (Your Network Display Name) → Random Hardware Addresses to `Change every day`.
- Turn off Bluetooth when not in use. Disable device discovery in Start → Settings → Devices → Bluetooth & Other devices → More Bluetooth Options.
- Set your encrypted DNS in Start → Settings → Network & Internet → WLAN → (Your Network Display Name) → DNS Server Assignment → Edit → Manual.

### Developer Mode

- Disable Developer Mode in Start → Settings → System → Developer Options → Developer Mode.
- Disable Remote Desktop in Start → Settings → System → Developer Options → Remote Desktop.
- Enable all options in Start → Settings → System → Developer Options → File Explorer Settings.

### Additional Attack Surface Reduction Measures

In addition to the security baselines, there are some additional attack surface reduction measures.

- Disable Remote Assistance. In the search box on the taskbar, type `remote assistance`, and then select `Allow Remote Assistance invitations to be sent from this computer` from the list of results. Then, on the `Remote` tab, unselect the Allow Remote Assistance connections to this computer check box, and then select OK.
- Uninstall features you won't use like Internet Explorer mode in Start → Settings → System → Optional Fetures and Start → Settings → System → Optional Fetures → More Windows Features.
- Enable the Group Policy `Computer Configuration\Administrative Templates\MS Security Guide\Enable Certificate Padding`.
- Add additional attack surface reduction rules and set them to warn mode. Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Microsoft Defender Exploit Guard\Attack surface reduction\Configure Attack Surface Reduction rules`. Select `Show...` and add the following [rule IDs](https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/attack-surface-reduction-rules-reference?view=o365-worldwide#asr-rule-to-guid-matrix) in the Value Name column. Then change the status of all rules to 6 in the Value column.
  ```
  56a863a9-875e-4185-98a7-b882c64b5ce5
  d1e49aac-8f56-4280-b9ba-993a6d77406c
  01443614-cd74-433a-b99e-2ecdc07bfc25
  ```
- Execute the following command from an elevated command prompt:
  ```
  reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa" /v DisableRestrictedAdmin /t REG_DWORD /d 0 /f
  reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Ole\AppCompat\OLELinkConversionFromOLESTREAMToIStorage" /v Disabled /t REG_DWORD /d 1 /f
  ```
- Enable [additional mitigations](https://support.microsoft.com/en-us/topic/kb4073119-windows-client-guidance-for-it-pros-to-protect-against-silicon-based-microarchitectural-and-speculative-execution-side-channel-vulnerabilities-35820a8a-ae13-1299-88cc-357f104f5b11) against silicon-based microarchitectural and speculative execution side-channel vulnerabilities without disabling Hyper-Threading (also known as Simultaneous Multi Threading (SMT)) by executing the following command from an elevated command prompt.
  ```
  reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverride /t REG_DWORD /d 72 /f 
  reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverrideMask /t REG_DWORD /d 3 /f
  reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization" /v MinVmVersionForCpuBasedMitigations /t REG_SZ /d "1.0" /f
  reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization" /v RetsPredictedFromRsbOnly /t REG_DWORD /d 1 /f
  ```
  Enable additional mitigations against silicon-based microarchitectural and speculative execution side-channel vulnerabilities with Hyper-Threading disabled by executing the following command from an elevated command prompt.
  ```
  reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverride /t REG_DWORD /d 8264 /f 
  reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" /v FeatureSettingsOverrideMask /t REG_DWORD /d 3 /f
  reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization" /v MinVmVersionForCpuBasedMitigations /t REG_SZ /d "1.0" /f
  reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization" /v RetsPredictedFromRsbOnly /t REG_DWORD /d 1 /f
  ```
  
## Privacy Settings

Windows collects [three categories](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RW1iLkl) of personal data to send to Microsoft: Windows Diagnostic Data, Account Data, and Windows Required Service Data. 

### Windows Diagnostic Data

Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Data Collection And Preview Builds\Allow Diagnostic Data` and set it to `Diagnostic data off (not recommended)`.

### Account Data

Use local accounts instead of online accounts like Microsoft accounts to sign in to your devices and enable the Group Policy `Computer Configuration\Windows Settings\Security Settings\Local Policies\Security Options\Accounts: Block Microsoft accounts` and set it to `Users can’t add Microsoft accounts`. You can still log on apps likw Microsoft Store with Microsoft accounts. If you have logged on apps using a Microsoft account, you can limit its use in Start → Settings → Accounts → Email & accounts → (Your Microsoft Account) and select the option to `Apps need to ask me to use this account`.

<details class="warning" markdown>
<summary>Warning</summary>

If the Group Policy `Accounts: Block Microsoft accounts` is set to `Users can’t add or log on with Microsoft accounts`, attempting to restore the System in Windows Recovery Environment (Windows RE) will [fail](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re--technical-reference?view=windows-11#known-issue) with the error message "You need to sign in as an administrator to continue, but there aren't any administrator accounts on this PC."

</details>

### Windows Required Service Data

Some Required Service Data is necessary for Windows security and should be retained.

- Uninstall pre-installed apps you won't use in Start → Settings → Apps → Installed Apps and Start → Settings → System → System Components.
- Disable all options in Start → Settings → Privacy & Security → Windows Permissions.
- Do not join the Windows Insider Program in Start → Settings → Update & Security → Windows Insider Program.
- Disable suggestions and recommendations in Start → Settings → Personalization → Start.
- Disable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Search\Allow Cortana`.
- Disable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Search\Allow Cloud Search`.
- Disable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Search\Allow search and Cortana to use location`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Search\Do not allow web search`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Search\Don't search the web or display web results in Search`.
- Enable all Group Policy objects under `Computer Configuration\Administrative Templates\Windows Components\Cloud Content`.
- Enable the Group Policy `User Configuration\Administrative Templates\Windows Components\Cloud Content\Do not use diagnostic data for tailored experiences`.
- Enable the Group Policy `User Configuration\Administrative Templates\Windows Components\Cloud Content\Do not suggest third-party content in Windows spotlight`.
- Enable the Group Policy `User Configuration\Administrative Templates\Windows Components\Cloud Content\Turn off cloud optimized content`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Windows Error Reporting\Disable Windows Error Reporting`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Software Protection Platform\Turn off KMS Client Online AVS Validation`.
- Disable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Messaging\Allow Message Service Cloud Sync`.
- Execute `reg add "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Messaging" /v CloudServiceSyncEnabled /t REG_DWORD /d 0 /f` from an elevated command prompt.
- Execute `reg add "HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\MRT" /v DontReportInfectionInformation /t REG_DWORD /d 1 /f` from an elevated command prompt.
- Disable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Windows Defender Antivirus\Reporting\Configure Watson events`.
- In Start → Settings → Apps → Advanced app settings, set `Choose where to get apps` to `Anywhere`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Delivery Optimization\Download Mode` and set it to `Simple (99)`.
- Execute `reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\Windows Feeds" /v "EnableFeeds" /t REG_DWORD /d 0 /f` from an elevated command prompt.
- Execute `setx /M DOTNET_CLI_TELEMETRY_OPTOUT 1` from an elevated command prompt.
- Execute `setx /M POWERSHELL_TELEMETRY_OPTOUT 1` from an elevated command prompt.
- Execute `setx /M MSEDGEDRIVER_TELEMETRY_OPTOUT 1` from an elevated command prompt.
- Disable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Widgets\Allow Widgets`.
- If you are using a Input Method Editors (IME), disable the option in Start → Settings → Time & Language → Language & Region → (Your Language) → Language Options → (Your IME) → Lexicon and Self-Learning → Try text suggestions from Bing.

## Microsoft Edge

- [Download](https://www.microsoft.com/en-us/edge/business/download) the Microsoft Edge policy and unzip the file.
- Copy `MicrosoftEdgePolicyTemplates.cab\MicrosoftEdgePolicyTemplates.zip\windows\admx\msedge.admx` to `C:\Windows\PolicyDefinitions`. Copy `MicrosoftEdgePolicyTemplates.cab\MicrosoftEdgePolicyTemplates.zip\windows\admx\msedge.admx\(Your locale ID)\msedge.adml` to `C:\Windows\PolicyDefinitions\(Your locale ID)`.
- You can track security baseline updates using [this](https://techcommunity.microsoft.com/gxcuf89792/rss/board?board.id=Microsoft-Security-Baselines) RSS feed.

### Microsoft Edge Security

- [Download](https://www.microsoft.com/en-us/download/details.aspx?id=55319) the following files: `Microsoft Edge v117 Security Baseline.zip` and `LGPO.zip`.Unzip both files. In `LGPO\LGPO_30`, copy `LGPO.exe` to `Microsoft Edge v117 Security Baseline\Scripts\Tools`. In `Microsoft Edge v117 Security Baseline\Scripts`, execute the following command from an elevated command prompt:
  ```
  Set-ExecutionPolicy -Scope Process Unrestricted
  .\Baseline-LocalInstall.ps1
  ```
- Enable the option(s) `Microsoft Defender SmartScreen` in `edge://settings/privacy`.
- Enable the option(s) `Block potentially unwanted apps` in `edge://settings/privacy`.
- Enable the option(s) `Website typo protection` in `edge://settings/privacy`.
- Enable the option(s) `Enhance your security on the web` in `edge://settings/privacy` and set it to `Strict`.
- Enable the option(s) `Allow extensions from other stores` in `edge://extensions/`. Prioritize installing extensions from Chrome Web Store, as Chrome Web Store more aggressively uses Manifest V3.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Configure browser process code integrity guard setting` and set it to `Enable code integrity guard enforcement in the browser process`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Enable online OCSP/CRL checks`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Enable the network service sandbox`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Restrict exposure of local IP address by WebRTC` and set it to `Use TCP unless proxy server supports UDP`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Configure Automatic HTTPS` and set it to `All navigations delivered over HTTP are switched to HTTPS`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Control the mode of DNS-over-HTTPS` and set it to `Enable DNS-over-HTTPS without insecure fallback`. Configure the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Specify URI template of desired DNS-over-HTTPS resolver` according to your needs.

### Microsoft Edge Privacy

For diagnostic data, enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Send required and optional diagnostic data about browser usage` and set the option to `off`.

For account data, use local profiles instead of online accounts like Microsoft accounts to sign in to Microsoft Edge. Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Browser sign-in settings` and set the option to `Disable browser sign-in`. Then disable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Configure whether a user always has a default profile automatically signed in with their work or school account`.

For required service data:

- Disable the option(s) in `edge://settings/profiles/rewards`.
- Disable the option(s) in `edge://settings/profiles/multiProfileSettings`.
- Disable the option(s) in `edge://settings/profiles/localBrowserDataShare`.
- Disable the option(s) in `edge://wallet/settings`.
- Enable the option(s) `Tracking Prevention` in `edge://settings/privacy` and set the option to `Strict`.
- Enable the option(s) in `edge://settings/clearBrowsingDataOnClose`.
- Enable the option(s) `Send "Do Not Track" requests` in `edge://settings/privacy`.
- Disable the option(s) `Allow sites to check if you have payment methods saved` in `edge://settings/privacy`.
- Disable the option(s) `Allow sites to check if you have payment methods saved` in `edge://settings/privacy`.
- Disable the option(s) `Help improve Microsoft products by sending the results from searches on the web` in `edge://settings/privacy`.
- Disable the option(s) `Allow Microsoft to save your browsing activity including history, usage, favorites, web content, and other browsing data to personalize Microsoft Edge and Microsoft services like ads, search, shopping and news.` in `edge://settings/privacy`.
- Disable all option(s) under the `Services` section in `edge://settings/privacy`.
- Disable the option(s) `Show me search and site suggestions using my typed characters` in `edge://settings/searchFilters`.
- Disable the option(s) `Show me suggestions from history, favorites and other data on this device using my typed characters` in `edge://settings/searchFilters`.
- Disable the option(s) `Personalize my top sites in customize sidebar` in `edge://settings/sidebar`.
- Disable the option(s) `Allow Microsoft to access page content` and `Show shopping notifications` in `edge://settings/sidebar/appSettings?hubApp=cd4688a9-e888-48ea-ad81-76193d56b1be`.
- Disable the option(s) `Allow access to page URLs` in `edge://settings/sidebar/appSettings?hubApp=96defd79-4015-4a32-bd09-794ff72183ef`.
- Disable the option(s) `Preload your new tab page for a faster experience` in `edge://settings/startHomeNTP`.
- Configure the option(s) `Customize your new tab page layout and content` in `edge://settings/startHomeNTP` according to your needs.
- Enable the option(s) `Block third-party cookies` in `edge://settings/content/cookies`.
- Disable the option(s) `Preload pages for faster browsing and searching` in `edge://settings/content/cookies`.
- Disable the option(s) `Use text prediction` in `edge://settings/languages`.
- Disable the option(s) `Enable grammar and spellcheck assistance` or enable it with `Basic` in `edge://settings/languages`.
- Configure the option(s) `Share additional operating system region` to `Never` in `edge://settings/languages`.
- Disable the option(s) `Get image descriptions from Microsoft for screen readers` in `edge://settings/accessibility`.
- Disable the option(s) `Allow identifiers for protected content (computer restart may be required)` in `edge://settings/content/protectedContent`.
- Configure `edge://flags/#edge-widevine-drm` according to your needs.
- Disable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Enables default browser settings campaigns`.
- Disable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Edge 3P SERP Telemetry Enabled`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Enable network prediction` and set it to `Don’t predict network actions on any network connection`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Secure mode and Certificate-based Digital Signature validation in native PDF reader`.
- Disable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Content settings\Choose whether users can receive customized background images and text, suggestions, notifications, and tips for Microsoft services`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Microsoft Edge\Configure InPrivate mode availability` and set it to `Forced`.

  <details class="warning" markdown>
  <summary>Warning</summary>

  Setting `Configure InPrivate mode availability` to `Forced` will prevent you from accessing `edge://settings`.

  </details>

- If you are using others’ PC, use Guest mode in Start → Microsoft Edge → Profile icon → Other profiles → Browse as guest.

## Office

- [Download](https://www.microsoft.com/en-us/download/details.aspx?id=49030) the corresponding Office policy and execute it to extract the files.
- Copy `(Extracted Files)\admx\(Your Office Apps).admx` to `C:\Windows\PolicyDefinitions`. Copy `(Extracted Files)\admx\(Your locale ID)\(Your Office Apps).adml` to `C:\Windows\PolicyDefinitions\(Your locale ID)`.
- You can track security baseline updates using [this](https://techcommunity.microsoft.com/gxcuf89792/rss/board?board.id=Microsoft-Security-Baselines) RSS feed.

<details class="note" markdown>
<summary>Install and Activate Office 2021</summary>

You can buy and download [Office Home & Student 2021](https://go.microsoft.com/fwlink/?linkid=2022066), [Office Home & Business 2021](https://go.microsoft.com/fwlink/?linkid=2022187) or [Office Professional 2021](https://go.microsoft.com/fwlink/?linkid=2022071) online.

To install Office LTSC 2021, download the [Office Deployment Tool](https://www.microsoft.com/en-us/download/details.aspx?id=49117) and execute it to extract the files. Create and download a configuration file using the [Office Customization Tool](https://config.office.com/deploymentsettings). Copy `your-created-config-file.xml` to `(Extracted Files Folder)`. In `(Extracted Files Folder)`, execute the following command from an elevated command prompt:

```
setup /download your-created-config-file.xml
```

For Key Management Service (KMS) activation, execute the following command from an elevated command prompt:

```
cd "c:\Program Files\Microsoft Office\Office16"
cscript ospp.vbs /sethst:your.kms.server.here
cscript ospp.vbs /act
```

For Multiple Activation Key (MAK) activation, execute the following command from an elevated command prompt:

```
cd "c:\Program Files\Microsoft Office\Office16"
cscript ospp.vbs /inpkey:input-your-mak-key-here
cscript ospp.vbs /act
```

</details>

### Office Security

- [Download](https://www.microsoft.com/en-us/download/details.aspx?id=55319) the following files: `Microsoft 365 Apps for Enterprise 2306.zip` and `LGPO.zip`.Unzip both files. In `LGPO\LGPO_30`, copy `LGPO.exe` to `Microsoft 365 Apps for Enterprise 2306\Scripts\Tools`. In `Microsoft 365 Apps for Enterprise 2306\Scripts`, execute the following command from an elevated command prompt:
  
  ```
  Set-ExecutionPolicy -Scope Process Unrestricted
  .\Baseline-LocalInstall.ps1
  ```
  
### Office Privacy

For diagnostic data, enable the Group Policy `User Configuration\Administrative Templates\Microsoft Office 2016\Privacy\Trust Center\Configure the level of client software diagnostic data sent by Office to Microsoft` and set the option to `Neither`.

For account data, enable the Group Policy `User Configuration\Administrative Templates\Microsoft Office 2016\Miscellaneous\Block signing into Office`.

<details class="info" markdown>
<summary>Microsoft 365</summary>

You cannot disable the subscription version of Office, Microsoft 365.

</details>

For required service data, disable the Group Policy `User Configuration\Administrative Templates\Microsoft Office 2016\Privacy\Trust Center\Allow the use of connected experiences in Office` and `User Configuration\Administrative Templates\Microsoft Office 2016\Privacy\Trust Center\Enable Customer Experience Improvement Program`.
