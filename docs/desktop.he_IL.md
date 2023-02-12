---
title: "שולחן עבודה/מחשב אישי"
icon: פשוט/לינוקס
---

הפצות לינוקס מומלצות בדרך כלל להגנה על פרטיות וחופש תוכנה. אם אינך משתמש עדיין בלינוקס, להלן כמה הפצות שאנו מציעים לנסות, כמו גם כמה טיפים כלליים לשיפור פרטיות ואבטחה החלים על הפצות לינוקס רבות.

- [סקירה כללית של אנדרואיד :material-arrow-right-drop-circle:](os/linux-overview.md)

## הפצות מסורתיות

### Fedora Workstation

!!! המלצה

    ![Fedora לוגו](assets/img/linux-desktop/fedora-workstation.svg){ align=right }
    
    ** תחנת העבודה של פדורה ** היא ההפצה המומלצת שלנו לאנשים חדשים ללינוקס. Fedora בדרך כלל מאמצת טכנולוגיות חדשות יותר לפני הפצות אחרות, למשל [Wayland](https://wayland.freedesktop.org/), [PipeWire](https://pipewire.org), ובקרוב [FS-Verity](https://fedoraproject.org/wiki/Changes/FsVerityRPM). טכנולוגיות חדשות אלה מגיעות לעתים קרובות עם שיפורים באבטחה, בפרטיות ובשימושיות באופן כללי.
    
    [:octicons-home-16: Homepage](https://getfedora.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/en-US/docs/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://whatcanidoforfedora.org/){ .card-link title=Contribute }

לFedora יש מהדורת שחרור מתגלגל-למחצה. בעוד כמה חבילות כמו [GNOME](https://www.gnome.org) מוקפאות עד לשחרור הבא של פדורה, רוב החבילות (כולל הקרנל) מתעדכנות לעתים קרובות לאורך תוחלת החיים של השחרור. כל גרסה של פדורה נתמכת למשך שנה אחת, עם גרסה חדשה ששוחררה כל שישה חודשים.

### openSUSE Tumbleweed

!!! המלצה

    ![openSUSE Tumbleweed לוגו](assets/img/linux-desktop/opensuse-tumbleweed.svg){ align=right }
    
    **openSUSE Tumbleweed ** היא הפצת שחרור מתגלגלת יציבה.
    
    ל-openSUSE Tumblewee יש a [transactional update](https://kubic.opensuse.org/blog/2018-04-04-transactionalupdates/) יש מערכת המשתמשת [Btrfs](https://en.wikipedia.org/wiki/Btrfs) ו [Snapper](https://en.opensuse.org/openSUSE:Snapper_Tutorial) כדי להבטיח שניתן יהיה להחזיר תמונות אם תהיה בעיה.
    
    [:octicons-home-16: Homepage](https://get.opensuse.org/tumbleweed/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://doc.opensuse.org/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://shop.opensuse.org/){ .card-link title=Contribute }

Tumbleweed עוקב אחר מודל מהדורה מתגלגל שבו כל עדכון משוחרר כתמונת מצב של ההפצה. בעת שדרוג המערכת, מתבצעת הורדה של תמונת מצב חדשה. כל תמונת מצב מנוהלת באמצעות סדרה של בדיקות אוטומטיות על ידי [openQA](https://openqa.opensuse.org) כדי להבטיח את איכותה.

### Arch Linux

!!! recommendation

    ![Arch לוגו](assets/img/linux-desktop/archlinux.svg){ align=right }
    
    **Arch Linux** הוא הפצה קלה של עשה זאת בעצמך (DIY) שמשמעותה שאתה מקבל רק את מה שאתה מתקין. לקבלת מידע נוסף, עיין ב[FAQ](https://wiki.archlinux.org/title/Frequently_asked_questions).
    
    [:octicons-home-16: Homepage](https://archlinux.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.archlinux.org/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://archlinux.org/donate/){ .card-link title=Contribute }

ל - Arch Linux יש מחזור שחרור מתגלגל. אין לוח זמנים שחרור קבוע וחבילות מתעדכנות לעתים קרובות מאוד.

להיות התפלגות DIY, אתה [צפוי להגדיר ולתחזק](os/linux-overview.md#arch-based-distributions) המערכת שלך בעצמך. יש Arch [מתקין רשמי](https://wiki.archlinux.org/title/Archinstall) כדי להפוך את תהליך ההתקנה קצת יותר קל.

חלק גדול מהחבילות של [ארץ' לינוקס](https://reproducible.archlinux.org) הן [לשחזור](https://reproducible-builds.org).

## הפצות בלתי ניתנות לשינוי

### Fedora Silverblue

!!! recommendation

    ![Fedora Silverblue לוגו](assets/img/linux-desktop/fedora-silverblue.svg){ align=right }
    
    **Fedora Silverblue *** ו -** Fedora Kinoite ** הם גרסאות בלתי ניתנות לשינוי של Fedora עם מיקוד חזק בזרימות עבודה של קונטיינרים. Silverblue מגיע עם [GNOME](https://www.gnome.org/) desktop environment while Kinoite [KDE](https://kde.org/). Silverblue ו - Kinoite מצייתות לאותו לוח זמנים של הפצה כמו Fedora Workstation, ומרוויחות מאותם עדכונים מהירים ונשארות קרובות מאוד לזרם.
    
    [:octicons-home-16: Homepage](https://silverblue.fedoraproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/en-US/fedora-silverblue/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://whatcanidoforfedora.org/){ .card-link title=Contribute }

Silverblue (ו Kinoite) שונים מ Fedora Workstation כפי שהם מחליפים את [מנהל חבילת DNF](https://fedoraproject.org/wiki/DNF) עם אלטרנטיבה מתקדמת הרבה יותר בשם [`rpm-ostree`](https://docs.fedoraproject.org/en-US/fedora/rawhide/system-administrators-guide/package-management/rpm-ostree/). מנהל החבילות `rpm - ostree` עובד על ידי הורדת תמונת בסיס עבור המערכת, ולאחר מכן שכבת חבילות מעליה ב [git](https://en.wikipedia.org/wiki/Git)- כמו להתחייב עץ. כאשר המערכת מתעדכנת, מורידים תמונת בסיס חדשה ושכבות העל יוחלו על תמונה חדשה זו.

לאחר השלמת העדכון, תאתחל מחדש את המערכת לפריסה החדשה. `rpm - ostree` שומר שתי פריסות של המערכת, כך שתוכל בקלות לחזור לאחור אם משהו נשבר בפריסה החדשה. יש גם אפשרות להצמיד יותר פריסות לפי הצורך.

[Flatpak](https://www.flatpak.org) היא שיטת התקנת החבילה העיקרית בהפצות אלה, מכיוון ש-`rpm-ostree` נועדה רק לכיסוי חבילות שאינן יכולות להישאר בתוך מיכל על גבי תמונת הבסיס.

כחלופה Flatpaks, יש את האפשרות של[Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/) כדי ליצור [Podman](https://podman.io) עם ספריית בית משותפת עם מערכת ההפעלה המארח לחקות סביבת פדורה מסורתית, המהווה [תכונה שימושית](https://containertoolbx.org) עבור מפתח הבחנה.

### NixOS

!!! recommendation

    ![NixOS logo](assets/img/linux-desktop/nixos.svg){ align=right }
    
    NixOS היא הפצה עצמאית המבוססת על מנהל החבילות של Nix ומתמקדת בשחזור ואמינות.
    
    [:octicons-home-16: Homepage](https://nixos.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://nixos.org/learn.html){ .card-link title=Documentation}
    [:octicons-heart-16:](https://nixos.org/donate.html){ .card-link title=Contribute }

מנהל החבילות של NixOS שומר כל גרסה של כל חבילה בתיקיה אחרת בחנות **Nix store**. בשל כך אתה יכול לקבל גירסאות שונות של אותה חבילה מותקנת על המערכת שלך. לאחר שתוכן החבילה נכתב לתיקייה, התיקייה נעשית לקריאה בלבד.

NixOS מספקת גם עדכונים אטומיים; תחילה היא מורידה (או בונה) את החבילות והקבצים עבור דור המערכת החדש ולאחר מכן עוברת אליו. ישנן דרכים שונות לעבור לדור חדש; באפשרותך להורות ל - NixOS להפעיל אותו לאחר אתחול מחדש או לעבור אליו בזמן ריצה. אתה יכול גם *לבדוק* הדור החדש על ידי מעבר אליו בזמן ריצה, אבל לא הגדרת אותו כמו הדור הנוכחי של המערכת. אם משהו בתהליך העדכון נשבר, אתה יכול פשוט לאתחל באופן אוטומטי ולחזור לגירסה עובדת של המערכת שלך.

Nix מנהל החבילות משתמש בשפה פונקציונלית טהורה - הנקראת גם Nix - כדי להגדיר חבילות.

[Nixpkgs](https://github.com/nixos/nixpkgs)(המקור העיקרי של חבילות) נמצאים במאגר אחד של GitHub. אתה יכול גם להגדיר חבילות משלך באותה שפה ולאחר מכן בקלות לכלול אותם בתצורה שלך.

Nix הוא מנהל חבילות מבוסס מקור; אם אין מוכן מראש זמין במטמון הבינארי, ניקס פשוט יבנה את החבילה מהמקור באמצעות ההגדרה שלו. הוא בונה כל חבילה בסביבה *טהורה* בארגז חול, שאינה תלויה ככל האפשר במערכת המארחת, ובכך הופכת את הקבצים הבינאריים לניתנים לשחזור.

## הפצות ממוקדות אנונימיות

### Whonix

!!! המלצה

    ![Whonix logo](assets/img/linux-desktop/whonix.svg){ align=right }
    
    ** Whonix ** מבוסס על [Kicksecure](https://www.whonix.org/wiki/Kicksecure), מזלג ממוקד אבטחה של דביאן. מטרתו לספק פרטיות, אבטחה ואנונימיות באינטרנט. כדאי להשתמש ב - Whonix בשילוב עם [Qubes OS](# qubes- os).
    
    [:octicons-home-16: Homepage](https://www.whonix.org/){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://www.dds6qkxpwdeubwucdiaord2xgbbeyds25rbsgr73tbfpqpt4a6vjwsyd.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://www.whonix.org/wiki/Documentation){ .card-link title=Documentation}
    [:octicons-heart-16:](https://www.whonix.org/wiki/Donate){ .card-link title=Contribute }

Whonix אמור לפעול כמו שתי מכונות וירטואליות: "תחנת עבודה" ו "שער" Tor כל התקשורת מתחנת העבודה חייבת לעבור דרך שער טור. משמעות הדבר היא כי גם אם תחנת העבודה נפגעת על ידי תוכנות זדוניות מסוג כלשהו, כתובת ה - IP האמיתית נשארת מוסתרת.

חלק מהתכונות כוללות בידוד Tor Stream, אנונימיזציה של [הקשות](https://www.whonix.org/wiki/Keystroke_Deanonymization#Kloak), [החלפה מוצפנת](https://github.com/Whonix/swap-file-creator), והקצאת זיכרון מוקשה.

גירסאות עתידיות של Whonix יכללו ככל הנראה [מדיניות AppArmor מערכת מלאה](https://github.com/Whonix/apparmor-profile-everything) ו [משגר יישום ארגז חול](https://www.whonix.org/wiki/Sandbox-app-launcher) כדי להגביל באופן מלא את כל התהליכים במערכת.

Whonix הוא הטוב ביותר בשימוש [בשילוב עם Qubes](https://www.whonix.org/wiki/Qubes/Why_use_Qubes_over_other_Virtualizers), Qubes - Whonix יש [חסרונות שונים](https://forums.whonix.org/t/qubes-whonix-security-disadvantages-help-wanted/8581) בהשוואה hypervisors אחרים.

### Tails

!!! המלצה

    ![Tails לוגו](assets/img/linux-desktop/tails.svg){ align=right }
    
    **Tails ** היא מערכת הפעלה חיה המבוססת על דביאן המנתבת את כל התקשורת דרך Tor, שיכולה לאתחל כמעט כל מחשב מ - DVD, מקל USB או התקנת כרטיס SD. הוא משתמש ב - [Tor](tor.md) כדי לשמור על פרטיות ואנונימיות תוך עקיפת הצנזורה, והוא אינו מותיר עקבות של עצמו במחשב שבו הוא נמצא בשימוש לאחר שהוא כבוי.
    
    [:octicons-home-16: Homepage](https://tails.boum.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://tails.boum.org/doc/index.en.html){ .card-link title=Documentation}
    [:octicons-heart-16:](https://tails.boum.org/donate/){ .card-link title=Contribute }

Tails הוא נהדר עבור זיהוי פלילי נגדי עקב אמנזיה (כלומר שום דבר לא נכתב לדיסק); עם זאת, זו אינה התפלגות קשוחה כמו ווניקס. היא חסרה תכונות אנונימיות ואבטחה רבות שיש ל - Whonix ומתעדכנת בתדירות נמוכה בהרבה (רק אחת לשישה שבועות). מערכת Tails כי הוא נפגע על ידי תוכנות זדוניות עשוי לעקוף את פרוקסי שקוף המאפשר למשתמש להיות deanonymized.

Tailsכולל[uBlock Origin](desktop-browsers.md#ublock-origin) בדפדפן Tor כברירת מחדל, מה שעשוי להקל על יריבים למשתמשים בזנבות טביעות אצבע. [Whonix](desktop.md#whonix) מכונות וירטואליות עשויות להיות יותר חסינות מפני דליפות, אך הן אינן אמנזיה, כלומר ניתן לשחזר נתונים ממכשיר האחסון שלך.

על ידי עיצוב, Tails נועד לאפס את עצמו לחלוטין לאחר כל אתחול מחדש. ניתן להגדיר [אחסון קבוע](https://tails.boum.org/doc/first_steps/persistence/index.en.html) מוצפן כדי לאחסן נתונים מסוימים בין אתחולים מחדש.

## הפצות ממוקדות אבטחה

### Qubes OS

!!! המלצה

    ![לוגו של מערכת ההפעלה Qubes ]( assets/img/qubes/qubes_os.svg){ align=right }
    
    ** מערכת ההפעלה Qubes ** היא מערכת הפעלה בקוד פתוח שנועדה לספק אבטחה חזקה למחשוב שולחני. Qubes מבוססת על Xen, מערכת החלונות X ולינוקס, ויכולה להריץ את רוב יישומי לינוקס ולהשתמש ברוב מנהלי ההתקן של לינוקס.
    
    [:octicons-home-16: Homepage](https://www.qubes-os.org/){ .md-button .md-button--primary }
    [:material-arrow-right-drop-circle: Overview](os/qubes-overview.md){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://qubesosfasa4zl44o4tws22di6kepyzfeqv3tg4e3ztknltfxqrymdad.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://www.qubes-os.org/privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://www.qubes-os.org/doc/){ .card-link title=תיעוד }
    [:octicons-code-16:](https://github.com/QubesOS/){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://www.qubes-os.org/donate/){ .card-link title=לתרומה }

Qubes OS היא מערכת הפעלה מבוססת Xen שנועדה לספק אבטחה חזקה למחשוב שולחני באמצעות מכונות וירטואליות מאובטחות (VMs), הידוע גם בשם *Qubes*.

מערכת ההפעלה Qubes מאבטחת את המחשב על ידי בידוד תת - מערכות (למשל, רשת, USB וכו ') ויישומים ב - VMs נפרדים. אם חלק אחד של המערכת נפגע, הבידוד הנוסף עשוי להגן על שאר המערכת. לפרטים נוספים ראו Qubes [FAQ](https://www.qubes-os.org/faq/).
