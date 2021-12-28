import React from 'react';
import styles from './cardmenu.css';
import { MenuIcon } from './MenuIcon';
import { Dropdown } from '../../../Dropdown';
import { DropdownItem } from './DropdownItem';
import { ComIcon, HideIcon, SaveIcon, ShareIcon, StrikeIcon } from '../../../icons';

export function CardMenu() {
  return (
    <div className = {styles.menu}>
      <Dropdown onClose={() => console.log('closed')} onOpen={() => console.log('opened')} button = {<MenuIcon/>}>
          <ul className = {styles.dropdown}>
            <DropdownItem icon = {<ComIcon />} text = {'Комментарии'}/>
            <DropdownItem icon = {<ShareIcon />} text = {'Поделиться'}/>
            <DropdownItem icon = {<HideIcon />} text = {'Скрыть'}/>
            <DropdownItem icon = {<SaveIcon />} text = {'Сохранить'}/>
            <DropdownItem icon = {<StrikeIcon />} text = {'Пожаловаться'}/>
            <DropdownItem text = {'Закрыть'}/>
          </ul>
      </Dropdown>
    </div>
  );
}
