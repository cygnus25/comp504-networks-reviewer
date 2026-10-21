# COMP504 study hub

Start with the **[beginner study website](site/index.html)** (or its [Markdown reading version](BEGINNER_REVIEWER.md)). The offline site also has [interactive practice](site/practice.html), [85 numbered quizzes from the lecture slides](site/slide-questions.html), [guided labs](site/labs.html), a [14-session plan and progress backup](site/plan.html), a [searchable glossary](site/glossary.html), and a [week-by-week coverage map](site/coverage.html). Use the [compact reviewer](REVIEWER.md) for recall after reading. The [video guide](VIDEO_GUIDE.md) maps one or two verified YouTube explainers to each lesson. The [knowledge base](KNOWLEDGE_BASE.md) maps topics to the teacher's files and records gaps or corrections. Browse the [organised course-materials catalogue](../course-materials/README.md) for the grouped originals and Markdown text extractions.

For a portable copy, extract `COMP504_Offline_Study_Kit.zip` and open `START_HERE.html`. Keep the extracted `study` and `course-materials` folders together. No server, account, subscription, or internet connection is required for the site. Site progress is stored in your browser; use **Study plan & backup → Download progress backup** before moving to another computer or clearing browser data. The original `.pka` activities require Cisco Packet Tracer to run.

## How to use this when you are behind

1. **First reading:** Read website lessons 1–2. Explain the PC → switch → router → server picture aloud in your own words. Continue with lessons 3–5 and do labs 1–2.
2. **Build the core skills:** Read lessons 6–8. Work through the subnet examples on paper, then do labs 3–5.
3. **Cover the course breadth:** Read lessons 9–12 and try the linked Packet Tracer and design activities. Use the compact reviewer only after the ideas make sense.
4. **Diagnose and revisit:** Do questions 1–32 in `PRACTICE.md` without notes, then use the numbered [lecture slide question bank](site/slide-questions.html). Mark every guess, even if correct. Redo weak sections and the matching lab.
5. **Final pass:** Attempt the supplied practice final lab, then redo the Canvas chapter quizzes if available, timed and closed book. Use a single error log: `topic | my wrong answer | correct rule | how I will recognize it next time`.

Use **sessions**, not a rigid calendar. At first, a session can be 30–60 minutes: read one lesson, try its check-yourself question, and explain the example aloud. Later, use 60–90 minute sessions with recall, practice, and an error log. If time is tight, prioritize lessons 1–2, 4–8, and labs 1–5 before doing the shorter survey topics.

## Source and exam scope

The teacher's [`2026 COMP504 _FINAL EXAM Revision.pptx`](<../course-materials/sources/exam/2026 COMP504 _FINAL EXAM Revision.pptx>) says the larger question groups are Chapter 7 wired/wireless LANs (15–20), Chapter 5 network/transport (10–15), and Chapter 2 applications (10–15). Treat these counts as **guidance from that deck**, not a guarantee for your sitting. It also asks students to review the Canvas quizzes, which are not in this folder. Its exam administration slides refer to S1 2026; check your current Canvas instructions for the actual exam rules and date.

No Week 9 transcript is present. The missing network-layer material is covered here using [`ch05 Transport-Network Part 2-4-1 (1).pptx`](<../course-materials/sources/slides/chapters/ch05 Transport-Network Part 2-4-1 (1).pptx>), [`Default Gateway.pptx`](<../course-materials/sources/slides/supporting/Default Gateway.pptx>), [`Module_8_Networklayer.pdf`](<../course-materials/sources/cisco-modules/Module_8_Networklayer.pdf>) through [`Module_13_ICMP.pdf`](<../course-materials/sources/cisco-modules/Module_13_ICMP.pdf>), and the VLSM resources. The Week 8 transcript describes the final as theory based and the lab as a separate practical, but that recording also refers to an older exam; verify the format for your sitting in Canvas. The complete source map is in `KNOWLEDGE_BASE.md`.

## Success checks

You are ready when you can, without notes:

- Name each layer, its job, PDU, and typical addressing or protocol.
- Trace a packet across a switch and router, explaining which MAC and IP addresses change.
- Calculate network, broadcast, usable range, and mask for a prefix; allocate VLSM largest first.
- Explain and test a default gateway; isolate a failed ping in a sensible order.
- Compare TCP/UDP, wired/wireless access, switched/routed backbones, WAN options, and common application architectures.
- Complete the supplied final Packet Tracer practice lab and explain every configuration command you used.
