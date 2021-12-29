import React from "react";
import styles from "./icon.css";
import classNames from 'classnames';

type Tsizes = 28 | 20 | 16 | 15 | 12 | 10;

interface IIconProps{
    As?: 'img' | 'div';
    children?: React.ReactNode;
    size: Tsizes;
}

export function Icon(props: IIconProps) {
    const {
        As = 'div', 
        children, 
        size,
    } = props;
    const classes = classNames(
        styles[`s${size}`]
    );

    return(
        <As className={classes}>
            {children}
        </As>
    );
}