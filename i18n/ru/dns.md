---
title: "DNS-провайдеры"
icon: material/dns
description: These are some encrypted DNS providers we recommend switching to, to replace your ISP's default configuration.
---

Зашифрованный DNS со сторонними серверами следует использовать только для обхода базовой [блокировки DNS](https://en.wikipedia.org/wiki/DNS_blocking), если вы уверены, что это не повлечет за собой никаких последствий. Зашифрованный DNS не поможет вам скрыть какую-либо активность в интернете.

[Узнайте больше о DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

## Рекомендованные провайдеры

| DNS-провайдер                                                                   | Политика конфиденциальности                                                                           | Протоколы                                                          | Логирование      | ECS                | Фильтрация                                                                                                                     |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Без шифрования <br> DoH/3 <br> DoT <br> DNSCrypt | Частичное[^1]    | Нет                | Нет Используемый список фильтрации можно найти здесь. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Без шифрования <br> DoH/3 <br> DoT                     | Частичное[^2]    | Нет                | Нет                                                                                                                            |
| [**ControlID**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Без шифрования <br> DoH/3 <br> DoT <br> DoQ      | Опциональное[^3] | Нет                | Зависит от выбранного сервера.                                                                                                 |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                                 | Нет[^4]          | Нет                | Нет Используемый список фильтрации можно найти здесь. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Без шифрования <br> DoH/3 <br> DoT                     | Опциональное[^5] | Необязательное[^5] | Нет                                                                                                                            |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Без шифрования <br> DoH <br> DoT <br> DNSCrypt   | Частичное[^6]    | Необязательное[^5] | Зависит от выбранного сервера, по умолчанию блокирует вредоносные программы.                                                   |

## Критерии

**Обратите внимание, что у нас нет связей ни с одним проектом, которые мы рекомендуем.** В дополнение к [нашим стандартным критериям](about/criteria.md) мы разработали четкий набор требований, позволяющий давать объективные рекомендации. Мы рекомендуем ознакомиться с данным списком перед выбором и провести самостоятельное исследование, чтобы убедиться, что для вас это правильный выбор.

!!! example "Это новый раздел"

    Мы работаем над установлением определенных критериев для каждого раздела сайта, и они могут поменяться в будущем. Если у вас есть вопросы относительно наших критериев, [задайте вопрос на нашем форуме](https://discuss.privacyguides.net/latest), и не считайте, что мы что-то не учли при составлении наших рекомендаций, если это не указано здесь. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

- Поддержка [DNSSEC](technology/dns.md#what-is-dnssec-and-when-is-it-used)
- [QNAME Minimization](advanced/dns-overview.md#what-is-qname-minimization).
- Allow for [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) to be disabled.
- Prefer [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) support or geo-steering support.

## Нативная поддержка в операционных системах

### Android

Android 9 и новее поддерживает DNS over TLS. Его можно включить в **Настройках** &rarr; **Сеть и интернет** &rarr; **Персональный DNS-сервер**.

### Устройства Apple

Последние версии iOS, iPadOS, tvOS и macOS поддерживают протоколы DoT и DoH. Оба протокола можно настроить при помощи [профилей конфигурации](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) или [API настроек DNS](https://developer.apple.com/documentation/networkextension/dns_settings).

После установки профиля конфигурации или приложения, использующего API настроек DNS, можно выбрать конфигурацию DNS. Если включен VPN, будут использоваться настройки DNS вашего VPN-сервиса, а не системные настройки.

#### Подписанные профили

Apple не предоставляет нативного интерфейса для создания профилей зашифрованного DNS. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) — это неофициальный инструмент создания собственных профилей зашифрованного DNS, однако они не будут подписаны. Предпочтительнее использовать подписанные профили, так как подпись подтверждает надёжность источника профиля и помогает обеспечить его целостность. Зеленая метка «Проверено» присваивается подписанным профилям конфигурации. Чтобы получить больше информации о подписанном коде, смотрите статью [«О подписывании кода»](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Подписанные профили** предлагают [AdGuard](https://adguard.com/ru/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io) и [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info "Информация"

    `systemd-resolved`, используемый во многих дистрибутивах Linux для DNS-запросов, всё еще [не поддерживает DoH](https://github.com/systemd/systemd/issues/8639). Если вы хотите использовать DoH, вам следует установить [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) и [настроить его](https://wiki.archlinux.org/title/Dnscrypt-proxy) для обработки всех DNS-запросов в системе по протоколу HTTPS.

## Зашифрованные DNS-прокси

Зашифрованные DNS-прокси создают локальный прокси-сервер, на который будут перенаправляться запросы с вашего системного [незашифрованного DNS-резолвера](advanced/dns-overview.md#unencrypted-dns). Обычно они подходят для устройств, не поддерживающих [зашифрованный DNS](advanced/dns-overview.md#what-is-encrypted-dns).

### RethinkDNS

!!! recommendation

    ![Логотип RethinkDNS](assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![Логотип RethinkDNS](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS** — это открытый Android-клиент, поддерживающий [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot), [DNSCrypt](advanced/dns-overview.md#dnscrypt) и DNS-прокси, кеширование, локальное сохранение истории DNS-запросов, а также может использоваться как файрвол.
    
    [:octicons-home-16: Домашняя страница](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Исходный код" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### dnscrypt-proxy

!!! recommendation

    ![Логотип dnscrypt-proxy](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** — это DNS-прокси с поддержкой [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh) и [анонимизированного DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    !!! warning "Функция анонимизированного DNS [**не**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) анонимизирует весь остальной трафик."
    
    [:octicons-repo-16: Репозиторий](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Поддержать }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## Self-hosted Solutions

A self-hosted DNS solution is useful for providing filtering on controlled platforms, such as Smart TVs and other IoT devices, as no client-side software is needed.

### AdGuard Home

!!! recommendation

    ![Логотип AdGuard Home](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** — это открытая [DNS-воронка](https://wikipedia.org/wiki/DNS_sinkhole), которая использует [фильтрацию DNS](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/), чтобы блокировать такой нежелательный контент, как реклама.
    
    AdGuard Home предлагает продуманный интерфейс для просмотра развёрнутых отчетов и управления блокировкой контента.
    
    [:octicons-home-16: Официальный сайт](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Исходный код" }

### Pi-hole

!!! recommendation

    ![Логотип Pi-hole](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** — это открытая [DNS-воронка](https://wikipedia.org/wiki/DNS_sinkhole), которая использует [фильтрацию DNS](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/), чтобы блокировать такой нежелательный контент, как реклама.
    
    Pi-hole создана для развертывания на Raspberry Pi, но она не требует именно такого специфичного оборудования. Решение предлагает дружелюбный веб-интерфейс для просмотра подробных отчетов и управления блокировкой контента.
    
    [:octicons-home-16: Домашняя страница](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Политика конфиденциальности" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Документация}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Исходный код" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Поддержать }

[^1]: AdGuard хранит показатели производительности их DNS серверов, содержащие в себе количество выполненных запросов к определенному серверу, количество заблокированных запросов и скорость обработки. Они также ведут и хранят базу данных доменов, запрошенных в течение последних 24 часов. "Нам нужна эта информация, чтобы выявлять и блокировать новые трекеры и угрозы." "Также мы храним информацию о том, сколько раз тот или иной трекер был заблокирован. Нам нужна эта информация, чтобы удалять устаревшие правила из наших фильтров." [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare собирает и хранит только DNS-запросы, направленные на 1.1.1.1. Сервис не хранит персональные данные; большая часть неперсональных данных хранится только в течение 25 часов. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D ведет логи только на Premium-серверах с пользовательскими DNS-профилями. Бесплатные сервера не ведут логов. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: DNS-сервера Mullvad доступны и для пользователей Mullvad VPN, и для остальных пользователей Интернета. Их политика конфиденциальности утверждает, что они ни в каком виде не сохраняют DNS-запросы. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS предоставляет функции анализа и логирования по желанию. Вы можете самостоятельно выбрать время и место хранения ваши логов. Если же специально это не настраивать, никакие данные сохраняться не будут. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 собирает некоторые данные в целях обнаружения угроз и реагирования на них. Эти данные могут быть изменены и переданы, например, в целях исследования безопасности. Quad9 не собирает и не хранит IP-адреса и другую информацию, которую они считают идентифицирующей пользователя. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)
