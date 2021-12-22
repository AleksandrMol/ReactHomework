import React from 'react';
import styles from './dropdownitem.css';

interface IDropdownItem {
  text: string;
}

export function DropdownItem({text}: IDropdownItem) {
  return (
    <li className={styles.dropdownListItem}>
        <span className={styles.icon}></span>
        {text}
    </li>
  );
}
