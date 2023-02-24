---
title: "云存储"
icon: material/file-cloud
---

许多云存储供应商需要你完全信任他们不会查看你的文件。 下面列出的替代方案通过让你控制你的数据或通过实施E2EE来消除对信任的需求。

如果这些替代品不能满足你的需求，我们建议你看看 [加密软件](encryption.md)。

??? 问题 "寻找Nextcloud？"

    Nextcloud是[仍然是一个推荐的工具](生产力.md)，用于自我托管文件管理套件，然而我们目前不推荐第三方Nextcloud存储提供商，因为我们不推荐家庭用户使用Nextcloud的内置E2EE功能。

## Proton Drive（Proton 云盘）

!!! recommendation

    ! [Proton Drive徽标] (assets/img/cloud/protondrive.svg) {align = right}
    
    * * Proton Drive * *是由流行的加密电子邮件提供商[Proton Mail] (https://proton.me/mail)提供的E2EE通用文件存储服务。
    
    [:octicons-home-16: 主页](https://grapheneos.org/){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://proton.me/support/drive#privacy-policy){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://grapheneos.org/faq){ .card-link title=文档}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="源代码" }
    [](){ .card-link title="贡献" } 下载
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: Web](https://apps.apple.com/app/id1509667851)

Proton Drive的移动客户端于2022年12月发布，目前尚未开源。 Proton公司历来将他们的源代码发布时间推迟到初始产品发布之后， [，计划在2023年底之前](https://www.reddit.com/r/ProtonDrive/comments/zf14i8/comment/izdwmme/?utm_source=share&utm_medium=web2x&context=3) ，发布源代码。 Proton Drive桌面客户端仍在开发中。

## Criteria

**请注意，我们与我们推荐的任何项目都没有关系。** 除了 [我们的标准标准](about/criteria.md)，我们还制定了一套明确的要求，使我们能够提供客观的建议。 我们建议你在选择使用一个项目之前熟悉这个清单，并进行自己的研究以确保它是你的正确选择。

!!! 例如 "本节是新的"

    我们正在努力为我们网站的每个部分建立确定的标准，这可能会有变化。 如果你对我们的标准有任何疑问，请[在我们的论坛上提问](https://discuss.privacyguides.net/latest)，如果这里没有列出，不要以为我们在做推荐时没有考虑到什么。 当我们推荐一个项目时，有许多因素被考虑和讨论，而记录每一个因素是一项正在进行的工作。

### 最低要求

- 使用端到端加密
- 必须提供免费计划或试用期进行测试。
- 必须支持TOTP或FIDO2多因素认证支持，或Passkey登录。
- 必须提供一个支持基本文件管理功能的网络界面。
- 必须允许所有文件/文档的轻松导出。
- 必须使用标准的、经过审计的加密技术。

### 最好的情况下

我们的最佳案例标准代表了我们希望从这个类别的完美项目中看到的东西。 我们的推荐可能不包括任何或所有这些功能，但那些包含这些功能的推荐可能比本页面上的其他推荐排名更高。

- 客户端应是开源的。
- 客户端应由独立的第三方对其进行全面的审计。
- 应提供Linux、Android、Windows、macOS和iOS的本地客户端。
    - 这些客户端应该与云存储供应商的本地操作系统工具集成，如iOS上的Files应用集成，或Android上的DocumentsProvider功能。
- 应支持与其他用户轻松分享文件。
- 应在网络界面上至少提供基本的文件预览和编辑功能。
