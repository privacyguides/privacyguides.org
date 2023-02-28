---
title: "Синхронизация и обмен файлами"
icon: material/share-variant
---

Узнайте, как конфиденциально обмениваться файлами между устройствами, с друзьями и родственниками или анонимно в Интернете.

## Обмен файлами

### Send

!!! recommendation

    ![Логотип Send](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send** - это форк прекратившего свое существование сервиса Firefox Send от Mozilla, который позволяет отправлять файлы другим людям с помощью ссылки. Файлы шифруются на вашем устройстве, чтобы их не мог прочитать сервер, и по желанию могут быть защищены паролем. Разработчик Send держит [публичный экземпляр сайта](https://send.vis.ee/). Вы можете использовать другие публичные экземпляры или развернуть Send самостоятельно.
    
    [:octicons-home-16: Домашняя страница](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="Публичные экземпляры"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=Поддержать }

Send можно использовать через веб-интерфейс или через CLI [ffsend](https://github.com/timvisee/ffsend). Если вы знакомы с командной строкой и часто отправляете файлы, мы рекомендуем использовать CLI-клиент, чтобы избежать небезопасного шифрования на основе JavaScript. Вы можете указать флаг `--host`, чтобы использовать определенный сервер:

```bash
ffsend upload --host https://send.vis.ee/ FILE
```

### OnionShare

!!! recommendation

    ![Логотип OnionShare](/assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** - это инструмент с открытым исходным кодом, позволяющий безопасно и анонимно передавать файлы любого размера. Он работает путем запуска веб-сервера, доступного как onion сервис в сети Tor, с неугадываемым URL, который вы можете передать получателям для загрузки или отправки файлов.
    
    [:octicons-home-16: Домашняя страница](https://onionshare.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title="Onion сервис" }
    [:octicons-info-16:](https://docs.onionshare.org){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="Исходный код" }
    
    ??? downloads "Скачать"
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

### Критерии

**Обратите внимание, что у нас нет связей ни с одним из проектов, которые мы рекомендуем.** В дополнение к [нашим стандартным критериям](about/criteria.md)мы разработали четкий набор требований, позволяющий нам давать объективные рекомендации. Мы рекомендуем вам ознакомиться с этим списком, прежде чем выбрать программу, и провести самостоятельное исследование, чтобы убедиться, что это правильный выбор для вас.

!!! example "Это новый раздел"

    Мы пока работаем над установлением определенных критериев для каждого раздела нашего сайта, и они могут поменяться в будущем. Если у вас есть вопросы по поводу наших критериев, пожалуйста, [задавайте их на нашем форуме](https://discuss.privacyguides.net/latest) и не думайте, что мы не учли что-то при составлении наших рекомендаций, если это не указано здесь. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

- Расшифрованные данные не должны храниться на сервере.
- Исходный код сервиса должен быть открыт.
- Должны быть либо клиенты для Linux, macOS и Windows, либо веб-интерфейс.

## FreedomBox

!!! recommendation

    ![Логотип FreedomBox](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** - это операционная система, разработанная для запуска на [одноплатном компьютере](https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80). Цель FreedomBox заключается в том, чтобы максимально облегчить настройку серверных приложений для самостоятельного хостинга.
    
    [:octicons-home-16: Домашняя страница](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=Документация}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=Поддержать }

## Синхронизация файлов

### Nextcloud (клиент-сервер)

!!! recommendation

    ![Логотип Nextcloud](assets/img/productivity/nextcloud.svg){ align=right }
    
    **Nextcloud** - это набор бесплатного клиент-серверного программного обеспечения с открытым исходным кодом для создания собственного сервиса хранилища файлов на приватном сервере, который вы контролируете.
    
    [:octicons-home-16: Домашняя страница](https://nextcloud.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Поддержать }
    
    ??? downloads "Скачать"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! recommendation

    Мы не рекомендуем использовать [плагин E2EE](https://apps.nextcloud.com/apps/end_to_end_encryption) для Nextcloud, так как это может привести к потере данных; это очень экспериментальный продукт, который недостаточно качественен для полноценного использования.

### Syncthing (P2P)

!!! recommendation

    ![Логотип Syncthing](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** - это утилита для непрерывной пиринговой синхронизации файлов с открытым исходным кодом. Она используется для синхронизации файлов между двумя или более устройствами по локальной сети или через Интернет. Syncthing не использует централизованный сервер; он использует [Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html#bep-v1) для передачи данных между устройствами. Все данные шифруются с помощью протокола TLS.
    
    [:octicons-home-16: Домашняя страница](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=Поддержать }
    
    ??? downloads "Скачать"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

### Критерии

**Обратите внимание, что у нас нет связей ни с одним из проектов, которые мы рекомендуем.** В дополнение к [нашим стандартным критериям](about/criteria.md)мы разработали четкий набор требований, позволяющий нам давать объективные рекомендации. Мы рекомендуем вам ознакомиться с этим списком, прежде чем выбрать программу, и провести самостоятельное исследование, чтобы убедиться, что это правильный выбор для вас.

!!! example "Это новый раздел"

    Мы пока работаем над установлением определенных критериев для каждого раздела нашего сайта, и они могут поменяться в будущем. Если у вас есть вопросы по поводу наших критериев, пожалуйста, [задавайте их на нашем форуме](https://discuss.privacyguides.net/latest) и не думайте, что мы не учли что-то при составлении наших рекомендаций, если это не указано здесь. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

#### Минимальные требования к сервисам

- Не должны требовать использования стороннего удаленного/облачного сервера.
- Должны иметь открытый исходный код.
- Должны быть либо клиенты для Linux, macOS и Windows, либо веб-интерфейс.

#### В лучшем случае

Эти критерии представляют собой то, что мы хотели бы видеть от идеального проекта в этой категории. Наши рекомендации могут не соответствовать всем или нескольким из этих критериев, но проекты, которые им соответствуют, расположены выше остальных.

- Есть мобильные клиенты для iOS и Android, которые, как минимум, поддерживают предварительный просмотр документов.
- Есть резервное копирование фотографий с iOS и Android, а также опциональная поддержка синхронизации файлов/папок на Android.

--8<-- "includes/abbreviations.ru.txt"
