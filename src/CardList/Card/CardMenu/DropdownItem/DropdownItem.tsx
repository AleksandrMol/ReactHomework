import React from 'react';
import styles from './dropdownitem.css';

interface IDropdownItem {
  text: string;
  icon?: React.ReactNode;
}

export function DropdownItem({text, icon}: IDropdownItem) {
  return (
    <li className={styles.dropdownListItem}>
        <span className={styles.icon}>{ icon }</span>
        { text }
    </li>
  );
}
