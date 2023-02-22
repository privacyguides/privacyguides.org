---
title: "שירותי VPN"
icon: material/vpn
---

מצא מפעיל VPN ללא רישום שאינו מתכוון למכור או לקרוא את תעבורת האינטרנט שלך.

??? danger סכנה "רשתות VPN לא מספקות אנונימיות"

    שימוש ב-VPN **לא** ישמור על הרגלי הגלישה שלך אנונימיים, וגם לא יוסיף אבטחה לתעבורה לא מאובטחת (HTTP).
    
    אם אתם מחפשים **אנונימיות**, כדאי להשתמש בדפדפן Tor **במקום** ב-VPN.
    
    אם אתה מחפש **אבטחה** נוספת, עליך תמיד לוודא שאתה מתחבר לאתרים באמצעות HTTPS. VPN אינו תחליף לשיטות אבטחה טובות.
    
    [הורד את Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Tor Myths & שאלות נפוצות](advanced/tor-overview.md){ .md-button }

??? question שאלה "מתי VPNs שימושיים?"

    אם אתה מחפש **פרטיות** נוספת מ-ISP שלך, ברשת Wi-Fi ציבורית, או תוך כדי טורנט קבצים, VPN עשוי להיות הפתרון עבורך כל עוד אתה מבין את הסיכונים הכרוכים בכך.
    
    [מידע נוסף ](basics/vpn-overview.md){ .md-button }

## ספקים מומלצים

!!! סיכום "קריטריונים"

    הספקים המומלצים שלנו משתמשים בהצפנה, מקבלים Monero, תומכים ב-WireGuard & OpenVPN, ויש להם מדיניות ללא רישום. קרא את [רשימת הקריטריונים המלאה](#our-criteria) שלנו למידע נוסף.

### Proton VPN

!!! recommendation annotate

    ![Proton VPN לוגו](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN** הוא מתחרה חזק בתחום ה-VPN, והם פועלים מאז 2016. Proton AG מבוססת בשוויץ ומציעה רמה מוגבלת בחינם, כמו גם אפשרות פרימיום מומלצת יותר.
    
    [:octicons-home-16: דף הבית](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

??? check annotate ב 67 מדינות

    ל-Proton VPN יש [שרתים ב-67 מדינות](https://protonvpn.com/vpn-servers) (1). בחירת ספק VPN עם שרת הקרוב אליך תפחית את זמן האחזור של תעבורת הרשת שאתה שולח. הסיבה לכך היא מסלול קצר יותר (פחות דילוגים) ליעד.
    
    אנחנו גם חושבים שעדיף לאבטחת המפתחות הפרטיים של ספק ה-VPN אם הם משתמשים ב[שרתים ייעודיים](https://en.wikipedia.org/wiki/Dedicated_hosting_service), במקום פתרונות משותפים זולים יותר (עם לקוחות אחרים) כגון [ שרתים פרטיים וירטואליים](https://en.wikipedia.org/wiki/Virtual_private_server).

1. נבדק אחרון: 2022-09-16

??? success הצלחה "מבוקר באופן עצמאי"

    החל מינואר 2020, Proton VPN עבר ביקורת בלתי תלויה על ידי SEC Consult. SEC Consult מצא כמה נקודות תורפה בסיכון בינוני ונמוך ביישומי Windows, Android ו-iOS של Proton VPN, שכולן תוקנו כראוי על ידי Proton VPN לפני פרסום הדוחות. אף אחת מהבעיות שזוהו לא הייתה מספקת לתוקף גישה מרחוק למכשיר או לתעבורה שלך. אתה יכול להציג דוחות בודדים עבור כל פלטפורמה בכתובת [protonvpn.com](https://protonvpn.com/blog/open-source/). באפריל 2022 Proton VPN עבר [ביקורת נוספת](https://protonvpn.com/blog/no-logs-audit/) והדוח הופק על ידי Securitum](https://protonvpn.com/blog/wp- content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). [מכתב אישור](https://proton.me/blog/security-audit-all-proton-apps) סופק עבור האפליקציות של Proton VPN ב-9 בנובמבר 2021 על ידי [Securitum](https://research.securitum. com).

??? success הצלחה "לקוחות קוד פתוח"

    Proton VPN מספק את קוד המקור עבור לקוחות שולחניים וניידים שלהם ב[ארגון GitHub](https://github.com/ProtonVPN).

??? success הצלחה "מקבל מזומן"

    Proton VPN, בנוסף לקבל כרטיסי אשראי/חיוב ו-PayPal, מקבל ביטקוין ו-**מזומן/מטבע מקומי** כאמצעי תשלום אנונימיים.

??? success "תמיכה ב-WireGuard"

    Proton VPN תומך בעיקר בפרוטוקול WireGuard®. [WireGuard](https://www.wireguard.com) הוא פרוטוקול חדש יותר שמשתמש ב[cryptography](https://www.wireguard.com/protocol/) חדישה. בנוסף, WireGuard שואפת להיות פשוטה וביצועית יותר.
    
    Proton VPN [ממליץ](https://protonvpn.com/blog/wireguard/) משתמש ב - WireGuard בשירות שלהם. באפליקציות Windows, macOS, iOS, Android, ChromeOS ו-Android TV של Proton VPN, WireGuard הוא פרוטוקול ברירת המחדל; עם זאת, [תמיכה](https://protonvpn.com/support/how-to-change-vpn-protocols/) עבור הפרוטוקול אינו קיים באפליקציית הלינוקס שלהם.

??? warning "העברת יציאות מרחוק"

    נכון לעכשיו, Proton VPN תומך רק בהעברה מרחוק של [port forwarding](https://protonvpn.com/support/port-forwarding/) ב - Windows, דבר שעשוי להשפיע על יישומים מסוימים. במיוחד יישומי Peer - to - peer כמו לקוחות Torrent.

??? check "קליינטים ניידים"

    בנוסף לאספקת קבצי תצורה סטנדרטיים של OpenVPN, ל-Proton VPN יש לקוחות ניידים עבור [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), and [GitHub](https://github.com/ProtonVPN/android-app/releases)מה שמאפשר חיבורים קלים לשרתים שלהם.

??? info "פונקציונליות נוספת"

    תוכנות Proton VPN תומכים באימות דו - שלבי בכל הפלטפורמות מלבד Linux כרגע. ל - Proton VPN יש שרתים ומרכזי נתונים משלו בשוויץ, איסלנד ושוודיה. הם מציעים חסימת מודעות ודומיינים ידועים של תוכנות זדוניות שחוסמים באמצעות שירות ה - DNS שלהם. בנוסף, Proton VPN מציע גם שרתי "Tor" המאפשרים לך להתחבר בקלות לאתרי בצל, אבל אנחנו עדיין ממליצים בחום להשתמש [בדפדפן Tor הרשמי]( https://www.torproject.org/) למטרה זו.

!!! danger "תכונת Killswitch שבורה במחשבי מקינטוש מבוססי אינטל"

    קריסות מערכת [עלולות להתרחש](https://protonvpn.com/support/macos-t2-chip-kill-switch/) במחשבי מקינטוש מבוססי אינטל בעת שימוש במתג השבתה של VPN. אם אתם זקוקים לתכונה זו, ואתם משתמשים ב - Mac עם ערכת שבבים של Intel, כדאי לכם לשקול להשתמש בשירות VPN אחר.

### IVPN

!!! recommendation

    ![לוגו IVPN](assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN** הוא עוד ספק VPN פרימיום, והם פועלים מאז 2009. IVPN מבוסס בגיברלטר.
    
    [:octicons-home-16: דף הבית](https://www.ivpn.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.ivpn.net/privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://www.ivpn.net/knowledgebase/general/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/ivpn){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-android: Android](https://www.ivpn.net/apps-android/)
        - [:simple-appstore: App Store](https://apps.apple.com/app/ivpn-serious-privacy-protection/id1193122683)
        - [:simple-windows11: Windows](https://www.ivpn.net/apps-windows/)
        - [:simple-apple: macOS](https://www.ivpn.net/apps-macos/)
        - [:simple-linux: Linux](https://www.ivpn.net/apps-linux/)

??? success annotate הערת הצלחה 35 מדינות

    ל-IVPN יש [שרתים ב-35 מדינות](https://www.ivpn.net/server-locations) (1). בחירת ספק VPN עם שרת הקרוב אליך תפחית את זמן האחזור של תעבורת הרשת שאתה שולח. הסיבה לכך היא מסלול קצר יותר (פחות דילוגים) ליעד.
    
    אנחנו גם חושבים שעדיף לאבטחת המפתחות הפרטיים של ספק ה-VPN אם הם משתמשים ב[שרתים ייעודיים](https://en.wikipedia.org/wiki/Dedicated_hosting_service), במקום פתרונות משותפים זולים יותר (עם לקוחות אחרים) כגון [ שרתים פרטיים וירטואליים](https://en.wikipedia.org/wiki/Virtual_private_server).

1. נבדק אחרון: 2022-09-16

??? success "נבדק באופן עצמאי"

    IVPN עבר ביקורת [ביקורת אי-תיעוד מ-Cure53](https://cure53.de/audit-report_ivpn.pdf) שהסתיימה בהסכמה עם תביעת האי - רישום של IVPN. IVPN גם השלים [דוח pentest מקיף Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) בינואר 2020. IVPN גם אמר שהם מתכננים לקבל [דוחות שנתיים]( https://www.ivpn.net/blog/independent-security-audit-concluded) בעתיד. בדיקה נוספת נערכה [באפריל 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) והופק על ידי Cure53 [באתר האינטרנט שלהם]( https://cure53.de/pentest-report_IVPN_2022.pdf).

??? success "לקוחות קוד פתוח"

    החל מפברואר 2020 [יישומי IVPN הם כעת קוד פתוח](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). ניתן לקבל את קוד המקור מ[GitHub organization](https://github.com/ivpn).

??? success "מקבל מזומן ומונרו"

    בנוסף לקבלת כרטיסי אשראי/חיוב ו-PayPal, IVPN מקבל ביטקוין, **Monero** ו**מזומן/מטבע מקומי** (בתוכניות שנתיות) כאמצעי תשלום אנונימיים.

??? success "תמיכה ב-WireGuard"

    IVPN תומך בפרוטוקול WireGuard®. [WireGuard](https://www.wireguard.com) הוא פרוטוקול חדש יותר שמשתמש ב[cryptography](https://www.wireguard.com/protocol/) חדישה. בנוסף, WireGuard שואפת להיות פשוטה וביצועית יותר.
    
    IVPN [recommends](https://www.ivpn.net/wireguard/) משתמש ב-WireGuard עם השירות שלהם, וככזה, הפרוטוקול הוא ברירת המחדל בכל האפליקציות של IVPN. IVPN מציע גם מחולל תצורת WireGuard לשימוש עם WireGuard הרשמי [apps](https://www.wireguard.com/install/).

??? success "העברת יציאות מרחוק"

    [העברת יציאות] מרחוק (https://en.wikipedia.org/wiki/Port_forwarding) אפשרית עם תוכנית Pro. העברת יציאות [ניתן להפעיל](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) דרך אזור הלקוח. העברת פורט זמינה רק ב - IVPN בעת שימוש בפרוטוקולי WireGuard או OpenVPN והיא [מושבתת בשרתים בארה"ב]( https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

??? check "קליינטים ניידים"

    בנוסף לאספקת קבצי תצורה סטנדרטיים של OpenVPN, ל-IVPN יש לקוחות ניידים עבור [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), ו [GitHub](https://github.com/ivpn/android-app/releases) המאפשרים חיבורים קלים לשרתים שלהם.

??? info "פונקציונליות נוספת"

    תוכונת IVPN תומכים באימות דו - שלבי (הלקוחות של Mullvad לא תומכים). IVPN מספק גם פונקציונליות של "[AntiTracker](https://www.ivpn.net/antitracker)", שחוסמת רשתות פרסום ועוקבים מרמת הרשת.

### Mullvad

!!! recommendation

    ![לוגו Mullvad](assets/img/vpn/mullvad.svg){ align=right }
    
    **Mullvad** הוא VPN מהיר וזול עם התמקדות רצינית בשקיפות ואבטחה. הם פועלים מאז **2009**. Mullvad מבוסס בשוודיה ואין לו ניסיון חינם.
    
    [:octicons-home-16: דף הבית](https://mullvad.net){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion){ .card-link title="שירותי בצל" }
    [:octicons-eye-16:](https://mullvad.net/en/help/privacy-policy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://mullvad.net/en/help/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/mullvad){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

??? success annotate "41 מדינות"

    ל-Mullvad יש [שרתים ב-41 מדינות](https://mullvad.net/servers/) (1). בחירת ספק VPN עם שרת הקרוב אליך תפחית את זמן האחזור של תעבורת הרשת שאתה שולח. הסיבה לכך היא מסלול קצר יותר (פחות דילוגים) ליעד.
    
    אנחנו גם חושבים שעדיף לאבטחת המפתחות הפרטיים של ספק ה-VPN אם הם משתמשים ב[שרתים ייעודיים](https://en.wikipedia.org/wiki/Dedicated_hosting_service), במקום פתרונות משותפים זולים יותר (עם לקוחות אחרים) כגון [ שרתים פרטיים וירטואליים](https://en.wikipedia.org/wiki/Virtual_private_server).

1. נבדק לאחרונה: 2022 -09 -16

??? check "מבוקרת עצמאית"

    לקוחות ה-VPN של Mullvad עברו ביקורת על ידי Cure53 ו-Assured AB בדוח בדיקה [פורסם בכתובת cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). חוקרי האבטחה הגיעו למסקנה:
    
    > Cure53 ו-Assured AB מרוצים מתוצאות הביקורת והתוכנה משאירה רושם חיובי כללי. עם מסירות אבטחה של הצוות הפנימי במתחם ה-VPN של Mullvad, לבודקים אין ספק לגבי הפרויקט בדרך הנכונה מבחינה אבטחה.
    
    בשנת 2020 [הוכרזה] ביקורת שנייה (https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) ו[דוח הביקורת הסופי](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) הפך זמין באתר האינטרנט של Cure53:
    
    > התוצאות של פרויקט מאי-יוני 2020 המתמקד במתחם Mullvad הן חיוביות למדי. [...] המערכת האקולוגית הכוללת של היישום המשמשת את Mullvad משאירה רושם קול ומובנה. המבנה הכללי של היישום מקל על גלגול תיקונים ותיקונים באופן מובנה. יותר מכל, הממצאים שנצפו על ידי Cure53 מדגימים את החשיבות של ביקורת מתמדת והערכה מחדש של וקטורי הדליפה הנוכחיים, על מנת להבטיח תמיד את פרטיותם של משתמשי הקצה. עם זאת, Mullvad עושה עבודה נהדרת בהגנה על משתמש הקצה מפני דליפות PII נפוצות וסיכונים הקשורים לפרטיות.
    
    בשנת 2021 [הוכרזה] ביקורת תשתית [https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacyleaks-found-cure53s-infrastructure-audit/] ו [דוח הביקורת הסופי](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) הפך לזמין באתר האינטרנט של Cure53. דוח נוסף הוזמן [ביוני 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) and is available on [Assured's website](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

??? success הצלחה "לקוחות קוד פתוח"

    Mullvad מספקת את קוד המקור עבור הלקוחות שלהם בשולחן העבודה ובנייד בארגון שלהם [GitHub organization](https://github.com/mullvad/mullvadvpn-app).

??? success הצלחה "מקבל מזומנים ומונרו"

    Mullvad, בנוסף לקבל כרטיסי אשראי/חיוב ו-PayPal, מקבל ביטקוין, ביטקוין מזומן, **Monero** ו**מזומן/מטבע מקומי** כאמצעי תשלום אנונימיים. הם גם מקבלים סוויש והעברות בנקאיות.

??? success "תמיכה ב-WireGuard"

    Mullvad תומך בפרוטוקול WireGuard®. [WireGuard](https://www.wireguard.com) הוא פרוטוקול חדש יותר שמשתמש ב[cryptography](https://www.wireguard.com/protocol/) חדישה. בנוסף, WireGuard שואפת להיות פשוטה וביצועית יותר.
    
    Mullvad [recommends](https://mullvad.net/en/help/why-wireguard/) משתמש ב WireGuard בשירות שלהם. זהו פרוטוקול ברירת המחדל או הפרוטוקול היחיד באפליקציות Android, iOS, macOS ו - Linux של Mullvad, אך ב - Windows עליך [להפעיל ידנית](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad גם מציע גנרטור תצורה WireGuard לשימוש עם הרשמי [apps](https://www.wireguard.com/install/)./install/).

??? check "תמיכת IPv6"

    Mullvad תומך בעתיד של הרשתות [IPv6](https://en.wikipedia.org/wiki/IPv6). הרשת שלהם מאפשרת לך [לגשת לשירותים המתארחים ב - IPv6]( https://mullvad.net/en/blog/2014/9/15/ipv6-support/) בניגוד לספקים אחרים שחוסמים חיבורי IPv6.

??? check "העברת יציאות מרחוק"

    [העברת יציאות] (https://en.wikipedia.org/wiki/Port_forwarding) מרחוק מותרת לאנשים המבצעים תשלומים חד-פעמיים, אך אינה מותרת עבור חשבונות עם אמצעי תשלום חוזר/מבוסס מנוי. זה כדי למנוע מ - Mullvad להיות מסוגל לזהות אותך בהתבסס על השימוש שלך בפורט ופרטי המנוי המאוחסנים. ראה [Port forwarding with Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) לקבלת מידע נוסף.

??? check "קליינטים ניידים"

    Mullvad פרסם את [App Store]( https://apps.apple.com/app/mullvad-vpn/id1488466513) ואת [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) לקוחות, שניהם תומכים בממשק קל לשימוש במקום לדרוש ממך להגדיר באופן ידני את חיבור WireGuard שלך. קליינט של אנדרואיד מפורסם גם ב [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

??? info "פונקציונליות נוספת"

    Mullvad מאוד שקוף לגבי אילו צמתים הם [בעלים או שוכרים](https://mullvad.net/en/servers/). הם משתמשים ב-[ShadowSocks](https://shadowsocks.org/) בתצורת ShadowSocks + OpenVPN שלהם, מה שהופך אותם לעמידים יותר בפני חומות אש כאשר [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) מנסה כדי לחסום VPNs. לכאורה, [סין צריכה להשתמש בשיטה אחרת כדי לחסום שרתי ShadowSocks](https://github.com/net4people/bbs/issues/22). האתר של Mullvad נגיש גם דרך Tor בכתובת [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvad.mac7kwad.cn).

## קריטריונים

!!! danger "סַכָּנָה"

    חשוב לציין ששימוש בספק VPN לא יהפוך אתכם לאנונימיים, אבל הוא ייתן לכם פרטיות טובה יותר במצבים מסוימים. VPN הוא לא כלי לפעילויות בלתי חוקיות. אל תסמכו על מדיניות "ללא תיעוד ".

**לידיעתך, איננו קשורים לאף אחד מהספקים שאנו ממליצים עליהם. זה מאפשר לנו לספק המלצות אובייקטיביות לחלוטין.** פיתחנו קבוצה ברורה של דרישות עבור כל ספק VPN שרוצה להיות מומלץ, כולל הצפנה חזקה, ביקורות אבטחה עצמאיות, טכנולוגיה מודרנית, ועוד. מומלץ להכיר את הרשימה לפני שבוחרים ספק אימייל, ולבצע מחקר משלך כדי לוודא שספק האימייל שבחרתם הוא הבחירה הנכונה עבורכם.

### טכנולוגיה

אנו דורשים מכל ספקי ה - VPN המומלצים שלנו לספק קבצי תצורה של OpenVPN לשימוש בכל לקוח. **אם** VPN מספק קליינט מותאם אישית משלו, אנו זקוקים ל-killswitch כדי לחסום דליפות נתוני רשת כאשר הוא מנותק.

**מינימום כדי לעמוד בדרישות:**

- תמיכה בפרוטוקולים חזקים כגון WireGuard & OpenVPN.
- Killswitch מובנה בקליינטים.
- תמיכה Multihop. Multihopping חשוב לשמור על נתונים פרטיים במקרה של פשרה צומת אחת.
- אם לקוחות VPN מסופקים, הם צריכים להיות [קוד פתוח](https://en.wikipedia.org/wiki/Open_source), כמו תוכנת ה - VPN שהם בדרך כלל בנו לתוכם. אנחנו מאמינים שזמינות של [קוד מקור](https://en.wikipedia.org/wiki/Source_code) מספקת שקיפות רבה יותר לגבי מה שהמכשיר שלך עושה בפועל.

**המקרה הטוב ביותר:**

- תמיכה ב - WireGuard וב - OpenVPN.
- Killswitch עם אפשרויות להגדרה גבוהה (הפעלה/השבתה ברשתות מסוימות, על אתחול, וכו ')
- קליינטים VPN קלים לשימוש
- תומך [IPv6](https://en.wikipedia.org/wiki/IPv6). אנו מצפים כי שרתים יאפשרו חיבורים נכנסים באמצעות IPv6 ויאפשרו לך לגשת לשירותים המתארחים בכתובות IPv6.
- היכולת של [העברת יציאות מרחוק](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) מסייעת ביצירת חיבורים בעת שימוש בתוכנת שיתוף קבצים P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer))או בעת אירוח שרת (לדוגמה, Mumble).

### פרטיות

אנו מעדיפים שהספקים המומלצים שלנו יאספו כמה שפחות נתונים. לא לאסוף מידע אישי על רישום, וקבלת צורות אנונימיות של תשלום נדרשים.

**מינימום כדי לעמוד בדרישות:**

- Monero או אפשרות תשלום במזומן.
- אין צורך במידע אישי כדי להירשם: רק שם משתמש, סיסמה ודוא"ל לכל היותר.

**המקרה הטוב ביותר:**

- מקבל Monero, מזומן וצורות אחרות של מטבעות קריפטוגרפיים ו/או אפשרויות תשלום אנונימיות (כרטיסי מתנה וכו')
- לא התקבל מידע אישי (שם משתמש שנוצר באופן אוטומטי, אין צורך בדוא"ל וכו')

### אבטחה

VPN הוא חסר טעם אם הוא אפילו לא יכול לספק אבטחה מספקת. אנו דורשים מכל הספקים המומלצים שלנו לציית לתקני האבטחה הנוכחיים לחיבורי OpenVPN שלהם. באופן אידיאלי, הם ישתמשו ביותר תוכניות הצפנה עתידיות כברירת מחדל. כמו כן, אנו דורשים מצד שלישי עצמאי לבדוק את האבטחה של הספק, באופן אידיאלי באופן מקיף מאוד ועל בסיס חוזר ונשנה (שנתי).

**מינימום כדי לעמוד בדרישות:**

- ערכות הצפנה חזקות: OpenVPN עם אימות SHA -256; RSA -2048 או לחיצת יד טובה יותר; AES -256 - GCM או הצפנת נתונים AES -256 - CBC.
- סודיות קדימה מושלמת (PFS).
- פירסם ביקורות אבטחה מחברת צד שלישי מכובדת.

**המקרה הטוב ביותר:**

- הצפנה חזקה ביותר: RSA -4096.
- סודיות קדימה מושלמת (PFS).
- ביקורות אבטחה מקיפות שפורסמו מחברת צד שלישי בעלת מוניטין.
- תוכניות לחיפוש באגים ו/או תהליך גילוי - פגיעות מתואם.

### אמון

לא היית סומך על הכספים שלך למישהו עם זהות מזויפת, אז למה לסמוך עליהם עם נתוני האינטרנט שלך? אנחנו דורשים מהספקים המומלצים שלנו להיות פומביים לגבי הבעלות או המנהיגות שלהם. כמו כן, ברצוננו לראות דוחות שקיפות תכופים, במיוחד בכל הנוגע לאופן הטיפול בבקשות הממשלה.

**מינימום כדי לעמוד בדרישות:**

- מנהיגות ציבורית או בעלות.

**המקרה הטוב ביותר:**

- מנהיגות מול הציבור.
- דוחות שקיפות תכופים.

### שיווק

עם ספקי ה - VPN אנו ממליצים לראות שיווק אחראי.

**מינימום כדי לעמוד בדרישות:**

- חייבים לבצע ניתוח מידע באיחסון עצמי (כלומר, ללא Google Analytics). האתר של הספק חייב גם לציית ל [DNT (לא לעקוב)](https://en.wikipedia.org/wiki/Do_Not_Track) למי שרוצה לבטל את הסכמתו.

אסור שיהיה שום שיווק שהוא חסר אחריות:

- ביצוע ערבויות של הגנה על 100% אנונימיות. כשמישהו טוען שמשהו הוא 100% זה אומר שאין ודאות לכישלון. אנחנו יודעים שאנשים יכולים בקלות להפוך את עצמם לאיאנונימיים במספר דרכים, למשל.:
    - שימוש חוזר במידע אישי, למשל (חשבונות דוא"ל, שמות בדויים ייחודיים וכו ') שאליו ניגשו ללא תוכנה אנונימיות (Tor, VPN וכו ')
    - [טביעת אצבע של דפדפן](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- טוענים ש - VPN במעגל אחד הוא "אנונימי יותר" מאשר Tor, שהוא מעגל של שלושה כשות או יותר שמשתנה באופן קבוע.
- השתמשו בשפה אחראית: כלומר, זה בסדר לומר ש-VPN "מנותק" או "לא מחובר", אולם לטעון שמישהו "חשוף", "פגיע" או "נפרץ" הוא שימוש מיותר בשפה מדאיגה שעשויה להיות שגויה. לדוגמה, ייתכן שהאדם הזה פשוט משתמש בשירות של ספק VPN אחר או משתמש ב - Tor.

**המקרה הטוב ביותר:**

שיווק אחראי כי הוא גם חינוכי ושימושי לצרכן יכול לכלול:

- השוואה מדויקת למועד שבו יש להשתמש ב-[Tor](tor.md) במקום זאת.
- זמינות אתר האינטרנט של ספק ה - VPN מעל [Onion Service](https://en.wikipedia.org/wiki/.onion)

### פונקציונליות נוספת

אמנם לא דרישות קפדניות, אך ישנם כמה גורמים שבדקנו בעת קביעה על אילו ספקים להמליץ. אלה כוללים פונקציונליות של חסימת מודעות/חסימת מעקב, כנריות, חיבורי מולטי-הופ, תמיכת לקוחות מצוינת, מספר החיבורים המותרים בו זמנית וכו'.
