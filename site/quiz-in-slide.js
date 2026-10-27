// 85 In-Slide Quiz Questions extracted from official COMP504 lecture slides
const ALL_QUESTIONS = [
  {
    "id": "ch02-s24",
    "topic": "Chapter 2 — Application Layer",
    "week": "Week 10",
    "source": "ch02 Application layer-2.pptx",
    "slide": 24,
    "quiz": "QUIZ 1",
    "question": "An application architecture is the way in which the functions of the application layer are performed solely by the clients in the network.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch02 Application layer-2.pptx, slide 24) records this statement as: False."
  },
  {
    "id": "ch02-s25",
    "topic": "Chapter 2 — Application Layer",
    "week": "Week 10",
    "source": "ch02 Application layer-2.pptx",
    "slide": 25,
    "quiz": "QUIZ 2",
    "question": "Host-based and client-based networks are similar in that the client computer performs most of the work.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch02 Application layer-2.pptx, slide 25) records this statement as: False."
  },
  {
    "id": "ch02-s26",
    "topic": "Chapter 2 — Application Layer",
    "week": "Week 10",
    "source": "ch02 Application layer-2.pptx",
    "slide": 26,
    "quiz": "QUIZ 3",
    "question": "Your typical web browsing scenario where a person using a web browser accesses a web page from a server on the Internet is a good example of a client-server application architecture.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch02 Application layer-2.pptx, slide 26) records this statement as: True."
  },
  {
    "id": "ch02-s27",
    "topic": "Chapter 2 — Application Layer",
    "week": "Week 10",
    "source": "ch02 Application layer-2.pptx",
    "slide": 27,
    "quiz": "QUIZ 4",
    "question": "Middleware is the software that sits between the application software on the client and the application software on the server.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch02 Application layer-2.pptx, slide 27) records this statement as: True."
  },
  {
    "id": "ch02-s28",
    "topic": "Chapter 2 — Application Layer",
    "week": "Week 10",
    "source": "ch02 Application layer-2.pptx",
    "slide": 28,
    "quiz": "QUIZ 5",
    "question": "In the three-tier architecture, the software on the client computer is responsible for the presentation logic, an application server is responsible for the application logic and a separate database server is responsible for the data access logic and data storage.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch02 Application layer-2.pptx, slide 28) records this statement as: True."
  },
  {
    "id": "ch02-s29",
    "topic": "Chapter 2 — Application Layer",
    "week": "Week 10",
    "source": "ch02 Application layer-2.pptx",
    "slide": 29,
    "quiz": "QUIZ 6",
    "question": "An n-tier architecture:",
    "options": [
      "is generally more “scalable” than a three-tiered architecture.",
      "is generally less “scalable” than a three-tiered architecture.",
      "uses only two sets of computers in which the clients are responsible for the application and presentation logic, and the servers are responsible for the data.",
      "uses exactly three sets of computers in which the client is responsible for presentation, one set of servers is responsible for data access logic and data storage, and application logic is spread across two or more different sets of servers.",
      "puts less load on a network than a two-tiered architecture because there tends to be less communication among the servers."
    ],
    "answer": 0,
    "explanation": "Source slide (ch02 Application layer-2.pptx, slide 29) records option A: \"is generally more “scalable” than a three-tiered architecture.\" as the correct answer."
  },
  {
    "id": "ch02-s37",
    "topic": "Chapter 2 — Application Layer",
    "week": "Week 10",
    "source": "ch02 Application layer-2.pptx",
    "slide": 37,
    "quiz": "QUIZ 7",
    "question": "The standard protocol for communication between a Web browser and a Web server is the web protocol.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch02 Application layer-2.pptx, slide 37) records this statement as: False."
  },
  {
    "id": "ch02-s38",
    "topic": "Chapter 2 — Application Layer",
    "week": "Week 10",
    "source": "ch02 Application layer-2.pptx",
    "slide": 38,
    "quiz": "QUIZ 8",
    "question": "A request header for an HTTP request starts with a command, such as GET, and ends with the HTTP version number that the browser understands.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch02 Application layer-2.pptx, slide 38) records this statement as: False."
  },
  {
    "id": "ch02-s39",
    "topic": "Chapter 2 — Application Layer",
    "week": "Week 10",
    "source": "ch02 Application layer-2.pptx",
    "slide": 39,
    "quiz": "QUIZ 9",
    "question": "All three parts (request line, request header, request body) of an HTTP request from a web browser to a web server are required when a request is made.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch02 Application layer-2.pptx, slide 39) records this statement as: False."
  },
  {
    "id": "ch03-s7",
    "topic": "Chapter 3 — Physical Layer",
    "week": "Week 2",
    "source": "ch03 Physical layer-1.pptx",
    "slide": 7,
    "quiz": "QUIZ 1",
    "question": "Data is physically transmitted from one computer or terminal to another in the ________ layer.",
    "options": [
      "physical",
      "transport",
      "application",
      "terminal",
      "data link"
    ],
    "answer": 0,
    "explanation": "Source slide (ch03 Physical layer-1.pptx, slide 7) records option A: \"physical\" as the correct answer."
  },
  {
    "id": "ch03-s16",
    "topic": "Chapter 3 — Physical Layer",
    "week": "Week 2",
    "source": "ch03 Physical layer-1.pptx",
    "slide": 16,
    "quiz": "QUIZ 2",
    "question": "A(n) __________ circuit is another name for a multipoint configuration.",
    "options": [
      "analog",
      "dedicated",
      "point-to-point",
      "shared",
      "simplex"
    ],
    "answer": 3,
    "explanation": "Source slide (ch03 Physical layer-1.pptx, slide 16) records option D: \"shared\" as the correct answer."
  },
  {
    "id": "ch03-s27",
    "topic": "Chapter 3 — Physical Layer",
    "week": "Week 2",
    "source": "ch03 Physical layer-1.pptx",
    "slide": 27,
    "quiz": "QUIZ 3",
    "question": "The two basic types of media are:",
    "options": [
      "statistical and frequency",
      "guided and wireless (radiated)",
      "local and wide area",
      "attenuator and Gaussian",
      "duplexed and non-duplexed"
    ],
    "answer": 1,
    "explanation": "Source slide (ch03 Physical layer-1.pptx, slide 27) records option B: \"guided and wireless (radiated)\" as the correct answer."
  },
  {
    "id": "ch03-s28",
    "topic": "Chapter 3 — Physical Layer",
    "week": "Week 2",
    "source": "ch03 Physical layer-1.pptx",
    "slide": 28,
    "quiz": "QUIZ 4",
    "question": "Which of the following would be considered a type of wireless media?",
    "options": [
      "unshielded twisted pair",
      "shielded twisted pair",
      "coaxial cable",
      "microwave",
      "fiber optics"
    ],
    "answer": 3,
    "explanation": "Source slide (ch03 Physical layer-1.pptx, slide 28) records option D: \"microwave\" as the correct answer."
  },
  {
    "id": "ch03-s29",
    "topic": "Chapter 3 — Physical Layer",
    "week": "Week 2",
    "source": "ch03 Physical layer-1.pptx",
    "slide": 29,
    "quiz": "QUIZ 5",
    "question": "Which of the following media can best withstand harsh environmental conditions?",
    "options": [
      "shielded twisted pair",
      "unshielded twisted pair",
      "Cat 5 twisted pair",
      "coaxial cable",
      "fiber optic cable"
    ],
    "answer": 4,
    "explanation": "Source slide (ch03 Physical layer-1.pptx, slide 29) records option E: \"fiber optic cable\" as the correct answer."
  },
  {
    "id": "ch04-s15",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 15,
    "quiz": "QUIZ 1",
    "question": "As part of the five-layer network model used in this textbook, the data link layer sits directly between:",
    "options": [
      "the physical and the application layers",
      "the network and the application layers",
      "the network and transport layers",
      "the physical and the application layers",
      "the physical and the network layers."
    ],
    "answer": 4,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 15) records option E: \"the physical and the network layers.\" as the correct answer."
  },
  {
    "id": "ch04-s16",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 16,
    "quiz": "QUIZ 2",
    "question": "Which of the following is true with respect to the data link layer?",
    "options": [
      "It accepts streams of bits from the application layer.",
      "It is responsible for encoding the bit-stream as a series of electronic voltages.",
      "It performs error detection.",
      "It performs routing functions.",
      "It organizes data from the physical layer and passes these coherent messages directly to the application layer."
    ],
    "answer": 2,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 16) records option C: \"It performs error detection.\" as the correct answer."
  },
  {
    "id": "ch04-s17",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 17,
    "quiz": "QUIZ 3",
    "question": "____________ is not a function of a data link protocol.",
    "options": [
      "Media access control",
      "Message delineation",
      "Amplitude shift keying",
      "Indicating when a message starts and stops",
      "Error control"
    ],
    "answer": 2,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 17) records option C: \"Amplitude shift keying\" as the correct answer."
  },
  {
    "id": "ch04-s18",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 18,
    "quiz": "QUIZ 4",
    "question": "In general, controlled approaches:",
    "options": [
      "work better than contention approaches for small networks that have low usage.",
      "work better than contention approaches for large networks that have high usage.",
      "work better than contention approaches for all sizes of networks.",
      "do not require a host, server, or active monitor to assign media access control.",
      "have many collisions."
    ],
    "answer": 1,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 18) records option B: \"work better than contention approaches for large networks that have high usage.\" as the correct answer."
  },
  {
    "id": "ch04-s19",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 19,
    "quiz": "QUIZ 5",
    "question": "The two sublayers of the data link layer consist of the media access control sublayer and the________.",
    "options": [
      "logical link control sublayer",
      "network control sublayer",
      "session sublayer",
      "physical sublayer",
      "transport sublayer"
    ],
    "answer": 0,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 19) records option A: \"logical link control sublayer\" as the correct answer."
  },
  {
    "id": "ch04-s27",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 27,
    "quiz": "QUIZ 6",
    "question": "Which of the following media is least susceptible to noise?",
    "options": [
      "fiber optic cable",
      "coaxial cable",
      "twisted pair",
      "unshielded twisted pair",
      "shielded twisted pair"
    ],
    "answer": 0,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 27) records option A: \"fiber optic cable\" as the correct answer."
  },
  {
    "id": "ch04-s28",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 28,
    "quiz": "QUIZ 7",
    "question": "The primary source of error in data communications is:",
    "options": [
      "echoes.",
      "intermodulation noise.",
      "spikes.",
      "attenuation.",
      "cross-talk."
    ],
    "answer": 2,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 28) records option C: \"spikes.\" as the correct answer."
  },
  {
    "id": "ch04-s29",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 29,
    "quiz": "QUIZ 8",
    "question": "__________can obliterate a group of bits, causing a burst error.",
    "options": [
      "Cross-talk",
      "Attenuation",
      "Impulse noise",
      "Intermodulation noise",
      "Gray noise"
    ],
    "answer": 2,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 29) records option C: \"Impulse noise\" as the correct answer."
  },
  {
    "id": "ch04-s30",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 30,
    "quiz": "QUIZ 9",
    "question": "Cross-talk:",
    "options": [
      "occurs when one circuit picks up signals in another.",
      "is always bothersome because it has a high signal strength.",
      "decreases with increased proximity of two wires.",
      "decreases during wet or damp weather.",
      "increases with lower frequency signals."
    ],
    "answer": 0,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 30) records option A: \"occurs when one circuit picks up signals in another.\" as the correct answer."
  },
  {
    "id": "ch04-s31",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 31,
    "quiz": "QUIZ 10",
    "question": "The loss of power a signal suffers as it travels from the transmitting computer to a receiving computer is _____.",
    "options": [
      "white noise",
      "spiking",
      "attenuation",
      "intermodulation noise",
      "echo"
    ],
    "answer": 2,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 31) records option C: \"attenuation\" as the correct answer."
  },
  {
    "id": "ch04-s32",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 32,
    "quiz": "QUIZ 11",
    "question": "_____________ is an effective way to prevent impulse noise, cross talk, and intermodulation noise.",
    "options": [
      "Shielding wires",
      "Adding fluorescent lights",
      "Adding repeaters to a circuit",
      "Adding amplifiers to a circuit",
      "Shorting a circuit"
    ],
    "answer": 0,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 32) records option A: \"Shielding wires\" as the correct answer."
  },
  {
    "id": "ch04-s33",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 33,
    "quiz": "QUIZ 12",
    "question": "_____________ is an effective way to prevent attenuation.",
    "options": [
      "Shielding wires",
      "Adding fluorescent lights",
      "Adding repeaters or amplifiers to a circuit",
      "Changing multiplexing techniques",
      "Shorting a circuit"
    ],
    "answer": 2,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 33) records option C: \"Adding repeaters or amplifiers to a circuit\" as the correct answer."
  },
  {
    "id": "ch04-s49",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 49,
    "quiz": "QUIZ 13",
    "question": "Asynchronous transmission:",
    "options": [
      "is used to transmit each character simultaneously with all other characters",
      "has a pre-determined, fixed time between sending characters",
      "is typically used on multipoint half duplex circuits",
      "uses a continuous series of start bits as an idle signal",
      "each character is transmitted independently of all other characters"
    ],
    "answer": 4,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 49) records option E: \"each character is transmitted independently of all other characters\" as the correct answer."
  },
  {
    "id": "ch04-s50",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 50,
    "quiz": "QUIZ 14",
    "question": "Which of the following is not a type of synchronous protocol?",
    "options": [
      "SDLC",
      "VT100",
      "HDLC",
      "Ethernet",
      "PPP"
    ],
    "answer": 1,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 50) records option B: \"VT100\" as the correct answer."
  },
  {
    "id": "ch04-s51",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 51,
    "quiz": "QUIZ 15",
    "question": "Which of the following is true about the data link protocol, SDLC:",
    "options": [
      "It is a client-server protocol developed by Compaq in 1996.",
      "It transmits each character independently of one another and includes start and stop bits for each character sent.",
      "It uses a special bit pattern called a flag at the beginning and end of every frame (or packet).",
      "It uses a contention media access control protocol and is used in most LANs today.",
      "It does not have any error detection capabilities."
    ],
    "answer": 2,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 51) records option C: \"It uses a special bit pattern called a flag at the beginning and end of every frame (or packet).\" as the correct answer."
  },
  {
    "id": "ch04-s52",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 52,
    "quiz": "QUIZ 16",
    "question": "Which of the following is true about the data link protocol, Ethernet (IEEE 802.3)?",
    "options": [
      "It is not very popular.",
      "It is a bit-oriented protocol.",
      "it uses block check characters for error detection.",
      "Newer version permits jumbo frames.",
      "It uses parity bits for error detection."
    ],
    "answer": 3,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 52) records option D: \"Newer version permits jumbo frames.\" as the correct answer."
  },
  {
    "id": "ch04-s56",
    "topic": "Chapter 4 — Data Link Layer",
    "week": "Week 3",
    "source": "ch04 Link layer-2.pptx",
    "slide": 56,
    "quiz": "QUIZ 17",
    "question": "__________ is a software-enabled technique that can change the hardcoded MAC address to any MAC address and thus overcome MAC address filtering.",
    "options": [
      "MAC address spoofing",
      "MAC address engaging",
      "Ethernet address regeneration",
      "Address regeneration",
      "MAC address cheesing"
    ],
    "answer": 0,
    "explanation": "Source slide (ch04 Link layer-2.pptx, slide 56) records option A: \"MAC address spoofing\" as the correct answer."
  },
  {
    "id": "ch05-s5",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 1-2-1.pptx",
    "slide": 5,
    "quiz": "QUIZ 1",
    "question": "The network layer sits directly between the application layer and the data link layer in the Internet five-layer network model.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch05 Transport-Network Part 1-2-1.pptx, slide 5) records this statement as: False."
  },
  {
    "id": "ch05-s6",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 1-2-1.pptx",
    "slide": 6,
    "quiz": "QUIZ 2",
    "question": "TCP/IP is a data link protocol that is used on the Internet.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch05 Transport-Network Part 1-2-1.pptx, slide 6) records this statement as: False."
  },
  {
    "id": "ch05-s7",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 1-2-1.pptx",
    "slide": 7,
    "quiz": "QUIZ 3",
    "question": "The network layer provides guaranteed end-to-end delivery of the message .",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch05 Transport-Network Part 1-2-1.pptx, slide 7) records this statement as: False."
  },
  {
    "id": "ch05-s17",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 1-2-1.pptx",
    "slide": 17,
    "quiz": "QUIZ 4",
    "question": "The ____________ layer links the application layer with the network layer is responsible for end-to-end delivery of messages.",
    "options": [
      "physical",
      "transport",
      "session",
      "presentation",
      "data link"
    ],
    "answer": 1,
    "explanation": "Source slide (ch05 Transport-Network Part 1-2-1.pptx, slide 17) records option B: \"transport\" as the correct answer."
  },
  {
    "id": "ch05-s18",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 1-2-1.pptx",
    "slide": 18,
    "quiz": "QUIZ 5",
    "question": "__________ is not an important function of the transport layer.",
    "options": [
      "End-to-end delivery of the message",
      "Taking messages from the application layer",
      "Routing",
      "Breaking long messages into smaller segments",
      "Interfacing with the network layer"
    ],
    "answer": 2,
    "explanation": "Source slide (ch05 Transport-Network Part 1-2-1.pptx, slide 18) records option C: \"Routing\" as the correct answer."
  },
  {
    "id": "ch05-s19",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 1-2-1.pptx",
    "slide": 19,
    "quiz": "QUIZ 6",
    "question": "Transmission Control Protocol/Internet Protocol was developed for ________ in 1974.",
    "options": [
      "ARPANET",
      "IBM",
      "Hewlett-Packard",
      "Kennesaw State University",
      "Xerox"
    ],
    "answer": 0,
    "explanation": "Source slide (ch05 Transport-Network Part 1-2-1.pptx, slide 19) records option A: \"ARPANET\" as the correct answer."
  },
  {
    "id": "ch05-s20",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 1-2-1.pptx",
    "slide": 20,
    "quiz": "QUIZ 7",
    "question": "A typical TCP segment has a _______ header of control information.",
    "options": [
      "32-bit",
      "64-bit",
      "120-byte",
      "192-bit",
      "32-byte"
    ],
    "answer": 3,
    "explanation": "Source slide (ch05 Transport-Network Part 1-2-1.pptx, slide 20) records option D: \"192-bit\" as the correct answer."
  },
  {
    "id": "ch05-s31",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 1-2-1.pptx",
    "slide": 31,
    "quiz": "QUIZ 8",
    "question": "Stop-and-wait ARQ uses ___________ type of data flow.",
    "options": [
      "full simplex",
      "half complex",
      "full duplex",
      "half duplex",
      "full complex"
    ],
    "answer": 3,
    "explanation": "Source slide (ch05 Transport-Network Part 1-2-1.pptx, slide 31) records option D: \"half duplex\" as the correct answer."
  },
  {
    "id": "ch05-s32",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 1-2-1.pptx",
    "slide": 32,
    "quiz": "QUIZ 9",
    "question": "What are the two types of ARQ?",
    "options": [
      "Stop-and-wait and continuous",
      "Half and full duplex",
      "Continuous and intermittent",
      "Selective and continuous",
      "Stop-and-wait and selective"
    ],
    "answer": 0,
    "explanation": "Source slide (ch05 Transport-Network Part 1-2-1.pptx, slide 32) records option A: \"Stop-and-wait and continuous\" as the correct answer."
  },
  {
    "id": "ch05-s34",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 2-4-1 (1).pptx",
    "slide": 34,
    "quiz": "QUIZ 1",
    "question": "The network layer provides guaranteed end-to-end delivery of the message.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch05 Transport-Network Part 2-4-1 (1).pptx, slide 34) records this statement as: False."
  },
  {
    "id": "ch05-s35",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 2-4-1 (1).pptx",
    "slide": 35,
    "quiz": "QUIZ 2",
    "question": "A subnet mask of 255.255.255.0 means that all computers with only the same first two bytes in their IPv4 addresses are on the same subnet",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch05 Transport-Network Part 2-4-1 (1).pptx, slide 35) records this statement as: False."
  },
  {
    "id": "ch05-s36",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 2-4-1 (1).pptx",
    "slide": 36,
    "quiz": "QUIZ 3",
    "question": "A subnet mask of 255.255.0.0, the first two bytes indicate the same subnet.(TRUE/FALSE)",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch05 Transport-Network Part 2-4-1 (1).pptx, slide 36) records this statement as: True."
  },
  {
    "id": "ch05-s37",
    "topic": "Chapter 5 — Network & Transport Layers",
    "week": "Weeks 4–5",
    "source": "ch05 Transport-Network Part 2-4-1 (1).pptx",
    "slide": 37,
    "quiz": "QUIZ 4",
    "question": "UDP is not commonly used for:",
    "options": [
      "network management control messages",
      "RIP messages",
      "DHCP addressing messages",
      "HTTP requests",
      "DNS requests"
    ],
    "answer": 3,
    "explanation": "Source slide (ch05 Transport-Network Part 2-4-1 (1).pptx, slide 37) records option D: \"HTTP requests\" as the correct answer."
  },
  {
    "id": "ch06-s14",
    "topic": "Chapter 6 — Network Design",
    "week": "Week 7",
    "source": "ch06 Network design-5.pptx",
    "slide": 14,
    "quiz": "QUIZ 1",
    "question": "The campus backbone (or core layer) is the network architecture component responsible for providing end user access to the network.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch06 Network design-5.pptx, slide 14) records this statement as: False."
  },
  {
    "id": "ch06-s15",
    "topic": "Chapter 6 — Network Design",
    "week": "Week 7",
    "source": "ch06 Network design-5.pptx",
    "slide": 15,
    "quiz": "QUIZ 2",
    "question": "Today, many organizations design networks using the building-block approach",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch06 Network design-5.pptx, slide 15) records this statement as: True."
  },
  {
    "id": "ch06-s16",
    "topic": "Chapter 6 — Network Design",
    "week": "Week 7",
    "source": "ch06 Network design-5.pptx",
    "slide": 16,
    "quiz": "QUIZ 3",
    "question": "Nowadays, most organizations use a simpler approach to network design called the ___________ approach.",
    "options": [
      "building-block",
      "frame definition",
      "prototype",
      "systems development life cycle",
      "guided network"
    ],
    "answer": 0,
    "explanation": "Source slide (ch06 Network design-5.pptx, slide 16) records option A: \"building-block\" as the correct answer."
  },
  {
    "id": "ch06-s24",
    "topic": "Chapter 6 — Network Design",
    "week": "Week 7",
    "source": "ch06 Network design-5.pptx",
    "slide": 24,
    "quiz": "QUIZ 4",
    "question": "Which of the following is not a current trend that is making the traditional design approach less appropriate for today’s networks?",
    "options": [
      "The underlying technology of networking devices is changing very rapidly",
      "The underlying technology of client and server devices is changing very rapidly",
      "The underlying technology of circuits is changing very rapidly",
      "Growth in network traffic is very high",
      "The most expensive part of any network is the hardware"
    ],
    "answer": 4,
    "explanation": "Source slide (ch06 Network design-5.pptx, slide 24) records option E: \"The most expensive part of any network is the hardware\" as the correct answer."
  },
  {
    "id": "ch06-s25",
    "topic": "Chapter 6 — Network Design",
    "week": "Week 7",
    "source": "ch06 Network design-5.pptx",
    "slide": 25,
    "quiz": "QUIZ 5",
    "question": "In needs analysis:",
    "options": [
      "the costs of different physical network design alternatives are assessed",
      "the goal is to understand what users and applications the network will support",
      "the geographic scope is not an important consideration",
      "a baseline of current operations is not important",
      "the rate of growth of network traffic is not an issue"
    ],
    "answer": 1,
    "explanation": "Source slide (ch06 Network design-5.pptx, slide 25) records option B: \"the goal is to understand what users and applications the network will support\" as the correct answer."
  },
  {
    "id": "ch06-s31",
    "topic": "Chapter 6 — Network Design",
    "week": "Week 7",
    "source": "ch06 Network design-5.pptx",
    "slide": 31,
    "quiz": "QUIZ 6",
    "question": "In the __________ step of the building-block process to network design, the network designer attempts to understand the fundamental current and future network needs of the various users, departments, and applications.",
    "options": [
      "technology design",
      "needs analysis",
      "narrow and deep analysis",
      "cost assessment",
      "distribution layering"
    ],
    "answer": 1,
    "explanation": "Source slide (ch06 Network design-5.pptx, slide 31) records option B: \"needs analysis\" as the correct answer."
  },
  {
    "id": "ch06-s32",
    "topic": "Chapter 6 — Network Design",
    "week": "Week 7",
    "source": "ch06 Network design-5.pptx",
    "slide": 32,
    "quiz": "QUIZ 7",
    "question": "In the __________ step of the building-block process to network design, the network designer examines the available technologies and assesses which options will meet the users’ needs.",
    "options": [
      "technology design",
      "needs analysis",
      "narrow and deep analysis",
      "cost assessment",
      "distribution layering"
    ],
    "answer": 0,
    "explanation": "Source slide (ch06 Network design-5.pptx, slide 32) records option A: \"technology design\" as the correct answer."
  },
  {
    "id": "ch06-s39",
    "topic": "Chapter 6 — Network Design",
    "week": "Week 7",
    "source": "ch06 Network design-5.pptx",
    "slide": 39,
    "quiz": "QUIZ 8",
    "question": "In the __________ step of the building-block process to network design, the network designer considers the relative cost of the technologies.",
    "options": [
      "technology design",
      "needs analysis",
      "narrow and deep analysis",
      "cost assessment",
      "distribution layering"
    ],
    "answer": 3,
    "explanation": "Source slide (ch06 Network design-5.pptx, slide 39) records option D: \"cost assessment\" as the correct answer."
  },
  {
    "id": "ch07-s11",
    "topic": "Chapter 7 — Wired and Wireless LANs",
    "week": "Week 6",
    "source": "ch07 Wired and Wireless LANs-1-1.pptx",
    "slide": 11,
    "quiz": "QUIZ 1",
    "question": "The Network Interface Card (NIC) permits a computer to be physically connected to a network’s cable. .",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch07 Wired and Wireless LANs-1-1.pptx, slide 11) records this statement as: True."
  },
  {
    "id": "ch07-s12",
    "topic": "Chapter 7 — Wired and Wireless LANs",
    "week": "Week 6",
    "source": "ch07 Wired and Wireless LANs-1-1.pptx",
    "slide": 12,
    "quiz": "QUIZ 2",
    "question": "Many network hubs and switches incorporate repeaters to regenerate signals so that attenuation of the signal does not occur.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch07 Wired and Wireless LANs-1-1.pptx, slide 12) records this statement as: True."
  },
  {
    "id": "ch07-s18",
    "topic": "Chapter 7 — Wired and Wireless LANs",
    "week": "Week 6",
    "source": "ch07 Wired and Wireless LANs-1-1.pptx",
    "slide": 18,
    "quiz": "QUIZ 3",
    "question": "The NOS software for the server computer provides the physical, data link, and network layer functions. .",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch07 Wired and Wireless LANs-1-1.pptx, slide 18) records this statement as: False."
  },
  {
    "id": "ch07-s19",
    "topic": "Chapter 7 — Wired and Wireless LANs",
    "week": "Week 6",
    "source": "ch07 Wired and Wireless LANs-1-1.pptx",
    "slide": 19,
    "quiz": "QUIZ 4",
    "question": "Network profile refers to what resources on each server are available on the network for use by other computers and which devices or people are allowed access on the network.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch07 Wired and Wireless LANs-1-1.pptx, slide 19) records this statement as: True."
  },
  {
    "id": "ch07-s27",
    "topic": "Chapter 7 — Wired and Wireless LANs",
    "week": "Week 6",
    "source": "ch07 Wired and Wireless LANs-1-1.pptx",
    "slide": 27,
    "quiz": "QUIZ 5",
    "question": "A switch always broadcasts all the packets it receives to all the computers that are connected to the switch. .",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch07 Wired and Wireless LANs-1-1.pptx, slide 27) records this statement as: False."
  },
  {
    "id": "ch07-s28",
    "topic": "Chapter 7 — Wired and Wireless LANs",
    "week": "Week 6",
    "source": "ch07 Wired and Wireless LANs-1-1.pptx",
    "slide": 28,
    "quiz": "QUIZ 6",
    "question": "A forwarding table tells a switch which port it should send out a packet to get to the destination computer.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch07 Wired and Wireless LANs-1-1.pptx, slide 28) records this statement as: True."
  },
  {
    "id": "ch08-s22",
    "topic": "Chapter 8 — Backbone Networks",
    "week": "Week 7",
    "source": "ch08 Backbone network-1-1.pptx",
    "slide": 22,
    "quiz": "QUIZ 1",
    "question": "A backbone network is a high-speed network that connects many networks.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch08 Backbone network-1-1.pptx, slide 22) records this statement as: True."
  },
  {
    "id": "ch08-s23",
    "topic": "Chapter 8 — Backbone Networks",
    "week": "Week 7",
    "source": "ch08 Backbone network-1-1.pptx",
    "slide": 23,
    "quiz": "QUIZ 2",
    "question": "A backbone network that connects many backbone networks spanning several buildings at a single location is often called an Internet backbone.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch08 Backbone network-1-1.pptx, slide 23) records this statement as: False."
  },
  {
    "id": "ch08-s24",
    "topic": "Chapter 8 — Backbone Networks",
    "week": "Week 7",
    "source": "ch08 Backbone network-1-1.pptx",
    "slide": 24,
    "quiz": "QUIZ 3",
    "question": "One basic component of a backbone network is the hardware device that connects other networks to the backbone.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch08 Backbone network-1-1.pptx, slide 24) records this statement as: True."
  },
  {
    "id": "ch08-s25",
    "topic": "Chapter 8 — Backbone Networks",
    "week": "Week 7",
    "source": "ch08 Backbone network-1-1.pptx",
    "slide": 25,
    "quiz": "QUIZ 4",
    "question": "Routers use network layer address to forward packets between network segments.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch08 Backbone network-1-1.pptx, slide 25) records this statement as: True."
  },
  {
    "id": "ch08-s26",
    "topic": "Chapter 8 — Backbone Networks",
    "week": "Week 7",
    "source": "ch08 Backbone network-1-1.pptx",
    "slide": 26,
    "quiz": "QUIZ 5",
    "question": "Routed backbones use switches that move packets based on data link layer addresses.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch08 Backbone network-1-1.pptx, slide 26) records this statement as: False."
  },
  {
    "id": "ch08-s27",
    "topic": "Chapter 8 — Backbone Networks",
    "week": "Week 7",
    "source": "ch08 Backbone network-1-1.pptx",
    "slide": 27,
    "quiz": "QUIZ 6",
    "question": "Which of the following is not true about Layer-3 switches?",
    "options": [
      "They switch messages based on their IP address.",
      "They can be used in place of routers.",
      "They function faster than routers.",
      "They have more simultaneously active ports than routers.",
      "They can only switch messages based on their data link layer addresses."
    ],
    "answer": 4,
    "explanation": "Source slide (ch08 Backbone network-1-1.pptx, slide 27) records option E: \"They can only switch messages based on their data link layer addresses.\" as the correct answer."
  },
  {
    "id": "ch10-s21",
    "topic": "Chapter 10 — Internet Architecture & ISPs",
    "week": "Week 8",
    "source": "ch10 Internet-2.pptx",
    "slide": 21,
    "quiz": "QUIZ 1",
    "question": "The Internet is flat in structure.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch10 Internet-2.pptx, slide 21) records this statement as: False."
  },
  {
    "id": "ch10-s22",
    "topic": "Chapter 10 — Internet Architecture & ISPs",
    "week": "Week 8",
    "source": "ch10 Internet-2.pptx",
    "slide": 22,
    "quiz": "QUIZ 2",
    "question": "Tier 1 service providers connect together and exchange data at IXPs..",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch10 Internet-2.pptx, slide 22) records this statement as: True."
  },
  {
    "id": "ch10-s23",
    "topic": "Chapter 10 — Internet Architecture & ISPs",
    "week": "Week 8",
    "source": "ch10 Internet-2.pptx",
    "slide": 23,
    "quiz": "QUIZ 3",
    "question": "A point of presence is the place at which the ISP provides services to its customers.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch10 Internet-2.pptx, slide 23) records this statement as: True."
  },
  {
    "id": "ch10-s24",
    "topic": "Chapter 10 — Internet Architecture & ISPs",
    "week": "Week 8",
    "source": "ch10 Internet-2.pptx",
    "slide": 24,
    "quiz": "QUIZ 4",
    "question": "Technologies that provide higher-speed communications than traditional modems (e.g., DSL) are known as ______________ technologies.",
    "options": [
      "middleband",
      "narrowband",
      "rubberband",
      "metalband",
      "broadband"
    ],
    "answer": 4,
    "explanation": "Source slide (ch10 Internet-2.pptx, slide 24) records option E: \"broadband\" as the correct answer."
  },
  {
    "id": "ch10-s25",
    "topic": "Chapter 10 — Internet Architecture & ISPs",
    "week": "Week 8",
    "source": "ch10 Internet-2.pptx",
    "slide": 25,
    "quiz": "QUIZ 5",
    "question": "At the DSL local carrier’s office, the __________ demultiplexes the data streams and converts them into digital data.",
    "options": [
      "DSLAM",
      "GrandSlam",
      "WAP",
      "line splitter",
      "X.25 PAD"
    ],
    "answer": 0,
    "explanation": "Source slide (ch10 Internet-2.pptx, slide 25) records option A: \"DSLAM\" as the correct answer."
  },
  {
    "id": "ch10-s26",
    "topic": "Chapter 10 — Internet Architecture & ISPs",
    "week": "Week 8",
    "source": "ch10 Internet-2.pptx",
    "slide": 26,
    "quiz": "QUIZ 6",
    "question": "Fiber to the Home uses _____.",
    "options": [
      "frequency division multiplexing",
      "wavelength division multiplexing",
      "time division multiplexing",
      "statistical time division multiplexing",
      "all of the above."
    ],
    "answer": 1,
    "explanation": "Source slide (ch10 Internet-2.pptx, slide 26) records option B: \"wavelength division multiplexing\" as the correct answer."
  },
  {
    "id": "ch10-s31",
    "topic": "Chapter 10 — Internet Architecture & ISPs",
    "week": "Week 8",
    "source": "ch10 Internet-2.pptx",
    "slide": 31,
    "quiz": "QUIZ 7",
    "question": "The Internet Engineering Steering Group provides strategic architectural oversight for the Internet..",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch10 Internet-2.pptx, slide 31) records this statement as: False."
  },
  {
    "id": "ch11-s8",
    "topic": "Chapter 11 — Network Security",
    "week": "Week 11",
    "source": "ch11 Network security-1.pptx",
    "slide": 8,
    "quiz": "QUIZ 1",
    "question": "Security on a network not only means being able to prevent a hacker from breaking into your computer but also includes being able to recover from temporary service problems or from natural disasters. TRUE/FALSE)?",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch11 Network security-1.pptx, slide 8) records this statement as: True."
  },
  {
    "id": "ch11-s9",
    "topic": "Chapter 11 — Network Security",
    "week": "Week 11",
    "source": "ch11 Network security-1.pptx",
    "slide": 9,
    "quiz": "QUIZ 2",
    "question": "The rise of the Internet has increased significantly the potential vulnerability of an organization’s assets.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch11 Network security-1.pptx, slide 9) records this statement as: True."
  },
  {
    "id": "ch11-s10",
    "topic": "Chapter 11 — Network Security",
    "week": "Week 11",
    "source": "ch11 Network security-1.pptx",
    "slide": 10,
    "quiz": "QUIZ 3",
    "question": "Maintaining data integrity is not a primary goal of security",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Source slide (ch11 Network security-1.pptx, slide 10) records this statement as: False."
  },
  {
    "id": "ch11-s11",
    "topic": "Chapter 11 — Network Security",
    "week": "Week 11",
    "source": "ch11 Network security-1.pptx",
    "slide": 11,
    "quiz": "QUIZ 4",
    "question": "Business continuity planning refers primarily to ensuring availability, with some aspects of data integrity.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch11 Network security-1.pptx, slide 11) records this statement as: True."
  },
  {
    "id": "ch11-s12",
    "topic": "Chapter 11 — Network Security",
    "week": "Week 11",
    "source": "ch11 Network security-1.pptx",
    "slide": 12,
    "quiz": "QUIZ 5",
    "question": "Which of the following is not one of the major categories (or sub-categories) into which network security threats can be placed?",
    "options": [
      "disruption",
      "destruction",
      "controlled chaos",
      "intrusion",
      "disaster"
    ],
    "answer": 2,
    "explanation": "Source slide (ch11 Network security-1.pptx, slide 12) records option C: \"controlled chaos\" as the correct answer."
  },
  {
    "id": "ch11-s30",
    "topic": "Chapter 11 — Network Security",
    "week": "Week 11",
    "source": "ch11 Network security-1.pptx",
    "slide": 30,
    "quiz": "QUIZ 6",
    "question": "The key principle in preventing disruption, destruction and disaster is ___________.",
    "options": [
      "redundancy",
      "control spreadsheet",
      "prevention controls",
      "anti-virus software"
    ],
    "answer": 0,
    "explanation": "Source slide (ch11 Network security-1.pptx, slide 30) records option A: \"redundancy\" as the correct answer."
  },
  {
    "id": "ch11-s31",
    "topic": "Chapter 11 — Network Security",
    "week": "Week 11",
    "source": "ch11 Network security-1.pptx",
    "slide": 31,
    "quiz": "QUIZ 7",
    "question": "A hacker gaining access to organizational data files and resources is an example of a(n) ____________ threat.",
    "options": [
      "disruptive",
      "controlled chaos",
      "destruction",
      "intrusion",
      "disaster"
    ],
    "answer": 3,
    "explanation": "Source slide (ch11 Network security-1.pptx, slide 31) records option D: \"intrusion\" as the correct answer."
  },
  {
    "id": "ch12-s14",
    "topic": "Chapter 12 — Network Management",
    "week": "Week 8",
    "source": "ch12 Network management-1.pptx",
    "slide": 14,
    "quiz": "QUIZ 1",
    "question": "Network management is the process of operating, monitoring, and controlling the network to ensure it works as intended and provides value to its users.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch12 Network management-1.pptx, slide 14) records this statement as: True."
  },
  {
    "id": "ch12-s15",
    "topic": "Chapter 12 — Network Management",
    "week": "Week 8",
    "source": "ch12 Network management-1.pptx",
    "slide": 15,
    "quiz": "QUIZ 2",
    "question": "One common configuration activity is updating the software on the client computers in the network.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch12 Network management-1.pptx, slide 15) records this statement as: True."
  },
  {
    "id": "ch12-s16",
    "topic": "Chapter 12 — Network Management",
    "week": "Week 8",
    "source": "ch12 Network management-1.pptx",
    "slide": 16,
    "quiz": "QUIZ 3",
    "question": "Management reports can be helpful in determining network availability statistics.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch12 Network management-1.pptx, slide 16) records this statement as: True."
  },
  {
    "id": "ch12-s17",
    "topic": "Chapter 12 — Network Management",
    "week": "Week 8",
    "source": "ch12 Network management-1.pptx",
    "slide": 17,
    "quiz": "QUIZ 4",
    "question": "Which of the following is not a basic function of a network manager?",
    "options": [
      "Web surfing to shop on eBay",
      "cost management",
      "performance and fault management",
      "configuration management",
      "end user support"
    ],
    "answer": 0,
    "explanation": "Source slide (ch12 Network management-1.pptx, slide 17) records option A: \"Web surfing to shop on eBay\" as the correct answer."
  },
  {
    "id": "ch12-s32",
    "topic": "Chapter 12 — Network Management",
    "week": "Week 8",
    "source": "ch12 Network management-1.pptx",
    "slide": 32,
    "quiz": "QUIZ 5",
    "question": "Performance management means ensuring the network is operating as efficiently as possible. TRUE/FALSE)?",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Source slide (ch12 Network management-1.pptx, slide 32) records this statement as: True."
  },
  {
    "id": "ch12-s33",
    "topic": "Chapter 12 — Network Management",
    "week": "Week 8",
    "source": "ch12 Network management-1.pptx",
    "slide": 33,
    "quiz": "QUIZ 6",
    "question": "___________ refers to managing and documenting the network’s hardware and software configuration.",
    "options": [
      "Visioning",
      "Troubleshooting",
      "Firefighting",
      "Configuration management",
      "Implementation"
    ],
    "answer": 3,
    "explanation": "Source slide (ch12 Network management-1.pptx, slide 33) records option D: \"Configuration management\" as the correct answer."
  },
  {
    "id": "ch12-s34",
    "topic": "Chapter 12 — Network Management",
    "week": "Week 8",
    "source": "ch12 Network management-1.pptx",
    "slide": 34,
    "quiz": "QUIZ 7",
    "question": "_____________ are used by many large and small organizations to monitor and control their networks today.",
    "options": [
      "Network management software packages",
      "Firefighter packages",
      "Fault creating packages",
      "Fault toleraters",
      "NICs"
    ],
    "answer": 0,
    "explanation": "Source slide (ch12 Network management-1.pptx, slide 34) records option A: \"Network management software packages\" as the correct answer."
  }
];
