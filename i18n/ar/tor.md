---
title: "شبكة تور"
icon: simple/torproject
description: استر عن ما تتصفحه باستخدام شبكة تور، وهي شبكة آمنة تتجاوز الرقابة.
---

![شعار تور](assets/img/self-contained-networks/tor.svg){ align=right }

شبكة **تور** هي خوادم يديرها متطوِّعون تتيح لك الاتصال بها مجَّانًا وتحسِّن خصوصيتك وأمنك في الإنترنت. ويمكن للأفراد والمؤسسات مشاركة المعلومات عبرها باستخدام «خدمات .onion الخفية»، وذلك دون نهك خصوصيتهم. فكون اتصالات تور صعبة الحظر والتتبع يجعل تور أداةً فعَّالةً لتجاوز الرقابة.

[:octicons-home-16:](https://www.torproject.org){ .card-link title=الصفحة الرئيسة }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="خدمة أَنيِن" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=التوثيق}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="رمز المصدر" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=ساهم }

يعمل تور عن طريق توجيه اتصالاتك عبر خوادم المتطوِّعين، وذلك بدلًا من الاتصال بالموقع الذي تريد مباشرةً. يلبِّس هذا أصل الاتصال، وليس بوسع أي خادم في سبيل الاتصال رؤيته من بدايته لمقصده، مما يعني أن حتى الخوادم المستخدمة للاتصال لا تنتهك مجهوليتك.

[نظرة عامة شاملة عن تور :material-arrow-right-drop-circle:](advanced/tor-overview.md ""){.md-button}

## الاتصال بتور

عندك الكثير من السُّبُل للتتَّصل بشبكة تور من جهازك، وأشيعها **متصفِّح تور**، وهو تشعُّب من فيرفكس مصمَّم للتصفُّح المستور، ويُتاح في أجهزة سطح المكتب ونظام أندرويد. وزيادةً على التطبيقات المذكورة أدناه فهناك أنظمة تشغيل مصمَّمة للتتَّصل بشبكة تور، مثل [وونكس](desktop.md#whonix) في [كيوبس أو‌إس](desktop.md#qubes-os)، وأمانه أأمن متصفِّح تور العاديِّ.

### متصفِّح تور

!!! recommendation

    ![Tor Browser logo](assets/img/browsers/tor.svg){ align=left }
    
    **متصفِّح تور** خير خيار إن أردت المجهولية، فهو يمكِّنك من الاتصال بشبكة تور وجسورها، وفيه إعدادات مبدئية تُضبط حسب مستوى الأمن: *قياسي* و*أأمن* و*أشدُّ أمن*.
    
    [:octicons-home-16: الصفحة الرئيسة](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="خدمة أَنيِن" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=التوثيق }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="رمز المصدر" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=ساهم }
    
    ??? التنزيلات
    
        - [:simple-googleplay: متجر بلاي](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: أندرويد](https://www.torproject.org/download/#android)
        - [:simple-windows11: ويندوز](https://www.torproject.org/download/)
        - [:simple-apple: ماك‌أو‌إس](https://www.torproject.org/download/)
        - [:simple-linux: لينكس](https://www.torproject.org/download/)
        - [:simple-freebsd: فري‌بي‌إس‌دي](https://www.freshports.org/security/tor)

!!! خطر

    لا تثبِّت أيَّ إضافات في متصفِّح تور **أبدًا**، ولا تحرِّر إعدادات ‹about:config›، ويشمل ذلك ما نقترحه في فيرفكس. تميِّزك الإضافات والإعدادات المختلفة عن البقية في شبكة تور، وهذه يسهِّل تبصيم [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting) متصفِّحك.

صمِّم متصفِّح تور لمكافحة التبصيم، أو كشف هويَّتك حسب ضبط متصفِّحك. وزبدة القول أنه عليك **ألا** تعدِّل المتصفِّح خلا [مستويات الأمن](https://tb-manual.torproject.org/security-settings/) المبدئية.

### أُربوت

!!! recommendation

    ![Orbot logo](assets/img/self-contained-networks/orbot.svg){ align=left }
    
    **أربوت** هو شبكة تور افتراضية خاصة للأجهزة الذكية، وما يفعله هو توجيه اتصالاتك من أيِّ تطبيق عبر شبكة تور.
    
    [:octicons-home-16: الصفحة الرئيسة](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="سياسة الخصوصية" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=التوثيق}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="رمز المصدر" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=ساهم }
    
    ??? التنزيلات
    
        - [:simple-googleplay: متجر بلاي](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: آب ستور](https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: جت‌هب](https://github.com/guardianproject/orbot/releases)

إن أردت مقاومة هجمات تحليل الاتصالات فينبغي لك تمكين *عزل عنوان الوجهة* في :material-menu: ← **الإعدادات ** ← **الاتصال**. سوف يستخدم هذا دائرة تور مختلفةً (أي مرحِّلًا وسيطًا وعقدةً مختلفين) لكلِّ نطاق تتصل به.

!!! فائدة «فوائد لنظام أندرويد»

    بإمكان أربوت التوسُّط لتطبيقات معيَّنة حال دعمها توسُّط SOCKS أو HTTP. ويستطيع أيضا توسيط كلِّ اتصالات شبكتك باستخدام شبكة افتراضية خاصَّة [VpnService](https://developer.android.com/reference/android/net/VpnService)، ولك استخدامه مع مفتاح أيقاف الشبكات الافتراضية في :gear: **الإعدادات** ← **الشبكة والإنترنت** ← **الشبكات الافتراضية الخاصة** ← :gear: ← **امنع الاتصالات دون شبكة افتراضية خاصَّة**.
    
    غالبًا ما تجد إصدار أربوت قديمًا في مستودع [إف-درويد](https://guardianproject.info/fdroid) لمشروع جارديَن [ومتجر بلاي](https://play.google.com/store/apps/details?id=org.torproject.android)، فربما من الأفضل أن تنزِّله من [مستودع جت‌هب](https://github.com/guardianproject/orbot/releases) مباشرةً.
    
    كلُّ الإصدارات وُقِّع عليها بنفس التوقيع، لذلك تتوافق.

## المرحِّلات والجسور

### سنوفليك

!!! recommendation

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=left }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=left }
    
    يتيح لك **سنوفليك** أن تساهم بشيء من حيِّز نطاقك في مشروع تور، ويكون ذلك عبر تشغيل «وسيط سنوفليك» ضمن متصفِّحك.
    
    يستطيع من يخضع للرقابة أن يستعمل وسطاء سنوفليك ليتَّصل بشبكة تور. ييسِّر سنوفليك المساهمة في شبكة تور، فلا تحتاج لمعلومات تقنية لتشغِّل مرحِّل تور أو جسرًا له.
    
    [:octicons-home-16: الصفحة الرئيسة](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=التوثيق}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="رمز المصدر" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=ساهم }
    
    ??? التنزيلات
    
    
        - [:simple-firefoxbrowser: فيرفكس](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: كروم](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: وِب](https://snowflake.torproject.org/embed "اترك هذه الصفحة مفتوحةً لتصير وسيط سنوفليك")

??? فائدة «سنوفليك مضمَّن»

    بوسعك تمكين سنوفليك في متصفِّحك بنقر المفتاح أدناه ==وترك الصفحة مفتوحةً==. ويمكنك أيضًا تثبيت سنوفليك إضافةً في متصفِّحك، ولك تشغيله طالما فُتح متصفِّحك، ولكن تنبَّه لأن إضافة إضافات خارجية يزيد المخاطر.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>إن لم يظهر لك التضمين فتيقَّن من أنك لا تحظر الإطار الخارجيَّ من ‹torproject.org›. أو زر [هذه الصفحة](https://snowflake.torproject.org/embed.html).</small>

لا يفيد سنوفليك في تحسين خصوصيتك أبدًا، وليس سبيلًا لاتصال بشبكة تور داخل متصفِّحك. ولكن إن كان اتصالك بالإنترنت لا يخضع لرقابة فتخيَّر تشغيله لتعين من يستعمل شبكات تخضع لها في تحسين خصوصيتهم. ولا تقلق حيال أيِّ صفحات يزورها من يستخدم وسيطك، ﻷن عنوان IP لهم يطابق ذاك التابع لعقدة مخرج تور، لا عقدتك.

إن تشغيل وسيط سنوفليك ليس منذرًا بالخطر، بل أقلُّ خطرًا من تشغيل مرحِّل تور أو جسر له، وهذا ليس بذاك الخطر أصلًا. ولكنه يوسِّط الاتصالات عبر شبكتك، ولعلَّ لهذا تبعات، خاصَّةً إن كانت شبكتك محدودةً. عليك تمعُّن [سبيل عمل سنوفليك](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) قبل أن تقرِّر تشغيل وسيط.
