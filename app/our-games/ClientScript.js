"use client";
import { useEffect } from "react";

export default function ClientScript() {

    useEffect(() => {
        const headershrink = document.getElementById("header");
        if (headershrink) {
            headershrink.classList.add("header-shrink");
        }
    }, []);

    return null;
}
