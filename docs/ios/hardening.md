---
title: iOS Hardening
icon: material/apple-ios
---
iOS is the operating system that runs on iPhones. iOS is a good choice if you want privacy and security without much effort.

## Configuration

You should consider changing these settings to improve your privacy.

### Wi-Fi

You can enable hardware address randomization to protect you from tracking across Wi-Fi networks.

On the network you are currently connected to, press the :material-information: button.

- [x] Turn on **Private Wi-Fi Address**

Limit IP Address Tracking :material-toggle-switch:

### Bluetooth

**Bluetooth** should be disabled when you aren't using it.

- [ ] Turn off **Bluetooth**

### General

**AirDrop** allows you to easily transfer files, but it can allow strangers to send you files you do not want.

- [x] Select **AirDrop** > **Receiving Off**

**AirPlay** lets you seemlessly stream content from your iPhone to a TV; however, you might not always want this.

Select **AirPlay & Handoff** > **Automatically AirPlay to TVs**

- [x] Select **Never**

**Background App Refresh** allows your apps to refresh their content while you're not using them. This may cause them to make unwanted connections.

Select **Background App Refresh** > **Background App Refresh**

- [x] Select **Off**

## Siri & Search

If you don't want anyone to be able to control your phone with Siri when it is locked, you can turn that off here.

- [ ] Turn off **Allow Siri When Locked**

### Touch ID & Passcode

Setting a strong password on your phone is probably the most important step you can take for security and privacy. You'll have to make tradeoffs here between security and convenience; a longer password will be annoying to type in every time, but a shorter password or pin will be easier to guess. Setting up Touch ID or Face ID along with a stong password can be a good compromise between usability and security.

Select **Turn Passcode On** > **Passcode Options** > **Custom Alphanumeric Code**

Set a password that you won't forget. The longer the better. It might be easier for you to string a few words together and break them up with numbers and symbols.

If you wish to use Touch ID, you can go ahead and set it up now. Your phone will use the password you set up earlier as a fallback in case your fingerprint verification fails. This is just for convenience; if someone gets your fingerprint, they can unlock your phone (although after turning off your phone it will require the password and won't accept your fingerprint).

Select **Add a Fingerprint...**

Follow the onscreen prompts to set up Touch ID.

**Allow Access When Locked** gives you options for what you can allow when your phone is locked. The more of these options you disable, the less someone without your password can do, but it will be less convenient for you. Pick and choose which of these you don't want someone to have access to if they get their hands on your phone.

- [ ] Turn off **Today View and Search**
- [ ] Turn off **Notification Center**
- [ ] Turn off **Control Center**
- [ ] Turn off **Reply with Message**
- [ ] Turn off **Home Control**
- [ ] Turn off **Wallet**
- [ ] Turn off **Return Missed Calls**
- [ ] Turn off **USB Accessories**

You can set your phone to wipe itself after 10 failed passcode attempts, keeping you safe from brute-force attacks; however, your phone will already resist these by making you wait long periods of time after multiple failed attempts.

- [ ] Turn on **Erase Data**


### Privacy

**Location Services** allow you to use features like Find My and Maps. If you do not need these features, you can disable Location Services. You can also pick which apps can use your location.

Select **Location Services**

- [ ] Turn off **Location Services**

You can decide to allow apps to request to **track** you here. Disabling this disallows all apps from tracking you with your phone's advertising ID.

Select **Tracking** 

- [ ] Turn off **Allow Apps to Request to Track**

You should turn off **Research Sensor & Usage Data** if you do not wish to participate in studies.

Select **Research Sensor & Usage Data**

- [ ] Turn off **Sensor & Usage Data Collection**

You should disable **Analytics & Improvements** if you do not wish to send Apple usage data.

Select **Analytics & Improvements**

- [ ] Turn off **Share iPhone Analytics**

Disable **Personalized Ads** if you do not want targeted ads.

Select **Apple Advertising**

- [ ] Turn off **Personalized Ads**

**App Privacy Report** is a built-in tool that allows you to see what permissions your apps are using.

Select **App Privacy Report**

- [ ] Select **Turn On App Privacy Report**

## Avoid Jailbreaking

Jailbreaking an iPhone defeats its security and makes you vulnerable.


