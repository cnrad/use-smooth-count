// import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useSmoothCount } from "../.";

const App = () => {
    const count = useSmoothCount(1000, 3, [0, 0.5, 0.5, 1]);
    return <div>{count}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
