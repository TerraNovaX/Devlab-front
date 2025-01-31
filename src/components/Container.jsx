import * as React from "react";

function Container({ children }) {
    return (
        <div className="overflow-hidden pr-20 bg-white max-md:pr-5">
            {children}
        </div>
    );
}

export default Container;