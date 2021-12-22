import React from 'react';
import styles from './cardmenu.css';
import { MenuIcon } from './MenuIcon';
import { Dropdown } from '../../../Dropdown';
import { DropdownItem } from './DropdownItem';

export function CardMenu() {
  return (
    <div className = {styles.menu}>
      <Dropdown onClose={() => console.log('closed')} onOpen={() => console.log('opened')} button = {<MenuIcon/>}>
          <ul className = {styles.dropdown}>
            <DropdownItem text = {'Комментарии'}/>
            <DropdownItem text = {'Поделиться'}/>
            <DropdownItem text = {'Скрыть'}/>
            <DropdownItem text = {'Сохранить'}/>
            <DropdownItem text = {'Пожаловаться'}/>
            <DropdownItem text = {'Закрыть'}/>
          </ul>
      </Dropdown>
    </div>
  );
}
