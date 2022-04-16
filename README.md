# use-smooth-count (W.I.P)
__Easily interpolate to a provided value with a simple React hook.__

## Features

- 📦 Tiny: use-smooth-count is less than 15kb unpacked
- 👨‍💻 Developer friendly & easy to use
- ⌨️ Strongly typed: use-smooth-count uses TypeScript to ensure good practices, and eliminate any sneaky bugs


## Usage

Example: 

```tsx
import { useSmoothCount } from "use-smooth-count";

const Element = () => {
  const ref = useRef(null);
  const count2 = useSmoothCount(ref, 1024, 3, { curve: [0, 0.99, 0.01, 1], start: 500 });
  
  return (
    <div ref={ref} />
  )
}

```
