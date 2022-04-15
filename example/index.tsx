// import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useSmoothCount } from "../src/index";

const App = () => {
    const count = useSmoothCount(12927, 3);
    const count1 = useSmoothCount(1024, 3, { curve: [0, 0.99, 0.01, 1], start: 500 });
    const count2 = useSmoothCount(245, 3, { curve: [0, 0.75, 0.25, 1] });

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
                justifyContent: "center"
            }}
        >
            <pre
                style={{
                    background: "#1b1b1b",
                    padding: "0.5rem",
                    fontSize: "1rem",
                    borderRadius: "0.5rem",
                    marginBottom: "2rem"
                }}
            >
                <code
                    className="language-js"
                    style={{
                        borderRadius: "0.5rem"
                    }}
                >
                    {`const count = useSmoothCount(12927, 3);
const count1 = useSmoothCount(1024, 3, { curve: [0, 0.99, 0.01, 1], start: 500 });
const count2 = useSmoothCount(245, 3, { curve: [0, 0.75, 0.25, 1] });`}
                </code>
            </pre>
            <div>
                <span style={{ fontWeight: 600 }}>{count}</span> messages
            </div>
            <div>
                <span style={{ fontWeight: 600 }}>{count1}</span> users
            </div>
            <div>
                <span style={{ fontWeight: 600 }}>{count2}</span> communities
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
