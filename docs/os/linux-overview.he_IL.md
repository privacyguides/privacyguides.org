---
title: סקירת לינוקס
icon: simple/linux
---

לעתים קרובות מאמינים כי תוכנת [קוד פתוח](https://en.wikipedia.org/wiki/Open-source_software) היא מאובטחת לחלוטין כי קוד המקור זמין. יש ציפייה שאימות קהילתי מתרחש באופן קבוע. עם זאת, זה לא תמיד [במקרה](https://seirdy.one/posts/2022/02/02/floss-security/). הוא תלוי במספר גורמים, כגון פעילות בפרויקט, ניסיון במפתחים, רמת ההקפדה החלה על [ביקורות קוד](https://en.wikipedia.org/wiki/Code_review), ותדירות תשומת הלב הניתנת לחלקים ספציפיים של [בסיס קוד](https://en.wikipedia.org/wiki/Codebase) העשויים לעבור ללא מגע במשך שנים.

נכון לעכשיו, למחשב שולחני GNU/Linux יש כמה אזורים שניתן לשפר כאשר משווים אותם למקביליהם הקנייניים, למשל:

- שרשרת אתחול מאומתת, כמו זו של אפל [אתחול מאובטח](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) (with [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)), Android’s [Verified Boot](https://source.android.com/security/verifiedboot), ChromeOS' [אתחול מאומת](https://www.chromium.org/chromium-os/chromiumos-design-docs/security-overview/#verified-boot), או מייקרוסופט ווינדוס [boot process](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) with [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). תכונות וטכנולוגיות חומרה אלה יכולות לסייע במניעת חבלה מתמשכת על ידי תוכנה זדונית או [תקיפות של עוזרת בית מרושעת](https://en.wikipedia.org/wiki/Evil_Maid_attack)
- פתרון ארגז חול חזק כמו זה שנמצא ב[macOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md), ו- [Android](https://source.android.com/security/app-sandbox). פתרונות ארגז חול נפוצים של לינוקס כגון [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) ו- [Firejail](https://firejail.wordpress.com/) עדיין יש דרך ארוכה לפניו
- חזק [ניצול ההקלות](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

למרות חסרונות אלה, הפצות GNU/Linux שולחניות הן נהדרות אם ברצונך:

- להימנע מטלמטריה כי לעתים קרובות מגיע עם מערכות הפעלה קנייניות
- לשמור על [חופש תוכנה](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
- יש מערכות ממוקדות פרטיות כגון [Whonix](https://www.whonix.org) או [Tails](https://tails.boum.org/)

האתר שלנו משתמש בדרך כלל במונח "לינוקס" כדי לתאר הפצות שולחן עבודה/GNU/Linux. מערכות הפעלה אחרות המשתמשות גם הן בליבת לינוקס כגון ChromeOS ‏, Android ו - Qubes OS אינן נדונות כאן.

[המלצות לינוקס שלנו :material-arrow-right-drop-circle:](../desktop.md ""){.md-button}

## בחירת ההפצה שלך

לא כל ההפצות של לינוקס נוצרו שוות. בעוד שדף ההמלצות שלנו ללינוקס לא נועד להיות מקור סמכותי באיזו הפצה מומלצת בשבילך, יש כמה דברים שכדאי לזכור כשאתה בוחר באיזו הפצה להשתמש.

### מחזור שחרור

אנו ממליצים בחום לבחור בהפצות הנשארות קרובות למהדורות התוכנה היציבות במעלה הזרם, המכונות לעתים קרובות "הפצות שחרור מתגלגלות ". הסיבה לכך היא שהפצות מחזור הפצה קפואות לעתים קרובות אינן מעדכנות גרסאות חבילה ומפגרות בעדכוני אבטחה.

עבור הפצות קפואות כמו [דביאן](https://www.debian.org/security/faq#handling), מתחזקי החבילות צפויים לבצע תיקונים ב-backport כדי לתקן פגיעויות במקום להקפיץ את התוכנה ל"גרסה הבאה" ששוחררה על ידי המפתח במעלה הזרם. תיקוני אבטחה מסוימים [לא מקבלים](https://arxiv.org/abs/2105.14565) CVE [](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (בדרך כלל תוכנה פחות פופולרית) ולכן לא נכנסים להפצה עם מודל תיקון זה. כתוצאה מכך, לפעמים תיקוני אבטחה קלים מתעכבים עד לעדכון הגדול הבא.

איננו מאמינים שעיכוב חבילות והחלת תיקוני ביניים הוא רעיון טוב, מכיוון שהוא סוטה מהאופן שבו המפתח אולי התכוון שהתוכנה תעבוד. ל [Richard Brown](https://rootco.de/aboutme/) יש מצגת על נושא זה:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/i8c0mg_mS7U" title="מהדורות רגילות הן שגויות, התגלגלו על החיים שלכם" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### עדכונים מסורתיים לעומת עדכונים אטומיים

באופן מסורתי, הפצות לינוקס מתעדכנות על ידי עדכון סדרתי של החבילות הרצויות. עדכונים מסורתיים כגון אלה המשמשים ב - Fedora, ב - Arch Linux ובהפצות המבוססות על Debian יכולים להיות פחות אמינים אם מתרחשת שגיאה בעת העדכון.

התפלגויות עדכון אטומיות חלות על עדכונים במלואם או כלל לא. בדרך כלל, מערכות עדכון טרנזקציות הן גם אטומיות.

מערכת עדכון טרנזקציות יוצרת תמונה שנוצרת לפני ואחרי החלת עדכון. אם עדכון נכשל בכל עת (אולי בגלל הפסקת חשמל), ניתן לגלגל את העדכון בקלות חזרה למצב "ידוע אחרון. "

שיטת העדכון האטומי משמשת להתפלגויות בלתי ניתנות לשינוי כמו Silverblue, Tumbleweed ו- NixOS ויכולה להשיג אמינות עם מודל זה. [Adam Šamalík](https://twitter.com/adsamalik) סיפק מצגת על איך`rpm-ostree` עובד עם Silverblue:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-hpV5l-gJnQ" title="בואו ננסה פדורה Silverblue - מערכת הפעלה שולחנית בלתי ניתנת לשינוי! - אדם שמאליק (Adam Šamalik)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### הפצות "ממוקדות אבטחה"

לעיתים קרובות קיים בלבול בין הפצות "ממוקדות אבטחה" לבין הפצות "פנטסטינג ". חיפוש מהיר של "ההפצה המאובטחת ביותר של לינוקס" ייתן לעתים קרובות תוצאות כמו Kali Linux, Black Arch ו - Parrot OS. הפצות אלה הן הפצות בדיקת חדירה התקפית כי צרור הכלים לבדיקת מערכות אחרות. הם לא כוללים "אבטחה נוספת" או הקלות הגנתיות המיועדות לשימוש קבוע.

### הפצות מבוססות Arch Linux

הפצות מבוססות (Arch) ארצ' אינה מומלצת עבור אלה שחדשים ללינוקס, (ללא קשר לחלוקה) כפי שהם דורשים [תחזוק מערכת](https://wiki.archlinux.org/title/System_maintenance) קבועה. ל ארצ' (Arch) אין מנגנון עדכון הפצה עבור בחירות התוכנה הבסיסיות. כתוצאה מכך, עליכם להישאר מודעים למגמות הנוכחיות ולאמץ טכנולוגיות תוך כדי שהם מחליפים פרקטיקות ישנות יותר בעצמכם.

עבור מערכת מאובטחת, אתה צפוי להיות גם בעל ידע מספיק בלינוקס כדי להגדיר כראוי אבטחה עבור המערכת שלהם כגון אימוץ [מערכת בקרת גישה חובה](https://en.wikipedia.org/wiki/Mandatory_access_control), הגדרת [ליבות מודול](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security) רשימות שחורות, התקשות פרמטרים אתחול, מניפולציה [סיסקטל](https://en.wikipedia.org/wiki/Sysctl) פרמטרים, ולדעת אילו רכיבים הם צריכים כגון [Polkit](https://en.wikipedia.org/wiki/Polkit).

כל מי שמשתמש [Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **חייב** להיות מורגלבביקורת על PKGBUILDs שהם מתקינים משירות זה. חבילות AUR הן תוכן המיוצר על ידי הקהילה ואינן נבדקות בשום צורה, ולכן הן פגיעות להתקפות שרשרת אספקת תוכנה, [מה שאכן קרה בעבר](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). תמיד יש להשתמש בAUR במשורה ולעתים קרובות יש הרבה עצות רעות בדפים שונים אשר מכוונים אנשים להשתמש באופן עיוור ב [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) ללא אזהרה מספקת. אזהרות דומות חלות על שימוש בארכיוני חבילות אישיות של צד שלישי (PPA) על הפצות מבוססות דביאן או על פרויקטים קהילתיים (COPR) ב - Fedora.

אם אתה מנוסה ב - לינוקס וברצונך להשתמש בהפצה המבוססת על Arch, אנו ממליצים רק על לינוקס של Arch Mainline, ולא על אף אחת מהנגזרות שלה. אנו ממליצים נגד שני נגזרי (Arch) ארצ' אלה באופן ספציפי:

- **Manjaro**: הפצה זו מעכבת חבילות למשך שבועיים כדי לוודא שהשינויים שלהן לא יישברו, ולא כדי לוודא שמעלה הזרם יציב. כאשר חבילות AUR משומשות, הם בנויים לעתים קרובות נגד [הספריות האחרונות](https://en.wikipedia.org/wiki/Library_(computing)) מן המאגרים של ARCH.
- **Garuda**: They use [Chaotic-AUR](https://aur.chaotic.cx/) אשר באופן אוטומטי ועיוור מקמפל חבילות מה- AUR. אין תהליך אימות כדי לוודא שחבילות ה - AUR לא סובלות מהתקפות שרשרת האספקה.

### Kicksecure

אמנם אנו ממליצים בחום נגד שימוש בהפצות מיושנות כמו דביאן, אך קיימת מערכת הפעלה מבוססת דביאן שהוקשחה כדי להיות הרבה יותר מאובטחת מהפצות לינוקס טיפוסיות: [Kicksecure](https://www.kicksecure.com/). Kicksecure, במונחים פשוטים מדי, היא מערכת של תסריטים, תצורות וחבילות שמקטינות באופן משמעותי את שטח ההתקפה של דביאן. הוא מכסה הרבה פרטיות והמלצות הקשחה כברירת מחדל.

### ליבת לינוקס והפצות "ליברה"

אנו ממליצים בחום על **נגד** השימוש בליבת לינוקס-ליברה, שכן הוא [מסיר הקלות אבטחה](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) ו [העלמת אזהרות ליבה](https://news.ycombinator.com/item?id=29674846) על מיקרו-קוד פגיע מסיבות אידיאולוגיות.

## המלצות כלליות

### הצפנת כונן

ברוב הפצות הלינוקס קיימת אפשרות בתוך המתקין שלה להפעלת [LUKS](../encryption.md#linux-unified-key-setup) FDE. אם אפשרות זו אינה מוגדרת בזמן ההתקנה, יהיה עליך לגבות את הנתונים שלך ולהתקין אותם מחדש, שכן ההצפנה מוחלת לאחר מחיצת דיסק [](https://en.wikipedia.org/wiki/Disk_partitioning), אך לפני שמערכות קבצים [](https://en.wikipedia.org/wiki/File_system) מעוצבים. אנו מציעים גם למחוק את מתקן האחסון שלך באופן מאובטח:

- [מחיקת נתונים מאובטחת :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/05/25/secure-data-erasure/)

### החלף

שקול להשתמש [ ב ZRAM ](https://wiki.archlinux.org/title/Swap#zram-generator) או [החלפה מוצפנת](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption)במקום החלפה לא מוצפנת כדי למנוע בעיות אבטחה פוטנציאליות עם נתונים רגישים שנדחפים אל [שטח החלפה](https://en.wikipedia.org/wiki/Memory_paging). נגזרות פדורה [משתמשים ב ZRAM כברירת מחדל](https://fedoraproject.org/wiki/Changes/SwapOnZRAM).

### ויילנד (Wayland)

אנו ממליצים להשתמש בסביבת שולחן עבודה התומכת בפרוטוקול התצוגה [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) כפי שהוא פותח עם אבטחה [בראש](https://lwn.net/Articles/589147/). קודמו, [X11](https://en.wikipedia.org/wiki/X_Window_System), אינו תומך בבידוד ממשק המשתמש, ומאפשר לכל החלונות להקליט [מסכים, להתחבר ולהזריק קלטים בחלונות אחרים](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation.html), מה שהופך כל ניסיון של ארגז חול לחסר תועלת. אמנם יש אפשרויות לעשות X11 מקונן כגון [אקספרה](https://en.wikipedia.org/wiki/Xpra) או [סייפר ](https://en.wikipedia.org/wiki/Xephyr), לעתים קרובות הם מגיעים עם השלכות ביצועים שליליות ואינם נוחים להקמה ואינם עדיפים על פני Wayland.

למרבה המזל, סביבות נפוצות כגון [GNOME](https://www.gnome.org), [KDE](https://kde.org)ומנהל החלונות [Sway](https://swaywm.org) תומכים ב - Wayland. הפצות מסוימות כמו פדורה ו-Tumbleweed משתמשות בו כברירת מחדל, ואחרות עשויות לעשות זאת בעתיד מכיוון ש-X11 נמצא ב-[מצב תחזוקה קשה](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly). אם אתה משתמש באחת מסביבות אלה, זה קל כמו לבחור את ההפעלה "Wayland" במנהל התצוגה של שולחן העבודה ([GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager), [SDDM](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager)).

אנו ממליצים **נגד** השימוש באמצעות סביבות שולחן עבודה או מנהלי חלונות שאין להם תמיכה ב - Wayland, כגון Cinnamon (ברירת מחדל ב - Linux Mint), Pantheon (ברירת מחדל ב - Elementary OS), MATE, Xfce ו - i3.

### קושחה קניינית (עדכוני מיקרוקוד)

הפצת לינוקס כמו אלה[לינוקס-ליברה](https://en.wikipedia.org/wiki/Linux-libre) או DIY (Arch Linux) לא מגיעים עם התאמת [מיקרוקוד](https://en.wikipedia.org/wiki/Microcode) עדכונים שלעתים קרובות מתקנים פגיעויות. כמה דוגמאות בולטות לפגיעויות אלה כוללות [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)), [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)), ועוד [hardware vulnerabilities](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html).

אנו ממליצים בחום **** שתתקין את עדכוני המיקרו - קוד, שכן המעבד שלך כבר מפעיל את המיקרו - קוד המותאם מהמפעל. פדורה ו - openSUSE שתיהן כוללות את עדכוני המיקרו - קוד המיושמים כברירת מחדל.

### עדכונים

רוב ההפצות של לינוקס יתקינו באופן אוטומטי עדכונים או יזכירו לך לעשות זאת. חשוב לשמור על מערכת ההפעלה שלך מעודכנת כך שהתוכנה שלך תתוקן כאשר תימצא פגיעות.

הפצות מסוימות (במיוחד אלה המכוונות למשתמשים מתקדמים) הן חשופות יותר ומצפות ממך לעשות דברים בעצמך (למשל אר'ץ או דביאן). אלה יחייבו הפעלת "מנהל החבילות" (`apt`, `pacman`, `dnf`וכו ') באופן ידני על מנת לקבל עדכוני אבטחה חשובים.

בנוסף, חלק מההפצות לא יורידו עדכוני קושחה באופן אוטומטי. בשביל זה אתה תצטרך להוריד [`fwupd`](https://wiki.archlinux.org/title/Fwupd).

## שינויי פרטיות

### הקצאה אקראית של כתובת MAC

הפצות לינוקס שולחניות רבות (Fedora, openSUSE וכו ') יבואו עם [מנהל רשת](https://en.wikipedia.org/wiki/NetworkManager), כדי להגדיר הגדרות אינטרנט ו -אינטרנט אלחוטי ( Wi-Fi).

ניתן [אקראי](https://fedoramagazine.org/randomize-mac-address-nm/) [כתובת MAC](https://en.wikipedia.org/wiki/MAC_address) בעת שימוש מנהל רשת. זה מספק קצת יותר פרטיות על רשתות Wi - Fi כפי שהוא מקשה לעקוב אחר מכשירים ספציפיים ברשת בה אתה מחובר. זה [**לא**](https://papers.mathyvanhoef.com/wisec2016.pdf) הופך אותך לאנונימי.

אנו ממליצים לשנות את ההגדרה ל-**אקראי** </strong>במקום** יציב**, כפי שהוצע ב[מאמר](https://fedoramagazine.org/randomize-mac-address-nm/).

אם אתה משתמש ב [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components), יהיה עליך להגדיר [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) אשר יאפשר [RFC 7844 (Anonymity Profiles for DHCP Clients)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=).

אין הרבה נקודות בהפיכת כתובת ה - MAC לאקראית עבור חיבורי אינטרנט כמנהל מערכת יכול למצוא אותך על ידי התבוננות ביציאה שבה אתה משתמש ב - [מתג רשת](https://en.wikipedia.org/wiki/Network_switch). הקצאה אקראית של כתובות Wi - Fi MAC תלויה בתמיכה מהקושחה של ה - Wi - Fi.

### מזהים אחרים

ישנם מזהי מערכת אחרים שייתכן שתרצה להיזהר מהם. עליך להקדיש לכך מחשבה כדי לראות אם הוא חל על [מצב האיום ](../basics/threat-modeling.md)שלך:

- **שמות מארחים:** שם המארח של המערכת שלך משותף עם הרשתות שאליהן אתה מתחבר. עליך להימנע ממונחים מזוהים כגון שמך או מערכת ההפעלה בשם המארח שלך, במקום להיצמד למונחים כלליים או למחרוזות אקראיות.
- **שמות משתמשים:** באופן דומה, שם המשתמש שלך משמש במגוון דרכים ברחבי המערכת שלך. שקול להשתמש במונחים כלליים כגון "משתמש" ולא בשמך האמיתי.
- **מזהה מכונה:**: במהלך ההתקנה נוצר מספר זיהוי ייחודי של המכונה והוא מאוחסן במכשיר שלך. שקול [הגדרתו למזהה גנרי](https://madaidans-insecurities.github.io/guides/linux-hardening.html#machine-id).

### ספירת מערכות

פרוייקט פדורה [ סופר ](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting)כמה מערכות ייחודיות ניגשות ל [`countme`](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting#Detailed_Description) שלה באמצעות משתנה במקום מזהה ייחודי. פדורה עושה זאת כדי לקבוע טעינה ואספקה של שרתים טובים יותר לעדכונים במידת הצורך.

אפשרות [זו](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) מושבתת כרגע כברירת מחדל. אנו ממליצים להוסיף `countme=false` to `/etc/dnf/dnf.conf` רק למקרה שהוא יופעל בעתיד. על מערכות המשתמשות `rpm-ostree` לדוגמא Silverblue,האפשרות countme מושבתת על-ידי מיסוך [rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/) טיימר.

openSUSE משתמש גם ב [מזהה ייחודי](https://en.opensuse.org/openSUSE:Statistics) לספירת מערכות, אשר ניתן להשבית על ידי מחיקת הקובץ `/var/lib/zypp/AnonymousUniqueId`.
