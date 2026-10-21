# Networking glossary

Use this as a lookup while reading the beginner lessons. Try explaining a term in your own words before reading its definition.

## Devices and scope

| Term | Plain meaning |
| --- | --- |
| End device | A device that creates or uses data, such as a PC, phone, printer, or server. |
| Client | A program or device that requests a service. |
| Server | A program or device that provides a service or resource. |
| NIC | Network interface card; the hardware that connects a device to a network medium. |
| Switch | Forwards frames within a local Layer 2 network using MAC addresses. |
| Router | Forwards packets between IP networks using a routing table. |
| Access point (AP) | Connects Wi-Fi stations to a local network. |
| Hub | Repeats incoming bits to all ports; unlike a switch, it does not choose a destination port. |
| LAN | Local area network, such as a home, office, or building network. |
| WAN | Wide area network joining distant sites. |
| Backbone | Higher-capacity network that joins multiple LANs. |
| ISP | Internet service provider; connects customers to its network and other networks. |

## Layers and data units

| Term | Plain meaning |
| --- | --- |
| Protocol | Agreed rules for exchanging information. |
| OSI model | Seven-layer reference model for describing network functions. |
| Internet model | The course's five-layer model: application, transport, network, data link, physical. |
| Encapsulation | Adding layer information as data moves down the stack before transmission. |
| Decapsulation | Removing layer information as data moves up the stack at a receiver. |
| Segment | TCP's transport-layer data unit. |
| Datagram | UDP's transport-layer data unit. |
| Packet | Network-layer data unit, such as an IP packet. |
| Frame | Data-link-layer data unit, such as an Ethernet frame. |
| Bit | A binary 0 or 1 carried by the physical medium. |
| Port number | Transport-layer number that identifies an application process or service. |

## Local delivery

| Term | Plain meaning |
| --- | --- |
| MAC address | Link-layer address of a network interface on a local network. |
| Forwarding table | A switch's learned map of MAC addresses to ports. |
| Unknown unicast | A frame for one MAC address whose switch port has not been learned yet. |
| Broadcast | A message intended for all devices in a local broadcast domain. |
| ARP | IPv4 protocol for finding the MAC address associated with a local next-hop IP. |
| CRC/FCS | Error-checking calculation/value used to detect a damaged Ethernet frame. |
| VLAN | Logical Layer 2 network that separates broadcast domains on shared switches. |
| Access port | Switch port assigned to one VLAN for an end device. |
| Trunk | Link that carries multiple VLANs, commonly with 802.1Q tags. |
| Collision domain | Set of interfaces that could contend for the same shared Ethernet medium. |
| CSMA/CD | Historical shared/half-duplex Ethernet method for detecting collisions. |
| CSMA/CA | Wi-Fi method that tries to avoid collisions on shared radio channels. |

## IP and routing

| Term | Plain meaning |
| --- | --- |
| IP address | Network-layer address used to identify a host/interface across networks. |
| Subnet mask/prefix | Bits that separate network and host portions of an IP address. |
| Network address | First address identifying an IPv4 subnet. |
| Broadcast address | Last address used for local broadcast in an ordinary IPv4 subnet. |
| Default gateway | Local router address a host uses for destinations outside its subnet. |
| Routing table | Router's list of known destination networks and how to reach them. |
| Default route | Fallback route used when no more specific route matches. |
| VLSM | Using different subnet sizes to fit different host requirements. |
| DHCP | Protocol that can automatically supply host IP settings. |
| NAT | Translation between address spaces, often private and public IPv4. |
| ICMP | IP control/error messages; `ping` uses ICMP Echo messages. |
| IPv6 | 128-bit IP addressing protocol using hexadecimal notation. |
| Neighbor Discovery | IPv6 process for discovering neighbors and local routers; replaces ARP's role. |

## Services, design, and operations

| Term | Plain meaning |
| --- | --- |
| TCP | Reliable, ordered transport with acknowledgements and retransmission. |
| UDP | Connectionless datagram transport without built-in delivery guarantees. |
| DNS | Service that resolves names to IP addresses. |
| HTTP/HTTPS | Web request/response protocol; HTTPS protects it with TLS. |
| SMTP | Protocol commonly used to send email. |
| SSH | Encrypted remote terminal protocol. |
| Middleware | Software that helps client and server components communicate. |
| Load balancer | Distributes requests across servers. |
| VPN | Logical, commonly encrypted tunnel over another network. |
| Firewall | Device or software enforcing traffic-filtering rules. |
| SNMP | Protocol that lets network management software monitor devices. |
| Baseline | Measurement of normal network behavior used for comparison. |
| Threat | Possible source or event of harm. |
| Vulnerability | Weakness that a threat could exploit. |
| Risk | Likelihood and impact of harm to an asset or service. |
