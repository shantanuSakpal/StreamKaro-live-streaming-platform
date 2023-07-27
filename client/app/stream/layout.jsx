import React from "react";
import "./styles.css";
export default function Layout({children,}) {
    return (
        <div className="p-2">

            {children}
        </div>
    )
}
