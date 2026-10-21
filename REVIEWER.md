# COMP504 final exam reviewer

Read this with a blank sheet beside you. After each section, close the file and write the key rules from memory. Follow every calculation with a Packet Tracer check in [LABS.md](LABS.md).

## 1. The packet journey and network models

| OSI layer | Main job | Useful example / unit |
| --- | --- | --- |
| 7 Application | Network service used by software | HTTP, DNS, SMTP; data |
| 6 Presentation | Representation, encoding, compression, encryption | Data |
| 5 Session | Establishes and manages application sessions | Data |
| 4 Transport | End-to-end delivery, ports, segmentation | TCP segment or UDP datagram |
| 3 Network | Logical addressing and routing between networks | IPv4/IPv6 packet |
| 2 Data link | Local-hop framing, MAC addressing, error detection | Ethernet frame |
| 1 Physical | Signal over cable, fiber, or radio | Bits |

The course's **five-layer Internet model** combines OSI layers 5–7 into Application, then has Transport, Network, Data Link, and Physical. Encapsulation adds headers as data moves down the stack; decapsulation removes them at the receiver. Think `HTTP data → TCP segment → IP packet → Ethernet frame → bits`. A router normally removes the incoming frame and builds a new frame for the outgoing link; the IP destination remains the end host. A switch normally forwards the frame within the same Layer 2 network.

**Address jobs:** port number identifies an application process; IP address identifies a host/network across routed networks; MAC address identifies an interface on the local link. The destination MAC is for the **next hop**, which may be the final host or the default gateway.

**Check yourself:** A PC sends to a website outside its subnet. Whose MAC address goes in its first Ethernet frame? The local router interface's MAC, learned with ARP for IPv4.

## 2. Physical layer and number systems

**Circuit layout:** point-to-point connects two endpoints; multipoint shares a circuit among several. **Direction:** simplex only one way, half-duplex both ways but one at a time, full-duplex both ways simultaneously. **Attenuation** is signal weakening with distance. Noise/interference and distortion can make bits unreadable. Repeaters regenerate a signal; switches and access points also provide attachment points.

**Media:** twisted pair is common for Ethernet LANs; shielded cable helps in noisy environments; fiber carries light, handles long distances and is immune to electromagnetic interference; Wi-Fi uses radio. Match the medium to distance, capacity, environment, and cost. The supplied cable notes distinguish straight-through and crossover wiring; modern auto-MDI/MDIX often removes the need to choose manually, but know the course's conventional pairings.

**Binary:** an IPv4 octet has place values `128 64 32 16 8 4 2 1`. For example `192 = 128 + 64 = 11000000₂`, so `255.255.255.192` is `/26`. Hex is base 16, with `A–F` representing 10–15; it is used heavily in IPv6 notation and MAC addresses.

## 3. Data link, Ethernet, and switching

A Layer 2 frame wraps a Layer 3 packet. Ethernet frames carry source and destination MAC addresses and a frame check sequence (FCS). A receiver calculates the CRC and discards a corrupted frame; this detects errors but does not itself repair them. Parity, checksum, and CRC are different error-detection methods: parity adds a bit, checksum combines values, CRC uses polynomial division.

A switch **learns the source MAC and ingress port** of each received frame. It checks the destination MAC: known unicast goes to the learned port; unknown unicast and broadcast are flooded within the VLAN; a frame destined to a MAC on the same ingress port is filtered. Entries age out. A hub repeats to all ports and shares a collision domain. A switch gives each port its own collision domain; a VLAN defines a broadcast domain.

**ARP** resolves an IPv4 next-hop address to a MAC on the local link. If the destination is local, ARP for the destination IP; if remote, ARP for the default gateway IP. ARP requests are broadcasts; replies are usually unicast. IPv6 uses Neighbor Discovery rather than ARP.

**Switch modes:** store-and-forward receives the whole frame and can check FCS before forwarding; cut-through starts after reading the destination MAC, reducing latency but potentially forwarding a damaged frame. Fragment-free waits for the first 64 bytes before forwarding. The exam revision deck explicitly names switch modes and forwarding tables.

## 4. IPv4 addressing, subnetting, and VLSM

IPv4 addresses are 32 bits. A prefix `/p` has `p` network bits and `32-p` host bits. A host sends directly only when the destination is in its own subnet according to its mask; otherwise it sends to its default gateway. In ordinary IPv4 subnet exercises, `2^(32-p) - 2` gives usable host addresses. Network and broadcast addresses are not host addresses.

| Prefix | Mask | Block size | Usable hosts |
| --- | --- | ---: | ---: |
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /29 | 255.255.255.248 | 8 | 6 |
| /30 | 255.255.255.252 | 4 | 2 |

**Fast method:** find the interesting octet (first mask octet below 255). Block size is `256 − mask octet`. Network boundaries are multiples of that block size. For `10.1.8.200/26`, boundaries are `.0, .64, .128, .192`; `.200` is in `10.1.8.192/26`. Broadcast `.255`, usable `.193–.254`. Check by binary AND if unsure.

**VLSM:** list required LANs largest first; choose the smallest subnet with enough usable hosts; place each network at the next valid block boundary; record network, first, last, and broadcast; then assign gateway/switch/host addresses. A 47-host LAN needs `/26` (62 usable); a 28-host LAN `/27` (30); an 11-host LAN `/28` (14); a 5-host LAN `/29` (6); and a two-host point-to-point link `/30` (2). The worked `10.1.1.0/24` allocation in the supplied example is `.0/26`, `.64/27`, `.96/28`, `.112/29`, `.120/30`.

**Address types:** private IPv4 ranges are `10.0.0.0/8`, `172.16.0.0/12`, and `192.168.0.0/16`; loopback is `127.0.0.0/8`; link-local automatic addressing is `169.254.0.0/16`. Public addresses are globally routable when allocated; NAT can translate private addresses to public addresses. DHCP automatically leases settings such as address, mask, gateway, and DNS server.

## 5. Routing, ICMP, and IPv6

A router uses the destination IP and its routing table to choose an outgoing interface and next hop. The **longest matching prefix** wins among matching routes; a default route `0.0.0.0/0` catches destinations without a more specific route. A host default gateway must be a reachable address on its local subnet. Routers separate broadcast domains and do not forward ordinary Layer 2 broadcasts.

`ping` sends **ICMP Echo Request** and expects **Echo Reply**. `tracert`/`traceroute` uses TTL or hop limit expiration to reveal intermediate hops. A failed ping proves only that the test did not get a reply; check addressing, mask, gateway, interfaces, routing, filtering, and target behavior before deciding why.

IPv6 has 128-bit addresses written in hexadecimal groups. Leading zeros in a group may be omitted and one run of zero groups may be compressed with `::` once. Link-local addresses use `fe80::/10` and are used for neighbor and local-link operations; global unicast routes across networks. IPv6 has no broadcast; it uses multicast and Neighbor Discovery. The Cisco IPv6 module is supplied, so learn these basics even though the revision deck stresses IPv4.

## 6. TCP, UDP, DNS, and applications

| TCP | UDP |
| --- | --- |
| Connection setup using SYN, SYN-ACK, ACK | No transport connection setup |
| Sequence numbers, acknowledgements, retransmission, flow control | No built-in acknowledgements/retransmission |
| Ordered reliable byte stream | Datagram boundaries preserved, low overhead |
| Good for web transfers, email, file transfer | Common for DNS queries, voice/video, and other latency-sensitive uses |

**Ports** distinguish services on a host: HTTP 80, HTTPS 443, DNS 53, SMTP 25, FTP control 21, SSH 22, DHCP server 67/client 68. Know the service's role more than memorizing an exhaustive port list. DNS resolves a name to an IP address, often using UDP but sometimes TCP. HTTP exchanges requests and responses; HTTPS adds TLS. SMTP sends mail between clients/servers; IMAP or POP3 retrieves mail. Telnet gives remote terminal access but sends data without encryption; SSH is the secure alternative.

**Application architecture:** host-based centralizes nearly all work on the host; client-based moves most application work to clients; client-server divides it. In a two-tier design, clients usually handle presentation and application logic while a server stores data. A three-tier design separates presentation (client), application logic (application server), and data (database server). More tiers can scale or isolate components. A **thick client** contains much application logic; a thin client contains little. **Middleware** sits between client and server components to enable communication and data access. A server farm is multiple servers working together; a load balancer distributes requests.

## 7. Wired and wireless LANs

Ethernet is IEEE 802.3 at the data link layer with physical media beneath it. A switched Ethernet LAN uses a physical star and normally point-to-point links. Historical shared, half-duplex Ethernet used **CSMA/CD** to detect collisions; a modern full-duplex switched port does not have collisions and does not use CSMA/CD in normal operation. Token ring uses token passing, not CSMA/CD.

Wi-Fi is the IEEE 802.11 family. Stations associate with an access point (AP); active scanning sends probes, passive scanning listens for beacons. Wi-Fi uses **CSMA/CA** because detecting collisions over radio is difficult. Interference, channel choice, distance, building materials, and competing stations affect performance. The course contrasts 2.4 GHz and 5 GHz and surveys 802.11 standards; focus on trade-offs and be cautious with slide claims about what is “current.”

Know NIC, hub, switch, AP, router, server, network operating system (NOS), directory service/domain controller, and their jobs. A domain controller provides centralized identity/authentication in a Windows domain. A wireless router commonly combines router, switch, AP, DHCP, and NAT for a small network; a standalone AP bridges wireless clients into an existing LAN.

For design, locate the bottleneck before upgrading: overloaded server, uplink, WLAN channel, or WAN circuit require different fixes. Segment traffic with switches/VLANs, add capacity, use load balancing or caching where appropriate. For wireless security, WEP is obsolete; prefer secure WPA modes in real networks.

## 8. Network design, backbones, and VLANs

The course's building-block design loop is **needs analysis → technology design → cost assessment**, repeated as constraints become clearer. Needs analysis identifies users, applications, traffic, sites, growth, availability, and security. Produce a logical diagram first, then physical design and capacity choices, then cost comparison and proposal. A LAN serves a local area; building/campus backbones connect LANs; a WAN connects distant sites; Internet access connects to ISPs.

A **switched backbone** uses switches to connect LANs, often through a main distribution facility (MDF). A **routed backbone** uses Layer 3 addressing between segments, often across buildings. A **VLAN** logically separates Layer 2 broadcast domains even when users share physical switches. Access ports belong to one VLAN; an 802.1Q trunk carries multiple VLANs with tags. Devices in different VLANs need a Layer 3 device and suitable routes to communicate. Common checks are `show vlan brief` and `show interfaces trunk`.

## 9. WANs and the Internet

WANs connect sites over carrier services. A **dedicated circuit** reserves a point-to-point connection; **packet-switched services** share a provider network. A star is easier/cheaper but has a central dependency; full mesh has many links and high resilience/cost; partial mesh balances both. The course discusses legacy frame relay, MPLS, carrier Ethernet, VPN, and SD-WAN. A **VPN** uses an encrypted tunnel over another network; it is a way to connect users or sites, not a physical circuit type. SD-WAN uses software-based control to manage multiple WAN paths.

The Internet is a network of independently run networks/ISPs. ISPs exchange traffic through peering or transit. Home access examples: DSL over telephone local loop; cable modem over a shared cable network; fiber to the home uses optical access. Distinguish **access link** (home to ISP) from **backbone** (high-capacity network connecting provider sites).

## 10. Security

Security aims to protect confidentiality, integrity, and availability. A **threat** is a possible harmful event; a **vulnerability** is a weakness; **risk** combines likelihood and impact. Assess assets and threats, then choose controls: reduce/mitigate, avoid, transfer, or accept risk. Preventive controls include patching, access control, firewalls, strong authentication, and user training; detection and response include monitoring, intrusion detection/prevention, logs, backups, and recovery plans.

A firewall filters traffic by policy. NAT translates addresses and may conceal private addressing, but **NAT alone is not a security policy**. Symmetric encryption uses one shared secret key; public-key cryptography uses a public/private pair and enables signatures and certificate-based identity through PKI. TLS protects many application connections; IPsec can protect IP traffic in VPNs. Social engineering targets people; phishing is a common example.

## 11. Network management and troubleshooting

Network management covers configuration, performance, faults, user support, security, and cost. **SNMP** lets management software monitor devices; managed devices expose status and counters. Keep topology, addressing, device configs, changes, and incident records current. Performance work starts from a baseline; availability is the percentage of time service works. Track errors, utilization, response time, and failures before choosing a fix.

**Troubleshooting order:** (1) state the symptom and scope, (2) check physical/link state, (3) inspect local IP/mask and same-subnet ping, (4) test default gateway, (5) test a remote IP, (6) test DNS/name, (7) inspect routing/firewall/remote endpoint, (8) change one thing, retest, document. If local IP ping works but remote IP fails, suspect gateway/routing before DNS. If remote IP works but name fails, suspect DNS.

## 12. Command sheet for labs

| Goal | Command or place |
| --- | --- |
| Windows/PT PC address | `ipconfig` or Desktop → IP Configuration |
| Reachability/path | `ping <ip>`; `tracert <ip>` |
| ARP cache | `arp -a` |
| Router/switch interface summary | `show ip interface brief` |
| Active and saved config | `show running-config`; `show startup-config` |
| Router IPv4 routes | `show ip route` |
| Switch MAC learning | `show mac address-table` |
| VLAN membership | `show vlan brief` |
| Save IOS configuration | `copy running-config startup-config` |

In IOS, `>` is user EXEC, `#` is privileged EXEC, `(config)#` is global configuration, and `(config-if)#` is interface configuration. `enable`, `configure terminal`, `interface ...`, `ip address ...`, `no shutdown`, `exit`, and `end` are the core navigation/configuration commands. Never confuse a switch's `ip default-gateway` (for its own management traffic) with a router's default route.
