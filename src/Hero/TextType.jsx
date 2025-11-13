import React, { useState, useEffect } from "react";

const TextType = ({
    text = ["Hello", "World"],
    typingSpeed = 100,
    pauseDuration = 1500,
    showCursor = true,
    cursorCharacter = "|",
}) => {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = text[textIndex];
        let timer;

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                timer = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
            } else {
                timer = setTimeout(() => setIsDeleting(true), pauseDuration);
            }
        } else {
            if (charIndex > 0) {
                timer = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed / 2);
            } else {
                setIsDeleting(false);
                setTextIndex((textIndex + 1) % text.length);
            }
        }

        setDisplayText(currentText.substring(0, charIndex));
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, text, textIndex, typingSpeed, pauseDuration]);

    return (
        <h1>
            {displayText}
            {showCursor && <span>{cursorCharacter}</span>}
        </h1>
    );
};

export default TextType;
