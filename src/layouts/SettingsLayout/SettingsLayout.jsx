import React from 'react';
import styles from './settings.module.scss';
// import { Outlet } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import avatar from '../../asset/avatar.png';
import { IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';


const Arr = ["Edit Profile", "Kulüplerim", "Takip Ettiğim Kulüpler", "Password & Security"]


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
      {/* Container */}
      <div className={styles.container}>
        {/* ContainerContent */}
        <div className={styles.containerContent}>
          <div className={styles.containerContentBackground}>
            Background
          </div>
          <div className={styles.containerContentProfile}>
            <img src={avatar} alt='user'></img>
            <div>
              <h2>ulaş öztürk</h2>
              <p>Your account is ready, you can now apply for advice.</p>
            </div>
          </div>
        </div>
        {/* containerMain */}
        <div className={styles.containerMain}>
          <div className={styles.containerMainLeft}>
              {Arr.map((key, item) => {
                return (
                  <ul>
                    <li key={key}>
                      {Arr[item]}
                    </li>
                  </ul>
                )
              })}
          </div>
          <div className={styles.containerMainRight}>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
