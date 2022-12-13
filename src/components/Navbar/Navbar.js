import styles from './navbar.module.scss';
import headerLogo from '../../asset/header_logo.png';
import avatar from '../../asset/avatar.png';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '../Button';
import paths from '../../Router/paths';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Button from '../Button';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';

const navItems = [
  {
    title: 'Anasayfa',
    path: paths.home.default,
  },
  {
    title: 'Universiteler',
    path: paths.home.universities,
  },
  {
    title: 'Kulüpler',
    path: paths.home.clubs,
  },

  {
    title: 'Hakkımızda',
    path: paths.home.detailClub,
  },
];

// const menuItems = [
//   {
//     title: 'Profilim',
//     path: paths.settings.default,
//   },
//   {
//     title: 'Takip ettigim klüpler',
//     path: paths.settings.follows,
//   },
//   {
//     title: 'Üye olduğum klüpler',
//     path: paths.settings.clubs,
//   },
// ];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { isAuth } = useAuth();
  const location = useLocation();
  console.log(location);

  return (
    <nav className={styles.navbar}>
      {/* Container */}
      <div className={styles.navbarContainer}>
        {/* Left Side */}
        <div className={styles.navbarLeft}>
          <Link to={paths.home.default}>
            <img src={headerLogo} alt="Kulubum.co" />
          </Link>
        </div>
        {/* Right Side */}
        <div className={styles.navbarRight}>
          {/* Navbar items */}
          <div className={styles.navbarItems}>
            {navItems.map((item) => (
              <Link to={item.path} key={item}>
                <Button variant="contained" className={item.path === location.pathname ? styles.navbarItemActive : ''}>
                  {item.title}
                </Button>
              </Link>
            ))}
            {/* Search */}
            <div className={styles.navbarSearch}>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          {/* Avatar */}
          {isAuth ? (
            <Menu
              toggle={
                <IconButton>
                  <div className={styles.navbarAvatar} onClick={() => setActive(!active)}>
                    <img src={avatar} alt="User" />
                  </div>
                </IconButton>
              }
              active={active}
            >
              <Dropdown avatar={avatar} setActive={setActive} />
            </Menu>
          ) : (
            <Button>
              <Link to={paths.login}>Giriş Yap</Link>{' '}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
