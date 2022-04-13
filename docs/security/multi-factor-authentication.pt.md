---
title: Autenticação Multi-factor
description: "O uso de AMF forte pode parar mais de 99% dos acessos não autorizados à conta, e é fácil de configurar nos serviços que você já usa."
icon: 'material/two-factor-authentication'
---

**autenticação multi-factor** (MFA, ou 2FA) é um mecanismo de segurança que requer passos adicionais para além da introdução do seu nome de utilizador (ou e-mail) e palavra-passe. O método mais comum são os códigos de tempo limitado que você pode receber de um SMS ou aplicativo.

A idéia por trás do AMF é que mesmo que um hacker (ou adversário) seja capaz de descobrir sua senha (algo que você *sabe*), eles ainda precisarão de um dispositivo que você possui como o seu telefone (algo que você *tem*), a fim de gerar o código necessário para entrar na sua conta. Os métodos de AMF variam na segurança com base nesta premissa: quanto mais difícil for para um atacante ter acesso ao seu método AMF, melhor. Exemplos de métodos AMF (do mais fraco ao mais forte) incluem [códigos SMS](https://en.wikipedia.org/wiki/One-time_password#SMS), códigos de e-mail, notificações app push, [Passwords únicas baseadas no tempo (TOTP)](https://en.wikipedia.org/wiki/Time-based_one-time_password), Yubico OTP, e [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) / [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor).

## Comparação do Método AMF

### SMS ou e-mail MFA

Receber códigos de **SMS** ou **email** são uma das formas mais fracas de proteger as suas contas com AMF. Obter um código por e-mail ou SMS tira da ideia "algo que você *tem*", porque há uma variedade de maneiras que um hacker poderia [assumir o seu número de telefone](https://en.wikipedia.org/wiki/SIM_swap_scam) ou ter acesso ao seu e-mail sem ter acesso físico a nenhum dos seus dispositivos. Se uma pessoa não autorizada tiver acesso ao seu e-mail, ela poderá usar esse acesso para redefinir a sua senha e receber o código de autenticação, dando-lhe acesso total à sua conta.

### Notificações Push

**Notificações Push** assume a forma de uma mensagem a ser enviada para um aplicativo no seu telefone pedindo-lhe para confirmar novos logins de conta. Este método é muito melhor que SMS ou e-mail, uma vez que um atacante normalmente não seria capaz de receber estas notificações push sem ter um dispositivo já conectado, o que significa que eles precisariam comprometer um dos seus outros dispositivos primeiro.

Todos nós cometemos erros, e há o risco de que um usuário possa aceitar a tentativa de login por acidente. As autorizações de login de notificação push são normalmente enviadas para *todos* seus dispositivos de uma só vez, ampliando a disponibilidade do código MFA se você tiver muitos dispositivos.

A segurança da notificação push AMF depende tanto da qualidade do aplicativo, do componente servidor e da confiança do desenvolvedor que o produz. A instalação de um aplicativo também pode exigir que você aceite privilégios invasivos que concedam acesso a outros dados em seu dispositivo. Um aplicativo individual também requer que você tenha um aplicativo específico para cada serviço que pode não requerer uma senha para abrir, ao contrário de um bom [Senha única baseada em tempo (TOTP)](#time-based-one-time-password-totp) app.

### Palavra-passe única baseada no tempo (TOTP)

**TOTP** é uma das formas mais comuns de AMF disponível. Quando um usuário configura o TOTP, ele geralmente é obrigado a digitalizar um [QR Code](https://en.wikipedia.org/wiki/QR_code) que estabelece um "segredo compartilhado" com o serviço que pretende utilizar. O segredo compartilhado é protegido dentro dos dados do aplicativo autenticador, e às vezes é protegido por uma senha.

O código limitado no tempo é então derivado do segredo partilhado e da hora actual. Como o código só é válido por pouco tempo, sem acesso ao segredo compartilhado um adversário não pode gerar novos códigos.

Se você tem uma chave de segurança de hardware com suporte a TOTP (como uma YubiKey com [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)), recomendamos que você armazene os seus "segredos compartilhados" no hardware. Hardware como o YubiKey foi desenvolvido com o intuito de tornar o "segredo compartilhado" difícil de ser extraído e copiado. Um YubiKey também não está ligado à Internet, ao contrário de um telefone com um aplicativo TOTP.

Ao contrário de [FIDO2 / U2F](#fido2-u2f), TOTP não oferece protecção contra [phishing](https://en.wikipedia.org/wiki/Phishing) ou ataques de reutilização. Se um adversário obtém um código válido de você, ele pode usá-lo quantas vezes quiser até que expire (geralmente 60 segundos).

Um adversário poderia criar um site para imitar um serviço oficial, numa tentativa de enganá-lo para dar o seu nome de usuário, senha e código TOTP atual. Se o adversário usar as credenciais gravadas, pode ser capaz de entrar no serviço real e seqüestrar a conta.

Embora não seja perfeito é suficientemente seguro para a maioria das pessoas, e quando [Hardware Security Keys](#hardware-security-keys) não são suportados TOTP com [Authenticator Apps](#authenticator-apps) ainda são uma boa opção.

### Chaves de segurança do hardware

A YubiKey armazena dados num chip de estado sólido inviolável que é [impossível de acessar](https://security.stackexchange.com/a/245772) não destrutivamente sem um processo caro e um laboratório forense.

Como estas chaves são geralmente multifuncionais e fornecem uma série de métodos para autenticar, discutimos abaixo os mais comuns.

#### Yubico OTP

Yubico OTP é um protocolo de autenticação tipicamente implementado em chaves de segurança de hardware. Quando um utilizador decide utilizar o Yubico OTP, a chave irá gerar um ID público, um ID privado e uma Chave Secreta que é depois carregada para o servidor Yubico OTP.

Ao entrar em um site, tudo o que um usuário precisa fazer é tocar fisicamente a chave de segurança. A chave de segurança irá emular um teclado e imprimir uma senha única no campo da senha.

O serviço irá então reencaminhar a senha única para o servidor OTP Yubico para validação. Um contador é incrementado tanto na chave como no servidor de validação do Yubico. O OTP só pode ser usado uma vez e quando ocorre uma autenticação bem sucedida o contador é aumentado o que impede a reutilização do OTP. Yubico fornece um [documento detalhado](https://developers.yubico.com/OTP/OTPs_Explained.html) sobre o processo.

<figure markdown>
  ![Yubico OTP](/assets/img/multi-factor-autenticação/yubico-otp.png)
</figure>

Há alguns benefícios e desvantagens na utilização de Yubico OTP quando comparado com [TOTP](#time-based-one-time-password-totp).

O servidor de validação Yubico é um serviço baseado na nuvem, e os usuários confiam no Yubico que estão armazenando os dados de forma segura e não traçando o perfil dos usuários. O ID público associado a Yubico OTP é reutilizado em todos os sites e pode ser mais um meio para terceiros traçarem o perfil do usuário. Como [TOTP](#time-based-one-time-password-totp), Yubico OTP não fornece resistência ao phishing.

Se o seu modelo de ameaça exige que você tenha identidades diferentes em sites diferentes, **não** use Yubico OTP com a mesma chave de segurança de hardware entre esses sites como identificação pública é única para cada chave de segurança.

#### FIDO2 / U2F

[FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) / [**U2F**](https://en.wikipedia.org/wiki/Universal_2nd_Factor) é a forma mais segura e privada de autenticação de segundo fator. Embora a experiência do utilizador seja semelhante à de Yubico OTP, a chave não imprime uma senha única e valida com um servidor de terceiros. Em vez disso, o FIDO2 (e U2F) utiliza [criptografia de chave pública](https://en.wikipedia.org/wiki/Public-key_cryptography) para autenticação.

Quando um usuário cria uma conta, a chave pública é enviada para o serviço. Quando o usuário se logar no serviço, será necessário que o usuário "assine" alguns dados com sua chave privada. O benefício disso é que nenhum dado de senha é armazenado pelo serviço, portanto não há nada que um adversário possa roubar.

Esta apresentação discute o histórico de autenticação de senha, as armadilhas (como a reutilização de senha) e a discussão dos padrões FIDO2 e [WebAuthn](https://webauthn.guide) .

<iframe width="100%" style="height:50vh"
  src="https://www.youtube-nocookie.com/embed/aMo4ZlWznao"
  title="Como o FIDO2 e a WebAuthn Stop Account Takeovers"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

O FIDO2 / U2F tem propriedades de segurança e privacidade superiores quando comparado com qualquer método AMF.

Tipicamente para serviços web é usado com [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) que é uma parte do [recomendações W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#W3C_recommendation_(REC)). Ele usa autenticação de chave pública e é mais seguro que os segredos compartilhados usados nos métodos Yubico OTP e TOTP, pois inclui o nome de origem (geralmente, o nome do domínio) durante a autenticação. O atestado é fornecido para proteger o usuário do phishing, pois ajuda a determinar que ele está usando o serviço autêntico e não uma cópia falsa.

A WebAuthn não usa nenhuma identificação pública, portanto a chave é **não** identificável em diferentes sites como Yubico OTP. Ele também não utiliza nenhum servidor em nuvem de terceiros para autenticação. Toda a comunicação é completada entre a chave e o site em que o usuário está entrando. O FIDO2 / U2F também utiliza um contador que é incrementado no momento da utilização, a fim de evitar a reutilização da sessão.

Se um site ou serviço suportar FIDO2 / U2F para a autenticação, é altamente recomendável que o utilize em relação a qualquer outra forma de AMF.

## Recomendações Gerais

Nós temos estas recomendações gerais:

### Qual o método a utilizar?

Ao configurar o seu método AMF, tenha em mente que ele é apenas tão seguro quanto o seu método de autenticação mais fraco que você usa. Isto significa que é importante que você use apenas o melhor método de AMF disponível. Por exemplo, se você já estiver usando TOTP, você deve desativar o e-mail e SMS MFA. Se já estiver a utilizar o FIDO2 / U2F, não deve utilizar o Yubico OTP ou TOTP na sua conta.

### Cópias de segurança

Você deve sempre ter backups para o seu método AMF. As chaves de segurança do hardware podem ser perdidas, roubadas ou simplesmente parar de trabalhar com o tempo. É recomendado que você tenha um par de chaves de segurança de hardware com o mesmo acesso às suas contas, em vez de apenas uma.

Ao usar TOTP com um aplicativo autenticador, certifique-se de fazer backup das chaves de recuperação, do próprio aplicativo ou copie os "segredos compartilhados" para outra instância do aplicativo em um telefone diferente ou em um container criptografado (por exemplo [VeraCrypt](/encryption/#veracrypt)).

### Configuração inicial

Ao comprar uma chave de segurança, é importante que você altere as credenciais padrão, configure a proteção por senha para a chave e ative a confirmação por toque se a sua chave suportar tal recurso. Produtos como o [YubiKey](#yubikey) têm múltiplas interfaces com credenciais separadas para cada uma delas, portanto você deve passar por cima de cada interface e configurar a proteção também.

### Email e SMS

Se você tiver que usar o e-mail para AMF, certifique-se de que a conta de e-mail em si esteja segura com um método AMF adequado.

Se você usar o SMS MFA, use uma operadora que não irá trocar o seu número de telefone para um novo cartão SIM sem acesso à conta ou use um número VOIP dedicado de um provedor com segurança similar para evitar um [SIM swap](https://en.wikipedia.org/wiki/SIM_swap_scam) ataque.

[Ferramentas de AMF que recomendamos](../multi-factor-authentication.md ""){.md-button}

## Mais lugares para configurar o AMF

Além de proteger apenas os logins do seu site, a autenticação multi-factor pode ser usada para proteger os seus logins locais, chaves ssh ou mesmo bases de dados de senhas também.

### Windows

Yubico tem um dedicado [Credential Provider](https://docs.microsoft.com/en-us/windows/win32/secauthn/credential-providers-in-windows) que adiciona autenticação Challenge-Response para o fluxo de login de senha de usuário para contas locais do Windows. Se você tem um YubiKey com suporte a autenticação de Challenge-Response, dê uma olhada no [Yubico Login for Windows Configuration Guide](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide), que lhe permitirá configurar o AMF no seu computador Windows.

### macOS

macOS tem [suporte nativo](https://support.apple.com/guide/deployment/intro-to-smart-card-integration-depd0b888248/web) para autenticação com cartões inteligentes (PIV). Se você tem um smartcard ou uma chave de segurança de hardware que suporta a interface PIV como o YubiKey, recomendamos que você siga a documentação do seu smartcard / fornecedor de segurança de hardware e configure a autenticação de segundo fator para o seu computador MacOS.

Yubico tem um guia [Usando o seu YubiKey como Smart Card em macOS](https://support.yubico.com/hc/en-us/articles/360016649059) que o pode ajudar a configurar o seu YubiKey em macOS.

Após a configuração do seu smartcard/chave de segurança, recomendamos a execução deste comando no Terminal:

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool SIM
```

O comando irá evitar que um adversário contorne o AMF quando o computador arranca.

### Linux

!!! aviso
    Se o [hostname](https://en.wikipedia.org/wiki/Hostname) das alterações do seu sistema (como devido ao DHCP), você não conseguiria fazer login. É vital que você configure um hostname apropriado para o seu computador antes de seguir este guia.

O módulo `pam_u2f` no Linux pode fornecer dois factores de autenticação para o login do utilizador na maioria das distribuições Linux populares. Se você tem uma chave de segurança de hardware que suporta U2F, você pode configurar a autenticação MFA para o seu login. Yubico tem um guia [Ubuntu Linux Login Guide - U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) que deve funcionar em qualquer distribuição. Os comandos do gerenciador de pacotes, como "apt-get" e nomes de pacotes podem, no entanto, diferir. Este guia faz **não** se aplica ao SO Qubes.

### SO Qubes

Qubes OS tem suporte para autenticação Challenge-Response com YubiKeys. Se você tem um YubiKey com suporte a autenticação Challenge-Response, dê uma olhada no SO Qubes' [documentação YubiKey](https://www.qubes-os.org/doc/yubikey/) se você quiser configurar o AMF no SO Qubes.

### SSH

#### Chaves de segurança do hardware

O SSH MFA pode ser configurado usando vários métodos diferentes de autenticação que são populares com chaves de segurança de hardware. Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

#### Palavra-passe única baseada no tempo (TOTP)

SSH MFA também pode ser configurado usando TOTP e DigitalOcean forneceu um tutorial [Como configurar autenticação multi-fator para SSH no Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04). A maioria das coisas deve ser a mesma independentemente da distribuição, no entanto os comandos do gerenciador de pacotes, como "apt-get" e nomes de pacotes podem ser diferentes.

### KeePass (e KeePassXC)

As bases de dados KeePass e KeePassXC podem ser protegidas usando Challenge-Response ou HOTP como um segundo factor de autenticação. Yubico forneceu um documennt para KeePass [Usando a sua YubiKey com KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) e também existe um no website [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa) .
