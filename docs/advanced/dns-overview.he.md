---
title: "סקירה כללית של DNS"
icon: material/dns
---

[מערכת שמות הדומיין](https://en.wikipedia.org/wiki/Domain_Name_System) היא 'ספר הטלפונים של האינטרנט'. DNS מתרגם שמות דומיין לכתובות IP כך שדפדפנים ושירותים אחרים יכולים לטעון משאבי אינטרנט, דרך רשת מבוזרת של שרתים.

## מה זה DNS?

כאשר אתה מבקר באתר אינטרנט, מוחזרת כתובת מספרית. לדוגמה, כאשר אתה מבקר ב-`privacyguides.org`, הכתובת `192.98.54.105` מוחזרת.

DNS קיים מאז [הימים הראשונים](https://en.wikipedia.org/wiki/Domain_Name_System#History) של האינטרנט. בקשות DNS המבוצעות אל ומשרתי DNS **אינן** מוצפנות בדרך כלל. בסביבה מגורים, לקוח מקבל שרתים על ידי ספק שירותי האינטרנט באמצעות [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol).

בקשות DNS לא מוצפנות יכולות להיות **למעקב** בקלות ו**לשנות** בזמן העברה. בחלקים מסוימים של העולם, ספקי האינטרנט מצווים לבצע [סינון DNS](https://en.wikipedia.org/wiki/DNS_blocking) פרימיטיבי. כאשר אתה מבקש כתובת IP של דומיין חסום, ייתכן שהשרת לא יגיב או שיגיב עם כתובת IP אחרת. מכיוון שפרוטוקול ה-DNS אינו מוצפן, ספק שירותי האינטרנט (או כל מפעיל רשת) יכול להשתמש ב-[DPI](https://en.wikipedia.org/wiki/Deep_packet_inspection) כדי לנטר בקשות. ספקי שירותי אינטרנט יכולים גם לחסום בקשות על סמך מאפיינים משותפים, ללא קשר לשרת ה-DNS שבו נעשה שימוש. DNS לא מוצפן משתמש תמיד ב[פורט](https://en.wikipedia.org/wiki/Port_(computer_networking)) 53 ותמיד משתמש ב-UDP.

להלן, אנו דנים ומספקים מדריך כדי להוכיח את מה שצופה מבחוץ עשוי לראות באמצעות DNS רגיל לא מוצפן ו[DNS מוצפן](#what-is-encrypted-dns).

### DNS לא מוצפן

1. שימוש ב-[`tshark`](https://www.wireshark.org/docs/man-pages/tshark.html) (חלק מ-[>פרויקט Wireshark](https://en.wikipedia.org/wiki/Wireshark)) אנו יכולים לנטר ולתעד את זרימת מנות האינטרנט. פקודה זו מתעדת מנות העומדות בכללים שצוינו:

    ```bash
    tshark -w /tmp/dns.pcap udp port 53 and host 1.1.1.1 or host 8.8.8.8
    ```

2. לאחר מכן נוכל להשתמש ב[`dig`](https://en.wikipedia.org/wiki/Dig_(command)) (Linux, MacOS וכו') או [`nslookup`](https://en.wikipedia.org/wiki/Nslookup) (Windows) כדי לשלוח את בדיקת ה-DNS לשני השרתים. תוכנות כגון דפדפני אינטרנט מבצעות חיפושים אלו באופן אוטומטי, אלא אם כן הם מוגדרים לשימוש ב-DNS מוצפן.

    === "לינוקס, macOS"

        ```
        dig +noall +answer privacyguides.org @1.1.1.1
        dig +noall +answer privacyguides.org @8.8.8.8
        ```
    === "ווינדוס"

        ```
        nslookup privacyguides.org 1.1.1.1
        nslookup privacyguides.org 8.8.8.8
        ```

3. לאחר מכן, אנו רוצים [לנתח](https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html#ChIntroWhatIs) את התוצאות:

    === "Wireshark"

        ```
        wireshark -r /tmp/dns.pcap
        ```

    === "tshark"

        ```
        tshark -r /tmp/dns.pcap
        ```

אם אתה מפעיל את פקודת Wireshark למעלה, החלונית העליונה מציגה את "[מסגרות](https://en.wikipedia.org/wiki/Ethernet_frame)", והחלונית התחתונה מציגה את כל הנתונים אודות המסגרת שנבחרה. פתרונות סינון וניטור ארגוניים (כגון אלה שנרכשו על ידי ממשלות) יכולים לבצע את התהליך באופן אוטומטי, ללא אינטראקציה אנושית, ויכולים לצבור מסגרות אלה כדי לייצר נתונים סטטיסטיים שימושיים לצופה ברשת.

| מספר. | זמן      | מקור      | יעד       | פרוטוקול | אורך | מידע                                                                   |
| ----- | -------- | --------- | --------- | -------- | ---- | ---------------------------------------------------------------------- |
| 1     | 0.000000 | 192.0.2.1 | 1.1.1.1   | DNS      | 104  | Standard query 0x58ba A privacyguides.org OPT                          |
| 2     | 0.293395 | 1.1.1.1   | 192.0.2.1 | DNS      | 108  | Standard query response 0x58ba A privacyguides.org A 198.98.54.105 OPT |
| 3     | 1.682109 | 192.0.2.1 | 8.8.8.8   | DNS      | 104  | Standard query 0x58ba A privacyguides.org OPT                          |
| 4     | 2.154698 | 8.8.8.8   | 192.0.2.1 | DNS      | 108  | Standard query response 0xf1a9 A privacyguides.org A 198.98.54.105 OPT |

צופה יכול לשנות כל אחת מהחבילות הללו.

## מה זה "DNS מוצפן"?

DNS מוצפן יכול להתייחס לאחד ממספר פרוטוקולים, הנפוצים שבהם הם:

### DNSCrypt

[**DNSCrypt**](https://en.wikipedia.org/wiki/DNSCrypt) הייתה אחת השיטות הראשונות להצפנת שאילתות DNS. DNSCrypt פועל על יציאה 443 ועובד עם פרוטוקולי התחבורה TCP או UDP. DNSCrypt מעולם לא הוגש ל[כוח המשימה להנדסת אינטרנט (IETF)](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) וגם לא עבר דרך [בקשה להערות (RFC)](https://en.wikipedia.org/wiki/Request_for_Comments), כך שלא נעשה בו שימוש נרחב מחוץ לכמה [יישומים](https://dnscrypt.info/implementations). כתוצאה מכך, הוא הוחלף במידה רבה על ידי [DNS על HTTPS](#dns-over-https-doh) הפופולרי יותר.

### DNS על TLS (DoT)

[**DNS over TLS**](https://en.wikipedia.org/wiki/DNS_over_TLS) היא שיטה נוספת להצפנת תקשורת DNS שהיא מוגדרת ב-[RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858). התמיכה יושמה לראשונה ב-Android 9, iOS 14 וב-Linux ב-[systemd-resolved](https://www.freedesktop.org/software/systemd/man/resolved.conf.html#DNSOverTLS=) בגרסה 237. ההעדפה בתעשייה התרחקה מ-DoT ל-DoH בשנים האחרונות, מכיוון ש-DoT הוא [פרוטוקול מורכב](https://dnscrypt.info/faq/) ובעל תאימות משתנה ל-RFC על פני המימושים הקיימים. Dot פועלת גם על פורט ייעודי 853 שניתן לחסום בקלות על ידי חומות אש מגבילות.

### DNS דרך HTTPS (DoH)

[**DNS דרך HTTPS**](https://en.wikipedia.org/wiki/DNS_over_HTTPS) כפי שהוגדר ב [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) חבילות שאילתות ב [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) פרוטוקול ומספק אבטחה עם HTTPS. תמיכה נוספה לראשונה בדפדפני אינטרנט כגון Firefox 60 ו-Chrome 83.

יישום מקורי של DoH הופיע ב-iOS 14, macOS 11, Microsoft Windows ו-אנדרואיד 13 (עם זאת, הוא לא יופעל [>כברירת מחדל](https://android-review.googlesource.com/c/platform/packages/modules/DnsResolver/+/1833144)). תמיכת שולחן העבודה הכללית של לינוקס ממתינה ל[יישום](https://github.com/systemd/systemd/issues/8639) של systemd כך ש[עדיין נדרשת התקנת תוכנת צד שלישי](../dns.md#encrypted-dns-proxies).

## מה יכול גורם חיצוני לראות?

בדוגמה זו נתעד מה קורה כאשר אנו מבקשים בקשת DoH:

1. ראשית, התחל `tshark`:

    ```bash
    tshark -w /tmp/dns_doh.pcap -f "tcp port https and host 1.1.1.1"
    ```

2. שנית, הגש בקשה עם `curl`:

    ```bash
    curl -vI --doh-url https://1.1.1.1/dns-query https://privacyguides.org
    ```

3. לאחר הגשת הבקשה, נוכל לעצור את לכידת החבילות עם <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. נתח את התוצאות ב-Wireshark:

    ```bash
    wireshark -r /tmp/dns_doh.pcap
    ```

אנו יכולים לראות את[הקמת החיבור](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment) ואת [לחיצת יד TLS](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/) המתרחשת עם כל חיבור מוצפן. כאשר מסתכלים על חבילות "האפליקציה" שלאחר מכן, אף אחת מהן לא מכילה את הדומיין שביקשנו או את כתובת ה-IP שהוחזרה.

## מדוע** לא כדאי** לי להשתמש ב- DNS מוצפן?

במקומות שבהם קיים סינון (או צנזורה) באינטרנט, לביקור במשאבים אסורים עשויות להיות השלכות משלו, שכדאי לשקול ב[מודל האיומים](../basics/threat-modeling.md) שלך. אנו **לא** מציעים להשתמש ב-DNS מוצפן למטרה זו. השתמש ב-[Tor](https://torproject.org) או ב-[VPN](../vpn.md) במקום זאת. אם אתה משתמש ב-VPN, עליך להשתמש בשרתי ה-DNS של ה-VPN שלך. כשאתה משתמש ב-VPN, אתה כבר סומך עליהם בכל פעילות הרשת שלך.

כאשר אנו מבצעים חיפוש DNS, זה בדרך כלל בגלל שאנו רוצים לגשת למשאב. להלן, נדון בכמה מהשיטות שעלולות לחשוף את פעילויות הגלישה שלך גם בעת שימוש ב-DNS מוצפן:

### כתובת IP

הדרך הפשוטה ביותר לקבוע את פעילות הגלישה עשויה להיות להסתכל על כתובות ה-IP שהמכשירים שלך ניגשים אליהם. לדוגמה, אם הצופה יודע ש-`privacyguides.org` נמצא בכתובת `198.98.54.105`, והמכשיר שלך מבקש נתונים מ-`198.98.54.105`, יש יש סיכוי טוב שאתה מבקר בPrivacy Guides.

שיטה זו שימושית רק כאשר כתובת ה-IP שייכת לשרת המארח רק מעט אתרים. זה גם לא מאוד שימושי אם האתר מתארח בפלטפורמה משותפת (למשל Github Pages, Cloudflare Pages, Netlify, WordPress, Blogger וכו'). זה גם לא מאוד שימושי אם השרת מתארח מאחורי [פרוקסי הפוך](https://en.wikipedia.org/wiki/Reverse_proxy), הנפוץ מאוד באינטרנט המודרני.

### ציון שם השרת (SNI)

ציון שם שרת משמש בדרך כלל כאשר כתובת IP מארחת אתרים רבים. זה יכול להיות שירות כמו Cloudflare, או הגנה אחרת של [מניעת מניעת שירות](https://en.wikipedia.org/wiki/Denial-of-service_attack).

1. התחל לתעד שוב עם `tshark`. הוספנו מסנן עם כתובת ה-IP שלנו כדי שלא תלכוד הרבה מנות:

    ```bash
    tshark -w /tmp/pg.pcap port 443 and host 198.98.54.105
    ```

2. לאחר מכן נבקר בכתובת [https://privacyguides.org](https://privacyguides.org).

3. לאחר ביקור באתר, אנו רוצים לעצור את לכידת החבילה עם <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. בשלב הבא אנו רוצים לנתח את התוצאות:

    ```bash
    wireshark -r /tmp/pg.pcap
    ```

    אנו נראה את יצירת החיבור, ולאחר מכן את לחיצת היד TLS עבור אתר מדריכי הפרטיות Privacy Guides. סביב מסגרת 5. אתה תראה "שלום לקוח ".

5. מרחיבים את המשולש &#9656; ליד כל שדה:

    ```text
    אבטחת שכבת▸ תחבורה
      ▸ TLSv1.3 שכבת שיא: פרוטוקול לחיצת יד: לקוח שלום
        פרוטוקול         ▸ לחיצת יד: לקוח שלום
          ▸ סיומת: server_name (len=22)
            סיומת סימון שם             ▸ שרת
    ```

6. אנו יכולים לראות את ערך SNI אשר חושף את האתר בו אנו מבקרים. הפקודה `tshark` יכולה לתת לך את הערך ישירות עבור כל החבילות המכילות ערך SNI:

    ```bash
    tshark -r /tmp/pg.pcap -Tfields -Y tls.handshake.extensions_server_name -e tls.handshake.extensions_server_name
    ```

משמעות הדבר היא שגם אם אנו משתמשים בשרתי "DNS מוצפן", הדומיין ככל הנראה ייחשף דרך SNI. פרוטוקול [TLS v1.3](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.3) מביא איתו את [לקוח מוצפן Hello](https://blog.cloudflare.com/encrypted-client-hello/), המונע דליפה מסוג זה.

ממשלות, ובפרט סין [](https://www.zdnet.com/article/china-is-now-blocking-all-encrypted-https-traffic-using-tls-1-3-and-esni/) ורוסיה [](https://www.zdnet.com/article/russia-wants-to-ban-the-use-of-secure-protocols-such-as-tls-1-3-doh-dot-esni/), כבר החלו לחסום את סין [](https://en.wikipedia.org/wiki/Server_Name_Indication#Encrypted_Client_Hello) או הביעו רצון לעשות זאת. לאחרונה רוסיה [החלה לחסום אתרים](https://github.com/net4people/bbs/issues/108) המשתמשים בתקן זה [HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) סטנדרטי. הסיבה לכך היא ש [QUIC](https://en.wikipedia.org/wiki/QUIC) פרוטוקול המהווה חלק מ HTTP/3 דורש שגם `ClientHello` יהיה מוצפן.

### פרוטוקול סטטוס תעודה מקוון (OCSP)

דרך נוספת שהדפדפן שלך יכול לחשוף את פעילויות הגלישה שלך היא באמצעות [פרוטוקול מצב אישור מקוון](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol). בעת ביקור באתר HTTPS, הדפדפן עשוי לבדוק אם [אישור](https://en.wikipedia.org/wiki/Public_key_certificate) של האתר בוטלה. זה נעשה בדרך כלל באמצעות פרוטוקול HTTP, כלומר הוא **לא** מוצפן.

בקשת ה-OCSP מכילה את האישור "[מספר סידורי](https://en.wikipedia.org/wiki/Public_key_certificate#Common_fields)", שהוא ייחודי. הוא נשלח ל"מגיב OCSP" על מנת לבדוק את מצבו.

אנו יכולים לדמות מה דפדפן יעשה באמצעות הפקודה [`openssl`](https://en.wikipedia.org/wiki/OpenSSL).

1. קבל את אישור השרת והשתמש בו[`sed`](https://en.wikipedia.org/wiki/Sed) כדי לשמור רק את החלק החשוב ולכתוב אותו לקובץ:

    ```bash
    openssl s_client -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_server.cert
    ```

2. קבל את תעודת הביניים. רשויות התעודה [(CA)](https://en.wikipedia.org/wiki/Certificate_authority) בדרך כלל לא חותמות על אישור ישירות; הן משתמשות במה שמכונה "תעודת ביניים ".

    ```bash
    openssl s_client -showcerts -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_and_intermediate.cert
    ```

3. האישור הראשון ב-`pg_and_intermediate.cert` הוא למעשה אישור השרת משלב 1. אנו יכולים להשתמש ב - `SED` שוב כדי למחוק עד המופע הראשון של הסוף:

    ```bash
    sed -n '/^-*END CERTIFICATE-*$/!d;:a n;p;ba' \
        /tmp/pg_and_intermediate.cert > /tmp/intermediate_chain.cert
    ```

4. קבל את התגובה OCSP עבור אישור השרת:

    ```bash
    openssl x509 -noout -ocsp_uri -in /tmp/pg_server.cert
    ```

    Our certificate shows the Lets Encrypt certificate responder. אם ברצוננו לראות את כל פרטי התעודה, נוכל להשתמש ב:

    ```bash
    openssl x509 -text -noout -in /tmp/pg_server.cert
    ```

5. התחל את לכידת החבילה:

    ```bash
    tshark -w /tmp/pg_ocsp.pcap -f "tcp port http"
    ```

6. הגש את בקשת ה - OCSP:

    ```bash
    openssl ocsp -issuer /tmp/intermediate_chain.cert \
                 -cert /tmp/pg_server.cert \
                 -text \
                 -url http://r3.o.lencr.org
    ```

7. פתח את הלכידה:

    ```bash
    wireshark -r /tmp/pg_ocsp.pcap
    ```

    יהיו שתי מנות עם פרוטוקול "OCSP ";" בקשה "ו -" תגובה ". עבור "בקשה" אנו יכולים לראות את "המספר הסידורי" על ידי הרחבת המשולש &#9656; ליד כל שדה:

    ```bash
    ▸ פרוטוקול מצב אישור מקוון
      ▸ tbsRequest
        ▸ requestList: 1 item
          ▸ Request
            ▸ reqCert
              serialNumber
    ```

    עבור "התגובה" אנו יכולים לראות גם את "המספר הסידורי ":

    ```bash
    פרוטוקול מצב אישור▸ מקוון
      ▸ responseBytes
        ▸ BasicOCSPResponse
          ▸ tbsResponseData
            ▸ תגובות: פריט 1
              ▸ SingleResponse
                ▸ certID
                  serialNumber
    ```

8. לחלופין,`tshark` השתמש כדי לסנן את המנות עבור המספר הסידורי:

    ```bash
    tshark -r /tmp/pg_ocsp.pcap -Tfields -Y ocsp.serialNumber -e ocsp.serialNumber
    ```

אם למשקיף הרשת יש את האישור הציבורי, הזמין לציבור, הוא יכול להתאים את המספר הסידורי לאישור הזה ולכן לקבוע את האתר שבו אתה מבקר. התהליך יכול להיות אוטומטי ויכול לשייך כתובות IP למספרים סידוריים. אפשר גם לבדוק ביומני [שקיפות אישורים](https://en.wikipedia.org/wiki/Certificate_Transparency) עבור המספר הסידורי.

## האם להשתמש ב - DNS מוצפן?

הכנו את תרשים הזרימה הזה כדי לתאר מתי *כדאי* להשתמש ב-DNS מוצפן:

``` mermaid
גרף TB
    התחל[Start] -> אנונימי{מנסה להיות<br> אנונימי?}
    אנונימי--> | כן | tor(השתמש ב Tor)
    אנונימי --> | לא | צנזורה{הימנע<br> צינזור?}
    צנזורה --> | כן | vpnOrTor(השתמש ב - VPN<br> או Tor)
    צנזורה --> | אין פרטיות{רוצה פרטיות<br> מספק שירותי אינטרנט?}
    פרטיות --> | כן | vpnOrTor
    פרטיות --> | לא | גועל נפש {ISP עושה<br><br> הפניות גועליות?}
    דוחה --> | כן | מוצפןDNS (השתמש ב - DNS<br> מוצפן<br> עם צד שלישי)
    דוחה --> | לא | ISPDNS {האם ספק שירותי האינטרנט תומך ב - DNS מוצפן<br>?}
    ispDNS --> | כן | useISP (השתמש ב - DNS<br> מוצפן<br> עם ISP)
    ispDNS --> | לא | כלום(אל תעשה כלום)
```

יש להשתמש ב-DNS מוצפן עם צד שלישי רק כדי לעקוף הפניות מחדש ו[חסימת DNS](https://en.wikipedia.org/wiki/DNS_blocking) בסיסית, כאשר אתה יכול להיות בטוח שלא יהיו לכך השלכות או שאתה מעוניין בספק שעושה חלק בסיסי סִנוּן.

[רשימת שרתי DNS מומלצים](../dns.md ""){.md-button}

## מהו DNSSEC?

[תוספי אבטחת מערכת שמות דומיין](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) (DNSSEC) היא תכונה של DNS המאמתת תגובות לחיפושי שמות דומיין. הוא אינו מספק הגנת פרטיות לאותם חיפושים, אלא מונע מתוקפים לתמרן או להרעיל את התגובות לבקשות DNS.

במילים אחרות, DNSSEC חותם נתונים דיגיטליים כדי להבטיח את תקפותם. על מנת להבטיח חיפוש מאובטח, החתימה מתרחשת בכל רמה בתהליך חיפוש ה-DNS. כתוצאה מכך, ניתן לסמוך על כל התשובות מה-DNS.

תהליך החתימה של DNSSEC דומה למישהו שחתום על מסמך משפטי בעט; אותו אדם חותם בחתימה ייחודית שאף אחד אחר לא יכול ליצור, ומומחה בית המשפט יכול להסתכל על החתימה הזו ולוודא שהמסמך נחתם על ידי אותו אדם. חתימות דיגיטליות אלו מבטיחות שלא בוצע שיבוש בנתונים.

DNSSEC מיישמת מדיניות חתימה דיגיטלית היררכית בכל שכבות ה-DNS. לדוגמה, במקרה של חיפוש `privacyguides.org`, שרת DNS שורש יחתום על מפתח עבור שרת השמות `.org` ו-`.org` nameserver יחתום על מפתח עבור שרת השמות הסמכותי של `privacyguides.org`.

<small>מותאם מ[סקירה כללית של תוספי אבטחת DNS (DNSSEC)](https://cloud.google.com/dns/docs/dnssec) על ידי Google ו-DNSSEC: An Introduction](https://blog.cloudflare.com/dnssec-an-introduction/) מאת Cloudflare, שניהם ברישיון תחת [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).</small>

## מהו מזעור QName?

QNAME הוא "שם מוסמך", לדוגמה`privacyguides.org`. מזעור QName מצמצם את כמות המידע הנשלחת משרת ה - DNS לשרת [שם סמכותי](https://en.wikipedia.org/wiki/Name_server#Authoritative_name_server).

במקום לשלוח את הדומיין `privacyguides.org`, מזעור QNAME פירושו ששרת ה- DNS ישאל בשביל כל הרשומות המסתיימות ב-`.org`. תיאור טכני נוסף מוגדר ב [RFC 7816](https://datatracker.ietf.org/doc/html/rfc7816).

## מהי רשת משנה של לקוח EDNS (ECS)?

[רשת המשנה של לקוח EDNS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) היא שיטה לפותר DNS רקורסיבי לציון [רשת משנה](https://en.wikipedia.org/wiki/Subnetwork) עבור [המארח או הלקוח](https://en.wikipedia.org/wiki/Client_(computing)) שמבצע את שאילתת ה-DNS.

זה נועד "לזרז" את מסירת הנתונים על ידי מתן תשובה ללקוח השייך לשרת הקרוב אליו כגון [תוכן רשת מסירה](https://en.wikipedia.org/wiki/Content_delivery_network), המשמשות לעתים קרובות בהזרמת וידאו והגשת יישומי אינטרנט של JavaScript.

תכונה זו כרוכה בעלות פרטיות, מכיוון שהיא מספרת לשרת ה-DNS מידע על מיקומו של הלקוח.
