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

### Account Security

You should use a standard account for daily tasks.

### Developer Mode

- Disable Developer Mode in Start → Settings → System → Developer Options → Developer Mode.
- Disable Remote Desktop in Start → Settings → System → Developer Options → Remote Desktop.
- Enable all options in Start → Settings → System → Developer Options → File Explorer Settings.

