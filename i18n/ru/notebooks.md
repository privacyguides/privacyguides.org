---
title: "Заметки"
icon: material/notebook-edit-outline
---

Сохраняйте свои заметки и дневники, не передавая их третьим лицам.

Если вы в настоящее время используете такие приложения, как Evernote, Google Keep или Microsoft OneNote, то мы предлагаем вам выбрать альтернативу с поддержкой E2EE.

## Облачные сервисы

### Joplin

!!! recommendation

    ![Логотип Joplin](assets/img/notebooks/joplin.svg){ align=right }
    
    **Joplin** - это бесплатное, открытое приложение с богатой функциональностью для ведения заметок и списков задач, которое может обрабатывать большое количество заметок в формате Markdown, упорядоченных по тегам и записным книжкам. Приложение предлагает E2EE и может синхронизироваться через Nextcloud, Dropbox и др. Приложение также предлагает легкий перенос данных из Evernote и простых текстовых заметок.
    
    [:octicons-home-16: Домашняя страница](https://joplinapp.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://joplinapp.org/privacy/){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://joplinapp.org/help/){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/laurent22/joplin){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://joplinapp.org/donate/){ .card-link title=Поддержать }
    
    ??? downloads "Скачать"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.cozic.joplin)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/joplin/id1315599797)
        - [:simple-github: GitHub](https://github.com/laurent22/joplin-android/releases)
        - [:simple-windows11: Windows](https://joplinapp.org/#desktop-applications)
        - [:simple-apple: macOS](https://joplinapp.org/#desktop-applications)
        - [:simple-linux: Linux](https://joplinapp.org/#desktop-applications)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/joplin-web-clipper/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/joplin-web-clipper/alofnhikmmkdbbbgpnglcpdollgjjfek)

Joplin [не поддерживает](https://github.com/laurent22/joplin/issues/289) защиту приложения и отдельных заметок паролем или PIN-кодом. Но ваши данные по-прежнему шифруются вашим секретным ключом при передаче и в месте синхронизации. Since January 2023, Joplin supports biometrics app lock for [Android](https://joplinapp.org/changelog_android/#android-v2-10-3-https-github-com-laurent22-joplin-releases-tag-android-v2-10-3-pre-release-2023-01-05t11-29-06z) and [iOS](https://joplinapp.org/changelog_ios/#ios-v12-10-2-https-github-com-laurent22-joplin-releases-tag-ios-v12-10-2-2023-01-20t17-41-13z).

### Standard Notes

!!! recommendation

    ![Логотип Standard Notes](assets/img/notebooks/standard-notes.svg){ align=right }
    
    **Standard Notes** - это простое и приватное приложение для заметок, которое делает ваши заметки легкими и доступными везде, где бы вы ни находились. Приложение имеет E2EE на каждой платформе, а также продвинутую систему работы с темами и пользовательскими редакторами. Программа также прошла [независимый аудит (PDF)](https://s3.amazonaws.com/standard-notes/security/Report-SN-Audit.pdf).
    
    [:octicons-home-16: Домашняя страница](https://standardnotes.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://standardnotes.com/privacy){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://standardnotes.com/help){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/standardnotes){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://standardnotes.com/donate){ .card-link title=Поддержать }
    
    ??? downloads "Скачать"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.standardnotes)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1285392450)
        - [:simple-github: GitHub](https://github.com/standardnotes/app/releases)
        - [:simple-windows11: Windows](https://standardnotes.com)
        - [:simple-apple: macOS](https://standardnotes.com)
        - [:simple-linux: Linux](https://standardnotes.com)
        - [:octicons-globe-16: Web](https://app.standardnotes.com/)

### Cryptee

!!! recommendation

    ![Логотип Cryptee](./assets/img/notebooks/cryptee.svg#only-light){ align=right }
    ![Логотип Cryptee](./assets/img/notebooks/cryptee-dark.svg#only-dark){ align=right }
    
    **Cryptee** - это веб-редактор документов и приложение для хранения фотографий с поддержкой E2EE и открытым исходным кодом. Cryptee - это PWA, что означает, что он работает без проблем на всех современных устройствах, не требуя нативных приложений для каждой соответствующей платформы.
    
    [:octicons-home-16: Домашняя страница](https://crypt.ee){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://crypt.ee/privacy){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://crypt.ee/help){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/cryptee){ .card-link title="Исходный код" }
    
    ??? downloads "Скачать"
    
        - [:octicons-globe-16: PWA](https://crypt.ee/download)

Cryptee предлагает 100 МБ хранилища бесплатно, а если вам нужно больше, вы можете воспользоваться платными опциями. Регистрация не требует указания электронной почты или другой персональной информации.

## Локальные сервисы

### Org-mode

!!! recommendation

    ![Логотип Org-mode](assets/img/notebooks/org-mode.svg){ align=right }
    
    **Org-mode** - это [основной режим](https://www.gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html) для GNU Emacs. Org-mode предназначен для ведения заметок, списков задач, планирования проектов и создания документов с помощью быстрой и эффективной системы работы с обычным текстом. Синхронизация возможна с помощью инструментов [синхронизации файлов](file-sharing.md#синхронизация-файлов).
    
    [:octicons-home-16: Домашняя страница](https://orgmode.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://orgmode.org/manuals.html){ .card-link title=Документация}
    [:octicons-code-16:](https://git.savannah.gnu.org/cgit/emacs/org-mode.git){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://liberapay.com/bzg){ .card-link title=Поддержать }

## Критерии

**Обратите внимание, что у нас нет связей ни с одним из проектов, которые мы рекомендуем.** В дополнение к [нашим стандартным критериям](about/criteria.md)мы разработали четкий набор требований, позволяющий нам давать объективные рекомендации. Мы рекомендуем вам ознакомиться с этим списком, прежде чем выбрать программу, и провести самостоятельное исследование, чтобы убедиться, что это правильный выбор для вас.

!!! example "Это новый раздел"

    Мы пока работаем над установлением определенных критериев для каждого раздела нашего сайта, и они могут поменяться в будущем. Если у вас есть вопросы по поводу наших критериев, пожалуйста, [задавайте их на нашем форуме](https://discuss.privacyguides.net/latest) и не думайте, что мы не учли что-то при составлении наших рекомендаций, если это не указано здесь. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

- Клиенты должны иметь открытый код.
- Облачная синхронизация должна использовать E2EE.
- Должна быть поддержка экспорта документов в стандартных форматах.

### В лучшем случае

- Функции локального резервного копирования/синхронизации должны поддерживать шифрование.
- Облачные платформы должны поддерживать обмен документами.

--8<-- "includes/abbreviations.ru.txt"
