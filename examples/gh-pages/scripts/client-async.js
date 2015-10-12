import {default as React} from "react";

import {default as AsyncReactRoot} from "./containers/AsyncReactRoot";

/*
 *
 * Loaded using async loader.
 */
React.render(<AsyncReactRoot />, document.getElementById("react-container"));
