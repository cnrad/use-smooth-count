import { useEffect, useRef } from "react";
import * as ReactDOM from "react-dom";
import { useSmoothCount } from "use-smooth-count";

const App = () => {
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
                    background: "#1b1b1b",
                    padding: "0.5rem",
                    fontSize: "1rem",
                    borderRadius: "0.5rem",
                    marginBottom: "2rem",
                }}
            >
                <code
                    className="language-js"
                    style={{
                        borderRadius: "0.5rem",
                    }}
                >
                    {`const count1 = useSmoothCount({ ref: ref1, target: 12927, duration: 3 });
const count2 = useSmoothCount({ ref: ref2, target: 1024, duration: 3, curve: [0, 0.75, 0.25, 1], startAt: 500 });
const count3 = useSmoothCount({ ref: ref3, target: 76.34, duration: 3, curve: [0, 0.99, 0.01, 1] });`}
                </code>
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
                    0
                </span>{" "}
                dollars
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
