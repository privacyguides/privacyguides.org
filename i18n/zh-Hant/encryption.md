---
title: "加密軟體"
icon: material/file-lock
description: 數據加密是控制誰可以訪問它的唯一方法。 這些工具允許您加密電子郵件和任何其他檔案。
---

數據加密是控制誰可以訪問它的唯一方法。 如果您目前沒有為您的硬盤，電子郵件或文件使用加密軟件，您應該在這裡選擇一個選項。

## 多平臺

此處列出的選項是多平臺的，非常適合建立資料的加密備份。

### Cryptomator (雲端)

!!! recommendation

    ! [Cryptomator logo] (assets/img/encryption-software/cryptomator.svg) {align = right}
    
    * * Cryptomator * *是一種加密解決方案，專為將檔案私密保存到任何雲端提供商而設計。 它允許您創建存儲在虛擬驅動器上的保管庫，其內容已加密並與雲端儲存供應商同步。
    
    [:octicons-home-16: Homepage](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.cryptomator.org/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/cryptomator){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://cryptomator.org/donate/){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.cryptomator)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/cryptomator-2/id1560822163)
        - [:simple-android: Android](https://cryptomator.org/android)
        - [:simple-windows11: Windows](https://cryptomator.org/downloads)
        - [:simple-apple: macOS](https://cryptomator.org/downloads)
        - [:simple-linux: Linux](https://cryptomator.org/downloads)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.cryptomator.Cryptomator)

Cryptomator 使用 AES-256 加密來加密檔案和檔案名稱。 Cryptomator 無法加密中繼資料，例如存取、修改和創建時間戳記，也無法加密檔案和資料夾的數量和大小。

一些 Cryptomator 加密程式庫 [已被Cure53審核](https://community.cryptomator.org/t/has-there-been-a-security-review-audit-of-cryptomator/44) 。 稽核程式庫的範圍包括： [cryptolib](https://github.com/cryptomator/cryptolib)、 [cryptofs](https://github.com/cryptomator/cryptofs)、 [siv-mode](https://github.com/cryptomator/siv-mode) 和 [cryptomator-objc-cryptor](https://github.com/cryptomator/cryptomator-objc-cryptor)。 審計並未包含[cryptolib-swift](https://github.com/cryptomator/cryptolib-swift)它是 Cryptomator 運用在 iOS 程式庫。

Cryptomator  詳細介紹了其預期的 [安全目標](https://docs.cryptomator.org/en/latest/security/security-target/)、[安全架構](https://docs.cryptomator.org/en/latest/security/architecture/)和 [最佳實踐](https://docs.cryptomator.org/en/latest/security/best-practices/) ，以進一步詳細使用。

### Picocrypt (檔案)

!!! recommendation

    ! [Picocrypt logo] (assets/img/encryption-software/picocrypt.svg) {align = right}
    
    * * Picocrypt * *是一個小而簡單的加密工具，提供現代加密。 Picocrypt 使用安全的 XChaCha20 密碼和 Argon2id 密鑰派生功能來提供高級別的安全性。 它使用 Go 標準x/crypto 模塊作為其加密功能。
    
    [:octicons-repo-16: Repository](https://github.com/HACKERALERT/Picocrypt){ .md-button .md-button--primary }
    [:octicons-code-16:](https://github.com/HACKERALERT/Picocrypt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opencollective.com/picocrypt){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-apple: macOS](https://github.com/HACKERALERT/Picocrypt/releases)
        - [:simple-linux: Linux](https://github.com/HACKERALERT/Picocrypt/releases)

### VeraCrypt (磁碟)

!!! recommendation

    ! [VeraCrypt logo] (assets/img/encryption-software/veracrypt.svg#only-light) {align = right}
    ! [VeraCrypt logo] (assets/img/encryption-software/veracrypt-dark.svg#only-dark) {align = right}
    
    * * VeraCrypt * *是一個開源的免費軟件實用程式，用於即時加密。 它可以在檔案中建立虛擬加密磁碟、加密分割區，或透過預先啟動驗證來加密整個儲存裝置。
    
    [:octicons-home-16: Homepage](https://veracrypt.fr){ .md-button .md-button--primary }
    [:octicons-info-16:](https://veracrypt.fr/en/Documentation.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://veracrypt.fr/code/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://veracrypt.fr/en/Donation.html){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://www.veracrypt.fr/en/Downloads.html)
        - [:simple-apple: macOS](https://www.veracrypt.fr/en/Downloads.html)
        - [:simple-linux: Linux](https://www.veracrypt.fr/en/Downloads.html)

VeraCrypt是已停產的 TrueCrypt 項目的分支。 根據其開發人員的說法，已經實施了安全性改進，並解決了最初的TrueCrypt 代碼審計提出的問題。

使用 VeraCrypt 加密時，您可以選擇不同的 [哈希函數](https://en.wikipedia.org/wiki/VeraCrypt#Encryption_scheme)。 我們建議您只需 **** 選擇 [SHA-512](https://en.wikipedia.org/wiki/SHA-512) 並堅持 [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) 區塊密碼。

Truecrypt 已完成[多次審計](https://en.wikipedia.org/wiki/TrueCrypt#Security_audits)，而 VeraCrypt 也曾接受 [獨立審計](https://en.wikipedia.org/wiki/VeraCrypt#VeraCrypt_audit)。

## 作業系統完整磁碟加密

現代作業系統包括 [FDE](https://en.wikipedia.org/wiki/Disk_encryption) ，並將有一個 [安全的加密處理器](https://en.wikipedia.org/wiki/Secure_cryptoprocessor)。

### BitLocker

!!! recommendation

    ! [BitLocker logo] (assets/img/encryption-software/bitlocker.png) {align = right}
    
    * * BitLocker * *是 Microsoft Windows 捆綁的全磁區加密解決方案。 我們推薦它的主要原因是[使用 TPM] (https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm)。 取證公司[ElcomSoft](https://en.wikipedia.org/wiki/ElcomSoft)在[Understanding BitLocker TPM Protection] (https://blog.elcomsoft.com/2021/01/understanding-BitLocker-tpm-protection/)中撰寫了有關此問題的文章。
    
    [:octicons-info-16:](https://docs.microsoft.com/en-us/windows/security/information-protection/BitLocker/BitLocker-overview){ .card-link title=Documentation}

BitLocker [僅支援](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838)  Windows 專業版、企業版和教育版。 它可以在家庭版上啓用，只要符合先決條件。

??? 示例“在Windows Home上啓用BitLocker”

    若要在 Windows 家用版啟用 BitLocker ，必須使用 [GUID 分割表] (https://zh.wikipedia.org/wiki/GUID_Partition_Table)格式化的分割區，並且具有專用的TPM (v1.2, 2.0+)模組。

    1. 開啟命令提示符，並使用以下命令檢查磁碟機的分區表格格式。 您應該會在“分區樣式”下方看到“**GPT**” ：

        ```
        powershell Get-Disk
        ```

    2. 在管理員命令提示符中執行此命令以檢查您的TPM版本。 您應該會在 `個SpecVersion`旁邊看到 `2.0` 或 `1.2` ：

        ```
        powershell Get-WmiObject -Namespace "root/cimv2/security/microsofttpm" -Class WIN32_tpm
        ```

    3. 訪問[進階啟動選項](https://support.microsoft.com/en-us/windows/advanced-startup-options-including-safe-mode-b90e7808-80b5-a291-d4b8-1a1af602b617). 重新啟動時需要在 Windows 啟動前按下F8 鍵，然後進入 *命令提示符* in **疑難排解** → **進階選項** → **命令提示符**。

    4. 使用管理員帳戶登入並在命令提示符中輸入指令以開始加密：

        ```
        manage-bde -on c: - used
        ```

    5. 關閉命令提示符並繼續啟動正常Windows。

    6. 打開 admin 命令提示符並運行以下命令：

        ```
        manage-bde c: -protectors -add -rp -tpm
        manage-bde -protectors -enable c:
        manage-bde -protectors -get c: > %UserProfile%\Desktop\BitLocker-Recovery-Key.txt
        ```

        !!! 訣竅
   
        將桌面上的「BitLocker-Recovery-Key.txt」備份到單獨的儲存裝置。 若遺失恢復代碼可能會導致資料無法回復。

### FileVault

!!! recommendation

    ! [FileVault logo] (assets/img/encryption-software/filevault.png) {align = right}
    
    * * FileVault * *是 macOS 內建的即時磁區加密方案。 建議使用FileVault ，因為它打抵擋 Apple siliconSoC 或 T2 安全晶片[硬體安全問題](https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web)。
    
    [:octicons-info-16:](https://support.apple.com/guide/mac-help/encrypt-mac-data-with-filevault-mh11785/mac){ .card-link title=Documentation}

我們建議您將本地恢復金鑰存放在安全的地方，而不是使用您的iCloud 帳戶進行恢復。

### Linux Unified Key設定

!!! recommendation

    ! [LUKS logo] (assets/img/encryption-software/luks.png) {align = right}
    
    * * LUKS * *是 Linux 預設 FDE 方法。 它可用於加密整個磁區、分割區或建立加密容器。
    
    [:octicons-home-16: Homepage](https://gitlab.com/cryptsetup/cryptsetup/-/blob/main/README.md){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/home){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.com/cryptsetup/cryptsetup/){ .card-link title="Source Code" }

??? 示例"建立和開啟加密容器"

    ```
    dd if=/dev/urandom of=/path-to-file bs=1M count=1024 status=progress
    sudo cryptsetup luksFormat /path-to-file
    ```


    #### 開啟加密容器
    建議使用'udisksctl`開啟容器和磁區，因為這使用 [Polkit](https://en.wikipedia.org/wiki/Polkit)。 大多數檔案管理器，例如流行的桌面環境中包含的檔案管理器，都可以解鎖加密的檔案。 [udiskie](https://github.com/coldfix/udiskie) 這類工具執行在系統常駐區並提供有用的使用介面。
    ```
    udisksctl loop-setup -f /path-to-file
    udisksctl unlock -b /dev/loop0
    ```

!!! 備註 "記得備份磁區標頭"

    我們建議您務必[備份您的LUKS標頭] (https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore)以防部分驅動器故障。 可以通過以下方式完成：

    ```
    cryptsetup luksHeaderBackup /dev/device --header-backup-file /mnt/backup/file.img
    ```

## 瀏覽器端

當您需要加密檔案但無法在裝置上安裝軟體或應用程式時，透過瀏覽器來加密可能很有用。

### hat.sh

!!! recommendation

    ! [hat.sh logo] (assets/img/encryption-software/hat-sh.png#only-light) {align = right}
    ! [hat.sh logo] (assets/img/encryption-software/hat-shark.png#only-dark) {align = right}
    
    * * Hat.sh * *是一款在瀏覽器中提供安全用戶端檔案加密的網頁應用程式。 它也可以是自行託管，如果您需要加密文件，但由於組織政策無法在設備上安裝任何軟件，這個方法將非常有用。
    
    [:octicons-globe-16: Website](https://hat.sh){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://hat.sh/about/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://hat.sh/about/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/sh-dv/hat.sh){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sh-dv/hat.sh#donations){ .card-link title="Donations methods can be found at the bottom of the website" }

## 命令列

命令行界面的工具可用於集成 [shell 腳本](https://en.wikipedia.org/wiki/Shell_script)。

### Kryptor

!!! recommendation

    ! [Kryptor logo] (assets/img/encryption-software/kryptor.png) {align = right}
    
    * * Kryptor * *是一個免費的開源文件加密和簽名工具，利用現代安全的加密算法。 它旨在成為更好版本的 [age](https://github.com/FiloSottile/age)和 [Minisign](https://jedisct1.github.io/minisign/)，提供一個簡單，更容易的 GPG 替代品。
    
    [:octicons-home-16: Homepage](https://www.kryptor.co.uk){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.kryptor.co.uk/features#privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.kryptor.co.uk/tutorial){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/samuel-lucas6/Kryptor){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.kryptor.co.uk/#donate){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://www.kryptor.co.uk)
        - [:simple-apple: macOS](https://www.kryptor.co.uk)
        - [:simple-linux: Linux](https://www.kryptor.co.uk)

### Tomb

!!! recommendation

    ! [Tomb logo] (assets/img/encryption-software/tomb.png) {align = right}
    
    * * Tomb * *是 LUKS 的命令行 shell 包裝器。 它通過[第三方工具] (https://github.com/dyne/Tomb#how-does-it-work)支持隱寫。
    
    [:octicons-home-16: Homepage](https://www.dyne.org/software/tomb){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/dyne/Tomb/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/dyne/Tomb){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.dyne.org/donate){ .card-link title=Contribute }

## OpenPGP

OpenPGP 有時需要執行特定任務，例如數位簽署和加密電子郵件。 PGP具有許多功能，但也有爭議 [複數](https://latacora.micro.blog/2019/07/16/the-pgp-problem.html) ，因為它已經存在了很長時間。 對於簽署或加密檔案等任務，我們建議您使用上述選項。

使用 PGP 加密時，您可以選擇在 `gpg.conf` 檔案中設定不同的選項。 我們建議您繼續使用 [ GnuPG 用戶常見問題集](https://www.gnupg.org/faq/gnupg-faq.html#new_user_gpg_conf)中指定的標準選項。

!!! 訣竅 "在生成金鑰時使用未來的預設值"

    [生成密鑰] (https://www.gnupg.org/gph/en/manual/c14.html)時，建議使用`future-default`命令，因為這將指示 GnuPG 使用現代密碼學，例如 [Curve25519](https://en.wikipedia.org/wiki/Curve25519#History)和 [Ed25519](https://ed25519.cr.yp.to/) ：

    ```bash
    gpg --quick-gen-key alice@example.com future-default
    ```

### GNU Privacy Guard

!!! recommendation

    ! [GNU Privacy Guard logo] (assets/img/encryption-software/gnupg.svg) {align = right}
    
    * * GnuPG * *是 GPL授權的加密軟體 PGP 替代品。 GnuPG 符合[RFC 4880] (https://tools.ietf.org/html/rfc4880) ，這是目前 OpenPGP 的 IETF 規範。 GnuPG 專案一直致力於[更新] (https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) ，試圖現代化OpenPGP。 GnuPG 是自由軟體基金會GNU 軟體項目的一部分，並已收到德國政府的重大 [資助](https://gnupg.org/blog/20220102-a-new-future-for-gnupg.html)。
    
    [:octicons-home-16: Homepage](https://gnupg.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gnupg.org/privacy-policy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://gnupg.org/documentation/index.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gnupg.git){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)
        - [:simple-windows11: Windows](https://gpg4win.org/download.html)
        - [:simple-apple: macOS](https://gpgtools.org)
        - [:simple-linux: Linux](https://gnupg.org/download/index.html#binary)

### GPG4win

!!! recommendation

    ! [GPG4win logo] (assets/img/encryption-software/gpg4win.svg) {align = right}
    
    * * GPG4win * *是[Intevation and g10 Code] (https://gpg4win.org/impressum.html) 的Windows 套件。 它包括[各種工具] (https://gpg4win.org/about.html) ，可協助您在 Microsoft Windows 上使用GPG。 該項目最初由德國聯邦信息安全辦公室 (BSI )於2005年發起並[資助](https://web.archive.org/web/20190425125223/https://joinup.ec.europa.eu/news/government-used-cryptography)。
    
    [:octicons-home-16: Homepage](https://gpg4win.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gpg4win.org/privacy-policy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://gpg4win.org/documentation.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gpg4win.git;a=summary){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://gpg4win.org/donate.html){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://gpg4win.org/download.html)

### GPG Suite

!!! 備註

    我們建議[Canary Mail] (email-clients.md#canary-mail)在iOS裝置上使用PGP和電子郵件。

!!! recommendation

    ! [GPG Suite logo] (assets/img/encryption-software/gpgsuite.png) {align = right}
    
    * * GPG Suite * *爲 [Apple Mail] (email-clients.md#apple-mail)和macOS 提供OpenPGP 支持。
    
    我們建議您查看他們的[第一步指南] (https://gpgtools.tenderapp.com/kb/how-to/first-steps-where-do-i-start-where-do-i-begin-setup-gpgtools-create-a-new-key-your-first-encrypted-email)和[使用知識庫] (https://gpgtools.tenderapp.com/kb)以取得支援。
    
    [:octicons-home-16: Homepage](https://gpgtools.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://gpgtools.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://gpgtools.tenderapp.com/kb){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/GPGTools){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-apple: macOS](https://gpgtools.org)

### OpenKeychain

!!! recommendation

    ! [OpenKeychain logo] (assets/img/encryption-software/openkeychain.svg) {align = right}
    
    * * OpenKeychain * *是 GnuPG 的Android 實作。 郵件客戶端通常需要它，例如[K-9 Mail] （ email-clients.md#k-9-mail ）和 [FairEmail]（ email-clients.md#fairemail ）以及其他 Android 應用程序提供加密支持。 Cure53 於2015年10月完成了 OpenKeychain 3.6 的[安全審核] (https://www.openkeychain.org/openkeychain-3-6)。 審核 OpenKeychain 方案的[技術細節在此](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015)。
    
    [:octicons-home-16: Homepage](https://www.openkeychain.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.openkeychain.org/help/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.openkeychain.org/faq/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/open-keychain/open-keychain){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)

## 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為這個網站的各個部分建立明確標準，它可能依情況變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。

### 最低合格要求

- 跨平臺加密應用程序必須是開源的。
- 檔案加密應用程式必須支援 Linux、macOS 和 Windows 的解密。
- 外部磁碟加密應用程式必須支援 Linux、macOS 和 Windows 的解密。
- 作業系統內部磁碟加密應用程式必須是跨平臺或原生內建作業系統。

### 最好的情况

最佳案例標準代表了我們希望從這個類別的完美項目應具備的條件。 推薦產品可能沒有此功能，但若有這些功能則會讓排名更為提高。

- 作業系統(FDE)加密應用程式應使用硬體安全性，例如 TPM 或Secure Enclave。
- 檔案加密應用程式應有自己的或第三方支援行動平臺。
