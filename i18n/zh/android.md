---
title: "安卓"
icon: 'simple/android'
description: You can replace the operating system on your Android phone with these secure and privacy-respecting alternatives.
---

![安卓徽标](assets/img/android/android.svg){ align=right }

**安卓开源项目** 是一个由谷歌领导的开源移动操作系统，为世界上大多数移动设备提供动力。 大多数使用安卓系统销售的手机都经过修改，包括侵入性的集成和应用程序，如谷歌游戏服务，所以你可以通过用没有这些侵入性功能的安卓系统版本替换你的手机默认安装，来大大改善你在移动设备上的隐私。

[:octicons-home-16:](https://source.android.com/){ .card-link title="首页" }
[:octicons-info-16:](https://source.android.com/docs){ .card-link title=文档}
[:octicons-code-16:](https://cs.android.com/android/platform/superproject/){ .card-link title="源代码" }

这些是我们推荐的安卓操作系统、设备和应用程序，以最大限度地提高你的移动设备的安全和隐私。 要了解更多关于安卓的信息。

[General Android Overview :material-arrow-right-drop-circle:](os/android-overview.md ""){.md-button}

[Why we recommend GrapheneOS over CalyxOS :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/04/21/grapheneos-or-calyxos/ ""){.md-button}

## AOSP 衍生品

We recommend installing one of these custom Android operating systems on your device, listed in order of preference, depending on your device's compatibility with these operating systems.

!!! note

    由于OEM停止支持，寿命终止的设备（如GrapheneOS或CalyxOS的 "扩展支持 "设备）没有完整的安全补丁（固件更新）。 无论安装何种软件，都不能认为这些设备是完全安全的。

### GrapheneOS

!!! recommendation

    ![GrapheneOS标志](assets/img/android/grapheneos.svg#only-light){ align=right }
    ![GrapheneOS标志](assets/img/android/grapheneos-dark.svg#only-dark){ align=right }
    
    **GrapheneOS**是涉及隐私和安全的最佳选择。
    
    GrapheneOS提供了额外的[安全加固](https://en.wikipedia.org/wiki/Hardening_(计算))和隐私改进。 它有一个[加固的内存分配器](https://github.com/GrapheneOS/hardened_malloc)、网络和传感器权限，以及其他各种[安全功能](https://grapheneos.org/features)。 GrapheneOS还带有完整的固件更新和签名构建，因此完全支持验证性启动。
    
    [:octicons-home-16: 主页](https://grapheneos.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://grapheneos.org/faq#privacy-policy){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://grapheneos.org/faq){ .card-link title=文档}
    [:octicons-code-16:](https://grapheneos.org/source){ .card-link title="源代码" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title="贡献" }

GrapheneOS supports [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), which runs [Google Play Services](https://en.wikipedia.org/wiki/Google_Play_Services) fully sandboxed like any other regular app. This means you can take advantage of most Google Play Services, such as [push notifications](https://firebase.google.com/docs/cloud-messaging/), while giving you full control over their permissions and access, and while containing them to a specific [work profile](os/android-overview.md#work-profile) or [user profile](os/android-overview.md#user-profiles) of your choice.

Google Pixel phones are the only devices that currently meet GrapheneOS's [hardware security requirements](https://grapheneos.org/faq#device-support).

### DivestOS

!!! recommendation

    ![DivestOS标志](assets/img/android/divestos.svg){ align=right }
    
    **DivestOS**是 [LineageOS](https://lineageos.org/)的一个软分叉。
    DivestOS从LineageOS继承了许多[支持的设备](https://divestos.org/index.php?page=devices&base=LineageOS)。 它有签名的构建，使得在一些非Pixel设备上可以有[验证的启动](https://source.android.com/security/verifiedboot)。
    
    [:octicons-home-16: 主页](https://grapheneos.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://grapheneos.org/faq#privacy-policy){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://grapheneos.org/faq){ .card-link title=文档}
    [:octicons-code-16:](https://grapheneos.org/source){ .card-link title="源代码" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title="贡献" }

DivestOS has automated kernel vulnerability ([CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)) [patching](https://gitlab.com/divested-mobile/cve_checker), fewer proprietary blobs, and a custom [hosts](https://divested.dev/index.php?page=dnsbl) file. Its hardened WebView, [Mulch](https://gitlab.com/divested-mobile/mulch), enables [CFI](https://en.wikipedia.org/wiki/Control-flow_integrity) for all architectures and [network state partitioning](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning), and receives out-of-band updates. DivestOS also includes kernel patches from GrapheneOS and enables all available kernel security features via [defconfig hardening](https://github.com/Divested-Mobile/DivestOS-Build/blob/master/Scripts/Common/Functions.sh#L758). All kernels newer than version 3.4 include full page [sanitization](https://lwn.net/Articles/334747/) and all ~22 Clang-compiled kernels have [`-ftrivial-auto-var-init=zero`](https://reviews.llvm.org/D54604?id=174471) enabled.

DivestOS implements some system hardening patches originally developed for GrapheneOS. DivestOS 16.0 and higher implements GrapheneOS's [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) and SENSORS permission toggle, [hardened memory allocator](https://github.com/GrapheneOS/hardened_malloc), [exec-spawning](https://blog.privacyguides.org/2022/04/21/grapheneos-or-calyxos/#additional-hardening), [JNI](https://en.wikipedia.org/wiki/Java_Native_Interface) [constification](https://en.wikipedia.org/wiki/Const_(computer_programming)), and partial [bionic](https://en.wikipedia.org/wiki/Bionic_(software)) hardening patchsets. 17.1 and higher features GrapheneOS's per-network full [MAC randomization](https://en.wikipedia.org/wiki/MAC_address#Randomization) option, [`ptrace_scope`](https://www.kernel.org/doc/html/latest/admin-guide/LSM/Yama.html) control, and automatic reboot/Wi-Fi/Bluetooth [timeout options](https://grapheneos.org/features).

DivestOS uses F-Droid as its default app store. Normally, we would recommend avoiding F-Droid due to its numerous [security issues](#f-droid). However, doing so on DivestOS isn't viable; the developers update their apps via their own F-Droid repositories ([DivestOS Official](https://divestos.org/fdroid/official/?fingerprint=E4BE8D6ABFA4D9D4FEEF03CDDA7FF62A73FD64B75566F6DD4E5E577550BE8467) and [DivestOS WebView](https://divestos.org/fdroid/webview/?fingerprint=FB426DA1750A53D7724C8A582B4D34174E64A84B38940E5D5A802E1DFF9A40D2)). We recommend disabling the official F-Droid app and using [Neo Store](https://github.com/NeoApplications/Neo-Store/) with the DivestOS repositories enabled to keep those components up to date. For other apps, our recommended methods of obtaining them still apply.

!!! 推荐

    DivestOS的固件更新 [status](https://gitlab.com/divested-mobile/firmware-empty/-/blob/master/STATUS)和质量控制在其支持的设备中各不相同。 我们仍然推荐GrapheneOS，这取决于你设备的兼容性。 对于其他设备，DivestOS是一个不错的选择。
    
    并非所有支持的设备都有验证启动，有些设备的验证启动性能比其他设备好。

## 安卓设备

When purchasing a device, we recommend getting one as new as possible. The software and firmware of mobile devices are only supported for a limited time, so buying new extends that lifespan as much as possible.

Avoid buying phones from mobile network operators. These often have a **locked bootloader** and do not support [OEM unlocking](https://source.android.com/devices/bootloader/locking_unlocking). These phone variants will prevent you from installing any kind of alternative Android distribution.

Be very **careful** about buying second hand phones from online marketplaces. Always check the reputation of the seller. If the device is stolen, there's a possibility of [IMEI blacklisting](https://www.gsma.com/security/resources/imei-blacklisting/). There is also a risk involved with you being associated with the activity of the previous owner.

A few more tips regarding Android devices and operating system compatibility:

- Do not buy devices that have reached or are near their end-of-life, additional firmware updates must be provided by the manufacturer.
- Do not buy preloaded LineageOS or /e/ OS phones or any Android phones without proper [Verified Boot](https://source.android.com/security/verifiedboot) support and firmware updates. These devices also have no way for you to check whether they've been tampered with.
- In short, if a device or Android distribution is not listed here, there is probably a good reason. Check out our [forum](https://discuss.privacyguides.net/) to find details!

### Google Pixel

Google Pixel phones are the **only** devices we recommend for purchase. Pixel phones have stronger hardware security than any other Android devices currently on the market, due to proper AVB support for third-party operating systems and Google's custom [Titan](https://security.googleblog.com/2021/10/pixel-6-setting-new-standard-for-mobile.html) security chips acting as the Secure Element.

!!! recommendation

    ！[谷歌Pixel 6](assets/img/android/google-pixel.png){ align=right }
    
    众所周知，**谷歌Pixel**设备具有良好的安全性，并适当支持[验证启动](https://source.android.com/security/verifiedboot)，即使在安装自定义操作系统时也是如此。
    
    从**Pixel 6**和**6 Pro**开始，Pixel设备将获得至少5年的安全更新保证，确保其使用寿命比其他竞争OEM厂商通常提供的2-4年要长得多。
    
    [:material-shopping: Store](https://store.google.com/category/phones){ .md-button .md-button--primary }

Secure Elements like the Titan M2 are more limited than the processor's Trusted Execution Environment used by most other phones as they are only used for secrets storage, hardware attestation, and rate limiting, not for running "trusted" programs. Phones without a Secure Element have to use the TEE for *all* of those functions, resulting in a larger attack surface.

Google Pixel phones use a TEE OS called Trusty which is [open-source](https://source.android.com/security/trusty#whyTrusty), unlike many other phones.

The installation of GrapheneOS on a Pixel phone is easy with their [web installer](https://grapheneos.org/install/web). If you don't feel comfortable doing it yourself and are willing to spend a bit of extra money, check out the [NitroPhone](https://shop.nitrokey.com/shop) as they come preloaded with GrapheneOS from the reputable [Nitrokey](https://www.nitrokey.com/about) company.

A few more tips for purchasing a Google Pixel:

- If you're after a bargain on a Pixel device, we suggest buying an "**a**" model, just after the next flagship is released. Discounts are usually available because Google will be trying to clear their stock.
- Consider price beating options and specials offered at physical stores.
- Look at online community bargain sites in your country. These can alert you to good sales.
- Google provides a list showing the [support cycle](https://support.google.com/nexus/answer/4457705) for each one of their devices. The price per day for a device can be calculated as: $\text{Cost} \over \text {EOL Date}-\text{Current Date}$, meaning that the longer use of the device the lower cost per day.

## 常规应用程序

We recommend a wide variety of Android apps throughout this site. The apps listed here are Android-exclusive and specifically enhance or replace key system functionality.

### Shelter

!!! recommendation

    ![Shelter logo](assets/img/android/shelter.svg){ align=right }
    
    * *Shelter* *是一款应用程序，可帮助您利用Android的工作配置文件功能隔离或复制设备上的应用程序。
    
    Shelter支持阻止联系人跨档案搜索，并通过默认文件管理器([DocumentsUI](https://source.android.com/devices/architecture/modular-system/documentsui))跨档案共享文件。
    
    [:octicons-repo-16: Repository](https://gitea.angry.im/PeterCxy/Shelter#shelter){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitea.angry.im/PeterCxy/Shelter){ .card-link title="源代码" }
    [:octicons-heart-16:](https://www.patreon.com/PeterCxy){ .card-link title=贡献 }
    
    ??? 下载
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.typeblog.shelter)

!!! 推荐

    推荐使用Shelter而不是 [Insular](https://secure-system.gitlab.io/Insular/)和 [Island](https://github.com/oasisfeng/island)，因为它支持[联系人搜索屏蔽](https://secure-system.gitlab.io/Insular/faq.html)。
    
    当使用Shelter时，你完全信任它的开发者，因为Shelter作为一个[设备管理员](https://developer.android.com/guide/topics/admin/device-admin)来创建工作档案，它可以广泛地访问存储在工作档案中的数据。

### Auditor

!!! recommendation

    ![Auditor logo](assets/img/android/auditor.svg#only-light){ align=right }
    ![Auditor logo](assets/img/android/auditor-dark.svg#only-dark){ align=right }
    
    * *Auditor* * 是一款利用硬件安全功能为[支持的设备](https://attestation.app/about#device-support) 提供设备完整性监控的应用程序。 目前，它只适用于GrapheneOS和设备的库存操作系统。
    
    [:octicons-home-16: 主页](https://grapheneos.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://attestation.app/about#privacy-policy){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://grapheneos.org/faq){ .card-link title=文档}
    [:octicons-code-16:](https://attestation.app/source){ .card-link title="源代码" }
    [:octicons-heart-16:](https://attestation.app/donate){ .card-link title="贡献" } downloads "下载"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.attestation.auditor.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/Auditor/releases)
        - [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

Auditor performs attestation and intrusion detection by:

- Using a [Trust On First Use (TOFU)](https://en.wikipedia.org/wiki/Trust_on_first_use) model between an *auditor* and *auditee*, the pair establish a private key in the [hardware-backed keystore](https://source.android.com/security/keystore/) of the *Auditor*.
- The *auditor* can either be another instance of the Auditor app or the [Remote Attestation Service](https://attestation.app).
- The *auditor* records the current state and configuration of the *auditee*.
- Should tampering with the operating system of the *auditee* happen after the pairing is complete, the auditor will be aware of the change in the device state and configurations.
- You will be alerted to the change.

No personally identifiable information is submitted to the attestation service. We recommend that you sign up with an anonymous account and enable remote attestation for continuous monitoring.

If your [threat model](basics/threat-modeling.md) requires privacy, you could consider using [Orbot](tor.md#orbot) or a VPN to hide your IP address from the attestation service. To make sure that your hardware and operating system is genuine, [perform local attestation](https://grapheneos.org/install/web#verifying-installation) immediately after the device has been installed and prior to any internet connection.

### Secure Camera

!!! recommendation

    ![Secure 摄像头标志](assets/img/android/secure_camera.svg#only-light){ align=right }
    ![Secure 摄像头标志](assets/img/android/secure_camara-dark#only-dark){ aligh=right }
    
    **Secure Camera** 是一个专注于隐私和安全的相机应用，它可以捕捉图像、视频和二维码。 CameraX供应商扩展（肖像、HDR、夜视、面部修饰和自动）也在可用设备上得到支持。
    
    [:octicons-repo-16: 主页](https://grapheneos.org/){ .md-button .md-button--primary }
    
    [:octicons-info-16:](https://github.com/GrapheneOS/Camera#privacy-policy){ .card-link title="隐私政策" }
    [:octicons-code-16:](https://grapheneos.org/faq){ .card-link title=文档}
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title="源代码" }
    [](){ .card-link title="贡献" } downloads "下载"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.camera.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/Camera/releases)
        - [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

Main privacy features include:

- Auto removal of [Exif](https://en.wikipedia.org/wiki/Exif) metadata (enabled by default)
- Use of the new [Media](https://developer.android.com/training/data-storage/shared/media) API, therefore [storage permissions](https://developer.android.com/training/data-storage) are not required
- Microphone permission not required unless you want to record sound

!!! note

    目前，元数据没有从视频文件中删除，但这是计划中的。
    
    图像方向元数据未被删除。 如果你启用位置（在安全相机中），**也不会被删除。 如果你以后想删除，你将需要使用一个外部应用程序，如 [ExifEraser]（data-redaction.md#exiferaser）。

### 安全的PDF查看器（Secure PDF Viewer）

!!! recommendation

    ![安全PDF浏览器标志](assets/img/android/secure_pdf_viewer.svg#only-light){ align=right }
    ![安全PDF浏览器标志](assets/img/android/secure_pdf_viewer-dark.svg#only-dark){ align=right }
    
    **安全PDF浏览器**是一个基于 [pdf.js]（https://en.wikipedia.org/wiki/PDF.js）的PDF浏览器，不需要任何权限。 该PDF被送入一个 [sandboxed]（https://en.wikipedia.org/wiki/Sandbox_(software_development)） [webview]（https://developer.android.com/guide/webapps/webview）。 这意味着它不需要权限就能直接访问内容或文件。
    
    [Content-Security-Policy](https://en.wikipedia.org/wiki/Content_Security_Policy)是用来强制要求WebView内的JavaScript和造型属性完全是静态内容。
    
    [:octicons-repo-16: Repository](https://gitea.angry.im/PeterCxy/Shelter#shelter){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitea.angry.im/PeterCxy/Shelter){ .card-link title="源代码" }
    [:octicons-heart-16:](https://grapheneos.org/donate){ .card-link title=贡献 }
    
    ??? downloads "下载"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.pdfviewer.play)
        - [:simple-github: GitHub](https://github.com/GrapheneOS/PdfViewer/releases)
        - [:material-cube-outline: GrapheneOS App Store](https://github.com/GrapheneOS/Apps/releases)

## 获取应用程序

### GrapheneOS应用商店

GrapheneOS's app store is available on [GitHub](https://github.com/GrapheneOS/Apps/releases). It supports Android 12 and above and is capable of updating itself. The app store has standalone applications built by the GrapheneOS project such as the [Auditor](https://attestation.app/), [Camera](https://github.com/GrapheneOS/Camera), and [PDF Viewer](https://github.com/GrapheneOS/PdfViewer). If you are looking for these applications, we highly recommend that you get them from GrapheneOS's app store instead of the Play Store, as the apps on their store are signed by the GrapheneOS's project own signature that Google does not have access to.

### 奥罗拉商店（Aurora Store）

The Google Play Store requires a Google account to login which is not great for privacy. You can get around this by using an alternative client, such as Aurora Store.

!!! recommendation

    ![Aurora Store徽标](assets/img/android/aurora-store.webp){ align=right }
    
    * *Aurora Store* *是Google Play Store客户端，无需Google帐户、Google Play服务或microG即可下载应用程序。
    
    [:octicons-home-16: 主页](https://auroraoss.com/){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitlab.com/AuroraOSS/AuroraStore){ .card-link title="源代码" }
    
    ??? 下载
    
        - [:simple-gitlab: GitLab](https://gitlab.com/AuroraOSS/AuroraStore/-/releases)

Aurora Store does not allow you to download paid apps with their anonymous account feature. You can optionally log in with your Google account with Aurora Store to download apps you have purchased, which does give access to the list of apps you've installed to Google, however you still benefit from not requiring the full Google Play client and Google Play Services or microG on your device.

### 手动使用RSS通知

For apps that are released on platforms like GitHub and GitLab, you may be able to add an RSS feed to your [news aggregator](/news-aggregators) that will help you keep track of new releases.

![RSS APK](./assets/img/android/rss-apk-light.png#only-light) ![RSS APK](./assets/img/android/rss-apk-dark.png#only-dark) ![APK Changes](./assets/img/android/rss-changes-light.png#only-light) ![APK Changes](./assets/img/android/rss-changes-dark.png#only-dark)

#### GitHub

On GitHub, using [Secure Camera](#secure-camera) as an example, you would navigate to its [releases page](https://github.com/GrapheneOS/Camera/releases) and append `.atom` to the URL:

`https://github.com/GrapheneOS/Camera/releases.atom`

#### GitLab

On GitLab, using [Aurora Store](#aurora-store) as an example, you would navigate to its [project repository](https://gitlab.com/AuroraOSS/AuroraStore) and append `/-/tags?format=atom` to the URL:

`https://gitlab.com/AuroraOSS/AuroraStore/-/tags?format=atom`

#### Verifying APK Fingerprints

If you download APK files to install manually, you can verify their signature with the [`apksigner`](https://developer.android.com/studio/command-line/apksigner) tool, which is a part of Android [build-tools](https://developer.android.com/studio/releases/build-tools).

1. 安装 [Java JDK](https://www.oracle.com/java/technologies/downloads/)。

2. 下载 [Android Studio命令行工具](https://developer.android.com/studio#command-tools)。

3. 解压缩下载的存档：

    ```bash
    unzip commandlinetools-*.zip
    cd cmdline-tools
    ./bin/sdkmanager --sdk_root=./ "build-tools;29.0.3"
    ```

4. 运行签名验证命令。

    ```bash
    ./build-tools/29.0.3/apksigner verify --print-certs ../Camera-37.apk
    ```

5. 然后，所产生的哈希值可以与另一个来源进行比较。 一些开发商，如Signal [，在其网站上显示了指纹](https://signal.org/android/apk/)。

    ```bash
    Signer #1 certificate DN: CN=GrapheneOS
    Signer #1 certificate SHA-256 digest: 6436b155b917c2f9a9ed1d15c4993a5968ffabc94947c13f2aeee14b7b27ed59
    Signer #1 certificate SHA-1 digest: 23e108677a2e1b1d6e6b056f3bb951df7ad5570c
    Signer #1 certificate MD5 digest: dbbcd0cac71bd6fa2102a0297c6e0dd3
    ```

### F-Droid

![F-Droid logo](assets/img/android/f-droid.svg){ align=right width=120px }

==We do **not** currently recommend F-Droid as a way to obtain apps.== F-Droid is often recommended as an alternative to Google Play, particularly in the privacy community. The option to add third-party repositories and not be confined to Google's walled garden has led to its popularity. F-Droid additionally has [reproducible builds](https://f-droid.org/en/docs/Reproducible_Builds/) for some applications and is dedicated to free and open-source software. However, there are [notable problems](https://privsec.dev/posts/android/f-droid-security-issues/) with the official F-Droid client, their quality control, and how they build, sign, and deliver packages.

Due to their process of building apps, apps in the official F-Droid repository often fall behind on updates. F-Droid maintainers also reuse package IDs while signing apps with their own keys, which is not ideal as it gives the F-Droid team ultimate trust.

Other popular third-party repositories such as [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) alleviate some of these concerns. The IzzyOnDroid repository pulls builds directly from GitHub and is the next best thing to the developers' own repositories. However, it is not something that we can recommend, as apps are typically [removed](https://github.com/vfsfitvnm/ViMusic/issues/240#issuecomment-1225564446) from that respository when they make it to the main F-Droid repository. While that makes sense (since the goal of that particular repository is to host apps before they're accepted into the main F-Droid repository), it can leave you with installed apps which no longer receive updates.

That said, the [F-Droid](https://f-droid.org/en/packages/) and [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) repositories are home to countless apps, so they can be a useful tool to search for and discover open-source apps that you can then download through Play Store, Aurora Store, or by getting the APK directly from the developer. It is important to keep in mind that some apps in these repositories have not been updated in years and may rely on unsupported libraries, among other things, posing a potential security risk. You should use your best judgement when looking for new apps via this method.

!!! note

    In some rare cases, the developer of an app will only distribute it through F-Droid ([Gadgetbridge](https://gadgetbridge.org/) is one example of this). If you really need an app like that, we recommend using [Neo Store](https://github.com/NeoApplications/Neo-Store/) instead of the official F-Droid app to obtain it.

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

### 服务供应商

- 它必须是开源软件。
- Must support bootloader locking with custom AVB key support.
- Must receive major Android updates within 0-1 months of release.
- Must receive Android feature updates (minor version) within 0-14 days of release.
- Must receive regular security patches within 0-5 days of release.
- Must **not** be "rooted" out of the box.
- Must **not** enable Google Play Services by default.
- Must **not** require system modification to support Google Play Services.

### 设备

- Must support at least one of our recommended custom operating systems.
- Must be currently sold new in stores.
- Must receive a minimum of 5 years of security updates.
- Must have dedicated secure element hardware.

### 应用程序

- Applications on this page must not be applicable to any other software category on the site.
- General applications should extend or replace core system functionality.
- Applications should receive regular updates and maintenance.
