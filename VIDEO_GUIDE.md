# COMP504 — video guide per lesson

Every link below was pulled and verified live from YouTube (title, channel, duration real as
of 20 Oct 2026). **Rule: one video per lesson, after you have read the lesson, not instead
of it.** Watch with the lesson open, pause at each diagram, and write the takeaway in the
error log in [PROGRESS.md](PROGRESS.md). These are general networking explainers, not your
lecturer's slides — where they disagree with `course-materials/sources/`, the course material wins.

## Lesson 1 — What is a network?

| Video | Length | Why |
| --- | --- | --- |
| [What is OSI Model — Real World Examples](https://www.youtube.com/watch?v=0y6FtKsg6J4) (ByteByteGo) | 4:45 | Layer jobs with real examples, fast |
| [TCP/IP Model Explained — Cisco CCNA](https://www.youtube.com/watch?v=OTwp3xtd4dg) (CertBros) | 5:43 | 5-layer TCP/IP vs 7-layer OSI side by side |

## Lesson 2 — How one webpage travels

| Video | Length | Why |
| --- | --- | --- |
| [TCP/IP Model: PDUs and Encapsulation & Decapsulation](https://www.youtube.com/watch?v=xeAe7kyejiI) (David Bombal) | 8:25 | The layer-by-layer wrap/unwrap you must recite |
| [Segment, Packet, and Frame Comparison](https://www.youtube.com/watch?v=kzYNBtiREhM) (RareBit Academy) | 4:51 | PDU names locked in |
| [How Does the Internet Work? — Data Packets](https://www.youtube.com/watch?v=KjD3KANH-xc) (PowerCert) | 5:35 | End-to-end journey, good before Lab 1 |

## Lesson 3 — Signals, cables, and binary

| Video | Length | Why |
| --- | --- | --- |
| [Network Transmission Media](https://www.youtube.com/watch?v=f7EZNsOKUrg) (MrBrownCS) | 7:45 | Copper vs fibre vs wireless, attenuation, EMI |
| [Ethernet Cables: UTP vs STP, Straight vs Crossover, CAT 5–8](https://www.youtube.com/watch?v=_NX99ad2FUA) (PowerCert) | 7:06 | Straight vs crossover is a classic MCQ |
| [Binary — the simplest explanation](https://www.youtube.com/watch?v=RrJXLdv1i74) (Practical Networking) | 22:15 | Only if binary/hex still feels shaky |
| [Binary Numbers and Base Systems](https://www.youtube.com/watch?v=LpuPe81bc2w) (Techquickie) | 5:20 | Short version of the above |

## Lesson 4 — Frames, MAC addresses, switches

| Video | Length | Why |
| --- | --- | --- |
| [How does a switch learn MAC addresses](https://www.youtube.com/watch?v=TIHvWb-gruc) (Networklessons.com) | 2:46 | Source learning + flooding in under 3 min |
| [ARP Explained](https://www.youtube.com/watch?v=cn8Zxh9bPio) (PowerCert) | 4:22 | Request/reply before the first ping |
| [MAC Address Explained](https://www.youtube.com/watch?v=TIiQiw7fpsU) (PowerCert) | 8:22 | Structure, OUI, unicast/multicast/broadcast |
| [How a Switch Forwards and Builds the MAC Address Table](https://www.youtube.com/watch?v=sdYDLip2ANI) (danscourses) | 8:41 | Watch before Lab 2 |

## Lesson 5 — IP addresses, subnets, default gateway

| Video | Length | Why |
| --- | --- | --- |
| [Default Gateway Explained](https://www.youtube.com/watch?v=pCcJFdYNamc) (PowerCert) | 6:35 | Directly tested; pairs with Lab 4 |
| [Subnet Mask — Explained](https://www.youtube.com/watch?v=s_Ntt6eTn94) (PowerCert) | 17:54 | Network vs host portion, masks in decimal |
| [IP Address, Subnet Mask & Default Gateway Explained Simply](https://www.youtube.com/watch?v=RDR8LlpDxAU) (Make [IT] Stick) | 3:39 | Quick refresher loop |

## Lesson 6 — Subnetting without magic

| Video | Length | Why |
| --- | --- | --- |
| [Solve ANY subnetting problem in 60 seconds](https://www.youtube.com/watch?v=5-wlfAdcmFQ) (Practical Networking) | 6:10 | The block/magic-number method — use this for /25–/30 |
| [Subnetting Made Simple](https://www.youtube.com/watch?v=nFYilGQ-p-8) (Carl Oliver) | 5:40 | Second angle if the first does not land |
| [CCNA Subnetting Practice — Can You Solve This Exam Question?](https://www.youtube.com/watch?v=ojmCcrA8hzo) (MomTeachesTech) | 7:27 | Timed practice, exam style |
| [10 Must-Know Subnetting Questions](https://www.youtube.com/watch?v=a9Gr85lBLSI) (Tons OF Network Fun) | 17:24 | Thursday's paper-drill companion |

## Lesson 7 — Routing, ping, and IPv6

| Video | Length | Why |
| --- | --- | --- |
| [PING and TRACERT networking commands](https://www.youtube.com/watch?v=vJV-GBZ6PeM) (PowerCert) | 4:39 | ICMP in practice; what a failed ping narrows down |
| [IPv6 Addresses Explained](https://www.youtube.com/watch?v=irhS0ASkvy8) (CertBros) | 13:37 | Format, prefix, why IPv6 exists |
| [Compressing (Shortening) IPv6 Addresses](https://www.youtube.com/watch?v=ltz3Z7AL7Ng) (Learn Learn Scratch Tutorials) | 5:43 | The `::` rules, exactly what gets asked |
| [How A Computer Routes](https://www.youtube.com/watch?v=7hTXAAnGErw) (System Engineer) | 11:12 | Routing table + default route mental model |

## Lesson 8 — TCP, UDP, DNS, application design

| Video | Length | Why |
| --- | --- | --- |
| [TCP — Three-way handshake in detail](https://www.youtube.com/watch?v=xMtP5ZB3wSk) (Sunny Classroom) | 4:17 | SYN / SYN-ACK / ACK |
| [How a DNS Server Works](https://www.youtube.com/watch?v=mpQZVYPuDGU) (PowerCert) | 6:04 | Resolution path, recursion |
| [Three Tier Architecture](https://www.youtube.com/watch?v=9ev9V_DHUZY) (Neso Academy) | 10:59 | Presentation / application / data tiers |
| [Application Layer Services Explained](https://www.youtube.com/watch?v=bQ6woul_JrQ) (CBT Nuggets) | 8:37 | HTTP, SMTP, FTP, Telnet in one pass |

## Lesson 9 — Wired LANs, Wi-Fi, VLANs (highest-weight chapter)

| Video | Length | Why |
| --- | --- | --- |
| [VLAN Explained](https://www.youtube.com/watch?v=jC6MJTh9fRE) (PowerCert) | 4:38 | Start here |
| [VLANs, Tagging, Trunking, and Native VLAN](https://www.youtube.com/watch?v=MNZa-S4E-To) (PowerCert) | 9:30 | Access vs trunk, 802.1Q tags |
| [Wi-Fi Standards and Generations Explained](https://www.youtube.com/watch?v=hhks5xSpM-0) (PowerCert) | 9:21 | 802.11 families — the WLAN standards question |
| [CSMA/CD vs CSMA/CA](https://www.youtube.com/watch?v=hyvDRVfYnKw) (GURUKULA) | 2:02 | The distinction the revision deck calls out |
| [CSMA/CD (Gate Smashers)](https://www.youtube.com/watch?v=v_z888gQWq0) | 14:39 | Deeper version if needed |

## Lesson 10 — Design, backbones, WANs, Internet access

| Video | Length | Why |
| --- | --- | --- |
| [Circuit Switching vs Packet Switching](https://www.youtube.com/watch?v=G7n8thqwO2c) (PowerCert) | 5:35 | Foundation for WAN services |
| [VPN Explained](https://www.youtube.com/watch?v=R-JUOpCgTZc) (PowerCert) | 7:11 | Site-to-site vs remote access |
| [WAN — Wide Area Network Explained](https://www.youtube.com/watch?v=6TF2ph6jiEI) (Networking With H) | 3:30 | Fast WAN overview |
| [What is MPLS and How Does it Work?](https://www.youtube.com/watch?v=E5Ud1m9h0yc) (CBT Nuggets) | 5:12 | Backbone/backbone-service terminology |

## Lesson 11 — Security, management, troubleshooting

| Video | Length | Why |
| --- | --- | --- |
| [Network Security Threats Explained](https://www.youtube.com/watch?v=xCuhJGW-u3s) (Networking With H) | 6:27 | Recon, malware, buffer overflow — Ch11 vocabulary |
| [CCNA Ch11 — Exploring Network Security (CIA Triad, AAA, Wireshark)](https://www.youtube.com/watch?v=sWPrAZ6mJsk) (CyberEd) | 31:37 | Long but closest match to Chapter 11 |
| [How SNMP Works — a quick guide](https://www.youtube.com/watch?v=2IXP0TkwNJU) (Nagios) | 5:49 | Managers, agents, MIB, traps |
| [SNMP Explained](https://www.youtube.com/watch?v=Lq7j-QipNrI) (CertBros) | 14:23 | Deeper SNMP if management comes up |
| [Steps for Network Troubleshooting](https://www.youtube.com/watch?v=1i3XdhC2ZAs) (CBT Nuggets) | 6:21 | Structured fault isolation, pairs with Lab 4 |

## Lesson 12 — Exam technique

| Video | Length | Why |
| --- | --- | --- |
| [CCNA Practice Exam — Subnetting Questions and Answers](https://www.youtube.com/watch?v=FGNKo8yoZSw) (Intelligence Quest) | 18:15 | Watch how the answer is reasoned, not just the answer |
| [10 Must-Know Subnetting Questions](https://www.youtube.com/watch?v=a9Gr85lBLSI) (Tons OF Network Fun) | 17:24 | Second timed set |

Your own `SLIDE_QUESTIONS.md` (85 quiz slides with printed answers) and `PRACTICE.md`
(32 questions) outrank any of these for this exam — use video only where a topic will not
click from reading.
