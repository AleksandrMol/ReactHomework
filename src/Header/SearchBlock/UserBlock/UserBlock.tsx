import React from 'react';
import { AnonIcon } from '../../../icons';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a 
      href='https://www.reddit.com/api/v1/authorize?client_id=KvuAPIwGA4p7t_LQz2cugA&response_type=token&state=Rand&redirect_uri=http://localhost:3000/&scope=read submit identity'
      className={styles.userBox} 
    >
      <div className={styles.avatarBox}>
        { avatarSrc
        ? <img src= { avatarSrc } alt="user avatar" className = {styles.avatarImage}/>
        : <AnonIcon />
      }
        
      </div>

      <span className = {styles.username}>
        { username 
          ? username
          : "Аноним"
        }
      </span>
    </a>
  );
}
