---
title: "帳號創建"
icon: 'material/account-plus'
description: Creating accounts online is practically an internet necessity, take these steps to make sure you stay private.
---

人們經常不假思索地註冊網路服務。 也許這是一個流媒體服務，所以你可以觀看每個人都在談論的新節目，或者是一個為你最喜歡的快餐店提供折扣的帳戶。 無論在什麼樣的場景，您都應該考慮現在和以後對數據的影響。

當你每刺蝟了一個新的服務創建帳號時，都有相關的風險。 數據洩露；向第三方披露客戶信息；員工有不當的權限可以訪問所有數據；所有這些都是在提供您的信息時必須考慮的可能性。 您需要確信您可以信任該服務，這就是為什麼我們建議只在最成熟且經過測試的產品上儲存有價值的資料。 這通常意味著提供 E2EE 並經過加密審計的服務。 審計增加了產品設計的保證，而不是由缺乏經驗的開發人員引起的明顯的安全問題。

It can also be difficult to delete the accounts on some services. Sometimes [overwriting data](account-deletion.md#overwriting-account-information) associated with an account can be possible, but in other cases the service will keep an entire history of changes to the account.

## Terms of Service & Privacy Policy

服務條款是您在使用服務時同意遵守的規則。 With larger services these rules are often enforced by automated systems. Sometimes these automated systems can make mistakes. 例如，您可能會因為使用 VPN 或 VOIP 號碼而被禁止或鎖定某些服務的帳戶。 對這種禁令提出上訴通常很困難，而且通常都由系統自動處理而不是人工審核，造成了上訴的困難度。 這也是我們不建議使用 Gmail 作為電子郵件的原因之一。 電子郵件對於訪問您可能註冊的其他服務至關重要。

隱私權政策是該服務表示他們將如何使用您的數據，因此值得閱讀，以便您了解如何使用您的數據。 公司或組織可能沒有法律義務遵守政策中包含的所有內容（取決於司法管轄區）。 我們建議您了解當地法律以及這些法律允許供應商收集哪些資訊。

我們建議您尋找特定的術語，例如「資料收集」、「資料分析」、「Cookie」、「廣告」或「第三方」服務。 有時您可以選擇退出資料收集或分享資料，但最好從一開始就選擇尊重您隱私權的服務。

您還要信任該公司或組織會實際遵守自己的隱私政策。

## 身份驗證方式

通常有多種註冊帳戶的方式，每種都有自己的好處和缺點。

### 電子郵件和密碼

建立新帳戶的最常見方式是使用電子郵件地址和密碼。 使用此方法時，您應該使用密碼管理器，並遵循 [關於密碼的最佳做法](passwords-overview.md) 。

!!! tip

    您也可以使用密碼管理器組織其他驗證方式！ 只需新增條目並填寫適當的欄位，即可新增安全問題或備份金鑰等事項的備註。

您自己負責管理您的登入憑證。 為了增加安全性，您可以在帳戶上設置 [MFA](multi-factor-authentication.md) 。

[推薦密碼管理員](../passwords.md ""){.md-button}

#### Email aliases

如果您不想將您的真實電子郵件地址提供給服務，您可以選擇使用別名。 我們在電子郵件服務推薦頁面上更詳細地描述了它們。 基本上，別名服務允許您生成新的電子郵件地址，將所有電子郵件轉發到您的主地址。 這可以幫助防止跨服務跟蹤，並幫助您管理有時會隨註冊過程而來的營銷電子郵件。 這些可以根據它們被發送到的別名自動過濾。

如果服務遭到黑客攻擊，您可能會開始收到網絡釣魚或垃圾郵件到您用於註冊的地址。 為每個服務使用獨特的別名可以幫助確定哪些服務被駭。

[推薦的電子郵件別名服務](../email.md#email-aliasing-services ""){.md-button}

### 單一登入（Single Sign-On）

!!! note

    我們討論的是個人使用的單一登入，而不是企業用戶。

單一登入(SSO) 是一種驗證方法，允許您註冊服務，而無需共享太多信息(如果有的話)。 每當您在註冊表單上看到類似「使用 *提供商名稱*登入」的內容時，它就是 SSO。

When you choose single sign-on in a website, it will prompt your SSO provider login page and after that your account will be connected. Your password won't be shared but some basic information will (you can review it during the login request). This process is needed every time you want to log in to the same account.

主要優勢是：

- **安全性**：沒有涉及 [資料外洩](https://en.wikipedia.org/wiki/Data_breach) 的風險，因為網站沒有儲存您的憑證。
- **易用性**：多個帳戶由單一登入管理。

但也有一些缺陷：

- **隱私權**： SSO供應商將知道您使用的服務。
- **集中化**：如果您的SSO帳戶遭到入侵或您無法登錄，則與其相關的所有其他帳戶都會受到影響。

SSO在您可以從服務之間更深入的整合中受益的情況下尤其有用。 例如，其中一個服務可能為其他服務提供SSO。 我們建議將SSO限制在您需要的地方，並以 [MFA](multi-factor-authentication.md)保護主帳戶。

所有使用 SSO 的服務將與您的 SSO 帳戶一樣安全。 例如，如果您想使用硬件密鑰來保護帳戶，但該服務不支持硬件密鑰，您可以使用硬件密鑰來保護您的SSO帳戶，現在您的所有帳戶上基本上都有硬件MFA。 需要注意的是， 如果你 SSO 帳戶本身的安全性很弱，意味著與該登錄綁定的任何帳戶的安全性也會很弱。

### 電話號碼

我們建議您避免使用需要電話號碼才能註冊的服務。 電話號碼可以在多個服務中識別您的身份，並且根據數據共享協議，這將使您的使用更容易跟蹤，特別是當其中一個服務被洩漏時，因為電話號碼通常是 **不是** 加密的。

如果可以的話，你應該避免透露你的真實電話號碼。 某些服務將允許使用 VOIP 號碼，但這些通常會觸發欺詐偵測系統，導致帳戶被鎖定，因此我們不建議重要帳戶使用此系統。

在許多情況下，您需要提供可以接收短信或電話的號碼，特別是在國際購物時，以防您在邊境審查時的訂單出現問題。 服務通常會使用您的號碼作為驗證方式；不要自作聰明使用假的電話號碼，最後讓自己重要的帳戶被鎖定！

### 使用者名稱與密碼

某些服務允許您在不使用電子郵件地址的情況下註冊，並且只需要您設置用戶名稱和密碼。 當與 VPN 或 Tor 結合時，這些服務可能會提供更高的匿名性。 請記住，對於這類型的帳號，如果你忘記了你的用戶名或密碼，很可能會有**沒有辦法恢復你的帳號**。
