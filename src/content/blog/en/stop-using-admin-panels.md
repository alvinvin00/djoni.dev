---
title: "Stop Using Admin Panels for Deployment: A Rant"
author: Alvin Leonardo
date: 2026-07-23
lang: en
slug: stop-using-admin-panels
thumbnail: /media/projects/taniyuk/taniyuk.png
description: Why I'm tired of aaPanel-style workflows and why Git-based deployment with Docker is the only sane way to ship code.
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

I need to get this off my chest.

If you're still deploying your applications by logging into an admin panel, clicking through menus, manually pulling a repo, running `npm install` and `npm run build` by hand, and then restarting a service — we need to have a conversation.

## The aaPanel Problem

You know the workflow. You push your code to Git, then you:

1. Open the admin panel in your browser
2. Navigate to the file manager (or SSH in)
3. `git pull`
4. `npm install` (or `composer install`, or whatever)
5. `npm run build`
6. Restart the service (pm2 restart, systemctl restart, etc.)
7. Pray nothing broke

Every. Single. Time.

And God help you if you forget step 4 and push a new dependency. Or if the build fails halfway and now your production is in a half-broken state. Or if you accidentally pull the wrong branch.

This isn't deployment. This is a ritual. You're performing a ritual every time you want to ship code.

## "But It Works for Me"

Sure. And driving without a seatbelt works too — until it doesn't.

Manual deployment is:

- **Error-prone** — One missed step and you're debugging production at 2 AM
- **Not reproducible** — Your colleague deploys differently than you do
- **Not auditable** — Who deployed what? When? With what changes? ¯\\\_(ツ)\_/¯
- **Slow** — The whole process takes 5-10 minutes of active attention
- **Scary** — You hesitate to deploy because it's a whole ordeal

The moment you have more than one person deploying, or more than one server, this approach falls apart completely.

## The Git + Docker Way

Here's what deployment should look like:

```bash
git push origin main
```

That's it. That's the deployment.

Everything else — installing dependencies, building, restarting services — happens automatically in a CI/CD pipeline. You push, and a few minutes later your changes are live.

### How It Works

1. **You push to Git** (GitHub, GitLab, whatever)
2. **A CI pipeline runs** (GitHub Actions, GitLab CI, etc.)
3. **It builds a Docker image** with your code, dependencies, and build artifacts baked in
4. **It deploys the image** to your server (via SSH, Docker registry, or a deployment service)
5. **The old container is replaced** with the new one

No manual steps. No "oops I forgot to run build." No SSH-ing into production to fix things.

### Why Docker?

Because it solves the "works on my machine" problem permanently.

Your Dockerfile is your deployment recipe. It's versioned. It's reproducible. It's the same on your laptop, in CI, and in production.

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

This file tells you everything you need to know about how the app is built and run. No tribal knowledge. No "oh you also need to install this system dependency."

## The Zip Backup People

Now let me talk about the people who think backing up via zip is a valid strategy.

You know who you are.

"Oh, I just zip the whole project folder and keep it on my desktop."

Let me count the ways this is wrong:

1. **It's not versioned** — You have `project-backup.zip`, `project-backup-v2.zip`, `project-backup-final.zip`, `project-backup-final-REAL.zip`. Which one is current?

2. **It's not searchable** — Want to find when a specific line changed? Good luck grep-ing through 47 zip files.

3. **It doesn't capture history** — A zip is a snapshot. Git is a timeline. You can see every change, who made it, when, and why.

4. **It's not collaborative** — Two people can't work on the same zip file. Git was literally invented to solve this.

5. **It doesn't have branches** — Want to try something without breaking main? That's what branches are for. Your zip strategy doesn't have branches.

6. **It's manual** — You have to remember to make the zip. Git commits are part of your workflow.

You know what a zip backup is? It's a worse version of a git commit. It's a git commit that you have to manually create, manually name, manually store, and manually manage. And it doesn't even have diffs.

## "But Git is Complicated"

No, it's not. You need like 5 commands:

```bash
git add .
git commit -m "what I changed"
git push
```

That's 90% of your daily Git usage. If you can operate an admin panel, you can learn 3 commands.

And the payoff is enormous:

- **Full history** of every change ever made
- **Branches** for experimental work
- **Pull requests** for code review
- **Automatic deployment** via CI/CD
- **Rollback** in seconds if something breaks
- **Collaboration** without stepping on each other's toes

## The Deployment Pipeline I Use

Here's my actual setup for projects:

1. **Push to main** on GitHub
2. **GitHub Actions** builds a Docker image
3. **Image is pushed** to a container registry (Docker Hub, GHCR, etc.)
4. **Server pulls the new image** and restarts the container

The whole thing takes 2-3 minutes. I don't touch the server. I don't open any panels. I don't run any commands on production.

If something breaks, I can revert to the previous image in seconds. No panic. No "quick, SSH in and fix it."

## Conclusion

Stop deploying like it's 2015. Stop using admin panels as your deployment tool. Stop zipping your projects and calling it a backup.

Learn Git. Learn Docker. Set up a CI/CD pipeline. Your future self will thank you.

And if your colleague still insists that zipping the project folder is "good enough"... send them this post.

---

*This rant was brought to you by one too many "just pull and build manually" deployments.*
