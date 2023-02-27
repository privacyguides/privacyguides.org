---
title: סקירה כללית של לינוקס
icon: simple/linux
---

לעתים קרובות מאמינים שתוכנת [קוד פתוח](https://en.wikipedia.org/wiki/Open-source_software) מאובטחת מטבעה מכיוון שקוד המקור זמין. קיימת ציפייה שאימות קהילה מתרחש באופן קבוע; עם זאת, זה לא תמיד [המקרה](https://seirdy.one/posts/2022/02/02/floss-security/). זה אכן תלוי במספר גורמים, כגון פעילות הפרויקט, חוויית מפתח, רמת הקפדה על [ביקורות קוד](https://en.wikipedia.org/wiki/Code_review), וכן באיזו תדירות ניתנת תשומת לב לחלקים ספציפיים של [בסיס הקוד](https://en.wikipedia.org/wiki/Codebase) שעלולים להישאר ללא נגיעה במשך שנים.

נכון לעכשיו, ללינוקס שולחני יש כמה תחומים שניתן לשפר טוב יותר בהשוואה לעמיתיהם הקנייניים, למשל.:

- שרשרת אתחול מאומתת, כמו [אתחול מאובטח](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) של אפל (עם [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)),של אנדרואיד [אתחול מאומת](https://source.android.com/security/verifiedboot), ChromeOS' [אתחול מאומת](https://www.chromium.org/chromium-os/chromiumos-design-docs/security-overview/#verified-boot), או Microsoft Windows’s [תהליך האתחול](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) עם [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). תכונות וטכנולוגיות חומרה אלו יכולות לעזור למנוע התעסקות מתמשכת על ידי תוכנות זדוניות או [התקפות עוזרות מרושעות](https://en.wikipedia.org/wiki/Evil_Maid_attack)
- פתרון ארגזי חול חזק כמו זה שנמצא ב- [macOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md), ו- [אנדרואיד](https://source.android.com/security/app-sandbox). פתרונות ארגז חול נפוצים של לינוקס כגון [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) ו- [Firejail](https://firejail.wordpress.com/) עדיין יש דרך ארוכה לפניו
- חזק [ניצול ההקלות](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

למרות החסרונות הללו, הפצות לינוקס לשולחן העבודה הן נהדרות אם אתה רוצה:

- הימנע מטלמטריה שמגיעה לרוב עם מערכות הפעלה קנייניות
- לשמור על [חופש תוכנה](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
- יש מערכות ממוקדות פרטיות כגון [Whonix](https://www.whonix.org) או [Tails](https://tails.boum.org/)

האתר שלנו משתמש בדרך כלל במונח "לינוקס" כדי לתאר הפצות לינוקס לשולחן העבודה. מערכות הפעלה אחרות המשתמשות גם בליבת לינוקס כמו ChromeOS, אנדרואיד ו-Qubes OS אינן נדונות כאן.

[המלצות לינוקס שלנו :material-arrow-right-drop-circle:](../desktop.md ""){.md-button}

## בחירת ההפצה שלך

לא כל ההפצות של לינוקס נוצרו שוות. בעוד שדף ההמלצות שלנו ללינוקס לא נועד להיות מקור סמכותי לגבי ההפצה שבה אתה צריך להשתמש, יש כמה דברים שאתה צריך לזכור כאשר אתה בוחר באיזו הפצה להשתמש.

### מחזור שחרור

אנו ממליצים בחום לבחור בהפצות שנשארות קרובות למהדורות התוכנה היציבות במעלה הזרם, המכונה לעתים קרובות הפצות מהדורות מתגלגלות. הסיבה לכך היא שהפצות מחזור שחרור קפוא לרוב אינן מעדכנות גרסאות חבילה ונגררות לפי עדכוני אבטחה.

עבור הפצות קפואות כגון [Debian](https://www.debian.org/security/faq#handling), מתחזקים חבילות צפויים לבצע אחורה תיקונים כדי לתקן נקודות תורפה במקום להקפיץ את התוכנה ל- "הגרסה הבאה" שפורסמה על ידי המפתח במעלה הזרם. חלק מתיקוני האבטחה [אינם](https://arxiv.org/abs/2105.14565) מקבלים [CVE ](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (במיוחד תוכנה פחות פופולרית) בכלל ולכן אל תכנסו להפצה עם מודל התיקון הזה. כתוצאה מכך תיקוני אבטחה קלים מתעכבים לפעמים עד לגרסה הגדולה הבאה.

אנחנו לא מאמינים שהחזקת חבילות והחלת תיקוני ביניים הם רעיון טוב, מכיוון שהוא שונה מהדרך שבה המפתח התכוון שהתוכנה תעבוד. ל [Richard Brown](https://rootco.de/aboutme/) יש מצגת על נושא זה:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/i8c0mg_mS7U" title="מהדורות רגילות הן שגויות, גלגלו על החיים שלכם" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### עדכונים מסורתיים לעומת עדכונים אטומיים

באופן מסורתי, הפצות לינוקס מתעדכנות על ידי עדכון רציף של החבילות הרצויות. עדכונים מסורתיים כמו אלה המשמשים בהפצות מבוססות פדורה, Arch Linux ודביאן יכולים להיות פחות אמינים אם מתרחשת שגיאה בזמן העדכון.

הפצות עדכון אטומי מיישמות עדכונים במלואם או לא בכלל. בדרך כלל, מערכות עדכון עסקאות הן גם אטומיות.

מערכת עדכון עסקה יוצרת תמונת מצב שנעשתה לפני ואחרי החלת עדכון. אם עדכון נכשל בכל עת (אולי בגלל הפסקת חשמל), ניתן להחזיר את העדכון בקלות ל"מצב התקין האחרון הידוע."

שיטת העדכון Atomic משמשת להפצות בלתי ניתנות לשינוי כמו Silverblue, Tumbleweed ו-NixOS ויכולה להשיג אמינות עם מודל זה. [Adam Šamalík](https://twitter.com/adsamalik) סיפק מצגת על האופן שבו `rpm-ostree` עובד עם Silverblue:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-hpV5l-gJnQ" title="בואו ננסה את Fedora Silverblue - מערכת הפעלה שולחנית בלתי ניתנת לשינוי! - Adam Šamalik" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### הפצות "ממוקדות אבטחה"

לעתים קרובות קיים בלבול מסוים בין הפצות "ממוקדות אבטחה" והפצות "לבדיקת חדירות". חיפוש מהיר של "הפצת לינוקס המאובטחת ביותר" יביא לרוב תוצאות כמו Kali Linux, Black Arch ו- Parrot OS. הפצות אלו הן הפצות בדיקות חדירה פוגעניות המאגדות כלים לבדיקת מערכות אחרות. הם אינם כוללים "אבטחה נוספת" או הקלות הגנתיות המיועדות לשימוש קבוע.

### הפצות מבוססות Arch

הפצות מבוססות Arch אינן מומלצות לחדשים ב-Linux, (ללא קשר להפצה) מכיוון שהן דורשות [תחזוקת מערכת](https://wiki.archlinux.org/title/System_maintenance) רגילה. ל- Arch אין מנגנון עדכון הפצה עבור אפשרויות התוכנה הבסיסיות. כתוצאה מכך, עליך להישאר מודע למגמות הנוכחיות ולאמץ טכנולוגיות מכיוון שהן מחליפות שיטות ישנות בעצמך.

עבור מערכת מאובטחת, מצפים ממך גם שיהיה לך מספיק ידע בלינוקס כדי להגדיר כראוי אבטחה עבור המערכת שלהם, כגון אימוץ מערכת [בקרת כניסה חובה](https://en.wikipedia.org/wiki/Mandatory_access_control), הגדרת רשימות שחורות של [מודול ליבה](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security) רשימות שחורות, הקשחת פרמטרי אתחול, מניפולציה של [סיסקטל](https://en.wikipedia.org/wiki/Sysctl) פרמטרים, ולדעת אילו רכיבים הם צריכים כמו [Polkit](https://en.wikipedia.org/wiki/Polkit).

כל מי שמשתמש ב[Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **חייב** להיות נוח בביקורת PKGBUILDs שהם מתקינים משירות זה. חבילות AUR הן תוכן המיוצר בקהילה ואינן נבדקות בשום צורה, ולכן הן פגיעות להתקפות שרשרת אספקת תוכנה, [מה שקרה למעשה](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). יש להשתמש תמיד במשורה ב-AUR ולעיתים קרובות יש הרבה עצות רעות בדפים שונים שמפנים אנשים להשתמש באופן עיוור ב [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) ללא אזהרה מספקת. אזהרות דומות חלות על שימוש בארכיון חבילות אישיות של צד שלישי (PPA) בהפצות מבוססות דביאן או בפרויקטים קהילתיים (COPR) בפדורה.

אם אתה מנוסה עם לינוקס וברצונך להשתמש בהפצה מבוססת Arch, אנו ממליצים רק על Arch Linux הראשי, לא על אף אחת מהנגזרות שלו. אנו ממליצים נגד שתי נגזרות Arch אלה באופן ספציפי:

- **Manjaro**: הפצה זו מעכבת חבילות למשך שבועיים כדי לוודא שהשינויים שלהן לא יישברו, לא כדי לוודא שהמעלה הזרם יציב. כאשר נעשה שימוש בחבילות AUR, הן בנויות לרוב על פי [ספריות](https://en.wikipedia.org/wiki/Library_(computing)) העדכניות ביותר מהמאגרים של Arch.
- **Garuda**: הם משתמשים ב[Chaotic-AUR](https://aur.chaotic.cx/) אשר מרכיב באופן אוטומטי ועיוור חבילות מה- AUR. אין תהליך אימות כדי לוודא שחבילות AUR אינן סובלות מהתקפות שרשרת האספקה.

### Kicksecure

למרות שאנו ממליצים בחום לא להשתמש בהפצות מיושנות כמו דביאן, יש מערכת הפעלה מבוססת דביאן שהוקשה להיות בטוחה הרבה יותר מהפצות לינוקס טיפוסיות: [Kicksecure ](https://www.kicksecure.com/). Kicksecure, במונחים פשוטים מדי, היא קבוצה של סקריפטים, תצורות וחבילות שמצמצמות באופן משמעותי את משטח ההתקפה של דביאן. זה מכסה הרבה המלצות לפרטיות והקשחה כברירת מחדל.

### הפצות ליבה של לינוקס ו-"Libre"

אנו ממליצים בחום **נגד** להשתמש בליבת Linux-libre, שכן היא [מסירה הגבלות אבטחה](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) ו[מדכא אזהרות ליבה](https://news.ycombinator.com/item?id=29674846) על מיקרוקוד פגיע מסיבות אידיאולוגיות.

## המלצות כלליות

### הצפנת כונן

לרוב ההפצות של לינוקס יש אפשרות בתוך תוכנית ההתקנה שלה להפעלת [LUKS](../encryption.md#linux-unified-key-setup) FDE. אם אפשרות זו לא מוגדרת בזמן ההתקנה, תצטרך לגבות את הנתונים שלך ולהתקין מחדש, מכיוון שההצפנה מוחלת לאחר [חלוקת דיסקים ](https://en.wikipedia.org/wiki/Disk_partitioning), אבל לפני ש[מערכות הקבצים](https://en.wikipedia.org/wiki/File_system) מתעצבות. אנו מציעים גם למחוק בצורה מאובטחת את מכשיר האחסון שלך:

- [מחיקת נתונים מאובטחת :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/05/25/secure-data-erasure/)

### החלף

שקול להשתמש ב-[ZRAM](https://wiki.archlinux.org/title/Swap#zram-generator) או [החלפה מוצפנת](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) במקום החלפה לא מוצפנת כדי למנוע בעיות אבטחה פוטנציאליות עם דחיפה של נתונים רגישים ל[מרחב החלפה](https://en.wikipedia.org/wiki/Memory_paging). הפצות מבוססות פדורה [משתמשות ב-ZRAM כברירת מחדל](https://fedoraproject.org/wiki/Changes/SwapOnZRAM).

### Wayland

אנו ממליצים להשתמש בסביבת שולחן עבודה התומכת בפרוטוקול התצוגה [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) כפי שפותח [תוך מחשבה](https://lwn.net/Articles/589147/) על אבטחה. קודמו, [X11](https://en.wikipedia.org/wiki/X_Window_System), אינו תומך בבידוד GUI, מה שמאפשר לכל החלונות [רשום מסך, רישום והכנס קלט בחלונות אחרים](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation.html), מה שהופך כל ניסיון לארגז חול לחסר תועלת. אמנם יש אפשרויות לעשות X11 מקונן כגון [Xpra](https://en.wikipedia.org/wiki/Xpra) או [Xephyr](https://en.wikipedia.org/wiki/Xephyr), לעתים קרובות הם מגיעים עם השלכות ביצועים שליליות ואינם נוחים להגדרה ואינם עדיפים על פני Wayland.

למרבה המזל, סביבות נפוצות כגון [GNOME](https://www.gnome.org), [KDE](https://kde.org) וה- למנהל החלונות [Sway](https://swaywm.org) יש תמיכה ב-Wayland. חלק מההפצות כמו Fedora ו- Tumbleweed משתמשות בו כברירת מחדל, וחלק אחרות עשויות לעשות זאת בעתיד מכיוון ש-X11 נמצא ב[מצב תחזוקה קשה](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly). אם אתה משתמש באחת מהסביבות האלה זה קל כמו לבחור את הפגישה "Wayland" במנהל התצוגה של שולחן העבודה ([GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager), [SDDM](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager)).

אנו ממליצים **נגד** להשתמש בסביבות שולחן עבודה או במנהלי חלונות שאין להם תמיכה ב-Wayland, כגון Cinnamon (ברירת מחדל ב-Linux Mint), Pantheon (ברירת מחדל במערכת ההפעלה היסודית), MATE, Xfce, ו-i3.

### קושחה קניינית (עדכוני מיקרוקוד)

הפצות לינוקס כגון אלו שהן [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre) או DIY (Arch Linux) אינן מגיעות עם עדכוני [microcode](https://en.wikipedia.org/wiki/Microcode) שלעתים קרובות מתקנים נקודות תורפה. כמה דוגמאות בולטות לפגיעויות אלה כוללות [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)), [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)), ועוד [hardware vulnerabilities](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html).

אנו **ממליצים בחום** להתקין את עדכוני המיקרוקוד, מכיוון שהמעבד שלך כבר מריץ את המיקרוקוד הקנייני מהמפעל. לפדורה ול-openSUSE יש את עדכוני המיקרוקוד כברירת מחדל.

### עדכונים

רוב ההפצות של לינוקס יתקינו עדכונים אוטומטית או יזכירו לך לעשות זאת. חשוב לשמור על מערכת ההפעלה שלך מעודכנת כדי שהתוכנה שלך תתוקן כאשר מתגלה פגיעות.

חלק מההפצות (במיוחד אלו המיועדות למשתמשים מתקדמים) הן יותר חשופות ומצפות ממך לעשות דברים בעצמך (למשל Arch או Debian). אלה ידרשו להפעיל את "מנהל החבילות" (`apt`, `pacman`, `dnf` וכו') באופן ידני על מנת לקבל עדכוני אבטחה חשובים.

בנוסף, הפצות מסוימות לא יוריד עדכוני קושחה באופן אוטומטי. לשם כך תצטרך להתקין את [`fwupd`](https://wiki.archlinux.org/title/Fwupd).

## תיקוני פרטיות

### כתובת MAC אקראית

הפצות רבות של לינוקס לשולחן העבודה (Fedora, openSUSE וכו') יגיעו עם [NetworkManager](https://en.wikipedia.org/wiki/NetworkManager), כדי להגדיר הגדרות Ethernet ו-Wi-Fi.

אפשר [לבצע באקראי](https://fedoramagazine.org/randomize-mac-address-nm/) את [כתובת MAC](https://en.wikipedia.org/wiki/MAC_address) בעת שימוש ב-NetworkManager. זה מספק קצת יותר פרטיות ברשתות Wi-Fi מכיוון שהוא מקשה על מעקב אחר מכשירים ספציפיים ברשת שאליה אתה מחובר. זה [**לא**](https://papers.mathyvanhoef.com/wisec2016.pdf) הופך אותך לאנונימי.

אנו ממליצים לשנות את ההגדרה ל-**אקראי** </strong>במקום** יציב**, כפי שהוצע ב[מאמר](https://fedoramagazine.org/randomize-mac-address-nm/).

אם אתה משתמש ב [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components), יהיה עליך להגדיר [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) אשר יאפשר [RFC 7844 (פרופילי אנונימיות עבור לקוחות DHCP)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=).

אין הרבה נקודות בביצוע אקראי של כתובת ה-MAC עבור חיבורי Ethernet, שכן מנהל מערכת יכול למצוא אותך על ידי התבוננות ביציאה שבה אתה משתמש ב-[מתג רשת](https://en.wikipedia.org/wiki/Network_switch). הקצאה אקראית של כתובות Wi-Fi MAC תלויה בתמיכה מהקושחה של ה-Wi-Fi.

### מזהים אחרים

ישנם מזהי מערכת נוספים שתרצו להיזהר מהם. עליך להקדיש לכך מחשבה כדי לראות אם הוא חל על [מצב האיום ](../basics/threat-modeling.md)שלך:

- **שמות מארח:** שם המארח של המערכת שלך משותף עם הרשתות שאליהן אתה מתחבר. עליך להימנע מלכלול מונחים מזהים כמו השם או מערכת ההפעלה שלך בשם המארח שלך, במקום להיצמד למונחים גנריים או מחרוזות אקראיות.
- **שמות משתמש:** באופן דומה, שם המשתמש שלך משמש במגוון דרכים במערכת שלך. שקול להשתמש במונחים גנריים כמו "משתמש" ולא בשמך האמיתי.
- **מזהה מכונה:** במהלך ההתקנה נוצר מזהה מכונה ייחודי ומאוחסן במכשיר שלך. שקול [להגדיר אותו למזהה גנרי](https://madaidans-insecurities.github.io/guides/linux-hardening.html#machine-id).

### ספירת מערכת

פרויקט Fedora [סופר](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting) כמה מערכות ייחודיות ניגשים למראות שלו באמצעות [`countme`](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting#Detailed_Description) משתנה במקום מזהה ייחודי. פדורה עושה זאת כדי לקבוע עומס והספקת שרתים טובים יותר עבור עדכונים במידת הצורך.

[אפשרות](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) זו כבויה כעת כברירת מחדל. אנו ממליצים להוסיף את `countme=false` ל-`/etc/dnf/dnf.conf` למקרה שהוא יופעל בעתיד. במערכות המשתמשות ב-`rpm-ostree` כגון Silverblue, אפשרות ה-countme מושבתת על ידי מיסוך של [rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/) טיימר.

openSUSE משתמשת גם ב[מזהה ייחודי](https://en.opensuse.org/openSUSE:Statistics) כדי לספור מערכות, אותן ניתן להשבית על ידי מחיקת הקובץ `/var/lib/zypp/AnonymousUniqueId`.
