# COMP504 Complete Course Revision Reviewer
> Grounded in official COMP504 lecture slides, revision decks, and exam breakdown.
> Organized by exam weighting with key facts, tables, calculations, and traps.

## Exam Structure & Strategy
- **Format**: 100 Multiple Choice Questions (1 mark each)
- **Duration**: 2 hours 10 mins (120 mins answering time = ~72 seconds per question)
- **Conditions**: Closed book, Canvas-based, 1 attempt, non-programmable calculator allowed, 1 blank A4 paper allowed
- **Top Priorities by Weight**:
  1. **Wired & Wireless LANs** (Ch 7): 15–20 questions
  2. **Network Layer & Addressing** (Ch 5 Pt 2): 10–15 questions (with Transport)
  3. **Transport Layer** (Ch 5 Pt 1): 10–15 questions (with Network)
  4. **Application Layer** (Ch 2): 10–15 questions
  5. **Backbone Networks & VLANs** (Ch 8): 5–10 questions
  6. **Wide Area Networks & VPNs** (Ch 9): 5–10 questions
  7. **Network Design** (Ch 6): 5–10 questions
  8. **The Internet** (Ch 10): 5–8 questions
  9. **Network Security** (Ch 11): 5–8 questions
  10. **Models & Layers** (Ch 1): 3–5 questions
  11. **Physical Layer** (Ch 3): 3–5 questions
  12. **Data Link Layer** (Ch 4): 3–5 questions
  13. **Network Management** (Ch 12): 3–5 questions

---

## Network Models & Layers (3–5 questions)
> **Sources**: Ch 1 Introduction · Protocols and Rules overview

### The two models, and their layer counts

The exam slide names these explicitly:OSI model — 7 layers,Internet model (TCP/IP) — 5 layers. Expect a question that hinges purely on the number.

| OSI (7) | Internet model (5) | What that layer does | Protocols named in slides |
| --- | --- | --- | --- |
| 7 Application 6 Presentation 5 Session | 5 Application | The application software used by the network user | HTTP, SMTP, FTP |
| 4 Transport | 4 Transport | Links application layer to the network; end-to-end delivery; segments long messages | TCP, UDP |
| 3 Network | 3 Network | Performs routing ; organises frames into packets and routes them sender → receiver | IP |
| 2 Data Link | 2 Data Link | Groups bits into frames ; moves a message one computer to the next; error detection | Ethernet |
| 1 Physical | 1 Physical | Transmits raw bits (0s and 1s) over a medium | — |

### PDU names per layer — a reliable MCQ

- Transport layer PDU =segment(TCP) ordatagram(UDP)
- Network layer PDU =packet
- Data link layer PDU =frame
- Physical layer =bits; it is the only layer that doesnotcreate a new PDU

**Process — encapsulation, sender side**

1. User clicks a link. The browser translates the request intoHTTPand passes the HTTP packet down.
2. Transport (TCP)places the HTTP packet inside a TCP segment, adding ports and sequence numbers.
3. Network (IP)places the TCP segment inside an IP packet and selects the next stop on the route.
4. Data link (Ethernet)adds start/stop markers and error-check information, forming a frame.
5. Physicaltransmits the Ethernet frame as a series of electrical pulses down the cable.

### Standards

- De jure= official / formal, developed by an industry or government body. Three stages: specification → identification of choices → acceptance.
- De facto= emerged in the marketplace, supported by several vendors,no official standing.
- IEEE→ 802.3 Ethernet, 802.11 wireless LAN.ISO→ OSI model (1984), members are national standards bodies.IETF→ Internet standards.ITU-T→ UN telecom body.ANSI→ US coordinating body.
- Primary reason standards exist: so hardware and software fromdifferent vendors can work together.

### Network types and scope

| Type | Scope | Typical speed |
| --- | --- | --- |
| LAN | Clearly defined small area | 100 Mbps |
| BN (backbone network) | Hundreds of feet to several miles; connects LANs, BNs, MANs, WANs | 100–1,000 Mbps |
| WAN | Connects BNs and MANs; most organisations don't build their own | — |

- Three hardware components of a data communications network:server,client,circuit. A network without a server is apeer-to-peer network.
- End device= where a message originates or is received.Intermediary device= interconnects end devices (switches, wireless access points, routers).
- Intranet= uses Internet technologies, open only to thoseinsidethe organisation.Extranet= same, but provided to invited usersoutsidethe organisation over the Internet.

**Additional Context**: Three future trends named: Wireless LAN and BYOD , Internet of Things (IoT) / Network of Things (NoT) , massively online . Transport + network are sometimes called the internetwork layers ; data link + physical the hardware layer .

---

## Physical Layer — Circuits, Media & Signalling (3–5 questions)
> **Sources**: Ch 3 Physical layer · Lab 1 cable notes · Ethernet crossover cables

### Circuit configuration — named on the exam slide

- Two fundamental configurations:point-to-pointandmultipoint.
- Point-to-point= from one point to another; also called adedicated circuit. Expensive, as each computer needs its own circuit.
- Multipoint= many computers connected to the same circuit; also called ashared circuit. Only one computer can use it at a time, but it's more efficient and uses less cable.

### Data flow — three terms, learn the examples

| Mode | Definition | Slide's example |
| --- | --- | --- |
| Simplex | One-way transmission | Radios and TVs |
| Half-duplex | Two-way, but only one direction at a time | Walkie-talkie |
| Full-duplex | Both directions simultaneously | — |

The delay when half-duplex switches between sending and receiving isturnaround time.

### Attenuation — flagged explicitly on the exam slide

Attenuationis the weakening of a signal over distance. The fix isadding repeaters or amplifiersto a circuit. Do not confuse it with the fix for impulse noise / cross-talk / intermodulation noise, which isshielding wires.

> 🔗 Connects to Ch 7 LANs: hubs and switches act as repeaters precisely because signals attenuate in cable. A quiz item in Ch 7 tests exactly this.

### Media — guided vs wireless

- Two basic types:guided(message flows through a physical medium) andwireless / radiated(broadcast through air).
- Guided: twisted-pair, coaxial, fiber-optic. Wireless: radio, microwave, satellite.
- Fiber-opticbest withstands harsh environmental conditions and isleast susceptible to noise. Light pulses from lasers or LEDs; single-mode core reduced from 50 microns to about 5–10 microns; effective distance just under 1,000 m.
- Twisted pairwires are twisted to minimiseelectromagnetic interference.Coaxialhas a copper core, the outer shield is the second conductor.Microwaveis line-of-sight, long distance, no cable laying.Satelliteis geosynchronous; disadvantages arepropagation delayandraindrop attenuation.
- Six media selection factors: type of network, cost, transmission distance, security, error rates, transmission speed.

### Straight-through vs crossover cable

- DTE(Data Terminal Equipment) = end-user stations: computers, laptops, Ethernet printers.DCE(Data Circuit Equipment) = switching and routing devices: switches, hubs, routers.
- Crossover connectsDCE-to-DCE or DTE-to-DTE. The two wiring standards areT568AandT568B; they differ in the position of theorange and greenwire pairs.

### Multiplexing — four types

Multiplexingbreaks one high-speed physical circuit into several lower-speed logical circuits. Often done in multiples of 4.

| Type | Mechanism |
| --- | --- |
| FDM — frequency division | Divides the circuit "horizontally"; many signals travel simultaneously |
| TDM — time division | Computers take turns |
| STDM — statistical time division | Speed chosen by statistical analysis of usage requirements |
| WDM — wavelength division | A version of FDM used in fiber-optic cables |

> 🔗 Connects to Ch 10: ADSL uses FDM to create three channels on one local loop; Fiber to the Home uses WDM . Both appear as direct quiz answers.

### Digital transmission and encoding

- Five benefits of digital over analog: fewer errors, higher maximum rates, more efficient, more secure (easier to encrypt), simpler to integrate voice/video/data.
- Unipolar: 0 V for a zero, +5 V for a one.Bipolar: varies plus to minus — NRZ (never returns to 0), RZ (returns to 0 after each bit), AMI (0 always 0 V, 1s alternate ±5 V).
- Ethernet uses Manchester encoding— a special type of bipolar signalling where the signal changes in themiddleof the signal. High→low =0; low→high =1. Less susceptible to undetected errors, because no mid-signal transition means an error occurred.
- Parallel= all 8 bits at once on 8 wires (inside a computer).Serial= bit-by-bit on one wire; much slower.
- Coding schemes:ASCII,ISO 8859,Unicode(UTF-8 ≈ ASCII, UTF-16 used by Windows).

### Analog transmission & modulation

- Three characteristics of a sound wave:amplitude(height, in decibels),frequency(length, in hertz),phase(direction the wave begins, in degrees).
- Three modulation techniques:AM/ amplitude shift keying (ASK) —most susceptible to noise;FM/ frequency shift keying (FSK);PM/ phase shift keying (PSK).
- Bit rate= bits per second.Baud rate= number of times per second the signal changes. Equalonly when 1 bit is sent per symbol.
- Bandwidth= difference between highest and lowest frequencies. Standard telephone lines =4,000 Hz.
- Modem= modulator/demodulator (digital ↔ analog).Codec= code/decode (analog voice → digital). Quantizing error is reduced by increasing amplitude levels or sampling more frequently.

**Additional Context**: V.44 compression using Lempel–Ziv (averages 6:1); ADPCM transmitting the difference between 8-bit values; the local loop / "last mile"; Auto MDI-X making crossover cables largely unnecessary on modern hardware.

---

## Data Link Layer — Access Control, Errors & Framing (3–5 questions)
> **Sources**: Ch 4 Data link layer

### Role and position — quoted almost verbatim on the exam slide

- Responsible for communicationsbetween end-device network interface cards.
- Allows upper layer protocols to access the physical layer media andencapsulates Layer 3 packets (IPv4 and IPv6) into Layer 2 frames.
- Performserror detectionandrejects corrupted frames.
- It doesnotspecify the type of connection or the electrical signals, radio waves or light pulses that pass through it.
- It sits directly between thephysical and the network layers. It doesnotperform routing.

### Two sublayers

- LLC(Logical Link Control) — the data link layer's connection to thenetwork layer above; communicates between upper-layer software and lower-layer hardware.
- MAC(Media Access Control) — controls the physical hardware; responsible fordata encapsulation and media access control.

### Three functions of a data link protocol

1. Media access control— controls when computers transmit.
2. Error control— detects and corrects transmission errors.
3. Message delineation— identifies the start and end of a message using a PDU.

Amplitude shift keying isnota data link function — that's a physical layer modulation technique, and it appears as a distractor.

### Media access control — two fundamental approaches

|  | Contention | Controlled access |
| --- | --- | --- |
| How | Computers wait until the circuit is free, then transmit whenever they have data | One device controls the circuit and decides who transmits when |
| Techniques | CSMA/CD (legacy bus Ethernet), CSMA/CA (wireless LANs) | Access requests; polling |
| Best for | Small networks, low usage | Large networks, high usage (traffic) |

- Roll-call polling— the controller works consecutively through a list of clients.
- Hub polling(often calledtoken passing) — one device starts the poll and passes it to the next computer on the multipoint circuit.
- With point-to-point full-duplex, media access control isunnecessary.

### Error sources and their fixes — a dense quiz cluster

| Term | What it is | Prevention |
| --- | --- | --- |
| Attenuation | Loss of power as the signal travels | Repeaters or amplifiers |
| Impulse noise (spikes) | Can obliterate a group of bits, causing a burst error ; named as the primary source of error | Shielding wires |
| Cross-talk | One circuit picks up signals in another | Shielding wires |
| Intermodulation noise | Signals from different circuits combine | Shielding wires |

- Two categories of network error:corrupted dataandlost data. Networks are designed to (1) prevent, (2) detect, (3) correct.
- Single-bit error= one 0 becomes a 1 or vice versa.Burst error= multiple bits changed. Errors normally appearin bursts, not uniformly distributed.

### Three error detection techniques — verbatim on the exam slide

| Technique | Mechanism | Size |
| --- | --- | --- |
| Parity checking | One additional bit added to each byte ; its value is based on the number of 1s in each byte transmitted | 1 bit per byte |
| Checksum | Add the decimal value of each character, divide the sum by 255 , use the remainder as the checksum; appended to the end of the message | Typically 1 byte |
| CRC (cyclic redundancy check) | Message treated as one long binary number, divided by a preset number , the remainder is the CRC code | CRC-16, CRC-32 |

Forward error correctionuses enough redundancy to correct errors at the receiving endwithout retransmission; commonly used insatellite transmission. In practice, most LAN data link software is configured todetect errors but not correct them— a packet with an error is simply discarded.

### Asynchronous vs synchronous, and the four synchronous protocols

- Asynchronous(start–stop) — each character is transmittedindependently of all other characters, with a start bit and stop bit around each one.
- Synchronous— all data in one group transmitted at once as a block called aframe; only the start and end of the whole frame are marked.
- Four synchronous protocols:SDLC,HDLC,Ethernet,PPP. (VT100 is the classic distractor — it isnotone.)

| Protocol | Key identifying facts |
| --- | --- |
| SDLC | IBM mainframe protocol, 1972. Begins and ends with the flag bit pattern 01111110 . Frame check sequence is a 32-bit CRC . |
| HDLC | ISO formal standard, used in WANs. Same as SDLC but address and control fields can be longer; larger sliding window for continuous ARQ; uses a controlled-access protocol. |
| Ethernet (802.3) | Conceived by Bob Metcalfe in 1973 . Contention-based. Starts with a 7-byte preamble , then start of frame delimiter. Optional 4-byte VLAN tag . Ends with a CRC-32 . Newer versions permit jumbo frames . |
| PPP | Early 1990s, often used in WANs. Point-to-point but has an address so it works on multipoint. Data field up to 1,500 bytes . FCS usually CRC-16 , can be CRC-32. |

### Transmission efficiency

Transmission efficiency= total information bits ÷ total bits in transmission. General rule:the larger the message field, the more efficient the protocol.Throughputis the total information bits received per second, accounting for overheadandretransmissions.

### Layer 2 addressing and MAC spoofing

- A Layer 2 address is also called aphysical address. It is used only forlocal delivery on the linkand isupdated by each device that forwards the frame.
- MAC address filteringlists which MAC addresses may connect. It gives afalse sense of securitybecause ofMAC address spoofing— a software-enabled technique that changes the hardcoded MAC address.

> 🔗 Connects to Ch 7 and Ch 11 both return to MAC address filtering. Ch 7 states plainly: it "provides no security against a determined hacker."

**Additional Context**: The generic frame field table (start/stop, addressing, type, control, data, error detection); SDLC information vs supervisory frames; DSAP/SSAP fields; bus and ring topologies from early Ethernet and legacy Token Ring.

---

## Wired & Wireless LANs (15–20 questions · highest weight)
> **Sources**: Ch 7 Wired and Wireless LANs

### Six LAN components

1. Client computer
2. Server
3. Network interface cards (NICs)
4. Network circuits
5. Hubs / switches / access points
6. The network operating system

- TheNICphysically connects a computer to the network cable. In a wireless network the NIC is aradio transceiver.
- Hubs and switches serve two purposes: an easy way to connect cables, and theyact as repeatersto regenerate signals so attenuation does not occur. Each connection point is aportwith a unique number.
- Anaccess point (AP)is a radio transceiver playing the same role as a hub or switch in wired Ethernet. Most WLANs use APs withomnidirectional antennas.
- Most LANs useUTP.STPis used only in areas producing electrical interference.Fiber-opticis thinner than UTP and takes less space.

### Network operating system (NOS) — a known trap

- Server NOSperforms functions of thedata link, network, and applicationlayers, plus the computer's own OS. It replaces the normal operating system on the server.
- Client NOSperforms functions of thedata link and networklayers only.
- The trap: a quiz statement claiming the server NOS provides "physical, data link and network" layers isFALSE. Physical is not in the list; application is.
- A key NOS function is adirectory service, e.g. Microsoft'sActive Directory Service (ADS), which works much like TCP/IP's DNS.
- Anetwork profilespecifies what resources on each server are available and which devices or people are allowed what access. There must also be auser profilefor each person.

### Domains and the domain controllernamed on exam slide

- Adomainis a group of related resources; domains can contain other domains.
- Linked trees across organisations create aforestof shared network resources.
- Within each domain there is a server — thedomain controller— responsible forresolving address information.

### Hub-based vs switch-based Ethernet

|  | Hub-based | Switch-based |
| --- | --- | --- |
| Topology | Logical bus , physical star | Logical star and physical star |
| Frame flow | All frames flow to all computers; each processes only those addressed to it | Switch reads the address and retransmits only on the circuit connected to that computer |
| Circuit | Shared multipoint — a collision domain | Each circuit is not shared with any other device |
| Status | Seldom used by companies today | Almost all corporate installations |

Ethernet is standardised asIEEE 802.3and is alayer 2 protocoloperating at the data link layer. Every Ethernet LAN needs hardware at layer 1.

### The switch forwarding tablenamed on exam slide

**Process — how a switch learns an address**

1. The switch uses aforwarding table, very similar to a routing table, to know which circuit to use. This makes it alayer 2 switch.
2. Switcheslearn addressesto build the forwarding table.
3. If a switch receives a frame whose destination address isnot in the forwarding table, it mustsend it to all ports.
4. When the correct computer responds, it isadded to the forwarding table.

Definition to hold exactly: a forwarding table tells a switchwhich port it should send a packet out ofto reach the destination computer.

### Three switch modesnamed on exam slide

| Mode | How much it reads first | Trade-off |
| --- | --- | --- |
| Cut-through | Begins transmitting as soon as it has read the destination address | Low latency , no error check |
| Store-and-forward | Waits for the entire frame and checks it contains no errors | Prevents invalid frames consuming capacity, but higher latency |
| Fragment-free | Reads and checks the first 64 bytes ; if the header appears correct, presumes the rest is error free | The middle ground |

### Media access control — CSMA/CD vs CSMA/CA

The revision slide calls this out directly, including the negative statement:CSMA/CD is not used in token ring protocol LANs— it is a contention-based technique used inEthernetnetworks.

|  | CSMA/CD | CSMA/CA |
| --- | --- | --- |
| Expands to | Carrier Sense Multiple Access with Collision Detection | Carrier Sense Multiple Access with Collision Avoidance |
| Used in | Wired Ethernet | Wireless networks (Wi-Fi) |
| Mechanism | Wait until circuit is free, transmit, listen while transmitting . On detecting a signal the NIC sends a jamming signal | Collisions are hard to detect on radio, so Wi-Fi avoids them to a greater extent |

> 🔗 Connects to Ch 4 established contention vs controlled access as the two approaches. CSMA/CD and CSMA/CA are both contention ; PCF below is the controlled-access exception inside Wi-Fi.

### Wireless Ethernet — association and the two coordination functions

Wireless Ethernet is theIEEE 802.11family, commonly calledWi-Fi. Its logical and physical topologies arethe same as hub-based Ethernet: a physical star and a logical bus.

**Process — associating with an AP**

1. Before a computer can transmit in a WLAN it must establish anassociationwith a specific AP.
2. Searching for an available AP is calledscanning. A NIC can do this actively or passively.
3. Active scanning— the NIC transmits aprobe frameon all active channels in its frequency range.
4. Passive scanning— the NIC listens on all channels for abeacon framesent out by an AP.

|  | DCF | PCF |
| --- | --- | --- |
| Full name | Distributed Coordination Function | Point Coordination Function |
| Also called | Physical carrier sense method | Virtual carrier sense method |
| Mechanism | Each frame sent using stop-and-wait ARQ ; sender stops and waits for an ACK before sending another frame | RTS (request to send) → AP replies CTS (clear to send), specifying how long the circuit is reserved |
| Solves | — | The hidden node problem : distant computers can't sense each other and collide at the AP |
| Access type | Contention | Controlled access — the AP is the only device guaranteed to reach all computers |

Consistent with Ch 4: controlled access givespoorer performance in low-trafficnetworks and worksbetter in high-traffic WLANs.

### WLAN standardsnamed on exam slide

| Standard | Status | Key facts |
| --- | --- | --- |
| 802.11n | Obsolete, still used because cheap | Three channels of 450 Mbps each, maximum range 100 m |
| 802.11ac | Current | Runs in two frequency spectrums simultaneously. Key innovation: RTS/CTS is sent on a separate frequency range so it doesn't interfere with data |
| 802.11ax | Newest — Wi-Fi 6 | Runs in three different frequency spectrums |

WLANs operate in the2.4 and 5 GHzranges (may interfere with cordless phones and baby monitors). Radio transmitters in NICs and APs reach100–150 munder ideal conditions; speed drops as distance increases; each AP is set to adifferent channelso APs don't interfere.

### WLAN security — ordered weakest to strongest

| Method | How it works | Weakness |
| --- | --- | --- |
| MAC address filtering | AP only processes frames from MAC addresses on its list | No security against a determined hacker |
| WEP — Wired Equivalent Privacy | Requires a key to communicate with the AP; keys produced dynamically; new users log in to receive one | "A number of serious weaknesses" — a determined hacker can break in |
| WPA — Wi-Fi Protected Access | Works similarly to WEP but the key is longer , and — more importantly — the key is changed for every frame transmitted to the client | Superseded |
| 802.11i (WPA2) | Newest, most secure. User logs in to a login server to obtain the master key. Uses AES (Advanced Encryption Standard) | — |

### Best practice LAN design and performance

- Wi-Fi ischeaperthan wired Ethernet; the largest cost of LANs ispaying someone to install the cables. Most organisations install wired Ethernet for desktops and Wi-Fi asoverlay networks.
- Managed APsare wired into aWi-Fi Controller; they report attached devices and busyness, and the controller can instruct a busy AP to deny access so the laptop connects to the next AP.
- In the data center, servers sit inserver farms or clusters; aload balancer(load balancing switch) acts as a router at the front and stops sending requests to a crashed server.
- To improve performance, first locate thebottleneck— generally either the network server or a network circuit. Server fixes: faster NOS, second server, upgrade, more memory, more hard drives,RAID.
- To improve circuit capacity: buy a bigger circuit, orsegment the network— in a wired LAN add switches, in a wireless LANadd more APs on different channels.

**Additional Context**: The 50-foot-radius / 50–75-foot square AP design rule and site surveys; guest networks, described as "not secure"; server virtualization ; SAN and NAS (a NAS is not a general-purpose computer). Organisations protect internal networks through network segmentation .

---

## Network Layer — IPv4 Addressing & Subnetting (part of 10–15 questions)
> **Sources**: Ch 5 Part 2 · IP subnetting · Identifying IPv4 Addresses · VLSM block method · VLSM Packet Tracer lab · Number systems

### The address space numbers

- IPv4 uses32 bits (4 bytes). Number of available addresses =232= 4,294,967,296, approximately4.3 billion.
- IPv6 uses128 bits, allowing3.4 × 1038addresses. The primary reason for switching was toincrease the address size from 32 to 128 bits, because IPv4 addresses were being depleted.
- IPv4 header =192-bit (24 bytes), 20 bytes excluding options. IPv6 header =320-bit (40 bytes).
- ICANN(Internet Corporation for Assigned Names and Numbers) manages the assignment of network layer and application layer addresses, and sets the rules for new domain names.

### Address classes — learn the first-octet ranges

| Class | First octet | Structure | Default subnet mask | Purpose |
| --- | --- | --- | --- | --- |
| A | 0–126 | Network.Host.Host.Host | 255.0.0.0 | Assignable |
| B | 128–191 | Network.Network.Host.Host | 255.255.0.0 | Assignable |
| C | 192–223 | Network.Network.Network.Host | 255.255.255.0 | Assignable |
| D | 224–239 | — | — | Reserved for multicasting |
| E | 240–255 | — | — | Reserved for experimental use |

- Only the first three classes —A, B and C— are used by a network administrator. D and E are reserved.
- An address starting with0is not allowed. The127range is reserved for a computer to communicate with itself (loopback). Addresses starting with255are reserved forbroadcast.

> ⚠️ **Small inconsistency between decks**: Ch 5 states "addresses from 240 to 254 belong to Class E", while the IP subnetting deck gives Class E as 240–255 . If a question asks for the Class E range as a clean boundary, 240–255 is the answer that matches the class table. Both decks agree on every other range.

### Subnet masks — the four examples given verbatim on the exam slide

A subnet mask is a 32-bit number created by settinghost bits to all 0s and network bits to all 1s. It determines whether a host is on the local subnet or a remote network.

| Mask | Binary | Meaning |
| --- | --- | --- |
| 255.0.0.0 | — | Only the same first byte = same subnet |
| 255.255.0.0 | — | First 2 bytes indicate the same subnet |
| 255.255.255.0 | — | First 3 bytes indicate the same subnet |
| 255.255.255.128 | 11111111.11111111.11111111.10000000 | First 3 bytes plus the first bit of the fourth byte |

Theprefix lengthis the number of bits set to 1 in the subnet mask, written inslash notation. To identify the network address, the host IPv4 address islogically ANDed, bit by bit, with the subnet mask.

### Binary conversion — the positional values

`	ext
Position value:  128   64   32   16    8    4    2    1
Example 11000000:  1    1    0    0    0    0    0    0
                  128 + 64                              = 192
Example 10101000:  1    0    1    0    1    0    0    0
                  128 +      32 +       8               = 168
`

Hexadecimal (base 16, digits 0–9 and A–F) is used forIPv6 addresses and MAC addresses. Every 4 bits = one hex digit, so an IPv6 address is32 hexadecimal values; each four-character group is ahextet.

### Subnetting — the block method, worked

**Process — the block method**

1. Find theboundary octet— the octet where the host portion starts.
2. Count thehost bits in that octet. Theaddress block size is 2n.
3. List the possiblestarting addressesin that octet: multiples of the block size — 0, k·2n, … while k·2n< 256.
4. Locate which block the given address falls into. Thefirst address in the block is the network address(host bits all 0s).
5. Thelast address in the block is the broadcast address(host bits all 1s).
6. First host = network address + 1. Last host = broadcast address − 1.

`	ext
Worked: 202.56.64.134/27
Boundary octet   4th          Host bits = 32 − 27 = 5
Block size       2^5 = 32
Blocks           0, 32, 64, 96, 128, 160, 192, 224
134 falls in     128 – 159
                 Network   = 202.56.64.128
                 Broadcast = 202.56.64.159
                 First host= 202.56.64.129
                 Last host = 202.56.64.158

Worked: 172.16.117.77/20   (boundary in the 3rd octet)
Host bits in 3rd octet = 24 − 20 = 4   Block size 2^4 = 16
Blocks in 3rd octet    0, 16, 32, ..., 112, 128, ...
117 falls in           112 – 127
                 Network   = 172.16.112.0
                 Broadcast = 172.16.127.255
                 First host= 172.16.112.1
                 Last host = 172.16.127.254
`

Watch the case where the boundary is not the last octet: the broadcast address takesall remaining host bits across every following octetset to 1s. In the /20 example that is 4 bits in the third octet plus all 8 in the fourth — twelve 1s.

> ⚠️ **A worked example in the slides has a typo**: The VLSM block-method handout gives 203.45.156.148/18 → broadcast 203.45.191. 0 . By the method's own rules the broadcast must have all host bits set, so it is 203.45.191. 255 . The network address given, 203.45.128.0 , is correct. Use the rule, not that one line.

### VLSM — variable length subnet masking

- CIDR(Classless Inter Domain Routing) provides the flexibility ofborrowing bits from the host partand using them as network bits — a subnet within a network.
- Usable hosts per subnet =2n− 2, where n is the number of host bits. Prefix =32 − n.
- The reason VLSM exists: with a uniform mask, point-to-point WAN links needing only two addresses waste the rest. VLSM lets yousubnet a subnet.
- Always allocate largest subnet first, working down to the smallest.

**Process — designing a VLSM scheme**

1. Sort the required subnets frommost hosts to fewest.
2. For the largest: find the smallest n where2n− 2 ≥ hosts needed. Prefix = 32 − n.
3. Choose the first available starting address on a2nboundary.
4. Record network, first host, last host, broadcast.Next network address = broadcast + 1.
5. Repeat for the next subnet down, starting from where the previous block ended. Blocksmust not overlap.
6. Point-to-point WAN links take/30— 22− 2 = 2 usable addresses, exactly what a serial link needs.

`	ext
Lab scheme from 10.1.1.0/24
Subnet     Hosts  Calc              Network          Range              Broadcast
WS2-LAN      47   2^6−2=62  → /26   10.1.1.0/26      .1   – .62         10.1.1.63
ES2-LAN      28   2^5−2=30  → /27   10.1.1.64/27     .65  – .94         10.1.1.95
ES1-LAN      11   2^4−2=14  → /28   10.1.1.96/28     .97  – .110        10.1.1.111
WS1-LAN       5   2^3−2=6   → /29   10.1.1.112/29    .113 – .118        10.1.1.119
WAN           2   2^2−2=2   → /30   10.1.1.120/30    .121 – .122        10.1.1.123
`

### Local vs remote — how a host decides

**Process — the host's forwarding decision**

1. The source device compares itsown IP address and subnet maskagainst the destination IP address.
2. Same network portion→ destination is local. The data link frame uses theactual MAC address of the destination NIC.
3. Different network portion→ destination is remote. Layer 3 gives Layer 2 thedefault gateway (DGW) IP addressinstead.
4. The frame's destination MAC becomes therouter's MAC, not the final destination's. The router then begins the routing process.

A host can send packets to itself (127.0.0.1in IPv4,::1in IPv6), to local hosts, or to remote hosts. Adefault gatewaymust have an IP addressin the same range as the rest of the LAN, can accept data from the LAN and forward it off the LAN, and can route to other networks. With no default gateway or a bad one,traffic cannot leave the LAN.

### Four things a computer needs on a TCP/IP network

1. ItsIP address
2. Asubnet mask
3. The IP address of aDNS server
4. The IP address of anIP gateway

A server would also need itsapplication layer address. The most common standard for dynamic addressing isDHCP(Dynamic Host Configuration Protocol).

### Address assignment by layer

- Data link address (MAC)— permanently encoded in each network card; part of thehardware.
- Network layer address (IP)— assigned bysoftware; managers can assign any they want, but every computer on the same network must be unique.
- Application layer address— assigned by a software configuration file. Virtually allservershave one; mostclients do not.

### Four basic operations of the network layer

Addressing end devices · Encapsulation · Routing · De-encapsulation.Two addresses on any subnet cannot be assigned to a computer: thenetwork address(e.g. 128.192.56.0) and thebroadcast address(e.g. 128.192.56.255). Routers connect two or more subnets, so they have aseparate address on each subnet.

**Additional Context**: Private IPv4 address space within each class; IPv6 terminology (network portion → prefix , host portion → interface ID ); IPv6 learning its gateway via a router solicitation (RS) ; the Windows commands route print and netstat -r .

---

## Routing & Address Resolution (part of 10–15 questions)
> **Sources**: Ch 5 Part 2 · Default Gateway handout

### Three types of routing

| Type | Who decides | Detail |
| --- | --- | --- |
| Centralized | One central computer or router | All routing decisions made in one place |
| Static | Each computer/router itself | Following a formal routing protocol; must be configured and adjusted manually ; good for small non-redundant networks |
| Dynamic (adaptive) | Decentralized, by individual computers | Distance vector : count the number of hops . Link state : track hops, speed of circuits and how busy each route is |

### Routing protocols — interior vs exterior

Anautonomous systemis a network operated by one organisation. Protocols usedwithinone areinterior routing protocols; those usedbetweenautonomous systems areexterior routing protocols.

| Protocol | Interior / Exterior | Type | Note |
| --- | --- | --- | --- |
| BGP — Border Gateway Protocol | Exterior | Dynamic distance vector | Exchanges routing info between autonomous systems |
| RIP — Routing Information Protocol | Interior | Dynamic distance vector | Commonly used in smaller networks |
| IS-IS | Interior | Link state | Commonly used in large networks |
| OSPF — Open Shortest Path First | Interior | Dynamic hybrid | Uses number of computers in a route plus traffic and error rates |
| EIGRP | Interior | Dynamic hybrid | Improved version of IGRP; hybrid = some distance vector, some link state features |
| ICMP | — | Error reporting | Enables computers to report routing errors to message senders |

> ⚠️ **Answer this one the way the exam slide states it**: The revision slide says: "As we use Ping command to test connectivity … the command uses the most basic interior routing protocol on the Internet which is Internet Control Message Protocol." Ch 5 itself describes ICMP correctly as "simply an error-reporting protocol" , not a routing protocol. If a question pairs Ping with a protocol, the expected answer is ICMP — that much is safe either way. Don't let the textbook definition talk you out of picking ICMP.

### Address resolution — two mechanisms, don't mix them up

|  | Server name resolution | Data link address resolution |
| --- | --- | --- |
| Translates | Application layer address → IP address | IP address → data link (MAC) address |
| Protocol | DNS (Domain Name Service) | ARP (Address Resolution Protocol) |
| Method | Sends a DNS request packet to its DNS server | Sends a broadcast message to all computers in its subnet |
| Transport | UDP | — |

ARP's request, phrased in the slides:"Whoever is IP address xxx.xxx.xxx.xxx, please send me your data link layer address."The computer with that IP sends anARP response.

### Anatomy of a router

- Three main functions:determines a pathfor a packet,transmits the packetacross the path,supports communicationbetween a wide variety of devices and protocols.
- Three ways to connect and configure:console port,network interface port,auxiliary port. New routers have no IP address, so theconsole port(also called themanagement port) is used to configure it; the network interface port is used for routine maintenance.
- About90% of routersuse theCisco Internetwork Operating System (IOS).
- TheAccess Control List (ACL)file defines what types of packets should be routed and what types discarded.

### Three types of routes in a routing table

1. Directly connected— added automatically, provided the interface is active and has addressing. Shown asC(network) andL(local interface address).
2. Remote— no direct connection; learnedmanuallyvia a static route (S) ordynamicallyvia a routing protocol (O= OSPF,D= EIGRP).
3. Default route— forwards all traffic in one direction when there is no match in the routing table. Shown asS*.

The command isshow ip route.

### Unicast, broadcast, multicast

- Unicast— transmission between two computers; the most common type of message.
- Broadcast— sent toall computers on a specific LAN or subnet.
- Multicast— the same message to agroupof computers. Computers join usingIGMP(Internet Group Management Protocol).

> 🔗 Connects to Ch 8 VLANs: the stated benefit is smaller broadcast domains — broadcasts, multicasts and unicasts are isolated within an individual VLAN.

### End-to-end walkthrough — known destination address

1. The application layer passes anHTTP packetto TCP with the destination's Internet address.
2. TCPensures the request fits in one segment and hands it to the network layer.
3. IPchecks thesubnet maskand recognises the server isoutside its subnet.
4. IP checks its address table and finds theEthernet address of the router.
5. The data link layer wraps it in anEthernet frameand the physical layer transmits it.
6. The router's data link layer performserror checking, then passes the packet up to its network layer.
7. The router reads theIP addressto determine the final destination and forwards accordingly.
8. The destination router recognises the address is inside its own subnet, searches itsdata link layer address table, and passes the packet down with the correct Ethernet address.

**Additional Context**: The unknown-address variant of the walkthrough (DNS request first, then HTTP); routing table column terms — route source, destination network, outgoing interface, administrative distance , metric, next-hop, route timestamp.

---

## Transport Layer — TCP, UDP & ARQ (part of 10–15 questions)
> **Sources**: Ch 5 Part 1 Network and Transport layers

### TCP vs UDP — reproduced on the exam slide, expect several questions

|  | TCP | UDP |
| --- | --- | --- |
| Full name | Transmission Control Protocol | User Datagram Protocol |
| Connection | Connection-oriented — uses a three-way handshake to establish a connection | Connectionless — no setup, no sequence numbers, no acknowledgements |
| Reliability | Includes ACKs and sequence numbers for reliable delivery | Best-effort delivery — no acknowledgement that data arrived |
| PDU | Segment | Datagram |
| Header | 192-bit header (24 bytes) of control information; 20 bytes excluding Options | Four fields, 8 bytes of overhead: source port, destination port, length, CRC-16 |
| Used for | Web traffic — HTTP always uses TCP — and file transfers | Single small packets: DNS requests , network management control messages, RIP messages, DHCP addressing messages. Real-time apps like video streaming |

> ⚠️ **Two header figures, both true**: The slides state the TCP header as both "192-bit (24 bytes)" and "20-byte excluding Options". The quiz in the deck asks "A typical TCP segment has a ___ header of control information" and answers 192-bit . If the question says typical or offers 192-bit, pick that; if it specifies excluding options , it's 20 bytes.

UDP is not commonly used for HTTP requests— that's the odd-one-out in the deck's quiz list.

### Four transport layer functions — and the one that isn't

1. Taking messages from theapplication layer
2. Segmenting— breaking long messages into smaller segments, and reassembling incoming ones
3. End-to-end deliveryof the message
4. Interfacing with the network layer, and managing the session

Routing is NOT a transport layer function— it belongs to the network layer, and appears as a distractor in the deck's quiz. Equally: thenetwork layer does not provide guaranteed end-to-end delivery(FALSE, and it appears in both Part 1 and Part 2).

### Port numbers

TCP and UDP useport numbers to manage multiple, simultaneous conversations. The application tells TCP thesource port addressanddestination port address; these are thefirst two fieldsin the TCP segment. Thedestination porttells the destination which application layer program to send the packet to; thesource porttells the receiver which program it came from.

| Service | Port |
| --- | --- |
| FTP | 21 |
| Telnet | 23 |
| SMTP | 25 |
| Web / HTTP | 80 |

### Connection-oriented messaging and the handshakes

1. The transport layer on both sender and receiver sends aSYN(synchronize) and receives anACK(acknowledgement) segment — thethree-way handshake.
2. Once established, segments flow between sender and receiver.
3. On error, the receiver asks the sender toretransmituntil received without error. TCP calls thisAutomatic Repeat reQuest (ARQ).
4. When transmission is complete, the session is terminated using afour-way handshake.

Connectionless messaging: each packet treated separately, makes its own way, no connection established, packets mayarrive out of sequence— so the sender'snetwork layer puts a sequence number on each packet.

### ARQ — the two types and their sub-types

|  | Stop-and-wait ARQ | Continuous ARQ |
| --- | --- | --- |
| Behaviour | Sender stops and waits for a response after each data packet | Sender does not wait; immediately sends the next one |
| Response | Receiver sends ACK (continue) or NAK (resend previous message) | On NAK, the sender retransmits the needed messages |
| Data flow | Half duplex | Full duplex by definition; also called sliding window |
| Also provides | — | Flow control — ensuring the sender isn't transmitting too quickly for the receiver |

- Continuous ARQ retransmittingonly the packets containing an error=Selective-Repeat ARQ, also calledLAP-M(Link Access Protocol for Modems).
- Retransmitting thefirst packet with an error and all those that followed it=Go-Back-N ARQ.

> 🔗 Connects to Ch 7: Wi-Fi's DCF sends each CSMA/CA frame using stop-and-wait ARQ — the ACK interval is too short for another computer to start transmitting. The same mechanism reappearing at the wireless MAC layer.

### TCP/IP origin and structure

- Developed for the U.S. Department of Defense'sARPANETbyVinton Cerf and Bob Kahn in 1974.
- Two parts:TCPis the transport layer protocol linking the application layer to the network layer;IProutes the message to the final destination.
- TCP/IP isnota data link protocol — FALSE statement, appears as a quiz item.
- The network layerdoes notsit directly between the application and data link layers — the transport layer is in between. Also FALSE, also a quiz item.

### Quality of Service

QoS routingis a special type ofconnection-orientedmessaging where different connections get different priorities.RSVP(Resource Reservation Protocol) andRTSP(Real-Time Streaming Protocol) request a minimum guaranteed data rate; once connected they useRTP(Real-Time Transport Protocol) to send packets.RTP does not replace TCP or UDP— each real-time packet is created with RTP thensurrounded by a UDP datagram.

**Additional Context**: The security note that the TCP three-way handshake is one of the most exploited security flaws, and that the most basic way to identify someone on the Internet is by their IP address .

---

## Application Layer — Architectures, Web & Email (10–15 questions)
> **Sources**: Ch 2 Application layer

### Five functions of any application program

1. Data storage
2. Data access logic— the processing required to access data
3. Application logic— sometimes called business logic
4. Presentation logic— presenting information to the user and accepting commands
5. Services logic— like the user interface, but enablesother application softwareto make requests rather than users

### Four fundamental application architectures

| Architecture | Who does the work | Fundamental problem |
| --- | --- | --- |
| Host-based | The server (host) performs virtually all the work. Developed in the 1960s | Server must process all messages; high cost to upgrade |
| Client-based | The client computers perform most of the work | All data on the server must travel to the client for processing — stated on the exam slide |
| Client–server | Work is shared between servers and clients | Getting software from different vendors to work together → solved by middleware |
| Cloud-based | The cloud provides services to the client | — |

Web browsing is the standard example of a client–server application architecture.Host-based and client-based arenotsimilar — that quiz statement is FALSE, because in host-based the server does the work. Almost all new applications today are client–server: bestscalability, mostreliable, usually thecheapest, and they enable cloud computing.

### Middleware — defined verbatim on the exam slide

Software that sitsbetween the application software on the client and the application software on the server. It enhances a client–server application by facilitating communication and data management. Two things it does: it provides astandard way of communicatingthat can translate between software from different vendors, and itmanages the message transferfrom clients to servers and back, so clients need not know which specific server holds the data.

Standards named:DCE(Distributed Computing Environment),CORBA(Common Object Request Broker Architecture), andODBC(Open Database Connectivity), which is a standard fordata access logic.

### Two-tier, three-tier, n-tier

| Tier | Client | Middle | Back |
| --- | --- | --- | --- |
| Two-tier | Application and presentation logic | — | Server responsible for the data |
| Three-tier | Presentation logic | Application server — services logic and application logic | Database server — data access logic and data storage |
| n-tier | Presentation logic | Services and application logic spread across two or more sets of servers | Database server — data access logic and storage |

- n-tier is more scalable than three-tier— stated on the exam slide and it is the answer to a deck quiz.
- Two disadvantages of n-tier: it puts agreater load on the network, and it ismuch more difficult to program and test.
- Thin client= little or no application logic on the client; much easier to manage;enables cloud-based architecture.Thick client=all or almost all of the application logic on the client.
- There isno direct relationshipbetween thin/thick clients and two-, three-, n-tier architectures.

### Cloud — three service models and three deployment models

| Model | Organisation manages | Provider manages | Note |
| --- | --- | --- | --- |
| SaaS — Software as a Service | Nothing — the entire application is outsourced | Everything; used via a browser (thin client) | Most frequently used SaaS is email ; also CRM |
| PaaS — Platform as a Service | Its own application and data | The platform : hardware, database software (data access logic), operating system | Faster development at a fraction of the cost |
| IaaS — Infrastructure as a Service | All the software : OS, virtualization, database software, applications and data | Hardware : servers, storage, networking components | Also called HaaS , Hardware as a Service |

SaaS is based onmultitenancy— one application everybody shares, yet each can customise it. Deployment models:private cloud(single organisation, exclusive),public cloud(multiple organisations share resources),community cloud(organisations with a common purpose; asubset of public cloud).

### How the Web works

The Web is atwo-tier client–server architecture. Each client needs aWeb browser; each server needs aWeb server. The standard protocol between them isHTTP(Hypertext Transfer Protocol) — not "the web protocol", which is a quiz distractor.

|  | HTTP request — 3 parts | HTTP response — 3 parts |
| --- | --- | --- |
| 1 | Request line — required . Starts with a command (e.g. GET), provides the Web page, ends with the HTTP version number the browser understands | Response status — required . HTTP version number, a status code , and a reason phrase |
| 2 | Request header — optional . Browser being used, the date | Response header — optional . Web server being used, date, exact URL |
| 3 | Request body — optional . Information the user typed into a form | Response body — optional . The Web page itself |

Two traps, both quiz items: it is therequest line, not the request header, that starts with a command like GET; andnot all three parts are required— only the first.

### How email works

The most commonly used standard isSMTP(Simple Mail Transfer Protocol). SMTP email is usually implemented as atwo-tier thick client–server application, but not always— that hedge is on the exam slide, so expect the wording.

1. Each client computer runs an application layer software package called amail user agent. The user creates the message in it.
2. The user agent sends theSMTP packetto a mail server running amail transfer agent.
3. The email server reads the SMTP packet to find thedestination addressand sends the packet on through the network.
4. The mail transfer agent on the destination serverstores the message in the receiver's mailboxon that server.

| Standard | Covers | Key difference |
| --- | --- | --- |
| SMTP | Transmission between mail servers , and between the originating email client and its mail server | Permits only text messages |
| POP — Post Office Protocol | Receiver's email client ↔ their mail server | Deletes email from the server when copied to the client |
| IMAP — Internet Message Access Protocol | Receiver's email client ↔ their mail server | Does not delete the email |

- An SMTP packet has two parts: theheader(source and destination email addresses) and thebody(the wordDATAfollowed by the message).
- Attachments:MIME(Multipurpose Internet Mail Extension),uuencode,binhex. MIMEtranslates each byte of the file into a special code that looks like regular text; the receiver's client recognises the MIME text and reverses the conversion.
- Web-based emailis athree-tier thin client–server architecture— a Web server and browser, no email client needed.

### Other applications, and two terms from the exam slide

- Telnetenables users to log in to servers. Itrequires an application layer program on both the client and server computers. Common package:PuTTY.
- Server farm— a group of computers linked together toact as one computer.
- Web browser requirement: to use the Web, each client computer requires a Web browser.
- Webcastingis one-directional, non-interactive videoconferencing, content sent from server to user. The fastest-growing form of videoconferencing isdesktop videoconferencing.

> 🔗 Connects to Ch 5 transport: DNS requests use UDP , but HTTP always uses TCP . Which transport protocol goes with which application is a recurring cross-chapter question.

### P2P and application security

- InP2P, all computers act as both client and server and perform all four functions. Advantage: data can be installed anywhere. Challenge:finding the data.Security is a major concern.
- SQL injectionis one of thetop three security risks on the Internet, enabled by unsecured websites allowing text entry into a form.Email spoofingis another very frequently used technique.
- Application security must be implementedat the time the application is coded.

**Additional Context**: Web conceived 1989 by Sir Tim Berners-Lee at CERN ; first browser 1990; Mosaic , the first graphical browser, written 1993 by a team led by Marc Andreessen .

---

## Backbone Networks & VLANs (5–10 questions)
> **Sources**: Ch 8 Backbone Networks

### Devices and the layer they operate at

| Device | Layer | Forwards based on |
| --- | --- | --- |
| Switch | Layer 2 — data link | Data link layer address |
| Router | Layer 3 — network | Network layer address |
| VLAN switch | Special combination | A combination of layer 2 switch and router |
| Layer-3 switch | Layer 3 | Switches on IP address ; can replace routers; faster than routers; more simultaneously active ports |

The false statement to recognise: a layer-3 switch canonlyswitch on data link layer addresses. BN cable is usuallyfiber optic, and most BNs today usehigh-speed Ethernet. Two basic components of a BN: thenetwork cableand thehardware devices that connect other networks to the BN.

### Switched vs routed backbone

|  | Switched backbone | Routed backbone |
| --- | --- | --- |
| Moves packets on | Data link layer addresses | Network layer addresses |
| Topology | Star , one switch at its centre; a switch serves each LAN | — |
| Also called | — | Subnetted or hierarchical backbones |
| Typically used | Most common type in the distribution layer | Connecting different buildings on the same enterprise campus backbone |
| Broadcasts | — | Ensures broadcast messages stay in one network segment |

The best practice recommendation, stated directly:a switched backbone or VLAN for the distribution layer, and a routed backbone for the core layer. Best practice technology:gigabit Ethernet.

### MDF and chassis switches

- The room containing the rack is themain distribution facility (MDF)orcentral distribution facility (CDF). Devices are connected among themselves with shortpatch cables.
- With an MDF, all cables run into one room — if a switch becomes overloaded it's straightforward to unplug and move cables to a less-busy switch.
- Achassis switchlets users plug modules directly into the switch. Its key advantage isflexibility.

### VLANs — characteristics and benefits

VLANs arelogical connections with other similar devices. Characteristics: segmentation of groups on the same switches; more manageable organisation;broadcasts, multicasts and unicasts are isolated in the individual VLAN; each VLAN has itsown unique range of IP addressing;smaller broadcast domains.

| Benefit | Why |
| --- | --- |
| Smaller broadcast domains | Dividing the LAN reduces the number of broadcast domains |
| Improved security | Only users in the same VLAN can communicate together |
| Reduced cost | One switch can support multiple groups or VLANs |
| Better performance | Small broadcast domains reduce traffic, improving bandwidth |
| Simpler management | Similar groups need similar applications and resources |

Without a Layer 3 device to connect the VLANs, devices in different VLANs cannot communicate.

**Process — how a VLAN moves a frame between switches**

1. Each computer is assigned to a specific VLAN with aVLAN ID number; each VLAN ID is matched to a traditionalIP subnet.
2. Computers are assigned into the VLANbased on the physical port on the switchinto which they are connected.
3. When a computer transmits, it uses traditional Ethernet and IP addresses.
4. The VLAN switch usesEthernet 802.1q taggingto move frames from one switch to another — it inserts theVLAN ID number and a priority code into the VLAN tag field.
5. Therouter, a layer 3 device, strips off the Ethernet frame and reads theIP packet.

Atrunkis apoint-to-point link between two network devices. Cisco trunk functions: allow more than one VLAN; extend the VLAN across the entire network;by default supports all VLANs; supports802.1Qtrunking.

### VLAN configuration commandspossibly testable

VLAN details are stored in thevlan.datfile. VLANs are created inglobal configuration mode.

`	ext
Create and name a VLAN
S1# configure terminal
S1(config)# vlan 20
S1(config-vlan)# name student
S1(config-vlan)# end

Assign a port to it
S1# configure terminal
S1(config)# interface fa0/18
S1(config-if)# switchport mode access
S1(config-if)# switchport access vlan 20
S1(config-if)# end

Verify    show vlan [brief | id vlan-id | name vlan-name | summary]
Remove    no switchport access vlan     (returns interface to VLAN 1)
Delete    no vlan vlan-id               (reassign member ports FIRST)
`

If you don't name a VLAN, IOS gives it a default name ofvlanplus the four-digit number — VLAN 20 becomesvlan0020.

> 🔗 Connects to Ch 5's ACL on routers reappears here as the security payoff: VLANs are the most secure type of backbone because they enable ACL and other security measures to be applied at the switch level .

**Additional Context**: Restoring a switch to factory default (erase startup-config, delete vlan.dat , reload). Terminology check: a BN connecting many BNs across several buildings at one location is not called an "Internet backbone" — that quiz statement is FALSE.

---

## Wide Area Networks & VPNs (5–10 questions)
> **Sources**: Ch 9 Wide Area Networks

### Carriers and the three WAN service types

- LEC— local exchange carrier: a common carrier providinglocal telephone services.
- IXC— interexchange carrier: a common carrier providinglong-distance services.
- As a customer you donot lease physical cables— you leasecircuitsthat provide certain transmission characteristics.

| Service | What you lease | Billing | Connection device |
| --- | --- | --- | --- |
| Dedicated-circuit | Circuits for exclusive use 24/7 ; also called private line services . All connections point to point | Flat fee per month | Multiplexers, or a CSU (channel service unit) and/or DSU (data service unit) |
| Packet-switched | A connection into the common carrier cloud | Fixed fee for the connection plus charge per packet transmitted | PAD — packet assembly/disassembly device |
| VPN over the Internet | An Internet connection per location, plus a VPN gateway at each | Pay the common carrier for the circuit and the ISP for access | VPN gateway |

### Dedicated-circuit architectures

| Architecture | Shape | Failure behaviour |
| --- | --- | --- |
| Ring | Closed loop, each computer linked to the next; circuits full- or half-duplex | Failure of any one circuit or computer means the network can continue to function . Downside: messages can take a long time |
| Star | All computers to one central computer | Failure of one circuit affects only that circuit; central computer failure causes the network to fail . Easy to manage but most susceptible to traffic problems |
| Full mesh | Every computer connected to every other | Seldom used — extremely high cost |
| Partial mesh | Many but not all connected; usually called just "mesh" | Much more common. Combines performance benefits of ring and star; drawback is decentralized routing |

### Three packet-switched services

| Service | Key facts |
| --- | --- |
| Frame relay | One of the oldest ; most companies no longer installing it. Uses T carrier and SONET as its circuits. It is an unreliable packet service because it does not perform error control |
| MPLS — Multiprotocol Label Switching | A layer 2 service commonly used with IP for routing at layer 3. The PAD strips off the Ethernet frame and uses the IP address to route through the carrier's network |
| Ethernet services | Bypass the traditional telephone company WAN network. Providers have laid their own gigabit Ethernet fiber-optic networks in large cities. Much more flexible than old WAN technologies |

- Frame relay lets users specify two data rates:CIR(committed information rate) — the rate the PVCguarantees; andMAR(maximum allowable rate) — the maximum the network willattemptto provide.
- Connections between locations arepermanent virtual circuits (PVCs); some carriers also permitswitched virtual circuits (SVCs).
- Key advantage of packet-switched services:different locations can have different connection speeds. Packets from separate messages with different destinations can beinterleaved.
- Organisations often lease a dedicated circuit from their offices to the packet-switched network'spoint of presence (POP).

### VPNs — the three types and the tunnel

AVPNprovides the equivalent of a private packet-switched networkover the public Internet, by establishing PVCs that run over the Internet. VPN services arevery cheap, but only as reliable as the Internet. The PVCs created through the Internet are calledtunnels; the VPN istransparent to the users, to the ISP, and to the Internet as a whole.

| Type | Connects |
| --- | --- |
| Intranet VPN | Virtual circuits between organisation offices over the Internet |
| Extranet VPN | Same, except it connects several different organisations |
| Access VPN | Enables employees to access the organisation's networks from a remote location |

- Layer 2 VPNuses the layer 2 packet to select the tunnel and encapsulates the entire packet.Layer 3 VPNuses the layer 3 packet, encapsulating starting with the layer 3 packet.
- Advantages:low cost and flexibility. Two disadvantages:traffic on the Internet is unpredictable, andsecurity is always a concern— though most VPNs use encryption.

**Process — how a VPN carries a packet**

1. The employee starts the VPN software and logs into theVPN gatewayat the office.
2. The VPN software creates anew "interface"on the computer; the gatewayassigns an IP addressto it.
3. The computer now thinks it hastwo connectionsto the Internet; the VPN software makes the VPN interface thedefault interface.
4. The VPN software receives the IP packet,encryptsit, and encapsulates it with anESP(Encapsulating Security Payload) packet usingIPSecencryption.
5. The ESP packet is passed to the normal Internet interface → IP software → Ethernet software, which adds a frame and transmits it to the employee's router.
6. The packet travels via the ISP to the office's router, wherethe process is reversed.

> 🔗 Connects to Ch 11 security: IPSec transport mode encrypts just the IP payload, leaving the header unchanged; tunnel mode encrypts the entire IP packet and adds a new one. Tunnel mode is what a VPN uses.

### SDWAN — four benefits and three planes

AnSDWAN(Software Defined WAN)uses software to control and manage the routers used in the WAN. Four benefits:centralized management;reduces costsby balancing traffic over circuits with different costs and capacities;more visibilityso managers see end-to-end traffic flows;good security.

1. Management Plane— the top level; some vendors call it theOrchestration Plane. The software used to control the network.
2. Control Plane— the software that controls the network andmakes the decisions.
3. Data Plane— includes therouters that implementthe network.

**Additional Context**: Why best-practice WAN design is harder than LAN/BN design: you are buying services from different companies rather than products . A WAN is usually one of the most secure parts of the network unless you're using a VPN over the Internet.

---

## The Internet — Structure & Access Technologies (5–8 questions)
> **Sources**: Ch 10 Internet

### Internet structure — hierarchical, not flat

- At the top are very large national ISPs —tier 1 ISPs. They connect together and exchange data atInternet exchange points (IXPs).
- Tier 1 connects totier 2; tier 2 connects totier 3.
- ISPsat the same level do not charge one anotherfor transferring messages they exchange — this ispeering.
- Higher-level ISPs charge lower-level ISPsto transmit their data. Each ISP is anautonomous system.
- APOP (point of presence)isthe place at which the ISP provides services to its customers. Messages destined for other customers of the same ISP flow within that ISP's own network.
- Backbone circuits of major U.S. national ISPs run atSONET OC-192 (10 Gbps); some are experimenting withOC-768 (80 Gbps)and planningOC-3072 (160 Gbps).

Networks mustrigidly conformto standards for thetransport and network layers, while content and new application protocols developwithout restriction.

### Three access technologies compared

|  | DSL | Cable modem | Fiber to the Home (FTTH) |
| --- | --- | --- | --- |
| Circuit type | Point-to-point | Shared multipoint — each user competes for available capacity; all messages go to all computers on the circuit | Dedicated point-to-point |
| Multiplexing | ADSL uses FDM | — | WDM — wavelength division multiplexing |
| Customer equipment | Line splitter separates voice from data, directs data into a DSL modem | Standard coaxial cable to a fiber node with an OE (optical-electrical) converter | ONU (optical network unit) converts optical signals into Ethernet format; acts as an Ethernet switch, can include a router |
| Carrier equipment | Local loops → MDF → splits voice from data → DSLAM demultiplexes the data streams and converts them into digital data | Fiber nodes → cable company distribution hub; upstream connects into a CMTS (cable modem termination system) | One fiber-optic cable run past each house replaces hundreds of copper telephone lines |
| Standard / speed | Most common type is ADSL | DOCSIS — the dominant standard, used by most vendors of HFC (hybrid fiber coax) networks. About 200 Mbps each way | Most carriers offer 1 Gbps |

- ADSL's three channelson one local loop: (1) traditional voice telephone circuit, (2) a relativelyhigh-speed downstreamchannel from the end office to the customer, (3) aslightly slower upstreamchannel. It's calledasymmetricbecause the two data channels have different speeds.
- DSL is attractive because it usually requiresjust changing the telephone equipment, not rewiring the local loop.
- A typical cable segment is shared by300 to 1,000 customers.
- DSL and cable modem are commonly calledbroadbandtechnologies.
- DOCSIS is not a formal standard— worth noting, since the de jure / de facto distinction came up in Ch 1.

### Internet governance — don't mix these up

| Body | Role |
| --- | --- |
| Internet Society | The closest thing the Internet has to an owner . ~150 organisational and 65,000 individual members in 100+ countries |
| IETF — Internet Engineering Task Force | Large open international community concerned with the evolution of the Internet architecture and its smooth operation |
| IESG — Internet Engineering Steering Group | Technical management of IETF activities and the Internet standards process |
| IAB — Internet Architecture Board | Provides strategic architectural oversight |
| IRTF — Internet Research Task Force | Research groups working on long-term issues |

The trap, which is a deck quiz item: theIESG does NOT provide strategic architectural oversight— that's theIAB.No one organisation operates the Internet.

**Additional Context**: Internet2 : ~400 universities and organisations, all circuits at least OC-192 , access points called gigapops . Security note: attackers break into home computers to use them in a DDoS attack, and university students in dorms are a prime target .

---

## Network Design (5–10 questions)
> **Sources**: Ch 6 Network Design

### Seven network architecture components — and their vendor names

| # | Component | Vendor layer name | Role |
| --- | --- | --- | --- |
| 1 | LAN | Access layer | Enables users to access the network |
| 2 | Building backbone | Distribution layer | Distributes traffic to and from the LANs |
| 3 | Campus backbone | Core layer | Connects all the buildings on one campus |
| 4 | Data center | — | Contains the organisation's servers; essentially a LAN but designed and managed very differently |
| 5 | WAN | Enterprise edge — the parts that connect the campus to the rest of the world | Private network connecting different campus locations; usually leased from a common carrier |
| 6 | Internet access | Connects the organisation to the Internet |
| 7 | E-commerce edge | Special LAN enabling electronic data exchange with external entities |

The trap: thecampus backbone / core layer does NOT provide end user access— the LAN / access layer does. That is a deck quiz item.

### Building-block design — the three steps

Most organisations now use thebuilding-block process. Itstarts with a few standard components and uses them over and over, even if they provide more capacity than needed. The goal issimplicity of design; the strategy is sometimes called"narrow and deep".

**Process — and it cycles**

1. Needs analysis— understand the fundamentalcurrent and future network needsof the various users, departments and applications. Produces alogical network design.
2. Technology design— examine the available technologies and assess which options willmeet users' needs. Produces one or morephysical network designs.
3. Cost assessment— consider therelative costsof the technologies.
4. Cycle back to needs analysis, refined by the technology and cost information, which triggers further changes. Repeating this loop produces the final design.

Memorise which verb goes with which step — all three appear as separate quiz items keyed on a single word:understand needs→ needs analysis;examines available technologies→ technology design;considers relative cost→ cost assessment.

### Why the traditional process is less appropriate now

- The underlying technology ofclient and server computers, networking devices, and circuitsis changing very rapidly.
- Thegrowth in network traffic is immense.
- Thebalance of costs has changed dramatically.

The distractor to reject: "the most expensive part of any network is the hardware" — that isnotone of the reasons.Personnel time is the largest cost, as Ch 12 confirms.

### Needs analysis detail

- Goal: understandwhy the network is being built and what users and applications it will support.
- Primary objective of this stage: define thegeographic scopeof the network and theusers and applicationsthat will use it.
- Reviewing the list of applications and identifying the location of each is calledbaselining. Understanding current operations provides abaseline against which future design requirements can be gauged.
- Requirements are organised intomandatory,desirable, andwish-listrequirements.
- Key deliverable: a set oflogical network diagramsshowing applications, circuits, clients and servers. A logical designdoes not specify technologies or products.
- Note the shift: in the past application systems generated most network traffic;now it is Internet use.

### Technology design and cost assessment detail

- Designing circuit capacity =capacity planning. Analysis can focus onaverage circuit trafficorpeak circuit traffic. Circuit loading = the amount of data transmitted on a circuit.
- Theturnpike effect= traffic increasesmuch faster than originally forecast.
- Abottleneckis a circuit filled almost to capacity, determining whether users get good or bad response times.The bottleneck in most enterprise networks is the WAN and the Internet, not the enterprise campus network.
- RFP(request for proposal) specifies what equipment, software and services are desired and asks vendors for their best prices.
- Three deliverables of cost assessment: theRFP, therevised physical network diagram, and thebusiness caseexpressed in business objectives.
- To management the network is simply acost center; the key isspeaking management's language.

> 🔗 Connects to These seven components are the organising frame for the whole second half of the course: Ch 7 = access layer, Ch 8 = distribution and core, Ch 9 = WAN, Ch 10 = Internet access. Ch 6's security note says the components with the tightest security are the core layer and the data center .

**Additional Context**: The four steps of the traditional design process (meet users → estimate data per user → design circuits and get vendor estimates → build), which works well for static or slowly evolving networks; simulation tools that can "discover" the existing network.

---

## Network Security (5–8 questions)
> **Sources**: Ch 11 Network Security

### Three primary goals — CIA

| Goal | Definition from the slides |
| --- | --- |
| Confidentiality | Protection of organisational data from unauthorized disclosure of customer and proprietary data |
| Integrity | Assurance that data have not been altered or destroyed |
| Availability | Continuous operation of the organisation's hardware and software |

### Two threat categories, and the four named threat types

- Ensuring business continuity— primarilyavailability, with some aspects of data integrity. Three main threats:disruptions, destruction, and disasters.
- Preventing unauthorized access— primarilyconfidentiality, but also integrity, since an intruder may change important data.
- The four valid threat categories are thereforedisruption, destruction, disaster, intrusion."Controlled chaos" is the fake optionand appears as a quiz distractor.
- A hacker gaining access to organisational data files and resources is anintrusionthreat.

### Three types of control

1. Preventive— mitigate or stop a person from acting or an event from occurring.
2. Detective— reveal or discover unwanted events.
3. Corrective— remedy an unwanted event or an intrusion.

Controls aresoftware, hardware, rules, or proceduresthat reduce or eliminate threats. They must bereviewed periodically.

### Risk assessment — five steps and five impact areas

**Process — risk assessment**

1. Develop risk measurement criteria— the measures used to evaluate how a threat could affect the organisation.
2. Inventory IT assets, then rate them for importance.
3. Identify threatsand create threat scenarios.
4. Document existing controls.
5. Identify improvements, focusing first on the highest risks.

- Five most common business impact areas:financial, productivity, reputation, safety, legal.
- Three risk assessment frameworks named:OCTAVE,COBIT,NIST guide.
- Anassetis something of value: hardware, software, data or applications. The most important type is themission-critical application; next is the organisation'sdata.
- Athreatis any potential occurrence that can do harm, interrupt systems, or cause monetary loss.

### Business continuity — the key principle

The key principle in preventing disruption, destruction and disaster isredundancy. A business continuity plan has two parts:controls that prevent these events having a major impact, and adisaster recovery plan. Five major threats to business continuity:viruses, theft, denial of service attacks, device failure, disaster.

- Macro virusesspread when an infected file issimply opened— contained in documents, emails or spreadsheet files.
- Awormis a special type of virus thatspreads itself without human intervention.
- UPS— uninterruptible power supply: detects power failures and permits attached devices to continue operating.
- RAID— redundant array of independent disks.RAID 0faster than traditional storage;RAID 1writes duplicate copies on at least two disks;RAID 6can survive the failure oftwo driveswith no data loss.

### DoS / DDoS — the attack chain and the three defences

| Defence | What it does |
| --- | --- |
| Traffic filtering | Configure the main router to verify the source address of all incoming messages is in a valid address range for that connection |
| Traffic limiting | Configure the main router or firewall to limit the number of incoming packets that could be attack packets |
| Traffic anomaly detector | A special-purpose security device installed in front of the main router ; learns what normal traffic looks like and quarantines attack packets while letting normal traffic through |

### Firewalls — three types

| Type | Examines | Distinguishing feature |
| --- | --- | --- |
| Packet-level | Source and destination address of every packet passing through | Manager writes a set of rules called an access control list (ACL) |
| Application-level | Has rules for each application it can process | Can use stateful inspection — monitors and records the status of each connection and uses that in deciding what to discard. More expensive and complicated. Many prohibit external users uploading executable files |
| NAT — network address translation | Converts between public IP addresses viewable from the Internet and private IP addresses hidden from outside | NAT is transparent. If intruders can't see the private addresses, they can't attack those computers. Uses an address table to translate private addresses into proxy IP addresses |

Three basic access points into most networks:Internet, LANs, WLANs. Themost common access point for intrusion is the Internet connection, which is why perimeter security focuses there.

### Encryption — symmetric vs asymmetric

|  | Symmetric | Asymmetric / public key |
| --- | --- | --- |
| Keys | The key used to encrypt is the same as the one used to decrypt. Also called single-key encryption | The key used to decrypt is different from the key used to encrypt |
| Problem | Causes problems with key management | Greatly reduces the key management problem |
| Standards | DES , 3DES (harder to break), AES (NIST's new standard) | Based on one-way functions ; public key encrypts, private key decrypts |

- Readable form =plaintext; encrypted form =ciphertext. Good encryption systemsdo not depend on keeping the algorithm secret — only the keys.
- Public key algorithms areinvertible: text encrypted with either key can be decrypted by the other. Normally encrypt with public, decrypt with private —doing the reverse creates a digital signature, because only the real user has the private key.
- PKIbegins with acertificate authority (CA), a trusted organisation that vouches for identity. The CA issues adigital certificate— the requestor'spublic key encrypted using the CA's private key.
- PGP— freeware public key package byPhilip Zimmermann, often used for email.SSL— widely used on the Web; encrypts outbound packetscoming out of the application layer before they reach the transport layer.IPSec— differs from SSL in that SSL focuses onWeb applicationswhile IPSec works with amuch wider varietyof application layer protocols.
- IPSec transport modeencryptsjust the IP payload, leaving the header unchanged for easy routing.IPSec tunnel modeencrypts theentire IP packetand adds an entirely new IP packet.

### User authentication and social engineering

- Access is based onsomething you know(usually a password, or apassphrase),something you have, orsomething you are(biometricsystems — fingerprint, retina).
- Two-factor authentication= a passwordin conjunction withsomething you have; commonly the user's mobile phone.
- Central authentication: the user logs into theauthentication serverrather than a file or application server; it issues acertificate. The most commonly used authentication protocol isKerberos.
- Social engineering=breaking security simply by asking.Phishingis a very common type — a mass email claiming the account was shut down, directing the user to log in at a fake site.
- A known problem:removal of user accounts when someone leaves— network managers are often not informed of the departure.

### IPS and recovery

- Network-based IPS= a sensor placed on key network circuits.Host-based IPS= a software package installed on a host or server. Many managers installboth.
- Two detection techniques:misuse detectioncompares monitored activities withsignatures of known attacks;anomaly detectioncompares them with the"normal" set of activities. Most IPSs useboth.
- Asecurity holeis simplya bug that permits unauthorized access. Attacks exploiting a newly discovered holebefore a patch is developedarezero-day attacks.
- Trojan horsesareremote access management consoles, sometimes calledrootkits.Spyware, adware and DDoS agents are three types of Trojans.
- Computer forensics= the use of computer analysis techniques togather evidence for criminal and/or civil trials. Ahoney potis anattractive server that contains only fake information.
- Probably the best security investment isuser training. Good security starts with a cleardisaster recovery planand a solidsecurity policy.

### Four types of intruder

1. Casual intruderswith only limited knowledge of computer security —script kiddies.
2. Experts in securitymotivated by thethrill of the hunt— hackers and crackers.
3. Professional hackersbreaking into corporate or government computers forespionage, fraud, or intentional destruction.
4. Organisation employeeswith legitimate access whogain access to information they are not authorized to use.

Three reasons computer security has increased in importance: hacking moved fromhobby to profession;hacktivism(hacking to bring attention to a political or social goal) has become more common;mobile devicesoffer a fertile environment for exploitation.

**Additional Context**: SOX and HIPAA as drivers; an average data breach costing about $3.5 million ; the four risk control strategies ( accept, mitigate, share — typically insurance — defer ); CDP (continuous data protection); the C2 minimum operating system security level.

---

## Network Management (3–5 questions)
> **Sources**: Ch 12 Network Management

### Definition and the four functional areas

Network managementis the process ofoperating, monitoring, and controlling the network to ensure it works as intended. The four basic functions, each a chapter section:

1. Configuration management— managing and documenting the network's hardware and software configuration.
2. Performance and fault management.
3. End user support.
4. Cost management.

### Managed networks — the single most important performance element

The single most important element contributing to network performance isa managed network that uses managed devices. Managed devices are standard devices such as switches and routers that havesmall onboard computers to monitor the traffic that flows through the device. Their three additional capabilities:

1. Theyrecord dataon the traffic they process.
2. Theymonitor the status of other devicesaround them and can send analarm messageto the network management console on detecting a critical situation.
3. They can beprogrammed to take actionwhen certain events occur.

### SNMP, MIB and RMON

- The most commonly used network management protocol isSNMP(Simple Network Management Protocol).
- Each SNMP device has anagentthat collects information about itself and the messages it processes, storing it in a database called themanagement information base (MIB).
- Most SNMP devices haveRMON(remote monitoring). Data arenot transmitted to the central server until the network manager requests it.

| Software type | Monitors |
| --- | --- |
| Device management | Information about the specific devices on a network |
| System management | Same info, but analyses the device information to diagnose patterns |
| Application management | Builds on device management but monitors applications rather than systems |

### Performance statistics — the formula is examinable

| Metric | Definition |
| --- | --- |
| Availability | The percentage of time the network is available to users . Downtime includes faults and routine maintenance and upgrades |
| MTBF — mean time between failures | Hours or days of continuous operation before a component fails |
| MTTR — mean time to repair | Average time until the failed device or circuit is operational again |
| MTTD — mean time to diagnose | Average time until the root cause is correctly diagnosed |
| MTTR — mean time to respond | Average time until service personnel arrive at the problem location |
| MTTF — mean time to fix | How quickly staff correct the problem after they arrive |

`	ext
MTTRepair  =  MTTDiagnose  +  MTTRespond  +  MTTFix
`

Note the collision:MTTRis used in the slides forboth"mean time to repair" and "mean time to respond". Read the question's full wording rather than the acronym.

### Reducing network traffic — three tools

| Tool | Mechanism | Direction |
| --- | --- | --- |
| Capacity management | Devices monitor traffic and slow down traffic from users who consume a lot of capacity . Also called bandwidth limiters or bandwidth shapers | Internal |
| Content caching | Store other people's Web data closer to your users . A content engine near the Internet connection, content management software on the router. Lets the organisation buy a smaller WAN circuit | Inbound |
| Content delivery | Works in the opposite direction — a provider stores your Web files closer to your potential users | Outbound |

Policy-based management— special software setspriority policiesfor network traffic; also calledapplication shapingortraffic shaping. It requires managed devices that supportQoScapabilities.

> 🔗 Connects to QoS was introduced in Ch 5 as connection-oriented messaging with priority classes. Here it becomes the hardware requirement that makes policy-based management possible. The load balancer also reappears from Ch 7 — here it's also called a virtual server .

### End user support and cost

- Three main functions of end user support:resolving network faults,resolving user problems,training.
- Three sources of user equipment problems:a failed hardware device,a lack of user knowledge,a problem with the software, software settings, or an incompatibility.
- Most organisations strive to resolve75% to 85% of requests at the first level(help desk). Unresolved problems areescalatedto second-level staff with specialised skills; some large organisations have a third level.
- TCO(total cost of ownership) = how much it costs per year to keep one computer operating — about$7,000 per computer per yearfor typical Windows computers.NCO(network cost of ownership, or "real TCO")ignores indirect costsand ranges between$1,500 and $3,500.
- Personnel time is the largest cost, so the primary focus of cost management is designing networks and policies thatreduce personnel time.
- Fault reports are known astrouble tickets; thetrouble logrecords problems to be corrected and tracks statistics.
- Desktop managementenables managers to install software on client computersover the network without physically touching each one.

**Additional Context**: Many network managers spend most of their time firefighting ; the four types of configuration documentation; the five cost-reduction recommendations, ending with move to thin-client or cloud-based architectures .

---

## High-Yield A4 Exam Reference Sheet

### Subnet block sizes — write this first

| /24 | 256 addr | 254 usable |
| --- | --- | --- |
| /25 | 128 | 126 |
| /26 | 64 | 62 |
| /27 | 32 | 30 |
| /28 | 16 | 14 |
| /29 | 8 | 6 |
| /30 | 4 | 2 |

usable = 2n− 2 · prefix = 32 − nfirst host = network + 1 · last host = broadcast − 1

### Binary positions

| 128 | 10000000 | /25 |
| --- | --- | --- |
| 192 | 11000000 | /26 |
| 224 | 11100000 | /27 |
| 240 | 11110000 | /28 |
| 248 | 11111000 | /29 |
| 252 | 11111100 | /30 |

128 64 32 16 8 4 2 1

Masks in the boundary octet:

### Address classes

| A | 0–126 | 255.0.0.0 |
| --- | --- | --- |
| B | 128–191 | 255.255.0.0 |
| C | 192–223 | 255.255.255.0 |
| D | 224–239 | multicast |
| E | 240–255 | experimental |

127 = loopback · 255 = broadcast · 0 not allowed

### Header & field sizes

| TCP | 192-bit / 24 B (20 B no options) |
| --- | --- |
| UDP | 8 B — 4 fields, CRC-16 |
| IPv4 | 32-bit addr · 192-bit hdr |
| IPv6 | 128-bit addr · 320-bit / 40 B hdr |
| Ethernet | 7 B preamble · 4 B VLAN tag · CRC-32 |
| PPP | data ≤ 1500 B · CRC-16 |
| SDLC | flag 01111110 · CRC-32 |

### Ports

| 21 | FTP |
| --- | --- |
| 23 | Telnet |
| 25 | SMTP |
| 80 | HTTP / Web |

UDP:DNS, DHCP, RIP, SNMPTCP:HTTP always

### Cable rule

Crossover— router–router, switch–switch, PC–PC,and PC–router

Straight— router–switch, PC–switch

DTE = PC, laptop, printer · DCE = switch, hub, routercrossover swaps pins 1↔3 and 2↔6

### Formulas

MTTRepair = MTTDiagnose + MTTRespond + MTTFix

Transmission efficiency = information bits ÷ total bits

Checksum = Σ decimal char values ÷ 255, keep remainder

Usable hosts = 2n− 2

### Acronym collisions

- MTTR= repairorrespond — read the wording
- CSMA/CDwired ·CSMA/CAwireless
- DCF= physical carrier sense ·PCF= virtual, RTS/CTS, hidden node
- POP= point of presenceorPost Office Protocol
- IAB= strategic oversight ·IESG= technical management
- POPdeletes mail ·IMAPdoes not

### WLAN standards & security

| 802.11n | 3 × 450 Mbps, 100 m, obsolete |
| --- | --- |
| 802.11ac | 2 spectrums, current |
| 802.11ax | 3 spectrums, Wi-Fi 6 |

MAC filter → WEP → WPA (key per frame) →802.11i / WPA2, AES, login server

### Layers & PDUs

| 5 App | HTTP SMTP FTP |
| --- | --- |
| 4 Transport | segment / datagram |
| 3 Network | packet · routing |
| 2 Data link | frame · LLC + MAC |
| 1 Physical | bits · no PDU |

OSI 7 · TCP/IP 5 · L2 changes per hop, L3 does not

### Named lists worth dumping

- Design: needs analysis → technology design → cost assessment
- Risk: criteria → inventory → threats → controls → improvements
- CIA: confidentiality, integrity, availability
- Threats: disruption, destruction, disaster, intrusion
- Controls: preventive, detective, corrective
- Switch modes: cut-through, store-and-forward, fragment-free

### Error fixes

Detection: parity (per byte) · checksum (÷255) · CRC (÷ preset number)

- Attenuation→ repeaters / amplifiers
- Impulse noise (spikes)→ shielding —primary source of error
- Cross-talk→ shielding
- Intermodulation→ shielding

---

