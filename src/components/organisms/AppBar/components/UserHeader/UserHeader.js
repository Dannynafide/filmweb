import * as React from 'react';
import {useState} from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import useAuth from 'context/useAuth';
import IconBtn from 'components/atoms/ButtonIcon/ButtonIcon';
import MyFormButton from 'components/atoms/ButtonForm/ButtonForm';
import styles from './userHeader.module.scss';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function UserMenu() {
  const [value, setValue] = React.useState(0);
  const {logout} = useAuth();

  // (event: React.SyntheticEvent, newValue: number)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.userMenu}>
      <div>
        <Box sx={{width: '100%'}}>
          <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Asystent"
                style={{fontSize: '16px'}}
                {...a11yProps(0)}
              />
              <Tab
                label="Powiadomienia"
                style={{fontSize: '16px'}}
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <p className={styles.paragraph}>Brak danych do wyświetlenia</p>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <p className={styles.paragraph}>Brak danych do wyświetlenia</p>
          </TabPanel>
        </Box>
      </div>
      <div>
        <button type="submit" className={styles.btn}>
          Ustawienia
        </button>
        <button type="submit" className={styles.btn} onClick={() => logout()}>
          Wyloguj
        </button>
      </div>
    </div>
  );
}

export default function UserHeader() {
  const {user} = useAuth();
  const [expand, setExpand] = useState(false);

  return (
    <>
      <IconBtn>
        <NotificationsNoneIcon />
      </IconBtn>

      <MyFormButton color="transparent" startIcon={<AccountCircleIcon />}>
        <span className={styles.userName}>
          {user.displayName ? user.displayName : user.email}
        </span>
      </MyFormButton>

      <IconBtn onClick={() => setExpand(!expand)}>
        {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconBtn>

      {expand && <UserMenu />}
    </>
  );
}
