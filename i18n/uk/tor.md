---
title: "Мережа Tor"
icon: simple/torproject
description: Захистіть свій інтернет-браузинг від сторонніх очей, використовуючи мережу Tor — безпечну мережу, яка обходить цензуру.
---

![Логотип Tor](assets/img/self-contained-networks/tor.svg){ align=right }

Мережа **Tor** - це група серверів, керованих волонтерами, яка дозволяє вам підключатися безкоштовно і покращувати вашу конфіденційність і безпеку в Інтернеті. Приватні особи та організації також можуть обмінюватися інформацією через мережу Tor з "прихованими сервісами .onion" без шкоди для своєї конфіденційності. Оскільки трафік Tor важко заблокувати і відстежити, Tor є ефективним інструментом обходу цензури.

[:octicons-home-16:](https://www.torproject.org){ .card-link title=Домашня сторінка}
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Документація}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Вихідний код" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Зробити внесок }

Tor працює, спрямовуючи ваш інтернет-трафік через ці волонтерські сервери, замість того, щоб встановлювати пряме з'єднання з сайтом, який ви намагаєтесь відвідати. Це приховує, звідки надходить трафік, і жоден сервер у шляху з 'єднання не може побачити повний шлях, звідки надходить трафік, а це означає, що навіть сервери, які ви використовуєте для з' єднання, не можуть порушити вашу анонімність.

[Детальний огляд Tor :material-arrow-right-drop-circle:](advanced/tor-overview.md ""){.md-button}

## Підключення до Tor

Існує безліч способів під'єднатися до мережі Tor з вашого пристрою, найпоширенішим з яких є **Tor Browser**, форк Firefox, призначений для анонімного перегляду веб-сторінок на настільних комп'ютерах і Android. На додаток до перелічених нижче програм, існують також операційні системи, розроблені спеціально для підключення до мережі Tor, такі як [Whonix](desktop.md#whonix) або [Qubes OS](desktop.md#qubes-os), які забезпечують ще більшу безпеку і захист, ніж стандартний Tor Browser.

### Tor Browser

!!! рекомендації

    ![Логотип Tor Browser](assets/img/browsers/tor.svg){ align=right }
    
    **Tor Browser** — це вибір, якщо вам потрібна анонімність, оскільки він надає доступ до мережі Tor і мостів, а також включає в себе стандартні налаштування і розширення, які автоматично налаштовуються на рівні безпеки за замовчуванням: *Стандартний*, *Безпечніший* і *Найбезпечніший*.
    
    [:octicons-home-16: Домашня сторінка](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Документація }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Вихідний код" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Зробити внесок }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android](https://www.torproject.org/download/#android)
        - [:simple-windows11: Windows](https://www.torproject.org/download/)
        - [:simple-apple: macOS](https://www.torproject.org/download/)
        - [:simple-linux: Linux](https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)

!!! danger

    Ви **ніколи** не повинні встановлювати додаткові розширення для браузера Tor або змінювати налаштування `about:config`, включаючи ті, які ми рекомендуємо для Firefox. Розширення браузера і нестандартні налаштування виділяють вас серед інших користувачів мережі Tor, тим самим полегшуючи доступ до [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

Браузер Tor розроблений таким чином, щоб запобігти зняттю відбитків або ідентифікації вас на основі конфігурації вашого браузера. Тому вкрай важливо, щоб ви **не** модифікували браузер поза межами стандартних [рівнів безпеки](https://tb-manual.torproject.org/security-settings/).

### Orbot

!!! рекомендації

    ![Логотип Orbot](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    **Orbot** — це безкоштовна Tor VPN для смартфонів, яка спрямовує трафік від будь-якої програми на вашому пристрої через мережу Tor.
    
    [:octicons-home-16: Домашня сторінка](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Політика конфіденційності" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Документація}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Вихідний код" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Зробити внесок}
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: GitHub](https://github.com/guardianproject/orbot/releases)

Для захисту від атак на аналіз трафіку ввімкніть *Ізоляцію адреси призначення* в :material-menu: → **Налаштуваннях** → **Підключення**. Для кожного домену, до якого ви підключаєтеся, буде використовуватися абсолютно інше Tor-з'єднання (різні проміжні реле і вихідні вузли).

!!! tip "Підказки для Android"

    Orbot може спрямовувати через проксі окремі програми, якщо вони підтримують SOCKS або HTTP-проксі. Він також може спрямовувати через проксі всі ваші мережеві з'єднання за допомогою [VpnService](https://developer.android.com/reference/android/net/VpnService) і може використовуватися з кілсвічем VPN у :gear: **Налаштування** → **Мережа та Інтернет** → **VPN** → :gear: → **Блокувати з'єднання без VPN**.
    
    Orbot часто застаріває в [F-Droid репозиторії](https://guardianproject.info/fdroid) Guardian Project та [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android) Guardian Project, тому краще завантажуйте безпосередньо з [GitHub репозиторію](https://github.com/guardianproject/orbot/releases).
    
    Всі версії підписуються одним і тим же підписом, тому вони повинні бути сумісні одна з одною.

## Реле та мости

### Snowflake

!!! рекомендації

    ![Логотип Snowflake](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Логотип Snowflake](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** дозволяє вам пожертвувати пропускну здатність для проекту Tor, використовуючи "проксі-сервер Snowflake" у вашому браузері.
    
    Люди, які зазнають цензури, можуть використовувати проксі-сервери Snowflake для підключення до мережі Tor. Snowflake — це чудовий спосіб зробити внесок у мережу, навіть якщо ви не володієте технічними знаннями для запуску Tor-реле або моста.
    
    [:octicons-home-16: Домашня сторінка](https://snowflake.torproject.org/?lang=uk){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Oперегляд){ .card-link title=Документація}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Вихідний код" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Зробити внесок}
    
    ??? downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Залиште цю сторінку відкритою, щоб бути Snowflake проксі")

??? tip "Вбудована Snowflake"

    Ви можете увімкнути Snowflake у вашому браузері, натиснувши перемикач нижче і ==залишивши цю сторінку відкритою==. Ви також можете встановити Snowflake як розширення для браузера, щоб він завжди працював, коли браузер відкритий, однак додавання сторонніх розширень може збільшити вашу поверхню атаки.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>Якщо вбудовуваний елемент не відображається, переконайтеся, що ви не заблокували сторонній фрейм з `torproject.org`. Крім того, відвідайте [цю сторінку](https://snowflake.torproject.org/embed.html).</small>

Snowflake жодним чином не збільшує вашу конфіденційність і не використовується для підключення до мережі Tor у вашому власному браузері. Однак, якщо ваше інтернет-з'єднання не піддається цензурі, вам варто подумати про його використання, щоб допомогти людям, які перебувають у мережах з цензурою, самим досягти кращої конфіденційності. Вам не потрібно турбуватися про те, до яких сайтів люди отримують доступ через ваш проксі — їх видима IP-адреса буде відповідати їх вихідному вузлу з Tor, а не вашій.

Запуск проксі-сервера Snowflake пов'язаний з навіть меншим ризиком, ніж запуск Tor-реле або моста, які й самі не є особливо ризикованими заходами. Однак він все одно спрямовує трафік проходить через вашу мережу, що може мати певний вплив, особливо якщо ваша мережа має обмежену пропускну здатність. Переконайтеся, що ви розумієте [як працює Snowflake](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) перед тим, як вирішити, чи запускати проксі.
