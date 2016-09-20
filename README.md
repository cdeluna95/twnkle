# Astromeet
Astromeet is a dating app that aims to connect two potential partners based on their astrological sign.

## Build Instructions
For this project we are using the MEAN stack (Mysql, Express, Angular, Node). Which means that
these technologies need to be present in whatever environment you choose to work in.

### C9 Environment Setup
 If you are using 
C9, then make sure that you create a new workspace and select the Node.js environment.
Using C9 means that you already have Node and mysql running in your environment. 

If you are running C9 jump to Step 4 of the local environment setup.

If you need
help running the application in C9 contact David.

### Local Environment Setup
If you want to work on your local system, then god save the queen, you are a brave soul. 
If you aren't quite sure how everything works, then I highly recommend looking into running
a VM on your computer, and using that to develop in. This will allow you to simply remove the VM
when you are done working on this project, this will also make sure that your laptop doesn't
get bogged down with unneccessary clutter. Either way...

###### Step 1: Install Node
* Go here: <https://nodejs.org/en/>
* Click on the button that says "v4.x.x LTS"
  * This will start your download
  * If you are running on windows, then simply follow the installer and you will be up
  and running
  * If you are running linux or OS X, then you can either google how to install it or 
  talk to David and he'll get you setup. (It's a little more complicated then a simple 
  windows installer)
* type `node -v` into a terminal and make sure it comes back and says something like
`v4.4.3` or whatever version you downloaded
* Take a breath

###### Step 2: Install Mysql
* Go here: <http://dev.mysql.com/downloads/mysql/>
* Find the correct download for your operating system
* Download it
* Install it 
  * PAY ATTENTION DURING THIS... It will ask you for a root password (and maybe a root username)
  WRITE IT DOWN. You really don't want to forget your root password. If you do then you 
  have to go through and reinstall MySQL again.
  * If you are running Windows... Once again congratulations, you have it easy. Just
  Follow the instructions that your installer gives you. 
  * If you are running some flavor of linux... Just google 
  "How to install mysql on \<insert your linux flavor here\>". If you have any questions that you 
  can't get resolved. Talk to David.
  * If you are running OS X... Honestly I have no idea what to tell you. I've never installed
  anything on a Mac... maybe ask Steve Jobs? idk
* Pat yourself on the back, the hard part is over.

###### Step 3: Install your favorite SQL editor

There are a few different SQL editors out there in the world. You can use the command line :D,
There is MySQL Workbench or DataGrip (Awesome JetBrains Product). I'm not going to run through
how to install each of them. I know that DataGrip is a very easy setup, and workbench is pretty
easy too.

The only trouble you might run into is connecting your editor to your database, but a quick
 google search should resolve it. 

Here are the links:

* MySQL Workbench: <http://dev.mysql.com/downloads/workbench>
* DataGrip: <https://www.jetbrains.com/datagrip>

###### Step 4: Install Bower
Bower is a package manager that is mainly used to manage front-end packages.
* Windows
  * `npm install bower -g`
* Linux/OS X
  * `sudo npm install bower -g`

###### Step 5: Install Gulp
Gulp is the task runner that is being used for this project. This is the awesome tool that
automates building our project. It really is pretty cool.
* Windows
  * `npm install gulp -g`
* Linux/OS X
  * `sudo npm install gulp -g`

### Project Setup

###### Step 1: Clone the repository

For people not using SSH

`git clone https://gitlab.com/ggc-dev-project/astromeet.git`

For people using SSH

`git clone git@gitlab.com:ggc-dev-project/astromeet.git`

###### Step 2: Install the Node Modules
Type `npm install` into your terminal where you just cloned your repository

###### Step 3: Install the Bower packages
Type `bower install` into your terminal

###### Step 4: Run the Gulp Setup Task
Type `gulp setup` into your terminal

###### Putting it all Together
Following the instructions should look  something like this

```shell
git clone https://gitlab.com/ggc-dev-project/astromeet.git
cd astromeet
npm install
bower install
gulp setup
```

###### Running The Project
Simply type `npm start` into the terminal to launch the application.

If you are working with Webstorm, then David will cover how to make starting the application
a breeze.


## Project Structure
This section is dedicated to  the explanation of the project structure.

##### db/
If your name is Ashutosh this will be your new domicile. This is where all of the SQL files will reside, if changes need to be made to the database
the SQL files will be pushed to the repository, and you will be able to execute them to modify
your local database.

##### dist/
dist stands for distribution. This directory is created by the build system. This is where
the build files will go. <b>DO NOT MAKE CHANGES IN THIS DIRECTORY!!!</b>

The dist/ directory is where your local server instance is launched from. When you execute
`gulp setup` or `gulp build`, the build system goes into the `src/` directory and does a few
different things. First it goes and copies all of the server files from src/ to dist/. Then
it goes into the `src/public/` directory and copies all of the javascript, concatenates it
and puts it into the dist/ directory under `app.js`. Then it gets all of the SCSS files, concatenates them,
transpiles them from scss -> css, and puts that file into the `dist/` directory under `site.min.css`. Then it goes into
`bower_components/` and repeats the process with all of the 3rd party files we are using.
Doing this lets us simply write `<script src="/app/app.js"></script>` and that will include
all of the javascript files from the `src/` directory.

##### node_modules/
This is where all of node's 3rd party files are located. If you `npm install` something, it
gets saved in here. Don't modify anything in here.

##### src/
This is where all of the files for the application live. There are 2 different directories 
in here `public/` and `server/`.

If you work on the front-end, you will be doing most all of your work inside the `public/` 
 directory. Within this directory there are 2 more directories, `app/` and `assets/`. The app
 directory is where all of your html, javascript, and scss files will go. The app directory is
 broken down into many sub-directories. Each sub-directory represents a different component
 of the application. If you make a new page, it belongs in a new sub-directory. You can put
 your html partial, scss file and any angular components you need, for the page, inside your new
 sub-directory. This convention is in place so that if you need to make a change to a component
 everything you need will be right in front of you. The `assets/` directory is where things like 
 images will go. Anything that needs to be on a page, that doesn't have the extension `.js`,
 `.html`, or `.scss` will probably go in this directory.
 
 
 If you work on the back-end, you will be doing most all of your work inside the `server/`
 directory. This directory is broken down into 6 sub-directories `routes/`, `config/`, `controllers/`,
 `views/`, `services/`, and `models/`. `routes/` is where all of the logic will go to map HTTP requests to 
  their respective controllers. `config/` is where configuration files are put for the different
  modules we are using. `controllers/` is where our controllers will go. A controller contains
  logic that interprets HTTP requests, makes calls to services, and responds to the request based
  on what the service returns. `views/` is where `index.html` lives. Under a typical, non single
  page application, this is where all of the dynamic views would be put. However since we are 
  building a single page application the only file in here is `index.html`. `services/` is
  where all of our application services will be put. A service is responsible for going out
  and fetching data or performing certain actions. Basically if you need to make a call to 
  a database, perform a calculation or any other wacky thing your application does, then
  it goes into a service. The last sub-directory will be `models/`. In a traditional, compiled
  application you would have model classes that represent actors in your system. However 
  javascript isn't compiled. So our models are simply validation functions. When a request
  comes in, we need to validate the data that is coming in, any validation functions belong
  in `models/`.
  
  The back-end structure is still in the works however. We might move to a feature driven
  structure.
  
##### All of the rest
The other files that you see in the root directory are just configuration files for different
technologies that we are using.


## GIT Workflow (still under construction)
For this project we are going to be using a couple of different conventions in GIT. The
entire workflow hasn't been completely worked out, but here are the basics

The master branch will be the branch that gets pushed to the cloud. All development on
the application will happen on the development branch. When you start to work on something
new, you need to create a new branch from the development branch. When you have completed
your work, you need to execute a rebase. This will merge your changes with the development 
branch. After a set period of time, all changes from the development branch will be reviewed
and merged into the master branch.

##### GIT Best Practices
Here are some things that will keep you from wanting to pull your hair out when working 
with GIT. 

* Everytime you sit down to start working on something new.... `git pull` This will save you
a lot of time from resolving merge conflicts.
* Find a GIT Merge GUI. The jury is still out on which one would be the best to use, but
finding a merge editor that works for you will make your life soooo much easier!!!!

## File Naming Conventions
Please read this section carefully, the fate of the world hangs on it!

#### Front-end
Please, please, please name your angular files like so (The build
system depends on this naming convention)

* angular services/factories -> `<name-of-file>.svc.js`
* angular directives -> `<name-of-file>.directive.js`
* angular controllers -> `<name-of-file>.ctrl.js`

HTML partials should be named -> `_<name-of-file>.html`

SCSS files should be named something sensible -> `<something-sensible>.scss`

#### Back-end
Example, we are building out our user endpoints. We need a route, a controller, a service and a model

* route -> `user.route.js`
* controller -> `user.ctrl.js`
* service -> `user.svc.js`
* model -> `user.model.js`

#### Database
Ashutosh, by convention files are usually named by describing what the SQL file does. For
instance, if you are creating the script that creates the entire database from scratch you
would name it something like `big-mamma-jamma.sql`. Once everyone has built the database, if
changes need to be made, then you will write small SQL files that will modify the schema. 
For instance, the database has been created and you want to modify the users table to add
a new column. You would create a new sql file `modify-users-add-<column-name>.sql`. I know
that long names can get annoying to type, however it is soooo worth it to have self describing 
file names.

# God Speed Everyone
<br>
and remember.... 

![alt text](http://www.ggc.edu/sebin/f/k/tacksoo-im.jpg)
<br>
Dr. Im is always watching