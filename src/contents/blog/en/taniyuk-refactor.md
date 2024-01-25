---
title: Refactoring Taniyuk, Motivation and Obstacles
author: Alvin Leonardo
date: 2023-12-1
slug: taniyuk-refactor
thumbnail: /images/taniyuk-refactor.png
description: A backstory during the time I refactored Taniyuk.
categories:
  - web
  - blog
  - typescript
  - gatsby
tags:
  - web
  - blog
  - typescript
  - gatsby
---

In this blog post, I'll be delving on the motivation of refactoring Taniyuk, the obstacles I faced, and the solutions I
came up with.

## Motivation

Sometime in 2023, I looked at Taniyuk codebase and looking at the legacy code that I inherited from previous maintainer
and wondering if I can refactor it. The project structure was a mess and there's no guidance as to where to put things.
Also code was in Javascript, which is notorious for being 'unsafe' and type mistakes can and will happen overtime. Maybe
someday, I'll no longer be there to maintain and the new one will be freaking confused maintaining it. That's why I
decided to fix all the mess it came with so the present, future me, and future maintainer will thank you.

## Obstacles

The problem that I faced here was, there's **NO** automated test, no unit test, no integration, no end-to-end, nothing.
So I have to be very careful to not break critical feature that will impact the user, after all the user won't care what
did you do with the codebase, they only see if the app works properly or not.

### But if there's no automated test, why you don't create the automated test first?

You are not wrong, but the problem is, If I were to write it with Javascript first, then migrate the codebase to
Typescript, I may ended up writing the test **TWICE**. Since there's a new feature that will be shipped, so I refactor
it along with that new feature, because it will be tested anyway, two birds with one stone.

**DISCLAIMER:** This is not an advice and may sound like survivor bias, write automated test first if you can.

## Solutions

Here's the solutions that I came up with:

### Project Structure

I searched all and found [Bulletproof React](https://github.com/alan2207/bulletproof-react) as it was simple to follow
in my opinion. I decided to loosely adapt this to our project.

### Typescript

To easen up my pain, I searched the package that can help me with the refactoring process, and I
found [ts-migrate from AirBnB (yes, that AirBnB)](https://github.com/airbnb/ts-migrate) to automate the process, at
least it can cover around 70% of manual work. It does 4 steps to achieve this:

* Create `tsconfig.json` file
* Convert all the Javascript files to Typescript
* Runs a codemod to fix the errors
* Runs `ts-ignore` so it can be compiled while I fix the errors

## Conclusion

I'm not saying that this is the best way to refactor your codebase, but this is the way that I did to refactor Taniyuk
and made future development easier and more error-resistant. I should write the automated test either before or after
doing refactor. I hope you find this useful.


