---
title: "Менеджеры паролей"
icon: material/form-textbox-password
description: Password managers allow you to securely store and manage passwords and other credentials.
schema:
  - 
    "@context": http://schema.org
    "@type": WebPage
    name: Password Manager Recommendations
    url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Bitwarden
    image: /assets/img/password-management/bitwarden.svg
    url: https://bitwarden.com
    sameAs: https://en.wikipedia.org/wiki/Bitwarden
    applicationCategory: Password Manager
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: 1Password
    image: /assets/img/password-management/1password.svg
    url: https://1password.com
    sameAs: https://en.wikipedia.org/wiki/1Password
    applicationCategory: Password Manager
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Psono
    image: /assets/img/password-management/psono.svg
    url: https://psono.com
    applicationCategory: Password Manager
    operatingSystem:
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: KeePassXC
    image: /assets/img/password-management/keepassxc.svg
    url: https://keepassxc.org/
    sameAs: https://en.wikipedia.org/wiki/KeePassXC
    applicationCategory: Password Manager
    operatingSystem:
      - Windows
      - macOS
      - Linux
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: KeePassDX
    image: /assets/img/password-management/keepassdx.svg
    url: https://www.keepassdx.com/
    applicationCategory: Password Manager
    operatingSystem: Android
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Strongbox
    image: /assets/img/password-management/strongbox.svg
    url: https://strongboxsafe.com/
    applicationCategory: Password Manager
    operatingSystem: iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: gopass
    image: /assets/img/password-management/gopass.svg
    url: https://www.gopass.pw/
    applicationCategory: Password Manager
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - FreeBSD
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
---

Менеджеры паролей позволяют безопасно хранить и управлять паролями и другими данными с помощью мастер-пароля.

[Введение в безопасные пароли :material-arrow-right-drop-circle:](./basics/passwords-overview.md)

!!! info "Информация"

    Встроенные менеджеры паролей, например в браузерах и операционных системах, иногда не так хороши, как специализированные программы для управления паролями. Преимуществом встроенных менеджеров паролей является хорошая интеграция с программным обеспечением, но зачастую они могут быть очень простыми и не иметь функций конфиденциальности и безопасности, которыми обладают отдельные программы.
    
    Например, менеджер паролей в Microsoft Edge вообще не поддерживает E2EE. Менеджер паролей Google имеет [опциональную](https://support.google.com/accounts/answer/11350823?hl=ru) поддержку E2EE, а менеджер паролей от Apple [предлагает](https://support.apple.com/ru-ru/HT202303) E2EE по умолчанию.

## Облачные сервисы

Эти менеджеры паролей синхронизируют ваши пароли с облаком для легкого доступа со всех ваших устройств и их безопасности в случае потери устройства.

### Bitwarden

!!! recommendation

    ![Логотип Bitwarden](assets/img/password-management/bitwarden.svg){ align=right }
    
    **Bitwarden** - это свободный менеджер паролей с открытым исходным кодом. Он направлен на решение проблем управления паролями для отдельных лиц, команд и организаций. Bitwarden - одно из лучших и самых безопасных решений для хранения всех ваших логинов и паролей с удобной синхронизацией данных между всеми вашими устройствами.
    
    [:octicons-home-16: Домашняя страница](https://bitwarden.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://bitwarden.com/privacy){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="Исходный код" }
    
    ??? downloads "Скачать"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
        - [:simple-appstore: App Store](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)
        - [:simple-github: GitHub](https://github.com/bitwarden/mobile/releases)
        - [:simple-windows11: Windows](https://bitwarden.com/download)
        - [:simple-linux: Linux](https://bitwarden.com/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/com.bitwarden.desktop)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh)

Bitwarden также имеет функцию [Bitwarden Send](https://bitwarden.com/products/send/), которая позволяет безопасно обмениваться текстом и файлами с использованием [сквозного шифрования](https://bitwarden.com/help/send-encryption). Отправленные через Bitwarden Send данные можно защитить [паролем](https://bitwarden.com/help/send-privacy/#send-passwords). Bitwarden Send также имеет функцию [автоматического удаления данных](https://bitwarden.com/help/send-lifespan).

Чтобы иметь возможность обмениваться файлами, вам необходима [Премиум-подписка](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans). Бесплатный план позволяет обмениваться только текстом.

Сервер Bitwarden имеет [открытый код](https://github.com/bitwarden/server), поэтому, если вы не хотите использовать официальное облако Bitwarden, вы можете легко развернуть свой собственный сервер для синхронизации.

**Vaultwarden** — это альтернативная реализация сервера синхронизации Bitwarden, написанная на языке Rust и совместимая с официальными клиентами Bitwarden. Она идеально подходит для самостоятельного развертывания, когда запуск официального сервиса, требующего больших мощностей, не является оправданным решением. Если вы хотите самостоятельно развернуть Bitwarden на своем сервере, скорее всего, вам стоит использовать Vaultwarden вместо официального сервера Bitwarden.

[:octicons-repo-16: Репозиторий Vaultwarden](https://github.com/dani-garcia/vaultwarden ""){.md-button} [:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title=Документация}
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="Исходный код" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title=Поддержать }

### 1Password

!!! recommendation

    ![Логотип 1Password](assets/img/password-management/1password.svg){ align=right }
    
    **1Password** — это менеджер паролей с акцентом на безопасность и простоту использования, который позволяет хранить пароли, кредитные карты, лицензии на программное обеспечение и любую другую конфиденциальную информацию в надежном цифровом хранилище. Ваши данные хранятся на серверах 1Password за [ежемесячную плату](https://1password.com/ru/sign-up/). 1Password регулярно проходит [независимые проверки на безопасность](https://support.1password.com/security-assessments/) и обеспечивает прекрасную поддержку клиентов. 1Password имеет закрытый исходный код, но безопасность продукта подробно описана в их [вайт пейпере по безопасности](https://1passwordstatic.com/files/security/1password-white-paper.pdf).
    
    [:octicons-home-16: Домашняя страница](https://1password.com/ru){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://support.1password.com/1password-privacy/){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://support.1password.com/){ .card-link title=Документация}
    
    ??? downloads "Скачать"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onepassword.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1511601750?mt=8)
        - [:simple-windows11: Windows](https://1password.com/downloads/windows/)
        - [:simple-apple: macOS](https://1password.com/downloads/mac/)
        - [:simple-linux: Linux](https://1password.com/downloads/linux/)

Изначально **1Password** предоставлял лучший функционал именно для пользователей macOS и iOS, однако теперь функционал одинаковый на всех платформах. В нем есть множество функций, как ориентированных на семьи и менее технически подкованных людей, так и более продвинутых возможностей.

Ваше хранилище 1Password защищено одновременно мастер-паролем и случайным 34-символьным ключом безопасности для шифрования данных на серверах. Этот ключ добавляет вашим данным дополнительную защиту: они зашифрованы с высокой энтропией независимо от безопасности вашего мастер-пароля. Многие другие решения для управления паролями полностью полагаются на безопасность мастер-пароля для защиты ваших данных.

Одно из преимуществ 1Password перед Bitwarden — первоклассная поддержка нативных клиентов. В то время как Bitwarden выносит многие функции, особенно управление учетными записями, в веб-интерфейс хранилища, 1Password предоставляет почти все функции в своих мобильных и настольных приложениях. Клиенты 1Password также имеют более понятный интерфейс, что облегчает их использование.

### Psono

!!! recommendation

    ![Логотип Psono](assets/img/password-management/psono.svg){ align=right }
    
    **Psono** - это свободный менеджер паролей с открытым исходным кодом из Германии, ориентированный на управление паролями для команд. Psono поддерживает безопасный обмен паролями, файлами, ссылками и электронной почтой. Вся секретная информация защищена мастер-паролем.
    
    [:octicons-home-16: Домашняя страница](https://psono.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://doc.psono.com){ .card-link title=Документация}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Исходный код" }
    
    ??? downloads "Скачать"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

Psono предоставляет подробную документацию по своему продукту. Веб-клиент для Psono может быть развернут самостоятельно; в качестве альтернативы вы можете приобрести полную версию Community Edition или Enterprise Edition с дополнительными возможностями.

### Критерии

**Обратите внимание, что у нас нет связей ни с одним из проектов, которые мы рекомендуем.** В дополнение к [нашим стандартным критериям](about/criteria.md)мы разработали четкий набор требований, позволяющий нам давать объективные рекомендации. Мы рекомендуем вам ознакомиться с этим списком, прежде чем выбрать программу, и провести самостоятельное исследование, чтобы убедиться, что это правильный выбор для вас.

!!! Для уменьшения этой угрозы рассмотрите возможность самостоятельного хостинга.

    Мы пока работаем над установлением определенных критериев для каждого раздела нашего сайта, и они могут поменяться в будущем. Если у вас есть вопросы по поводу наших критериев, пожалуйста, [задавайте их на нашем форуме](https://discuss.privacyguides.net/latest) и не думайте, что мы не учли что-то при составлении наших рекомендаций, если это не указано здесь. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

#### Минимальные требования к сервисам

- Должны использовать сильное, современное/стандартизированное E2EE.
- Должны иметь тщательно документированные методы шифрования и обеспечения безопасности.
- Должен иметь опубликованный аудит от авторитетной, независимой третьей стороны.
- Вся телеметрия, не критичная для работы сервиса, должна быть необязательной.
- Не должны собирать больше ПД, чем необходимо для проведения оплаты.

#### В лучшем случае

Эти критерии представляют собой то, что мы хотели бы видеть от идеального проекта в этой категории. Наши рекомендации могут не соответствовать всем или нескольким из этих критериев, но проекты, которые им соответствуют, расположены выше остальных.

- Телеметрия должна собираться по желанию (отключена по умолчанию) или не собираться вообще.
- Исходный код должен быть открытым и пригодным для самостоятельной развёртки.

## Локальные сервисы

Эти программы позволяют управлять зашифрованной базой паролей локально.

### KeePassXC

!!! recommendation

    ![Логотип KeePassXC](assets/img/password-management/keepassxc.svg){ align=right }
    
    **KeePassXC** - это форк KeePassX, нативного кроссплатформенного порта KeePass Password Safe, созданный с целью расширить и улучшить его новыми возможностями и исправлениями ошибок, чтобы предоставить многофункциональный, кроссплатформенный и современный менеджер паролей с открытым исходным кодом.
    
    [:octicons-home-16: Домашняя страница](https://keepassxc.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://keepassxc.org/privacy){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://keepassxc.org/docs/){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/keepassxreboot/keepassxc){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://keepassxc.org/donate/){ .card-link title=Поддержать }
    
    ??? downloads "Скачать"
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

KeePassXC хранит экспортированные данные в виде [CSV](https://ru.wikipedia.org/wiki/CSV) файлов. При импортировании этого файла в другой менеджер паролей, вы можете потерять часть данных. Мы советуем вам проверять каждую запись вручную.

### KeePassDX (Android)

!!! recommendation

    ![Логотип KeePassDX](assets/img/password-management/keepassdx.svg){ align=right }
    
    **KeePassDX** - это легкий менеджер паролей для Android, который позволяет редактировать зашифрованные данные в одном файле в формате KeePass и безопасно заполнять формы. Покупка [Contributor Pro](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) позволяет разблокировать косметический контент и нестандартные функции протокола, но, что еще важнее, поддерживает развитие проекта.
    
    [:octicons-home-16: Домашняя страница](https://www.keepassdx.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Kunzisoft/KeePassDX/wiki){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/Kunzisoft/KeePassDX){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://www.keepassdx.com/#donation){ .card-link title=Поддержать }
    
    ??? downloads "Скачать"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
        - [:simple-github: GitHub](https://github.com/Kunzisoft/KeePassDX/releases)

### Strongbox (iOS и macOS)

!!! recommendation

    ![Логотип Strongbox](assets/img/password-management/strongbox.svg){ align=right }
    
    **Strongbox** - это нативный менеджер паролей с открытым исходным кодом для iOS и macOS. Он поддерживает форматы KeePass и Password Safe, поэтому может быть использован совместно с другими менеджерами паролей, например KeePassXC, на устройствах не от Apple. Strongbox использует модель [freemium](https://strongboxsafe.com/pricing/), поэтому предлагает большинство функций бесплатно, но дополнительные [функции](https://strongboxsafe.com/comparison/) для удобства, например биометрическая аутентификация, доступны по подписке или единоразовой покупке.
    
    [:octicons-home-16: Домашняя страница](https://strongboxsafe.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://strongboxsafe.com/privacy/){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://strongboxsafe.com/getting-started/){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/strongbox-password-safe/Strongbox){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://github.com/strongbox-password-safe/Strongbox#supporting-development){ .card-link title=Поддержать }
    
    ??? downloads "Скачать"
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

Кроме того, предлагается и полностью оффлайн версия: [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). Эта версия урезана, чтобы уменьшить площадь атаки.

### Для командной строки

Это простые менеджеры паролей, которые можно использовать внутри скриптов.

#### gopass

!!! recommendation

    ![Логотип gopass](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** - это менеджер паролей для командной строки, написанный на языке Go. Он работает на всех основных операционных системах для ПК и серверов (Linux, macOS, BSD, Windows).
    
    [:octicons-home-16: Домашняя страница](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Поддержать }
    
    ??? downloads "Скачать"
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

### Критерии

**Обратите внимание, что у нас нет связей ни с одним из проектов, которые мы рекомендуем.** В дополнение к [нашим стандартным критериям](about/criteria.md)мы разработали четкий набор требований, позволяющий нам давать объективные рекомендации. Мы рекомендуем вам ознакомиться с этим списком, прежде чем выбрать программу, и провести самостоятельное исследование, чтобы убедиться, что это правильный выбор для вас.

!!! example "Это новый раздел"

    Мы пока работаем над установлением определенных критериев для каждого раздела нашего сайта, и они могут поменяться в будущем. Если у вас есть вопросы по поводу наших критериев, пожалуйста, [задавайте их на нашем форуме](https://discuss.privacyguides.net/latest) и не думайте, что мы не учли что-то при составлении наших рекомендаций, если это не указано здесь. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

- Программа должна быть кроссплатформенной.
