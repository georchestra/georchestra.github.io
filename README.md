georchestra.github.io
=====================

[![Build Status](https://travis-ci.org/georchestra/georchestra.github.io.svg?branch=master)](https://travis-ci.org/georchestra/georchestra.github.io)

This is the source of the multilingual [geOrchestra website](http://www.georchestra.org/), based on the original [Jekyll](http://jekyllrb.com/) [site template](https://github.com/jekyll/jekyll/tree/master/lib/site_template).


Build
-----

The site is built on GitHub pages, but if you want to run it locally, you first have to [install jekyll](http://jekyllrb.com/docs/installation/) and its dependencies:
```
sudo apt-get install ruby-dev nodejs
sudo gem install jekyll
```

Finally:
```
git clone https://github.com/georchestra/georchestra.github.io.git 
cd georchestra.github.io
jekyll serve --watch
```

The site can now be browsed on http://0.0.0.0:4001/ and edited live.


Contributing
------------

We accept pull requests.

Fixing a typo is easy: once spotted on the site, scroll down to the "edit this page" link.
This will automatically create a pull request, which we will review as soon as possible.

To submit a blog post, you just need to open the [_posts](https://github.com/georchestra/georchestra.github.io/tree/master/_posts) folder and create one or several new files sharing the same ```uid```.

To create a new file using the github online editor, use the + sign.
