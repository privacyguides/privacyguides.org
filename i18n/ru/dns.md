---
title: "DNS-провайдеры"
icon: material/dns
---

!!! faq "Следует ли мне использовать зашифрованный DNS?"

    Зашифрованный DNS со сторонними серверами должен использоваться только для обхода базовой [DNS-блокировки](https://en.wikipedia.org/wiki/DNS_blocking) если вы уверены, что это не повлечет за собой никаких последствий. Зашифрованный DNS не поможет вам скрыть какую-либо активность в интернете.
    
    [Подробнее о DNS](technology/dns.md){ .md-button }

## Рекомендованные провайдеры

| DNS-провайдер                                                                   | Политика конфиденциальности                                                                           | Тип          | Протоколы                                                   | Логирование        | ECS                                                                                                                    |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Коммерческий | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Частичное[^1]      | Нет Filter list being used can be found here. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Коммерческий | Cleartext <br> DoH <br> DoT                     | Частичное[^1]      | Нет                                                                                                                    |
| [**ControlID**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Коммерческий | Cleartext <br> DoH <br> DoT                     | Частичное[^1]      | Нет                                                                                                                    |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | Коммерческий | DoH <br> DoT                                          | Частичное[^1]      | Нет Filter list being used can be found here. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Коммерческий | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Необязательное[^5] | Нет                                                                                                                    |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Коммерческий | Some[^6]                                                    | Необязательное[^5] | Based on server choice, Malware blocking by default.                                                                   |

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Для уменьшения этой угрозы рассмотрите возможность самостоятельного хостинга.

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. Мы учитываем и обсуждаем много факторов, перед тем как рекомендовать какой-то проект, и документирование каждого из них ещё не завершено.

- Поддержка [DNSSEC](technology/dns.md#what-is-dnssec-and-when-is-it-used)
- [QNAME Minimization](advanced/dns-overview.md#what-is-qname-minimization).
- Allow for [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) to be disabled.
- Prefer [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) support or geo-steering support.

## Зашифрованные DNS-прокси

### Android

Последние версии iOS, iPadOS, tvOS и macOS поддерживают как DoT, так и DoH. Оба протокола поддерживаются нативно через [профили конфигурации](https://support.apple.com/ru-ru/guide/security/secf6fb9f053/web) или через [API настроек DNS](https://developer.apple.com/documentation/networkextension/dns_settings).

### Устройства Apple

После установки профиля конфигурации или приложения, использующего API настроек DNS, можно выбрать конфигурацию DNS. Если у вас подключен VPN, будут использоваться настройки DNS, заданные вашим VPN-сервисом, а не системные настройки.

Apple не предоставляет нативный интерфейс для создания профилей зашифрованного DNS. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) - это неофициальный инструмент для создания собственных профилей зашифрованного DNS, однако они не будут иметь подписи.

#### Подписанные профили

Apple does not provide a native interface for creating encrypted DNS profiles. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) is an unofficial tool for creating your own encrypted DNS profiles, however they will not be signed. Signed profiles are preferred; signing validates a profile's origin and helps to ensure the integrity of the profiles. A green "Verified" label is given to signed configuration profiles. For more information on code signing, see [About Code Signing](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Signed profiles** are offered by [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io), and [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info "Информация"

    ![Логотип DNSCloak](assets/img/ios/dnscloak.png){ align=right }
    
    **DNSCloak** - это клиент для iOS с открытым исходным кодом, поддерживающий функции [DNS-over-HTTPS](technology/dns.md#dns-over-https-doh), [DNSCrypt](technology/dns.md#dnscrypt) и [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy/wiki), такие как кэширование ответов DNS, локальное логирование запросов DNS и пользовательские списки блокировок. Пользователи могут [добавлять собственные сервера DNS](https://medium.com/privacyguides/adding-custom-dns-over-https-resolvers-to-dnscloak-20ff5845f4b5).

## Encrypted DNS Proxies

Encrypted DNS proxy software provides a local proxy for the [unencrypted DNS](advanced/dns-overview.md#unencrypted-dns) resolver to forward to. Typically it is used on platforms that don't natively support [encrypted DNS](advanced/dns-overview.md#what-is-encrypted-dns).

### RethinkDNS

!!! recommendation

    ![Логотип dnscrypt-proxy](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** - это DNS-прокси с поддержкой [DNSCrypt](technology/dns.md#dnscrypt), [DNS-over-HTTPS](technology/dns.md#dns-over-https-doh) и [Анонимизированного DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    [Посетить github.com](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .md-button .md-button--primary } [Политика конфиденциальности](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .md-button }
    
    **Скачать**
    - [:fontawesome-brands-github: Исходный код](https://github.com/DNSCrypt/dnscrypt-proxy) downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### Linux

!!! recommendation

    ![dnscrypt-proxy logo](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** is a DNS proxy with support for [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), and [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    !!! warning "The anonymized DNS feature does [**not**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) anonymize other network traffic."
    
    [:octicons-repo-16: Repository](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## Self-hosted Solutions

A self-hosted DNS solution is useful for providing filtering on controlled platforms, such as Smart TVs and other IoT devices, as no client-side software is needed.

### RethinkDNS

!!! recommendation

    ![AdGuard Home logo](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** is an open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block unwanted web content, such as advertisements.
    
    AdGuard Home features a polished web interface to view insights and manage blocked content.
    
    [:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Source Code" }

### DNSCloak

!!! recommendation

    ![Pi-hole logo](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** is an open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block unwanted web content, such as advertisements.
    
    Pi-hole is designed to be hosted on a Raspberry Pi, but it is not limited to such hardware. The software features a friendly web interface to view insights and manage blocked content.
    
    [:octicons-home-16: Homepage](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Contribute }

--8<-- "includes/abbreviations.ru.txt"

[^1]: AdGuard хранит показатели производительности их DNS серверов, содержащие в себе количество выполненных запросов к определенному серверу, количество заблокированных запросов и скорость обработки. Они также ведут и хранят базу данных доменов, запрошенных в течение последних 24 часов. "Нам нужна эта информация, чтобы выявлять и блокировать новые трекеры и угрозы." "Также мы храним информацию о том, сколько раз тот или иной трекер был заблокирован. Нам нужна эта информация, чтобы удалять устаревшие правила из наших фильтров." [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare собирает и хранит только DNS-запросы, направленные на 1.1.1.1. Сервис не хранит персональные данные; большая часть неперсональных данных хранится только в течение 25 часов. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D only logs for Premium resolvers with custom DNS profiles. Free resolvers do not log data. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: Mullvad's DNS service is available to both subscribers and non-subscribers of Mullvad VPN. Their privacy policy explicitly claims they do not log DNS requests in any way. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS can provide insights and logging features on an opt-in basis. You can choose retention times and log storage locations for any logs you choose to keep. If it's not specifically requested, no data is logged. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 collects some data for the purposes of threat monitoring and response. That data may then be remixed and shared, such as for the purpose of security research. Quad9 does not collect or record IP addresses or other data they deem personally identifiable. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)
