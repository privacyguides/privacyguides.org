---
title: "DNS简介"
icon: material/dns
---

[域名系统](https://en.wikipedia.org/wiki/Domain_Name_System) 是“互联网电话簿”。 DNS将域名转换为IP地址，以便浏览器和其他服务可以通过分散的服务器网络加载互联网资源。

## 什么是DNS？

当您访问某个网站时，系统会返回一个数字地址。 例如，当你访问 `privacyguides.org`时，会返回地址 `192.98.54.105`。

DNS自互联网的 [早期](https://en.wikipedia.org/wiki/Domain_Name_System#History) 以来一直存在。 与DNS服务器间的通讯通常是 **未** 加密的。 在家用场景下，客户通过 [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)获得由ISP提供的服务器。

未加密的DNS请求可能会被轻易地 **被监视** ，或者在传输过程中 **被修改**。 在世界的某些地方，Isp被要求做原始的 [DNS过滤](https://en.wikipedia.org/wiki/DNS_blocking)。 当你请求一个被封锁的域名的IP地址时，服务器可能不会回应，或可能以不同的IP地址回应。 由于DNS协议没有加密，ISP（或任何网络运营商）可以使用 [DPI](https://en.wikipedia.org/wiki/Deep_packet_inspection) 来监控请求。 ISP还可以基于共有特性阻止请求，无论使用的是哪个DNS服务器。 未加密的DNS始终使用 [端口](https://en.wikipedia.org/wiki/Port_(computer_networking)) 53 ，并且始终使用UDP。

下面，我们将探讨并提供一个教程来验证一下外部观察者对于使用常规未加密DNS和 [加密DNS](#what-is-encrypted-dns)这两种情况下分别可能看到什么。

### 未加密DNS

1. 使用 [`tshark`](https://www.wireshark.org/docs/man-pages/tshark.html) （ [Wireshark](https://en.wikipedia.org/wiki/Wireshark) 项目的一部分），我们可以监测和记录互联网数据包流。 此命令记录符合指定规则的数据包:

    ```bash
    tshark -w /tmp/dns.pcap udp port 53 and host 1.1.1.1 or host 8.8.8.8
    ```

2. 然后我们可以使用 [`dig`](https://en.wikipedia.org/wiki/Dig_(command)) （Linux，MacOS等）或 [`nslookup`](https://en.wikipedia.org/wiki/Nslookup) （Windows）将DNS查询发送到两个服务器。 Web浏览器等软件会自动执行这些查找，除非它们被配置为使用加密的DNS。

    === "Linux, macOS"

        ```
        dig +noall +answer privacyguides.org @1.1.1.1
        dig +noall +answer privacyguides.org @8.8.8.8
        ```
    === "Windows"

        ```
        nslookup privacyguides.org 1.1.1.1
        nslookup privacyguides.org 8.8.8.8
        ```

3. 接下来，我们来 [分析](https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html#ChIntroWhatIs) 输出的结果：

    === "Wireshark"

        ```
        wireshark -r /tmp/dns.pcap
        ```

    === "tshark"

        ```
        tshark -r /tmp/dns.pcap
        ```

如果运行上面的Wireshark命令，顶部窗格显示“[帧](https://en.wikipedia.org/wiki/Ethernet_frame)” ，底部窗格显示有关所选帧的所有数据。 企业过滤和监控解决方案（如政府购买的解决方案）可以自动完成这一过程，无需人工干预，并可以汇总多帧数据以产生对网络观察者有用的统计数据。

| No. | 时间       | 来源        | 目的地       | 协议  | 长度  | 信息                                                                     |
| --- | -------- | --------- | --------- | --- | --- | ---------------------------------------------------------------------- |
| 1   | 0.000000 | 192.0.2.1 | 1.1.1.1   | 云存储 | 104 | Standard query 0x58ba A privacyguides.org OPT                          |
| 2   | 0.293395 | 1.1.1.1   | 192.0.2.1 | 云存储 | 108 | Standard query response 0x58ba A privacyguides.org A 198.98.54.105 OPT |
| 3   | 1.682109 | 192.0.2.1 | 8.8.8.8   | 云存储 | 104 | Standard query 0xf1a9 A privacyguides.org OPT                          |
| 4   | 2.154698 | 8.8.8.8   | 192.0.2.1 | 云存储 | 108 | Standard query response 0xf1a9 A privacyguides.org A 198.98.54.105 OPT |

观察者可以修改这些数据包中的任何一个。

## 什么是“加密DNS” ？

加密DNS可以指代若干协议中的一种，最常见的协议是：

### DNSCrypt

[**DNSCrypt**](https://en.wikipedia.org/wiki/DNSCrypt) 是首批加密DNS查询的方法之一。 DNSCrypt在端口443上运行，并可以使用TCP或UDP传输协议。 DNSCrypt从未提交给 [互联网工程任务组（IETF）](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) 也没有经过 [征求意见（RFC）](https://en.wikipedia.org/wiki/Request_for_Comments) 过程，因此除了少数 [实现](https://dnscrypt.info/implementations)之外没有被广泛使用。 因此，它在很大程度上被更流行的 [DNS over HTTPS](#dns-over-https-doh)取代了。

### DNS over TLS (DoT)

[**DNS over TLS**](https://en.wikipedia.org/wiki/DNS_over_TLS) 是另一种加密DNS通信的方法，在 [RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858)中被定义。 首次得到支持是在安卓9、iOS 14和Linux上，被版本号237的 [systemd-resolved](https://www.freedesktop.org/software/systemd/man/resolved.conf.html#DNSOverTLS=) 实现。 近年来，业界的偏好已经从DoT转向DoH，因为DoT是一个 [复杂的协议](https://dnscrypt.info/faq/) ，并且在现有的实现中对RFC的遵守情况各不相同。 DoT也在一个专用的853端口上运行，该端口很容易被限制性的防火墙阻断。

### DNS over HTTPS (DoH)

[**DNS over HTTPS**](https://en.wikipedia.org/wiki/DNS_over_HTTPS)由[RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) 定义，查询通过[HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) 协议打包并通过 HTTPS保障安全性. 由Firefox 60和Chrome 83等Web浏览器首次实现支持。 由Firefox 60和Chrome 83等Web浏览器首次实现支持。

DoH的原生实现出现在iOS 14、macOS 11、微软Windows和Android 13中（然而，它不会被默认启用 [](https://android-review.googlesource.com/c/platform/packages/modules/DnsResolver/+/1833144)）。 一般的Linux桌面支持还在等待systemd [实现](https://github.com/systemd/systemd/issues/8639) ，所以 [目前依然需要安装第三方软件](../dns.md#linux)。

## 外部一方能看到什么？

在本示例中，我们将记录当我们提出DoH请求时会发生什么：

1. 首先，启动 `tshark`。

    ```bash
    tshark -w /tmp/dns_doh.pcap -f "tcp port https and host 1.1.1.1"
    ```

2. 其次，使用 `curl`提出请求：

    ```bash
    curl -vI --doh-url https://1.1.1.1/dns-query https://privacyguides.org
    ```

3. 在提出请求后，我们可以用 <kbd>CTRL</kbd> + <kbd>C</kbd>停止抓包。

4. 在Wireshark中分析结果：

    ```bash
    wireshark -r /tmp/dns_doh.pcap
    ```

我们可以看到任何加密连接都需要发生的 [连接建立](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment) 和 [TLS握手](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/) 过程。 当查看下面的“应用程序数据”数据包时，没有一个数据包包含我们请求的域或返回的IP地址。

## 为什么我**不应该** 使用加密的DNS？

在有互联网过滤（或审查）的地方，访问被禁止的资源可能会有自己的后果，你应该在你的 [威胁模型](../basics/threat-modeling.md)。 我们 **不** 建议为此目的使用加密的DNS。 使用 [Tor](https://torproject.org) 或 [VPN](../vpn.md) 来代替。 如果您使用的是VPN ，则应使用VPN的DNS服务器。 使用VPN时，您已经信任它们的所有网络活动。

当我们进行DNS查找时，通常是因为我们想要访问资源。 下面，我们将讨论一些即使在使用加密的DNS时也可能泄露你的浏览活动的方法。

### IP 地址

确定浏览活动的最简单方法可能是查看你的设备所访问的IP地址。 例如，如果观察者知道 `privacyguides.org` 在 `198.98.54.105`，而你的设备正在从 `198.98.54.105`请求数据，你很有可能正在访问隐私指南。

这种方法只有在IP地址属于一个只承载少数网站的服务器时才有用。 如果网站托管在一个共享平台上（如Github Pages、Cloudflare Pages、Netlify、WordPress、Blogger等），它也不是很有用。 如果服务器托管在一个 [反向代理](https://en.wikipedia.org/wiki/Reverse_proxy)，它也不是很有用，这在现代互联网上非常普遍。

### 服务器名称指示（SNI）

服务器名称指示通常在一个IP地址承载许多网站时使用。 这可能是一个像Cloudflare这样的服务，或其他一些 [拒绝服务攻击](https://en.wikipedia.org/wiki/Denial-of-service_attack) 保护。

1. 再次开始捕获 `tshark`。 我们用我们的IP地址添加了一个过滤器，所以你不会捕获很多数据包。

    ```bash
    tshark -w /tmp/pg.pcap port 443 and host 198.98.54.105
    ```

2. 然后我们访问 [https://privacyguides.org](https://privacyguides.org)。

3. 访问完网站后，我们要用 <kbd>CTRL</kbd> + <kbd>C</kbd>停止抓包。

4. 接下来我们要分析结果：

    ```bash
    wireshark -r /tmp/pg.pcap
    ```

    我们将看到连接的建立，然后是隐私指南网站的TLS握手。 第5帧左右。 你会看到一个 "Client Hello"。

5. 展开每个字段旁边的三角形 &#9656;。

    ```text
    ▸ Transport Layer Security
      ▸ TLSv1.3 Record Layer: Handshake Protocol: Client Hello
        ▸ Handshake Protocol: Client Hello
          ▸ Extension: server_name (len=22)
            ▸ Server Name Indication extension
    ```

6. 我们可以看到SNI值，它披露了我们正在访问的网站。 `tshark` 命令可以直接给你包含SNI值的所有数据包的值。

    ```bash
    tshark -r /tmp/pg.pcap -Tfields -Y tls.handshake.extensions_server_name -e tls.handshake.extensions_server_name
    ```

这意味着即使我们使用 "加密DNS "服务器，域名也可能通过SNI被披露。 [TLS v1.3](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.3) 协议带来了 [Client Hello](https://blog.cloudflare.com/encrypted-client-hello/)，可以防止这种泄漏。

</a> 各国政府，特别是 [中国](https://www.zdnet.com/article/china-is-now-blocking-all-encrypted-https-traffic-using-tls-1-3-and-esni/) 和 [俄罗斯](https://www.zdnet.com/article/russia-wants-to-ban-the-use-of-secure-protocols-such-as-tls-1-3-doh-dot-esni/)，已经开始阻止

，或表示希望这样做。 [最近，俄罗斯开始封锁使用 [HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) 标准的外国网站](https://github.com/net4people/bbs/issues/108)。 这是因为作为HTTP/3一部分的 [QUIC](https://en.wikipedia.org/wiki/QUIC) 协议要求 `ClientHello` 也被加密。</p> 



### 在线证书状态协议（OCSP）

你的浏览器披露你的浏览活动的另一种方式是通过 [在线证书状态协议](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol)。 当访问一个HTTPS网站时，浏览器可能会检查该网站的 [证书](https://en.wikipedia.org/wiki/Public_key_certificate) 是否已被撤销。 这通常是通过HTTP协议完成的，这意味着它是 **，而不是** 加密的。

该OCSP请求包含证书"[序列号](https://en.wikipedia.org/wiki/Public_key_certificate#Common_fields)"，该证书是唯一的。 它被发送到 "OCSP响应者"，以检查其状态。

我们可以使用 [`openssl`](https://en.wikipedia.org/wiki/OpenSSL) 命令来模拟浏览器会做什么。

1. 获取服务器证书，并使用 [`sed`](https://en.wikipedia.org/wiki/Sed) ，只保留重要部分，并将其写入文件。 
   
   

    ```bash
    openssl s_client -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_server.cert
    ```


2. 获得中间证书。 [证书颁发机构（CA）](https://en.wikipedia.org/wiki/Certificate_authority) ，通常不直接签署证书；他们使用所谓的 "中间 "证书。 
   
   

    ```bash
    openssl s_client -showcerts -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_and_intermediate.cert
    ```


3. `pg_and_intermediate.cert` 中的第一个证书实际上是步骤1中的服务器证书。 我们可以再次使用 `sed` ，删除直到END的第一个实例。 
   
   

    ```bash
    sed -n '/^-*END CERTIFICATE-*$/!d;:a n;p;ba' \
        /tmp/pg_and_intermediate.cert > /tmp/intermediate_chain.cert
    ```


4. 获取服务器证书的OCSP应答器。 
   
   

    ```bash
    openssl x509 -noout -ocsp_uri -in /tmp/pg_server.cert
    ```


我们的证书显示的是Lets Encrypt证书响应者。 如果我们想查看证书的所有详细信息，我们可以使用： 



    ```bash
    openssl x509 -text -noout -in /tmp/pg_server.cert
    ```


5. 开始捕获数据包。 
   
   

    ```bash
    tshark -w /tmp/pg_ocsp.pcap -f "tcp port http"
    ```


6. 提出OCSP请求。 
   
   

    ```bash
    openssl ocsp -issuer /tmp/intermediate_chain.cert \
                 -cert /tmp/pg_server.cert \
                 -text \
                 -url http://r3.o.lencr.org
    ```


7. 打开捕获。 
   
   

    ```bash
    wireshark -r /tmp/pg_ocsp.pcap
    ```


在 "OCSP "协议中会有两个数据包：一个 "请求 "和一个 "响应"。 对于 "请求"，我们可以通过展开每个字段旁边的三角形 &#9656; ，看到 "序列号"。 



    ```bash
    ▸ Online Certificate Status Protocol
      ▸ tbsRequest
        ▸ requestList: 1 item
          ▸ Request
            ▸ reqCert
              serialNumber
    ```


对于 "回应"，我们也可以看到 "序列号"。 



    ```bash
    ▸ Online Certificate Status Protocol
      ▸ responseBytes
        ▸ BasicOCSPResponse
          ▸ tbsResponseData
            ▸ responses: 1 item
              ▸ SingleResponse
                ▸ certID
                  serialNumber
    ```


8. 或者使用 `tshark` 来过滤序列号的数据包。 
   
   

    ```bash
    tshark -r /tmp/pg_ocsp.pcap -Tfields -Y ocsp.serialNumber -e ocsp.serialNumber
    ```


如果网络观察者拥有公开的公共证书，他们可以将序列号与该证书相匹配，从而从中确定你所访问的网站。 这个过程可以自动化，并能将IP地址与序列号联系起来。 也可以检查 [证书透明度](https://en.wikipedia.org/wiki/Certificate_Transparency) 日志中的序列号。



## 我应该使用加密的DNS吗？

我们做了这个流程图来描述你什么时候 *应该* 使用加密的DNS。



``` mermaid
图TB
    开始[Start] --> 匿名{尝试<br> 匿名？}
    anonymous--> | Yes | tor(使用Tor)
    anonymous--> | No | censorship{Avoiding<br> censorship?｝
    审查 --> | 是 | vpnOrTor(使用<br> VPN或Tor)
    审查 --> | 不 | 隐私{想从ISP那里获得隐私<br>？}。
    privacy --> | Yes | vpnOrTor
    privacy --> | No | obnoxious{ISP使<br> obnoxious<br> redirects? }
    obnoxious --> | Yes | encryptedDNS(使用第三方的<br> 加密DNS<br> )
    obnoxious --> | No | ispDNS{ISP是否支持<br> 加密DNS？ }
    ispDNS --> | 是 | useISP(与ISP一起使用<br> 加密DNS<br> )
    ispDNS --> | 否 | nothing(什么都不做)
```


第三方的加密DNS应该只用于绕过重定向和基本的 [DNS拦截](https://en.wikipedia.org/wiki/DNS_blocking) ，当你能确定不会有任何后果，或者你对一个能做一些基本过滤的供应商感兴趣时。

[推荐的DNS服务器列表](../dns.md ""){.md-button}



## 什么是DNSSEC？

[域名系统安全扩展](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) (DNSSEC)是DNS的一项功能，对域名查询的响应进行认证。 它不为这些查询提供隐私保护，而是防止攻击者操纵或毒害对DNS请求的响应。

换句话说，DNSSEC对数据进行数字签名，以帮助确保其有效性。 为了确保安全查询，签名发生在DNS查询过程中的每一级。 因此，来自DNS的所有答案都可以被信任。

DNSSEC的签署过程类似于某人用笔签署一份法律文件；该人用一个独特的签名签署，其他人无法创建，法院专家可以查看该签名并验证该文件是由该人签署的。 这些数字签名确保数据没有被篡改。

DNSSEC在DNS的所有层面上实现了分层的数字签名政策。 例如，在 `privacyguides.org` 查询的情况下，根 DNS 服务器将签署 `.org` 名称服务器的密钥，然后 `.org` 名称服务器将签署 `privacyguides.org`的权威名称服务器的密钥。

<small>改编自Google的[DNS安全扩展(DNSSEC)概述](https://cloud.google.com/dns/docs/dnssec)和Cloudflare的[DNSSEC: An Introduction](https://blog.cloudflare.com/dnssec-an-introduction/)，两者均以[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)授权。</small> 



## 什么是QNAME最小化？

QNAME是一个 "限定名称"，例如 `privacyguides.org`。 QNAME最小化减少了从DNS服务器发送至 [权威名称服务器的信息量](https://en.wikipedia.org/wiki/Name_server#Authoritative_name_server)。

而不是发送整个域名 `privacyguides.org`，QNAME最小化意味着DNS服务器将要求所有以 `.org`结尾的记录。 进一步的技术描述在 [RFC 7816](https://datatracker.ietf.org/doc/html/rfc7816)中定义。



## 什么是EDNS客户子网（ECS）？

[EDNS 客户端子网](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) 是递归 DNS 解析器为 [主机或客户端](https://en.wikipedia.org/wiki/Client_(computing)) 进行 DNS 查询时，指定一个 [子网](https://en.wikipedia.org/wiki/Subnetwork) 的一种方法。

它的目的是 "加快 "数据的交付，给客户一个属于离他们很近的服务器的答案，如 [内容交付网络](https://en.wikipedia.org/wiki/Content_delivery_network)，这通常用于视频流和服务JavaScript网络应用。

这项功能确实是以隐私为代价的，因为它告诉DNS服务器一些关于客户端位置的信息。
