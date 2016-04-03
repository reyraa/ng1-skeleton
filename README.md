# ng1-Skeleton — the skeleton for AngularJS 1.x apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
The use is as easy as cloning the repository. It contains a simple AngularJS application with basic services and a controller as a showcase.
Also a set of preconfigured continous development tools.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire states, controllers and views together.


## Getting Started

 Install the dependencies

### Prerequisites

 - [Git](https://git-scm.com/downloads)
 - [nodeJS](https://nodejs.org/en/download/)
 - [npm](https://github.com/npm/npm)
 - [ruby](https://www.ruby-lang.org/en/documentation/installation/)
 - [sass](http://sass-lang.com/install)
 - [bower](http://bower.io/)
 - [grunt](http://gruntjs.com/installing-grunt)

### Clone ng1-skeleton

Clone the ng1-skeleton repository using [git][git] into a folder with the name of your project:

```
git clone https://github.com/alihaghighatkhah/ng1-skeleton.git <your-project-name>
cd <your-project-name>
```

If you just want to start a new project without the ng1-skeleton commit history then you can do:

```bash
git clone --depth=1 https://github.com/alihaghighatkhah/ng1-skeleton.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files


### Run the Application

To make requirements ready. Then run:
     ```grunt watch```
For development process, result will be copies in `dev` folder. and:
    ```grunt pro```
For getting a realsable version of project. results will integrate in `dist` folder.



## Directory Layout

```
app/                    --> all of the source files for the application
  sass                  --> stylesheets written in sass
  templates/            --> all app HTML templates
    misc/               --> templates of web parts common in all states
    module1/            --> templates of modules1 like templates of users or payments
  javascripts/          --> entire javascript files
    controllers/        --> controllers in filers by names of their states or routes
    services/           --> services of AngularJS in separate files
    directives/         --> directives of AngularJS in separate files
    filters/            --> filters of AngularJS in separate files
    utils/              --> Project non-specific JS assets
    app.js              --> the initiator of application
  index.html            --> app layout file (the main html template file of the app)
```


## Updating Angular

If you need to change the version of AngularJS into another 1.x version, simply change it in bower.json. Since AngularJS is used by other libraries, remember to define a proper version the absolute version in resolutions too.

You can update the tool dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Loading Angular Asynchronously

You can inject scripts suing require.js instead of old fashioned inline injections. simply inject require js instead of other injection currently existing in index.hmlt file, then use -=--- to  edit dependencies.

### requireJS



## Serving the Application Files



### Running the App during Development

The ng1-skeleton project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


### Running the App in Production





