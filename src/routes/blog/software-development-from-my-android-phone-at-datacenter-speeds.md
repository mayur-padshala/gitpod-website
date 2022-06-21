---
author: axonasif, pawlean, nancy-chauhan
date: Thursday, 23 Jun 2022 11:00:00 UTC
excerpt: This story is about how Gitpod enabled an 18-year-old student from Dhaka with a broken laptop to continue developing software on an Android phone seamlessly
slug: software-development-from-my-android-phone-at-datacenter-speeds
teaserImage: teaser.png
title: Software development from my Android phone at datacenter speeds
---

<script context="module">
  export const prerender = true;
</script>

<!-- You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 4 -->

<!-- ![alt_text](images/image1.jpg "image_tooltip")
 \
_This is how my phone setup used to look like_ -->

This story is about how Gitpod enabled an 18-year-old student from Dhaka with a broken laptop to continue developing software on an Android phone seamlessly. From learning to code in [Rust](https://www.rust-lang.org/learn) to developing [Optimus Discord Bot](https://github.com/supremegamers/optimus), which is now powering the Gitpod Community Discord server, I learned a lot! 🥳

With Gitpod, developing software is easier, accessible and more productive than with a local development environment. How so? Gitpod is a complete dev environment running in the cloud, turning my android phone into a powerful dev machine. Put in different words, I get hold of data center hardware in my palm that is fine tuned for developing software.

I am known as AXON in the [Gitpod Community](https://www.gitpod.io/chat). I’ll be sharing my story of how Gitpod quite literally changed my life and enabled me to continue my journey into software development. Today, I’m a Community Engineer intern at Gitpod. Being an active community member and solving my development pains with Gitpod led me here!

A few years ago, I got into software development while exploring the [Android-x86](https://www.android-x86.org/) space. As a user, I wanted to play android games with it, but I ended up getting involved in its development. One day, my laptop broke because of all the overload I had put into it over the years. The only other device that I had on me was my Android phone. Luckily, this was around the same time I discovered Gitpod! I hoped that I would be able to recreate a functioning developer environment in the cloud, just using my phone and Gitpod. I used [Techno Spark 7 Pro (128/6GB)](https://www.gsmarena.com/tecno_spark_7_pro-10884.php) with a Bluetooth mouse and keyboard combo, which I also connected with the TV for a larger screen. With this new setup, I could start working on almost any project. I also had a native Linux environment within my phone where I could `chroot` into with my phone's superuser privileges. Still, it wasn't suitable for software development, given the hardware and software limitations and all the other hassles. Using Gitpod, my Android phone effectively turned into a thin client with an interface to write code. Gitpod provisioned a developer environment in a Linux container in the cloud and was doing the brunt of computing work, and my phone was resting in peace 🤣

# Getting started with Gitpod on Android

![my android setup](../../..../../../static/images/blog/software-development-from-my-android-phone-at-datacenter-speeds/20220412_004915681.jpg)

Getting started with Gitpod on Android is quite easy. If you are interested in setting up Gitpod on Android, you can check out the detailed guide: [draft](https://docs.google.com/document/d/18Y4fRCcO0pCGXrMbxNj-xqkcymn0laTvJep5Zhtc5UA/edit#)

insert youtube video link: [draft on slack](https://gitpod.slack.com/archives/C01LDA27WJC/p1654875261466739?thread_ts=1654626018.462279&cid=C01LDA27WJC)

- Step 1: Install [Kiwi](https://kiwibrowser.com/) browser 🥝
- Step 2: Install the [Gitpod extension](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki) in Kiwi browser 🍊
- Step 3: Open a Git repository in Gitpod ⚡️
- Step 4: Code, Develop, Ship it 🚀

# Things I built/maintained with Gitpod on my Android phone

Here are some fun things I built on mobile:

- [Optimus Discord Bot](https://github.com/supremegamers/optimus) - This hackathon project is now powering our Gitpod Community Discord server 🎉 I started developing the first version of it for [https://aopc.dev/](https://aopc.dev/) discord server before I knew about Gitpod. The low-end Notebook, which I initially used eventually died and was unsuitable for this task. Later, I tried working on my phone in a chrooted Linux environment, but the compile-time for this project made it impossible for me to develop and made my phone super hot. That's when I discovered Gitpod and started using it. It made the development super easy!
- [https://github.com/axonasif/gearlock](https://github.com/axonasif/gearlock) - Maintaining a bootable custom-recovery and package manager for Android-x86.
- [https://github.com/tuxdroid-io/tuxdroid](https://github.com/tuxdroid-io/tuxdroid) - This script manages my Linux GUI and the terminal environment on my phone, and an interesting fact - I programmed it on my phone 😆. I can run VS Code inside my phone with the help of this, which enables me to connect to a Gitpod workspace via Remote-SSH and more!
- [https://github.com/supremegamers/darkmatter](https://github.com/supremegamers/darkmatter) - Maintaining a customized Android-x86 distro.
- [https://github.com/axonasif/multitux-gp](https://github.com/axonasif/multitux-gp) - Attempt to parse Gitpod `workspace-images` Dockerfiles and generate them for different distros. It's still a work in progress!

# How I got an Internship at Gitpod

When I came across Gitpod, I applied for the **[Professional Open Source](https://www.gitpod.io/docs/professional-open-source)** plan after running out of free hours. Surprisingly, I was found eligible for it! 🥳

As a kid, it inspired me! All my tiny little efforts weren't worthless afterall. Since then, I have strongly wanted to give something back to the Gitpod Community. I started hanging out with the Gitpod community and helping others whenever possible. It made me feel happy. I consider this as a method of learning things as you get presented with new challenges everyday.

Around that time Gitpod also launched the [Community Heroes program](https://www.gitpod.io/community/heroes) - an initiative that recognises the most active community members that go above and beyond to contribute to community 🍊🦸. I got recognised for my consistent efforts and was a member of the first cohort 😎

[![community heros](../../../static/images/blog/software-development-from-my-android-phone-at-datacenter-speeds/community_heros_tweet.png)](https://twitter.com/gitpod/status/1466452229309837313?s=20&t=3RxZdUpS8QSMn601harwNQ)

Later, I had applied for an internship at Gitpod. It was kind of an unexpected event for me: I got the internship, and officially, I became a Gitpodder 🍊

[![Mission passed: RESPECT 😝](../../../static/images/blog/software-development-from-my-android-phone-at-datacenter-speeds/internship_tweet.png)](https://twitter.com/axonasif/status/1478418230460907529?s=20&t=3RxZdUpS8QSMn601harwNQ)

# Unlocking the power of Gitpod

Can you believe it? All the contributions and projects have been made from my phone, using the power of Gitpod! Gitpod is powerful, and I believe with Gitpod, anyone can learn to code and develop software without any hurdles.

Drop by our community Discord server if you find this interesting and want to develop software on your phone. We have the[ #mobile-and-tablets](https://discord.com/channels/816244985187008514/890901203624534026) channel where fellow mobile-dev enthusiasts hang out! Feel free to share your tips and tricks on software engineering in a more unconventional but accessible way.
