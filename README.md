# Lazy-Loading Dynamic Components

## Preface

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.
I assume you know what to do to run it.

## What's this about?

In large applications lazy loading parts of it through the router should be a default approach to keep the main bundle size as small as possible.
While you have to be disciplined about your code, what you import from where etc., this is something I assume you know enough about, so I don't have to explain it.

This is about having some kind of "dashboard" like component, which loads "widgets" depending on some kind of (user related) configuration.
Usually the user is able to select widgets from a collection that can contain a lot of different types of widgets.
And they are able to arrange them on some kind of dashboard (which can be just a simple list).

If your widget collection only contains a handful of different types, then this is overkill.
But if you provide a rather large collection from which only a handful is needed, you may want to structure your code in a way, your main bundle doesn't contain any widget related code.
After loading the configuration (which can be static, of course), only the needed code of the widgets should be loaded.

In this codebase I want to describe a technique I found useful for these kind of usecases.

**TODO:**
Actually describe what I'm doing here... 😎
