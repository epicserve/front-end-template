Front-end Template
==================


Features
--------
- [Gulp](http://gulpjs.com/) for tasks
- [Gulp-sass](https://github.com/dlmanning/gulp-sass) for compiling CSS
- [Gulp-babel](https://github.com/babel/gulp-babel) for compiling ES6 to ES5
- [Gulp-standard](https://github.com/emgeee/gulp-standard) for JS linting


To Do
-----
- Add [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
- Add [browserify](https://github.com/substack/node-browserify)


Usage
-----

1. Clone the repository

        $ cd ~/code
        $ git clone https://github.com/epicserve/front-end-template.git
        $ cd front-end-template

2. Install bower gulp requirements

        $ npm install -g bower gulp
        $ bower install
        $ npm install

3. Start gulp

        $ gulp

4. Open a new terminal tab and then start the dev server

        $ cd ~/code/front-end-template
        $ python -m SimpleHTTPServer

5. Open your browser to [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
