import React from "react";

type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps{
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div'; //Так тоже можно)))
    children?: React.ReactNode;
    size: Tsizes;
}

export function Text({As = 'span', children}: ITextProps) {
    return(
        <As>
            {children}
        </As>
    );
}