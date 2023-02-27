---
title: "安卓"
icon: 'simple/android'
---

![安卓徽标](assets/img/android/android.svg){ align=right }

**安卓开源项目** 是一个由谷歌领导的开源移动操作系统，为世界上大多数移动设备提供动力。 大多数使用安卓系统销售的手机都经过修改，包括侵入性的集成和应用程序，如谷歌游戏服务，所以你可以通过用没有这些侵入性功能的安卓系统版本替换你的手机默认安装，来大大改善你在移动设备上的隐私。

[:octicons-home-16:](https://source.android.com/){ .card-link title="首页" }
[:octicons-info-16:](https://source.android.com/docs){ .card-link title=文档}
[:octicons-code-16:](https://cs.android.com/android/platform/superproject/){ .card-link title="源代码" }

这些是我们推荐的安卓操作系统、设备和应用程序，以最大限度地提高你的移动设备的安全和隐私。 要了解更多关于安卓的信息。

- [安卓概况 :material-arrow-right-drop-circle:](os/android-overview.md)
- [为什么我们推荐GrapheneOS而不是CalyxOS :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/04/21/grapheneos-or-calyxos/)

## AOSP 衍生品

我们建议在你的设备上安装这些定制的安卓操作系统之一，根据你的设备与这些操作系统的兼容性，按偏好顺序列出。

!!! 备注

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

GrapheneOS支持 [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play)，它像其他普通应用程序一样完全在沙盒中运行 [Google Play服务](https://en.wikipedia.org/wiki/Google_Play_Services)。 这意味着你可以利用大多数Google Play服务，如 [推送通知](https://firebase.google.com/docs/cloud-messaging/)，同时让你完全控制其权限和访问，同时将其包含在你选择的特定 [工作档案](os/android-overview.md#work-profile) 或 [用户档案](os/android-overview.md#user-profiles)。

谷歌Pixel手机是目前唯一符合GrapheneOS的 [硬件安全要求的设备](https://grapheneos.org/faq#device-support)。

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

DivestOS有自动的内核漏洞([CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)) [补丁](https://gitlab.com/divested-mobile/cve_checker)，更少的专有blobs，以及一个自定义的 [hosts](https://divested.dev/index.php?page=dnsbl) 文件。 其加固的WebView， [Mulch](https://gitlab.com/divested-mobile/mulch)，使 [CFI](https://en.wikipedia.org/wiki/Control-flow_integrity) ，用于所有架构和 [网络状态分区](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning)，并接收带外更新。 DivestOS还包括来自GrapheneOS的内核补丁，并通过 [defconfig hardening](https://github.com/Divested-Mobile/DivestOS-Build/blob/master/Scripts/Common/Functions.sh#L758)，启用所有可用的内核安全功能。 所有比3.4版更新的内核都包括全页面 [sanitization](https://lwn.net/Articles/334747/) ，所有~22个Clang编译的内核都启用了 [`-ftrivial-auto-var-init=zero`](https://reviews.llvm.org/D54604?id=174471)。

DivestOS实现了一些最初为GrapheneOS开发的系统加固补丁。 DivestOS 16.0及以上版本实现了GrapheneOS的 [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) 和SENSORS权限切换， [硬化的内存分配器](https://github.com/GrapheneOS/hardened_malloc)， [exec-spawning](https://blog.privacyguides.org/2022/04/21/grapheneos-or-calyxos/#additional-hardening)， [JNI](https://en.wikipedia.org/wiki/Java_Native_Interface) [constification](https://en.wikipedia.org/wiki/Const_(computer_programming))，以及部分 [bionic](https://en.wikipedia.org/wiki/Bionic_(software)) 硬化补丁集。 17.1和更高版本的GrapheneOS的每个网络完全 [MAC随机化](https://en.wikipedia.org/wiki/MAC_address#Randomization) 选项， [`ptrace_scope`](https://www.kernel.org/doc/html/latest/admin-guide/LSM/Yama.html) 控制，以及自动重启/Wi-Fi/蓝牙 [超时选项](https://grapheneos.org/features)。

DivestOS使用F-Droid作为其默认应用商店。 通常情况下，我们会建议避免使用F-Droid，因为它有许多 [安全问题](#f-droid)。 然而，在DivestOS上这样做是不可行的；开发者通过他们自己的F-Droid仓库更新他们的应用程序([DivestOS Official](https://divestos.org/fdroid/official/?fingerprint=E4BE8D6ABFA4D9D4FEEF03CDDA7FF62A73FD64B75566F6DD4E5E577550BE8467) and [DivestOS WebView](https://divestos.org/fdroid/webview/?fingerprint=FB426DA1750A53D7724C8A582B4D34174E64A84B38940E5D5A802E1DFF9A40D2))。 我们建议禁用官方F-Droid应用程序，并使用 [Neo Store](https://github.com/NeoApplications/Neo-Store/) ，启用DivestOS仓库，以保持这些组件的更新。 对于其他应用程序，我们推荐的获取方法仍然适用。

!!! 推荐

    DivestOS的固件更新 [status](https://gitlab.com/divested-mobile/firmware-empty/-/blob/master/STATUS)和质量控制在其支持的设备中各不相同。 我们仍然推荐GrapheneOS，这取决于你设备的兼容性。 对于其他设备，DivestOS是一个不错的选择。
    
    并非所有支持的设备都有验证启动，有些设备的验证启动性能比其他设备好。

## 安卓设备

在购买设备时，我们建议尽可能购买新的设备。 移动设备的软件和固件只支持有限的时间，因此购买新的设备可以尽可能地延长这一寿命。

避免从移动网络运营商那里购买电话。 这些产品通常有一个 **锁定的引导加载器** ，不支持 [OEM解锁](https://source.android.com/devices/bootloader/locking_unlocking)。 这些手机变体将阻止你安装任何种类的替代性安卓发行。

对于从网上市场购买二手手机，要非常 **小心**。 始终检查卖家的声誉。 如果设备被盗，有可能 [IMEI黑名单](https://www.gsma.com/security/resources/imei-blacklisting/)。 您与前任所有者的活动相关联的风险也存在。

还有一些关于安卓设备和操作系统兼容性的提示。

- 不要购买已经达到或接近其使用寿命的设备，额外的固件更新必须由制造商提供。
- 不要购买预装的LineageOS或/e/OS手机或任何没有适当 [核实启动](https://source.android.com/security/verifiedboot) 支持和固件更新的安卓手机。 这些设备也没有办法让你检查它们是否被篡改过。
- 简而言之，如果一个设备或Android发行版没有在这里列出，可能有一个很好的理由。 请查看我们的 [论坛](https://discuss.privacyguides.net/) ，了解详情!

### Google Pixel

谷歌像素手机是我们推荐购买的 **唯一** 设备。 由于对第三方操作系统的适当AVB支持和谷歌定制的 [Titan](https://security.googleblog.com/2021/10/pixel-6-setting-new-standard-for-mobile.html) 安全芯片作为安全元件，Pixel手机的硬件安全性比目前市场上的任何其他安卓设备都强。

!!! recommendation

    ！[谷歌Pixel 6](assets/img/android/google-pixel.png){ align=right }
    
    众所周知，**谷歌Pixel**设备具有良好的安全性，并适当支持[验证启动](https://source.android.com/security/verifiedboot)，即使在安装自定义操作系统时也是如此。
    
    从**Pixel 6**和**6 Pro**开始，Pixel设备将获得至少5年的安全更新保证，确保其使用寿命比其他竞争OEM厂商通常提供的2-4年要长得多。
    
    [:material-shopping: Store](https://store.google.com/category/phones){ .md-button .md-button--primary }

像泰坦M2这样的安全元件比大多数其他手机使用的处理器的可信执行环境更加有限，因为它们只用于秘密存储、硬件证明和速率限制，而不是用于运行 "可信 "程序。 没有安全元件的手机必须使用TEE来 *，所有这些功能的* ，从而导致更大的攻击面。

谷歌Pixel手机使用的是名为Trusty的TEE操作系统，它是 [开源](https://source.android.com/security/trusty#whyTrusty)，与其他许多手机不同。

在Pixel手机上安装GrapheneOS很容易，他们的 [网页安装程序](https://grapheneos.org/install/web)。 如果你觉得自己做起来不舒服，并且愿意多花一点钱，可以看看 [NitroPhone](https://shop.nitrokey.com/shop) ，因为它们预装了GrapheneOS，来自著名的 [Nitrokey](https://www.nitrokey.com/about) 公司。

购买谷歌Pixel的另外几个提示：

- 如果你想买到便宜的Pixel设备，我们建议购买"**a**"型号，就在下一个旗舰机发布之后。 通常会有折扣，因为谷歌将试图清理他们的库存。
- 考虑在实体店提供的打价方案和特价商品。
- 看看你所在国家的在线社区便宜货网站。 这些可以提醒你有好的销售。
- 谷歌提供了一个列表，显示了他们每个设备的 [支持周期](https://support.google.com/nexus/answer/4457705)。 设备每天的价格可以计算为。$\text{Cost} \over \text {EOL Date}-\text{Current Date}$，意味着设备使用时间越长，每天的费用越低。

## 常规应用程序

我们在整个网站上推荐了各种各样的安卓应用。 这里列出的应用程序是安卓独有的，专门加强或取代关键的系统功能。

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

Auditor通过以下方式进行鉴证和入侵检测。

- </em>在 *审计员* 和 *被审计者*之间使用 [首次使用信任（TOFU）](https://en.wikipedia.org/wiki/Trust_on_first_use) 模式，该配对在
审计员 *的硬件支持的密钥库</a> 中建立一个私人密钥。</li> 
  
  - *审计员* ，可以是审计师应用程序的另一个实例，也可以是 [远程认证服务](https://attestation.app)。
- *审计员* 记录了 *审计对象*的当前状态和配置。
- 如果在配对完成后发生篡改 *审计对象的操作系统* ，审计人员将意识到设备状态和配置的变化。
- 你会被提醒注意这一变化。</ul> 

没有个人身份信息被提交给证明服务。 我们建议你用匿名账户注册，并启用远程认证，以进行持续监控。

如果你的 [威胁模型](basics/threat-modeling.md) 需要隐私，你可以考虑使用 [Orbot](tor.md#orbot) 或VPN，从证明服务中隐藏你的IP地址。 为了确保你的硬件和操作系统是真实的， [，在设备安装后，在任何互联网连接之前，立即进行本地认证](https://grapheneos.org/install/web#verifying-installation)。



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
    

主要隐私功能包括：

- 自动删除 [Exif](https://en.wikipedia.org/wiki/Exif) 元数据（默认启用）。
- 使用新的 [媒体](https://developer.android.com/training/data-storage/shared/media) API，因此不需要 [存储权限](https://developer.android.com/training/data-storage)
- 除非您想录制声音，否则不需要麦克风权限

!!! 备注

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

GrapheneOS的应用商店可在 [GitHub](https://github.com/GrapheneOS/Apps/releases)。 它支持Android 12及更高版本，并且能够自行更新。 该应用商店有GrapheneOS项目建立的独立应用，如 [Auditor](https://attestation.app/)、 [Camera](https://github.com/GrapheneOS/Camera)、 [PDF Viewer](https://github.com/GrapheneOS/PdfViewer)。 如果你正在寻找这些应用程序，我们强烈建议你从GrapheneOS的应用程序商店而不是Play商店获得它们，因为他们商店的应用程序是由GrapheneOS的项目自己的签名，而谷歌无法访问。



### 奥罗拉商店（Aurora Store）

Google Play商店需要一个Google账户来登录，这对隐私来说不是很好。 你可以通过使用一个替代的客户端，如Aurora Store，来解决这个问题。

!!! recommendation

    ![Aurora Store徽标](assets/img/android/aurora-store.webp){ align=right }
    
    * *Aurora Store* *是Google Play Store客户端，无需Google帐户、Google Play服务或microG即可下载应用程序。
    
    [:octicons-home-16: 主页](https://auroraoss.com/){ .md-button .md-button--primary }
    [:octicons-code-16:](https://gitlab.com/AuroraOSS/AuroraStore){ .card-link title="源代码" }
    
    ??? 下载
    
        - [:simple-gitlab: GitLab](https://gitlab.com/AuroraOSS/AuroraStore/-/releases)
    

Aurora Store不允许您下载具有匿名帐户功能的付费应用程序。 您可以选择使用Aurora Store登录您的Google帐户下载您购买的应用程序，这确实可以访问您安装到Google的应用程序列表，但是您仍然可以从不需要完整的Google Play客户端和Google Play服务或设备上的microG中受益。



### 手动使用RSS通知

对于在GitHub和GitLab等平台上发布的应用程序，你也许可以在你的 [新闻聚合器](/news-aggregators) ，添加一个RSS源，这将有助于你跟踪新版本。

![RSS应用](./assets/img/android/rss-apk-light.png#only-light) ![RSS应用](./assets/img/android/rss-apk-dark.png#only-dark) ![APK 变更](./assets/img/android/rss-changes-light.png#only-light) ![APK 变更](./assets/img/android/rss-changes-dark.png#only-dark)



#### GitHub

在GitHub上，以 [安全相机](#secure-camera) 为例，你可以导航到它的 [发布页](https://github.com/GrapheneOS/Camera/releases) ，并在URL上附加 `.atom`。

`https://github.com/GrapheneOS/Camera/releases.atom`



#### GitLab

在GitLab上，以 [Aurora Store](#aurora-store) 为例，你可以导航到它的 [项目库](https://gitlab.com/AuroraOSS/AuroraStore) ，并在URL上附加 `/-/tags?format=atom`。

`https://gitlab.com/AuroraOSS/AuroraStore/-/tags?format=atom`



#### Verifying APK Fingerprints

如果你下载APK文件进行手动安装，你可以用 [`apksigner`](https://developer.android.com/studio/command-line/apksigner) 工具验证其签名，这是Android [build-tools](https://developer.android.com/studio/releases/build-tools)的一部分。

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

![F-Droid徽标](assets/img/android/f-droid.svg){ align=right width=120px }

==我们 **，而不是** ，目前推荐F-Droid作为获取应用程序的一种方式。==F-Droid经常被推荐为Google Play的替代品，特别是在隐私社区。 添加第三方资源库并不局限于谷歌的围墙花园这一选择导致了它的流行。 F-Droid另外还有 [可复制的构建](https://f-droid.org/en/docs/Reproducible_Builds/) ，用于一些应用程序，并致力于自由和开源软件。 然而，有 [显著的问题](https://privsec.dev/posts/android/f-droid-security-issues/) ，官方F-Droid客户端，他们的质量控制，以及他们如何建立、签署和交付包裹。

由于他们构建应用程序的过程，F-Droid官方资源库中的应用程序经常在更新上落后。 F-Droid维护者在用自己的密钥签署应用程序时也会重复使用包的ID，这并不理想，因为它给了F-Droid团队最终的信任。

其他流行的第三方资源库，如 [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) ，缓解了其中的一些担忧。 IzzyOnDroid存储库直接从GitHub拉取构建，是开发者自己存储库的下一个最好的东西。 然而，这不是我们可以推荐的，因为当应用程序进入F-droid主仓库时，通常 [，从该仓库删除](https://github.com/vfsfitvnm/ViMusic/issues/240#issuecomment-1225564446)。 虽然这是有道理的（因为该特定仓库的目标是在应用程序被接受到F-Droid主仓库之前托管它们），但它可能会让你安装的应用程序不再收到更新。

也就是说， [F-droid](https://f-droid.org/en/packages/) 和 [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) 存储库有无数的应用程序，所以它们可以成为搜索和发现开源应用程序的有用工具，然后你可以通过Play Store、Aurora Store或直接从开发者那里获得APK下载。 重要的是要记住，这些资源库中的一些应用程序已经多年没有更新，可能依赖于不支持的库等，构成潜在的安全风险。 在通过这种方法寻找新的应用程序时，你应该使用你的最佳判断力。

!!! 备注

    在一些罕见的情况下，一个应用程序的开发者将只通过F-droid发布（[Gadgetbridge]（https://gadgetbridge.org/）就是一个例子）。 如果你真的需要这样的应用程序，我们建议使用[Neo Store](https://github.com/NeoApplications/Neo-Store/)，而不是官方的F-droid应用程序来获得它。
    



## Criteria

**请注意，我们与我们推荐的任何项目都没有关系。** 除了 [我们的标准标准](about/criteria.md)，我们还制定了一套明确的要求，使我们能够提供客观的建议。 我们建议你在选择使用一个项目之前熟悉这个清单，并进行自己的研究以确保它是你的正确选择。

!!! 例如 "本节是新的"

    我们正在努力为我们网站的每个部分建立确定的标准，这可能会有变化。 如果你对我们的标准有任何疑问，请[在我们的论坛上提问](https://discuss.privacyguides.net/latest)，如果这里没有列出，不要以为我们在做推荐时没有考虑到什么。 当我们推荐一个项目时，有许多因素被考虑和讨论，而记录每一个因素是一项正在进行的工作。
    



### 服务供应商

- 它必须是开源软件。
- 必须支持引导器锁定，支持自定义AVB密钥。
- 必须在发布后0-1个月内接受主要的安卓系统更新。
- 必须在发布后0-14天内收到安卓功能更新（小版本）。
- 必须在发布后0-5天内收到定期安全补丁。
- 必须 **，而不是** ，开箱即 被"root"了。
- 必须 **，而不是** ，默认启用Google Play服务。
- 必须 **，而不是** ，需要修改系统以支持Google Play服务。



### 设备

- 必须支持至少一个我们推荐的定制操作系统。
- 必须是目前在商店里销售的新产品。
- 必须接受至少5年的安全更新。
- 必须有专门的安全要素硬件。



### 应用程序

- 本页的应用程序不得适用于网站上的任何其他软件类别。
- 一般的应用程序应该扩展或取代核心系统功能。
- 应用程序应定期得到更新和维护。
