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

</details>

### Security Baselines

- [Download](https://www.microsoft.com/en-us/download/details.aspx?id=55319) the following files: `Windows 11 v23H2 Security Baseline.zip` and `LGPO.zip`.
- Unzip both files. In `LGPO\LGPO_30`, copy `LGPO.exe` to `Windows 11 v23H2 Security Baseline\Scripts\Tools`.
- In `Windows 11 v23H2 Security Baseline\Scripts`, execute the following command from an elevated command prompt:
  ```
  Set-ExecutionPolicy -Scope Process Unrestricted
  .\Baseline-LocalInstall.ps1 -Win11NonDomainJoined
  ```
- Respond with `R` to run the script once you receive a security warning.

### Application Security

Smart App Control can check the security of apps while they are running. You should enable Smart App Control in Start → Windows Security → App & Browser Control → Smart App Control.

Most applications on Windows are not sandboxed. 

### Device Encryption

BitLocker is a disk encryption feature. Before enabling Bitlocker, you should configure it to use stronger encryption methods as well as allow for more secure unlocking methods:

- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\BitLocker Drive Encryption\Choose drive encryption method and cipher strength (Windows 10 [Version 1511] and later)` and set the options to `XTS-AES 256-bit`, `XTS-AES 256-bit`, `AES-CBC 256-bit` respectively.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\BitLocker Drive Encryption\Operating System Drives\Require additional authentication at startup` and set the options to unchecked, `Allow TPM`, `Allow startup PIN with TPM`, `Allow startup key with TPM` and `Allow startup key and PIN with TPM` respectively.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\BitLocker Drive Encryption\Operating System Drives\Allow enhanced PINs for startup`.

You should enable Bitlocker in Start → Windows Security → Device Security → Data Encryption. You should set a strong PIN for BitLocker and encrypt the entire disk space.

### Windows Defender

- Enable all options in Start → Windows Security → App & Browser Control → Reputation Based Protection.
- Enable all options in Start → Windows Security → App & Browser Control → Exploit Protection → System Settings.
- Enable all options in Start → Windows Security → Virus & Threat Protection.
- Enable `Block all inbound connections` options in Start → Windows Security → Firewall and Network Protection → Public Network/Private Network/Domain Network.
- Check if `Memory access protection` is displayed in Start → Windows Security → Device Security → Core Isolation. If not, enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\BitLocker Drive Encryption\Disable new DMA devices when this computer is locked`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Scan\Turn on e-mail scanning`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Scan\Scan removable drives`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Scan\Scan network files`.
- Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Scan\Run full scan on mapped network drives`.
- Execute `setx /M MP_FORCE_USE_SANDBOX 1` from an elevated command prompt.

### Account Security

You should use a standard account for daily tasks.

You can also use Windows Sandbox to run untrusted apps. Enable Windows Sandbox in Start → Settings → System → Optional Fetures → More Windows Features. Open Windows Sandbox in Start → Windows Sandbox. You can transfer files and apps into Windows Sandbox by copying them.

### Developer Mode

- Disable Developer Mode in Start → Settings → System → Developer Options → Developer Mode.
- Disable Remote Desktop in Start → Settings → System → Developer Options → Remote Desktop.
- Enable all options in Start → Settings → System → Developer Options → File Explorer Settings.

### Additional Attack Surface Reduction Measures

- Disable Remote Assistance. In the search box on the taskbar, type `remote assistance`, and then select `Allow Remote Assistance invitations to be sent from this computer` from the list of results. Then, on the `Remote` tab, unselect the Allow Remote Assistance connections to this computer check box, and then select OK.
- Add additional attack surface reduction rules and set them to warn mode. Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Microsoft Defender Antivirus\Microsoft Defender Exploit Guard\Attack surface reduction\Configure Attack Surface Reduction rules`. Select `Show...` and add the following [rule IDs](https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/attack-surface-reduction-rules-reference?view=o365-worldwide#asr-rule-to-guid-matrix) in the Value Name column. Then change the status of all rules to 6 in the Value column.
  ```
  56a863a9-875e-4185-98a7-b882c64b5ce5
  d1e49aac-8f56-4280-b9ba-993a6d77406c
  01443614-cd74-433a-b99e-2ecdc07bfc25
  ```
- Execute the following command from an elevated command prompt:
  ```
  reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v LocalAccountTokenFilterPolicy /t REG_DWORD /d 0 /f
  reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa" /v DisableRestrictedAdmin /t REG_DWORD /d 0 /f
  reg add "HKEY_LOCAL_MACHINE\Software\Microsoft\Cryptography\Wintrust\Config" /v EnableCertPaddingCheck /t REG_DWORD /d 1 /f
  reg add "HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Cryptography\Wintrust\Config" /v EnableCertPaddingCheck /t REG_DWORD /d 1 /f
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

Windows collects [three categories](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RW1iLkl) of personal data: Windows Diagnostic Data, Account Data, and Windows Required Service Data. 

### Windows Diagnostic Data

Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Data Collection And Preview Builds\Allow Diagnostic Data` and set it to `Diagnostic data off (not recommended)`.

### Account Data

Enable the Group Policy `Computer Configuration\Administrative Templates\Windows Components\Data Collection And Preview Builds\Allow Diagnostic Data` and set it to `Diagnostic data off (not recommended)`.
