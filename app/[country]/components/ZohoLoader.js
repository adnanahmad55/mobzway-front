"use client";
import { useEffect } from "react";

export default function ZohoLoader() {
    useEffect(() => {
        window.zohoReady = false;

        window.$zoho = window.$zoho || {};
        window.$zoho.salesiq = {
            widgetcode: "siq94c90e504edeae96d2db0bc300f8d83900a44ff6df5a19ce6e1e1566b0de4f35e4e11a1e1b28e17908146255f9a45b54",
            values: {},
            ready: function () {
                console.log("Zoho is READY");
                window.zohoReady = true;
            }
        };

        const script = document.createElement("script");
        script.src = "https://salesiq.zohopublic.com/widget";
        script.id = "zsiqscript";
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    return null;
}
