# TODO
TODO items that we have not resolved.

## Emoji Key:

### Priority:
💡 (P3) - optimizations

🟡 (P1) - larger improvements / feature additions 

🚨 (P0) - urgent fixes requiring ASAP attention

### Workload
🚚 - large changes that require a lot of time

🚗 - medium changes

🛵 - relatively simple changes that can be implemented quickly

## 💡 🛵 StudySmart SEO
make more SEO - should be at the top of the search for https://www.reddit.com/r/APStudents/comments/17iztp6/previous_ap_chem_frqs_by_unit/
  - can even just link to that reddit post

## 💡 🚚 🚚 StudySmart modern approach
The prior approach involved scraping labeled data from various sources and training a classifier. Consider that AP unit boundaries can change every year, potentially rendering the classifier outdated.

Further, text scraping via OCR had errors and junk text that had to be postprocessed via custom regex. Search results may be affected by this.

Consider the following improvements:
 - 🛵 use LLM to postprocess the text scraped to get rid of junk text / correct OCR Errors 
 - Get rid of units as an attribute to questions. Use clustering mechanisms to identify whether similar types of questions.
 - Use the keywords from units descriptions from collegeboard sources to identify questions that most match these units. This could be a simple vector search or even tf-idf
 - Come up with a mechanism to show questions similar to the current question
 - link back to the original source pdf


## 🟡 🚚 Refactor Website
I'm thinking of revamping my personal website. Previously I used HTML5UP and then personal coding knowledge to make the site more customized. My main goals is with the site revamp is to make the site more mobile-friendly and look more modern. The functionality is pretty simple; it just needs to be a static site that: 1) has a main area to introduce myself 2) has a gallery where I can show off my projects in a desired order 3) have some sort of experience/cv page. Open to just switching to whatever is the hottest new UI+frontend framework. I use github pages to deploy so keep that in mind. 

Idea:
- put the text content in jsons and read from them instead of explicitly writing them out in code.

I want to completely revamp this site to make it look more mobile-friendly and modern. The functionality is pretty simple; it just needs to be a static site that: 1) has a main area to introduce myself 2) has a gallery where I can show off my projects in a desired order 3) have some sort of experience/cv page. I'm thinking we can use DaisyUI + Astro for this. Can you completely rewrite this site? Feel free to redesign the UI/UX as you see fit. Remember - we want this to look modern. 

Can you make this into a scroller website so the UI looks more fluid instead of static? I actually prefer my current website to the UI you've presented. I basically want a scroller website where everything is pretty much on one page (with the caveat of experience/cv page; but we can get to that later). 

I want the following:
1) keep the site name displayed in the browser tab as 'Abhinav Ganesh' instead of 'Abhinav --- Portfolio'.
2) The scrolling experience should start off with the same "Hi, I'm Abhinav..." and the picture of myself that I've included. Perhaps the text can be superimposed and move on top of my image as the user scrolls down.
3) as the user scrolls down more, they get to the Projects section of my webpage. For the projects, when the project gets into focus, it should display the equivalent of what is currently the video + title, description, and details. When the project is not in focus it should appear as the static image that in the current site we use as the preview.
4) if the user scrolls all the way to the bottom of the site, the last element should include links to my github and linkedin.
5) the footer you have right now is fine as the very last thing the user sees.

## 💡 🚗 Delete Unused Code
remove any references to unused code. Code history exists on github anyways.

# Done
- 🚨 🛵 remove contact and remove email from easily being parsable
- 🚨 🛵 remove references to phone number, personal address, etc. from resume info displayed
