---
title: "Розв'язувачі DNS"
icon: material/dns
description: Ось кілька провайдерів зашифрованих DNS, на яких ми рекомендуємо перейти, щоб замінити конфігурацію за замовчуванням вашого Інтернет-провайдера.
---

Зашифрований DNS на сторонніх серверах слід використовувати, щоб обійти базове [блокування за DNS](https://en.wikipedia.org/wiki/DNS_blocking) лише тоді, коли ви впевнені, що це не матиме жодних наслідків. Зашифрований DNS не допоможе вам приховати будь-яку вашу веб-активність.

[Дізнайтеся більше про DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

## Рекомендовані DNS-провайдери

| DNS-провайдер                                                                   | Політика конфіденційності                                                                             | Протоколи                                                                | Логування       | ECS         | Фільтрація                                                                                                                                              |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Незашифрований текст <br> DoH/3 <br> DoT <br> DNSCrypt | Деяке[^1]       | Ні          | Залежно від вибору сервера. Список використовуваних фільтрів можна знайти тут. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Незашифрований текст <br> DoH/3 <br> DoT                     | Деяке[^2]       | Ні          | Залежно від вибору сервера.                                                                                                                             |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Незашифрований текст <br> DoH/3 <br> DoT <br> DoQ      | Опціонально[^3] | Ні          | Залежно від вибору сервера.                                                                                                                             |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                                       | Немає[^4]       | Ні          | Залежно від вибору сервера. Список використовуваних фільтрів можна знайти тут. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Незашифрований текст <br> DoH/3 <br> DoT                     | Опціонально[^5] | Опціонально | Залежно від вибору сервера.                                                                                                                             |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Незашифрований текст <br> DoH <br> DoT <br> DNSCrypt   | Деяке[^6]       | Опціонально | Залежно від вибору сервера, блокування шкідливих програм за замовчуванням.                                                                              |

## Критерії

**Зверніть увагу, що ми не пов'язані з жодним з проектів, які ми рекомендуємо.** На додаток до [наших стандартних критеріїв](about/criteria.md), ми розробили чіткий набір вимог, які дозволяють нам надавати об'єктивні рекомендації. Ми пропонуємо вам ознайомитися з цим списком перед тим, як вибрати проект, і провести власне дослідження, щоб переконатися, що це правильний вибір для вас.

!!! example "Цей розділ новий"

    Ми працюємо над встановленням чітких критеріїв для кожного розділу нашого сайту, і вони можуть бути змінені. Якщо у вас виникли запитання щодо наших критеріїв, будь ласка, [запитайте на нашому форумі] (https://discuss.privacyguides.net/latest) і не думайте, що ми не врахували щось, коли складали наші рекомендації, якщо це не вказано тут. Коли ми рекомендуємо проєкт, ми враховуємо та обговорюємо багато факторів, і документування кожного з них є постійним процесом.

- Повинен підтримувати [DNSSEC](advanced/dns-overview.md#what-is-dnssec).
- [Мінімізація QNAME](advanced/dns-overview.md#what-is-qname-minimization).
- Дозвіл відключити [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs).
- Віддавайте перевагу підтримці [anycast,](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) або підтримці геонавігації.

## Нативна підтримка операційної системи

### Android

Android 9 і вище підтримує DNS через TLS. Налаштування можна знайти тут: **Налаштування** &rarr; **Мережа & Інтернет** &rarr; **Приватний DNS**.

### Пристрої Apple

Останні версії iOS, iPadOS, tvOS та macOS підтримують як DoT, так і DoH. Обидва протоколи підтримуються нативно через [профілі конфігурації](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) або через [API налаштувань DNS](https://developer.apple.com/documentation/networkextension/dns_settings).

Після встановлення профілю конфігурації або програми, яка використовує API налаштувань DNS, можна вибрати конфігурацію DNS. Якщо VPN активна, при вирішенні в тунелі VPN будуть використовуватися налаштування DNS VPN, а не ваші загальносистемні налаштування.

#### Підписані профілі

Apple не надає власного інтерфейсу для створення зашифрованих профілів DNS. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) — неофіційний інструмент для створення власних зашифрованих DNS профілів, які, однак, не будуть підписані. Підписаним профілям надається перевага; підпис підтверджує походження профілю і допомагає забезпечити цілісність профілів. Підписаним профілям конфігурації присвоюється зелена мітка "Перевірено". Для отримання додаткової інформації про підписання коду див. [Про підписання коду](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Підписані профілі** пропонують [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io)та [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info

    `systemd-resolved`, за якою багато дистрибутивів Linux здійснюють вирішення своїх DNS-пошуків, поки що не [підтримують DoH](https://github.com/systemd/systemd/issues/8639). Якщо ви хочете використовувати DoH, вам потрібно встановити проксі на кшталт [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) і [налаштувати його] (https://wiki.archlinux.org/title/Dnscrypt-proxy), щоб він приймав усі DNS-запити від вашого системного розв'язувача і перенаправляв їх через HTTPS.

## Зашифровані DNS-проксі

Програмне забезпечення для проксі-серверів із зашифрованим DNS надає локальний проксі-сервер для перенаправлення на [незашифрованого DNS](advanced/dns-overview.md#unencrypted-dns). Зазвичай він використовується на платформах, які не підтримують [зашифрований DNS](advanced/dns-overview.md#what-is-encrypted-dns).

### RethinkDNS

!!! рекомендації

    ![RethinkDNS logo](assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![RethinkDNS logo](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS** - клієнт для Android з відкритим вихідним кодом, що підтримує [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot), [DNSCrypt](advanced/dns-overview.md#dnscrypt) і DNS Proxy, а також кешування DNS-відповідей, локальне ведення логів DNS-запитів і може використовуватися в якості фаєрвола.
    
    [:octicons-home-16: Домашня сторінка](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Політика конфіденційності" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Документація}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Вихідний код" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### dnscrypt-proxy

!!! рекомендації

    ![dnscrypt-proxy logo](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** - це DNS-проксі з підтримкою [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh) та [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    !!! warning "Функція анонімного DNS не [**не**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) анонімізує інший мережевий трафік."
    
    [:octicons-repo-16: Репозиторій](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Документація}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Вихідний код" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Сприяти}
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## Рішення для самостійного розміщення

Самостійно розміщене рішення DNS корисно для забезпечення фільтрації на контрольованих платформах, таких як Smart TV та інші пристрої IoT, оскільки не потрібно клієнтське програмне забезпечення.

### AdGuard Home

!!! рекомендації

    ![Логотип AdGuard Home](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** - це програма з відкритим вихідним кодом [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole), яка використовує [DNS-фільтрацію](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) для блокування небажаного веб-вмісту, наприклад, реклами.
    
    AdGuard Home має відшліфований веб-інтерфейс для перегляду аналітики та керування заблокованим контентом.
    
    [:octicons-home-16: Домашня сторінка](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Політика конфіденційності" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Документація}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Вихідний код" }

### Pi-hole

!!! рекомендації

    ![Логотип Pi-hole](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** - це [DNS-sinkhole]з відкритим вихідним кодом (https://wikipedia.org/wiki/DNS_sinkhole), який використовує [DNS-фільтрацію](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) для блокування небажаного веб-контенту, наприклад, реклами.
    
    Pi-hole розроблений для розміщення на Raspberry Pi, але він не обмежується цим обладнанням. Програмне забезпечення має зручний веб-інтерфейс для перегляду аналітики та управління заблокованим контентом.
    
    [:octicons-home-16: Домашня сторінка](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Політика конфіденційності" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Документація}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Вихідний код" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Зробити внесок}

[^1]: AdGuard зберігає агреговані показники продуктивності своїх DNS-серверів, а саме: кількість завершених запитів до певного сервера, кількість заблокованих запитів і швидкість обробки запитів. Вони також ведуть і зберігають базу даних доменів, до яких надходили запити протягом останніх 24 годин. "Нам потрібна ця інформація, щоб виявляти та блокувати нові трекери та загрози". "Ми також фіксуємо, скільки разів той чи інший трекер був заблокований. Нам потрібна ця інформація, щоб видалити застарілі правила з наших фільтрів". [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare збирає та зберігає лише обмежену кількість даних DNS-запитів, які надсилаються до вирішувача 1.1.1.1. Сервіс 1.1.1.1 не реєструє особисті дані, а основна частина обмежених неперсоніфікованих даних запитів зберігається лише протягом 25 годин. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D веде журнали лише для преміум-вирішувачів зі спеціальними профілями DNS. Безкоштовні розв'язувачі не логують дані. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: DNS-сервіс Mullvad доступний обом підписникам та не підписникам Mullvad VPN. У їхній політиці конфіденційності чітко зазначено, що вони не реєструють DNS-запити жодним чином. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS може надавати аналітику та функції логування за бажанням. Ви можете вибрати час та місце зберігання для будь-яких логів, які ви вирішите зберігати. Якщо це спеціально не запитується, дані не реєструються. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 збирає деякі дані з метою моніторингу загроз та реагування на них. Потім ці дані можуть бути змішані та поширені, наприклад, з метою дослідження безпеки. Quad9 не збирає і не записує IP-адреси або інші дані, які вони вважають особистими. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)
