# ∿ use-smooth-count ∿

**Easily interpolate to a provided value with a simple React hook.**

## Features

-   📦 Tiny: use-smooth-count is <10kb unpacked, and even less when minified
-   👨‍💻 Easy to use, guaranteeing seamless integration into your website
-   ⌨️ Strongly typed: use-smooth-count uses TypeScript to ensure good practices, and eliminate any sneaky bugs

## Usage

`useSmoothCount` requires 3 parameters: 
- a ref (to the element that holds the number)
- a target (the number to reach)
- a duration (how long it takes to reach that number)

There are many other optional parameters, such as curve and startAt. Detailed explanations are provided via JSDoc in [index.ts](https://github.com/cnrad/use-smooth-count/blob/master/src/index.ts)

Example: 
```tsx
import { useSmoothCount } from "use-smooth-count";

const Element = () => {
    const ref = useRef(null);
    const count = useSmoothCount({ ref: ref, target: 183, duration: 3, curve: [0, 0.99, 0.01, 1] });

    return <div ref={ref} />;
};
```

The counter starts automatically unless you set `preventStart` to `true`, in which case you can manually call `count.start()` whenever you'd like.

Other working examples can be found in the [example](https://github.com/cnrad/use-smooth-count/tree/master/example) folder, which is a parcel playground.

## Things to Note

**Certain bezier curves will not work**, because at the moment the x-values of the coordinates are not taken into account for the path. This is due to the setInterval time being linear, and me being too lazy to figure out the math involved. If you know how to solve this, feel free to pull request.

**There will probably be bugs.** If you encounter one, please [create an issue](https://github.com/cnrad/use-smooth-count/issues/new) that includes the following information:
- The issue itself
- The expected behavior
- The resulted behavior
- How to reproduce (along with a direct code snippet that's producing it)

**Certain logic/syntax may be subject to change.** In the rare case that I need to rework something and cannot use the current syntax, I will try to find a way to keep the old method(s) in while the new ones are also introduced, as to not break any code that uses this package. If not, I'll try to let people know before updating it :+1:

## Other
As always, feel free to star :star: this repo if you find it useful, as that helps out a ton and means a lot. Happy developing :)
