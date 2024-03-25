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

- Turn on Secure Boot and, if applicable, disable the third-party Microsoft UEFI CA. 
- Turn on Virtualization settings.
- Turn on Dynamic Root of Trust for Measurement (DRTM).
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
- After OOBE, turn on Smart App Control in Windows Security → App & Browser Control → Smart App Control.

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

### 
