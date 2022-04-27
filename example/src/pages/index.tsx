import { useEffect, useRef } from "react";
import { useSmoothCount } from "use-smooth-count";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Example() {
    const ref = useRef<HTMLSpanElement | null>(null);
    const ref2 = useRef<HTMLSpanElement | null>(null);
    const ref3 = useRef<HTMLSpanElement | null>(null);

    const count1 = useSmoothCount({ ref: ref, target: 12927, duration: 3 });
    const count2 = useSmoothCount({ ref: ref2, target: 1024, duration: 3, curve: [0, 0.75, 0.25, 1], startAt: 500 });
    const count3 = useSmoothCount({
        ref: ref3,
        target: 76.34,
        duration: 3,
        curve: [0, 0.99, 0.01, 1],
        preventStart: true,
    });

    useEffect(() => {
        setTimeout(() => count3.start(), 2000);
    }, []);

    return (
        <div
            style={{
                background: "#000",
                color: "#fff",
                fontSize: "40px",
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <pre
                style={{
                    background: "rgb(29, 31, 33)",
                    padding: "0.5rem",
                    fontSize: "1rem",
                    borderRadius: "0.5rem",
                    marginBottom: "2rem",
                }}
            >
                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {`const count1 = useSmoothCount({ ref: ref, target: 12927, duration: 3 });
const count2 = useSmoothCount({ ref: ref2, target: 1024, duration: 3, curve: [0, 0.75, 0.25, 1], startAt: 500 });
const count3 = useSmoothCount({ 
    ref: ref3, target: 76.34, duration: 3, curve: [0, 0.99, 0.01, 1], preventStart: true,
});

useEffect(() => {
    setTimeout(() => count3.start(), 2000);
}, []);

// full code at github.com/cnrad/use-smooth-count/example/src/pages/index.tsx`}
                </SyntaxHighlighter>
            </pre>
            <div>
                <span style={{ fontWeight: 600 }} ref={ref} /> messages
            </div>
            <div>
                <span style={{ fontWeight: 600 }} ref={ref2} /> users
            </div>
            <div>
                $
                <span style={{ fontWeight: 600 }} ref={ref3}>
                    0.00
                </span>{" "}
                dollars
            </div>
        </div>
    );
}

export default Example;
