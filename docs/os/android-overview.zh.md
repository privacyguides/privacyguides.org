---
title: Android概述
icon: simple/android
---

安卓是一个安全的操作系统，它有强大的[应用程序沙箱](https://source.android.com/security/app-sandbox)，[启动时验证](https://source.android.com/security/verifiedboot)（AVB），以及一个强大的[权限](https://developer.android.com/guide/topics/permissions/overview)控制系统。

## 挑选安卓 ROM

你买到的安卓手机多半已经预装了能侵犯隐私的应用与服务，而这些服务并不属于 [AOSP](https://source.android.com/)。 例如 Google Play 服务：它有权访问你的文件、联系人、通话记录、短信、定位、相机、麦克风、硬件身份码等。且这些权限无法收回。 这类应用与服务扩大了你的设备的攻击面，也是安卓系统的各种隐私问题的源头。

换用一个不预装这类软件的安卓 ROM 可以解决这个问题。 不巧，很多安卓 ROM 不支持 AVB、回滚保护、系统更新、等这些关键的安全功能，破坏了安卓的安全模型。 某些 ROM 发布的版本属于 [`userdebug`](https://source.android.com/setup/build/building#choose-a-target) 构建版本。这个版本通过 [ADB](https://developer.android.com/studio/command-line/adb) 来提供 root 访问，并且为了支持调试，[放宽](https://github.com/LineageOS/android_system_sepolicy/search?q=userdebug&type=code)了 SELinux 规则。这进一步扩大了攻击面，弱化了安全模型。

在挑选安卓 ROM 时，理想的情况，是能找到坚持安卓安全模型的 ROM。 最起码的是，你选用的 ROM 应该提供生产版本（而非 `userdebug`版本）的构建，能支持 AVB、回滚保护、按时推送系统更新、把 SELinux 设为[强制模式](https://source.android.com/security/selinux/concepts#enforcement_levels)。 我们推荐的所有安卓 ROM 都满足上述标准。

[我们推荐的安卓 ROM :material-arrow-right-drop-circle:](../android.md ""){.md-button}

## 避免 Root

[Rooting](https://en.wikipedia.org/wiki/Rooting_(Android)) 安卓手机会大大降低安全性，因为它削弱了完整的 [安卓安全模型](https://en.wikipedia.org/wiki/Android_(operating_system)#Security_and_privacy)。 如果有一个被降低的安全性所帮助的漏洞，这可能会减少隐私。 常见的root方法涉及直接篡改启动分区，使得它不可能成功地进行验证性启动。 需要root的应用程序也会修改系统分区，这意味着验证启动将不得不保持禁用。 在用户界面上直接暴露root也增加了你的设备的 [攻击面](https://en.wikipedia.org/wiki/Attack_surface) ，并可能有助于 [特权升级](https://en.wikipedia.org/wiki/Privilege_escalation) 漏洞和SELinux政策的绕过。

广告拦截器，修改 [hosts文件](https://en.wikipedia.org/wiki/Hosts_(file)) （AdAway）和防火墙（AFWall+），需要持续的根访问是危险的，不应该被使用。 它们也不是解决其预期目的的正确方法。 对于广告屏蔽，我们建议采用加密的 [DNS](../dns.md) 或 [VPN](../vpn.md) 服务器屏蔽解决方案。 RethinkDNS、TrackerControl和AdAway在非root模式下将占用VPN插槽（通过使用本地环回VPN），使你无法使用增强隐私的服务，如Orbot或真正的VPN服务器。

AFWall+基于 [包过滤](https://en.wikipedia.org/wiki/Firewall_(computing)#Packet_filter) 方法工作，在某些情况下可能会被绕过。

我们认为，通过root手机所做的安全牺牲不值得那些应用程序的可疑隐私利益。

## 已验证的启动

[经过验证的启动](https://source.android.com/security/verifiedboot) ，是安卓安全模式的一个重要组成部分。 它能够保护您免受 [罪恶的](https://en.wikipedia.org/wiki/Evil_maid_attack) 攻击、恶意软件的持久性，并确保安全更新不能用 [回滚保护降级](https://source.android.com/security/verifiedboot/verified-boot#rollback-protection)

安卓10及以上版本已经从全盘加密转向更灵活的 [基于文件的加密](https://source.android.com/security/encryption/file-based)。 你的数据使用独特的加密密钥进行加密，而操作系统文件则不被加密。

验证启动确保了操作系统文件的完整性，从而防止有物理访问权限的对手在设备上篡改或安装恶意软件。 在不太可能的情况下，如果恶意软件能够利用系统的其他部分并获得更高的特权访问，验证性启动将防止并在重启设备时恢复对系统分区的更改。

遗憾的是，OEM厂商只有在其库存的安卓系统上才有义务支持验证性启动。 只有少数OEM厂商，如谷歌，支持在他们的设备上定制AVB密钥注册。 此外，一些AOSP衍生产品，如LineageOS或/e/ OS，即使在对第三方操作系统有验证启动支持的硬件上也不支持验证启动。 我们建议你在</strong> 购买新设备之前，先查看支持 **。 不支持验证性启动的AOSP衍生产品是 **，不推荐**。</p>

许多原始设备制造商也有破碎的实施验证启动，你必须注意他们的营销之外。 例如，Fairphone 3和4在默认情况下是不安全的，因为 [股票引导程序信任公共AVB签名密钥](https://forum.fairphone.com/t/bootloader-avb-keys-used-in-roms-for-fairphone-3-4/83448/11)。 这破坏了Fairphone设备上的验证引导，因为系统将引导替代Android操作系统（如/e/） [，而没有任何关于自定义操作系统使用的警告](https://source.android.com/security/verifiedboot/boot-flow#locked-devices-with-custom-root-of-trust) 。

## 固件更新

固件更新是维护安全的关键，没有它们，你的设备就不可能是安全的。 原始设备制造商与他们的合作伙伴有支持协议，在有限的支持期内提供闭源组件。 这些内容详见每月的 [Android安全公告](https://source.android.com/security/bulletin)。

由于手机的组件，如处理器和无线电技术依赖于闭源组件，更新必须由各自的制造商提供。 因此，重要的是，你要在一个有效的支持周期内购买设备。 [高通公司](https://www.qualcomm.com/news/releases/2020/12/16/qualcomm-and-google-announce-collaboration-extend-android-os-support-and) 和 [三星](https://news.samsung.com/us/samsung-galaxy-security-extending-updates-knox/) ，对其设备的支持期为4年，而便宜的产品往往支持周期更短。 随着 [Pixel 6](https://support.google.com/pixelphone/answer/4457705)的推出，谷歌现在制造自己的SoC，他们将提供至少5年的支持。

不再受SoC制造商支持的EOL设备无法从OEM供应商或后市场Android分销商处获得固件更新。 这意味着这些设备的安全问题将继续得不到解决。

例如，Fairphone在市场上宣传他们的设备可以获得6年的支持。 然而，SoC（Fairphone 4上的高通骁龙750G）的EOL日期要短得多。 这意味着高通公司为Fairphone 4提供的固件安全更新将在2023年9月结束，无论Fairphone是否继续发布软件安全更新。

## Android 版本

重要的是，不要使用 [报废的](https://endoflife.date/android) 版本的Android。 较新版本的安卓系统不仅会收到操作系统的安全更新，也会收到重要的隐私增强更新。 例如， [，在Android 10之前](https://developer.android.com/about/versions/10/privacy/changes)，任何具有 [`READ_PHONE_STATE`](https://developer.android.com/reference/android/Manifest.permission#READ_PHONE_STATE) 权限的应用程序都可以访问你的手机的敏感和独特的序列号，如 [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity)， [MEID](https://en.wikipedia.org/wiki/Mobile_equipment_identifier)，你的SIM卡的 [IMSI](https://en.wikipedia.org/wiki/International_mobile_subscriber_identity)，而现在他们必须是系统应用程序才能这样做。 系统应用只由OEM或安卓发行提供。

## Android 权限

[Android上的权限](https://developer.android.com/guide/topics/permissions/overview) ，让你控制哪些应用程序被允许访问。 谷歌定期在每个连续的版本中对权限系统进行 [改善](https://developer.android.com/about/versions/11/privacy/permissions)。 你安装的所有应用程序都是严格的 [沙箱](https://source.android.com/security/app-sandbox)，因此，没有必要安装任何杀毒软件。 使用最新版本的安卓系统的智能手机永远比使用付费杀毒软件的旧智能手机更安全。 最好不要为杀毒软件付费，省下钱来买一部新的智能手机，如谷歌Pixel。

如果你想运行一个你不确定的应用程序，考虑使用用户或工作档案。

## 媒体访问

相当多的应用程序允许你与他们 "共享 "一个文件进行媒体上传。 例如，如果你想在推特上发布一张图片，不要授予推特对你的 "媒体和照片 "的访问权，因为那时它就可以访问你所有的图片。 相反，去你的文件管理器（documentsUI），按住图片，然后与Twitter分享。

## 用户资料

多个用户配置文件可以在 **设置** → **系统** → **多个用户** ，是Android中最简单的隔离方式。

通过用户个人资料，你可以对一个特定的个人资料施加限制，如：打电话、使用短信或在设备上安装应用程序。 每个用户资料使用自己的加密密钥进行加密，不能访问任何其他人的个人资料。 即使是设备所有者，如果不知道他们的密码，也不能查看其他人的个人资料。 多个个人资料是一种更安全的隔离方法。

## 工作身份

[工作配置文件](https://support.google.com/work/android/answer/6191949) 是隔离单个应用程序的另一种方式，可能比单独的用户配置文件更方便。

在没有企业MDM的情况下，需要一个 **设备控制器** 应用程序，如 [Shelter](#recommended-apps) ，以创建一个工作档案，除非你使用的是包括一个自定义的Android操作系统。

该工作档案依赖于设备控制器来运作。 诸如 *文件穿梭* 和 *接触搜索封锁* 或任何种类的隔离功能必须由控制器实现。 你还必须完全信任设备控制器应用程序，因为它可以完全访问你在工作档案中的数据。

这种方法通常不如二级用户配置文件安全；但是，它确实允许你在工作和个人配置文件中同时运行应用程序的便利。

## VPN Killswitch

Android 7及更高版本支持VPN killswitch ，无需安装第三方应用程序即可使用。 如果VPN断开连接，此功能可以防止泄漏。 可以在 :gear: **设置** → **网络 & 互联网** → **VPN** → :gear: → **阻止没有VPN的连接**。

## 全局切换

现代安卓设备有全局切换键，用于禁用蓝牙和定位服务。 安卓12引入了相机和麦克风的切换功能。 在不使用时，我们建议禁用这些功能。 在重新启用之前，应用程序不能使用被禁用的功能（即使被授予个别许可）。

## 谷歌

如果你使用的是带有谷歌服务的设备，无论是你的原生操作系统还是像GrapheneOS这样的安全沙盒式的操作系统，你可以做一些额外的改变来改善你的隐私。 我们仍然建议完全避免使用谷歌服务，或者通过将 *Shelter* 等设备控制器与GrapheneOS的沙盒化谷歌游戏结合起来，将谷歌游戏服务限制在特定的用户/工作档案中。

### 高级保护计划

如果你有一个谷歌账户，我们建议注册 [高级保护计划](https://landing.google.com/advancedprotection/)。 任何拥有两个或更多支持 [FIDO](../basics/multi-factor-authentication.md#fido-fast-identity-online) 的硬件安全密钥的人都可以免费使用。

高级保护计划提供增强的威胁监控，并支持：

- </strong> 更严格的双因素认证；例如，必须使用 [FIDO](../basics/multi-factor-authentication.md#fido-fast-identity-online) **，不允许使用 [SMS OTPs](../basics/multi-factor-authentication.md#sms-or-email-mfa), [TOTP](../basics/multi-factor-authentication.md#time-based-one-time-password-totp) 和 [OAuth](https://en.wikipedia.org/wiki/OAuth)。</li>
- 只有谷歌和经过验证的第三方应用程序可以访问账户数据
- 在 Gmail 帐户上扫描收到的邮件以进行 [钓鱼](https://en.wikipedia.org/wiki/Phishing#Email_phishing) 尝试
- 更严格的 [安全的浏览器扫描](https://www.google.com/chrome/privacy/whitepaper.html#malware) 与谷歌浏览器
- 对丢失凭证的账户有更严格的恢复程序

 如果你使用非沙盒式的Google Play服务（在股票操作系统上很常见），高级保护计划还带有 [额外的好处](https://support.google.com/accounts/answer/9764949?hl=en) ，例如。

- 不允许在Google Play商店、操作系统供应商的应用程序商店之外安装应用程序，或通过 [`adb`](https://en.wikipedia.org/wiki/Android_Debug_Bridge)
- 强制性的自动设备扫描与 [Play Protect](https://support.google.com/googleplay/answer/2812853?hl=en#zippy=%2Chow-malware-protection-works%2Chow-privacy-alerts-work)
- 警告你有未经验证的应用程序</ul>

### Google Play 系统更新

在过去，安卓系统的安全更新必须由操作系统供应商来提供。 从安卓10开始，安卓变得更加模块化，谷歌可以通过特权游戏服务推送安全更新， **一些** 系统组件。

如果你有一个以安卓10或以上系统出厂的EOL设备，并且无法在你的设备上运行我们推荐的任何操作系统，你很可能最好坚持使用你的OEM安卓安装（而不是这里没有列出的操作系统，如LineageOS或/e/ OS）。 这将允许你从谷歌获得 **，一些** 安全修复，同时不会因为使用不安全的安卓衍生产品而违反安卓安全模式，增加你的攻击面。 我们仍然建议尽快升级到支持的设备。

### 广告 ID

所有安装了Google Play服务的设备都会自动生成一个 [广告ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) ，用于定向广告。 禁用此功能以限制收集到的关于你的数据。

在带有 [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play)的安卓发行上，进入 :gear: **设置** → **应用程序** → **Sandboxed Google Play** → **谷歌设置** → **广告**，并选择 *删除广告 ID*。

在拥有特权的谷歌游戏服务的安卓发行版上（如股票操作系统），该设置可能在几个位置之一。 查看

- :gear: **设置** → **谷歌** → **广告**
- :gear: **设置** → **隐私** → **广告**

你可以选择删除你的广告ID，或者 *，选择退出基于兴趣的广告*，这在安卓的OEM发行中是不同的。 如果呈现出删除广告ID的选项，那是首选。 如果没有，那么请确保选择退出并重新设置你的广告ID。

### SafetyNet和Play Integrity API

[安全网](https://developer.android.com/training/safetynet/attestation) 和 [Play Integrity APIs](https://developer.android.com/google/play/integrity) ，一般用于 [银行应用程序](https://grapheneos.org/usage#banking-apps)。 许多银行应用程序在GrapheneOS中使用沙盒游戏服务可以正常工作，但是一些非金融应用程序有自己的粗略防篡改机制，可能会失败。 GrapheneOS通过了 `basicIntegrity` 检查，但没有通过认证检查 `ctsProfileMatch`。 安卓8或更高版本的设备有硬件认证支持，如果没有泄露的密钥或严重的漏洞，就无法绕过。

至于谷歌钱包，我们不推荐这样做，因为他们的 [隐私政策](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en)，其中规定如果你不希望你的信用等级和个人信息与联盟营销服务共享，你必须选择退出。
