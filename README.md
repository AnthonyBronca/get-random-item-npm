Have you ever been tired of having to get a random element from an array, string, or object and you have to use Math.floor(Math.random()\* el.length)?

Well now this process is simplified!

With getrandomjs, you can pass in a string, array, or object and get a random element back!

If you decide to not pass anything in, it will just give you a random number between 1-100.

How to use?

In the root of the project, Run:

```
npm i getrandomjs
```

Then you can import into a JS file using:

```
const random = require('getrandomjs')
```

Feel free to rename the const to whatever works easiest for you!

Now you can just use

```
random()
```

to get back either a number between 1- 100 if not passed in, or pass in your string,array, or object to get a random element or object value back!

Happy coding!
