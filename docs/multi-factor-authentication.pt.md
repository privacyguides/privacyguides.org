---
title: Autenticadores Multi-Factor
icon: 'material/two-factor-authentication'
---

## Chaves de Segurança de Hardware

### YubiKey

!!! recomendação

    ![YubiKeys](/assets/img/multi-factor-authentication/yubikey.png)
    
    As **YubiKeys** estão entre as chaves de segurança mais populares. Alguns modelos YubiKey têm uma vasta gama de características, como por exemplo: [Universal 2nd Factor (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 WebAuthn](https://en.wikipedia.org/wiki/WebAuthn), [Yubico OTP](https://developers.yubico.com/OTP/), [PIV](https://en.wikipedia.org/wiki/FIPS_201), [OpenPGP](https://developers.yubico.com/PGP/), [TOTP e HOTP](https://developers.yubico.com/OATH/) autenticação.
    
    Um dos benefícios do YubiKey é que uma chave pode fazer quase tudo (YubiKey 5), que você poderia esperar de uma chave de segurança de hardware. We do encourage you to take the [quiz](https://www.yubico.com/quiz/) before purchasing in order to make sure you make the right choice.
    
    [Visite yubico.com](https://www.yubico.com){ .md-button .md-button--primary } [Política de Privacidade](https://www.yubico.com/support/terms-conditions/privacy-notice){ .md-button }

The [comparison table](https://www.yubico.com/store/compare/) shows the features and how the YubiKeys compare. Recomendamos vivamente que seleccione chaves da série YubiKey 5.

YubiKeys pode ser programado usando o [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) ou [YubiKey Personalization Tools](https://www.yubico.com/support/download/yubikey-personalization-tools/). Para gerir códigos TOTP, pode utilizar o [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/). Todos os clientes do Yubico são de código aberto.

Para modelos que suportam HOTP e TOTP, existem 2 slots na interface OTP que podem ser utilizados para HOTP e 32 slots para armazenar segredos TOTP. Estes segredos são armazenados encriptados na chave e nunca os expõe aos dispositivos em que estão ligados. Uma vez que uma semente (segredo compartilhado) é dada ao Yubico Authenticator, ele só dará os códigos de seis dígitos, mas nunca a semente. Este modelo de segurança ajuda a limitar o que um atacante pode fazer se comprometer um dos dispositivos que executam o Autenticador Yubico e tornar o YubiKey resistente a um atacante físico.

!!! atenção
    O firmware do YubiKeys não são de código aberto e não são actualizáveis. Se você quiser recursos em versões mais recentes de firmware, ou se houver uma vulnerabilidade na versão de firmware que você está usando, você precisará comprar uma nova chave.

### Nitrokey / Librem Key

!!! recomendação

    ![Nitrokey](/assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }
    
    **Nitrokey** tem uma chave de segurança capaz de [FIDO2 WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) chamada **Nitrokey FIDO2***. Para suporte PGP, você precisa comprar uma de suas outras chaves, como o **Nitrokey Start**, **Nitrokey Pro 2*** ou o **Nitrokey Storage 2***.
    
    [Visite nitrokey.com](https://www.nitrokey.com){ .md-button .md-button--primary } [Política de Privacidade](https://www.nitrokey.com/data-privacy-policy){ .md-button }

The [comparison table](https://www.nitrokey.com/#comparison) shows the features and how the Nitrokey models compare. O **Nitrokey 3** listado terá um conjunto de recursos combinados.

Os modelos Nitrokey podem ser configurados utilizando o [Nitrokey app](https://www.nitrokey.com/download).

Para os modelos que suportam HOTP e TOTP, existem 3 slots para HOTP e 15 para TOTP. Alguns Nitrokeys podem agir como um gerenciador de senhas. Eles podem armazenar 16 credenciais diferentes e criptografá-las usando a mesma senha da interface do OpenPGP.

 O Nitrokey Pro 2, Nitrokey Storage 2, e o próximo Nitrokey 3 suportam a verificação da integridade do sistema para portáteis com o [Coreboot](https://www.coreboot.org/) [Cabeças](https://osresearch.net/) firmware. Purism's [Librem Key](https://puri.sm/products/librem-key/) é um NitroKey Pro 2 rebranded com firmware semelhante e também pode ser usado para os mesmos fins.

 A Nitrokey tem um firmware de código aberto, ao contrário da YubiKey. O firmware dos modelos modernos NitroKey (excepto o **NitroKey Pro 2**) é actualizável.

!!! aviso

    Enquanto os Nitrokeys não liberam os segredos HOTP/TOTP para o dispositivo em que estão conectados, o armazenamento HOTP e TOTP é **não** criptografado e é vulnerável a ataques físicos.

!!! atenção

    A reinicialização da interface OpenPGP em uma Nitrokey também fará com que a base de dados de senha [inaccessible](https://docs.nitrokey.com/pro/factory-reset.html).

!!! dica

    O aplicativo Nitrokey, embora compatível com Librem Keys, requer o `libnitrokey` versão 3.6 ou superior para reconhecê-los. Atualmente, o pacote está desatualizado no Windows, macOS e no repositório da maioria das distribuições Linux, então você provavelmente terá que compilar você mesmo o aplicativo Nitrokey para colocá-lo funcionando com a Chave Librem. No Linux, você pode obter uma versão atualizada de [Flathub](https://flathub.org/apps/details/com.nitrokey.nitrokey-app).

## Aplicativos Autenticadores

As aplicações autenticadoras implementam um padrão de segurança adotado pela Internet Engineering Task Force (IETF) chamado **Senhas únicas baseadas no tempo**, ou **TOTP**. Este é um método onde os sites compartilham um segredo com você que é usado pelo seu aplicativo autenticador para gerar um código de seis (geralmente) dígitos baseado na hora atual, que você entra enquanto faz o login para que o site seja verificado. Normalmente estes códigos são regenerados a cada 30 segundos, e assim que um novo código é gerado, o antigo torna-se inútil. Mesmo que um hacker receba um código de seis dígitos, não há maneira de reverter esse código para obter o segredo original, ou ser capaz de prever o que qualquer código futuro pode ser.

Recomendamos vivamente que utilize aplicações TOTP móveis em vez de alternativas de desktop, uma vez que o Android e o IOS têm melhor segurança e isolamento de aplicações do que a maioria dos sistemas operativos desktop.

### Autenticador Aegis

!!! recomendação

    ![logo Aegis](/assets/img/multi-factor-authentication/aegis.png){ align=right }
    
    **Aegis Authenticator** é uma aplicação gratuita, segura e de código aberto para gerir os seus tokens de verificação em 2 passos para os seus serviços online.
    
    [Visite getaegis.app](https://getaegis.app){ .md-button .md-button--primary } [Política de Privacidade](https://getaegis.app/aegis/privacy.html){ .md-button }
    
    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/com.beemdevelopment.aegis)
    - [:fontawesome-brands-github: GitHub](https://github.com/beemdevelopment/Aegis)

### Raivo OTP

!!! recomendação

    ![logótipo Raivo OTP](/assets/img/multi-factor-autenticação/raivo-otp.png){ align=right }
    
    **Raivo OTP*** é um cliente nativo, leve e seguro baseado no tempo (TOTP) & cliente com senha baseada em contador (HOTP) para iOS. Raivo OTP oferece backup iCloud opcional & sync. Raivo OTP também está disponível para MacOS na forma de um aplicativo de barra de status, porém o aplicativo Mac não funciona independentemente do aplicativo iOS.
    
    [Visite github.com](https://github.com/raivo-otp/ios-application){ .md-button .md-button--primary } [Política de Privacidade](https://github.com/raivo-otp/ios-application/blob/master/PRIVACY.md){ .md-button }
    
    **Downloads:**
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)
    - [:fontawesome-brands-app-store: Mac App Store](https://apps.apple.com/us/app/raivo-otp/id1498497896)
    - [:fontawesome-brands-github: GitHub](https://github.com/raivo-otp/ios-application)
