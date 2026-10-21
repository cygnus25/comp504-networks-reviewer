# Closed-book practice and answer key

Answer questions 1–32 on paper before opening the key. For each missed **or guessed** answer, write the rule that would have let you solve it. Redo those items 24–48 hours later. These are original practice questions based on the supplied course materials, not past exam questions.

## Questions

### Foundations and local networks

1. Put these in encapsulation order, from application toward wire: frame, bits, packet, data, segment.
2. Which addresses identify (a) an application process, (b) a host across networks, and (c) the next hop on one local link?
3. A PC sends to a host in another subnet. Is the first frame's destination MAC the remote host's or the default gateway's? Explain.
4. A router forwards a normal IP packet between two Ethernet LANs. Which destination stays the same: IP, Ethernet MAC, both, or neither? Assume no NAT.
5. Classify each: TV broadcast, walkie-talkie, modern switched Ethernet link — simplex, half-duplex, or full-duplex.
6. What is attenuation? Which medium is immune to electromagnetic interference: copper twisted pair or fiber?
7. A switch receives a frame from MAC `AA` on port 2 to unknown MAC `BB`. What does it learn, and what does it do with the frame?
8. What is the difference between CRC detection and TCP retransmission?
9. A PC wants to send to a local IPv4 host whose MAC it does not know. What protocol and message type does it use first?
10. Compare store-and-forward with cut-through switching in one sentence each.

### IP, transport, and applications

11. Write the decimal mask and usable host count for `/27`.
12. For `192.168.14.77/26`, find network address, broadcast address, first and last usable addresses.
13. A LAN needs 30 usable IPv4 addresses. What is the smallest ordinary prefix that fits? What if it needs 31?
14. Starting from `10.0.5.0/24`, allocate contiguous subnets for 60, 25, and 10 hosts, largest first. Give network/prefix for each.
15. Host A is `192.168.10.20/24`, host B is `192.168.11.20/24`. What gateway information must A have to reach B?
16. What is a router's default route in IPv4 CIDR notation? When is it used?
17. What does `ping` send? Is ICMP a routing protocol?
18. A remote IP ping succeeds, but `ping example.com` fails. Which service is the first suspect?
19. Which transport protocol offers sequence numbers, acknowledgements, and retransmission? Which is connectionless at the transport layer?
20. Give one reason a voice call might use UDP and one reason a file transfer might use TCP.
21. Which protocol maps a domain name to an IP address? Which protocol commonly sends email? Which protocol securely replaces Telnet for terminal access?
22. In a three-tier application, where do presentation logic, application logic, and database storage normally live?
23. What does middleware do in a client-server application? What does a load balancer do in a server farm?
24. Compress `2001:0db8:0000:0000:0000:0000:0000:0001` using IPv6 notation. Why can `::` appear only once?

### Design, WAN, security, and management

25. What access method is associated with historical shared Ethernet, and what method does Wi-Fi use? Is CSMA/CD used by token ring?
26. Two PCs are attached to the same physical switch but different VLANs. What additional capability is needed for them to communicate?
27. What is the purpose of an 802.1Q trunk between switches?
28. Put the course's building-block network design steps in order: cost assessment, needs analysis, technology design.
29. Compare a dedicated WAN circuit and a packet-switched carrier service. Which topology has every site linked to every other site?
30. State one key difference between DSL and cable modem access in the course slides. What does a VPN add when it uses the public Internet?
31. Distinguish threat, vulnerability, and risk. Why does NAT alone not replace a firewall policy?
32. A user cannot reach a remote server. Local same-subnet ping succeeds; gateway ping succeeds; remote IP ping fails. Give two plausible next checks and one command for each.

## Answer key with reasoning

1. `data → segment → packet → frame → bits`. UDP's transport unit is usually called a datagram.
2. (a) TCP/UDP port, (b) IP address, (c) MAC address.
3. The local default gateway's MAC. The remote host is outside the local link, so the first frame goes to the router.
4. The destination IP stays the remote host's IP. The outgoing frame is rebuilt with a new destination MAC for its next hop.
5. TV: simplex; walkie-talkie: half-duplex; switched Ethernet link: full-duplex (normal modern operation).
6. Attenuation is loss of signal strength with distance. Fiber is immune to electromagnetic interference.
7. It learns `AA → port 2`. Because `BB` is unknown, it floods the frame out other ports in the same VLAN.
8. CRC lets a receiver identify and discard a damaged frame; TCP can retransmit missing or unacknowledged data end to end.
9. ARP. It broadcasts an ARP Request asking which local MAC owns the target IPv4 address.
10. Store-and-forward receives the whole frame and checks FCS first. Cut-through starts forwarding as soon as it knows the destination port, reducing delay but possibly forwarding errors.
11. `255.255.255.224`; `2^5 − 2 = 30` usable.
12. `/26` blocks are 64 addresses: network `192.168.14.64`, broadcast `.127`, usable `.65–.126`.
13. 30 fits `/27` exactly (`2^5 − 2 = 30`). 31 requires `/26` (`62` usable).
14. 60 hosts: `10.0.5.0/26`; 25 hosts: `10.0.5.64/27`; 10 hosts: `10.0.5.96/28`.
15. A needs a default gateway address in `192.168.10.0/24`, normally the local router interface; B also needs a gateway in its own subnet for the return path.
16. `0.0.0.0/0`. It matches when no more specific route matches the destination.
17. ICMP Echo Request and Echo Reply. ICMP is a control/error messaging protocol, not a routing protocol.
18. DNS, because IP connectivity works but name resolution does not.
19. TCP; UDP.
20. UDP avoids transport setup/retransmission delay for time-sensitive media; TCP reliably delivers and orders file data.
21. DNS; SMTP; SSH.
22. Client: presentation; application server: application logic; database server: storage/data access.
23. Middleware supports communication and data exchange between components. A load balancer chooses a server for each incoming request.
24. `2001:db8::1`. Only one `::` is allowed because two compressed runs would make the number of omitted zero groups ambiguous.
25. CSMA/CD for historical shared/half-duplex Ethernet; CSMA/CA for Wi-Fi. No, token ring uses token passing.
26. Inter-VLAN routing through a Layer 3 switch or router, with suitable IP addressing and gateways.
27. It carries frames from multiple VLANs over one link while marking their VLAN IDs.
28. Needs analysis → technology design → cost assessment, then iterate.
29. Dedicated reserves a leased point-to-point circuit; packet-switched sites share a carrier network. Full mesh links every site pair.
30. DSL uses a telephone local loop and is point-to-point in the course comparison; cable modem uses a shared cable segment. A VPN adds an encrypted logical tunnel between endpoints.
31. Threat: possible harm; vulnerability: weakness; risk: likelihood and impact of harm. NAT translates addresses, but explicit traffic filtering and access rules still require a security policy/firewall.
32. Check the router's route with `show ip route`; check router interface status with `show ip interface brief`; check target host's address/gateway with `ipconfig`; or trace the path with `tracert <remote-IP>`. Two evidence-driven checks earn credit.

## Score interpretation

Use your **error pattern**, not only your total. Misses in 1–10 mean rebuild layers, framing, and switching before VLSM. Misses in 11–17 mean drill subnetting and routing daily. Misses in 18–24 mean compare protocols and architectures. Misses in 25–32 mean work through the course's design, LAN, WAN, security, and management slides. Then take a second closed-book attempt after the labs.
