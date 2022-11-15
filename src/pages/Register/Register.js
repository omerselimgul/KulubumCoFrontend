import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import Form, { FormInput, FormInfo, FormControl, FormPageWrapper } from '../../components/Form';
import { Link } from 'react-router-dom';

// İnline style Login klasorunun altında css file eklenecek
const Register = ({ ...props }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState({});

  const onSaveClick = () => {
    var data = {
      Username: dataSource?.Username,
      Password: dataSource?.Password,
      Email: dataSource?.Email,
      Birthdate: dataSource?.Birthdate,
      Cinsiyet: dataSource?.Cinsiyet,
      Universite: dataSource?.Universite,
      Bolum: dataSource?.Bolum,
      Sheerid: dataSource?.Sheerid,
    };
    axios({ url: 'http://localhost:4000/api/auth/register', data: data, method: 'post' })
      .then((res) => {
        if (res?.data?.success) {
          enqueueSnackbar(res?.data?.message, { variant: 'success' });
          navigate('/home');
        } else {
          enqueueSnackbar('Kayıtta Hata Oluştu!!', { variant: 'error' });
        }
      })
      .catch((err) => {
        enqueueSnackbar(err?.response?.data?.message, { variant: 'error' });
      });
    console.log(data);
  };

  const dataSourceHandler = (field, value) => {
    setDataSource({ ...dataSource, [field]: value });
  };
  return (
    <FormPageWrapper>
      {/* Kanka o değil de bende tailwindin bircok şeyi calısmıyor margin-4 min-w falan */}
      <Form title="Register">
        {inputs.map((input, key) => (
          <FormInput key={key} {...input} onChange={(e) => dataSourceHandler(input.name, e.target.value)} />
        ))}

        <FormControl
          label="Gender"
          name="Gender"
          icon={PeopleIcon}
          items={genderOptions}
          onChange={(i) => console.log(i.target)}
        />
        <FormControl label="University" name="University" icon={PeopleIcon} items={universityOptions} />
        <FormControl label="Department" name="Department" icon={PeopleIcon} items={departmentOptions} />
        <Button
          style={{ borderRadius: '10px', color: 'black', borderColor: 'black', backgroundColor: '#02A28F' }}
          className="w-full opacity-100"
          onClick={onSaveClick}
          variant="contained"
        >
          Register
        </Button>
        <FormInfo>
          Already have account?
          <Link to="/login" className="ml-2 text-sky-500">
            Login
          </Link>
        </FormInfo>
      </Form>

      {/* <div className="flex items-end justify-center text-center mb-2">
         <PersonIcon />
         <TextField
           // sx={{ input: { color: 'black' } }} // changing font color
           className=" text-white"
           label="Username"
           variant="standard"
           onChange={(e) => dataSourceHandler('Username', e.target.value)}
           value={dataSource?.Username}
         />
       </div> */}
      {/* <div className="flex items-end justify-center text-center mb-2">
         <LockIcon />
         <TextField
           label="Password"
           variant="standard"
           type="password"
           onChange={(e) => dataSourceHandler('Password', e.target.value)}
           value={dataSource?.Password}
         />
       </div> */}
      {/* <div className="flex items-end justify-center text-center mb-2">
         <EmailIcon />
         <TextField
           label="Email"
           variant="standard"
           onChange={(e) => dataSourceHandler('Email', e.target.value)}
           value={dataSource?.Email}
         />
       </div> */}
      {/* 
       <div className="flex items-end justify-center text-center mb-2">
         <CalendarMonthIcon />
         <TextField
           style={{ color: 'white' }}
           label="Doğum tarihi"
           variant="standard"
           onChange={(e) => dataSourceHandler('Birthdate', e.target.value)}
           value={dataSource?.Birthdate}
         />
       </div> */}
      {/* <div className="flex items-end justify-center text-center mb-2">
         <PeopleIcon />
         <TextField
           label="Cinsiyet"
           variant="standard"
           onChange={(e) => dataSourceHandler('Cinsiyet', e.target.value)}
           value={dataSource?.Cinsiyet}
         />
       </div>
       <div className="flex items-end justify-center text-center mb-2">
         <SchoolIcon />
         <TextField
           label="Üniversite"
           variant="standard"
           onChange={(e) => dataSourceHandler('Universite', e.target.value)}
           value={dataSource?.Universite}
         />
       </div>
 
       <div className="flex items-end justify-center text-center mb-2">
         <TextField
           label="Bölüm"
           variant="standard"
           onChange={(e) => dataSourceHandler('Bolum', e.target.value)}
           value={dataSource?.Bolum}
         />
       </div>
       <div className="flex items-end justify-center text-center mb-2">
         <TextField
           label="Sheerid"
           variant="standard"
           onChange={(e) => dataSourceHandler('Sheerid', e.target.value)}
           value={dataSource?.Sheerid}
         />
       </div> */}
    </FormPageWrapper>
  );
};

export default Register;

const inputs = [
  {
    icon: PersonIcon,
    name: 'Username',
    label: 'Username',
    type: 'text',
  },
  {
    icon: LockIcon,
    name: 'Password',
    label: 'Password',
    type: 'password',
  },
  {
    icon: LockIcon,
    name: 'PasswordConfirm',
    label: 'PasswordConfirm',
    type: 'password',
  },
  {
    icon: EmailIcon,
    name: 'Email',
    label: 'Email',
    type: 'email',
  },
  {
    icon: CalendarMonthIcon,
    name: 'BirthOfDate',
    label: 'Doğum tarihi',
    type: 'date',
  },
];

const genderOptions = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];
const universityOptions = [
  {
    value: 'CU',
    label: 'Cukurova University',
  },

  {
    value: 'ITU',
    label: 'Istanbul Technic University',
  },
  {
    value: 'ODTU',
    label: ' Middle East Technic University',
  },
];
const departmentOptions = [
  {
    value: 'CENG',
    label: 'Computer Engineering',
  },

  {
    value: 'EEENG',
    label: 'Electric Electronic Engineering',
  },
  {
    value: 'MENG',
    label: ' Mechanic Engineering',
  },
];
