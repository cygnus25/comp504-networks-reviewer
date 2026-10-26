window.COMP504_SET_1 = [
  // ========== Models and Layers (4 questions) ==========
  {
    id: 1001,
    topic: "Models and Layers",
    question: "Which layer of the OSI model is responsible for establishing, managing, and terminating sessions between applications?",
    choices: [
      "Transport Layer",
      "Session Layer",
      "Presentation Layer",
      "Application Layer"
    ],
    answer: 1,
    why: "The Session Layer (Layer 5) manages sessions — it establishes, maintains, and terminates communication sessions between two devices."
  },
  {
    id: 1002,
    topic: "Models and Layers",
    question: "In the TCP/IP five-layer model, which layer corresponds to both the Session and Presentation layers of the OSI model?",
    choices: [
      "Transport Layer",
      "Network Layer",
      "Application Layer",
      "Data Link Layer"
    ],
    answer: 2,
    why: "The TCP/IP model merges the OSI Session, Presentation, and Application layers into a single Application Layer."
  },
  {
    id: 1003,
    topic: "Models and Layers",
    question: "What is the correct term for the Protocol Data Unit (PDU) at the Data Link Layer?",
    choices: [
      "Segment",
      "Packet",
      "Frame",
      "Bit"
    ],
    answer: 2,
    why: "PDU names by layer: Application = data/message, Transport = segment, Network = packet, Data Link = frame, Physical = bit."
  },
  {
    id: 1004,
    topic: "Models and Layers",
    question: "A standard published by an official standards body such as ISO or IEEE is called a:",
    choices: [
      "De facto standard",
      "De jure standard",
      "Proprietary standard",
      "Consortium standard"
    ],
    answer: 1,
    why: "De jure standards are created by official standards organisations (ISO, IEEE, ITU). De facto standards emerge from widespread market use without formal approval."
  },

  // ========== Physical Layer (3 questions) ==========
  {
    id: 1005,
    topic: "Physical Layer",
    question: "Which transmission mode allows data to flow in both directions simultaneously?",
    choices: [
      "Simplex",
      "Half duplex",
      "Full duplex",
      "Multiplex"
    ],
    answer: 2,
    why: "Full duplex allows simultaneous two-way communication. Half duplex allows two-way but only one direction at a time. Simplex is one-way only."
  },
  {
    id: 1006,
    topic: "Physical Layer",
    question: "Which multiplexing technique divides the bandwidth of a fibre-optic link into different wavelengths (colours) of light?",
    choices: [
      "Frequency Division Multiplexing (FDM)",
      "Time Division Multiplexing (TDM)",
      "Wavelength Division Multiplexing (WDM)",
      "Code Division Multiplexing (CDM)"
    ],
    answer: 2,
    why: "WDM is the fibre-optic equivalent of FDM — it uses different wavelengths (colours) of light to carry multiple signals on a single fibre."
  },
  {
    id: 1007,
    topic: "Physical Layer",
    question: "Attenuation in networking refers to:",
    choices: [
      "The increase in signal strength over distance",
      "The loss of signal strength as it travels through a medium",
      "Interference from adjacent cables",
      "The delay caused by routing decisions"
    ],
    answer: 1,
    why: "Attenuation is the gradual loss of signal strength as it travels through a medium. Longer distances and lower-quality media cause more attenuation."
  },

  // ========== Data Link Layer (3 questions) ==========
  {
    id: 1008,
    topic: "Data Link Layer",
    question: "An Ethernet MAC address is how many bits long?",
    choices: [
      "32 bits",
      "48 bits",
      "64 bits",
      "128 bits"
    ],
    answer: 1,
    why: "A MAC (Media Access Control) address is 48 bits (6 bytes), typically displayed as six pairs of hexadecimal digits (e.g., AA:BB:CC:DD:EE:FF)."
  },
  {
    id: 1009,
    topic: "Data Link Layer",
    question: "Which switching mode forwards the frame as soon as it reads the destination MAC address, without waiting for the entire frame?",
    choices: [
      "Store-and-forward",
      "Cut-through",
      "Fragment-free",
      "Adaptive switching"
    ],
    answer: 1,
    why: "Cut-through switching begins forwarding after reading just the destination MAC address (first 6 bytes), offering the lowest latency but no error checking."
  },
  {
    id: 1010,
    topic: "Data Link Layer",
    question: "Which error detection method uses polynomial division to produce a remainder that is appended to the data frame?",
    choices: [
      "Simple parity check",
      "Two-dimensional parity",
      "Checksum",
      "Cyclic Redundancy Check (CRC)"
    ],
    answer: 3,
    why: "CRC uses polynomial division — the sender divides the data by a generator polynomial and appends the remainder. The receiver performs the same division to check for errors. CRC is the most powerful of these methods."
  },

  // ========== Wired and Wireless LANs (17 questions) ==========
  {
    id: 1011,
    topic: "Wired and Wireless LANs",
    question: "In CSMA/CD, what does a station do when it detects a collision on the medium?",
    choices: [
      "Retransmits the frame immediately",
      "Waits for a fixed 10 ms interval before retransmitting",
      "Sends a jam signal and then waits a random back-off time before retransmitting",
      "Discards the frame permanently and reports an error"
    ],
    answer: 2,
    why: "Upon detecting a collision, the station sends a jam signal to ensure all stations know about the collision, then waits a random back-off time (binary exponential back-off) before attempting retransmission."
  },
  {
    id: 1012,
    topic: "Wired and Wireless LANs",
    question: "Why can't CSMA/CD be used in wireless LANs?",
    choices: [
      "Wireless signals travel too slowly",
      "Wireless stations cannot detect collisions while transmitting due to the near/far problem",
      "CSMA/CD requires full-duplex communication which wireless does not support",
      "Wireless LANs use token passing instead"
    ],
    answer: 1,
    why: "In wireless networks, the transmitting station's own signal drowns out any incoming signals, making it impossible to detect collisions during transmission. This is the near/far problem."
  },
  {
    id: 1013,
    topic: "Wired and Wireless LANs",
    question: "In CSMA/CA with the DCF (Distributed Coordination Function), which mechanism helps solve the hidden node problem?",
    choices: [
      "Binary exponential back-off",
      "RTS/CTS exchange",
      "Jam signalling",
      "Token passing"
    ],
    answer: 1,
    why: "RTS/CTS (Request to Send / Clear to Send) solves the hidden node problem. The sender transmits RTS; the AP replies with CTS. All stations hearing either RTS or CTS defer, preventing hidden node collisions."
  },
  {
    id: 1014,
    topic: "Wired and Wireless LANs",
    question: "Which 802.11 standard introduced MIMO (Multiple Input Multiple Output) and operates on the 2.4 GHz and/or 5 GHz bands with speeds up to 600 Mbps?",
    choices: [
      "802.11g",
      "802.11n (Wi-Fi 4)",
      "802.11ac (Wi-Fi 5)",
      "802.11ax (Wi-Fi 6)"
    ],
    answer: 1,
    why: "802.11n (Wi-Fi 4) introduced MIMO technology. It operates on both 2.4 GHz and 5 GHz bands and can achieve theoretical speeds up to 600 Mbps using four spatial streams."
  },
  {
    id: 1015,
    topic: "Wired and Wireless LANs",
    question: "Which WLAN security protocol is considered fundamentally broken because it uses a static 24-bit initialisation vector (IV) with RC4 encryption?",
    choices: [
      "WPA",
      "WPA2",
      "WPA3",
      "WEP"
    ],
    answer: 3,
    why: "WEP (Wired Equivalent Privacy) uses a 24-bit IV that repeats frequently, making it trivially breakable. The short IV space allows attackers to collect enough identical IVs to crack the key."
  },
  {
    id: 1016,
    topic: "Wired and Wireless LANs",
    question: "WPA2 uses which encryption standard?",
    choices: [
      "RC4 with TKIP",
      "AES with CCMP",
      "DES with CBC",
      "3DES with ECB"
    ],
    answer: 1,
    why: "WPA2 uses AES (Advanced Encryption Standard) with CCMP (Counter Mode with CBC-MAC Protocol), providing much stronger encryption than WPA's RC4/TKIP."
  },
  {
    id: 1017,
    topic: "Wired and Wireless LANs",
    question: "In an enterprise WLAN, what is the role of a managed access point (thin AP)?",
    choices: [
      "It processes all frames independently without any controller",
      "It converts wireless signals to wired signals only",
      "It is centrally managed by a WLAN controller that handles configuration, security policies, and roaming",
      "It serves as a DHCP server for wireless clients"
    ],
    answer: 2,
    why: "Managed (thin) APs are centrally controlled by a WLAN controller. The controller pushes configurations, manages security policies, and handles seamless roaming across APs."
  },
  {
    id: 1018,
    topic: "Wired and Wireless LANs",
    question: "What is the hidden node problem in a WLAN?",
    choices: [
      "Two access points using the same channel interfere with each other",
      "A station cannot detect another station's transmission because they are out of range of each other, but both are in range of the AP",
      "A station's MAC address is hidden from the access point",
      "Encryption prevents the AP from identifying the sender"
    ],
    answer: 1,
    why: "The hidden node problem occurs when two stations cannot hear each other (out of range) but are both in range of the same AP, so they may transmit simultaneously causing collisions at the AP."
  },
  {
    id: 1019,
    topic: "Wired and Wireless LANs",
    question: "A network administrator notices that a 100 Mbps switch port connecting two LAN segments is consistently at 95% utilisation while all other links are at 20%. This port is a:",
    choices: [
      "Broadcast domain",
      "Collision domain",
      "Bottleneck",
      "Trunk port"
    ],
    answer: 2,
    why: "A bottleneck is a point in the network where congestion occurs because traffic demand exceeds the link's capacity. The overloaded 100 Mbps link is the bottleneck."
  },
  {
    id: 1020,
    topic: "Wired and Wireless LANs",
    question: "What is the primary benefit of network segmentation using switches?",
    choices: [
      "It encrypts all traffic between segments",
      "It reduces the size of collision domains, improving performance",
      "It eliminates the need for IP addressing",
      "It replaces the need for routers entirely"
    ],
    answer: 1,
    why: "Switches create separate collision domains for each port. By segmenting the network, each segment has fewer devices competing for bandwidth, reducing collisions and improving performance."
  },
  {
    id: 1021,
    topic: "Wired and Wireless LANs",
    question: "Which IEEE 802.11 standard operates ONLY on the 5 GHz band and introduced MU-MIMO for downlink?",
    choices: [
      "802.11n (Wi-Fi 4)",
      "802.11ac (Wi-Fi 5)",
      "802.11ax (Wi-Fi 6)",
      "802.11g"
    ],
    answer: 1,
    why: "802.11ac (Wi-Fi 5) operates exclusively on the 5 GHz band and introduced multi-user MIMO (MU-MIMO) for downlink, with theoretical speeds up to several Gbps."
  },
  {
    id: 1022,
    topic: "Wired and Wireless LANs",
    question: "802.11ax (Wi-Fi 6) introduces which technology to allow multiple stations to transmit simultaneously on different sub-channels?",
    choices: [
      "CSMA/CA",
      "OFDMA (Orthogonal Frequency Division Multiple Access)",
      "TDMA (Time Division Multiple Access)",
      "CDMA (Code Division Multiple Access)"
    ],
    answer: 1,
    why: "Wi-Fi 6 (802.11ax) introduces OFDMA, which divides a channel into smaller sub-channels (resource units) that can be assigned to different stations, enabling simultaneous uplink and downlink transmissions."
  },
  {
    id: 1023,
    topic: "Wired and Wireless LANs",
    question: "In PCF (Point Coordination Function), which device controls access to the medium?",
    choices: [
      "Each station independently",
      "The access point (point coordinator)",
      "A dedicated WLAN controller",
      "The station with the highest MAC address"
    ],
    answer: 1,
    why: "In PCF, the access point acts as the point coordinator and polls each station in turn, giving it permission to transmit. This provides contention-free access, unlike DCF."
  },
  {
    id: 1024,
    topic: "Wired and Wireless LANs",
    question: "A company places a cluster of identical web servers behind a device that distributes incoming requests across them. This device is called a:",
    choices: [
      "Firewall",
      "Proxy server",
      "Load balancer",
      "DNS server"
    ],
    answer: 2,
    why: "A load balancer distributes incoming network traffic across multiple servers in a server farm to ensure no single server is overwhelmed, improving availability and performance."
  },
  {
    id: 1025,
    topic: "Wired and Wireless LANs",
    question: "True or false (select the correct statement): In a server farm, all servers must run different applications to be effective.",
    choices: [
      "True — each server must handle a unique application to avoid conflicts",
      "False — servers in a farm typically run the same application and share the workload",
      "True — identical servers would create broadcast storms",
      "False — server farms always use a single physical machine with virtual partitions"
    ],
    answer: 1,
    why: "A server farm consists of multiple servers running the same application. A load balancer distributes requests among them, providing redundancy and scalability."
  },
  {
    id: 1026,
    topic: "Wired and Wireless LANs",
    question: "In CSMA/CD, what happens when the back-off algorithm reaches the maximum number of retransmission attempts (typically 16)?",
    choices: [
      "The station switches to a different port",
      "The frame is reported as a transmission failure to the upper layer",
      "The station resets its counter and tries again",
      "The switch forces a collision-free time slot"
    ],
    answer: 1,
    why: "After the maximum number of attempts (usually 16), the station gives up and reports a transmission failure to the upper layer (Network Layer). The frame is discarded."
  },
  {
    id: 1027,
    topic: "Wired and Wireless LANs",
    question: "Which of the following best describes the purpose of the DIFS (Distributed Inter-Frame Space) in CSMA/CA?",
    choices: [
      "It is the time a station waits after a collision before retransmitting",
      "It is the minimum idle time the medium must be sensed before a station can attempt to transmit or begin its back-off countdown",
      "It is the gap between an RTS and CTS frame",
      "It is the time the AP uses to poll stations in PCF mode"
    ],
    answer: 1,
    why: "DIFS is the standard inter-frame space that a station must wait (sensing the medium idle) before it can attempt to transmit or begin decrementing its back-off timer in DCF."
  },

  // ========== Network Layer (12 questions) ==========
  {
    id: 1028,
    topic: "Network Layer",
    question: "An IPv4 address belongs to Class B if its first octet is in which range?",
    choices: [
      "1–126",
      "128–191",
      "192–223",
      "224–239"
    ],
    answer: 1,
    why: "Class A: 1–126, Class B: 128–191, Class C: 192–223, Class D (multicast): 224–239, Class E (reserved): 240–255."
  },
  {
    id: 1029,
    topic: "Network Layer",
    question: "A network has the address 192.168.10.0/26. How many usable host addresses are available per subnet?",
    choices: [
      "30",
      "62",
      "64",
      "126"
    ],
    answer: 1,
    why: "/26 means 26 network bits and 6 host bits. 2^6 = 64 total addresses, minus 2 (network address and broadcast address) = 62 usable host addresses."
  },
  {
    id: 1030,
    topic: "Network Layer",
    question: "What is the primary purpose of ARP (Address Resolution Protocol)?",
    choices: [
      "To translate domain names to IP addresses",
      "To map an IP address to a MAC address on the local network",
      "To assign IP addresses dynamically to hosts",
      "To determine the best route to a destination network"
    ],
    answer: 1,
    why: "ARP resolves (maps) a known IP address to its corresponding MAC address on the local network, which is needed for Data Link Layer frame delivery."
  },
  {
    id: 1031,
    topic: "Network Layer",
    question: "When a host needs to send a packet to a destination on a different subnet, it forwards the packet to its:",
    choices: [
      "DNS server",
      "DHCP server",
      "Default gateway",
      "ARP cache"
    ],
    answer: 2,
    why: "The default gateway (usually a router) is used when the destination IP is on a different subnet. The host sends the packet to the gateway, which then routes it toward the destination."
  },
  {
    id: 1032,
    topic: "Network Layer",
    question: "An IPv6 address is how many bits long?",
    choices: [
      "32 bits",
      "64 bits",
      "128 bits",
      "256 bits"
    ],
    answer: 2,
    why: "IPv6 addresses are 128 bits long (compared to 32 bits for IPv4), written as eight groups of four hexadecimal digits separated by colons."
  },
  {
    id: 1033,
    topic: "Network Layer",
    question: "A company has been assigned 172.16.0.0/16 and needs to create subnets of different sizes. Which technique allows efficient allocation by assigning different subnet mask lengths to different subnets?",
    choices: [
      "Classful addressing",
      "Fixed-Length Subnet Masking (FLSM)",
      "Variable-Length Subnet Masking (VLSM)",
      "Network Address Translation (NAT)"
    ],
    answer: 2,
    why: "VLSM allows subnets of different sizes within the same address block by using different prefix lengths, reducing wasted addresses compared to fixed-length subnetting."
  },
  {
    id: 1034,
    topic: "Network Layer",
    question: "What is the subnet mask for a /20 prefix?",
    choices: [
      "255.255.240.0",
      "255.255.248.0",
      "255.255.224.0",
      "255.255.252.0"
    ],
    answer: 0,
    why: "/20 means 20 bits set to 1: 11111111.11111111.11110000.00000000 = 255.255.240.0."
  },
  {
    id: 1035,
    topic: "Network Layer",
    question: "Which protocol automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to hosts?",
    choices: [
      "ARP",
      "DNS",
      "DHCP",
      "ICMP"
    ],
    answer: 2,
    why: "DHCP (Dynamic Host Configuration Protocol) dynamically assigns IP configuration to hosts, including IP address, subnet mask, default gateway, and DNS server addresses."
  },
  {
    id: 1036,
    topic: "Network Layer",
    question: "A host with IP 10.1.1.50/24 wants to communicate with 10.1.2.100/24. The host determines this is a remote delivery. What is the first step?",
    choices: [
      "The host sends an ARP request for 10.1.2.100's MAC address",
      "The host sends the packet directly to 10.1.2.100",
      "The host sends an ARP request for the default gateway's MAC address, then sends the packet to the gateway",
      "The host broadcasts the packet to all devices on the network"
    ],
    answer: 2,
    why: "Since 10.1.2.100 is on a different subnet (remote), the host ARPs for the default gateway's MAC address and sends the packet to the gateway for routing."
  },
  {
    id: 1037,
    topic: "Network Layer",
    question: "Using the block method, what is the network address and broadcast address of the subnet containing host 172.16.45.130/21?",
    choices: [
      "Network: 172.16.40.0, Broadcast: 172.16.47.255",
      "Network: 172.16.44.0, Broadcast: 172.16.47.255",
      "Network: 172.16.32.0, Broadcast: 172.16.63.255",
      "Network: 172.16.45.0, Broadcast: 172.16.45.255"
    ],
    answer: 0,
    why: "/21 gives a block size of 2^(32−21) = 2048 = 8 in the third octet. Multiples of 8: 0, 8, 16, 24, 32, 40, 48 … 45 falls between 40 and 48, so network = 172.16.40.0 and broadcast = 172.16.47.255."
  },
  {
    id: 1038,
    topic: "Network Layer",
    question: "How does a host determine whether a destination is local (same subnet) or remote (different subnet)?",
    choices: [
      "By checking the TTL field in the IP header",
      "By performing a DNS lookup",
      "By ANDing its own IP and the destination IP with its subnet mask and comparing the results",
      "By sending an ICMP echo request and measuring the response time"
    ],
    answer: 2,
    why: "The host ANDs both its own IP and the destination IP with the subnet mask. If the network portions match, the destination is local; otherwise, it is remote and must be sent to the default gateway."
  },
  {
    id: 1039,
    topic: "Network Layer",
    question: "Which of the following is a valid IPv6 address representation?",
    choices: [
      "192.168.1.1",
      "2001:0db8:85a3::8a2e:0370:7334",
      "FE80:ZZZZ::1",
      "::GGGG:1"
    ],
    answer: 1,
    why: "2001:0db8:85a3::8a2e:0370:7334 is valid IPv6. The :: notation replaces one or more groups of all-zero fields. IPv6 uses only hex digits (0–9, a–f)."
  },

  // ========== Transport Layer (12 questions) ==========
  {
    id: 1040,
    topic: "Transport Layer",
    question: "Which transport protocol provides reliable, connection-oriented delivery with error recovery and flow control?",
    choices: [
      "UDP",
      "TCP",
      "ICMP",
      "ARP"
    ],
    answer: 1,
    why: "TCP (Transmission Control Protocol) is connection-oriented and provides reliable delivery through acknowledgements, sequencing, error recovery, and flow control."
  },
  {
    id: 1041,
    topic: "Transport Layer",
    question: "What are the three steps of the TCP three-way handshake in correct order?",
    choices: [
      "SYN → ACK → FIN",
      "SYN → SYN-ACK → ACK",
      "ACK → SYN → SYN-ACK",
      "FIN → FIN-ACK → ACK"
    ],
    answer: 1,
    why: "The TCP three-way handshake is: (1) Client sends SYN, (2) Server responds with SYN-ACK, (3) Client sends ACK. This establishes a connection before data transfer."
  },
  {
    id: 1042,
    topic: "Transport Layer",
    question: "Which well-known port number is used by HTTP?",
    choices: [
      "21",
      "25",
      "53",
      "80"
    ],
    answer: 3,
    why: "HTTP uses port 80. Other well-known ports: FTP data = 20, FTP control = 21, SMTP = 25, DNS = 53, HTTPS = 443."
  },
  {
    id: 1043,
    topic: "Transport Layer",
    question: "In the stop-and-wait ARQ protocol, what happens if the sender's timer expires before an ACK is received?",
    choices: [
      "The sender closes the connection",
      "The sender retransmits the same frame",
      "The sender sends the next frame",
      "The receiver sends a NAK"
    ],
    answer: 1,
    why: "In stop-and-wait ARQ, the sender starts a timer after each frame. If the timer expires (ACK not received), the sender assumes the frame or ACK was lost and retransmits the same frame."
  },
  {
    id: 1044,
    topic: "Transport Layer",
    question: "The UDP header consists of how many fields and how many bytes?",
    choices: [
      "4 fields, 8 bytes",
      "6 fields, 12 bytes",
      "8 fields, 16 bytes",
      "10 fields, 20 bytes"
    ],
    answer: 0,
    why: "The UDP header has exactly 4 fields (Source Port, Destination Port, Length, Checksum), totalling 8 bytes (64 bits). This minimal header makes UDP lightweight and fast."
  },
  {
    id: 1045,
    topic: "Transport Layer",
    question: "What is the primary advantage of sliding window over stop-and-wait ARQ?",
    choices: [
      "It uses less memory on the sender",
      "It provides encryption for data in transit",
      "It allows multiple frames to be in transit before requiring acknowledgement, improving throughput",
      "It eliminates the need for sequence numbers"
    ],
    answer: 2,
    why: "Sliding window allows the sender to transmit multiple frames (up to the window size) without waiting for individual ACKs, significantly improving throughput compared to stop-and-wait."
  },
  {
    id: 1046,
    topic: "Transport Layer",
    question: "A web server receives a segment with destination port 443. What application protocol is most likely being used?",
    choices: [
      "HTTP",
      "HTTPS",
      "FTP",
      "SMTP"
    ],
    answer: 1,
    why: "Port 443 is the well-known port for HTTPS (HTTP over TLS/SSL), which provides encrypted web communication."
  },
  {
    id: 1047,
    topic: "Transport Layer",
    question: "TCP flow control uses which mechanism to prevent the sender from overwhelming the receiver?",
    choices: [
      "The sender reduces the TTL of packets",
      "The receiver advertises a window size indicating how much data it can accept",
      "The router drops excess packets automatically",
      "The sender uses a fixed transmission rate regardless of conditions"
    ],
    answer: 1,
    why: "TCP flow control uses a sliding window where the receiver advertises its available buffer size (receive window) in each ACK, telling the sender how much more data it can accept."
  },
  {
    id: 1048,
    topic: "Transport Layer",
    question: "Which of the following applications would MOST appropriately use UDP rather than TCP?",
    choices: [
      "File download from a web server",
      "Email transmission via SMTP",
      "Live video streaming",
      "Online banking transaction"
    ],
    answer: 2,
    why: "Live video streaming prioritises speed and low latency over reliability. Lost packets are acceptable (minor glitch) whereas retransmission delays would be worse. UDP's low overhead suits this use case."
  },
  {
    id: 1049,
    topic: "Transport Layer",
    question: "The TCP header is how many bits (minimum, without options)?",
    choices: [
      "128 bits (16 bytes)",
      "160 bits (20 bytes)",
      "192 bits (24 bytes)",
      "256 bits (32 bytes)"
    ],
    answer: 1,
    why: "The minimum TCP header is 160 bits (20 bytes) without options. It includes source port, destination port, sequence number, acknowledgement number, flags, window size, checksum, and urgent pointer."
  },
  {
    id: 1050,
    topic: "Transport Layer",
    question: "In TCP, what is the purpose of the sequence number field?",
    choices: [
      "To identify the application protocol being used",
      "To number each byte of data in the stream so the receiver can reorder segments and detect missing data",
      "To specify the priority of the segment",
      "To indicate the number of hops the segment has traversed"
    ],
    answer: 1,
    why: "TCP sequence numbers identify each byte in the data stream. They enable the receiver to reassemble segments in order and detect lost or duplicate segments."
  },
  {
    id: 1051,
    topic: "Transport Layer",
    question: "Which port number range is designated for well-known services assigned by IANA?",
    choices: [
      "0–1023",
      "1024–49151",
      "49152–65535",
      "0–65535"
    ],
    answer: 0,
    why: "Well-known ports: 0–1023 (assigned by IANA for standard services). Registered ports: 1024–49151. Dynamic/private ports: 49152–65535."
  },

  // ========== Application Layer (12 questions) ==========
  {
    id: 1052,
    topic: "Application Layer",
    question: "Which application protocol is used to send email from a client to a mail server, or between mail servers?",
    choices: [
      "POP3",
      "IMAP",
      "SMTP",
      "HTTP"
    ],
    answer: 2,
    why: "SMTP (Simple Mail Transfer Protocol) is used to send (push) email from client to server and between servers. POP3 and IMAP are used to retrieve (pull) email from a server."
  },
  {
    id: 1053,
    topic: "Application Layer",
    question: "What is the key difference between POP3 and IMAP for email retrieval?",
    choices: [
      "POP3 is encrypted; IMAP is not",
      "POP3 downloads and typically deletes mail from the server; IMAP keeps mail on the server and synchronises across devices",
      "POP3 supports HTML email; IMAP only supports plain text",
      "There is no practical difference between them"
    ],
    answer: 1,
    why: "POP3 downloads emails to the local device and typically removes them from the server. IMAP keeps emails on the server, allowing access and synchronisation from multiple devices."
  },
  {
    id: 1054,
    topic: "Application Layer",
    question: "In a three-tier client-server architecture, what are the three tiers?",
    choices: [
      "Client, router, server",
      "Presentation (client), application/logic (middleware), data (database)",
      "Browser, firewall, database",
      "Physical, data link, network"
    ],
    answer: 1,
    why: "The three tiers are: (1) Presentation tier — the client/UI, (2) Application/Logic tier — middleware processing business logic, (3) Data tier — the database server."
  },
  {
    id: 1055,
    topic: "Application Layer",
    question: "A thin client performs:",
    choices: [
      "Most of the application processing locally",
      "All data storage locally",
      "Minimal processing — mainly presentation — with most logic handled by the server",
      "No network communication"
    ],
    answer: 2,
    why: "A thin client handles mainly the user interface/presentation. The heavy processing and business logic are performed on the server side. A thick (fat) client does more processing locally."
  },
  {
    id: 1056,
    topic: "Application Layer",
    question: "FTP uses two TCP connections. What are they?",
    choices: [
      "One for upload, one for download",
      "One control connection (port 21) for commands, and one data connection (port 20) for file transfer",
      "One for authentication, one for encryption",
      "One for IPv4, one for IPv6"
    ],
    answer: 1,
    why: "FTP uses a control connection on port 21 for sending commands and responses, and a separate data connection on port 20 for actual file transfers."
  },
  {
    id: 1057,
    topic: "Application Layer",
    question: "Which HTTP method is used to request a resource from a web server?",
    choices: [
      "POST",
      "PUT",
      "DELETE",
      "GET"
    ],
    answer: 3,
    why: "GET is used to request/retrieve a resource from the server. POST is used to send data to the server (e.g., form submission). PUT updates a resource. DELETE removes it."
  },
  {
    id: 1058,
    topic: "Application Layer",
    question: "In web architecture, middleware refers to:",
    choices: [
      "The physical cabling between client and server",
      "Software that sits between the client and the database server, handling business logic and application processing",
      "The browser plug-ins used to render web pages",
      "The operating system on the web server"
    ],
    answer: 1,
    why: "Middleware is software that mediates between the client (presentation) and the database (data tier), processing business logic, managing transactions, and providing services in a multi-tier architecture."
  },
  {
    id: 1059,
    topic: "Application Layer",
    question: "An HTTP response code of 404 indicates:",
    choices: [
      "The request was successful",
      "The resource has been permanently moved",
      "The requested resource was not found on the server",
      "The server encountered an internal error"
    ],
    answer: 2,
    why: "HTTP 404 = Not Found. 200 = OK (success). 301 = Moved Permanently. 500 = Internal Server Error."
  },
  {
    id: 1060,
    topic: "Application Layer",
    question: "Which of the following is an advantage of an n-tier architecture over a two-tier architecture?",
    choices: [
      "Lower latency because fewer network hops are needed",
      "Better scalability because each tier can be scaled independently",
      "Simpler design with fewer components to manage",
      "No need for a database server"
    ],
    answer: 1,
    why: "N-tier architectures separate concerns across multiple tiers. Each tier can be independently scaled, updated, and maintained, providing better scalability and flexibility than two-tier designs."
  },
  {
    id: 1061,
    topic: "Application Layer",
    question: "What port does SMTP use by default?",
    choices: [
      "21",
      "25",
      "110",
      "143"
    ],
    answer: 1,
    why: "SMTP uses port 25 by default. POP3 uses port 110, IMAP uses port 143, and FTP control uses port 21."
  },
  {
    id: 1062,
    topic: "Application Layer",
    question: "A thick client:",
    choices: [
      "Has no local storage or processing capability",
      "Performs significant application processing on the client machine",
      "Requires the server to render all user interface elements",
      "Cannot function without a constant network connection"
    ],
    answer: 1,
    why: "A thick (fat) client performs significant processing locally, including business logic. It relies on the server mainly for data storage. This reduces server load but increases client-side maintenance."
  },
  {
    id: 1063,
    topic: "Application Layer",
    question: "In client-server architecture, which component initiates a request for a service?",
    choices: [
      "The server",
      "The router",
      "The client",
      "The middleware"
    ],
    answer: 2,
    why: "In client-server architecture, the client always initiates the request and the server responds. The server passively listens for incoming client requests."
  },

  // ========== Network Design (8 questions) ==========
  {
    id: 1064,
    topic: "Network Design",
    question: "According to the building-block approach to network design, which step comes first?",
    choices: [
      "Technology design",
      "Cost assessment",
      "Needs analysis",
      "Request for Proposal (RFP)"
    ],
    answer: 2,
    why: "The building-block process starts with needs analysis (understanding requirements), then moves to technology design, cost assessment, and finally the RFP to vendors."
  },
  {
    id: 1065,
    topic: "Network Design",
    question: "The 'turnpike effect' in network design refers to:",
    choices: [
      "The tendency of users to avoid using new network technologies",
      "The phenomenon where new network capacity is quickly consumed by increased demand",
      "The requirement to build redundant links on all backbone connections",
      "The cost savings achieved by leasing rather than buying equipment"
    ],
    answer: 1,
    why: "The turnpike effect (named after highway construction) describes how building additional network capacity quickly attracts more traffic, filling the new capacity sooner than expected."
  },
  {
    id: 1066,
    topic: "Network Design",
    question: "Which of the following is NOT one of the seven network architecture components?",
    choices: [
      "Local area networks (LANs)",
      "Backbone networks (BNs)",
      "Firewalls",
      "Wide area networks (WANs)"
    ],
    answer: 2,
    why: "The seven network architecture components are: LANs, BNs, WANs, the Internet, servers/clients, network circuits, and network devices. Firewalls are a security control, not an architecture component."
  },
  {
    id: 1067,
    topic: "Network Design",
    question: "During needs analysis, a network designer identifies that the organisation needs 99.99% uptime. This is an example of a:",
    choices: [
      "Technology constraint",
      "Performance requirement",
      "Cost objective",
      "Vendor preference"
    ],
    answer: 1,
    why: "Uptime/availability requirements are performance requirements identified during needs analysis. They drive decisions about redundancy, failover, and equipment quality in later design phases."
  },
  {
    id: 1068,
    topic: "Network Design",
    question: "An RFP (Request for Proposal) in network design is:",
    choices: [
      "A network troubleshooting log",
      "A document sent to vendors describing the network requirements and asking for proposed solutions and pricing",
      "A security audit report",
      "A blueprint for the physical cabling layout"
    ],
    answer: 1,
    why: "An RFP is a formal document sent to potential vendors describing the organisation's requirements and asking them to submit proposals detailing how they would meet those requirements and at what cost."
  },
  {
    id: 1069,
    topic: "Network Design",
    question: "In network design, a WAN link connecting two offices often becomes the bottleneck because:",
    choices: [
      "WAN links typically use wireless technology",
      "WAN links are generally slower and more expensive than LAN links, making them capacity-constrained",
      "WAN links do not support TCP/IP",
      "WAN links cannot be encrypted"
    ],
    answer: 1,
    why: "WAN links are slower (and more expensive per Mbps) than LAN links. Because many LAN users share the WAN link, it frequently becomes the point of congestion — the bottleneck."
  },
  {
    id: 1070,
    topic: "Network Design",
    question: "The technology design phase of the building-block process involves:",
    choices: [
      "Determining how much the network will cost",
      "Selecting the specific hardware, software, and protocols that will be used in each part of the network",
      "Interviewing users about their needs",
      "Writing the RFP document"
    ],
    answer: 1,
    why: "Technology design involves selecting the specific technologies (equipment, media, protocols, topologies) for each component of the network, based on the requirements identified in needs analysis."
  },
  {
    id: 1071,
    topic: "Network Design",
    question: "Cost assessment in network design should consider:",
    choices: [
      "Only the initial purchase price of equipment",
      "Only the monthly recurring costs",
      "Both capital costs and ongoing operational costs over the expected life of the network",
      "Only the cost of labour for installation"
    ],
    answer: 2,
    why: "Cost assessment must include both capital expenditures (equipment, installation) and operational expenditures (maintenance, leased circuits, staffing) over the network's expected lifespan."
  },

  // ========== Backbone Networks and VLANs (8 questions) ==========
  {
    id: 1072,
    topic: "Backbone Networks and VLANs",
    question: "What is a key advantage of a switched backbone over a routed backbone?",
    choices: [
      "Switched backbones provide better security isolation between subnets",
      "Switched backbones forward frames faster because switching is done in hardware at Layer 2",
      "Switched backbones can connect geographically distant sites",
      "Switched backbones eliminate the need for IP addresses"
    ],
    answer: 1,
    why: "Switched backbones use Layer 2 switching (usually in hardware ASICs), which is faster than Layer 3 routing. Best practice today is a switched backbone using VLANs with Layer 3 switches for inter-VLAN routing."
  },
  {
    id: 1073,
    topic: "Backbone Networks and VLANs",
    question: "What is the primary purpose of a VLAN?",
    choices: [
      "To increase the physical speed of network ports",
      "To logically segment a physical network into separate broadcast domains without requiring separate physical switches",
      "To encrypt all traffic between switches",
      "To provide wireless access to wired users"
    ],
    answer: 1,
    why: "VLANs create logical broadcast domains independent of physical location. Devices in different VLANs cannot communicate without a router (or Layer 3 switch), even if connected to the same physical switch."
  },
  {
    id: 1074,
    topic: "Backbone Networks and VLANs",
    question: "IEEE 802.1Q is the standard for:",
    choices: [
      "Wireless LAN security",
      "VLAN tagging — inserting a tag into Ethernet frames to identify VLAN membership",
      "Spanning Tree Protocol",
      "Link aggregation"
    ],
    answer: 1,
    why: "IEEE 802.1Q defines VLAN tagging — a 4-byte tag inserted into the Ethernet frame header containing the VLAN ID, allowing switches to identify which VLAN a frame belongs to."
  },
  {
    id: 1075,
    topic: "Backbone Networks and VLANs",
    question: "A trunk port on a switch is used to:",
    choices: [
      "Connect a single end-user device to the switch",
      "Carry traffic for multiple VLANs between switches using 802.1Q tagging",
      "Provide power over Ethernet to access points",
      "Block all broadcast traffic"
    ],
    answer: 1,
    why: "Trunk ports carry traffic for multiple VLANs between switches (or between a switch and a router). Frames on trunk links are tagged with 802.1Q headers to identify their VLAN."
  },
  {
    id: 1076,
    topic: "Backbone Networks and VLANs",
    question: "What is the MDF (Main Distribution Facility) in a building network?",
    choices: [
      "The room where all external WAN connections terminate",
      "The central wiring closet that houses the backbone switch/router connecting to all IDFs (Intermediate Distribution Facilities)",
      "A software tool for managing VLANs",
      "The server room containing all application servers"
    ],
    answer: 1,
    why: "The MDF is the central point in a building's network where the backbone equipment resides. It connects to IDFs (wiring closets on each floor) and typically houses the main switch, router, and WAN demarcation."
  },
  {
    id: 1077,
    topic: "Backbone Networks and VLANs",
    question: "A Layer 3 switch can perform which additional function compared to a traditional Layer 2 switch?",
    choices: [
      "Forwarding frames based on MAC addresses",
      "Routing packets between different VLANs/subnets using IP addresses",
      "Providing Power over Ethernet",
      "Filtering traffic based on port numbers"
    ],
    answer: 1,
    why: "A Layer 3 switch combines Layer 2 switching with Layer 3 routing capabilities. It can route traffic between VLANs at hardware speeds, eliminating the need for a separate external router."
  },
  {
    id: 1078,
    topic: "Backbone Networks and VLANs",
    question: "Which of the following is a benefit of using VLANs? (Select the best answer.)",
    choices: [
      "They increase the size of collision domains",
      "They eliminate the need for any routing",
      "They improve security by isolating sensitive traffic into separate broadcast domains",
      "They double the bandwidth of each switch port"
    ],
    answer: 2,
    why: "VLANs improve security by logically separating traffic. Devices in different VLANs are in different broadcast domains and cannot communicate without going through a router where access controls can be applied."
  },
  {
    id: 1079,
    topic: "Backbone Networks and VLANs",
    question: "A chassis switch is best described as:",
    choices: [
      "A small desktop switch with 8 fixed ports",
      "A modular switch with a chassis that accepts interchangeable line cards, providing high port density and redundancy",
      "A wireless access point with built-in switching",
      "A virtual switch running on a hypervisor"
    ],
    answer: 1,
    why: "A chassis switch uses a modular design with a chassis (frame) that holds interchangeable line cards (blades). This provides high port density, redundant power supplies, and flexibility to mix port types."
  },

  // ========== WANs (7 questions) ==========
  {
    id: 1080,
    topic: "WANs",
    question: "A T1 circuit provides a data rate of:",
    choices: [
      "64 Kbps",
      "1.544 Mbps",
      "44.736 Mbps",
      "155.52 Mbps"
    ],
    answer: 1,
    why: "A T1 circuit carries 1.544 Mbps (24 DS0 channels × 64 Kbps + 8 Kbps framing). A T3 carries 44.736 Mbps (28 T1s)."
  },
  {
    id: 1081,
    topic: "WANs",
    question: "MPLS (Multiprotocol Label Switching) operates by:",
    choices: [
      "Encrypting all WAN traffic end-to-end",
      "Assigning short labels to packets and forwarding them based on labels rather than long IP address lookups",
      "Converting packet-switched traffic into circuit-switched traffic",
      "Replacing Ethernet with a faster Layer 2 protocol"
    ],
    answer: 1,
    why: "MPLS adds a label to each packet at the network edge. Core routers (label-switch routers) forward packets based on these short labels, which is faster than traditional IP routing table lookups."
  },
  {
    id: 1082,
    topic: "WANs",
    question: "Which of the following is a packet-switched WAN technology?",
    choices: [
      "T1 leased line",
      "SONET ring",
      "Frame relay",
      "Analog modem dialup"
    ],
    answer: 2,
    why: "Frame relay is a packet-switched WAN technology that uses virtual circuits. T1 leased lines and SONET are dedicated/circuit-based. Analog dialup is circuit-switched."
  },
  {
    id: 1083,
    topic: "WANs",
    question: "Which type of VPN creates a secure tunnel between two networks (e.g., between two office routers)?",
    choices: [
      "Remote-access VPN",
      "Site-to-site (gateway-to-gateway) VPN",
      "Host-to-host VPN",
      "SSL VPN"
    ],
    answer: 1,
    why: "A site-to-site (gateway-to-gateway) VPN creates a secure tunnel between two network gateways (routers/firewalls), connecting entire networks. Remote-access VPN connects an individual user to a network."
  },
  {
    id: 1084,
    topic: "WANs",
    question: "SD-WAN (Software-Defined WAN) provides which key benefit over traditional WANs?",
    choices: [
      "It eliminates the need for any Internet connection",
      "It allows centralised software-based control and policy management of WAN links, enabling dynamic path selection across multiple link types",
      "It guarantees zero packet loss on all connections",
      "It only works with MPLS circuits"
    ],
    answer: 1,
    why: "SD-WAN decouples the control plane from the data plane, allowing centralised management. It can dynamically route traffic across MPLS, broadband, LTE, etc., based on policies, cost, and performance."
  },
  {
    id: 1085,
    topic: "WANs",
    question: "SONET (Synchronous Optical Networking) is primarily used for:",
    choices: [
      "Wireless LAN communication",
      "High-speed data transmission over fibre-optic networks using a ring topology for redundancy",
      "Email transport between mail servers",
      "Connecting Bluetooth devices"
    ],
    answer: 1,
    why: "SONET is a fibre-optic WAN standard providing high-speed, synchronous data transmission. It typically uses a ring topology with automatic failover for redundancy (self-healing ring)."
  },
  {
    id: 1086,
    topic: "WANs",
    question: "Ethernet WAN services (Carrier Ethernet) are becoming popular because they:",
    choices: [
      "Require no special equipment at customer premises",
      "Use the same familiar Ethernet technology as LANs, simplifying management and reducing costs",
      "Only work over distances less than 100 metres",
      "Are free of charge from all carriers"
    ],
    answer: 1,
    why: "Carrier Ethernet extends familiar LAN Ethernet technology to WAN distances. This simplifies network management (same protocols end-to-end) and often costs less than legacy WAN technologies like T-carrier or SONET."
  },

  // ========== The Internet (7 questions) ==========
  {
    id: 1087,
    topic: "The Internet",
    question: "Tier 1 ISPs are characterised by:",
    choices: [
      "Serving only residential customers in a single city",
      "Having global backbone networks and peering with all other Tier 1 ISPs without paying for transit",
      "Purchasing all their bandwidth from Tier 2 ISPs",
      "Operating only wireless networks"
    ],
    answer: 1,
    why: "Tier 1 ISPs own large global backbone networks and peer with every other Tier 1 ISP on a settlement-free basis (no transit payments). They do not need to buy transit from anyone."
  },
  {
    id: 1088,
    topic: "The Internet",
    question: "An Internet Exchange Point (IXP) is:",
    choices: [
      "A government office that assigns IP addresses",
      "A physical facility where multiple ISPs interconnect and exchange traffic, often via peering",
      "A DNS root server",
      "A firewall protecting the Internet backbone"
    ],
    answer: 1,
    why: "An IXP is a physical infrastructure where ISPs and content providers connect their networks to exchange traffic directly (peering), reducing latency and transit costs."
  },
  {
    id: 1089,
    topic: "The Internet",
    question: "ADSL (Asymmetric Digital Subscriber Line) is 'asymmetric' because:",
    choices: [
      "It uses two different types of cables",
      "The download speed is faster than the upload speed",
      "It only works during certain hours of the day",
      "It requires a symmetric encryption key"
    ],
    answer: 1,
    why: "ADSL provides faster download speeds than upload speeds — asymmetric bandwidth. This matches typical residential usage patterns where users download more data than they upload."
  },
  {
    id: 1090,
    topic: "The Internet",
    question: "Cable Internet access using DOCSIS shares bandwidth among users on the same segment. This means:",
    choices: [
      "Every user always gets the full advertised speed",
      "Performance can degrade during peak usage times when many neighbours are online simultaneously",
      "Only one user can be online at a time",
      "Cable Internet cannot support streaming video"
    ],
    answer: 1,
    why: "Cable Internet is a shared medium — all users on the same cable segment share the total bandwidth. During peak times, more users competing for the shared bandwidth can reduce individual speeds."
  },
  {
    id: 1091,
    topic: "The Internet",
    question: "FTTH (Fibre to the Home) uses which technique to send multiple signals over a single fibre?",
    choices: [
      "Time Division Multiplexing (TDM)",
      "Code Division Multiplexing (CDM)",
      "Wavelength Division Multiplexing (WDM)",
      "Frequency Hopping Spread Spectrum (FHSS)"
    ],
    answer: 2,
    why: "FTTH typically uses WDM (Wavelength Division Multiplexing) to carry multiple signals on different wavelengths of light over a single fibre strand, maximising capacity."
  },
  {
    id: 1092,
    topic: "The Internet",
    question: "Which organisation is responsible for developing Internet standards through the RFC (Request for Comments) process?",
    choices: [
      "IEEE",
      "ITU",
      "IETF (Internet Engineering Task Force)",
      "ISO"
    ],
    answer: 2,
    why: "The IETF develops and promotes Internet standards through the RFC process. The IESG oversees IETF activities, the IAB provides architectural guidance, and the IRTF handles long-term research."
  },
  {
    id: 1093,
    topic: "The Internet",
    question: "A POP (Point of Presence) in the context of an ISP is:",
    choices: [
      "A protocol for email retrieval",
      "A physical location where the ISP has networking equipment that customers or other ISPs can connect to",
      "A type of firewall",
      "A virtual private network endpoint"
    ],
    answer: 1,
    why: "A POP is a physical access point (location with routers, switches, and other equipment) where customers connect to an ISP's network. ISPs have multiple POPs to provide local access across a region."
  },

  // ========== Network Security (7 questions) ==========
  {
    id: 1094,
    topic: "Network Security",
    question: "The CIA triad in information security stands for:",
    choices: [
      "Control, Integrity, Authentication",
      "Confidentiality, Integrity, Availability",
      "Cryptography, Isolation, Access",
      "Compliance, Identity, Authorisation"
    ],
    answer: 1,
    why: "The CIA triad represents the three core principles of information security: Confidentiality (data is accessible only to authorised parties), Integrity (data is not altered), and Availability (systems are accessible when needed)."
  },
  {
    id: 1095,
    topic: "Network Security",
    question: "A DDoS (Distributed Denial of Service) attack works by:",
    choices: [
      "Intercepting and modifying packets in transit",
      "Flooding a target with massive traffic from many compromised machines (botnet) to overwhelm its resources",
      "Guessing user passwords through brute force",
      "Injecting malicious SQL queries into web forms"
    ],
    answer: 1,
    why: "A DDoS attack uses a botnet (many compromised computers) to flood the target with enormous volumes of traffic, exhausting its bandwidth, processing power, or memory, making it unavailable to legitimate users."
  },
  {
    id: 1096,
    topic: "Network Security",
    question: "Which type of firewall examines the full context of a connection (including state information) rather than just individual packets?",
    choices: [
      "Packet-filtering firewall",
      "Stateful inspection firewall",
      "Application-layer (proxy) firewall",
      "NAT firewall"
    ],
    answer: 1,
    why: "Stateful inspection firewalls track the state of active connections and make decisions based on context (e.g., whether a packet is part of an established connection), providing stronger security than simple packet filtering."
  },
  {
    id: 1097,
    topic: "Network Security",
    question: "In asymmetric encryption, what is the relationship between the public key and private key?",
    choices: [
      "Both keys are identical and shared between parties",
      "The public key encrypts data that only the corresponding private key can decrypt, and vice versa",
      "The public key is used only for hashing, not encryption",
      "The private key is distributed to everyone while the public key is kept secret"
    ],
    answer: 1,
    why: "In asymmetric (public-key) cryptography, data encrypted with the public key can only be decrypted with the matching private key, and vice versa. The public key is shared; the private key is kept secret."
  },
  {
    id: 1098,
    topic: "Network Security",
    question: "Social engineering in the context of security refers to:",
    choices: [
      "Using advanced algorithms to crack encryption",
      "Manipulating people into revealing confidential information or performing actions that compromise security",
      "Designing social media platforms with enhanced privacy features",
      "Installing antivirus software on all workstations"
    ],
    answer: 1,
    why: "Social engineering exploits human psychology rather than technical vulnerabilities. Attackers trick people into divulging passwords, clicking malicious links, or granting access through deception."
  },
  {
    id: 1099,
    topic: "Network Security",
    question: "Risk assessment in network security involves:",
    choices: [
      "Installing the latest patches on all servers",
      "Identifying threats and vulnerabilities, estimating the likelihood and impact of each risk, and determining appropriate controls",
      "Blocking all incoming traffic at the firewall",
      "Encrypting the entire hard drive of every computer"
    ],
    answer: 1,
    why: "Risk assessment is the process of identifying assets, threats, and vulnerabilities; estimating the probability and impact of potential incidents; and deciding which controls are cost-effective to mitigate the risks."
  },
  {
    id: 1100,
    topic: "Network Security",
    question: "Symmetric encryption uses:",
    choices: [
      "Two different keys — one public and one private",
      "A single shared secret key for both encryption and decryption",
      "No keys — it relies on algorithms alone",
      "A hash function instead of an encryption algorithm"
    ],
    answer: 1,
    why: "Symmetric encryption uses one shared secret key for both encryption and decryption. It is faster than asymmetric encryption but requires secure key distribution. Examples: AES, DES, 3DES."
  },

  // ========== Network Management (4 questions) ==========
  {
    id: 1101,
    topic: "Network Management",
    question: "SNMP (Simple Network Management Protocol) uses which database to store information about managed devices?",
    choices: [
      "SQL database",
      "MIB (Management Information Base)",
      "Active Directory",
      "DNS zone file"
    ],
    answer: 1,
    why: "SNMP uses the MIB (Management Information Base), a hierarchical database of objects that represent manageable features of network devices (e.g., interface status, traffic counters, errors)."
  },
  {
    id: 1102,
    topic: "Network Management",
    question: "If a device has an MTBF (Mean Time Between Failures) of 2000 hours and an MTTR (Mean Time To Repair) of 4 hours, what is its availability?",
    choices: [
      "99.50%",
      "99.80%",
      "99.90%",
      "99.00%"
    ],
    answer: 1,
    why: "Availability = MTBF / (MTBF + MTTR) = 2000 / (2000 + 4) = 2000/2004 = 0.99800… ≈ 99.80%."
  },
  {
    id: 1103,
    topic: "Network Management",
    question: "Configuration management in network management includes:",
    choices: [
      "Monitoring network traffic in real time",
      "Maintaining records of hardware and software configurations, managing changes, and ensuring documentation is current",
      "Calculating the total cost of ownership",
      "Providing first-level help desk support"
    ],
    answer: 1,
    why: "Configuration management tracks and controls network device configurations, including hardware inventory, software versions, IP assignments, and change management procedures."
  },
  {
    id: 1104,
    topic: "Network Management",
    question: "TCO (Total Cost of Ownership) for a network includes:",
    choices: [
      "Only the purchase price of switches and routers",
      "Only the salaries of network staff",
      "All costs: hardware, software, installation, maintenance, support staff, training, and downtime costs over the system's lifetime",
      "Only the monthly ISP subscription fees"
    ],
    answer: 2,
    why: "TCO encompasses all direct and indirect costs of owning and operating a network over its lifetime, including hardware, software, installation, maintenance, staffing, training, downtime, and disposal."
  }
];
