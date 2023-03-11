---
title: Огляд Android
icon: simple/android
description: Android is an open-source operating system with strong security protections, which makes it our top choice for phones.
---

Android - це безпечна операційна система, яка має надійну [пісочницю для додатків](https://source.android.com/security/app-sandbox), [Verified Boot](https://source.android.com/security/verifiedboot) (AVB), та систему управління [дозволами](https://developer.android.com/guide/topics/permissions/overview).

## Вибір прошивки Android

Коли ви купуєте телефон Android, операційна система пристрою за замовчуванням часто постачається з інвазивною інтеграцією з додатками та службами, які не є частиною [Android Open Source Project](https://source.android.com/). Прикладом цього є служби Google Play, які мають безповоротні привілеї для доступу до ваших файлів, зберігання контактів, журналів дзвінків, SMS-повідомлень, місцезнаходження, камери, мікрофона, ідентифікаторів обладнання тощо. Ці програми та сервіси збільшують вразливість вашого пристрою до атак і є джерелом різних проблем з конфіденційністю в Android.

Ця проблема може бути вирішена за допомогою користувацької прошивки Android, яка не постачається з такою інвазивною інтеграцією. На жаль, багато користувацьких прошивок Android часто порушують модель безпеки Android, не підтримуючи критичні функції безпеки, такі як AVB, захист від відкату, оновлення мікропрограми тощо. Деякі дистрибутиви також постачають збірки [`налагодження`](https://source.android.com/setup/build/building#choose-a-target), які надають доступ root через [ADB](https://developer.android.com/studio/command-line/adb) та потребують [більш дозвільних](https://github.com/LineageOS/android_system_sepolicy/search?q=userdebug&type=code) політик SELinux для функцій налагодження, в результаті чого це призводить до збільшення поверхні атаки та ослаблення моделі безпеки.

В ідеалі, вибираючи користувальницький дистрибутив Android, ви повинні переконатися, що він підтримує модель безпеки Android. Принаймні, дистрибутив повинен мати виробничі збірки, підтримку AVB, захист від відкату, своєчасне оновлення прошивки та операційної системи, а також SELinux в [примусовому режимі (enforcing mode)](https://source.android.com/security/selinux/concepts#enforcement_levels). Всі наші рекомендовані прошивки Android відповідають цим критеріям.

[Наші рекомендації для системи Android :material-arrow-right:](../android.md ""){.md-button}

## Уникайте рутування

[Рутування](https://en.wikipedia.org/wiki/Rooting_(Android)) Android пристроїв може значно знизити безпеку, оскільки це послаблює повну [модель безпеки Android](https://en.wikipedia.org/wiki/Android_(operating_system)#Security_and_privacy). Це може знизити конфіденційність у разі використання експлойта, якому сприяє зниження безпеки. Поширені методи отримання root-прав передбачають втручання в розділ boot, що унеможливлює успішне виконання Verified Boot. Додатки, які потребують root-права, також змінюють системний розділ, що означає, що Verified Boot повинен залишатись вимкненим. Наявність root-доступу безпосередньо в інтерфейсі користувача також збільшує [поверхню атаки](https://en.wikipedia.org/wiki/Attack_surface) вашого пристрою і може сприяти [підвищенню привілеїв](https://en.wikipedia.org/wiki/Privilege_escalation), вразливостей та обходу політики SELinux.

Блокувальники реклами, які змінюють [файл hosts](https://en.wikipedia.org/wiki/Hosts_(file)) (AdAway) та фаєрволи (AFWall+), які потребують постійного доступу root є небезпечними та не повинні використовуватися. Вони також не є правильним способом вирішення своїх цілей. Для блокування реклами замість цих рішень ми пропонуємо зашифровані [DNS](../dns.md) або [VPN](../vpn.md) з функцією блокування. RethinkDNS, TrackerControl та AdAway в режимі без root-прав займуть слот VPN (використовуючи локальний цикл VPN), що не дозволить вам використовувати сервіси які підвищують конфіденційність, такі як Orbot або справжній VPN-сервер.

AFWall+ використовує підхід на основі [пакетної фільтрації](https://en.wikipedia.org/wiki/Firewall_(computing)#Packet_filter), та його можна обійти в деяких ситуаціях.

Ми не вважаємо, що жертви безпеки, які приносить рутування телефону, варті сумнівних переваг конфіденційності цих програм.

## Verified Boot

[Verified Boot](https://source.android.com/security/verifiedboot)> є важливою частиною моделі безпеки Android. Він забезпечує захист від атак [evil maid](https://en.wikipedia.org/wiki/Evil_maid_attack), стійкість до шкідливого програмного забезпечення, та гарантує що оновлення безпеки не можуть бути знижені за допомогою [захисту від відкату](https://source.android.com/security/verifiedboot/verified-boot#rollback-protection).

Android 10 і вище перейшли від повного шифрування диска до більш гнучкішого [шифрування на основі файлів](https://source.android.com/security/encryption/file-based). Ваші дані шифруються за допомогою унікальних ключів шифрування, а файли операційної системи залишаються незашифрованими.

Verified Boot забезпечує цілісність файлів операційної системи, тим самим запобігаючи зловмиснику з фізичним доступом втручатися або встановлювати шкідливе програмне забезпечення на пристрій. У малоймовірному випадку, коли шкідливе програмне забезпечення може експлуатувати інші частини системи та отримувати вищий привілейований доступ, Verified Boot запобігатиме та повертатиме зміни до системного розділу після перезавантаження пристрою.

На жаль, OEM-виробники зобов'язані підтримувати Verified Boot лише на своїй заводській прошивці Android. Лише кілька OEM-виробників, таких як Google, підтримують користувацьку реєстрацію ключів AVB на своїх пристроях. Крім цього, деякі похідні AOSP, такі як LineageOS або /e/ OS, не підтримують Verified Boot навіть на обладнанні з підтримкою Verified Boot для сторонніх операційних систем. Ми рекомендуємо вам перевірити наявність підтримки **перед** придбанням нового пристрою. Похідні AOSP, які не підтримують Verified Boot **не рекомендуються**.

Оновлення мікропрограми є критично важливими для підтримки безпеки, і без них ваш пристрій не може бути захищеним. OEM-виробники мають угоди про підтримку зі своїми партнерами щодо надання компонентів із закритим вихідним кодом протягом обмеженого періоду. Вони детально описані в щомісячному [бюлетені безпеки Android](https://source.android.com/security/bulletin).

## Оновлення мікропрограми

Оскільки такі компоненти телефону, як процесор та радіотехнології, покладаються на компоненти із закритим вихідним кодом, оновлення повинні надаватися відповідними виробниками. Тому важливо, щоб ви придбали пристрій в рамках активного циклу підтримки. [Qualcomm](https://www.qualcomm.com/news/releases/2020/12/16/qualcomm-and-google-announce-collaboration-extend-android-os-support-and) та [Samsung](https://news.samsung.com/us/samsung-galaxy-security-extending-updates-knox/) підтримують свої пристрої протягом 4 років, тоді як дешевші продукти часто мають коротші цикли підтримки.

Пристрої EOL, які більше не підтримуються виробником SoC, не можуть отримувати оновлення мікропрограми від OEM-виробників або сторонніх дистриб'юторів Android. Це означає, що проблеми безпеки на цих пристроях залишаться не усуненими. [Qualcomm](https://www.qualcomm.com/news/releases/2020/12/16/qualcomm-and-google-announce-collaboration-extend-android-os-support-and) and [Samsung](https://news.samsung.com/us/samsung-galaxy-security-extending-updates-knox/) support their devices for 4 years, while cheaper products often have shorter support cycles. With the introduction of the [Pixel 6](https://support.google.com/pixelphone/answer/4457705), Google now makes their own SoC and they will provide a minimum of 5 years of support.

Важливо не використовувати версії Android з [вичерпаним терміном служби](https://endoflife.date/android). Новіші версії Android не тільки отримують оновлення безпеки для операційної системи, але й важливі оновлення, що покращують конфіденційність.

[Дозволи на Android](https://developer.android.com/guide/topics/permissions/overview) надають вам контроль над доступом програм. Google регулярно вносить [покращення](https://developer.android.com/about/versions/11/privacy/permissions) у систему дозволів в кожній наступній версії. Всі встановлені вами програми суворо [ізольовані](https://source.android.com/security/app-sandbox), тому немає потреби встановлювати будь-які антивірусні додатки.

## Версії Android

It's important to not use an [end-of-life](https://endoflife.date/android) version of Android. Newer versions of Android not only receive security updates for the operating system but also important privacy enhancing updates too. For example, [prior to Android 10](https://developer.android.com/about/versions/10/privacy/changes), any apps with the [`READ_PHONE_STATE`](https://developer.android.com/reference/android/Manifest.permission#READ_PHONE_STATE) permission could access sensitive and unique serial numbers of your phone such as [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity), [MEID](https://en.wikipedia.org/wiki/Mobile_equipment_identifier), your SIM card's [IMSI](https://en.wikipedia.org/wiki/International_mobile_subscriber_identity), whereas now they must be system apps to do so. System apps are only provided by the OEM or Android distribution.

## Дозволи Android

[Permissions on Android](https://developer.android.com/guide/topics/permissions/overview) grant you control over what apps are allowed to access. Google regularly makes [improvements](https://developer.android.com/about/versions/11/privacy/permissions) on the permission system in each successive version. All apps you install are strictly [sandboxed](https://source.android.com/security/app-sandbox), therefore, there is no need to install any antivirus apps.

A smartphone with the latest version of Android will always be more secure than an old smartphone with an antivirus that you have paid for. It's better not to pay for antivirus software and to save money to buy a new smartphone such as a Google Pixel.

Android 10:

- [Scoped Storage](https://developer.android.com/about/versions/10/privacy/changes#scoped-storage) gives you more control over your files and can limit what can [access external storage](https://developer.android.com/training/data-storage#permissions). Apps can have a specific directory in external storage as well as the ability to store specific types of media there.
- Tighter access on [device location](https://developer.android.com/about/versions/10/privacy/changes#app-access-device-location) by introducing the `ACCESS_BACKGROUND_LOCATION` permission. This prevents apps from accessing the location when running in the background without express permission from the user.

Android 11:

- [One-time permissions](https://developer.android.com/about/versions/11/privacy/permissions#one-time) which allows you to grant a permission to an app just once.
- [Auto-reset permissions](https://developer.android.com/about/versions/11/privacy/permissions#auto-reset), which resets [runtime permissions](https://developer.android.com/guide/topics/permissions/overview#runtime) that were granted when the app was opened.
- Granular permissions for accessing [phone number](https://developer.android.com/about/versions/11/privacy/permissions#phone-numbers) related features.

Android 12:

- A permission to grant only the [approximate location](https://developer.android.com/about/versions/12/behavior-changes-12#approximate-location).
- Auto-reset of [hibernated apps](https://developer.android.com/about/versions/12/behavior-changes-12#app-hibernation).
- [Data access auditing](https://developer.android.com/about/versions/12/behavior-changes-12#data-access-auditing) which makes it easier to determine what part of an app is performing a specific type of data access.

Android 13:

- A permission for [nearby wifi access](https://developer.android.com/about/versions/13/behavior-changes-13#nearby-wifi-devices-permission). The MAC addresses of nearby WiFi access points was a popular way for apps to track a user's location.
- More [granular media permissions](https://developer.android.com/about/versions/13/behavior-changes-13#granular-media-permissions), meaning you can grant access to images, videos or audio files only.
- Background use of sensors now requires the [`BODY_SENSORS`](https://developer.android.com/about/versions/13/behavior-changes-13#body-sensors-background-permission) permission.

An app may request a permission for a specific feature it has. For example, any app that can scan QR codes will require the camera permission. Some apps can request more permissions than they need.

[Exodus](https://exodus-privacy.eu.org/) can be useful when comparing apps that have similar purposes. If an app requires a lot of permissions and has a lot of advertising and analytics this is probably a bad sign. We recommend looking at the individual trackers and reading their descriptions rather than simply **counting the total** and assuming all items listed are equal.

!!! warning

    If an app is mostly a web-based service, the tracking may occur on the server side. [Facebook](https://reports.exodus-privacy.eu.org/en/reports/com.facebook.katana/latest/) shows "no trackers" but certainly does track users' interests and behavior across the site. Apps may evade detection by not using standard code libraries produced by the advertising industry, though this is unlikely.

!!! note

    Privacy-friendly apps such as [Bitwarden](https://reports.exodus-privacy.eu.org/en/reports/com.x8bit.bitwarden/latest/) may show some trackers such as [Google Firebase Analytics](https://reports.exodus-privacy.eu.org/en/trackers/49/). This library includes [Firebase Cloud Messaging](https://en.wikipedia.org/wiki/Firebase_Cloud_Messaging) which can provide [push notifications](https://en.wikipedia.org/wiki/Push_technology) in apps. This [is the case](https://fosstodon.org/@bitwarden/109636825700482007) with Bitwarden. That doesn't mean that Bitwarden is using all of the analytics features that are provided by Google Firebase Analytics.

## Профілі користувачів

Quite a few applications allows you to "share" a file with them for media upload. If you want to, for example, tweet a picture to Twitter, do not grant Twitter access to your "media and photos", because it will have access to all of your pictures then. Instead, go to your file manager (documentsUI), hold onto the picture, then share it with Twitter.

## Профілі користувачів

Для цього потрібен **контролер пристрою** такий як [Shelter](#recommended-apps), якщо ви не використовуєте CalyxOS, яка вже містить в собі контролер.

Робочий профіль залежить від функціонування контролера пристрою. Кожен профіль зашифрований за допомогою власного ключа шифрування і не може отримати доступ до даних будь-яких інших профілів. Навіть власник пристрою не може переглядати дані профілів, не знаючи їхніх паролів. Multiple user profiles are a more secure method of isolation.

## Робочий профіль

[Робочі профілі](https://support.google.com/work/android/answer/6191949) - це ще один спосіб ізоляції програм, який може бути зручнішим, ніж окремі профілі користувачів.

A **device controller** app such as [Shelter](#recommended-apps) is required to create a Work Profile without an enterprise MDM, unless you're using a custom Android OS which includes one.

Робочий профіль залежить від функціонування контролера пристрою. Такі функції як *Файловий шатл* та *блокування пошуку контактів* або будь-які інші функції ізоляції повинні бути реалізовані контролером. Коли вони не використовуються, ми рекомендуємо вимкнути їх.

Цей метод, як правило, є менш безпечним, ніж додатковий профіль користувача; однак, він дозволяє вам зручно запускати додатки як в робочому, так і в особистому профілях одночасно.

## VPN Killswitch

Якщо у вас є обліковий запис Google, радимо зареєструватися в [Програмі Додаткового Захисту](https://landing.google.com/advancedprotection/). Ця функція може запобігти витоку, якщо VPN відключений. It can be found in :gear: **Settings** → **Network & internet** → **VPN** → :gear: → **Block connections without VPN**.

## Глобальні перемикачі

Сучасні пристрої Android мають глобальні перемикачі для вимкнення служб Bluetooth і визначення місцезнаходження. В Android 12 з'явилися перемикачі для камери та мікрофона. Коли вони не використовуються, ми рекомендуємо вимкнути їх. Програми не можуть використовувати вимкнені функції (навіть якщо їм надано індивідуальний дозвіл), поки їх не буде ввімкнено знову.

## Google

Якщо ви користуєтесь пристроєм зі службами Google, заводською операційною системою або операційною системою, яка безпечно використовує служби Google Play, такі як GrapheneOS, ви можете внести ряд додаткових змін, щоб покращити конфіденційність. Ми як і раніше рекомендуємо повністю уникати сервісів Google або обмежити сервіси Google Play профілем користувача/робочим профілем, об'єднавши контролер пристрою, такий як *Shelter* з ізольованим Google Play від GrapheneOS.

### Програма додаткового захисту

Якщо у вас є обліковий запис Google, радимо зареєструватися в [Програмі Додаткового Захисту](https://landing.google.com/advancedprotection/). Це дозволить вам отримати **деякі** виправлення безпеки від Google, не порушуючи при цьому моделі безпеки Android використовуючи небезпечну похідну Android і збільшуючи поверхню атаки.

Програма додаткового захисту забезпечує посилений моніторинг загроз та вмикає:

- Суворішу двофакторну автентифікацію; напр. **повинен** використовуватись [FIDO](/security/multi-factor-authentication/#fido-fast-identity-online), та забороняється використання [SMS](/security/multi-factor-authentication/#sms-or-email-mfa), [TOTP](/security/multi-factor-authentication.md#time-based-one-time-password-totp), та [OAuth](https://en.wikipedia.org/wiki/OAuth)
- Доступ до даних облікового запису можуть отримувати лише Google і перевірені сторонні програми
- Сканування вхідних електронних листів в акаунтах Gmail на предмет [спроб фішингу](https://en.wikipedia.org/wiki/Phishing#Email_phishing)
- Суворіше [сканування веб-переглядача](https://www.google.com/chrome/privacy/whitepaper.html#malware) з Google Chrome
- Більш суворий процес відновлення облікових записів з втраченими обліковими даними

 Якщо ви використовуєте не ізольовані сервіси Google Play (поширені в заводських операційних системах), Програма Додаткового Захисту також надає декілька [додаткових переваг](https://support.google.com/accounts/answer/9764949?hl=en), таких як:

- Не дозволяється встановлення додатків за межами магазину Google Play, магазину додатків постачальника ОС або через [`adb`](https://en.wikipedia.org/wiki/Android_Debug_Bridge)
- Обов'язкове автоматичне сканування пристрою за допомогою [Play Protect](https://support.google.com/googleplay/answer/2812853?hl=en#zippy=%2Chow-malware-protection-works%2Chow-privacy-alerts-work)
- Попередження про неперевірені додатки

### Оновлення системи Google Play

In the past, Android security updates had to be shipped by the operating system vendor. Android has become more modular beginning with Android 10, and Google can push security updates for **some** system components via the privileged Play Services.

На прошивках Android з привілейованими сервісами Google Play (як на заводських ОС), налаштування може здійснюватися в одному з кількох місць. Перевірте We would still recommend upgrading to a supported device as soon as possible.

### Рекламний ідентифікатор

Всі пристрої з встановленими сервісами Google Play автоматично генерують [рекламний ідентифікатор](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en), який використовується для таргетованої реклами. Вимкніть цю функцію, щоб обмежити збір даних про вас.

On Android distributions with [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), go to :gear: **Settings** → **Apps** → **Sandboxed Google Play** → **Google Settings** → **Ads**, and select *Delete advertising ID*.

На прошивках Android з привілейованими сервісами Google Play (як на заводських ОС), налаштування може здійснюватися в одному з кількох місць. Перевірте

- :gear: **Налаштування** → **Google** → **Реклама**
- :gear: **Налаштування** → **Конфіденційність** → **Реклама**

You will either be given the option to delete your advertising ID or to *Opt out of interest-based ads*, this varies between OEM distributions of Android. If presented with the option to delete the advertising ID that is preferred. If not, then make sure to opt out and reset your advertising ID.

### SafetyNet та Play API цілісність

[SafetyNet](https://developer.android.com/training/safetynet/attestation) та [Play API цілісність](https://developer.android.com/google/play/integrity) зазвичай використовуються для [банківських додатків](https://grapheneos.org/usage#banking-apps). Many banking apps will work fine in GrapheneOS with sandboxed Play services, however some non-financial apps have their own crude anti-tampering mechanisms which might fail. GrapheneOS проходить перевірку `basicIntegrity`, але не перевірку сертифікації `ctsProfileMatch`. Пристрої з Android 8 або пізнішою версією мають підтримку апаратної атестації, яку неможливо обійти без витоку ключів або серйозних вразливостей.

Що стосується Google Wallet, ми не рекомендуємо це використовувати через їхню [політику конфіденційності](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en) яка стверджує, що ви повинні відмовитися, якщо ви не хочете, щоб ваш кредитний рейтинг та особиста інформація надавалися партнерським маркетинговим службам.
