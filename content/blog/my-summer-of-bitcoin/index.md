---
title: My Summer of Bitcoin
date: 2022-09-03T23:47:17.032Z
thumbnail: img_7712.jpg
---
I finally did it. I contributed to open-source. I started writing code professionally about nine years ago but have always found a way to avoid it. When encountering an issue with a library, the pain of switching to another always appealed to me more than going through the crippling emotional anxiety of contributing a bug fix or proposing a feature.

In other words, open-source work sounded like hell. 

## The Motivation

However, more recently, that changed, and I finally started participating in open-source. I was motivated by a desire to participate in developing Bitcoin’s transaction scaling solution, the Lightning Network. The thought of working on an open-source initiative was intimidating. Why would any project out there benefit from my contribution? But I wanted to give it at least a shot. If I found it emotionally repulsive – I thought – I could just give up and say I at least tried.

I started where I always do when I learn something new: find a mentor. I concede that it is a resource-inefficient way to learn anything, but that’s what I have found to have worked consistently for me. My search brought me to [Summer of Bitcoin](https://www.summerofbitcoin.org/). The program provides some structure for college students to learn how the protocol works by pairing them with mentors who contribute to open-source projects.

That’s perfect.

## Finding My Bearings

When I had to pick a focus area for my summer, one particular project stood out: the [Lightning Development Kit (LDK)](https://lightningdevkit.org/). LDK is one of several Lightning implementations. Each has its strengths, and LDK focuses on modularity, customizability, and resource efficiency. 

I was psyched. Before LDK, existing solutions consumed too many resources and often had issues that required workarounds. As a result, the predominant model for sending and receiving bitcoin is custodial via services like Cash app, where you do not truly own the ability to spend it.

LDK opens a new world of possibilities by providing a tenable solution for running a Lightning node on mobile phones. And since it's modular, wallet developers can delegate Lightning functionality to be run on servers while keeping key management on the user’s device. As a result, LDK enables the development of mobile wallets where users will not have to trust a third party to hold their funds to transact. And that’s only one of many different applications LDK can support.

LDK’s mission was clear to me and felt like the right fit. So, I applied.

## Planning & Contributing

Leading up to the summer program, I started looking at some good first issues and fiddled with the Swift bindings repository, where I felt most at home as an iOS engineer. It acted as my “training wheels”, and helped me overcome my anxiety about working in public.

Eventually, I was able to build the cadence I needed to contribute to the main repository.

I was initially overwhelmed by the number of open issues and did not know where to start. I began working on issues where I knew what needed to be done or somewhat understood and could articulate my questions in the comments. My first PR was a simple change to [add some logging](https://github.com/lightningdevkit/rust-lightning/pull/1318).

## The Program

When I started, I struggled. Hard. Rust was an unfamiliar language, \`rust-lightning\` is a massive codebase, and I was also learning everything I needed to know about Lightning. I worked through [Rust by Practice](https://practice.rs/why-exercise.html), got some help from my friend [Ravern](https://twitter.com/ravernkoh), and read [chapters of Mastering the Lightning Network](https://github.com/lnbook/lnbook) over and over.

Even after all that, I still didn’t think I was ready. My second PR, which does the trivial thing of persisting a network graph whenever channels were pruned, took me at least 2 hours to figure out. 

Thanks to help and encouragement from other contributors like [Matt](https://twitter.com/TheBlueMatt), [Jeff](https://twitter.com/jkczyz), and [Arik](https://twitter.com/arikaleph), I progressively got more familiar with the code base and made fewer bone-headed mistakes. Naturally, I felt more comfortable with Rust as I went through each PR review. I learned something new each time. 

In one particular [pull request](https://github.com/lightningdevkit/rust-lightning/pull/1403), I started off thinking that it would be trivial, only to find out later that it required updating a lot of tests in parts I was unfamiliar with. Matt [caught me](https://github.com/lightningdevkit/rust-lightning/pull/1403#discussion_r921776341) trying to take shortcuts or cheat with debugger-driven [test creation](https://github.com/lightningdevkit/rust-lightning/pull/1403#pullrequestreview-1039704677). Ultimately, I was glad I willed myself to do double and triple-takes because I got to see all the ways HTLC forwarding can fail. It was almost 50+ worth of tests. God, was I cross-eyed by the end.

## Mentorship

My latest [pull request](https://github.com/lightningdevkit/rust-lightning/pull/1643) was for tracking HTLCs currently inflight across payments. The change allows routers to factor in used-up liquidity from pending payments so we can provide more accurate payment path suggestions. I understood the problem, but I did not know where to begin. I did not know when we wanted to start tracking payments and when we should stop. I also did not know how to handle retries appropriately nor consider multi-path payments.

That was an instance where I was lucky to have Jeff as a mentor. He showed me where the changes likely needed to happen in the codebase and used his experience to identify edge cases my proposed solution should handle. 

As a result, I felt like I had a better idea of what I was doing.

The pull request ultimately was put up for [review club](https://gist.github.com/dunxen/c7f1f8c07da1b9c8a9152cada9075807), where other contributors and folks interested in learning more about different parts of the LDK codebase showed up to review my code. I explained the motivation behind my pull request and how the solution worked. I also received feedback on potential follow-up improvements, and it felt good! I learned a ton just by showing up. My anxiety took a backseat, as the benefits of working in public became apparent.

## Continuing Struggles

I dislike writing blog posts that describe a life event because they need an ending. Yet, and this may sound cliché, my journey to contributing to bitcoin is only beginning. I have come a long way from being intimidated by open-source development to someone who can participate in it comfortably.

The benefit of hindsight is that I can see how every dumb problem or mistake I made inched me closer to becoming a more impactful contributor to the project. Fortunately, the LDK community is kind enough to tell me politely when I’m not trying hard enough. 

So I’m just going to keep trying. Onto my next PR.