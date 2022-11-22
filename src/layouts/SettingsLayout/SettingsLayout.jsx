import React from 'react';
import styles from './settings.module.scss';
import { Outlet } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import avatar from '../../asset/avatar.png';
import { IconButton } from '@mui/material';

const SettingsLayout = () => {
  return (
    <div className={styles.layoutWrapper}>
      {/* Navbar */}
      <div className={styles.navbarWrapper}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            {/* Leftside */}
            <div className={styles.navbarLeft}>Setting</div>
            {/* rigtside */}
            <div className={styles.navbarRight}>
              <div className={styles.notification}>
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              </div>
              <div>
                <img src={avatar} alt="User" />
              </div>
              <div className={styles.expandmore}>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
