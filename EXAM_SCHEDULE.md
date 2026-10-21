# COMP504 — 8-day exam schedule

**Exam: Wednesday 28 October 2026.** Plan runs Tue 20 Oct → Tue 27 Oct. Written for full
free days; each day is ~2 sessions of the [14-session plan](site/plan.html) plus drilling
and a lab. Videos per lesson: [VIDEO_GUIDE.md](VIDEO_GUIDE.md) — one per lesson, after the
reading. Method per session: **read → explain aloud → drill → one error-log row**
(`topic | my wrong answer | correct rule | how I will spot it next time`).

## What the revision deck says is coming

Source: [`2026 COMP504 _FINAL EXAM Revision.pptx`](../course-materials/sources/exam/2026%20COMP504%20_FINAL%20EXAM%20Revision.pptx).
Its admin slides are S1 2026 (17 June, 100 MCQ, 120 min, closed book, Canvas,
non-programmable calculator, 1 blank A4) — treat the **counts as weighting guidance, not
your format**. Confirm date, format and rules in Canvas.

| Chapter / week | Questions | Priority |
| --- | --- | --- |
| Ch7 Wired & wireless LANs (W6) | 15–20 | 1 |
| Ch5 Network + Transport (W4–5, W9) | 10–15 | 1 |
| Ch2 Application layer (W10) | 10–15 | 1 |
| Ch6 Network design (W7) | 5–10 | 2 |
| Ch8 Backbone networks (W7) | 5–10 | 2 |
| Ch9 Wide area networks (W10) | 5–10 | 2 |
| Ch10 Internet (W8) | 5–8 | 3 |
| Ch11 Network security (W11) | 5–8 | 3 |
| Ch1 Intro (W1) | 3–5 | 3 |
| Ch3 Physical layer (W2) | 3–5 | 3 |
| Ch4 Data link layer (W3) | 3–5 | 3 |
| Ch12 Network management (W8) | 3–5 | 3 |

Ch7 + Ch5 + Ch2 alone are 35–50 of 100 marks.

## The 8 days

| Day | Sessions | Read / drill | Lab (copy the `.pka` first) | Done when |
| --- | --- | --- | --- | --- |
| **Tue 20** | 1–2 | Lessons 1–2. OSI 7 vs TCP/IP 5, each layer's job + PDU + protocols. Draw PC→switch→router→server. | [Lab 1 — network & layers](LABS.md) | Recite all layers, PDUs, protocols aloud, no notes |
| **Wed 21** | 3–4 | Lessons 3–4. Media, duplex, attenuation, binary/hex; framing, MAC, ARP, source learning + flooding, parity/checksum/CRC, store-and-forward vs cut-through. | [Lab 2 — MAC & IP change](LABS.md) | Explain why Ethernet MAC changes per hop but IP does not; CRC vs TCP retransmission |
| **Thu 22** | 5–6 | Lessons 5–6. Subnet masks, /25–/30: network, broadcast, first/last usable. 20 subnets on paper. | Paper only — no Packet Tracer today | 10 subnet calcs correct, closed book, under 10 min |
| **Fri 23** | 7–8 | Lessons 7–8. VLSM largest-first, default gateway, routing, ICMP/ping, IPv6 compression; TCP vs UDP, DNS, HTTP, SMTP, 2/3/n-tier. | [Lab 3 — IOS + router config](LABS.md) · [Lab 5 — VLSM](LABS.md) | Solve `10.1.1.0/24` (47/28/11/5/2 hosts) before opening Packet Tracer |
| **Sat 24** | 9–10 | Lessons 9–10. Ch7 (cables, AP, LAN components, domain controller, switch-based Ethernet, forwarding table, switch modes, WLAN standards, CSMA/CD vs CSMA/CA) + Ch6 design + Ch8 backbone. | [Lab 4 — gateway failure](LABS.md) · optional wired/wireless lab | Ch7 slide quizzes ≥ 80%; isolate a failed ping in order |
| **Sun 25** | 11–12 | Lessons 11 + Ch9 WAN, Ch10 Internet, Ch11 security, Ch12 management. Then **all 85 slide questions**, closed book. | Optional VLAN exercise | Every miss + guess logged |
| **Mon 26** | 13–14 | Timed: 32 `PRACTICE.md` questions closed book (mark guesses). | [Lab 6 — timed practice final](LABS.md), closed book, 90–120 min | Scores + 3 weakest topics in `PROGRESS.md` |
| **Tue 27** | — | Error log only. Redo every miss, skim `REVIEWER.md`, re-read your own fault logs. **No new material.** | Re-run only the lab steps that failed | Readiness gate in `PROGRESS.md` ticked |

## Lab-based questions

The exam may draw on the labs, so for each lab be able to:

1. **Predict** — state the expected output (which addresses change, which ping works) before running it.
2. **Produce** — write the config from memory: hostname, banner, `enable secret`, interface
   `ip address`/`no shutdown`, SVI + `ip default-gateway`, `copy running-config startup-config`.
3. **Diagnose** — same-LAN → local gateway → remote gateway → remote host, one fault at a time.

Drill these cold: `show ip interface brief`, `show ip route`, `show vlan brief`,
`show interfaces trunk`, `show running-config` vs `show startup-config`, `ipconfig`, `ping`.

## If a day collapses

Floor: subnetting (lessons 5–6) + Ch7 slide quizzes. Never skip those two.

## Known gaps

- Canvas chapter quizzes are **not** in this kit and the deck says to review them — do them
  from Sun 25. Highest-value unknown.
- Week 9 has no recording; covered via `ch05 Transport-Network Part 2`, `Default Gateway`
  slide, Cisco Modules 8–13, and the VLSM resources (see `COVERAGE.md`).
- Source answers on some slides are dated/odd (e.g. the 192-bit TCP header claim) — see
  `SLIDE_QUIZ_NOTES.md` before memorising anything surprising.
