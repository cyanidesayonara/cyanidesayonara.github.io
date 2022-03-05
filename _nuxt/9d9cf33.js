(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{306:function(e,n){e.exports={attributes:{title:"Introduction to the blog",description:"This post will serve as a brief introduction to the content and purpose of this blog",date:"2021-07-25T00:00:00.000Z",author:{name:"Santtu Nykänen",bio:"I'm a thirty-something fullstack developer from Helsinki.",image:"photo.png"}},html:'<h2>What to expect from this blog</h2>\n<p>This blog will contain tutorials and walkthroughs of my personal projects as\nwell as discussion on other technical topics. I\'m starting with the obvious\none, this blog!</p>\n<p>In the next few blog posts we will drill into the nitty-gritty of creating a\nJAMstack blog with the Vue-based framework Nuxt.js and its @nuxt/content\nmodule, which will allow us to easily turn Markdown files into blog posts.</p>\n<p>If that means nothing to you, don\'t worry: We will start with an overview of\nthe terms mentioned in the previous paragraph as well as an explanation of\nthe general purpose of the blog itself.</p>\n<img src="index.png" alt="Screenshot of the landing page" />\n<p>Here\'s a screenshot of what the landing page looks like now. It has\nnavigation links to portfolio/blog, a language selector and a cute photo of me.</p>\n<p>Aside from the top bar, all of the content on screen is rendered from Markdown.</p>\n<p>At this point the blog is functional, but very bare bones. Hence the\nfollowing posts will also include tutorials on how to add new features.</p>\n<hr>\n<h2>New features to add</h2>\n<p>Here\'s a short list of missing features that I can come up with off the top\nof my head:</p>\n<h3>A button that allows the user to print my resume as a PDF file</h3>\n<img src="portfolio.png" alt="Screenshot of the portfolio page" />\n<p>This is what the portfolio page looks like now.</p>\n<p>As the porpose of this blog (for now at least) is mainly to be a landing\npage for recruiters, I wanted to create an easy way to print a\ndecent-looking and up-to-date PDF of my resume.</p>\n<p>The layout is still a bit rough to say the least, but it already has a lot\nof functionality. The author section as well as the table of contents are<br>\nalso generated from the same Markdown file. Stashed in a corner somewhere<br>\nI would like to see a button that says &quot;Print PDF&quot;.</p>\n<h3>Improving the search page</h3>\n<img src="search.png" alt="Screenshot of the search page" />\n<p>This is what the search page looks like now.</p>\n<p>It shows latest blog posts listed in order of publishing date.</p>\n<p>On the bottom there is a functional search box, but it still needs to be\nimproved and bugsprayed.</p>\n<p>The button that says &quot;Add new post&quot; is not yet implemented, but is\nsupposed to create a new Markdown file with entered title and other\nmetadata, making it less of a hassle. The button only show up in\ndevelopment mode.</p>\n<p>The &quot;See more posts&quot; button is also waiting to be implemented, perhaps\nwith a spinner and a popup if no posts were found.</p>\n<h3>A list of related blog posts &amp; better navigation between blog</h3>\n<img src="blog.png" alt="Screenshot of the blog page" />\n<p>Here\'s a screenshot of what the blog page looks like now.</p>\n<p>This might be a more advanced feature, but there could be a list of posts\nwith related keywords on the bottom of each post.</p>\n<p>More navigational links should be also added, such as buttons for\nnext/previous post.</p>\n<p>It has almost exactly the same layout as the portfolio page, aside from\nthe author page being moved to the bottom.</p>\n<h3>Comments</h3>\n<p>As the blog uses no backend or database, reader comments will have to be\nadded through an exteral service. I have no idea how yet, but this will\ndefinitely be explored in a later post.</p>\n<p>Of course, not all of these features are necessary or even feasible, but it\nshould still be interesting to try to implement them. You often learn more\nfrom failure than success after all!</p>\n<hr>\n<h2>What not to expect from this blog</h2>\n<p>This will NOT be a personal blog. I\'ll do my best to spare you the sordid\ndetails of my life, however, I might throw in a funny anecdote where\nappropriate. Let\'s keep it casual.</p>\n<p>So, please tag along whether you\'re someone who already knows how to code or\nsomeone eager to learn. My hope is to grow this blog from a mere recruiting\ntool to a fully realized platform for documenting my work. This is a start.</p>\n<p>Yours truly,</p>\n<p>-Santtu</p>\n'}},307:function(e,n){e.exports={attributes:{title:"How to create a JAMstack blog with Nuxt.js and @nuxt/content, part 1",description:"This post will provide you with a glossary of the technical terms you need to know as well as the reasoning behind choosing those technologies",date:"2021-08-14T00:00:00.000Z",author:{name:"Santtu Nykänen",bio:"I'm a thirty-something fullstack developer from Helsinki.",image:"photo.png"}},html:"<h2>Glossary of terms</h2>\n<p>The title of this post has some technical terms you may or may not be\nfamiliar with. Let's go through them one by one</p>\n<h3>JAMstack</h3>\n<p>Wikipedia says:</p>\n<p><em><strong>&quot;Jamstack, previously stylized as JAMStack, stands for Javascript, API\nand Markup (generated by a static site generator) and was first coined by\nMathias Biilmann, CEO of Netlify in 2015. In Jamstack websites, the\napplication logic typically resides on the client side (for example\nembedded e-commerce checkout that interacts with pre-rendered static\ncontent), without being tightly coupled to the back end server. They are\nmostly served with git based CMS or headless CMS. Netlify organizes a\nconference every year called &quot;Popular Jamstack&quot; that is co-hosted amongst\nothers by Vercel and Cloudflare Pages.</strong></em></p>\n<p><em><strong>The Jamstack is not a framework but is rather defined by Jamstack.org\nas an architecture pattern.&quot;</strong></em></p>\n<h3>Nuxt.js</h3>\n<p>Again, a Wikipedia description:</p>\n<p><em><strong>&quot;Nuxt.js is a free and open source web application framework based on\nVue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which\nis a framework of similar purpose, based on React.js.</strong></em></p>\n<p><em><strong>The framework is advertised as a &quot;meta-framework for universal\napplications&quot;. The term universal is used here with the meaning that the\ngoal of the framework is to enable users to create web views in JavaScript\nutilizing the Vue.js single file component system and that can function\nboth as in-browser single page application (SPA) views as well as\nserver-rendered web views which are then (after server rendering)\n&quot;rehydrated&quot; to full SPA functionality. Additionally, the framework\nenables users to have the content, or parts of it, fully pre-rendered on\nthe server and served in the manner of static site generators.</strong></em></p>\n<p><em><strong>The benefits of this approach are, among others, reduced time to\ninteractivity and improved SEO compared to SPAs, due to the fact that full\ncontents of each page are being served by the web server before any\nclient-side JavaScript is executed. Put alternatively, one can maintain\nboth the benefits of traditional server-side rendered HTML pages, and\nimproved interactivity and advanced user interface of SPAs. The core\nbenefit of the Nuxt.js framework itself is that it makes the configuration\nand setup of such applications simplified and seamless to the application\ndeveloper, who can simply develop UI portions of the application as if it\nwere a more common Vue.js single file application. NuxtJS version 3.0\nhasn't been announced by the developers.&quot;</strong></em></p>\n<h3>@nuxt/content</h3>\n<p>@nuxt/content is a Nuxt.js module. nuxtjs.org describes it thusly:</p>\n<p><em><strong>&quot;Empower your NuxtJS application with @nuxt/content module: write in a\ncontent/ directory and fetch your Markdown, JSON, YAML, XML and CSV files\nthrough a MongoDB like API, acting as a Git-based Headless CMS.&quot;</strong></em></p>\n<p>To be continued...</p>\n"}},308:function(e,n){e.exports={attributes:{language:"en",date:"2021-12-20T00:00:00.000Z",title:"Portfolio"},html:'<h2>Introduction</h2>\n<p>I\'m a career changer who started studying coding about four years ago, in the summer of 2017. I still remember the day when I first started. It was June 1st.</p>\n<p>Having had a long and unfulfilling time at my old job, my friend got the great idea of starting an online programming course together. After reading on the news about a high demand for coders, as well as just having a competitive streak, I said count me in.</p>\n<p>The course, called CS50x, was given online by Harvard professor David Malan and his staff, and looked frankly intimidating.</p>\n<img src="basketball.png" class="float-left mr-3 mb-0 w-1/2" alt="Screenshot of the basketball game" />\n<p>Yet on that fateful first day, as I was staying up till the wee hours piecing together a silly <a href="https://scratch.mit.edu/projects/164378114/">basketball game</a> with an educational, Lego-like programming language called Scratch, I\'d already decided what I wanted to do next.</p>\n<p>Even though the road to becoming employable seemed long and hard, I hadn\'t had this much fun while studying in a long time, if ever.</p>\n<p>So, after devouring the course and teaching myself through various means for a little under two years, I finally found my first coding gig in the spring of 2019. Working as a consultant, I\'ve since had the chance to work on a few different projects for just under three years now.</p>\n<p>At work I\'ve mostly been writing Python, Java and JavaScript, in no particular order. On my own time I like to experiment and learn new stuff; most recently I\'ve been doing a lot of catching up on Android development with Kotlin and Flutter.</p>\n<hr>\n<h2>Work Experience</h2>\n<aside>\n  <a rel="noreferrer" href="https://www.linkedin.com/company/solidabis/">\n    <font-awesome-icon :icon="[\'fab\', \'linkedin\']" />\n  </a>\n</aside>\n<h3>Solidabis Oy</h3>\n<p>Software development as a consultant on various client projects in both backend and frontend roles, usually a mix of both. Started in March 2019, so I have close to three years worth of experience now.</p>\n<p>Keywords: <em>Java, JavaScript, Python, PostgreSQL, Docker, Node, React, Spring, Azure, AWS, GraphQL, Robot Framework</em></p>\n<hr>\n<h2>Personal Projects</h2>\n<aside>\n  <a href="https://varastolista.herokuapp.com/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']" />\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/varastolista">\n    <font-awesome-icon :icon="[\'fab\', \'github\']" />\n  </a>\n</aside>\n<h3>Varastolista</h3>\n<img src="varastolista.png" alt="Screenshot Varastolistasta" />\n<p>An inventory app I made as a student project for the radiation therapy department at the Meilahti hospital.</p>\n<p>It\'s a fairly simple CRUD app that enables the user to find, add, edit, or delete spare parts on a list.</p>\n<p>The parts list can also be imported or exported as an Excel file. A QR-code reader functionality that uses your phone camera can be used to input part numbers.</p>\n<p>Keywords: <em>Python, Django, JavaScript, jQuery, PostgreSQL, Instascan, Heroku</em></p>\n<hr>\n<aside>\n  <a href="https://github.com/cyanidesayonara/monitorimittari">\n    <font-awesome-icon :icon="[\'fab\', \'github\']" />\n  </a>\n</aside>\n<h3>Monitorimittari</h3>\n<img src="monitorimittari.png" alt="Screenshot of Monitorimittari" />\n<p>Another program I made for the guys at the Hospital District of Helsinki.</p>\n<p>The hospital engineers are tasked with monitoring the luminance level of displays connected to imaging devices. This little Python-based GUI-program is for logging test results with a USB-connected LXscan spot luminance meter and saving them straight onto an .xlsx template, thus saving the engineer valuable time and effort from having to log each result down by hand.</p>\n<p>The program is built using the PyQT5 library and the resulting Python files are rolled up into an .exe file using PyInstaller.</p>\n<p>Keywords: <em>Python, PyQt5, PyInstaller</em></p>\n<hr>\n<aside>\n  <a href="https://github.com/cyanidesayonara/dopepod">\n    <font-awesome-icon :icon="[\'fab\', \'github\']" />\n  </a>\n</aside>\n<h3>dopepod</h3>\n<img src="dopepod.png" alt="Screenshot of dopepod" />\n<p>A web app that catalogues free podcasts with the help of the iTunes API (and scrapes some additional information from other sources).</p>\n<p>A user of the app is able to search and listen to hundreds of thousands of podcasts sorted by genre and language.</p>\n<p>A registered user is also able to subscribe to podcasts and to create a playlist.</p>\n<p>Keywords: <em>Python, Django, JavaScript, jQuery, Bootstrap, PostgreSQL, Scrapy, DigitalOcean, Haystack, Elasticsearch</em></p>\n<hr>\n<aside>\n  <a href="https://dop3pod.herokuapp.com/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']" />\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/dop3pod">\n    <font-awesome-icon :icon="[\'fab\', \'github\']" />\n  </a>\n</aside>\n<h3>dop3pod</h3>\n<img src="dop3pod.png" alt="Screenshot dop3podista" />\n<p>Version 3.0 of my above-mentioned pet project. It aims to recreate similar functionality using more modern technologies and shall we say a more well-thought-out architecture.</p>\n<p>Perhaps the most interesting addition to the project is an Android/iOS app developed with Flutter.</p>\n<p>Keywords: <em>Python, Django Rest Framework, Celery, Redis, Go, Flutter, Docker, PostgreSQL, Scrapy, DigitalOcean</em></p>\n<hr>\n<aside>\n  <a href="https://noteowl.herokuapp.com/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/noteowl">\n    <font-awesome-icon :icon="[\'fab\', \'github\']"/>\n  </a>\n</aside>\n<h3>NoteOwl</h3>\n<img src="noteowl.png" alt="Screenshot of NoteOwl"/>\n<p>A web app that can be used for writing down notes and associating them with tasks on a calendar. It has colorful, draggable post-it notes that can be arranged and stacked howsoever one pleases.</p>\n<p>It uses React on the frontend and Node &amp; Express on the backend. The database is a cloud hosted MongoDB and the backend app itself is running on a Heroku cloud server.</p>\n<p>Keywords: <em>JavaScript, Node, React, MongoDB, Heroku</em></p>\n<hr>\n<h2>Education &amp; Other Courses</h2>\n<aside>\n  <a rel="noreferrer" href="https://www.haaga-helia.fi/fi/tietojenkasittelyn-koulutus-tradenomi-amk">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n</aside>\n<h3>Bachelor of Business Administration</h3>\n<p>Bachelor\'s degree in Business Information Technology at Haaga-Helia University, majoring in Software Development. Started in 2018, ongoing.</p>\n<p>Keywords: <em>Java, JavaScript, Python, SQL, HTML, CSS, React, Spring, Heroku</em></p>\n<hr>\n<aside>\n  <a rel="noreferrer" href="https://fullstackopen.com/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/fullstack-mooc-2021">\n    <font-awesome-icon :icon="[\'fab\', \'github\']"/>\n  </a>\n</aside>\n<h3>Fullstack Open 2021</h3>\n<p>A comprehensive online course on fullstack development by the University of Helsinki. Completed in 2021.</p>\n<p>Keywords: <em>React, Redux, Node, MongoDB, GraphQL, TypeScript, Express, Jest, Cypress, React Native</em></p>\n<hr>\n<aside>\n  <a rel="noreferrer" href="https://www.elementsofai.com/fi">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n</aside>\n<h3>Elements of AI</h3>\n<p>An open online course on the basics of AI by the University of Helsinki. Completed in 2019.</p>\n<p>Keywords: <em>Artificial Intelligence, Machine Learning</em></p>\n<hr>\n<aside>\n  <a rel="noreferrer" href="https://2017-ohjelmointi.github.io/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/java-mooc">\n    <font-awesome-icon :icon="[\'fab\', \'github\']"/>\n  </a>\n</aside>\n<h3>Ohjelmoinnin perusteet ja jatkokurssi 2017</h3>\n<p>An online course on Java development by the University of Helsinki consisting of introductory and advanced parts. Completed in 2017.</p>\n<p>Keywords: <em>Java</em></p>\n<hr>\n<aside>\n  <a rel="noreferrer" href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/cs50-mooc">\n    <font-awesome-icon :icon="[\'fab\', \'github\']"/>\n  </a>\n</aside>\n<h3>CS50X</h3>\n<p>An open online course on computer science by Harvard University. Singularly responsible for making me want to learn how to code. Completed in 2017.</p>\n<p>Keywords: <em>C, Python, JavaScript, SQL, HTML, CSS</em></p>\n'}},309:function(e,n){e.exports={attributes:{language:"fi",date:"2021-12-20T00:00:00.000Z",title:"Portfolio"},html:'<h2>Esittely</h2>\n<p>Olen uranvaihtaja, joka aloitti koodauksen opiskelun nelisen vuotta sitten, kesällä 2017. Muistan vieläkin päivän, jona aloitin. Se oli kesäkuun 1.</p>\n<p>Oltuani pitkään tyytymätön edelliseen työhöni, kaverini sai päähänsä hienon idean että aloittaisimme ohjelmoinnin nettikurssin. Luettuani uutisista koodaustyön olevan kovassa huudossa, sekä myös kilpailuhenkisyyttäni, lähdinkin heti mukaan.</p>\n<p>Se kurssi, nimeltään CS50x, oli Harvadin professori David Malanin vetämä ja näytti vähintäänkin haastavalta.</p>\n<img src="basketball.png" class="float-left mr-3 mb-0 w-1/2" alt="Screenshot koripallopelistä" />\n<p>Mutta kuinka ollakaan tuona kohtalokkaana päivänä, valvottuani  pikkutunneille kasatessani hölmöä <a href="https://scratch.mit.edu/projects/164378114/">koripallopeliä</a> opetuskäyttöön tarkoitetulla Legomaisella ohjelmointikielellä nimeltä Scratch, olin jo päättänyt mitä haluan tehdä seuraavaksi.</p>\n<p>Vaikka näyttikin selvältä, että tie ammattilaiseksi on vielä pitkä ja raskas, en ollut nauttinut opiskelusta näin paljoa pitkään aikaan, jos koskaan.</p>\n<p>Jotenka, ahmittuani tuon kurssin läpi ja opiskeltuani muita lähteitä käyttäen vajaat pari vuotta, löysin viimein ensimmäisen koodaustyöni keväällä 2019. Työskentelen konsulttina talossa, jossa olen päässyt kehittämään erilaisia projekteja nyt vajaan kolmen vuoden ajan.</p>\n<p>Töissä olen koodaillut enimmäkseen Pythonia, Javaa ja JavaScriptia, ei missään erityisessä järjestyksessä. Omalla ajallani tykkään kokeilla ja oppia uusia asioita; viime aikoina olen ottanut Android-kehitystä haltuun Kotlinilla ja Flutterilla.</p>\n<hr>\n<h2>Työkokemus</h2>\n<aside>\n  <a rel="noreferrer" href="https://www.linkedin.com/company/solidabis/">\n    <font-awesome-icon :icon="[\'fab\', \'linkedin\']" />\n  </a>\n</aside>\n<h3>Solidabis Oy</h3>\n<p>Softakehitystä konsulttina erinäisissä asiakasprojekteissa sekä backend- että frontend-rooleissa, yleensä vähän kutakin. Alkanut maaliskuussa 2019, eli kokemusta on nyt vajaan kolmen vuoden ajalta.</p>\n<p>Avainsanat: <em>Java, JavaScript, Python, PostgreSQL, Docker, Node, React, Spring, Azure, AWS, GraphQL, Robot Framework</em></p>\n<hr>\n<h2>Omia projekteja</h2>\n<aside>\n  <a href="https://varastolista.herokuapp.com/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']" />\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/varastolista">\n    <font-awesome-icon :icon="[\'fab\', \'github\']" />\n  </a>\n</aside>\n<h3>Varastolista</h3>\n<img src="varastolista.png" alt="Screenshot Varastolistasta" />\n<p>Varastolista-appi, jonka tein opiskeluprojektina Meilahden sairaalan säteilytekniikan osastolle.</p>\n<p>Kyseessä on melko simppeli CRUD-appi, jolla käyttäjä voi hakea, lisätä, muokata, tai poistaa varaosia listalta.</p>\n<p>Osalistan voi myös importata ja exportata excelinä. Osanumeroiden lukemisen avuksi on QR-koodinlukija, joka käyttää apunaan puhelimen kameraa.</p>\n<p>Avainsanat: <em>Python, Django, JavaScript, jQuery, PostgreSQL, Instascan, Heroku</em></p>\n<hr>\n<aside>\n  <a href="https://github.com/cyanidesayonara/monitorimittari">\n    <font-awesome-icon :icon="[\'fab\', \'github\']" />\n  </a>\n</aside>\n<h3>Monitorimittari</h3>\n<img src="monitorimittari.png" alt="Screenshot Monitorimittarista" />\n<p>Toinen Meilahden sairaalan säteilytekniikan jampoille tehty pieni Python-ohjelma.</p>\n<p>Sairaalainsinöörien tehtävänä on monitoroida kuvantamislaitteiden valovoimaisuutta kirjaamalla mittaustuloksia excel-tiedostoon. Tällä pikku Python-ohjelmalla voidaan kirjata USB-kytketyllä LXscan-luminanssimittarilla mitattuja testituloksia suoraan pohjana käytettävään .xlsx-tiedostoon, säästäen näin insinöörin arvokasta aikaa ja vaivaa tulosten käsinkirjaamiselta.</p>\n<p>Ohjelman ulkoasu on rakennettu käyttäen PyQt5-kirjastoa ja syntyneet Python-tiedostot on pyöräytetty yhdeksi .exe-tiedostoksi PyInstallerilla.</p>\n<p>Avainsanat: <em>Python, PyQt5, PyInstaller</em></p>\n<hr>\n<aside>\n  <a href="https://github.com/cyanidesayonara/dopepod">\n    <font-awesome-icon :icon="[\'fab\', \'github\']" />\n  </a>\n</aside>\n<h3>dopepod</h3>\n<img src="dopepod.png" alt="Screenshot dopepodista" />\n<p>Web appi, joka tarjoaa laajan katalogin iTunesin API:n avulla noudettuja podcasteja (ja kaapii lisätietoa muista lähteistä).</p>\n<p>Äppylän käyttäjä voi etsiä ja soittaa satoja tuhansia kielen ja genren mukaan lajiteltuja ilmaisia podcasteja.</p>\n<p>Rekisteröitynyt käyttäjä voi myös tehdä tilauksia ja muodostaa soittolistan.</p>\n<p>Avainsanat: <em>Python, Django, JavaScript, jQuery, Bootstrap, PostgreSQL, Scrapy, DigitalOcean, Haystack, Elasticsearch</em></p>\n<hr>\n<aside>\n  <a href="https://dop3pod.herokuapp.com/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']" />\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/dop3pod">\n    <font-awesome-icon :icon="[\'fab\', \'github\']" />\n  </a>\n</aside>\n<h3>dop3pod</h3>\n<img src="dop3pod.png" alt="Screenshot dop3podista" />\n<p>Versio 3.0 ylläolevasta lemmikkiprojektistani. Pyrkii toteuttamaan vastaavan toiminnallisuuden modernimmilla teknologioilla ja sanoisinko enempi loppuun asti ajatellulla arkkitehtuurilla.</p>\n<p>Kenties kiintoisimpana uutuutena projektissa on Flutterilla kehitetty Android/iOS-app.</p>\n<p>Avainsanat: <em>Python, Django Rest Framework, Celery, Redis, Go, Flutter, Docker, PostgreSQL, Scrapy, DigitalOcean</em></p>\n<hr>\n<aside>\n  <a href="https://noteowl.herokuapp.com/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/noteowl">\n    <font-awesome-icon :icon="[\'fab\', \'github\']"/>\n  </a>\n</aside>\n<h3>NoteOwl</h3>\n<img src="noteowl.png" alt="Screenshot NoteOwlista"/>\n<p>Web appi, jolla voi kirjata ylös muistiinpanoja sekä assosioida niitä kalenterista löytyvien tehtävien mukaan. Käytössä on värikkäitä, raahattavia post-it -lappuja, joita käyttäjä voi järjestää mielensä mukaan.</p>\n<p>Frontendissä käytössä on React ja backendissä parivaljakko Node &amp; Express. Tietokanta on pilvi-hostattu MongoDB ja itse backend-appi pyörii Herokun pilviserverillä.</p>\n<p>Avainsanat: <em>JavaScript, Node, React, MongoDB, Heroku</em></p>\n<hr>\n<h2>Koulutus &amp; muita kursseja</h2>\n<aside>\n  <a rel="noreferrer" href="https://www.haaga-helia.fi/fi/tietojenkasittelyn-koulutus-tradenomi-amk">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n</aside>\n<h3>Tietojenkäsittelyn koulutus, tradenomi</h3>\n<p>Tradenomin tutkinto Haaga-Helia AMK:ssa, suuntautumisalana ohjelmistokehitys. Aloitettu 2018, kesken.</p>\n<p>Avainsanat: <em>Java, JavaScript, Python, SQL, HTML, CSS, React, Spring, Heroku</em></p>\n<hr>\n<aside>\n  <a rel="noreferrer" href="https://fullstackopen.com/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/fullstack-mooc-2021">\n    <font-awesome-icon :icon="[\'fab\', \'github\']"/>\n  </a>\n</aside>\n<h3>Fullstack Open 2021</h3>\n<p>Helsingin yliopiston varsin kattava avoin fullstack-ohjelmoinnin verkkokurssi. Suoritettu 2021.</p>\n<p>Avainsanat: <em>React, Redux, Node, MongoDB, GraphQL, TypeScript, Express, Jest, Cypress, React Native</em></p>\n<hr>\n<aside>\n  <a rel="noreferrer" href="https://www.elementsofai.com/fi">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n</aside>\n<h3>Elements of AI</h3>\n<p>Helsingin yliopiston tarjoama avoin verkkokurssi tekoälyn perusteista. Suoritettu 2019.</p>\n<p>Avainsanat: <em>Tekoäly, Koneoppiminen</em></p>\n<hr>\n<aside>\n  <a rel="noreferrer" href="https://2017-ohjelmointi.github.io/">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/java-mooc">\n    <font-awesome-icon :icon="[\'fab\', \'github\']"/>\n  </a>\n</aside>\n<h3>Ohjelmoinnin perusteet ja jatkokurssi 2017</h3>\n<p>Helsingin yliopiston laaja, kaksiosainen avoin Java-ohjelmoinnin verkkokurssi. Suoritettu 2017.</p>\n<p>Avainsanat: <em>Java</em></p>\n<hr>\n<aside>\n  <a rel="noreferrer" href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x">\n    <font-awesome-icon :icon="[\'fas\', \'external-link-alt\']"/>\n  </a>\n  <span class="pipe"> | </span>\n  <a href="https://github.com/cyanidesayonara/cs50-mooc">\n    <font-awesome-icon :icon="[\'fab\', \'github\']"/>\n  </a>\n</aside>\n<h3>CS50X</h3>\n<p>Harvardin avoin tietojenkäsittelytieteen verkkokurssi. Tämä kurssi sai alun perin innostumaan koodauksen opiskelusta. Suoritettu 2017.</p>\n<p>Avainsanat: <em>C, Python, JavaScript, SQL, HTML, CSS</em></p>\n'}},467:function(e,n,t){var map={"./content/blog/1/index.md":306,"./content/blog/2/index.md":307,"./content/portfolio/en.md":308,"./content/portfolio/fi.md":309};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(map,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=467},488:function(e,n,t){"use strict";t.r(n);t(51);var o={props:{src:{type:String,required:!0},alt:{type:String,required:!0}},methods:{imgSrc:function(){try{var e=this.$parent.$parent.post;return t(467)("./content".concat(e.dir,"/images/").concat(this.src))}catch(e){return null}}}},r=t(39),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("img",{attrs:{src:e.imgSrc(),alt:e.alt}})}),[],!1,null,null,null);n.default=component.exports}}]);