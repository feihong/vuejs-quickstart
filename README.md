# Vue.js Quickstart

Minimal Vue.js example, for Python programmers.

## Installation

```
mkvirtualenv -p python3 vuejs
pip install Invoke
```

## Running

Run webpack watcher and serve the page on `localhost:8000`:

```
inv serve
```

## Notes

This project's structure is based on these project templates:

- [webpack-simple](https://github.com/vuejs-templates/webpack-simple)
- [webpack](https://github.com/vuejs-templates/webpack)

Materialize framework has a [weird issue](https://github.com/Dogfalo/materialize/issues/2848) where tab highlighting doesn't work for anchor tags that don't have a specific URL format. Using `data-href` doesn't solve the issue if you already have an `href` attribute in your `a` tag.
