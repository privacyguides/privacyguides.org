---
title: Privacy in Windows
icon: material/incognito
---

## Using Microsoft account

You should never sign-in to Windows with a Microsoft account. Signing-in to applications like Microsoft Office (which some users are required to do for their school or company) will trigger a dark pattern offering you to sign in to Windows, which will connect your device to your Microsoft account, and make it easier to send data to Microsoft servers and it is critical to reject this offer.

![Using account for specific app](/assets/img/windows/signin-one-app.webp)

You should log in to that specific app only if you need to.

or 

Create another standard user account and connect it to Microsoft account if you are required for School or Work and keep the apps to that account alone. By restricting other data drive access, it is fully isolated from other profiles.

## Telemetry

To disable telemetry at full level, Open Group policy and navigate to `Computer Configuration` > `Administrative Templates` > `Windows Components` > `Data Collection and Preview builds` and choose as required

![Disable telemtry](/assets/img/windows/disable-telemetry.webp)

The above works only if you use Enterprise or Education edition. If Professional, It will send required (Basic) data.

If you read this article - [https://www.softscheck.com/en/blog/windows-10-enterprise-telemetry-analysis/](https://www.softscheck.com/en/blog/windows-10-enterprise-telemetry-analysis/), Enterprise even sends data even though telemetry is disabled. But there is no updated info about this available.

Disabling full telemtry or sending basic data to Microsoft is totally upto the user's threat model.

- [ ] Disable `Automatic Sample Submission` in Windows Defender will send your files as a sample for Signature Database and might leak your data. You can do it via the below Group Policy so to not prompt you again and again constantly.
    ```
    Computer Configuration > Administrative Templates > Windows Components > Microsoft Defender Antivirus > MAPS > Send file samples when further analysis is required to Never Send.
    ```

- [ ] Disable Windows spotlight by navigating to `User Configuration` > `Administrative Templates` > `Windows Components` > `Cloud Content` and setting **Turn off all Windows Spotlight features** policy to disabled.
        !!! note
        This explicitly disables Windows spotlight features in Lockscreen and Desktop to severe unnecessary between Microsoft servers and the device.

- [ ] Disable in Bing integration in Windows search, by navigating to `Computer Configuration\Administrative Templates\Windows Components\Search\Don't search the web or display web results`. This way your search queries for local indexed data is not sent to Microsoft.

- [ ] Disable notification in the Lock screen in Windows settings
    ![Lock screen notification](/assets/img/windows/lock-screen-notifications.webp)

- [ ] Disable Online Speech recognition and Voice activation
        ![Alt text](/docs/assets/img/windows/online-speech.webp)
        ![Alt text](/assets/img/windows/voice-activation.webp)

- [ ] Disable delivery optimization in Windows Update settings.

- Check all the App permissions and allow only necessary ones.

## Hide MAC Address

Go to `Settings` > `Network & Internet` > `Wifi`

Enable **Random hardware addresses**

## Restrict access to data drives

To prevent other users from accessing your secondary data drives. Type `gpedit.msc` in Windows Run dialog box.

Go to `User Configuration` > `Administrative Templates` > `Windows Components` > `File Explorer` and set the Group Policy as below.

![Restrict-drive](/assets/img/windows/drive-restriction.webp)

The above configuration will restrict other users to the OS drive where Windows is installed. Making total isolation between your Account and other user account.

If it's a shared drive with another person but you don't want the user to access sensitive data then use EFS. EFS encrypts the documents so that the user who encrypted it can only access it and not others.

![EFS](/assets/img/windows/EFS.gif)

It is better to export the Private key certificate and store in a safe place so as to use the file later in other devices. To do so,

Press, ++win+r++, Then type `certmgr.msc`, Under `Personal` > `Certificates`. Click the certificate that contains your username. Right Click and choose export. If you find this too tricky, then after using EFS for first time. You will see an encrypted locker Icon in system tray which help you in exporting on clicking it.

To import in another device, simply open and install this certificate in that device and choose the above location. Then you can access EFS encrypted files in other system too.

*[EFS]: Encrypted File System