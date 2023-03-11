---
title: "Firmware Bộ định tuyến"
icon: material/router-wireless
description: These alternative operating systems can be used to secure your router or Wi-Fi access point.
---

Dưới đây là một số hệ điều hành thay thế, có thể được sử dụng trên bộ định tuyến, điểm truy cập Wi-Fi, v.v.

## OpenWrt

!!! khuyến nghị

    ![OpenWrt logo](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** là một hệ điều hành (cụ thể là hệ điều hành nhúng) dựa trên nhân Linux, chủ yếu được sử dụng trên các thiết bị nhúng để định tuyến lưu lượng mạng. Các thành phần chính là Linux kernel, using-linux, uClibc và BusyBox. Tất cả các thành phần đã được tối ưu hóa về kích thước, đủ nhỏ để phù hợp với bộ nhớ và lưu trữ hạn chế có sẵn trong bộ định tuyến gia đình.
    
    [Homepage](https://openwrt.org){ .md-button .md-button--primary }
    
    ???

Bạn có thể tham khảo OpenWrt's [table of hardware](https://openwrt.org/toh/start) để kiểm tra xem thiết bị của bạn có được hỗ trợ hay không.

## OPNsense

!!! khuyến nghị

    ![pfSense logo](assets/img/router/pfsense.svg#only-light){ align=right }
    ![pfSense logo](assets/img/router/pfsense-dark.svg#only-dark){ align=right }
    
    pfSense là một bản phân phối phần mềm máy tính tường lửa/bộ định tuyến mã nguồn mở dựa trên FreeBSD. Nó được cài đặt trên máy tính để làm tường lửa/bộ định tuyến chuyên dụng cho mạng và được chú ý về độ tin cậy và cung cấp các tính năng thường chỉ có trong các tường lửa thương mại đắt tiền.
    
    pfSense thường được triển khai dưới dạng tường lửa vành đai, bộ định tuyến, điểm truy cập không dây, máy chủ DHCP, máy chủ DNS và điểm cuối VPN.

OPNsense was originally developed as a fork of [pfSense](https://en.wikipedia.org/wiki/PfSense), and both projects are noted for being free and reliable firewall distributions which offer features often only found in expensive commercial firewalls. Launched in 2015, the developers of OPNsense [cited](https://docs.opnsense.org/history/thefork.html) a number of security and code-quality issues with pfSense which they felt necessitated a fork of the project, as well as concerns about Netgate's majority acquisition of pfSense and the future direction of the pfSense project.

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! cảnh báo
    PrivateBin sử dụng JavaScript để xử lý mã hóa, vì vậy bạn phải tin tưởng nhà cung cấp ở mức độ họ không đưa bất kỳ JavaScript độc hại nào vào để lấy khóa cá nhân của bạn.

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** là một pastebin trực tuyến mã nguồn mở, tối giản, nơi máy chủ không có kiến ​​thức về dữ liệu đã dán. Dữ liệu được mã hóa/giải mã trong trình duyệt bằng 256-bit AES. tải xuống
    
        - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/vaultwarden/server)
        - [:fontawesome-brands-github: Mã nguồn](https://github.com/dani-garcia/vaultwarden)

- Must be open source.
- Must receive regular updates.
- Must support a wide variety of hardware.
