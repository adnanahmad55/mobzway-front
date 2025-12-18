"use client";

import React, { useState, useEffect } from "react";

export default function Typewriter({ words, period = 2000 }) {
    const [text, setText] = useState("");
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (pause) return;

        const i = loopNum % words.length;
        const fullText = words[i];

        let delta = 200 - Math.random() * 100;

        if (isDeleting) delta /= 2;

        const timeout = setTimeout(() => {
            setText((prev) =>
                isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === fullText) {
                if (fullText === "Try Demo") {
                    setPause(true);
                    setTimeout(() => {
                        setIsDeleting(true);
                        setPause(false);
                    }, 10000); 
                } else {
                    setIsDeleting(true);
                }
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        }, delta);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, loopNum, pause, words]);

    return (
        <span className="typewrite">
            <span className="wrap">{text}</span>
        </span>
    );
}
