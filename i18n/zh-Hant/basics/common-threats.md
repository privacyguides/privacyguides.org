---
title: "常見威脅"
icon: 'material/eye-outline'
description: 您的威脅模型雖說是個人的事，但它也是本站許多訪客關心的課題。
---

廣義來講，我們將建議歸類為適用於大多數人的 [威脅](threat-modeling.md) 或目標。 您可能會在意各種可能性的組合，而選用的工具和服務則取決於您的目標何在。 您也可能有超出這些類別之外的特定威脅，這完全有可能！ 重要的是要了解您選擇使用的工具的好處和缺點，因為幾乎沒有一種工具可以保護您免受任何威脅。

- <span class="pg-purple">:material-incognito: 匿名</span> -保護您的在線活動免受您真實身份影響，保護您防範某些企圖揭露 *您* 身份的侵害。
- <span class="pg-red">:material-target-account: 針對性的攻擊</span> -保護免受駭客或其他惡意行為者的攻擊，他們正試圖存取訪問 *您的* 資料或設備。
- <span class="pg-orange">:material-bug-outline: 被動攻擊</span> -保護免受惡意軟體、數據洩露和其他同時針對多人的攻擊。
- <span class="pg-teal">:material-server-network: 服務供應商</span> - 保護您的資料免受服務供應商侵害（例如，使用 E2EE ，使您保存在伺服器的資料無法被他人讀取）。
- <span class="pg-blue">:material-eye-outline: 大規模監控</span> -保護您免受政府機構、組織、網站和服務共同追蹤您的活動。
- <span class="pg-brown">:material-account-cash: 監控資本主義</span> - 保議自己不會被  Google， Facebook 等大型網路廣告以及其它無數第三方資料收集者監控。
- <span class="pg-green">:material-account-search: 公開曝光</span> -限制搜尋引擎或一般大眾可在網路上找到有關您的資訊。
- <span class="pg-blue-gray">:material-close-outline: 審查</span> -避免資訊被封鎖或自己的網路發言時受到審查。

其中一些威脅對您來說可能比其他威脅更嚴重，這取決於您的具體問題。 例如，有權訪問有價值或重要資料的開發人員可能主要關注 <span class="pg-red">:material-target-account: 針對性攻擊</span>，但他們仍然希望保護自己的個資免受 <span class="pg-blue">:material-eye-outline: 大規模監控</span> 計劃的影響。 同樣，許多人主要關心其個人資料的 <span class="pg-green">:material-account-search: 公開曝光</span> ，但他們仍應該警惕聚焦安全的問題，例如 <span class="pg-orange">:material-bug-outline: 被動攻擊</span>-例如惡意軟件影響他們的設備。

## 匿名 vs. 隱私

<span class="pg-purple">:material-incognito: 匿名性</span>

匿名通常與隱私相混淆，但它們是不同的概念。 隱私是您對如何使用和共享資料所做出的一系列選擇，而匿名是將您的線上活動與真實身份完全分離。

舉例來說，揭密者和記者會需要一個更極端、要求完全匿名的威脅模型。 這不僅隱藏了他們所做的事情、擁有的資料，不會被惡意行為者或政府駭客入侵，而且還完全隱暪了他們的身份。 他們經常需犧牲任何形式的便利，以保護自身的匿名性，隱私或安全，因為很可能事關自己的性命。 大多數人都不需要那樣。

## 安全與隱私

<span class="pg-orange">:material-bug-outline: 被動攻擊</span>

安全性和隱私也經常被混淆，因為您需要安全性來獲得任何形式的隱私：使用的工具----即便設計私密----但若很容易地受到攻擊者造成資料外洩，一切就是白廢了。 然而，相反的情況並不一定成立：世界上最安全的服務 *不一定是* 私密。 最好的例子是信任把資料交給 Google，因為它們規模龐大聘請業界領先的安全專家來保護其基礎設施，幾乎沒有發生過安全事故。 儘管 Google 提供了非常安全的服務，但很少有人會認為在Google 免費消費產品（Gmail、YouTube 等）中的資料是私有的。

當涉及到應用程式安全性時，我們通常不知道（有時甚至無法）使用的軟體是否是惡意或者有一天它會變成惡意。 即使是最值得信賴的開發人員，也無法保證他們的軟體沒有嚴重的漏洞有一天會被利用。

減少惡意軟體*可能造成的破壞* ，最好能落實安全劃分方案。 例如，用不同電腦作不同的事、利用虛擬器來分組不同的相關應用程式，或者使用一個高集中的應用程式沙盒和強制訪問控制的安全操作系統。

!!! 提示

    行動作業系統通常具有比桌面作業系統具備更好的應用程式沙盒：應用程式沒有根存取權限，且需要存取系統資源的權限。
    
    桌面操作系統通常在適當的沙盒化上落後。 ChromeOS 具備與 Android 相似的沙盒功能， macOS 具有完整的系統權限控制（開發人員可以選擇為應用程式加入沙盒）。 然而，這些作業系統確實會將識別資料傳回給各自的原始設備製造商。 Linux 傾向於不對系統供應商提交資料，但它在漏洞和惡意應用程式的保護很差。 這可以通過專門的發行版來緩解，這些發行版大量使用虛擬器或容器，例如 [Qubes OS] （../../desktop/# qubes-os ）。

<span class="pg-red">:material-target-account: 目標攻擊</span>

針對特定人士的針對性攻擊更難處理。 常見的攻擊包括通過電子郵件發送惡意文件、利用(瀏覽器和操作系統的)漏洞以及物理攻擊。 如果這是您擔心這點，應該採用更先進的威脅減輕策略。

!!! 提示

    在設計上， * *網頁瀏覽器* *、* *電子郵件用戶端* *和* *辦公室應用程式* *常常運行第三方發送無法信任的代碼。 運行多個虛擬器-將這些應用程序與主機系統相互分開，此技術可減少系統遭到應用程序攻擊的機會。 例如， Qubes OS 或 Windows 上的 Microsoft Defender Application Guard 等技術提供了方便的作法。

若您特別擔心 **物理攻擊**，就應選用具安全驗證開機的作業系統，例如 Android, iOS, macOS, 或[Windows (帶 TPM)](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process)。 應確保您的驅動器是加密的，並且操作系統使用 TPM或 Secure [Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1) 或 [Element](https://developers.google.com/android/security/android-ready-se) 來限制輸入加密密碼的嘗試率。 您應該避免與不信任的人共享您的電腦，因為大多數桌面作業系統不會單獨加密每個用戶的數據。

## 服務供應商的隱私權

<span class="pg-teal">:material-server-network: 服務提供商</span>

我們活在一個幾乎所有東西都連上網際網路的世界。 我們的「私人」訊息、電子郵件和社交互動通常儲存在伺服器的某個地方。 通常，當您向某人發送訊息時，它會儲存在伺服器上，當對方想要閱讀訊息時，伺服器會將其顯示給他們。

顯而易見的問題是，服務提供商（或破壞伺服器的黑客）可以隨時隨地訪問您的對話，而您永遠不會知道。 這適用在許多常見服務，如 SMS 簡訊、Teleram 和 Discord。

慶幸的是， E2EE 可以加密您與收件人之間的通信，甚至在訊息送到伺服器之前，緩解此問題。 假設服務提供商無法訪問任何一方的私鑰，您的訊息保密性得到保證。

!!! 備註 "Web 加密備註"

    實際上，不同 E2EE 操作的效力各不相同。 應用程式，例如 [Signal](../real-time-communication.md#signal) ，會在您的裝置上原生執行，且此應用程式在不同設備的安裝上都是如此。 如果服務提供商在他們的應用程序中引入 [後門](https://zh.wikipedia.org/wiki/Backdoor_(computing)  ----試圖竊取您的私鑰----它稍後可以通過[逆向工程] (https://zh.wikipedia.org/wiki/Reverse_engineering )檢測。
    
    另一方面，執行網頁 E2EE，例如 Proton Mail 的網頁郵件或Bitwarden 的* Web Vault * ，依靠伺服器動態地向瀏覽器提供JavaScript 代碼來處理加密。 惡意伺服器可以針對您發送惡意 JavaScript 代碼以竊取您的加密密鑰（這將非常難以察覺）。 因為伺服器可以選擇為不同的人提供不同的網頁用戶端，即使您注意到攻擊也很難證明提供商有罪。
    
    因此，您應該盡可能使用原生軟體程式多於網頁客戶端。

即便使用 E2EE ，服務商仍然可以對 **元數據**進行分析，這通常不受保護。 雖然服務提供商無法讀取您的訊息，但他們仍然可以觀察重要的事情，例如您正在與誰交談、傳送訊息的頻率以及使用活躍時段。 元數據的保護不多，如果它在您的 [威脅模型](threat-modeling.md)中，就應該密切注意使用軟體的技術文檔，看看元數據是否最小化或任何保護。

## 大規模監督計劃

<span class="pg-blue">:material-eye-outline: 大規模監測</span>

大規模監控是對全體 (或其中某一群特定)人群進行錯綜複雜的監視活動。[^1] 它通常是指政府項目，例如由[Edward Snowden 在 2013](https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present))所揭露的內幕。 然而，它也可以由公司代表政府機構或由他們自己主動進行。

!!! 摘要"監控地圖集"

    如果您想進一步了解監控方法及其在您所在城市的實施方式，您也可以查看[電子前鋒基金會 EFF] (https://www.eff.org/)的[監控地圖集] (https://atlasofsurveillance.org/)。
    
    在法國，您可以看看非營利組織 La Quadrature du Net 維護的 [Technolopolice 網站] (https://technopolice.fr/villes/ )。

政府常認為大規模監控計劃是打擊恐怖主義和預防犯罪的必要手段。 然而，少數羣體和政治異見人士最常遭受不成比例地人權侵害。

!!! 美國自由民權聯盟 ACLU： [*9/11 的隱私教訓：大規模監控不是前進的道路*](https://www.aclu.org/news/national-security/the-privacy-lesson-of-9-11-mass-surveillance-is-not-the-way-forward)

    面對[愛德華·斯諾登（ Edward Snowden ）披露的 [PRISM]（ https://en.wikipedia.org/wiki/PRISM ）和 [Upstream]（ https://en.wikipedia.org/wiki/Upstream_collection ）]等政府計劃，情報官員承認，國家安全局多年來一直祕密地收集每個美國人電話的記錄—誰在打電話，何時打電話，以及通話時間多久。 當  NSA 日復一日地收集這類資訊時，就可以揭示人們生活相關聯的敏感細節，例如他們是否打電話給牧師、墮胎提供者、成癮顧問或自殺熱線。

儘管在美國有越來越多的大規模監控，政府卻發現像依 215 條採取的監控計畫在阻卻犯案與恐怖陰謀上沒有實用價值，它們幾乎只是重複著 FBI 所做的特定監控計畫而已。[^2]

在網上，您可以通過各種方法進行追蹤：

- 您的 IP 地址
- 瀏覽器 cookie
- 您提交到網站的資料
- 您的瀏覽器或裝置指紋
- 付款方式關聯

\ [此列表並非詳盡無缺]。

如果您擔心大規模監控計劃，您可以隨時隨地策略性避免提供識別個資，例如劃分您的網路身份，與其他用戶混合。

<span class="pg-brown">:material-account-cash: 監控資本主義</span>

> 監控資本主義的核心是獲取個人資料並將之商品化，以謀求最大利潤的經濟體系。[^3]

對於許多人來說，私人公司的追蹤和監視是一個越來越令人擔憂的問題。 無處不在的廣告網絡，例如 Google 和 Facebook 運營的廣告網絡，跨越網際網路遠超過他們控制的網站，在跟蹤您的行為。 使用內容攔截工具來限制對伺服器的請求、閱讀了解所用服務的隱私政策，都有助於避開許多基本對手 (雖然這不能完全防止跟蹤)。[^4]

此外，即使是 *AdTech* 或追蹤行業以外的公司，也可以與 [資料掮客](https://en.wikipedia.org/wiki/Information_broker) （如Cambridge Analytica、Experian 或 Datalogix ）或其他方共享您的資料。 您無法自行假設您的資料是安全的，因為您使用的服務不屬於典型的 AdTech 或跟蹤商業模式。 對抗企業資料收集最好的保護是盡可能加密或混淆您的數據，讓不同的供應商難以將資料相互關聯去建立您的個人剖繪。

## 限制公共資訊

<span class="pg-green">:material-account-search: 公共曝露</span>

保持資料私密性的最佳方法是根本不要公開它。 刪除網路上有關您現已不用的資訊是恢復隱私的最佳第一步。

- [查看帳戶刪除指南 :material-arrow-right-drop-circle:](account-deletion.md)

對於您分享資訊的網站，檢查帳戶的隱私設定以限制資料傳播的範圍非常重要。 例如，如果提供選項，請在您的帳戶上啟用「私人模式」：這可確保您的帳戶不會被搜尋引擎編入索引，而且在未經您的許可下無法查看。

如果您已經將真實資訊提交給不應該擁有該資訊的網站，請考慮使用虛假策略，例如提交該網路身份的虛構資訊。 這使得您的真實資訊無法與虛假資訊作區分。

## 避免審查

<span class="pg-blue-gray">:material-close-outline: 審查</span>

網口審查包括由極權主義政府、網路管理員和服務提供商等所進行的行為（在不同程度上）。 這些試圖控制通訊與限縮資料取用的作為，往往不見容於意見自由的基本人權。[^5]

對企業平臺的審查越來越普遍，如Twitter 和 Facebook 等平臺屈服於公眾需求、市場和政府機構的壓力。 政府對企業的施壓可能是隱蔽的，例如白宮私下 [要求拿掉](https://www.nytimes.com/2012/09/17/technology/on-the-web-a-fine-line-on-free-speech-across-globe.html) 某個勯動的 Youtube 影片，或是公開者如中國政府命令企業要遵循嚴厲的審查制度。

關注審查威脅的人可以使用像 [Tor](../advanced/tor-overview.md) 這樣的技術來規避它，並支持像 [Matrix](../real-time-communication.md#element)這樣的抗審查通信平臺，該平臺沒有可以任意關閉帳戶的集中帳戶權限。

!!! 提示

    雖然很容易避掉審查，但隱藏您正在做的事可就沒那麼簡單了。
    
    您應該考慮可讓對手觀察哪些網路行為，以及能否對這些行為有合理的否認說辭。 例如，使用[加密 DNS ] (../advanced/dns-overview.md#what-is-encrypted-dns)可以幫助您繞過對 DNS 基本審查系統，但它無法對 ISP 隱藏您正在訪問的內容。 VPN 或 Tor 有助於向網路管理員隱藏您正在訪問的內容，但無法隱藏您正在使用 VPN 或 Tor 。 可插拔傳輸（例如 Obfs4proxy、Meek 或 Shadowsocks ）可以幫助您避開阻擋常見VPN 協議或 Tor 的防火牆，但仍然可以通過探測或[深度封包檢查] (https://en.wikipedia.org/wiki/Deep_packet_inspection)等方法檢測您嘗圖作的規避。

您必須考慮試圖繞過網路審查的風險、潛在的後果以及您的對手可能很經驗老道。 您應該謹慎選擇軟件，並制定備份計劃以防被抓住。

[^1]: 維基百科: [*大型監控*](https://en.wikipedia.org/wiki/Mass_surveillance) 與 [*監控*](https://en.wikipedia.org/wiki/Surveillance).
[^2]: 美國隱私和公民自由監督委員會： [*根據第 215 條進行的電話記錄計劃的報告*](https://documents.pclob.gov/prod/Documents/OversightReport/ec542143-1079-424a-84b3-acc354698560/215-Report_on_the_Telephone_Records_Program.pdf)
[^3]: 維基百科: [*監控資本主義*](https://en.wikipedia.org/wiki/Surveillance_capitalism)
[^4]: “[枚舉壞處](https://www.ranum.com/security/computer_security/editorials/dumb/)” （或“列出所知的全部壞事” ），未能充分保護您免受新的和未知的威脅，因為許多廣告攔截程式和防病毒程式尚未被添加到過濾器列表。 您還應採用其他緩解技術。
[^5]: 聯合國： [*《世界人權宣言》*](https://www.un.org/en/about-us/universal-declaration-of-human-rights).
