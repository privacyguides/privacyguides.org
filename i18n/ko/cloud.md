---
title: "클라우드 스토리지"
icon: material/file-cloud
description: 대부분의 클라우드 스토리지 제공 업체는, 업체가 사용자의 파일을 보지 않을 것이라는 믿음이 필수적입니다. 프라이버시 보호 대체제를 소개합니다!
---

대부분의 클라우드 스토리지 서비스에서, 사용자는 그저 '제공 업체가 사용자의 파일을 함부로 열람하지 않을 것'이라고 전적으로 신뢰해야 할 뿐입니다. 아래에 제시된 대안은 E2EE 보안을 구현하여 '신뢰'의 필요성을 처음부터 제거합니다.

이러한 대안들이 여러분의 요구에 맞지 않는 경우, 다른 클라우드 제공 업체를 [Cryptomator](encryption.md#cryptomator-cloud) 등의 암호화 소프트웨어와 함께 사용할 것을 권장합니다. **어떤** 클라우드 제공 업체든(본 목록 포함), Cryptomator를 함께 사용함으로써 제공 업체의 기본 클라이언트에서 발생할 수 있는 암호화 결함 위험성을 낮출 수 있습니다.

??? question "Nextcloud를 찾고 계신가요?"

    Nextcloud는 자체 호스팅 파일 관리 제품군으로 [권장 목록에 존재](productivity.md)하고 있습니다. 하지만, 현재로서 Privacy Guides는 제3자 Nextcloud 스토리지 제공 업체를 권장하지 않습니다. Nextcloud 내장 E2EE 기능을 일반 사용자에게 [권장하지 않기 때문](https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29)입니다.

## Proton Drive

!!! recommendation

    ![Proton Drive 로고](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive**는 유명한 스위스의 암호화 이메일 서비스 제공 업체인 [Proton Mail](email.md#proton-mail)의 암호화 클라우드 스토리지 서비스입니다.
    
    [:octicons-home-16: 홈페이지](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="프라이버시 정책" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=문서}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="소스 코드" }
    
    ??? downloads "다운로드"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

Proton Drive 웹 어플리케이션은 [2021년에](https://proton.me/blog/security-audit-all-proton-apps) Securitum으로부터 독립적으로 감사를 받았습니다. 세부 내용은 제공되지 않았지만, Securitum 인증서에 따르면 다음과 같습니다:

> 감사자는 중요도가 낮은 취약점을 2개 발견했습니다. 또한, 일반 권장 사항이 5개 보고되었습니다. 동시에, 침투 테스트 중에 중요한 보안 문제가 발견되지 않았음을 확인했습니다.

Proton Drive의 새로운 모바일 클라이언트는 아직 제3자에 의해 공개적으로 감사를 받지 않았습니다.

## Tresorit

!!! recommendation

    ![Tresorit 로고](assets/img/cloud/tresorit.svg){ align=right }
    
    **Tresorit**은 2011년에 설립된 헝가리의 암호화 클라우드 스토리지 제공 업체입니다. Tresorit은 스위스 국영 우편 서비스인 스위스 포스트(스위스 우체국)가 소유하고 있습니다.
    
    [:octicons-home-16: 홈페이지](https://tresorit.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tresorit.com/legal/privacy-policy){ .card-link title="프라이버시 정책" }
    [:octicons-info-16:](https://support.tresorit.com/hc/en-us){ .card-link title=문서}
    
    ??? downloads "다운로드"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id722163232)
        - [:simple-windows11: Windows](https://tresorit.com/download)
        - [:simple-apple: macOS](https://tresorit.com/download)
        - [:simple-linux: Linux](https://tresorit.com/download)

Tresorit은 독립적인 보안 감사를 여러 차례 받았습니다.

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification/): TÜV Rheinland InterCert Kft ISO/IEC 27001:2013[^1] 준수 [인증](https://www.certipedia.com/quality_marks/9108644476)
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security/): Computest 모의 침투 테스트
    - 해당 검토에서는 Tresorit 웹 클라이언트, Android/Windows 앱 및 관련 인프라 보안을 평가했습니다.
    - Computest는 취약점을 2개 발견했으며, 이 취약점은 해결되었습니다.
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture/): Ernst & Young 모의 침투 테스트
    - 해당 검토에서는 Tresorit의 전체 소스 코드를 분석하여, Tresorit [백서](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf)에서 설명한 개념과 구현이 일치하는지 검증했습니다.
    - Ernst & Young은 추가로 웹, 모바일, 데스크톱 클라이언트를 검사했습니다. "검사 결과, Tresorit이 주장하는 데이터 기밀성과 차이가 없는 것으로 나타났습니다."

추가적으로, [스위스 디지털 이니셔티브(Swiss Digital Initiative)](https://www.swiss-digital-initiative.org/digital-trust-label/)의 보안, 프라이버시, 신뢰성 관련 [35개 평가 기준](https://digitaltrust-label.swiss/criteria/)을 통과해야 하는 Digital Trust Label 인증을 받았습니다.

## 평가 기준

**Privacy Guides는 권장 목록의 어떠한 프로젝트와도 제휴를 맺지 않았습니다.** 객관적인 권장 목록을 제공하기 위해, [일반적인 평가 기준](about/criteria.md)에 더해 명확한 요구 사항을 정립하였습니다. 어떠한 프로젝트를 선택해 사용하기 전에, 이러한 요구 사항들을 숙지하고 여러분 스스로 조사하는 과정을 거쳐 적절한 선택을 하시기 바랍니다.

!!! example "이 단락은 최근에 만들어졌습니다"

    Privacy Guides 팀은 사이트의 모든 항목마다 명확한 평가 기준을 정립하는 중이며, 따라서 세부 내용은 변경될 수 있습니다. 평가 기준에 대해서 질문이 있다면 [포럼에서 문의](https://discuss.privacyguides.net/latest)하시기 바랍니다. (무언가가 목록에 존재하지 않다고 해서 권장 목록을 작성할 때 고려한 적이 없을 것으로 단정 짓지 마세요.) 권장 목록에 어떤 프로젝트를 추가할 때 고려하고 논의해야 할 요소는 매우 많으며, 모든 요소를 문서화하는 것은 현재 진행 중인 작업입니다.

### 최소 요구 사항

- 종단 간 암호화가 적용되어야 합니다.
- 테스트용 무료 요금제/체험판 기간을 제공해야 합니다.
- TOTP/FIDO2 다중 요소 인증 혹은 Passkey 로그인을 지원해야 합니다.
- 기본적인 파일 관리 기능을 지원하는 웹 인터페이스를 제공해야 합니다.
- 모든 파일/문서를 쉽게 내보낼 수 있어야 합니다.
- 감사받은 표준 암호화를 사용해야 합니다.

### 우대 사항

평가 기준에서 '우대 사항'은 해당 부문에서 완벽한 프로젝트에 기대하는 바를 나타냅니다. 다음의 우대 사항에 해당하지 않더라도 권장 목록에 포함될 수 있습니다. 단, 우대 사항에 해당할수록 이 페이지의 다른 항목보다 높은 순위를 갖습니다.

- 클라이언트는 오픈 소스여야 합니다.
- 클라이언트는 독립적인 제3자로부터 전체 감사를 받아야 합니다.
- Linux, Android, Windows, macOS, iOS 네이티브 클라이언트를 제공해야 합니다.
    - 클라이언트는 운영체제에서 기본으로 제공하는 클라우드 스토리지 서비스용 툴과 통합되어야 합니다. 예시: iOS '파일' 앱 연동, Android DocumentsProvider 기능 등
- 다른 사용자와의 간편한 파일 공유를 지원해야 합니다.
- 웹 인터페이스에서 최소한 기본적인 파일 미리보기 및 편집 기능을 제공해야 합니다.

[^1]: [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001):2013 준수는 회사의 [정보 보안 관리 시스템](https://en.wikipedia.org/wiki/Information_security_management)과 연관되며 클라우드 서비스의 판매, 개발, 유지 관리 및 지원에 적용됩니다.
