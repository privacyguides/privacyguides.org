---
title: "הפחתת נתונים ומטא נתונים"
icon: material/tag-remove
---

בעת שיתוף קבצים, הקפד להסיר מטא נתונים משויכים. קבצי תמונה כוללים בדרך כלל [נתוני Exif](https://en.wikipedia.org/wiki/Exif). תמונות לפעמים אפילו כוללות קואורדינטות GPS במטא-נתונים של הקובץ.

## מחשב שולחני

### ExifCleaner

!!! המלצה

    ![ExifCleaner לוגו](assets/img/data-redaction/exifcleaner.svg){ align=right }
    
    **ExifCleaner** היא תוכנה חופשית, אפליקציה גרפית בקוד פתוח המשתמשת ב-[ExifTool](https://exiftool.org) כדי להסיר מטא-נתונים של Exif מתמונות, סרטונים ומסמכי PDF באמצעות ממשק גרירה ושחרור פשוט. הוא תומך בעיבוד אצווה מרובה ליבות ובמצב כהה.
    
    [:octicons-home-16: Homepage](https://exifcleaner.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/szTheory/exifcleaner#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/szTheory/exifcleaner){ .card-link title="Source Code" }
    
    ??? הורדות
    
        - [:simple-windows11: Windows](https://github.com/szTheory/exifcleaner/releases)
        - [:simple-apple: macOS](https://github.com/szTheory/exifcleaner/releases)
        - [:simple-linux: Linux](https://github.com/szTheory/exifcleaner/releases)

### MAT2

!!! המלצה

    ![MAT2 לוגו](assets/img/data-redaction/mat2.svg){ align=right }
    
    ** MAT2 ** היא תוכנה חופשית, המאפשרת להסיר את המטא נתונים מסוגים של תמונות, אודיו, טורנטים ומסמכים. הוא מספק גם כלי שורת פקודה וגם ממשק משתמש גרפי באמצעות [סיומת עבור Nautilus](https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), מנהל הקבצים המוגדר כברירת מחדל של [GNOME](https://www.gnome.org), ו-[Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), מנהל הקבצים המוגדר כברירת מחדל של [KDE](https://kde.org).
    
    בלינוקס, כלי גרפי של צד שלישי [מנקה מטה-נתונים](מנקה https://gitlab.com/rmnvgr/metadata) המופעל על ידי MAT2 קיים והוא [זמין ב- Flathub](https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).
    
    [:octicons-repo-16: מאגר](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=תיעוד}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="קוד מקור" }
    
    ??? הורדות
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## נייד

### ExifEraser (אנדרואיד)

!!! המלצה

    ![לוגו של ExifEraser](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    ** ExifEraser** הוא יישום מודרני למחיקת מטא נתונים של תמונות ללא הרשאה עבור אנדרואיד.
    
    בשלב זה הוא תומך בקבצי JPEG, PNG ו - WebP.
    
    [:octicons-repo-16: Repository](https://github.com/Tommy-Geenexus/exif-eraser){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Tommy-Geenexus/exif-eraser#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title="Source Code" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

המטא - נתונים שנמחקים תלויים בסוג הקובץ של התמונה:

* **JPEG**: פרופיל ICC, Exif, משאבי תמונה בפוטושופ ומטא-נתונים של XMP/ExtendedXMP יימחקו אם הם קיימים.
* **PNG**: פרופיל ICC, מטא נתונים של Exif ו - XMP יימחקו אם הם קיימים.
* **WebP**: פרופיל ICC, מטא נתונים של Exif ו - XMP יימחקו אם הם קיימים.

לאחר עיבוד התמונות, ExifEraser מספק לך דוח מלא על מה בדיוק הוסר מכל תמונה.

האפליקציה מציעה מספר דרכים למחיקת מטא - נתונים מתמונות. כלומר:

* באפשרותך לשתף תמונה מיישום אחר עם ExifEraser.
* דרך האפליקציה עצמה, אתה יכול לבחור תמונה אחת, תמונות מרובות בבת אחת, או אפילו ספריה שלמה.
* הוא כולל אפשרות "מצלמה ", המשתמשת באפליקציית המצלמה של מערכת ההפעלה כדי לצלם תמונה, ולאחר מכן מסירה ממנה את המטא נתונים.
* זה מאפשר לך לגרור תמונות מיישום אחר לתוך ExifEraser כאשר שניהם פתוחים במצב מסך מפוצל.
* לבסוף, הוא מאפשר לך להדביק תמונה מהלוח שלך.

### Metapho (iOS)

!!! המלצה

    ![Metapho logo](assets/img/data-redaction/metapho.jpg){ align=right }
    
    ** Metapho ** הוא צופה פשוט ונקי עבור מטא נתונים של תמונות כגון תאריך, שם קובץ, גודל, מודל מצלמה, מהירות צמצם ומיקום.
    
    [:octicons-home-16: Homepage](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Privacy Policy" }
    
    ??? הורדות
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recommendation

    ![PrivacyBlur logo](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    ** PrivacyBlur** היא אפליקציה חינמית שיכולה לטשטש חלקים רגישים של תמונות לפני שהיא משתפת אותם באינטרנט.
    
    [:octicons-home-16: Homepage](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Source Code" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! warning

    עליך ***לעולם לא*** להשתמש בטשטוש כדי למחוק [טקסט בתמונות]( https://bishopfox.com/blog/unredacter-tool-never-pixelation). אם ברצונך לצנזר טקסט בתמונה, צייר תיבה מעל הטקסט. לשם כך, אנו מציעים אפליקציות כמו [Pocket Paint](https://github.com/Catrobat/Paintroid).

## שורת פקודה

### ExifTool

!!! recommendation

    ![ExifTool logo](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool ** הוא יישום ספריית Perl ושורת הפקודה המקורי לקריאה, כתיבה ועריכה של מידע מטא (Exif, IPTC, XMP ועוד) במגוון רחב של פורמטים של קבצים (JPEG, TIFF, PNG, PDF, RAW ועוד).
    
    זה לעתים קרובות רכיב של יישומי הסרת Exif אחרים והוא ברוב מאגרי ההפצה של לינוקס.
    
    [:octicons-home-16: Homepage](https://exiftool.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://exiftool.org/faq.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title=Contribute }
    
    ??? הורדות
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! דוגמה "מחיקת נתונים מספריית קבצים"

    ```bash
    exiftool -all= *.file_extension
    ```
