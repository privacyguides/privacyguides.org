---
title: Navegadores Web
icon: octicons/browser-16
---

Estas são as nossas recomendações e configurações atuais do navegador web. Recomendamos manter as extensões a um mínimo: elas têm acesso privilegiado dentro do seu navegador, exigem que você confie no desenvolvedor, podem fazer você [se destacar](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), e [enfraquecer](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) isolamento do site.

## Recomendações Gerais

### Navegador Tor

!!! anonimato "Este produto proporciona anonimato".

!!! recomendação

    ![logótipo Tor Browser](/assets/img/browsers/tor.svg){ align=right }
    
    **Navegador do tor*** é a escolha se você precisar de anonimato. Este navegador fornece acesso às Pontes Tor e [Rede Tor](https://en.wikipedia.org/wiki/Tor_(rede)), juntamente com extensões que podem ser configuradas automaticamente para se ajustarem aos seus três níveis de segurança - *Standard*, *Safer* e *Safest*. Recomendamos que você não altere nenhuma das configurações padrão do Tor Browser fora dos níveis de segurança padrão.
    
    [Visite torproject.org](https://www.torproject.org){ .md-button .md-button--primary } [:pg-tor:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .md-button } [Política de Privacidade](https://support.torproject.org/tbb/tbb-3/){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.torproject.org/download/)
    - [:fontawesome-brands-apple: macOS](https://www.torproject.org/download/)
    - [:fontawesome-brands-linux: Linux](https://www.torproject.org/download/)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/com.github.micahflee.torbrowser-launcher)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
    - [:pg-f-droid: F-Droid](https://guardianproject.info/fdroid/)
    - [:fontawesome-brands-git: Source](https://trac.torproject.org/projects/tor)

!!! aviso
    Você deve **nunca** instalar quaisquer extensões adicionais no Tor Browser, incluindo as que sugerimos para o Firefox. As extensões do navegador fazem você se destacar de outros usuários Tor e seu navegador mais fácil de [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

## Recomendações do Desktop Browser

### Firefox

!!! recomendação

    ![logotipo Firefox](/assets/img/browsers/firefox.svg){ align=right }
    
    **Firefox** fornece fortes configurações de privacidade, como [Enhanced Tracking Protection](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop), que pode ajudar a bloquear vários [tipos de rastreamento](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop#w_what-enhanced-tracking-protection-blocks).
    
    [Visite firefox.com](https://firefox.com){ .md-button .md-button--primary } [Política de Privacidade](https://www.mozilla.org/privacy/firefox){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://www.mozilla.org/firefox/windows)
    - [:fontawesome-brands-apple: macOS](https://www.mozilla.org/firefox/mac)
    - [:fontawesome-brands-linux: Linux](https://www.mozilla.org/firefox/linux)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.mozilla.firefox)
    - [:fontawesome-brands-git: Fonte](https://hg.mozilla.org/mozilla-central)

!!! aviso
    Firefox inclui um exclusivo [download token](https://bugzilla.mozilla.org/show_bug.cgi?id=1677497#c0) em downloads do site da Mozilla e usa telemetria no Firefox para enviar o token. O símbolo é **não** incluído nos lançamentos do [Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/).

#### Configuração recomendada

Estas opções podem ser encontradas na página *Privacidade & Segurança* configurações ( ≡ → Configurações → Privacidade & Segurança).

**Protecção de Rastreio Melhorada (ETP):**

<ul style="list-style-type:none;padding-left:0;">
    <li>Selecione: "Restrito".</li>
</ul>

**Sanitizze on Close:**

<ul style="list-style-type:none;padding-left:0;">
    <li>Selecione: "Eliminar cookies e dados do site quando o Firefox estiver fechado".</li>
</ul>
Você ainda pode ficar logado em sites, permitindo exceções.

**Desactivar Sugestões de Pesquisa:**

*Estas características podem não estar disponíveis, dependendo da sua região.*

<ul style="list-style-type:none;padding-left:0;">
    <li>Desligue: "Sugestões da web"</li>
    <li>Desligue: "Sugestões de patrocinadores".</li>
    <li>Desligue: "Melhore a experiência Firefox Suggest"</li>
</ul>

**Desactivar a Telemetria:**

<ul style="list-style-type:none;padding-left:0;">
    <li>Desmarca: "Permitir que o Firefox envie dados técnicos e de interação para a Mozilla".</li>
    <li>Desmarca: "Permitir que o Firefox instale e execute estudos"</li>
    <li>Desmarca: "Permitir que o Firefox envie relatórios de falhas em atraso em seu nome".</li>
</ul>

**Modo HTTPS-Only:**

<ul style="list-style-type:none;padding-left:0;">
    <li>Selecione: "Activar o modo HTTPS-Only em todas as janelas".</li>
</ul>

#### Sincronia:

O serviço [Firefox sync](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) é encriptado de ponta a ponta.

#### Extensões

Geralmente não recomendamos a instalação de nenhuma extensão, pois elas aumentam a sua [superfície de ataque](https://en.wikipedia.org/wiki/Attack_surface); no entanto, se você quiser bloqueio de conteúdo, [uBlock Origin](/browsers/#additional-resources) pode ser útil para você. A extensão também é um 🏆️ [Extensão recomendada](https://support.mozilla.org/kb/add-on-badges#w_recommended-extensions) pelo Mozilla.

#### Arkenfox (avançado)

O projeto [Arkenfox](https://github.com/arkenfox/user.js) fornece um conjunto de opções cuidadosamente consideradas para o Firefox. Estas opções são bastante rígidas, mas algumas são subjectivas e podem fazer com que alguns websites não funcionem correctamente. Você pode facilmente alterar essas configurações para atender às suas necessidades. Nós **recomendamos fortemente** leitura através do seu [wiki](https://github.com/arkenfox/user.js/wiki). Arkenfox também permite [container](https://support.mozilla.org/en-US/kb/containers#w_for-advanced-users) suporte.

## Recomendações do Navegador Móvel

No Android, o motor do Mozilla [GeckoView](https://mozilla.github.io/geckoview/) ainda tem que suportar [isolamento do site](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) ou activar [isoladoProcesso](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196). Firefox no Android também ainda não tem [HTTPS-Only mode](https://github.com/mozilla-mobile/fenix/issues/16952#issuecomment-907960218) built-in. Nós não recomendamos Firefox ou qualquer navegador baseado em Gecko neste momento.

No iOS, qualquer aplicativo que pode navegar na web é [restrito](https://developer.apple.com/app-store/review/guidelines) para usar um navegador da web fornecido pela Apple [WebKit framework](https://developer.apple.com/documentation/webkit), então há pouca razão para usar um navegador da web de terceiros.

### Bromite

!!! recomendação

    ![logotipo Bromite](/assets/img/browsers/bromite.svg){ align=right }
    
    **Bromite** é um navegador [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser))- com melhorias de privacidade e segurança, bloqueio de anúncios incorporado e algumas impressões digitais aleatórias.
    
    [Visite bromite.org](https://www.bromite.org){ .md-button .md-button--primary } [Política de Privacidade](https://www.bromite.org/privacy){ .md-button }
    
    **Downloads***
    - [:fontawesome-brands-android: Android](https://www.bromite.org/fdroid)
    - [:fontawesome-brands-github: Fonte](https://github.com/bromite/bromite)

Estas opções podem ser encontradas em *Privacidade e Segurança* ( ⁝ → ⚙️ Settings → Privacy and Security).

**Modo HTTPS-Only:**

<ul style="list-style-type:none;padding-left:0;">
    <li>Selecione: Use sempre ligações seguras.</li>
</ul>

**Modo Sempre On-line Incógnito:**

<ul style="list-style-type:none;padding-left:0;">
    <li>Selecione: "Abrir links em abas incógnitas sempre".</li>
    <li>Selecione: "Fechar todas as abas abertas na saída".</li>
    <li>Selecione: "Abrir links externos em incógnito".</li>
</ul>

### Safari

!!! recomendação

    ![logotipo Safari](/assets/img/browsers/safari.svg){ align=right }
    
    **Safari** é o navegador padrão no iOS. Inclui [características de privacidade](https://support.apple.com/guide/iphone/browse-the-web-privately-iphb01fc3c85/15.0/ios/15.0), tais como Proteção de Rastreamento Inteligente, Relatório de Privacidade, abas isoladas de Navegação Privada, iCloud Private Relay, e atualizações automáticas de HTTPS.
    
    [Visite apple.com](https://www.apple.com/safari/){ .md-button .md-button--primary } [Política de Privacidade](https://www.apple.com/legal/privacy/data/en/safari/){ .md-button }

#### Configuração recomendada

Estas opções podem ser encontradas em *Privacidade e Segurança* (⚙️ Configurações → Safari → Privacidade e Segurança).

**Prevenção de Tracking Cross-Site:**

Alternar esta configuração permite ao WebKit [Intelligent Tracking Protection](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp).
<ul style="list-style-type:none;padding-left:0;">
    <li>Alternar: "Prevenir Rastreamento Transversal".</li>
</ul>

**Relatório de Privacidade:**

O Relatório de Privacidade fornece um instantâneo dos localizadores cruzados actualmente impedidos de traçar o seu perfil no website que está a visitar. Ele também pode exibir um relatório semanal para mostrar quais rastreadores foram bloqueados ao longo do tempo.

O Relatório de Privacidade é acessível através do ícone "**Aa**" na barra de URL.

**Medição de Privacidade Preservando Anúncios:**

Este é o próprio WebKit [implementação](https://webkit.org/blog/8943/privacy-preserving-ad-click-attribution-for-the-web/) de atribuição de privacidade preservando a atribuição de clique do anúncio. Se você não quiser participar, você pode desativar esta funcionalidade.
<ul style="list-style-type:none;padding-left:0;">
    <li>Toggle Off: "Privacy Preserving Ad Measurement".</li>
</ul>

**Apple Pay:**

Se você não usar o Apple Pay, você pode desativar a capacidade dos sites para verificá-lo.
<ul style="list-style-type:none;padding-left:0;">
    <li>Toggle Off: "Verifique o Apple Pay".</li>
</ul>

**Navegação Sempre Ligada Particular:**

Abra o Safari e pressione o ícone das abas no canto inferior direito. Grupos de abas abertas, localizados no centro inferior.
<ul style="list-style-type:none;padding-left:0;">
    <li>Selecione: "Privado".</li>
</ul>

#### iCloud Sync

Enquanto a sincronização do Histórico do Safari, Tab Groups e iCloud Tabs é criptografada de ponta a ponta, os bookmarks são [não](https://support.apple.com/en-us/HT202303); eles são apenas criptografados em trânsito e armazenados em um formato criptografado nos servidores da Apple. A Apple pode ser capaz de decifrar e aceder a eles.

Se você usa o iCloud, também recomendamos verificar se o local padrão de download do Safari está definido localmente no seu dispositivo. Esta opção pode ser encontrada em *General* (⚙️ Settings → Safari → General → Downloads).

#### Extensões

We generally do not recommend installing [any extensions](https://www.sentinelone.com/blog/inside-safari-extensions-malware-golden-key-user-data/) as they increase your browser's [attack surface](https://en.wikipedia.org/wiki/Attack_surface); however, if you want content blocking, [AdGuard for Safari](/browsers/#additional-resources) might be useful to you.

## Recursos Adicionais

### Origem do uBlock

!!! recomendação

    ![uBlock Origin logo](/assets/img/browsers/ublock_origin.svg){ align=right }
    
    **uBlock Origin** é um bloqueador de conteúdo popular que pode ajudá-lo a bloquear anúncios, rastreadores e scripts de impressão digital.
    
    Sugerimos ativar todas as [listas de filtros](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) sob os "Anúncios", "Privacidade", e "Domínios Malware". As listas "Annoyances" e "Multipurpose" também podem ser ativadas, mas elas podem quebrar algumas funções das mídias sociais. A lista de filtros *AdGuard URL Tracking Protection* torna extensões como CleanURLs e NeatURLs redundantes.
    
    [Visite github.com](https://github.com/gorhill/uBlock){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin)
    - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
    - [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)
    - [:fontawesome-brands-opera: Opera](https://addons.opera.com/extensions/details/ublock)
    - [:fontawesome-brands-github: Source](https://github.com/gorhill/uBlock)

Sugerimos também a adição de [Ferramenta Encurtadora de URLs realmente legítimas](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt) lista e qualquer uma das listas regionais que possam se aplicar aos seus hábitos de navegação. Para adicionar esta lista, primeiro acesse as configurações clicando no ícone do uBO, depois o ícone de configurações (⚙️). Vá para o fundo do painel de listas de Filtros e coloque uma marca de verificação ao lado de Importar na seção Custom (Personalizado). Cole a URL da lista de filtros acima na área de texto que aparece abaixo e clique em "Aplicar alterações".

Listas de filtros adicionais fazem coisas mais lentas e podem aumentar a sua [superfície de ataque](https://en.wikipedia.org/wiki/Attack_surface), por isso aplique apenas o que precisar.

uBlock Origin também tem diferentes [modos de bloqueio](https://github.com/gorhill/uBlock/wiki/Blocking-mode). O modo fácil [pode não](https://www.ranum.com/security/computer_security/editorials/dumb/) necessariamente mantê-lo seguro de todos os rastreadores lá fora, enquanto os modos mais avançados permitem que você controle exatamente o que precisa rodar.

### AdGuard para Safari

!!! recomendação

    ![logotipo AdGuard](/assets/img/browsers/adguard.svg){ align=right }
    
    **AdGuard for Safari** é uma extensão gratuita e de código aberto para bloqueio de conteúdo do Safari que usa a API nativa [Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker). 
    
    Sugerimos activar os filtros labled *#recommended* sob "Ad Blocking" e "Privacy" [bloqueadores de conteúdo](https://kb.adguard.com/en/safari/overview#content-blockers). Os filtros *#recommended* também podem ser ativados para os bloqueadores de conteúdo "Social Widgets" e "Annoyances", mas eles podem quebrar algumas funções das mídias sociais.
    
    [Visite adguard.com](https://adguard.com/en/adguard-safari/overview.html){ .md-button .md-button--primary } [Política de Privacidade](https://adguard.com/en/privacy/safari.html){ .md-button }
    
    **Downloads**
    - [:fontawesome-brands-safari: Safari](https://apps.apple.com/app/adguard-for-safari/id1440147259)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/apple-store/id1047223162)
    - [:fontawesome-brands-git: Source](https://github.com/AdguardTeam/AdGuardForSafari)

Listas de filtros adicionais fazem coisas mais lentas e podem aumentar a sua [superfície de ataque](https://en.wikipedia.org/wiki/Attack_surface), por isso aplique apenas o que precisar.

Há também [AdGuard para iOS](https://adguard.com/en/adguard-ios/overview.html) que é capaz de realizar o bloqueio de conteúdo em todo o sistema por meio de filtragem DNS.

### Termos do Serviço; Não li

!!! nota

    Não recomendamos a instalação do ToS;DR como uma extensão do navegador. A mesma informação é fornecida no site deles.

!!! recomendação

    ![Termos do Serviço; Não li o logo](/assets/img/img/browsers/terms_of_service_didnt_read.svg){ align=right }
    
    **Termos de Serviço; Não leu** classifica os sites com base nos seus termos de acordos de serviço e políticas de privacidade. Também fornece pequenos resumos desses acordos. As análises e classificações são publicadas de forma transparente por uma comunidade de revisores.
    
    [Visite tosdr.org](https://tosdr.org){ .md-button .md-button--primary } [Política de Privacidade](https://addons.mozilla.org/firefox/addon/terms-of-service-didnt-read/privacy){ .md-button }
