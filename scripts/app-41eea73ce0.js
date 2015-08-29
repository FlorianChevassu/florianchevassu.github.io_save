!function(){"use strict";angular.module("site",["ui.router","ui.bootstrap"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("site").service("webDevTec",e)}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"Amanite Template Engine",url:"https://github.com/FlorianChevassu/amanite_template_engine",description:"A simple C++11 templating engine with partial support for mustache templates.",logo:""},{title:"APM",url:"https://github.com/FlorianChevassu/APM",description:"A pure CMake based package manager. In development.",logo:""}];this.getProjects=e}angular.module("site").service("projectsService",e)}(),function(){"use strict";function e(e,t){function i(i){function a(e){return e.data}function s(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return i||(i=30),t.get(o+"/contributors?per_page="+i).then(a)["catch"](s)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:i};return a}angular.module("site").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";function e(){}angular.module("site").controller("ProjectsController",e)}(),function(){"use strict";function e(e,t,i,o){var a=this;a.projects=i.getProjects(),a.posts=o.posts,a.nbBlogPostShown=10}angular.module("site").controller("MainController",e),e.$inject=["$scope","$timeout","projectsService","blogService"]}(),function(){"use strict";function e(e,t,i){function o(){s(),e(function(){n.classAnimation="rubberBand"},4e3)}function a(){i.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),n.classAnimation=""}function s(){n.awesomeThings=t.getTec(),angular.forEach(n.awesomeThings,function(e){e.rank=Math.random()})}var n=this;n.awesomeThings=[],n.classAnimation="",n.creationDate=1437489112236,n.showToastr=a,o()}angular.module("site").controller("CvController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(){var e={posts:[{id:0,raw_url:"app/blog/posts/06_08_15_hello_blog.html",url:"06_08_15_hello_blog.html",date:new Date(2015,7,6)}]};return e}angular.module("site").factory("blogService",e)}(),function(){"use strict";angular.module("site").directive("post",function(){return{restrict:"E",transclude:"true",template:"<div><span class='blue-line'></span><h3>{{post.title}}</h3><div class='block-container'><div class='block-left'><h4 class='text-right'>{{post.date | date:'dd-MM-yyyy'}}</h4><div><h4 class='text-right tagBadge' ng-repeat='tag in post.tags'><a ng-click='filterTags(tag)'>{{tag}}</a></h4></div></div><div class='transclude-element' ng-transclude></div></div><nav ng-show='{{showPager()}}'><ul class='pager'><li class='previous' ng-show='{{getPreviousPostLink().length > 0}}'><a ng-href='{{getPreviousPostLink()}}'><span aria-hidden='true'>&larr;</span> Previous</a></li><li class='next' ng-show='{{getNextPostLink().length > 0}}'><a ng-href='{{getNextPostLink()}}'>Next <span aria-hidden='true'>&rarr;</span></a></li></ul></nav></div>",link:function(e,t,i){i.title&&(e.post.title=i.title),void 0!==i.tags&&(e.post.tags=i.tags.split(",")),i.route&&(e.post.route=i.route),e.post.snippet=t.find(".transclude-element")[0].textContent.substr(0,400).concat("...")}}})}(),function(){"use strict";function e(e,t,i,o,a,s){e.selectedTags="c++,cmake",e.currentState=o,e.posts=t.posts,e.isOnBlogIndex=function(){return"/blog"===i.path()},e.defaultBlogPostFilter=function(e){return""===a.id||void 0===a.id?!0:e.url===a.id},e.blogPostFilter=e.defaultBlogPostFilter;var n=e.posts.filter(e.blogPostFilter)[0].id;e.showPager=function(){return 1===e.posts.filter(e.blogPostFilter).length},e.getNextPostLink=function(){var t=e.posts[n+1];return void 0===t?null:"#/blog/"+t.url},e.getPreviousPostLink=function(){var t=e.posts[n-1];return void 0===t?null:"#/blog/"+t.url},e.scrollTo=function(e){var t=i.hash();i.hash(e),s(),i.hash(t)},e.filterTags=function(t){e.blogPostFilter=function(e){return[t].every(function(t){return e.tags.some(function(e){return e===t})})}}}angular.module("site").controller("BlogController",e),e.$inject=["$scope","blogService","$location","$state","$stateParams","$anchorScroll"]}(),function(){"use strict"}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.state("cv",{url:"/cv",templateUrl:"app/cv/cv.html",controller:"CvController",controllerAs:"cv"}),e.state("projects",{url:"/projects",templateUrl:"app/projects/projects.html",controller:"ProjectsController",controllerAs:"projects"}),e.state("projects.AmaniteTemplateEngine",{url:"/projects/amanite_template_engine",templateUrl:"app/projects/amanite_template_engine.html",parent:"projects"}),e.state("blog",{url:"/blog/:id",templateUrl:"app/blog/blog.html",controller:"BlogController",controllerAs:"blog"}),e.state("about",{url:"/about",templateUrl:"app/about/about.html"}),t.otherwise("/")}angular.module("site").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("site").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}angular.module("site").config(e),e.$inject=["$logProvider","toastr"]}(),angular.module("site").run(["$templateCache",function(e){e.put("app/about/about.html",'<div class="jumbotron"><h1>Florian CHEVASSU</h1><div><h3>I\'m a C++ engineer searching for a new job in Lyon - France</h3><p>If you have a job oportunity where I could embrace my C++ passion, contact me!</p><p>For more information, check my (French) <a href="#/cv">resume</a>!</p></div></div>'),e.put("app/blog/blog.html",'<div class="cv"><div class="row"><div class="col-md-9"><h1 class="cv-name">CppThings</h1><h2 class="cv-title">A blog about my day to day programming</h2></div></div><div ng-repeat="post in posts | filter:blogPostFilter | orderBy:\'-date\'" ng-include="" src="post.raw_url"></div></div>'),e.put("app/blog/blog.post.html","<div>{{id}}</div>"),e.put("app/cv/cv.html",'<div class="cv"><div class="row"><div class="col-md-9"><h1 class="cv-name">CHEVASSU Florian</h1><h2 class="cv-title">Ingénieur étude et développement C++</h2></div><div class="pull-right"><div class="contact-panel"><p>5 allée Léopold Sédar Senghor</p><p>69007 Lyon</p><p><a href="mailto:chevassu.florian@gmail.com">chevassu.florian@gmail.com</a></p><p><i class="fa fa-phone"></i>06 75 11 86 03</p><p><i class="fa fa-github"></i> <a href="https://github.com/FlorianChevassu">github.com/FlorianChevassu</a></p><p><i class="fa fa-globe"></i> <a href="#/">FlorianChevassu.github.io</a></p></div></div></div><accordion close-others="oneAtATime"><accordion-group is-open="true"><accordion-heading><span class="blue-line"></span><h3>Exp&eacute;rience</h3></accordion-heading><div class="block-container"><div class="block-left"><h4 class="text-right">Depuis juin 2013</h4></div><div class="block-right"><strong>Ingénieur étude et développement C++, Tech’Advantage, Solaize.</strong><ul><li>Développement d\'un composant COM Cape-Open permettant de simuler de façon rigoureuse l\'évolution de l\'état d\'un régénérateur d\'amine.<ul class="tags"><li>C++</li><li>COM</li><li>Fortran</li><li>Mathématiques Appliquées</li><li>Thermodynamique</li></ul></li><li>Maintenance et évolution d\'une librairie de calculs thermodynamiques en C++ : modernisation et industrialisation du code existant, refactoring, implémentation de nouveaux modèles.<ul class="tags"><li>C++</li><li>Thermodynamique</li></ul></li><li>Maintenance et évolution d’applications JEE basées sur Oracle 9 ias.<ul class="tags"><li>Java</li><li>Javascript</li><li>JSP</li><li>SQL</li></ul></li><li>Participation au développement d\'applications intranet.<ul class="tags"><li>Java (Spring)</li><li>Javascript (Angular)</li></ul></li></ul></div></div><div class="block-container"><div class="block-left"><h4 class="text-right">2010-2013</h4></div><div class="block-right"><strong>Ingénieur étude et développement C++ scientifique, Deployment, Besançon.</strong> Développement d\'une librairie de gestion de risques financiers en C++ :<ul><li>Implémentation de la partie calibration et simulation de séries temporelles de type GARCH et de la partie pricing ;</li><li>Co-écriture d’une <a href="http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2161561">publication</a> sur l’estimation par maximum de vraisemblance des modèles en espace d’état. Implémentation en Matlab, puis au sein de la librarie C++ dans le but de modéliser avec précision les séries de type ARMA ;</li><li>Déploiement des fonctionnalités de la librairie vers Matlab (fonction Mex) et vers Java (JNIs) ;</li><li>Paralélisation du code existant via OpenMP ;</li><li>Développement d\'un interface graphique permettant de démontrer les possibilités de la librairie en Flex (Adobe Air) ;</li></ul><ul class="tags"><li>C++</li><li>OpenMP</li><li>Matlab</li><li>Java</li><li>JNI</li><li>Flex</li><li>Mathématiques Appliquées</li></ul></div></div></accordion-group><accordion-group is-open="true"><accordion-heading><span class="blue-line"></span><h3>Formation</h3></accordion-heading><div class="block-container"><div class="block-left"><h4 class="text-right">2010</h4></div><div class="block-right">Master Modélisation Statistique, Université de Franche-Comté, Besançon.</div></div><div class="block-container"><div class="block-left"><h4 class="text-right">2008</h4></div><div class="block-right">License en Mathématiques Appliquées, Université de Franche-Comté, Besançon.</div></div><div class="block-container"><div class="block-left"><h4 class="text-right">2005</h4></div><div class="block-right">Baccalauréat scientifique, Lycée Jean-Michel, Lons-le-Saunier.</div></div></accordion-group><accordion-group is-open="true"><accordion-heading><span class="blue-line"></span><h3>Compétences</h3></accordion-heading><div class="block-container"><div class="block-left"></div><div class="block-right"><h4>Développement</h4></div></div><div class="block-container"><div class="block-left"><h4 class="text-right">C++</h4></div><div class="block-right">Connaissances approfondies. Normes C++ 11, 14 et 1z (17 ?) Librairies boost, POCO, Qt, Eigen, Armadillo Parallélisation OpenMP, HPX, Boost.Compute</div></div><div class="block-container"><div class="block-left"><h4 class="text-right">Autres</h4></div><div class="block-right">Java, C#, Matlab, Scilab, SQL, JavaScript</div></div><div class="block-container"><div class="block-left"></div><div class="block-right"><h4>Langues</h4></div></div><div class="block-container"><div class="block-left"><h4 class="text-right">Anglais</h4></div><div class="block-right"><span>Bon niveau - <em>Pratique régulière</em></span></div></div><div class="block-container"><div class="block-left"><h4 class="text-right">Espagnol</h4></div><div class="block-right"><span>Niveau moyen - <em>Connaissances acquises au sein de Deployment</em></span></div></div><div class="block-container"><div class="block-left"><h4 class="text-right">Néérlandais</h4></div><div class="block-right"><span>Notions - <em>Langue maternelle</em></span></div></div></accordion-group></accordion></div>'),e.put("app/main/main.html",'<div class="jumbotron"><h1>I\'m a C++ developer searching for a new job in Lyon - France</h1><div><p>If you have a job opportunity that may interest me, don\'t hesitate to <a href="mailto:chevassu.florian@gmail.com?subject=Job opportunity" class="link">contact me</a>.</p><p>For more information, check my (French) <a href="#/cv" class="link">resume</a>!</p></div></div><div class="row" ng-controller="MainController as vm"><div class="col-md-12 sectionSeparator"><h2>Recent blog posts</h2></div><div class="col-md-6" ng-repeat="post in vm.posts | orderBy:\'-date\' | limitTo:nbBlogPostShown"><div class="well"><div class="caption"><div ng-hide="true" ng-include="" src="post.raw_url"></div><h3><a ng-href="#/blog/{{post.url}}">{{post.title}}</a></h3><h4>{{post.date | date:\'dd-MM-yyyy\'}}</h4><span ng-repeat="tag in post.tags" class="tagBadge">{{tag}}</span><p>{{post.snippet}}</p><a ng-href="#/blog/{{post.url}}" class="seeMoreLink pull-right">see more</a></div></div></div><div class="col-md-12 sectionSeparator"><h2>Projects</h2></div><div class="col-md-6" ng-repeat="project in vm.projects"><div class="thumbnail well"><div class="caption"><h3><a ng-href="{{project.url}}">{{project.title}}</a></h3><p>{{project.description}}</p></div></div></div></div>'),e.put("app/projects/projects.html",'<div class="projects"></div>'),e.put("app/blog/posts/06_08_15_hello_blog.html",'<div class="cv"><post title="Hello blog !"><p>Here it is. My first blog post. Ever.</p><p>Yes I know, I\'m a bit late... but as we say, <q>better late than never</q>!</p><p>It\'s been a long time since I had the idea to create my own blog. But I never took the step. Every time I was talking about it, people said "Just create a wordpress, it\'s easy ! It would take you just an hour to have your blog online !" In fact, I created a wordpress once. But I did not post anything... I did not like the idea of wordpress. Don\'t get me wrong, it is a wonderfull tool. And I know a lot of people that are happy about it. But as a developper, I wanted to create my own blog. And by create, I mean doing it myself, with my own hands.</p><p>That\'s what I did here. I was in vacancy for the week, and I had time to spend on it. So I decided to create my own website. It was (and is) quite a chalenge for me. I\'m a C++ developper, I\'ve never done this before... Yeah, right, I\'ve done some<del>good</del>old JSP at work, but that was just hacking into an existing source code, and it\'s a completely different technology. Here I used Angular combined with Bootstrap, as my web dev\' friends told me. They helped me a lot by the way...</p><p>Anyway. That\'s not what this blog will be about. I\'m a passionate C++ developper, and I do a lot of things in <em>my day to day programming</em> that I want to share with you. It could be a post about one of my (never ending) side projects, or about a library that I wanted to test, or even just a link to a post from another blog that I liked.</p><p>To illustrate this, and as a conclusion, I want to share with you a CommitStrip from last year. I think it\'s the perfect representation of some of my side projects :</p><a href="http://www.commitstrip.com/en/2014/11/25/west-side-project-story/?setLocale=1" target="_blank"><img src="http://www.commitstrip.com/wp-content/uploads/2014/11/Strip-Side-project-650-finalenglish.jpg" style="width:50%; text-align:center;display: block; margin:auto;"></a></post></div>'),e.put("app/blog/posts/12_08_15_APM_a_cmake_dependency_manager.html",'<div class="cv"><post title="APM - A pure CMake package manager" tags="C++, CMake"><p>Today I want to present you one of my recent side projects : a package manager with codename \'APM\' (APM stands for \'Another Package Manager\'... If you\'re inspired, I\'m open to new name propositions!).</p><p>APM is written in pure CMake, without any other dependency. It aims to be simple, and to stay simple. To use it, just include the APM.cmake script in your main CMakeLists.txt. "Requiring" a package should feel natural to all CMake developers, as it uses a signature comparable to the "find_package" CMake function. Here is an example requiring Boost:</p><pre>require(Boost VERSION 1.57.0 TARGETS MyTarget COMPONENTS filesystem system)</pre><p>You see, nothing special here. This line just tells APM to find boost in version 1.57.0, and configure the target \'MyTarget\' to use boost with components \'system\' and \'filesystem\'. If boost is not found, the user will have to either ask for installation (via a CACHE variable) or specify the root directory of the Boost package installation.</p><p>Of course, there is no magic, APM needs to be configured to do such things. In this post, I will describe in detail how APM works, and how to extend it to allow users to require other packages.</p><h1>Basic concepts</h1>APM aims to be (and to stay) simple. Its implementation is based on some simple key concepts :<h2>APM modules</h2>Package providers need to provide a CMake script named "APM_${packageName}.cmake", refered as an "APM module". This module needs to implement a set of functions that APM will use to find a package, install a package, or configure a target to use a package. APM modules are installed in an <a href="" ng-click="scrollTo(\'APM_module_repositories\')">APM module repository</a>.<h2>APM packages</h2>An APM package represent an actual external project that can be required by APM users, like Boost in our example. A package is stored in a package <a href="" ng-click="scrollTo(\'APM_repositories\')">repository</a> way that allows it to manage dfferent versions of the library, and different binaries built with different compilers or for different architectures.<h2 id="APM_module_repositories">APM module repositories</h2><p>APM module repositories are folders where APM will install and search for modules.<br>Modules are installed with the <a href="" ng-click="scrollTo(\'APM_install_module\')">APM_install_module</a> function.</p><h2 id="APM_package_repositories">APM package repositories</h2>Modules and packages are stored in "APM repositories". These repositories are just folders with a particular structure that APM will use to find/install a module/package.<h1>In-depth presentation</h1></post></div>')}]);