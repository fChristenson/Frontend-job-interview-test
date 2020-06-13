# Frontend job interview test

## What we will cover

* What is a code test?
* What can you expect to face?
* Why I think frontend code tests are hard to make.
* What I believe to be a good code test.


## Some thoughts

Frontend programming moves faster than any other programming which means
that the tools you learn today will change within roughly 6 months.

Does this mean you have to learn them all?
No, but it does mean that someone who doesn't know better can start adding "bad" libraries to your project.


11 years ago Sass became a thing and compiling css started to become popular.

10 years ago tools such as Jquery and Bootstrap became popular.

8 years ago tools such as Handelbars and Backbone came around,
Javascript became a bigger part of frontend development.

6 years ago Single page applications became popular with tools such as Angular
and Node started to get popular.

4 years ago bundlers became a big part of frontend and npm
had all but made other package managers obsolete.

2 years ago flexbox became the next big thing to happen and
serverside rendered React got popular.

1 year ago css grid came around


Today the tool list include things like Postcss, Gulp, Grunt, Npm, 
Node, Css modules, Babel, Webpack, Sass, Less, React, Angular, Vue, Redux,
Jest, Mocha, Browserify, Next, Express, Karma, Ember, Meteor,
Axios, Superagent, Sinon, Enzyme, Bacon, Lodash, Jquery, Bootstrap,
Foundation, Material-ui, Ramda, Hapi, Sails and the list goes on and on.

In the last decade frontend has seen so big changes that it is no longer
possible to keep track of all the tools and changes unless you breathe it.


## Conclusion

A frontend developer is not only someone who needs to know how to write code
but also a person who needs to be willing to keep up with the volatile
ecosystem of tools and practices.

You can make the argument that a company does not need to change their stack
with the trends and you are right, but consider the following:

Knowing the tools and the trends does not mean that you use them all but it means
that you know what is a good idea and what is a bad idea.

If you hire the wrong person the user facing part of your system will be in
the hands of someone who can cause more harm than most.
If your frontend developer is bad your website will feel bad and adding features will take longer and longer.

If you hire the right person you will have the user facing part of your system
in the hands of someone who can make your website feel high quality without
adding tech debt that slows the development process down.

If you are really lucky a single frontend developer can make a UI
that looks beautiful and simple feel the same way.


## My interview questions

1. What are the most important tools for you and why?
2. What is your favourite feature in Node and why?
3. What is your favourite feature in Css and why?
4. What is your favourite feature in Javascript and why?
5. What is the most difficult part of a frontend project and why?
6. How would you fix a slow website?


### What are the most important tools for you and why?

Bad answer: Bootstrap, jquery (unless you have a really good reason)
Decent answer: Sass, Angular/React/Vue, Npm, Webpack
Good answer: It depends on the application. (gives examples of different tools that suit the application)


### What is your favourite feature in Node and why?

Bad answer: I don't know
Decent answer: async/await, generators, es6 support
Good answer: LTS support and motivate why


### What is your favourite feature in css and why?

Bad answer: I don't know

Decent answer: flexbox, css variables

Good answer: css grid and motivate why


### What is your favourite feature in Javascript and why?

Bad answer: I don't know

Decent answer: async/await, generators, es6 support, map/filter/reduce

Good answer: Object.freeze, fetch, guarding, modules and motivate why


### What is the most difficult part of a frontend project and why?

Bad answer: To get the UI to look and feel good

Decent answer: To make everything consistent in every browser

Good answer: To keep up the test coverage, bet on the right tools, keep animations at 60 fps, avoid tech debt


### How would you fix a slow website?

Bad answer: I don't know

Decent answer: Ship less code, improve the perceived load time, use lazy loading, reduce asset weight

Good answer: use the browser profiler to investigate, reduce the number of http calls, use vanilla Javascript
