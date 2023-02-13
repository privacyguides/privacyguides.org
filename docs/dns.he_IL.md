---
title: "פותרי DNS"
icon: material/dns
---

!!! האם להשתמש ב - DNS מוצפן?"

    יש להשתמש ב- DNS מוצפן עם שרתי צד שלישי רק כדי לעקוף את הבסיס [DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) כאשר אתה יכול להיות בטוח שלא יהיו השלכות. DNS מוצפן לא יעזור לך להסתיר את פעילות הגלישה שלך.
    
    [Learn more about DNS](advanced/dns-overview.md){ .md-button }

## ספקים מומלצים

| ספקי DNS                                                                        | מדיניות פרטיות                                                                                        | פרוטוקולים                                                                                 | תיעוד לוגים    | ECS        | סינון                                                                                                                           |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Cleartext <br> DoH <br> DoT <br> DNSCrypt                                | חלק[^1]        | לא         | מבוסס על בחירת שרת. רשימת סינון בשימוש ניתן למצוא כאן. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Cleartext <br> DoH <br> DoT                                                    | חלק[^2]        | לא         | מבוסס על בחירת שרת.                                                                                                             |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Cleartext <br> DoH <br> DoT <br> DNSCrypt <br> DoQ <br> DoH3 | אופציונאלי[^3] | לא         | מבוסס על בחירת שרת.                                                                                                             |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                                                         | לא[^4]         | לא         | מבוסס על בחירת שרת. רשימת סינון בשימוש ניתן למצוא כאן. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Cleartext <br> DoH <br> DoT                                                    | אופציונאלי[^5] | אופציונאלי | מבוסס על בחירת שרת.                                                                                                             |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Cleartext <br> DoH <br> DoT <br> DNSCrypt                                | חלק[^6]        | אופציונאלי | בהתבסס על בחירת השרת, תוכנות זדוניות חוסמות כברירת מחדל.                                                                        |

הקריטריונים לשרתים המפורטים לעיל הם:

- חייב לתמוך [DNSSEC](advanced/dns-overview.md#what-is-dnssec)
- [מזעור QName](advanced/dns-overview.md#what-is-qname-minimization)
- אפשר ל - [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) להיות מנוטרל
- עדיף [Anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) תמיכה או תמיכה היגוי גיאוגרפי

## תמיכה מקורית במערכת ההפעלה

### אנדרואיד

אנדרואיד 9 ומעלה תומך ב - DNS מעל TLS. ניתן למצוא את ההגדרות ב: **הגדרות** &rarr; **רשת & אינטרנט** &rarr; **DNS פרטי**.

### מוצרי Apple

הגרסאות העדכניות ביותר של iOS, ‏ iPadOS, ‏ tvOS ו - macOS, תומכות הן ב - DoT והן ב - DoH. שני הפרוטוקולים נתמכים באופן מקורי באמצעות פרופילי תצורה [](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) או באמצעות API הגדרות DNS [](https://developer.apple.com/documentation/networkextension/dns_settings).

לאחר ההתקנה של פרופיל תצורה או אפליקציה המשתמשת ב - API של הגדרות DNS, ניתן לבחור את תצורת ה - DNS. אם VPN פעיל, הרזולוציה במנהרת ה - VPN תשתמש בהגדרות ה - DNS של ה - VPN ולא בהגדרות המערכת שלכם.

#### פרופילים חתומים

Apple אינה מספקת ממשק מקורי ליצירת פרופילי DNS מוצפנים. [יוצר פרופיל DNS](https://dns.notjakob.com/tool.html) מאובטח הוא כלי לא רשמי ליצירת פרופילי DNS מוצפנים משלך, אולם הם לא יהיו חתומים. עדיפים פרופילים חתומים; חתימה מאמתת את מקור הפרופיל ומסייעת להבטיח את שלמות הפרופילים. תווית "מאומת" ירוקה ניתנת לפרופילי תצורה חתומים. לקבלת מידע נוסף על חתימת קוד, ראה [אודות חתימת קוד](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **פרופילים חתומים** מוצעים על ידי [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io), ו [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! מידע

    `systemd -olved ', שבה משתמשים הפצות לינוקס רבות לביצוע בדיקות DNS, עדיין לא [support DoH]( https://github.com/systemd/systemd/issues/8639). אם ברצונך להשתמש ב - DoH, יהיה עליך להתקין פרוקסי כמו [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) ו - [configure it]( https://wiki.archlinux.org/title/Dnscrypt-proxy) כדי לקחת את כל שאילתות ה - DNS מפתרון המערכת ולהעביר אותן דרך HTTPS.

## פרוקסי מוצפן של DNS

תוכנת פרוקסי DNS מוצפנת מספקת פרוקסי מקומי עבור [ברזולוציית DNS](advanced/dns-overview.md#unencrypted-dns) לא מוצפנת להעברה. בדרך כלל הוא משמש בפלטפורמות שאינן תומכות במקור [מוצפן DNS](advanced/dns-overview.md#what-is-encrypted-dns).

### RethinkDNS

!!! המלצה

    ![RethinkDNS logo](assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![RethinkDNS logo](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS** הוא לקוח אנדרואיד בקוד פתוח התומך ב-[DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot), [DNSCrypt](advanced/dns-overview.md#dnscrypt) ו-DNS Proxy יחד עם אחסון תגובות DNS במטמון, רישום מקומי של שאילתות DNS וניתן להשתמש בו גם כחומת אש.
    
    [:octicons-home-16: Homepage](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="קוד מקור" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### dnscrypt-proxy

!!! המלצה

    ![dnscrypt-proxy logo](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** הוא פרוקסי DNS עם תמיכה ב-[DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), ו-[DNS אנונימי](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    !!! תכונת ה - DNS האנונימית [** לא**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) הופכת תעבורת רשת אחרת לאנונימית
    
    [:octicons-repo-16: Repository](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Contribute }
    
    ??? הורדות
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## פתרונות באחסון עצמי

פתרון DNS באחסון עצמי שימושי למתן סינון בפלטפורמות מבוקרות, כגון טלוויזיות חכמות ומכשירי IoT אחרים, שכן אין צורך בתוכנות צד לקוח.

### AdGuard Home

!!! המלצה

    ![AdGuard Home לוגו](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** הוא קוד פתוח [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) המשתמש ב-[סינון DNS](ניהול https://www.cloudflare.com/learning/access/מה-הוא-סינון-DNS/) כדי לחסום תוכן אינטרנט לא רצוי, כגון פרסומות.
    
    AdGuard Home כולל ממשק אינטרנט מלוטש כדי להציג תובנות ולנהל תוכן חסום.
    
    [:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="קוד מקור" }

### Pi-hole

!!! המלצה

    ![Pi-hole לוגו](assets/img/dns/pi-hole.svg){ align=right }
    
    ** Pi - hole ** הוא מקור פתוח [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) המשתמש ב-[סינון DNS]( https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) כדי לחסום תוכן אינטרנט לא רצוי, כגון מודעות.
    
    Pi-hole מיועד להתארח ב-Raspberry Pi, אך הוא אינו מוגבל לחומרה כזו. התוכנה כוללת ממשק אינטרנט ידידותי כדי להציג תובנות ולנהל תוכן חסום.
    
    [:octicons-home-16: Homepage](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=לתרומה }

[^1]: AdGuard מאחסן מדדי ביצועים מצטברים של שרתי ה-DNS שלו, כלומר מספר הבקשות המלאות לשרת מסוים, מספר הבקשות החסומות ומהירות עיבוד הבקשות. הם גם שומרים ומאחסנים את מסד הנתונים של הדומיינים המבוקשים במהלך 24 השעות האחרונות. "אנחנו צריכים את המידע הזה כדי לזהות ולחסום עוקבים ואיומים חדשים." "אנחנו גם מתעדים כמה פעמים גשש זה או אחר נחסם. אנחנו צריכים את המידע הזה כדי להסיר את הכללים המיושנים מהמסננים שלנו." [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare אוספת ומאחסנת רק את נתוני שאילתת ה - DNS המוגבלים הנשלחים לפתרון 1.1.1.1. שירות הפותר 1.1.1.1 אינו רושם נתונים אישיים, והחלק הנצבר של נתוני השאילתה המוגבלים שאינם מאפשרים זיהוי אישי מאוחסנים רק למשך 25 שעות. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D רק מתעדים עבור פותרי Premium עם פרופילי DNS מותאמים אישית. פותרים חינמיים אינם רושמים נתונים. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: שירות ה - DNS של Mullvad זמין הן למנויים והן למי שאינם מנויים של Mullvad VPN. מדיניות הפרטיות שלהם טוענת במפורש שהם אינם רושמים בקשות DNS בכל דרך שהיא. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS יכולה לספק תובנות ותכונות רישום על בסיס הצטרפות. אתה יכול לבחור זמני שמירה ומיקומי אחסון יומן עבור כל יומנים שתבחר לשמור. אם זה לא מבוקש במיוחד, אין נתונים מתועדים. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 אוספת נתונים למטרות ניטור ותגובה לאיומים. לאחר מכן ניתן לבצע עירבוב ולשתף נתונים אלה, למשל לצורך מחקר אבטחה. Quad9 אינה אוספת או מתעדת כתובות IP או נתונים אחרים שהם רואים כניתנים לזיהוי אישי. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)
