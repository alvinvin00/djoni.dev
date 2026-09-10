---
title: "Self-hosting and the rabbit hole"
author: Alvin Leonardo
date: 2026-09-10
lang: en
slug: selfhosting-rabbit-hole
thumbnail: /media/projects/taniyuk/taniyuk.png
description: I just wanted a private game server. Two years later, I'm running my own infrastructure. Here's what happened.
categories:
  - devops
tags:
  - docker
  - devops
  - git
  - deployment 
---

It started with a private server. But before I got there, I went through a phase of auditioning PaaS panels — the kind
that promise "deploy in one click" and "manage everything from a dashboard." I tried a few. Compared features. Looked at
pricing. Tried to figure out which one would make my life easier.

None of them stuck. But the audition itself pushed me down a path I didn't expect.

## The beginning

I wanted to host a private game server. Simple enough. The problem was this particular server relied on some outdated
SSL ciphers, which made me a bit paranoid about security. I didn't want to run it as root on a shared VPS and hope for
the best.

So I went with Podman. Rootless containers by default, no daemon running as root, better security posture. It felt like
the responsible choice.

And it worked. Containers ran. Server was up. Friends could connect. Mission accomplished.

...Right?

## The Podman era

Turns out, "it works" and "it's maintainable" are two very different things.

Every time something needed attention — an update, a config change, a container that decided to stop — I had to SSH in.
Open a terminal. Manually pull images. Check logs. Restart things. Run commands by hand like some kind of sysadmin from
2008.

There was no dashboard. No overview of what was running. No easy way to see if something was broken without logging in
and checking. It was just me and the terminal, every single time.

It wasn't broken. It was just... heavy. The kind of setup that works fine when you have energy and falls apart the
moment you stop paying attention. I wouldn't say it was unmaintained, but it definitely felt like it was heading that
way.

## Finding Coolify

At some point I started looking for alternatives. Something that could manage containers without me SSH-ing in every
five minutes. Found Coolify through a Google AI Overview of all places.

I didn't switch immediately. July 2025 was the audition — I compared its featureset and repo metrics against other
options. Looked at the GitHub stars, commit frequency, community activity. It checked out.

By August 2025 I had fully migrated. The game server, everything — all managed through Coolify.

And honestly? The moment I pushed to a Git branch and watched the server update itself, something clicked. Not just "oh
this is convenient" but "this is how it should have been from the start."

Git-based deploys. A web UI that actually showed me what was running. One-click service deployment. No more SSH rituals.
No more manual `podman pull` and hoping nothing broke.

I should have done this sooner.

## The Oracle VPS detour

Self-hosting has a way of making you discover things you didn't know you needed.

Somewhere along the way, someone on a Discord server mentioned that Oracle Cloud has a very generous free tier. ARM
instances, decent specs, actually free — not a 30-day trial, not "free until you look away," but genuinely free.

So I signed up. Created one instance for myself. Then figured, why not a second one just for the game server?

Good thing I moved when I did, because Oracle slashed that free tier in half this June. I was already set up by then.

The migration wasn't just about "free stuff though." My previous VPS was costing me, and with the IDR being... well,
let's just say the current administration isn't exactly making the rupiah stronger. Thanks, Prabogoyim Subinyahu.
Cost-cutting wasn't optional anymore — it was necessary.

Oracle free tier plus Coolify turned out to be the sweet spot. Free infrastructure, managed deployment, zero SSH
rituals.

## The rabbit hole

Here's the thing about self-hosting: once you start, you don't stop.

Coolify made deploying services so easy that I started adding things I'd never have bothered with before. Databases.
Monitoring tools. More apps. When the barrier to entry drops from "write a compose file, SSH in, docker compose up,
pray" to "click, deploy, done," you start seeing everything as something you can self-host.

"I need a database." Self-host it. "What about monitoring?" Self-host that too. "A pastebin?" Sure, why not.

The stack grew faster than I expected. And I still write compose files manually sometimes — not because I have to, but
because I want to understand what's happening under the hood. The learning never stops.

And now it's gotten worse. I've got Bazzite running on my gaming PC, and I've been trying to run self-hosted services on
it too. A home server, on the same machine I play games on. Because apparently cloud VPSes weren't enough — I need
infrastructure in my house too.

The plan? Eventually buy a second-hand PC or a Raspberry Pi and make it a dedicated home server. It hasn't happened yet.
But it will. I can feel it.

The rabbit hole goes deeper every time I think I've hit the bottom.

## What it actually taught me

Two years of this and here's what I know now:

Docker isn't scary. It was never scary. It's just a way to package and run things. Once you use it daily, it stops being
an abstraction and starts being "how things run."

Git-based deployment isn't just convenient — it's the only sane way to ship
code. [I wrote that in my admin panels post](/en/blog/stop-using-admin-panels) and I'll say it again here because it's
still true. Push to main, server updates. That's it. That's the whole thing.

And DevOps isn't a job title you need a certification for. It's what happens when you're the person keeping things
running. You learn Docker because you have to. You learn deployment pipelines because the alternative is SSH-ing in at 2
AM. You learn by doing, because the server doesn't care about your feelings.

All those PaaS panels I auditioned at the start? They were trying to sell me what I ended up building myself. And the
rant about admin panels wasn't theoretical — this is where it came from.

## Anyway

Two years. June 2024 to now. I auditioned PaaS panels looking for an easy way out, ended up with a private game server,
and somehow came out the other side understanding infrastructure, deployment pipelines, container orchestration, and
cloud cost optimization.

The rabbit hole is real. And honestly? It's worth falling into.

Now if you excuse me, I need to go check if my gaming PC is still running that database container I forgot about.

---

*Another post brought to you by the "I'll just self-host one more thing" mentality.*
