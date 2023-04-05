---
title: "Электронная почта"
icon: material/file-cloud
description: Many cloud storage providers require your trust that they will not look at your files. These are private alternatives!
---

Многие сервисы облачного хранилища требуют от вас полного доверия, что они не будут просматривать ваши файлы. The alternatives listed below eliminate the need for trust by implementing secure E2EE.

If these alternatives do not fit your needs, we suggest you look into using encryption software like [Cryptomator](encryption.md#cryptomator-cloud) with another cloud provider. Using Cryptomator in conjunction with **any** cloud provider (including these) may be a good idea to reduce the risk of encryption flaws in a provider's native clients.

??? question "Ищете Nextcloud?"

    Nextcloud is [still a recommended tool](productivity.md) for self-hosting a file management suite, however we do not recommend third-party Nextcloud storage providers at the moment, because we do [not recommend](https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29) Nextcloud's built-in E2EE functionality for home users.

## Proton Drive

!!! recommendation

    ![Proton Drive logo](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** is a Swiss encrypted cloud storage provider from the popular encrypted email provider [Proton Mail](email.md#proton-mail).
    
    [:octicons-home-16: Домашняя страница](https://proton.me/ru/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/ru/legal/privacy){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://proton.me/ru/support/drive){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Исходный код" }
    
    ??? downloads "Скачать"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

The Proton Drive web application has been independently audited by Securitum in [2021](https://proton.me/blog/security-audit-all-proton-apps), full details were not made available, but Securitum's letter of attestation states:

> Auditors identified two low-severity vulnerabilities. Additionally, five general recommendations were reported. At the same time, we confirm that no important security issues were identified during the pentest.

Proton Drive's brand new mobile clients have not yet been publicly audited by a third-party.

## Tresorit

!!! recommendation

    ![Tresorit logo](assets/img/cloud/tresorit.svg){ align=right }
    
    **Tresorit** is a Hungarian encrypted cloud storage provider founded in 2011. Tresorit is owned by the Swiss Post, the national postal service of Switzerland.
    
    [:octicons-home-16: Homepage](https://tresorit.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tresorit.com/legal/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.tresorit.com/hc/en-us){ .card-link title=Documentation}
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id722163232)
        - [:simple-windows11: Windows](https://tresorit.com/download)
        - [:simple-apple: macOS](https://tresorit.com/download)
        - [:simple-linux: Linux](https://tresorit.com/download)

Tresorit has received a number of independent security audits:

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification/): ISO/IEC 27001:2013[^1] Compliance [Certification](https://www.certipedia.com/quality_marks/9108644476) by TÜV Rheinland InterCert Kft
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security/): Penetration Testing by Computest
    - This review assessed the security of the Tresorit web client, Android app, Windows app, and associated infrastructure.
    - Computest discovered two vulnerabilities which have been resolved.
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture/): Penetration Testing by Ernst & Young.
    - This review analyzed the full source code of Tresorit and validated that the implementation matches the concepts described in Tresorit's [white paper](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf).
    - Ernst & Young additionally tested the web, mobile, and desktop clients: "Test results found no deviation from Tresorit’s data confidentiality claims."

They have also received the Digital Trust Label, a certification from the [Swiss Digital Initiative](https://www.swiss-digital-initiative.org/digital-trust-label/) which requires passing [35 criteria](https://digitaltrust-label.swiss/criteria/) related to security, privacy, and reliability.

## Критерии

**Обратите внимание, что у нас нет связей ни с одним из проектов, которые мы рекомендуем.** В дополнение к [нашим стандартным критериям](about/criteria.md)мы разработали четкий набор требований, позволяющий нам давать объективные рекомендации. Мы рекомендуем вам ознакомиться с этим списком, прежде чем выбрать программу, и провести самостоятельное исследование, чтобы убедиться, что это правильный выбор для вас.

!!! example "Это новый раздел"

    Мы пока работаем над установлением определенных критериев для каждого раздела нашего сайта, и они могут поменяться в будущем. Если у вас есть вопросы по поводу наших критериев, пожалуйста, [задавайте их на нашем форуме](https://discuss.privacyguides.net/latest) и не думайте, что мы не учли что-то при составлении наших рекомендаций, если это не указано здесь. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

### Минимальные требования к сервисам

- Должны использовать обязательное сквозное шифрование.
- Должны иметь бесплатную версию или пробный период для тестирования.
- Должны поддерживать многофакторную аутентификацию TOTP или FIDO2, а также вход с помощью Passkey.
- Должны иметь веб-интерфейс, поддерживающий основные функции управления файлами.
- Должны обеспечивать легкий экспорт всех файлов/документов.
- Должно использоваться стандартное, проверенное шифрование.

### В лучшем случае

Эти критерии представляют собой то, что мы хотели бы видеть от идеального проекта в этой категории. Наши рекомендации могут не соответствовать всем или нескольким из этих критериев, но проекты, которые им соответствуют, расположены выше остальных.

- Клиенты должны иметь открытый код.
- Клиенты должны быть полностью проверены независимой третьей стороной.
- Должны предлагать нативные клиенты для Linux, Android, Windows, macOS и iOS.
    - Эти клиенты должны интегрироваться с собственными инструментами ОС для сервисов облачных хранилищ, такими как интеграция приложения Files на iOS или функциональность DocumentsProvider на Android.
- Должны поддерживать простой обмен файлами с другими пользователями.
- Должны предлагать, по крайней мере, базовые функции предварительного просмотра и редактирования файлов в веб-интерфейсе.

[^1]: [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001):2013 compliance relates to the company's [information security management system](https://en.wikipedia.org/wiki/Information_security_management) and covers the sales, development, maintenance and support of their cloud services.
