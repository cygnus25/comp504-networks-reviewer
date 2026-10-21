# Extra concepts tested by the lecture slide quizzes

The beginner reviewer teaches the main network story. These shorter points fill details that appear in the lecture's numbered quiz slides. Read them before using the [slide question bank](SLIDE_QUESTIONS.md). The bank reports the answers printed on the slides; it is a study aid, not a promise that the final exam repeats those questions.

## Application layer and HTTP

**Application architecture** describes how application functions are divided among clients and servers. It is not automatically “all on the client.” In a three-tier design, presentation runs on the client, application logic on an application server, and data access/storage on a database server. Middleware helps separate components communicate. An n-tier design may split work into even more tiers, often improving scalability.

An HTTP **request line** contains a method such as `GET`, a target, and an HTTP version. **Headers** are separate lines of metadata after that line. A **body** is optional; a simple `GET` request can have no body. The slide quizzes deliberately test the difference between request line, headers, and body. “Web protocol” is not the protocol's name: it is **HTTP** (or HTTPS when protected by TLS).

## Physical and data link detail

**Guided media** carry signals in a physical path such as copper or fiber; **radiated/unguided media** use wireless transmission such as radio or microwave. A shared circuit is a multipoint arrangement. Fiber resists electromagnetic noise because it carries light.

The data link layer sits between **physical** and **network** layers in the five-layer model. In IEEE LANs, it has two named sublayers: **MAC** (media access control) and **LLC** (logical link control). MAC decides how devices access a shared medium; LLC provides a logical interface upward. Controlled access schemes coordinate who may transmit and can be more efficient under heavy contention; contention-based schemes let devices compete for access.

**Error causes:** attenuation is weakening over distance; cross-talk is unwanted coupling from a nearby circuit; impulse noise is a short spike that may damage a burst of bits. Shielding can reduce interference; repeaters or amplifiers address attenuation. These names are easy to mix up in multiple-choice questions, so match each to its physical cause.

**Asynchronous transmission** sends characters independently, with per-character framing. **Synchronous transmission** sends a coordinated stream or block. SDLC and HDLC are examples of bit-oriented data-link protocols. A flag pattern marks frame boundaries. Ethernet and PPP also have frame formats with an error-checking field. **MAC address spoofing** changes the MAC address a system presents in software; MAC filtering alone is therefore a weak access control.

## Transport details beyond TCP versus UDP

The transport layer is between application and network in the course's five-layer model. It handles end-to-end transport; routing is a network-layer job. **ARQ** (automatic repeat request) uses acknowledgements and retransmission for error recovery. The lecture distinguishes **stop-and-wait** (send one unit, then wait for an acknowledgement) and **continuous** approaches (allow more than one unit to be in flight).

One slide quiz keys a “typical TCP segment” header as **192 bits (24 bytes)**. The same deck also states that a TCP header **without options is 20 bytes**. Keep these two statements separate: 20 bytes is the base TCP header; its options can make it longer. If your exam uses the exact slide wording “typical,” the slide's printed key is 192 bits. If asked for the *minimum/base* header, use 20 bytes.

## Design, backbones, and Internet access

A **building-block design** starts with needs analysis (users, applications, locations, traffic, growth), then technology design, then cost assessment. A **campus backbone/core** connects networks or buildings; it is not the end-user access LAN. A **routed backbone** forwards using network-layer IP addresses; a switched backbone forwards using Layer 2 MAC addresses. A Layer 3 switch can make IP-based forwarding decisions.

Chapter 9 has no numbered quiz slides, but its WAN material still matters. A dedicated circuit reserves a site-to-site connection. Packet-switched services share a provider network; the slides compare older frame relay, MPLS, and Ethernet services. A star topology depends on its central site, while a full mesh connects every pair and costs more. Intranet VPNs connect an organization's sites, extranet VPNs extend access to partners, and remote-access VPNs connect an individual user. SD-WAN uses software control to manage and choose WAN paths.

The Internet is hierarchical rather than flat. Large **tier 1 ISPs** exchange traffic at interconnection points. A **point of presence (PoP)** is a provider location where customers connect. **Broadband** is a general label for access faster than old dial-up modems. For DSL, a **DSLAM** combines subscriber lines at the provider end. Fiber access can use **wavelength division multiplexing**, putting multiple wavelengths of light on one fiber. In Internet governance, the **Internet Architecture Board (IAB)** provides architectural oversight; the slide quiz contrasts it with the Internet Engineering Steering Group.

## Security and management detail

Security includes prevention **and recovery**. Confidentiality, integrity, and availability are core goals; business continuity focuses especially on keeping services available. **Redundancy** means spare capacity or alternate components so one failure does not stop the service. An **intrusion** is unauthorized access, distinct from accidental disruption or a natural disaster.

**Configuration management** records and controls device/software configurations and changes. **Performance management** checks that the network runs efficiently. **Fault management** finds and repairs failures. Management reports and monitoring tools help measure availability. The lecture quizzes use these job names precisely.
