---
title: "Stop Using Admin Panels for Deployment: A Rant"
author: Alvin Leonardo
date: 2026-07-23
lang: en
slug: stop-using-admin-panels
thumbnail: /media/projects/taniyuk/taniyuk.png
description: I'm tired of aaPanel-style workflows. Git-based deployment with Docker is the only sane way to ship code.
categories:
  - devops
  - rant
tags:
  - docker
  - devops
  - git
  - deployment
  - rant
---

Look, I get it. Admin panels like aaPanel make things "easy." You get a nice GUI, file manager, one-click this and that. But if you're deploying a modern web app through a panel like it's 2014, we need to talk.

## The ritual

Every time I push code, the "deployment" goes something like this:

Open the panel. Find the terminal or file manager. `git pull`. Oh wait, new dependencies. `pnpm install`. Oh wait, Corepack is being weird again. Corepack is supposedly installed, supposedly enabled, but pnpm just... won't load. So now I'm doing `sudo npx pnpm install` which sounds like a command that shouldn't even exist but somehow works. Then `pnpm run build`. Then restart pm2 or whatever. Then check if it actually works. Then pray.

Every. Single. Time.

And if I forget to install deps? Broken production. If the build fails halfway? Half-broken production. If I pull the wrong branch? You get the idea.

This isn't deployment. This is a ritual. I'm literally doing the same 7 steps every time like I'm performing some ancient ceremony to appease the server gods.

## The Corepack thing deserves its own section

I cannot overstate how annoying this is. You have Corepack. You have Node. You have pnpm. They're all supposed to work together. But sometimes Corepack just decides nah, not today. You run `pnpm` and it acts like pnpm doesn't exist.

No error. No explanation. Just... nothing.

So you Google it. Stack Overflow says `corepack enable`. You run that. It says it's already enabled. Cool. So why doesn't pnpm work? Nobody knows.

The "solution" that actually works? `sudo npx pnpm install`. A command that reads like it was written by someone having a stroke. But it works. And at that point you stop asking questions and just move on with your life.

This is what manual deployment does to you. It turns you into a person who runs cursed commands at 2 AM and just accepts it.

## "But it works fine for me"

Cool. My car also runs fine without insurance — until it doesn't.

The thing about manual deployment is it's fine when it's just you, doing one deploy, on one server. The moment any of those numbers go above 1, it falls apart.

I've seen it. Different people deploy differently. Someone forgets a step. Someone runs the wrong command. Someone does `git pull` on the wrong branch and now production is running someone's experimental feature branch. And nobody knows who deployed what because there's no log, no history, no audit trail. Just vibes.

## What I actually do now

I push to main. That's it. That's the deploy.

GitHub Actions picks it up, builds a Docker image, pushes it to a registry, and my server pulls the new image and restarts the container. Takes like 2-3 minutes. I don't touch the server. I don't open any panels. I don't SSH in and run commands like some kind of sysadmin from 2008.

And if something breaks? I revert to the previous image. Takes seconds. No panic. No "quick, log in and fix it."

```bash
git push origin main
```

That's my deploy command. One line. Everything else is automated.

## The Docker part

I know Docker has a learning curve. But hear me out.

Your Dockerfile is basically a recipe that says "here's how you build and run this app." It's versioned. It's the same everywhere — your laptop, CI, production. No more "works on my machine." No more "oh you also need to install this system dependency that I forgot to mention."

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

That's it. That's the whole deployment recipe. Anyone can read it. Anyone can run it. It doesn't depend on what's installed on the server, what version of Node the server has, or whether Corepack feels like cooperating today.

## The zip backup people

I need to address this because I've seen it with my own eyes.

"I back up my project by zipping the folder."

My brother in Christ, that's not a backup. That's a cry for help.

You know what your desktop looks like. `project.zip`. `project-v2.zip`. `project-final.zip`. `project-final-2.zip`. `project-final-REAL.zip`. `project-final-REAL-THIS-ONE.zip`. Which one is current? Nobody knows. Not even you.

And when you need to find when something changed? When a bug was introduced? Who changed that one line? You're opening zip files one by one like an archaeologist excavating ancient ruins.

Git does all of this. Automatically. For free. With history, diffs, branches, and collaboration built in. You commit, you push, you're done. The entire history of your project is right there.

A zip is just a worse git commit that you have to manually create, manually name, and manually store. It's 2026. Please.

## "Git is too complicated"

You need three commands:

```bash
git add .
git commit -m "did stuff"
git push
```

That's 90% of daily Git usage. If you can navigate an admin panel, you can learn three commands.

## Anyway

Stop deploying through admin panels. Stop zipping your projects. Stop running `sudo npx pnpm install` at 2 AM.

Learn Git. Learn Docker. Set up CI/CD. Your future self will thank you.

And if someone at work still thinks zipping the project folder is a valid backup strategy... send them this post. They won't read it, but at least you tried.

---

*Rant brought to you by one too many "just pull and build manually" deployments.*
