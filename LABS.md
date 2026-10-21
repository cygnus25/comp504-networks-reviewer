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

Use [`Packet Tracer Final Lab.pka`](<../course-materials/sources/labs/final-practice/Packet Tracer Final Lab.pka>) and [`Packet Tracer Final Lab-1.docx`](<../course-materials/sources/labs/final-practice/Packet Tracer Final Lab-1.docx>). Attempt it **closed book first**. The sheet gives `49.50.10.0/24` and host needs 70, 56, 26, and 2. Build the VLSM table, fill the device addressing table, configure the router, switch SVIs, and PCs, then ping across LANs. Follow the sheet's specific hostname, banner, login, SSH, and interface-description requirements. Save both the Packet Tracer file and a fault log.

**Address allocation self-check** (after your attempt):

| Need | Network | Usable range | Broadcast |
| --- | --- | --- | --- |
| Sales 70 | `49.50.10.0/25` | `.1–.126` | `.127` |
| Design 56 | `49.50.10.128/26` | `.129–.190` | `.191` |
| Admin 26 | `49.50.10.192/27` | `.193–.222` | `.223` |
| WAN 2 | `49.50.10.224/30` | `.225–.226` | `.227` |

The practice sheet says the WAN and Internet-side devices are already configured and need no changes. Match your router's actual interface names and topology before assigning the first, second, and subsequent usable addresses. If a ping fails, inspect the source mask/gateway, `show ip interface brief`, router routes, and the target gateway in that order.

**Course-lab caveat:** The practice sheet combines a 10-character minimum password rule with the nine-character example `Adminpa55`; configure that supplied user before enforcing the minimum if Packet Tracer rejects it, then follow the activity checker. Its 1024-bit RSA requirement is for this course exercise and is not a recommendation for a real deployment.

## Optional extensions

- Use [`4.2.4.4 Packet Tracer - Connecting a Wired and Wireless LAN.pka`](<../course-materials/sources/labs/packet-tracer-files/4.2.4.4 Packet Tracer - Connecting a Wired and Wireless LAN.pka>) with [`4.6.5 Packet Tracer - Connect a Wired and Wireless LAN (2).docx`](<../course-materials/sources/labs/instructions/4.6.5 Packet Tracer - Connect a Wired and Wireless LAN (2).docx>): identify AP versus router roles, compare a wired and Wi-Fi host's gateway, and test both paths.
- In a fresh Packet Tracer topology, create two VLANs on a switch. Place one PC in each. Verify they cannot ping across VLANs without routing, then add a Layer 3 path. Show `show vlan brief` and `show interfaces trunk` if using two switches.
- For a management exercise, deliberately change one host's mask, gateway, or DNS server, ask yourself which tests still work, then write a short fault report with evidence and fix.
