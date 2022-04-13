// import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useSmoothCount } from "../src/index";

const App = () => {
    const count = useSmoothCount(12, 3);
    const count1 = useSmoothCount(245, 3, [0, 0.75, 0.25, 1]);
    const count2 = useSmoothCount(1024, 3, [0, 0.95, 0.05, 1]);

    return (
        <div
            style={{
                background: "#000",
                color: "#fff",
                fontSize: "40px",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {count} people... <br />
            {count1} people... <br />
            {count2} people...
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
