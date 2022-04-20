# use-smooth-count

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
