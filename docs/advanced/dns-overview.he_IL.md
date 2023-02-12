---
title: "סקירה כללית של DNS"
icon: חומר/dns
---

מערכת שמות הדומיינים[](https://en.wikipedia.org/wiki/Domain_Name_System) היא 'ספר הטלפונים של האינטרנט '. DNS מתרגם שמות דומיין לכתובות IP כדי שדפדפנים ושירותים אחרים יוכלו לטעון משאבי אינטרנט, באמצעות רשת מבוזרת של שרתים.

## מה זה DNS?

כאשר אתה מבקר באתר אינטרנט, כתובת מספרית מוחזרת. לדוגמה, בעת ביקור `privacyguides.org`, הכתובת הזו `192.98.54.105` מוחזרת.

DNS קיים [מראשית ימי](https://en.wikipedia.org/wiki/Domain_Name_System#History) האינטרנט. בקשות DNS המתבצעות אל ומשרתי DNS **אינן** מוצפנות באופן כללי. בסביבת מגורים, ללקוח ניתן על ידי ספק האינטרנט באמצעות [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol).

בקשות DNS לא מוצפנות יכולות בקלות להיות במעקב **** ו**שונה** במעבר. בחלקים מסוימים של העולם, ספקיות האינטרנט נדרשות לבצע [סינון DNS](https://en.wikipedia.org/wiki/DNS_blocking) פרימיטבי. כאשר אתה מבקש את כתובת ה - IP של דומיין חסום, ייתכן שהשרת לא יגיב או יגיב עם כתובת IP אחרת. מכיוון שפרוטוקול ה- DNS אינו מוצפן, ספק שירותי האינטרנט (או כל מפעיל רשת) יכול להשתמש[DPI](https://en.wikipedia.org/wiki/Deep_packet_inspection) כדי לפקח על בקשות. ספקי האינטרנט יכולים גם לחסום בקשות על סמך מאפיינים משותפים, ללא קשר לאיזה שרת DNS נעשה שימוש. DNS לא מוצפן תמיד משתמש ב - [יציאה](https://en.wikipedia.org/wiki/Port_(computer_networking)) 53 ותמיד משתמש ב - UDP.

למטה, אנו דנים ומספקים הדרכה כדי להוכיח מה צופה חיצוני עשוי לראות באמצעות DNS רגיל לא מוצפן ו - [DNS מוצפן](#what-is-encrypted-dns).

### DNS לא מוצפן

1. שימוש[`tshark`](https://www.wireshark.org/docs/man-pages/tshark.html) (בחלק מה [Wireshark](https://en.wikipedia.org/wiki/Wireshark) project) אנו יכולים לפקח ולהקליט זרימת מנות אינטרנט. פקודה זו מתעדת מנות העומדות בכללים שצוינו:

    ```bash
    tshark -w /tmp/dns.pcap udp port 53 and host 1.1.1.1 or host 8.8.8.8
    ```

2. אנחנו יכולים להשתמש ב [`dig`](https://en.wikipedia.org/wiki/Dig_(command)) (Linux, MacOS etc) or [`nslookup`](https://en.wikipedia.org/wiki/Nslookup) (Windows) כדי לשלוח את בדיקת המידע של DNS לשני השרתים. תוכנות כגון דפדפני אינטרנט מבצעות חיפושים אלה באופן אוטומטי, אלא אם הן מוגדרות לשימוש ב - DNS מוצפן.

    == לינוקס, macOS ==

        ```
        dig +noall +answer privacyguides.org @1.1.1.1
        dig +noall +answer privacyguides.org @8.8.8.8
        ```
    === "ווינדוס"

        ```
        nslookup privacyguides.org 1.1.1.1
        nslookup privacyguides.org 8.8.8.8
        ```

3. לאחר מכן, נרצה [לנתח](https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html#ChIntroWhatIs) את התוצאות:

    === "Wireshark"

        ```
        wireshark -r /tmp/dns.pcap
        ```

    === "tshark"

        ```
        tshark -r /tmp/dns.pcap
        ```

אם אתה מפעיל את פקודת Wireshark לעיל, החלונית העליונה מציגה את "[פריימים](https://en.wikipedia.org/wiki/Ethernet_frame)", והחלונית התחתונה מציגה את כל הנתונים אודות המסגרת שנבחרה. פתרונות סינון ומעקב ארגוניים (כגון אלה שנרכשו על ידי ממשלות) יכולים לבצע את התהליך באופן אוטומטי, ללא אינטראקציה אנושית, ויכולים לצבור מסגרות אלה כדי לייצר נתונים סטטיסטיים השימושיים לצופה ברשת.

| מספר. | זמן      | מקור      | יעד       | פרוטוקול | אורך | מידע                                                                   |
| ----- | -------- | --------- | --------- | -------- | ---- | ---------------------------------------------------------------------- |
| 1     | 0.000000 | 192.0.2.1 | 1.1.1.1   | DNS      | 104  | Standard query 0x58ba A privacyguides.org OPT                          |
| 2     | 0.293395 | 1.1.1.1   | 192.0.2.1 | DNS      | 108  | Standard query response 0x58ba A privacyguides.org A 198.98.54.105 OPT |
| 3     | 1.682109 | 192.0.2.1 | 8.8.8.8   | DNS      | 104  | Standard query 0x58ba A privacyguides.org OPT                          |
| 4     | 2.154698 | 8.8.8.8   | 192.0.2.1 | DNS      | 108  | Standard query response 0xf1a9 A privacyguides.org A 198.98.54.105 OPT |

משקיף יכול לשנות כל אחת מהחבילות האלה.

## מה זה "DNS מוצפן "?

DNS מוצפן יכול להתייחס לאחד ממספר פרוטוקולים, הנפוצים ביותר הם:

### DNSCrypt

[**DNSCrypt**](https://en.wikipedia.org/wiki/DNSCrypt) הייתה אחת השיטות הראשונות להצפנת שאילתות DNS. DNSCrypt פועלת על פורט 443 ועובדת עם פרוטוקולי התחבורה של TCP או UDP. DNSCrypt מעולם לא הוגשה ל [כוח המשימה להנדסת אינטרנט (IETF)](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) הוא גם לא עבר את תהליך [Request for Comments (RFC)](https://en.wikipedia.org/wiki/Request_for_Comments) תהליך, ולכן זה לא היה בשימוש נרחב מחוץ כמה [יישומי](https://dnscrypt.info/implementations). כתוצאה מכך, הוא הוחלף במידה רבה על ידי ה - DNS [הפופולרי יותר על HTTPS](#dns-over-https-doh).

### DNS באמצעות DoT) TLS)

[**DNS באמצעות TLS**](https://en.wikipedia.org/wiki/DNS_over_TLS) היא שיטה נוספת להצפנת תקשורת DNS המוגדרת ב - [RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858). התמיכה יושמה לראשונה באנדרואיד 9, iOS 14, ובלינוקס ב [systemd-resolved](https://www.freedesktop.org/software/systemd/man/resolved.conf.html#DNSOverTLS=) בגרסא 237. ההעדפה בתעשייה התרחקה מ - DOT ל - DOH בשנים האחרונות, מכיוון ש - DOT הוא פרוטוקול [מורכב](https://dnscrypt.info/faq/) ויש לו תאימות משתנה ל - RFC על פני היישומים הקיימים. Dot פועלת גם על פורט ייעודי 853 שניתן לחסום בקלות על ידי חומות אש מגבילות.

### DNS על פני HTTPS

[**DNS באמצעות HTTPS**](https://en.wikipedia.org/wiki/DNS_over_HTTPS) as defined in [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) packages queries in the [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) protocol and provides security with HTTPS. תמיכה נוספה לראשונה בדפדפני אינטרנט כגון Firefox 60 ו - Chrome 83.

יישום מקורי של DoH הופיע ב - iOS 14, macOS 11, מייקרוספט חלונות ו - אנדרואיד 13 (עם זאת, הוא לא יופעל [כברירת מחדל](https://android-review.googlesource.com/c/platform/packages/modules/DnsResolver/+/1833144)). תמיכת שולחן העבודה הכללית של לינוקס ממתינה ליישום systemd [](https://github.com/systemd/systemd/issues/8639) כך שעדיין נדרש להתקין [תוכנות צד שלישי](../dns.md#linux).

## מה צד חיצוני יכול לראות?

בדוגמה זו נתעד את המתרחש בעת הגשת בקשת DoH:

1. ראשית, התחל `tshark`:

    ```bash
    tshark -w /tmp/dns_doh.pcap -f "tcp port https and host 1.1.1.1"
    ```

2. שנית, להגיש בקשה עם `curl`:

    ```bash
    curl -vI --doh-url https://1.1.1.1/dns-query https://privacyguides.org
    ```

3. לאחר ביצוע הבקשה, אנו יכולים לעצור את לכידת החבילה עם <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. נתח את התוצאות ב wireshark:

    ```bash
    wireshark -r /tmp/dns_doh.pcap
    ```

אנחנו יכולים לראות [הקמת חיבור](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment) and [TLS handshake](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/) המתרחשת עם כל חיבור מוצפן. כאשר בוחנים את חבילות "נתוני היישום" שבאות לאחר מכן, אף אחת מהן לא מכילה את הדומיין שביקשנו או את כתובת ה - IP שהוחזרה.

## מדוע** לא כדאי** לי להשתמש ב- DNS מוצפן?

במקומות שבהם יש סינון באינטרנט (או צנזורה), ביקור במשאבים אסורים עשוי להיות השלכות משלו, אשר עליך לשקול במודל [האיום שלך](../basics/threat-modeling.md). אנו **לא** מציעים להשתמש ב- DNS מוצפן למטרה זו. השתמש [Tor](https://torproject.org) או ב [VPN](../vpn.md) במקום זאת. אם אתם משתמשים ב - VPN, אתם צריכים להשתמש בשרתי ה - DNS של ה - VPN שלכם. כשאתם משתמשים ב - VPN, אתם כבר סומכים עליו עם כל הפעילות שלכם ברשת.

כשאנחנו עורכים חיפוש DNS, זה בדרך כלל בגלל שאנחנו רוצים לגשת למשאב. בהמשך נדון בכמה מהשיטות שעשויות לחשוף את פעילויות הגלישה שלך גם בעת שימוש ב - DNS מוצפן:

### כתובת IP

הדרך הפשוטה ביותר לקבוע את פעילות הגלישה עשויה להיות להסתכל על כתובות ה - IP שהמכשירים שלך ניגשים אליהן. לדוגמא, אם הצופה יודע ש `privacyguides.org` היא `198.98.54.105`, והמכשיר שלך מבקש מידע מ `198.98.54.105`,יש סיכוי טוב שאתה מבקר ב Privacy Guides.

שיטה זו שימושית רק כאשר כתובת ה - IP שייכת לשרת שמארח רק אתרים מעטים. הוא גם לא שימושי במיוחד אם האתר מתארח בפלטפורמה משותפת, (לדוגמה, דפי Github, דפי Cloudflare, Netlify, WordPress, Blogger וכו '). זה גם לא מאוד שימושי אם השרת מתארח מאחורי [ פרוקסי הפוך ](https://en.wikipedia.org/wiki/Reverse_proxy), אשר נפוץ מאוד באינטרנט המודרני.

### סימון שם השרת (SNI)

אינדיקציה לשם השרת משמשת בדרך כלל כאשר כתובת IP מארחת אתרים רבים. זה יכול להיות שירות כמו Cloudflare, או הגנה אחרת [מניעת שירות התקפה](https://en.wikipedia.org/wiki/Denial-of-service_attack).

1. התחל לתעד שוב עם `tshark`. הוספנו מסנן עם כתובת ה - IP שלנו כדי שלא יתפסו מנות רבות:

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

6. אנחנו יכולים לראות את הערך של SNI שמגלה את האתר שבו אנחנו מבקרים. הפקודה `tshark` יכולה לתת לך את הערך ישירות עבור כל החבילות המכילות ערך SNI:

    ```bash
    tshark -r /tmp/pg.pcap -Tfields -Y tls.handshake.extensions_server_name -e tls.handshake.extensions_server_name
    ```

המשמעות היא שגם אם אנו משתמשים בשרתי "DNS מוצפנים ", סביר להניח שהדומיין ייחשף באמצעות SNI. ה [TLS v1.3](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.3) פרטוקול מביא עם ז [לקוח מוצפן שלום](https://blog.cloudflare.com/encrypted-client-hello/), מה שמונע דליפה מסוג זה.

ממשלות, ובפרט סין [](https://www.zdnet.com/article/china-is-now-blocking-all-encrypted-https-traffic-using-tls-1-3-and-esni/) ורוסיה [](https://www.zdnet.com/article/russia-wants-to-ban-the-use-of-secure-protocols-such-as-tls-1-3-doh-dot-esni/), כבר החלו לחסום את סין [](https://en.wikipedia.org/wiki/Server_Name_Indication#Encrypted_Client_Hello) או הביעו רצון לעשות זאת. לאחרונה רוסיה [החלה לחסום אתרים](https://github.com/net4people/bbs/issues/108) המשתמשים בתקן זה [HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) סטנדרטי. הסיבה לכך היא ש [QUIC](https://en.wikipedia.org/wiki/QUIC) פרוטוקול המהווה חלק מ HTTP/3 דורש שגם `ClientHello` יהיה מוצפן.

### פרוטוקול סטטוס תעודה מקוון (OCSP)

דרך נוספת שבה הדפדפן שלך יכול לחשוף את פעילויות הגלישה שלך היא באמצעות פרוטוקול סטטוס [לתעודה מקוונת](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol). בעת ביקור באתר HTTPS, הדפדפן עשוי לבדוק אם אתר האינטרנט[ התעודה](https://en.wikipedia.org/wiki/Public_key_certificate) שלו בוטלה. פעולה זו נעשית בדרך כלל באמצעות פרוטוקול HTTP, כלומר היא **אינה** מוצפנת.

בקשת OCSP מכילה את האישור "[מספר סידורי](https://en.wikipedia.org/wiki/Public_key_certificate#Common_fields)", שהוא ייחודי. הוא נשלח אל "המגיב של OCSP" כדי לבדוק את הסטטוס שלו.

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

אם לצופה ברשת יש את האישור הציבורי, שזמין לציבור הרחב, הוא יכול להתאים את המספר הסידורי עם אישור זה ולכן לקבוע את האתר שבו אתה מבקר. התהליך יכול להיות אוטומטי ויכול לשייך כתובות IP עם מספרים סידוריים. ניתן גם לבדוק ביומני [תעודות שקיפות](https://en.wikipedia.org/wiki/Certificate_Transparency) את המספר הסידורי.

## האם להשתמש ב - DNS מוצפן?

יצרנו תרשים זרימה זה כדי לתאר מתי אתה צריך ** להשתמש DNS מוצפן:

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

יש להשתמש ב- DNS מוצפן עם צד שלישי רק כדי לעקוף הפניות ובסיסי[DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) כאשר אתה יכול להיות בטוח שלא יהיו השלכות או שאתה מעוניין בספק שעושה סינון בסיסי.

[רשימת שרתי DNS מומלצים](../dns.md ""){.md-button}

## מהו DNSSEC?

[Domain Name System Security Extensions](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) (DNSSEC) היא תכונה של DNS המאמתת תגובות לבדיקות מידע של שמות תחומים. הוא אינו מספק הגנות פרטיות עבור חיפושים אלה, אלא מונע מתוקפים לתפעל או להרעיל את התגובות לבקשות DNS.

במילים אחרות, DNSSEC חותם דיגיטלית על נתונים כדי להבטיח את תקפותם. על מנת להבטיח חיפוש מאובטח, החתימה מתבצעת בכל רמה בתהליך החיפוש של DNS. כתוצאה מכך, כל התשובות מ - DNS ניתן לסמוך.

תהליך החתימה ב - DNSSEC דומה לחתימה על מסמך משפטי עם עט; אותו אדם חותם עם חתימה ייחודית שאף אחד אחר לא יכול ליצור, ומומחה מטעם בית המשפט יכול לעיין בחתימה זו ולוודא שהמסמך נחתם על ידי אותו אדם. חתימות דיגיטליות אלה מבטיחות כי הנתונים לא השתנו בידי גורם זר.

DNSSEC מיישמת מדיניות חתימה דיגיטלית היררכית בכל שכבות ה - DNS. לדוגמה, במקרה של חיפוש `privacyguides.org`, שרת DNS ראשי יחתום על מפתח עבור שרת השמות `.org`, ושרת השמות `.org` יחתום על מפתח עבור שרת השמות הסמכותי של `privacyguides.org`.

<small>הותאם לסקירה של [DNS Security Extensions (DNSSEC)](https://cloud.google.com/dns/docs/dnssec) על ידי גוגל -[ DNSSEC: An Introduction]( https://blog.cloudflare.com/dnssec-an-introduction/) ועל ידי קלאודפלייר, שניהם ברישיון תחת [CC BY 4.0]( https://creativecommons.org/licenses/by/4.0 /).</small>

## מהו מזעור QName?

QNAME הוא "שם מוסמך", לדוגמה`privacyguides.org`. מזעור QName מצמצם את כמות המידע הנשלחת משרת ה - DNS לשרת [שם סמכותי](https://en.wikipedia.org/wiki/Name_server#Authoritative_name_server).

במקום לשלוח את הדומיין `privacyguides.org`, מזעור QNAME פירושו ששרת ה- DNS ישאל בשביל כל הרשומות המסתיימות ב-`.org`. תיאור טכני נוסף מוגדר ב[RFC 7816](https://datatracker.ietf.org/doc/html/rfc7816).

## מהי EDNS Client Subnet (ECS)?

[EDNS Client Subnet](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) היא שיטה לפתרון DNS רקורסיבי כדי לציין [subnetwork](https://en.wikipedia.org/wiki/Subnetwork) עבור מארח [או לקוח](https://en.wikipedia.org/wiki/Client_(computing)) אשר עושה את שאילתת ה - DNS.

הוא נועד "להאיץ" את מסירת הנתונים על ידי מתן תשובה ללקוח ששייכת לשרת שקרוב אליו, כגון רשת [למסירת תוכן](https://en.wikipedia.org/wiki/Content_delivery_network), המשמשת לעתים קרובות בהזרמת וידאו ובהגשת יישומי אינטרנט של JavaScript.

תכונה זו באה בעלות פרטיות, שכן היא אומרת לשרת ה - DNS מידע מסוים על מיקום הלקוח.
