// implementation of 'portal'
// React Portals (createPortal) provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component
// inspect page to find out

import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portals Demo</h1>,
        document.getElementById("portal-root")
    );
}

export default PortalDemo;
