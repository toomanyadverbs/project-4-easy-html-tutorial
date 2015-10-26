# Easy HTML & CSS Tutorial

An easy single-page tutorial for basic HTML and CSS, aimed particularly at getting girls to explore some code. Built in Angular with the embeddable code editor Ace; a work in progress.


## User Stories:

An easy coding game for kids, directed at girls in particular.
  It will have them build a simple web page based on options presented to them, with the code appearing in the editor as they go along, and the changes to the editor appearing in a view window. (Much like CodePen or GA's Dash, for example.)

  A triple-column layout: tutorial & options / code editor (split horizontally into HTML and CSS views) / the page view.


User stories
1. When user starts app, '/' path,
they will view a 'welcome' page. Here, there is a link to take them to the 'Build A Castle' lesson.

2. On the 'Build A Castle' lesson page, the first question will be presented.

3. When user submits the active Question, the Question HTML will be loaded into the editor.
The Question CSS will be loaded into the editor.
The Question view will show the rendering of the HTML code in the editor.
The Question view will show the rendering of the CSS code in the editor.
The current 'active' Question will be deactivated.
  Activated questions can 1. Be seen and 2. Perform actions.
  De-activated questions can 1. Be seen and 2. Not perform actions.
Then the next Question will be activated.

Then 3. again until the final Question is answered.

  It will have a tree of options. Let's start, though, with building a castle.

When they choose Build A Castle,
  Here are some of the basic options it will take them through:
    - Sky Color - Add Sky
    - Ground Color - Add Ground
    - Castle Wall (Color? Add.)
    - Castle Towers (Color? Add. How Many?)
    - Castle Turrets (Color? Add. Shape? (radio options))
    -  (Flag(s), Moat, Door, Windows, etc.)
    - Banner (Name your castle!)

  When they select an option in the select box, the changes will appear in the code and the pageview. (Stretch goal: ideally with a glow(fade) on the thing that just changed in the code.))

  There will be color selections, shape selections, text-style and text options.

  When they reach the end of the lesson, there will be bonus features like making the turrets glow, the banner wave, or adding color gradients to the divs.
  AND/OR: instructions on how to customize things themselves.


  When they finish, direct them to Scratch, Mozilla Thimble, CodePen, CodeSchool, CodeAcademy, etc. (Also allow page reload.)

## Stretch Goals / In Development:
- Another Lesson - Lesson Two, Build Your Pet's Web Page!
- At the end of the lesson:
  - present a button to let them take a screenshot of their creation.
  - a button to save the code as html & css files, with attached instructions of how to open it in a browser so they can play with it on their own.
- Bonus features on the Castle lesson:   When they reach the end of the lesson, there will be bonus features like making the turrets glow, the banner wave, or adding color gradients to the divs. And/or: instructions on how to customize things themselves.


Very Stretch:
- Option to save their castle as a URL (like CodePen does) so they can look at it again.
- Or, user authentication and saved castles that way.
