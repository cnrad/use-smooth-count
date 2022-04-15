// import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useSmoothCount } from "../src/index";

const App = () => {
    const count = useSmoothCount(12927, 3, { start: 200 });
    const count1 = useSmoothCount(1024, 3, { curve: [0, 0.99, 0.01, 1] });
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
