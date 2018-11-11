---
title: DOM and Component Elements in React
date: '2017-02-01'
path: 'posts/dom-component-elements-react'
excerpt: In the past couple of days, I’ve been taking some time to fully understand and wrap my head around the [react-fiber-architecture document](https://github.com/acdlite/react-fiber-architecture). In it’s prerequisites section lies this [gem](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html), where Dan Abramov goes into detail the core philosophies of React components/elements and their relationship with actual DOM elements that get rendered in a typical React application.
---
In the past couple of days, I’ve been taking some time to fully understand and wrap my head around the [react-fiber-architecture document](https://github.com/acdlite/react-fiber-architecture). In it’s prerequisites section lies this [gem](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html), where Dan Abramov goes into detail the core philosophies of React components/elements and their relationship with actual DOM elements that get rendered in a typical React application.

## On Elements
In React, there are two types of elements: a DOM element, as well as a Component Element. The former has a string for `type` while the other can contain a function or a class. However, they both have one thing in common: they are just plain javascript objects that _describe_ DOM elements, and don’t refer to the actual DOM element itself.

This makes the creation/destruction of them really cheap, which will improve the eventual overall performance of reconciliation.

### DOM Elements
Take the following HTML as an example:
```json
<button class="button button-blue">
	<b>OK!</b>
</button>
``` 
This is represented internally in React’s element tree as a plain Javascript object:
```json
{
  type: 'button',
  props: {
		className: 'button button-blue',
		children: {
			type: 'b',
			props: {
				children: 'OK!'
			}
		}
  }
}
```
As seen from above, the element represents a node with a specific tag with props corresponding to it’s attribute whenever it’s `type` is a string.

What’s important to note here is how both parent and child elements are represented internally as plain javascript objects that describe an element instead of referring to the actual instances of the DOM elements. This makes them easy to traverse without having to parse them.

### Component Elements
This is an example of an element where `type` can be a function/class, describing a component:
```json
{
	type: Button,
	props: {
		color: 'blue',
		children: 'OK!'
	}
}
```
Like the React DOM Element shown above, they aren’t any different. This allows you to define any type of component render to any type of DOM node you’ll like; a `Button` doesn’t necessarily have to be `<button>`, but can also be a `<div>` or `<a>`.


## What Does This All Mean?
In the same post, Dan puts up a fantastic example demonstrating how this plays well when React has to do top-down reconciliation:

```js
// React: You told me this...
{
  type: Form,
  props: {
    isSubmitted: false,
    buttonText: 'OK!'
  }
}

// React: ...And Form told me this...
{
  type: Button,
  props: {
    children: 'OK!',
    color: 'blue'
  }
}

// React: ...and Button told me this! I guess I'm done.
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}
```

It’s amazing to me how they took a simple idea of representing each individual element as an object instead of an actual HTML element, to allow both elements describing a component and a DOM node to be mixed and nested together.

This “crazy voodoo magic” was something that boggled my mind when I first dived head first into React and it’s cool to finally learn it’s thought process and how it works underneath the hood.