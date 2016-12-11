# `user-select-angular` — Experiments with Angular 1.x

[AngularJS](https://angularjs.org/) playground.


## Goals

1. Use native HTML/CSS as far as possible. No [Bootstrap](https://angular-ui.github.io/bootstrap/).
2. Responsive design.
3. Keep it as light as possible. No 3rd party JS utilities except [AngularJS](https://angularjs.org/) (ofcourse) and [Lodash](https://lodash.com/) (...a man needs his tools).

### Prerequisites

You need git to clone the `user-select-angular` repository. You can get git from [here][git].

We use a number of Node.js tools to initialize and start `user-select-angular`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `user-select-angular`

Clone the `user-select-angular` repository using git:

```
git clone https://github.com/nvme978/user-select-angular.git
cd user-select-angular
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    common/             --> common tools used across the entire app
      api.service.js          --> service for all API calls
      directives.js           --> custom directives
      filters.js              --> custom filters
      sharedData.service.js   --> service for sharing data between controllers
      common.module.js        --> module declaration
    selected-users/         --> the selected users view and component logic
      selectedUsers.template.html       --> the partial template
      selectedUsers.component.js        --> the component logic
      selectedUsers.module.js           --> module declaration
    user_list/         --> the user list view and component logic
      userList.template.html       --> the partial template
      userList.component.js        --> the component logic
      userList.module.js           --> module declaration
  data/                --> the view2 view template and logic
    user-avatar.json            --> user avatar data file
    user-list.json              --> user list data file
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
```


[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
