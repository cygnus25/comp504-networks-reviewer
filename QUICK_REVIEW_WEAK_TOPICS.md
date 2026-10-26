# COMP504 Quick Review — Weak Topics

> Brief summary of topics you haven't studied in-depth: **Backbone Networks**, **Network Design**, **The Internet**, **Network Security**, and **Network Management**. Sourced from the exam deck and lecture slides.

---

## 1. Backbone Networks & VLANs (Ch 8) — 5–10 exam questions

### Key Facts
- Two basic BN components: **network cable** (usually fiber-optic) and **hardware devices** connecting other networks
- **Switches** operate at the **data link layer**; **routers** at the **network layer**; **VLAN switches** combine both
- Most BNs today use **high-speed Ethernet**

### Switched Backbone
- **Most common type** of BN used in the **distribution layer**
- Uses a **star topology** with one switch at center
- All devices often in one room called the **MDF (main distribution facility)** or **CDF**
- Connected with **patch cables**
- **Chassis switch**: plug modules directly in — key advantage is **flexibility**

### Routed Backbone
- Moves packets based on **network layer address** (also called **subnetted** or **hierarchical** backbone)
- Most commonly connects **different buildings** on the same campus
- **Broadcast messages stay in one network segment** — a key benefit

### VLANs
- **Logical** connections grouping similar devices
- 5 benefits: **smaller broadcast domains**, **improved security**, **reduced cost**, **better performance**, **simpler management**
- Each VLAN gets its **own IP address range**
- Without a **Layer 3 device**, devices in different VLANs **cannot communicate**
- Uses **802.1Q tagging** to move frames between switches — inserts **VLAN ID + priority code**
- **Trunk**: a point-to-point link that carries **multiple VLANs**

### VLAN Commands (Cisco IOS)
| Task | Command |
|---|---|
| Create VLAN | `vlan 20` then `name student` |
| Assign port | `interface fa0/18` → `switchport mode access` → `switchport access vlan 20` |
| Verify | `show vlan brief` |
| Delete | `no vlan 20` (reassign ports first!) |

### Best Practice
- **Distribution layer**: switched backbone or VLAN
- **Core layer**: routed backbone  
- Recommended technology: **gigabit Ethernet**
- **VLANs are the most secure backbone type** — enable ACL at the switch level

### Quiz Traps
- ❌ "Routed backbones use switches based on data link layer addresses" → **FALSE** (they use network layer)
- ❌ "A BN connecting buildings is called an Internet backbone" → **FALSE** (it's an enterprise/campus backbone)
- Layer-3 switches can switch based on **IP address**, replace routers, function faster — but they CAN do more than just data link layer switching

---

## 2. Network Design (Ch 6) — 5–10 exam questions

### Seven Architecture Components
| # | Component | Vendor Name | Role |
|---|---|---|---|
| 1 | **LAN** | **Access layer** | End user access |
| 2 | **Building backbone** | **Distribution layer** | Distributes traffic to/from LANs |
| 3 | **Campus backbone** | **Core layer** | Connects buildings on one campus |
| 4 | **Data center** | — | Contains servers (a LAN but managed differently) |
| 5 | **WAN** | Enterprise edge | Private network between campus locations |
| 6 | **Internet access** | Enterprise edge | Connects to the Internet |
| 7 | **E-commerce edge** | Enterprise edge | Electronic data exchange with external entities |

> ⚠️ **Exam trap**: The campus backbone / core layer does **NOT** provide end user access — that's the **LAN / access layer**.

### Building-Block Design Process (3 cyclical steps)
1. **Needs analysis** → understand current/future needs → produces a **logical** network design (no specific technologies)
2. **Technology design** → examine available technologies → produces **physical** network design(s)
3. **Cost assessment** → consider relative costs → produces **RFP**, revised physical diagram, **business case**

Then **cycle back** through all three steps until the final design is established.

> Memorise: *understand needs* → needs analysis · *examines technologies* → technology design · *considers cost* → cost assessment

### Key Terms
- **Building-block** = simpler approach using standard components repeatedly; also called **"narrow and deep"**
- **Baselining** = reviewing existing applications and identifying their locations
- **Turnpike effect** = traffic increases **much faster than forecast**
- **Bottleneck** = circuit filled near capacity; in most enterprises it's the **WAN and Internet**, not the campus
- **RFP** (Request for Proposal) = asks vendors for best prices
- To management, the network is a **cost center** — speak management's language

### Why Traditional Design Is Less Appropriate Now
1. Technology changing rapidly (clients, servers, networking devices, circuits)
2. Network traffic growth is immense
3. Balance of costs changed dramatically
- ❌ NOT because "hardware is the most expensive part" — **personnel time is the largest cost**

### Security Note
- **Tightest security**: core layer and data center
- Each building's access/distribution layers can be managed separately

---

## 3. The Internet (Ch 10) — 5–8 exam questions

### Internet Structure — Hierarchical, Not Flat
- **Tier 1 ISPs** (national) connect at **Internet Exchange Points (IXPs)**
- Tier 1 → **Tier 2** → **Tier 3** ISPs
- **Peering** = same-level ISPs don't charge each other
- Higher-level ISPs **charge** lower-level ISPs
- Each ISP is an **autonomous system**
- **POP** (point of presence) = where the ISP provides services to customers

### Backbone Speeds
- Major US ISP backbones: **SONET OC-192 (10 Gbps)**
- Experimenting: **OC-768 (80 Gbps)**
- Planning: **OC-3072 (160 Gbps)**

### Three Access Technologies

|  | DSL | Cable Modem | FTTH |
|---|---|---|---|
| **Circuit** | **Point-to-point** | **Shared multipoint** (300–1000 customers) | **Dedicated point-to-point** |
| **Multiplexing** | ADSL uses **FDM** | — | **WDM** |
| **Customer equipment** | **Line splitter** → **DSL modem** | Coax → **fiber node** (OE converter) | **ONU** → Ethernet |
| **Carrier equipment** | MDF → **DSLAM** | Hub → **CMTS** | Fiber past each house |
| **Standard/Speed** | **ADSL** (asymmetric) | **DOCSIS** (not a formal standard) ~200 Mbps | 1 Gbps |

- **ADSL creates 3 channels** via FDM: voice, high-speed downstream, slower upstream
- DSL attractive because: just change equipment, **no rewiring local loop**
- DSL & cable modem = **broadband** technologies

### Internet Governance — Don't Mix Up!
| Body | Role |
|---|---|
| **Internet Society** | Closest to an "owner" (~150 org, 65k individual members) |
| **IETF** | Evolution of Internet architecture |
| **IESG** | **Technical management** of IETF |
| **IAB** | **Strategic architectural oversight** |
| **IRTF** | Long-term research |

> ⚠️ **Exam trap**: IESG does **NOT** provide strategic oversight — that's the **IAB**!

### Extra
- **Internet2**: ~400 universities, all circuits ≥ OC-192, access points called **gigapops**
- **DDoS** software hidden in downloads; **university students in dorms** are prime targets

---

## 4. Network Security (Ch 11) — 5–8 exam questions

### CIA Triad
| Goal | Definition |
|---|---|
| **Confidentiality** | Protection from **unauthorized disclosure** |
| **Integrity** | Data have **not been altered or destroyed** |
| **Availability** | **Continuous operation** of hardware/software |

### Threat Categories
- **Business continuity** (availability + integrity): **disruptions**, **destruction**, **disasters**
- **Unauthorized access** (confidentiality + integrity): **intrusion**
- ❌ "Controlled chaos" is the **fake option** in the quiz

### Three Types of Control
1. **Preventive** — stop events from occurring
2. **Detective** — discover unwanted events
3. **Corrective** — remedy events or intrusions

### Risk Assessment (5 steps)
1. Develop **risk measurement criteria** (5 impact areas: financial, productivity, reputation, safety, legal)
2. **Inventory IT assets** — most important = **mission-critical application**, then **data**
3. **Identify threats** and create scenarios (risk score = impact × likelihood)
4. **Document existing controls** (4 strategies: accept, mitigate, share via insurance, defer)
5. **Identify improvements** — highest risks first

### Business Continuity
- Key principle: **redundancy** (Internet connection, core backbone, each access LAN)
- 5 major threats: **viruses, theft, DoS attacks, device failure, disaster**
- **Macro virus** = spreads when file is **opened**
- **Worm** = spreads **without human intervention**
- **UPS** = uninterruptible power supply
- **RAID**: 0 = fast, 1 = duplicates, 6 = survives **2 drive failures**

### DDoS Attack Chain & Defenses
- Attacker → **DDoS handler** → thousands of **agents/zombies/bots** = **botnet** → flood target

| Defense | How |
|---|---|
| **Traffic filtering** | Verify source address is in valid range |
| **Traffic limiting** | Limit number of incoming attack packets |
| **Traffic anomaly detector** | Learns normal traffic; quarantines attack packets |

### Firewalls (3 types)
| Type | Key Feature |
|---|---|
| **Packet-level** | Checks source/destination addresses; uses **ACL** rules |
| **Application-level** | Rules per application; can use **stateful inspection**; more expensive |
| **NAT** | Converts public ↔ private IPs; **transparent**; uses **address table** for **proxy IP addresses** |

- Three access points into networks: **Internet** (most common for intrusion), **LANs**, **WLANs**

### Encryption
| | Symmetric | Asymmetric |
|---|---|---|
| **Keys** | Same key encrypt/decrypt (**single-key**) | Different keys (public encrypts, private decrypts) |
| **Problem** | **Key management** | Greatly **reduces** key management problem |
| **Standards** | DES, 3DES, **AES** | Based on **one-way functions** |

- Readable = **plaintext**; encrypted = **ciphertext**
- Only **keys** need to be secret, not the algorithm
- **Digital signature** = encrypt with private key (only real user has it)
- **PKI**: **Certificate Authority (CA)** issues **digital certificate** = public key encrypted with CA's private key
- **PGP** = freeware email encryption by Philip Zimmermann
- **SSL** = encrypts between application and transport layers; Web-focused
- **IPSec** = wider than SSL; **transport mode** encrypts payload only; **tunnel mode** encrypts entire packet (VPN uses this)

### Authentication
- Something you **know** (password/passphrase), **have** (phone), or **are** (biometric)
- **Two-factor** = password + something you have (usually mobile phone)
- **Kerberos** = most common central authentication protocol
- **Social engineering** = breaking security **by asking**; **phishing** = fake emails/sites

### Other Key Terms
- **Zero-day attack** = exploits a hole before a patch exists
- **Security hole** = a bug permitting unauthorized access
- **Trojan horse** = remote access console / rootkit; spyware, adware, DDoS agents are types
- **Computer forensics** = gathering evidence for trials
- **Honey pot** = attractive server with **fake information**
- Best security investment = **user training**
- Four types of intruder: script kiddies, hackers/crackers, professionals, employees

---

## 5. Network Management (Ch 12) — 3–5 exam questions

### Definition & Four Functions
**Network management** = operating, monitoring, and controlling the network to ensure it works as intended

1. **Configuration management** — managing/documenting hardware and software configuration
2. **Performance and fault management**
3. **End user support**
4. **Cost management**

### Managed Networks (Most Important Performance Element)
- **Managed devices** = standard devices with **onboard computers** monitoring traffic
- Three capabilities:
  1. **Record data** on traffic
  2. **Monitor status** of other devices; send **alarm messages**
  3. **Programmable** to take action on certain events

### SNMP, MIB & RMON
- **SNMP** = most common network management protocol
- Each device's **agent** stores data in the **MIB** (management information base)
- **RMON** = remote monitoring; data **not sent until requested**

### Management Software Types
| Type | Monitors |
|---|---|
| **Device management** | Specific devices |
| **System management** | Analyses device info to **diagnose patterns** |
| **Application management** | Monitors **applications** |

### Performance Statistics (Formula is examinable!)
| Metric | Definition |
|---|---|
| **Availability** | % time network is available (downtime includes maintenance) |
| **MTBF** | Hours/days of continuous operation before failure |
| **MTTR** (repair) | Time until operational again |
| **MTTD** | Time to diagnose root cause |
| **MTTR** (respond) | Time until personnel arrive |
| **MTTF** | Time to fix after arrival |

> **MTTRepair = MTTDiagnose + MTTRespond + MTTFix**

> ⚠️ MTTR is used for both "repair" and "respond" — read the full wording!

### Reducing Network Traffic (3 tools)
| Tool | Direction | How |
|---|---|---|
| **Capacity management** | Internal | Bandwidth limiters/shapers slow heavy users |
| **Content caching** | Inbound | Store others' Web data **closer to your users** → smaller WAN circuit |
| **Content delivery** | Outbound | Store **your** Web files closer to **your potential users** (opposite of caching) |

- **Policy-based management** = traffic/application shaping; requires **QoS** support
- **Load balancer** (also called **virtual server**) = distributes requests; stops sending to crashed servers

### End User Support
- 3 functions: resolving network faults, resolving user problems, **training**
- 3 sources of problems: failed hardware, lack of knowledge, software issues
- **75–85%** of requests resolved at **first level** (help desk)
- Unresolved → **escalated** to second level (specialists) → sometimes third level

### Cost
- **TCO** = ~**\$7,000** per Windows computer per year
- **NCO** (ignores indirect costs) = **\$1,500–\$3,500** per computer per year
- **Personnel time is the largest cost** → design networks to reduce it
- **Desktop management** = install software over network without touching each computer
- Fault reports = **trouble tickets**; the log tracks problems and statistics

---

*Good luck with the exam! 🎓*
