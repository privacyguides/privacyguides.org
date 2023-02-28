---
title: "常見的迷思"
icon: 'material/robot-confused'
---

## 「開源軟體永遠是安全的」或「商業軟體更安全」

這些迷思源於許多偏見，原始碼是否開放以及軟體的許可並不會以任何方式影響其安全性。 開源軟件 *可能* 比商業軟件更安全，但絕對不能保證這一點。當你評估軟體時，你應該根據每個工具的聲譽和安全性進行評估。

Open-source software *can* be audited by third-parties, and is often more transparent about potential vulnerabilities than proprietary counterparts. 它還允許您查看代碼並禁用您發現的任何可疑功能。 然而，*除非你真的這樣做了*，否則不能保證程式碼曾經被評估過，特別是對於較小的軟體項目。 The open development process has also sometimes been exploited to introduce new vulnerabilities into even large projects.[^1]

另一方面，專有軟件不太透明，但這並不意味著它不安全。 主要的專有軟件項目可以由內部和第三方機構進行審計，獨立的安全研究人員仍然可以通過逆向工程等技術發現漏洞。

To avoid biased decisions, it's *vital* that you evaluate the privacy and security standards of the software you use.

## 「信任的轉移可以增加隱私」

在討論 VPN 等解決方案時，我們經常談到「轉移信任」 （將您對 ISP 的信任轉移到 VPN 提供商）。 雖然這可以保護您的瀏覽數據免受 *特定* ISP 的侵害，但您選擇的 VPN 提供商仍然可以訪問您的瀏覽數據：您的數據並非完全受到各方的保護。 這意味著：

1. You must exercise caution when choosing a provider to shift trust to.
2. You should still use other techniques, like E2EE, to protect your data completely. Merely distrusting one provider to trust another is not securing your data.

## "Privacy-focused solutions are inherently trustworthy"

Focusing solely on the privacy policies and marketing of a tool or provider can blind you to its weaknesses. 當您正在尋找更私密的解決方案時，您應該確定潛在的問題是什麼，並找到該問題的技術解決方案。 For example, you may want to avoid Google Drive, which gives Google access to all of your data. The underlying problem in this case is lack of E2EE, so you should make sure that the provider you switch to actually implements E2EE, or use a tool (like [Cryptomator](../encryption.md#cryptomator-cloud)) which provides E2EE on any cloud provider. Switching to a "privacy-focused" provider (that doesn't implement E2EE) doesn't solve your problem: it just shifts trust from Google to that provider.

The privacy policies and business practices of providers you choose are very important, but should be considered secondary to technical guarantees of your privacy: You shouldn't shift trust to another provider when trusting a provider isn't a requirement at all.

## 「愈複雜愈好」

我們經常看到人們描述過於複雜的隱私威脅模型。 通常，這些解決方案包括許多不同的電子郵件帳戶或具有許多運動部件和條件的複雜設置等問題。 The replies are usually answers to "What is the best way to do *X*?"

Finding the "best" solution for yourself doesn't necessarily mean you are after an infallible solution with dozens of conditions—these solutions are often difficult to work with realistically. As we discussed previously, security often comes at the cost of convenience. Below, we provide some tips:

1. ==Actions need to serve a particular purpose:== think about how to do what you want with the fewest actions.
2. ==Remove human failure points:== We fail, get tired, and forget things. To maintain security, avoid relying on manual conditions and processes that you have to remember.
3. ==Use the right level of protection for what you intend.== We often see recommendations of so-called law-enforcement or subpoena-proof solutions. These often require specialist knowledge and generally aren't what people want. There's no point in building an intricate threat model for anonymity if you can be easily de-anonymized by a simple oversight.

So, how might this look?

One of the clearest threat models is one where people *know who you are* and one where they do not. 總會有你必須申報你的法定姓名的情況，還有其他你不需要的情況。

1. **Known identity** - A known identity is used for things where you must declare your name. 有許多法律文件和合同需要合法身份。 這可能包括開設銀行帳戶，簽署財產租賃，獲得護照，進口物品時的海關申報，或以其他方式與您的政府打交道。 這些東西通常會導致憑證，如信用卡，信用評級檢查，帳戶號碼，以及可能的物理地址。

    我們不建議您使用 VPN 或 Tor 來處理這些事情，因為您的身份已經通過其他方式被對方知道。

    !!! tip
   
        在網上購物時，使用[包裹儲物櫃] (https://zh.wikipedia.org/wiki/Parcel_locker)有助於保護您的實際地址的私密性。

2. **未知身份** - 未知身份可能是您經常使用的穩定假名。 它不是匿名的，因為它不會改變。 如果您是線上社群的一員，您可能希望保留其他人知道的角色。 這個假名不是匿名的，因為如果監控時間足夠長，關於所有者的詳細信息可以透露更多信息，例如他們的寫作方式，他們對感興趣主題的一般知識等。

    您可能希望使用 VPN 來隱藏您的 IP 地址。 金融交易更難掩蓋：您可以考慮使用匿名加密貨幣，例如 [Monero](https://www.getmonero.org/)。 採用山寨幣轉移也可能有助於偽裝您的貨幣起源。 通常情況下，交易所需要完成 KYC （了解您的客戶） ，然後才能將法定貨幣兌換為任何類型的加密貨幣。 線下操作也可能是一個解決方案；然而，這些往往更昂貴，有時也需要 KYC。

3. **匿名身份** - 即使有經驗的專家，也很難長時間保持一個帳號的匿名性。 它們應該是短期和短暫的身份，定期輪流。

    使用 Tor 可以幫助我們做到這一點。 同樣值得注意的是，通過異步溝通可以實現更大的匿名性：實時溝通容易受到打字模式分析的影響（即不止一段文字，在論壇上分發，通過電子郵件等）。

--8<-- "includes/abbreviations.zh-Hant.txt"

[^1]: One notable example of this is the [2021 incident in which University of Minnesota researchers introduced three vulnerabilities into the Linux kernel development project](https://cse.umn.edu/cs/linux-incident).
