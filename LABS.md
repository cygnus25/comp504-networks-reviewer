# Hands-on Packet Tracer path

Use a **copy** of each `.pka` so you can reset and repeat. Originals are under `../course-materials/sources/`; the [course-materials catalogue](../course-materials/README.md) links to every activity and instruction file. Read the matching `.docx` before starting. Record `prediction → observation → explanation` for each test. Packet Tracer scoring is helpful, but your explanation matters more than a completion percentage.

## Lab 1 — See a network and its layers (30–45 min)

Open [`1.5.7 Packet Tracer - Network Representation.pka`](<../course-materials/sources/labs/packet-tracer-files/1.5.7 Packet Tracer - Network Representation.pka>) with its matching `.docx`. Identify one end device, switch, router, AP, server, LAN, and WAN link. Draw a path from a PC to a remote server and annotate each device's layer/job. Then use [`Packet Tracer-Investigating the TCP-IP and OSI Models-1.docx`](<../course-materials/sources/labs/instructions/Packet Tracer-Investigating the TCP-IP and OSI Models-1.docx>) as a guide for a Simulation Mode PDU: click the event and list the data, transport, IP, and Ethernet information you see.

**Prove you learned it:** Explain why an IP packet can keep its destination IP while the Ethernet destination MAC changes after a router.

## Lab 2 — Watch MAC and IP addresses change (30–45 min)

Open [`5.3.1.3 Packet Tracer - Identify MAC and IP Addresses.pka`](<../course-materials/sources/labs/packet-tracer-files/5.3.1.3 Packet Tracer - Identify MAC and IP Addresses.pka>) with the matching `.docx`. In Simulation Mode, ping `10.10.10.3` from `172.16.31.2`. At the source LAN, router ingress, router egress, and destination LAN, record source/destination IP and source/destination MAC. Note any ARP exchange before ICMP.

**Expected pattern:** The end-to-end IP source/destination stay associated with the original hosts; the link-layer source/destination MAC pair is rebuilt for each routed link. If the simulation represents NAT, record that separately because NAT intentionally changes IP addressing.

## Lab 3 — Navigate IOS and save a router config (45–60 min)

Start with [`2.3.7 Packet Tracer - Navigate the IOS.pka`](<../course-materials/sources/labs/packet-tracer-files/2.3.7 Packet Tracer - Navigate the IOS.pka>) and its `.docx`; then do [`10.1.4 Packet Tracer - Configure Initial Router Settings.pka`](<../course-materials/sources/labs/packet-tracer-files/10.1.4 Packet Tracer - Configure Initial Router Settings.pka>) and `.docx`. Connect a console cable, observe the prompt changes, use `?` for context help, inspect `show running-config` and `show startup-config`, set hostname and passwords as the instructions require, add the MOTD banner, and save with `copy running-config startup-config`.

**Explain:** running-config is the active configuration in RAM; startup-config is the saved configuration loaded on boot. `enable secret` takes precedence over `enable password` for privileged EXEC access. `service password-encryption` only obscures some stored passwords; it is not equivalent to a strong password hash.

## Lab 4 — Diagnose a gateway failure (45–60 min)

Open [`10.3.5 Packet Tracer - Troubleshoot Default Gateway Issues.pka`](<../course-materials/sources/labs/packet-tracer-files/10.3.5 Packet Tracer - Troubleshoot Default Gateway Issues.pka>) and its `.docx`. Before editing, complete the addressing table: PCs 1–2 and S1 should use `192.168.10.1`; PCs 3–4 and S2 should use `192.168.11.1`. Test same-LAN first, then local router interface, then remote-LAN. The activity says PC1's IP is incorrect; verify with `ipconfig` instead of assuming it is the only fault.

| Test | What a failure narrows down |
| --- | --- |
| PC1 → PC2 | local link, address, mask, VLAN |
| PC1 → `192.168.10.1` | local gateway link or interface |
| PC1 → `192.168.11.1` | router forwarding/interface |
| PC1 → PC4 | remote LAN plus PC4's address/gateway |

Fix one fault at a time and retest the exact failed ping. Save a one-line fault log: `symptom | evidence | change | result`.

## Lab 5 — Design VLSM before configuring (60–90 min)

First, solve [`Example-Design and Implement a VLSM Addressing Scheme.docx`](<../course-materials/sources/labs/vlsm/Example-Design and Implement a VLSM Addressing Scheme.docx>) on paper. Then do [`Packet Tracer - IPv4 VLSM Design and Implementation.pka`](<../course-materials/sources/labs/packet-tracer-files/Packet Tracer - IPv4 VLSM Design and Implementation.pka>) with its matching `.docx`. For each requirement, choose the smallest subnet, allocate largest first, and build a device table before opening device configuration. Assign first usable addresses to routers, second usable to switch management interfaces, and last usable to hosts as the activity specifies. Configure each host's local gateway. Check `show ip interface brief`, `show ip route`, and end-to-end pings.

**Self-check for the 10.1.1.0/24 example** (look only after solving):

| Need | Subnet | Usable range | Broadcast |
| --- | --- | --- | --- |
| 47 hosts | `10.1.1.0/26` | `.1–.62` | `.63` |
| 28 hosts | `10.1.1.64/27` | `.65–.94` | `.95` |
| 11 hosts | `10.1.1.96/28` | `.97–.110` | `.111` |
| 5 hosts | `10.1.1.112/29` | `.113–.118` | `.119` |
| 2-host WAN | `10.1.1.120/30` | `.121–.122` | `.123` |

**Mini-config pattern** (replace interface/address with your table):

```text
enable
configure terminal
interface gigabitEthernet0/0
description LAN-Sales
ip address 49.50.10.1 255.255.255.128
no shutdown
exit
end
show ip interface brief
copy running-config startup-config
```

On a switch, management uses `interface vlan 1`, `ip address ...`, `no shutdown`, and a global `ip default-gateway <local-router-IP>`. The SVI may stay down if no active switch port is in that VLAN. For two routers, confirm they have routes to the opposite LANs; interface addressing alone does not create routes to remote networks.

## Lab 6 — Timed practice final (90–120 min)

Use [`Packet Tracer Final Lab.pka`](<../course-materials/sources/labs/final-practice/Packet Tracer Final Lab.pka>) and [`Packet Tracer Final Lab-1.docx`](<../course-materials/sources/labs/final-practice/Packet Tracer Final Lab-1.docx>). Attempt it **closed book first**.

### 1. VLSM Design & Allocation Table (Given: `49.50.10.0/24`)

Assign largest subnets first, in descending order:

| Subnet / LAN | Needed | Allocated Subnet | Mask | CIDR | Usable Host Range | Broadcast Address |
| :--- | :---: | :--- | :--- | :---: | :--- | :--- |
| **LAN-Sales** | 70 | `49.50.10.0` | `255.255.255.128` | `/25` | `49.50.10.1` – `49.50.10.126` | `49.50.10.127` |
| **LAN-Design** | 56 | `49.50.10.128` | `255.255.255.192` | `/26` | `49.50.10.129` – `49.50.10.190` | `49.50.10.191` |
| **LAN-Admin** | 26 | `49.50.10.192` | `255.255.255.224` | `/27` | `49.50.10.193` – `49.50.10.222` | `49.50.10.223` |
| **WAN Link** | 2 | `49.50.10.224` | `255.255.255.252` | `/30` | `49.50.10.225` – `49.50.10.226` | `49.50.10.227` |

### 2. Device Addressing Table

- **Router**: 1st usable IP
- **Switch SVI**: 2nd usable IP
- **Host PC**: 3rd usable IP

| Device | Interface | IP Address | Subnet Mask | Default Gateway | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PR (Router)** | Fa0/0 | `49.50.10.1` | `255.255.255.128` | *N/A* | Gateway for LAN-Sales |
| **PR (Router)** | Fa0/1 | `49.50.10.129` | `255.255.255.192` | *N/A* | Gateway for LAN-Design |
| **PR (Router)** | E0/0/0 | `49.50.10.193` | `255.255.255.224` | *N/A* | Gateway for LAN-Admin |
| **PD-1 (Switch)** | VLAN 1 | `49.50.10.2` | `255.255.255.128` | `49.50.10.1` | Sales Switch Management |
| **PD-2 (Switch)** | VLAN 1 | `49.50.10.194` | `255.255.255.224` | `49.50.10.193` | Admin Switch Management |
| **PD-3 (Switch)** | VLAN 1 | `49.50.10.130` | `255.255.255.192` | `49.50.10.129` | Design Switch Management |
| **PD-1-23 (PC)** | NIC | `49.50.10.3` | `255.255.255.128` | `49.50.10.1` | Sales Host |
| **PD-2-12 (PC)** | NIC | `49.50.10.195` | `255.255.255.224` | `49.50.10.193` | Admin Host |
| **PD-3-11 (PC)** | NIC | `49.50.10.131` | `255.255.255.192` | `49.50.10.129` | Design Host |
| **Web Server** | NIC | `156.62.140.254` | `255.255.255.0` | `156.62.140.1` | *Pre-configured WAN device* |

---

### 3. Complete Cisco CLI Commands

#### Step 1: Router PR Configuration (via Console Cable from PD-1-23)
Connect the blue Console cable from PC `PD-1-23` (RS-232) to Router `Police` (Console port). Open Terminal (9600, 8, N, 1).

```cisco
enable
configure terminal

! 1. Hostname
hostname PR

! 2. Disable DNS lookup
no ip domain-lookup

! 3. MOTD Banner
banner motd #No Unauthorized Access#

! 4. Domain Name for SSH
ip domain-name CCNA.net

! 5. User Account (Privilege 15) - Configure BEFORE min-length since Adminpa55 is 9 characters
username Admin privilege 15 secret Adminpa55

! 6. Enforce Minimum Password Length
security passwords min-length 10

! 7. Secure Enable Secret Password
enable secret Ciscoenpa55

! 8. Encrypt Plaintext Passwords
service password-encryption

! 9. Console Line Security & 10-Minute Timeout
line console 0
 password Ciscoconpa55
 login
 exec-timeout 10 0
 exit

! 10. VTY Lines SSH Configuration & 10-Minute Timeout
line vty 0 4
 transport input ssh
 login local
 exec-timeout 10 0
 exit

! 11. Generate 1024-bit RSA Keys for SSH
crypto key generate rsa
1024

! 12. Login Banner
banner login #No Unauthorised Access#

! 13. Block Login after 4 failed attempts within 30s for 3 mins (180s)
login block-for 180 attempts 4 within 30

! 14. Configure Router Interfaces with IP, Description, and Enable
interface FastEthernet0/0
 description SALES
 ip address 49.50.10.1 255.255.255.128
 no shutdown
 exit

interface FastEthernet0/1
 description DESIGN
 ip address 49.50.10.129 255.255.255.192
 no shutdown
 exit

interface Ethernet0/0/0
 description ADMIN
 ip address 49.50.10.193 255.255.255.224
 no shutdown
 exit

! 15. Save Configuration to NVRAM
end
copy running-config startup-config
```

---

#### Step 2: Switch PD-1 Configuration (Sales Switch)
Open Switch `PD-1` CLI tab:

```cisco
enable
configure terminal
interface vlan 1
 ip address 49.50.10.2 255.255.255.128
 no shutdown
 exit
ip default-gateway 49.50.10.1
end
copy running-config startup-config
```

---

#### Step 3: Switch PD-2 Configuration (Admin Switch)
Open Switch `PD-2` CLI tab:

```cisco
enable
configure terminal
interface vlan 1
 ip address 49.50.10.194 255.255.255.224
 no shutdown
 exit
ip default-gateway 49.50.10.193
end
copy running-config startup-config
```

---

#### Step 4: Switch PD-3 Configuration (Design Switch)
Open Switch `PD-3` CLI tab:

```cisco
enable
configure terminal
interface vlan 1
 ip address 49.50.10.130 255.255.255.192
 no shutdown
 exit
ip default-gateway 49.50.10.129
end
copy running-config startup-config
```

---

#### Step 5: Host PC IP Settings (Desktop -> IP Configuration)

- **PD-1-23**:
  - IP: `49.50.10.3`
  - Subnet Mask: `255.255.255.128`
  - Default Gateway: `49.50.10.1`
- **PD-2-12**:
  - IP: `49.50.10.195`
  - Subnet Mask: `255.255.255.224`
  - Default Gateway: `49.50.10.193`
- **PD-3-11**:
  - IP: `49.50.10.131`
  - Subnet Mask: `255.255.255.192`
  - Default Gateway: `49.50.10.129`

---

#### Step 6: Connectivity & Verification Commands

From **PD-1-23 Command Prompt**:
```shell
# 1. Ping Local Gateway
ping 49.50.10.1

# 2. Ping Remote Switch PD-2
ping 49.50.10.194

# 3. Ping Remote PC PD-2-12
ping 49.50.10.195

# 4. Ping Remote PC PD-3-11
ping 49.50.10.131

# 5. Ping Remote Web Server (across WAN)
ping 156.62.140.254

# 6. Test SSH to Router
ssh -l Admin 49.50.10.1
# When prompted for password, enter: Adminpa55
```

From **Router PR EXEC Mode**:
```cisco
show ip interface brief
show ip route
show running-config
```

> [!IMPORTANT]
> **Key Exam Traps to Avoid:**
> 1. **Password Length vs Adminpa55**: `security passwords min-length 10` will reject `Adminpa55` because it has 9 characters. Create the `username Admin privilege 15 secret Adminpa55` **first**, before running `security passwords min-length 10`.
> 2. **Login Block-For Units**: The prompt specifies "3 mins after 4 failed attempts within 30 seconds". Cisco IOS takes seconds: `login block-for 180 attempts 4 within 30` (3 mins = 180 seconds).
> 3. **Banner Spacing**: Keep delimiter characters `#` on both ends, e.g. `banner motd #No Unauthorized Access#` and `banner login #No Unauthorised Access#`.
> 4. **Default Gateway on Switches**: Don't configure `ip default-gateway` inside `interface vlan 1`; it is a **global configuration mode** command.

## Optional extensions

- Use [`4.2.4.4 Packet Tracer - Connecting a Wired and Wireless LAN.pka`](<../course-materials/sources/labs/packet-tracer-files/4.2.4.4 Packet Tracer - Connecting a Wired and Wireless LAN.pka>) with [`4.6.5 Packet Tracer - Connect a Wired and Wireless LAN (2).docx`](<../course-materials/sources/labs/instructions/4.6.5 Packet Tracer - Connect a Wired and Wireless LAN (2).docx>): identify AP versus router roles, compare a wired and Wi-Fi host's gateway, and test both paths.
- In a fresh Packet Tracer topology, create two VLANs on a switch. Place one PC in each. Verify they cannot ping across VLANs without routing, then add a Layer 3 path. Show `show vlan brief` and `show interfaces trunk` if using two switches.
- For a management exercise, deliberately change one host's mask, gateway, or DNS server, ask yourself which tests still work, then write a short fault report with evidence and fix.
