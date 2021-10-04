---
title: Introduction to the blog
description: This post will serve as a brief introduction to the content and purpose of this blog
date: 2021-07-25
author:
  name: Santtu Nykänen
  bio: I'm a thirty-something fullstack developer from Helsinki.
  image: photo.png
---

## What to expect from this blog

This blog will contain tutorials and walkthroughs of my personal projects as well as
discussion on other technical topics. I'm starting with the obvious one, this blog!

In the next few blog posts we will drill into the nitty-gritty of creating a JAMstack
blog with the Vue-based framework Nuxt.js and its @nuxt/content module, which will
allow us to easily turn Markdown files into blog posts.

If that means nothing to you, don't worry: We will start with an overview of the terms
mentioned in the previous paragraph as well as an explanation of the general purpose
of the blog itself.

<img src="index.png" style="float:left;" alt="Screenshot of the landing page" />

<-- Here's a screenshot of what the landing page looks like now. It has navigation
links to portfolio/blog, a language selector and a cute photo of me.

Aside from the top bar, all of the content on screen is rendered from Markdown.

At this point the blog is functional, but very bare bones. Hence the following posts
will also include tutorials on how to add new features.

***

Here's a short list of missing features that I can come up with off the top of my head:
* ### A button that allows the user to print my resume as a PDF file  
  <img src="portfolio.png" class="float-right" alt="Screenshot of the portfolio page" />
  
  This is what the portfolio page looks like now --->
 
  As the porpose of this blog (for now at least) is mainly to be a landing page
  for recruiters, I wanted to create an easy way to print a decent-looking and
  up-to-date PDF of my resume.

  The layout is still a bit rough to say the least, but it already has a lot of
  functionality. The author section as well as the table of contents are also
  generated from the same Markdown file. Stashed in a corner somewhere I would
  like to see a button that says "Print PDF".
* ### Improving the search page  
  <img src="search.png" class="float-right" alt="Screenshot of the search page" />

  This is what the search page looks like now --->
  
  It shows latest blog posts listed
  in order of publishing date.

  On the bottom there is a functional search box, but it still needs to be improved
  and bugsprayed.  

  The button that says "Add new post" is not yet implemented, but is supposed to
  create a new Markdown file with entered title and other metadata, making it less
  of a hassle. The button only show up in development mode.

  The "See more posts" button is also waiting to be implemented, perhaps with a
  spinner and a popup if no posts were found.
* ### A list of related blog posts & better navigation between blog posts 
  <img src="blog.png" class="float-right" alt="Screenshot of the blog page" />

  Here's a screenshot of what the blog page looks like now (Inception!) --->

  This might be a more advanced feature, but there could be a list of posts with
  related keywords on the bottom of each post.

  More navigational links should be also added, such as buttons for next/previous
  post.

  It has almost exactly the same layout as the portfolio page, aside from the author
  page being moved to the bottom.
* ### Comments  
  As the blog uses no backend or database, reader comments will have to be added
  through an exteral service. I have no idea how yet, but this will definitely be
  explored in a later post.

Of course, not all of these features are necessary or even feasible, but it should
still be interesting to try to implement them. You often learn more from failure than
success after all!

## What not to expect from this blog

This will NOT be a personal blog. I'll do my best to spare you the sordid details of
my life, however, I might throw in a funny anecdote where appropriate. Let's keep it
casual.

So, please tag along whether you're someone who already knows how to code or someone
eager to learn. My hope is to grow this blog from a mere recruiting tool to a fully
realized platform for documenting my work. This is a start.

Yours truly,  
-Santtu
