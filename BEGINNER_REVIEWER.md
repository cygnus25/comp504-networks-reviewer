# Networks and Internet from the beginning

This guide assumes you remember almost nothing from the lectures. Read the sections in order. You do not have to memorize every term on the first pass: your first goal is to understand what problem each piece of a network solves. The [compact reviewer](REVIEWER.md) is for later recall, and the [lab path](LABS.md) lets you see these ideas in Packet Tracer.

## 1. What is a network?

A network lets devices exchange information. Imagine you open a website. Your computer needs a way to send a request to the website's computer and receive a response. The network is the combination of devices, links, rules, and addresses that makes that exchange possible.

Start with four objects:

| Object | Everyday job | Network job |
| --- | --- | --- |
| End device | Person sending or receiving a parcel | PC, phone, printer, or server that creates or uses data |
| Link | Road | Copper cable, fiber, or radio path that carries signals |
| Switch | Local mailroom | Connects devices inside one local network and forwards frames using MAC addresses |
| Router | Road junction between towns | Connects different IP networks and chooses where packets go next |

A **server** provides something, such as a webpage or stored file; a **client** requests it. A **LAN** (local area network) covers a home, room, building, or similar local area. A **WAN** (wide area network) connects distant LANs, often using a service provider. The **Internet** is a large network of networks, not one giant switch.

Picture a PC in a university lab opening a site: `PC → lab switch → campus router → ISP/Internet → website server`. The PC and website server are end devices. The switch helps within the lab LAN; the routers move traffic across networks.

**Do not try to remember commands yet.** If you can explain why a switch and router have different jobs, you have the foundation for the rest of the course.

<details><summary>Check yourself: Does a switch normally choose the route across the Internet?</summary><p>No. A switch forwards within a local Layer 2 network. A router chooses a path between IP networks.</p></details>

## 2. How one webpage travels

Networking becomes easier when you follow one request. Suppose your browser asks for a page from a remote web server.

1. **Application:** The browser creates an HTTP request. A name such as `example.com` must be resolved to an IP address using DNS.
2. **Transport:** TCP normally sets up a connection, splits the data as needed, and tracks delivery. HTTPS also uses TLS to protect the exchange.
3. **Network:** IP puts the server's destination IP address on the packet. Your computer decides whether that IP is local or must go to its default gateway.
4. **Data link:** Ethernet or Wi-Fi wraps the packet in a frame addressed to the next device on the local link.
5. **Physical:** The frame becomes electrical, optical, or radio signals: bits sent over the medium.

The receiving computer reverses this process. Adding each layer's information on the way down is **encapsulation**; removing it on the way up is **decapsulation**. A useful nesting image is `frame [ IP packet [ TCP segment [ HTTP request ] ] ]`.

Why so many layers? Each solves a different problem. An application developer can ask for a connection without designing copper signals. An Ethernet switch can forward a frame without understanding the webpage inside it. The boundaries let technologies change independently, though real systems still have interactions between layers.

The course teaches two models. The **OSI model** has seven layers: Application, Presentation, Session, Transport, Network, Data Link, Physical (top to bottom). The course's **five-layer Internet model** groups the top three into Application, then has Transport, Network, Data Link, Physical. The models describe jobs; they are not seven separate boxes sitting on your desk.

| Layer to recognize | Main question it answers | Example |
| --- | --- | --- |
| Application | What service does the user program need? | HTTP, DNS, SMTP |
| Transport | Which program gets the data, and how is delivery handled? | TCP or UDP; port number |
| Network | Which host/network is the destination? | IPv4/IPv6; router |
| Data link | Which device receives this frame on this link? | Ethernet/Wi-Fi; MAC address |
| Physical | How do the bits cross this medium? | Copper, fiber, radio |

The names of the data units help: application **data**, TCP **segment** or UDP **datagram**, IP **packet**, Ethernet **frame**, physical **bits**. On an exam, you may be asked to match a layer to a protocol, address, or unit.

<details><summary>Check yourself: What does a router replace when it forwards a packet onto a new Ethernet link?</summary><p>It removes the incoming link-layer frame and creates a new one for the outgoing link. Without NAT, the packet's final destination IP remains the same.</p></details>

## 3. Signals, cables, and binary

The physical layer has one immediate job: carry 0s and 1s. It does this with electrical changes in copper, light pulses in fiber, or radio signals in Wi-Fi. The device at the other end must understand the timing and meaning of those signals.

**Point-to-point** means two endpoints share a link. **Multipoint** means several devices share a circuit. **Simplex** is one-way only, like a traditional broadcast; **half-duplex** is both directions but one at a time, like a walkie-talkie; **full-duplex** is both directions at once, like a normal switched Ethernet port. When a signal weakens over distance, that is **attenuation**. Interference or noise can make it harder to tell a 0 from a 1.

Most local wired networks use twisted-pair copper. Shielded twisted pair is useful where electrical interference is high. Fiber carries light, reaches longer distances, and is immune to electromagnetic interference. Wireless avoids a cable to the device but shares radio space and can suffer from interference. The best medium depends on distance, cost, speed, and environment.

The supplied lab notes show **straight-through** and **crossover** Ethernet cables. Traditionally, straight-through connected unlike device types (PC to switch) and crossover connected like types (switch to switch). Many newer interfaces automatically detect the wiring, but the distinction can still appear in course questions.

IPv4 addresses are numbers, so binary matters. One byte, or **octet**, has eight bit positions worth `128 64 32 16 8 4 2 1`. For example, `192 = 128 + 64`, so its bits are `11000000`. `255` uses all eight positions: `11111111`. You will use this to understand subnet masks rather than blindly memorizing them.

<details><summary>Check yourself: Is fiber affected by electromagnetic interference from nearby electrical equipment?</summary><p>No. Fiber carries light rather than electrical signals, so this kind of interference does not affect it.</p></details>

## 4. Local delivery: frames, MAC addresses, and switches

Each network interface has a **MAC address**, a link-layer identifier. An Ethernet frame includes a source MAC, destination MAC, and an error-checking value called the **frame check sequence** (FCS). The receiver checks the FCS using a CRC calculation. A corrupted frame is normally discarded. Error detection does not guarantee that the missing data will be resent; a higher layer such as TCP may handle recovery.

A switch learns by watching **source** MAC addresses. If a frame arrives on port 3 with source `AA`, the switch records `AA → port 3`. When it later sees a frame for `AA`, it sends it only to port 3. If it does not know the destination yet, it **floods** the frame out other ports in the same VLAN. Broadcast frames are also flooded within that VLAN. This is why the first few frames in Packet Tracer may look noisier than later ones.

A hub is different: it repeats traffic to all its ports and creates a shared collision domain. A switch gives each port a separate collision domain. Modern switched full-duplex links do not normally have collisions. Older shared/half-duplex Ethernet used **CSMA/CD**: listen before sending and detect a collision if two stations transmit together.

Imagine two PCs on the same LAN. PC A knows PC B's IP but needs its MAC. A sends an **ARP Request** asking “who has this IPv4 address?” That request is broadcast locally. B replies with its MAC, and A can send an Ethernet frame directly to B. If B is on a different IP network, A instead uses ARP to learn the **default gateway's** MAC and sends the first frame to the router.

Three switch forwarding modes may appear in the course: **store-and-forward** waits for the whole frame and checks it; **cut-through** starts forwarding after reading enough to know the destination, lowering delay; **fragment-free** checks the first 64 bytes before forwarding. The trade-off is checking versus delay.

<details><summary>Check yourself: A switch has never seen destination MAC BB. What does it do with a frame for BB?</summary><p>It floods the frame out other ports in the same VLAN, while learning the source MAC and incoming port.</p></details>

## 5. IP addresses, subnets, and the default gateway

An **IP address** identifies a device's position in a network. IPv4 has 32 bits, usually written as four decimal octets, such as `192.168.10.20`. A **subnet mask** divides those bits into a network part and a host part. Devices compare the destination IP with their own network to decide whether to send directly or through a router.

Think of `192.168.10.20/24` as “network `192.168.10`, host `.20`” for this simple case. The `/24` means 24 network bits; the mask is `255.255.255.0`. Another device at `192.168.10.30/24` is local. `192.168.11.30/24` is in another network. To reach that second network, the PC sends to its **default gateway**, which is normally its local router interface, perhaps `192.168.10.1`.

The PC uses **IP** to say who the ultimate destination is, and a **MAC address** to say who receives the frame *on this hop*. For a remote destination, the first frame's destination MAC belongs to the gateway. The router then creates a fresh frame for the next link. This is the central connection between switching and routing.

Public IPv4 addresses can be routed on the Internet when allocated. Private ranges are `10.0.0.0/8`, `172.16.0.0/12`, and `192.168.0.0/16`; homes and organizations commonly use them internally. **NAT** translates addresses at a boundary, often letting many private devices use one public-facing address. **DHCP** can automatically supply a host's address, mask, gateway, and DNS server.

**What to memorize here:** IP finds the destination network, MAC finds the next device on one link, and the default gateway handles off-network destinations. Subnet calculations come in the next section.

<details><summary>Check yourself: Can a host use a gateway IP that is outside its own local subnet?</summary><p>Normally no. It needs to reach the gateway directly on its local link, so the gateway interface must have an address in that subnet.</p></details>

## 6. Subnetting without magic

Subnetting cuts an address block into smaller networks. A `/26` prefix means 26 of the 32 IPv4 bits identify the network, leaving `32 − 26 = 6` host bits. Six host bits create `2^6 = 64` addresses per block. In the ordinary IPv4 exercises here, two are reserved: the **network address** (first) and **broadcast address** (last). That leaves `64 − 2 = 62` usable host addresses.

For prefixes within the final octet, the block sizes are easy to recognize:

| Prefix | Mask | Addresses per block | Usable in these exercises |
| --- | --- | ---: | ---: |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /29 | 255.255.255.248 | 8 | 6 |
| /30 | 255.255.255.252 | 4 | 2 |

**Worked example:** Find the subnet of `192.168.14.77/26`. A `/26` block is 64 addresses. The boundaries in the last octet are `0, 64, 128, 192`. The number 77 is between 64 and 127. Therefore the **network** is `192.168.14.64`, the **broadcast** is `192.168.14.127`, and usable hosts are `.65` through `.126`. You can check by subtracting the mask's interesting octet from 256: `256 − 192 = 64`.

<div class="subnet-tool" id="subnet-tool"><h3>Try a subnet yourself</h3><p>Enter an IPv4 address and a prefix. Predict the network address before pressing Calculate.</p><form id="subnet-form"><label>IPv4 address <input id="ip-input" inputmode="decimal" value="192.168.14.77" aria-label="IPv4 address"></label><label>Prefix <input id="prefix-input" type="number" min="8" max="30" value="26" aria-label="Prefix length"></label><button type="submit">Calculate</button></form><div id="subnet-result" role="status" aria-live="polite"></div></div>

**VLSM** means giving different LANs different sized subnets so addresses are not wasted. Suppose `10.1.1.0/24` must hold networks with 47, 28, 11, and 5 hosts, plus a two-host link. Allocate the largest requirement first: 47 needs `/26` (62 usable), then 28 needs `/27` (30), then 11 needs `/28` (14), then 5 needs `/29` (6), then 2 needs `/30` (2). Place each at the next valid boundary: `.0/26`, `.64/27`, `.96/28`, `.112/29`, `.120/30`. These match the supplied worked VLSM example.

Always write a table with `network | mask/prefix | first usable | last usable | broadcast` **before** configuring Packet Tracer. The most common errors are using a broadcast as a host, forgetting the gateway, or starting a subnet at an invalid boundary.

<details><summary>Check yourself: Does a requirement for 31 usable hosts fit in /27?</summary><p>No. A /27 has 32 total addresses but only 30 usable in these exercises. Use /26, which has 62 usable.</p></details>

## 7. Routing, ping, and IPv6

A router has interfaces in different networks. When it receives a packet, it reads the destination IP and searches its **routing table**. If several routes match, it chooses the most specific matching prefix. A **default route**, written `0.0.0.0/0` in IPv4, is the fallback when no more specific route matches. The router sends the packet toward the next hop and builds a new frame for the outgoing link.

Suppose PC A is `192.168.10.20/24`, its gateway is `192.168.10.1`, and PC B is `192.168.11.20/24`. A sees that B is remote, sends the first frame to `.10.1`, and the router forwards to the `.11` network. B must also have a route back, usually its own default gateway. A one-way path is not enough for a successful conversation.

`ping` tests reachability using **ICMP Echo Request** and **Echo Reply**. ICMP also carries certain network error/control messages. It is **not** a routing protocol. A failed ping means no reply came back; possible causes include a disconnected link, wrong IP/mask/gateway, down interface, missing route, filtering, or an unresponsive target. `tracert`/`traceroute` can show intermediate hops by provoking hop-limit or TTL expiry.

IPv4 uses 32-bit addresses, so address conservation matters. **IPv6** uses 128-bit addresses written in hexadecimal groups, for example `2001:db8::1`. Leading zeros can be removed from each group, and one continuous run of zero groups can be shortened with `::` once. IPv6 uses **Neighbor Discovery** rather than ARP and uses multicast rather than broadcast. A link-local IPv6 address starts in `fe80::/10` and works only on the local link.

<details><summary>Check yourself: A same-LAN ping works and the gateway ping works, but a remote IP ping fails. What should you check next?</summary><p>Check the router's route and outgoing interface, plus the return path and remote host's gateway. DNS is not the first suspect because you tested an IP address directly.</p></details>

## 8. TCP, UDP, DNS, and application design

IP can deliver packets toward a host, but a host may run many programs. A **port number** identifies the program/service at the transport layer. For example, an HTTPS server commonly listens on port 443. The sender's and receiver's IP addresses identify hosts; the ports identify the relevant processes.

**TCP** begins with a three-way handshake (SYN, SYN-ACK, ACK), then uses sequence numbers, acknowledgements, and retransmission to deliver an ordered byte stream. If data is lost, it can send that data again. This is useful for a file or webpage where missing bytes would be a problem. **UDP** sends datagrams without a transport connection setup and without built-in acknowledgements or retransmission. It has less overhead and is often useful when low delay matters; an application can add its own reliability if needed. A live voice call may prefer a small gap over a delayed old packet.

**DNS** translates names to addresses. **HTTP** is used for web requests/responses; **HTTPS** is HTTP protected with TLS. **SMTP** transfers outgoing email; **IMAP/POP3** retrieve email. **FTP** transfers files. **Telnet** provides a remote terminal without encryption; **SSH** is the secure alternative. For the exam, first learn what each does, then common ports: DNS 53, HTTP 80, HTTPS 443, SMTP 25, FTP control 21, SSH 22.

The course also asks where application work happens. In a **host-based** architecture, a central host does almost all processing. In a **client-based** one, clients do most of the application work. A **client-server** system divides work between them. A common **two-tier** system has client presentation/application logic and server data. A **three-tier** system separates presentation (client), application logic (application server), and data storage/access (database server). **Middleware** helps these parts communicate. A **thick client** runs much logic locally; a thin client runs little. A **server farm** groups servers, often behind a load balancer that spreads requests.

<details><summary>Check yourself: If you can ping a server's IP but cannot open it by name, which service should you investigate?</summary><p>DNS. IP reachability works, but the name may not be resolving to the right address.</p></details>

## 9. Wired LANs, Wi-Fi, and VLANs

Ethernet, standardized as IEEE 802.3, is the usual wired LAN technology. A network interface card (NIC) connects a device to the medium. A switch joins wired devices. A wireless access point (AP) joins Wi-Fi stations to a LAN; a home “wireless router” often combines an AP, switch, router, DHCP, and NAT in one box.

Wi-Fi belongs to the IEEE 802.11 family. A station finds and **associates** with an AP. It may actively send probes or passively listen for beacons. Since stations share radio space and cannot reliably detect collisions while transmitting, Wi-Fi uses **CSMA/CA**, which tries to avoid collisions. Signal strength, interference, walls, channels, and competing devices affect the result. The course compares 2.4 and 5 GHz bands and several 802.11 versions; understand the trade-offs rather than treating an old slide's “current” label as permanent.

A **VLAN** splits a physical switch into separate logical Layer 2 networks. A broadcast in VLAN 10 stays in VLAN 10. An **access port** belongs to one VLAN. An **802.1Q trunk** carries frames from multiple VLANs between network devices, adding tags to identify the VLAN. Two PCs on different VLANs need a router or Layer 3 switch for inter-VLAN communication, plus suitable IP addressing and gateways.

The course also names network operating systems (NOS), directory services, and domain controllers. A directory service tracks users and resources; a domain controller supports centralized identity and authentication in a Windows domain. For LAN performance, locate the bottleneck first: a server, uplink, or crowded Wi-Fi channel needs a different fix. A switch's **forwarding table** is about MAC-to-port locations, whereas a router's **routing table** is about destination IP networks.

<details><summary>Check yourself: Two PCs share a switch but are in different VLANs. Why can they not simply exchange local frames?</summary><p>Each VLAN is a separate Layer 2 broadcast domain. They need Layer 3 routing between the VLAN networks.</p></details>

## 10. Designing networks, backbones, WANs, and Internet access

Network design begins with the people and applications to support, not with a shopping list. The course's building-block cycle is **needs analysis → technology design → cost assessment**, then repeat as constraints become clearer. Ask how many users and sites exist, which applications they run, how much traffic and growth to expect, and what availability/security they need. Draw a **logical** design showing relationships and traffic, then a **physical** design showing equipment, links, and locations.

A **backbone** joins multiple LANs. A switched backbone uses switches, often converging in a main distribution facility (MDF). A routed backbone uses Layer 3 addressing between segments, such as buildings on a campus. A VLAN can group users logically even when their cables attach to different switches.

A **WAN** joins distant sites over provider services. A dedicated circuit gives a reserved point-to-point link. Packet-switched provider networks share underlying infrastructure among customers. A **star** joins sites to a center but depends on that center; a **full mesh** has a direct connection between every pair and costs much more; a **partial mesh** connects selected pairs. The course surveys frame relay (legacy), MPLS, carrier Ethernet, VPNs, and SD-WAN. A **VPN** is a logical, often encrypted tunnel over another network, such as the public Internet. SD-WAN uses software control to select and manage WAN paths.

An **ISP** connects customers to part of the Internet; ISPs exchange traffic through peering or transit. Your home access link might be DSL over a telephone line, cable modem over a shared cable segment, or fiber to the home. The access link gets you to the provider; the provider's backbone and other networks carry traffic farther. The Internet has no single owner or central switch.

<details><summary>Check yourself: Is a VPN itself a dedicated physical cable between two offices?</summary><p>No. It is a logical tunnel that can use an existing network, commonly the Internet.</p></details>

## 11. Security, management, and troubleshooting

Security protects **confidentiality** (only the right people see data), **integrity** (data is not changed improperly), and **availability** (the service works when needed). A **threat** is possible harm, a **vulnerability** is a weakness, and **risk** concerns how likely and damaging the harm would be. Controls include access rules, patching, strong authentication, encryption, firewalls, monitoring, backups, and recovery planning.

A firewall filters traffic according to rules. NAT translates addresses but is not a complete firewall policy. **Symmetric encryption** uses a shared secret key; **public-key cryptography** uses a public/private pair and supports certificates and signatures. TLS protects many application connections; IPsec can secure IP traffic in VPNs. Social engineering attacks people rather than a cable or router; phishing is an example. Older slides mention WEP and SSL: know them as historical terms, but do not use WEP or old SSL as modern security choices.

**Network management** means keeping the network working: configuration, monitoring, performance, faults, user support, and costs. Managed devices can expose status and counters through **SNMP**. Documentation matters: record addressing, topology, configurations, changes, and failures. A performance **baseline** tells you what “normal” looks like so you can spot a problem.

When something fails, test in layers rather than guessing. First check cable/Wi-Fi and interface state. Check the host's IP and mask. Ping a host on the same LAN. Ping the default gateway. Ping a remote **IP**. Finally test a **name** to check DNS. If a local ping succeeds but remote IP fails, look at gateway and routes. If remote IP succeeds but the name fails, look at DNS. Make one change, repeat the failed test, and record the result.

<details><summary>Check yourself: A website will not open. Why is “the Internet is down” a poor first diagnosis?</summary><p>Many different layers could fail: local link, IP settings, gateway, routes, DNS, the web service, or filtering. Test from local to remote to narrow it down.</p></details>

## 12. How to use this for your exam

The supplied [`2026 COMP504 _FINAL EXAM Revision.pptx`](<../course-materials/sources/exam/2026 COMP504 _FINAL EXAM Revision.pptx>) gives most weight to wired/wireless LANs, network/transport, and application architecture. Study those especially carefully, but cover all chapters. The deck and some transcripts refer to different exam sittings, so check Canvas for your actual date, rules, and question format. No Week 9 recording is in the folder; the network-layer slides, Cisco modules, and VLSM activities cover that gap.

Use three passes:

1. **Understand:** Read one or two sections here. Explain their example aloud in your own words. It is fine to look back.
2. **Apply:** Do the matching activity in [the lab path](LABS.md). Predict what should happen before clicking or entering a command.
3. **Recall:** Try [the practice questions](PRACTICE.md) without notes. Keep an error log in [the progress sheet](PROGRESS.md). Revisit misses after one and three days.

The [lecture slide question bank](site/slide-questions.html) collects all 85 numbered QUIZ slides found in the chapter decks, with the answers printed there. Use it after the relevant lesson to become familiar with the teacher's wording. The [coverage map](site/coverage.html) shows what each week contributes and where the beginner guide is deliberately brief.

If you can draw `PC → switch → router → server`, label MAC versus IP at each hop, compute a subnet, and diagnose a failed ping, many other topics will start to connect. The compact reviewer is useful **after** this first reading, not before it.
