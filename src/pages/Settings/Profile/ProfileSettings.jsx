import { useFormik } from 'formik';
import React from 'react';
import {
  SettingsInput,
  SettingsSelect,
  SettingsSubmitButton,
  SettingsTitle,
} from '../components/settingsForm/SettingsForm';
import styles from './profile.module.scss';
import { useAuth } from '../../../context/authContext';
import { useFormUniversities } from '../../../context/dataContext';

const ProfileSettings = () => {
  const user = useAuth();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Username: user?.Username,
      Email: user?.Email,
    },
    onSubmit: (values) => {},
  });
  const universities = useFormUniversities();

  return (
    <main className={styles.profile}>
      {/* Title */}
      <div className={styles.profileTitle}>
        <SettingsTitle text="Edit Profile" />
      </div>
      {/* Form */}

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        {/* Container */}
        <div className={styles.formContainer}>
          {/* Left side */}
          <div className={styles.formLeft}>
            {/* firstname surname container */}
            <div className={styles.formLeftRow}>
              <SettingsInput
                name="Username"
                label="Kullanıcı adı"
                placeholder="Kullanıcı adı"
                value={formik.values.Username}
                onChange={formik.handleChange}
              />
            </div>
            {/* university and dateOfBirth */}
            <SettingsSelect label="University" options={universities} />

            {/* <SettingsInput label="Birthdate" placeholder="Your birthday" type="date" /> */}
          </div>
          {/* Right side */}
          <div className={styles.formRight}>
            <SettingsInput
              name="Email"
              label="Mail adresi"
              placeholder="Mail adresin"
              type="email"
              value={formik.values.Email}
              onChange={formik.handleChange}
            />
            {/* <SettingsPhoneSelect label="Phone number" options={phones} placeholder="Enter your number" /> */}
            {/* <SettingsSelect label="Department" options={universities} /> */}
          </div>
        </div>
        {/* Button */}
        <SettingsSubmitButton disabled={formik.isSubmitting || !formik.isValid}>Save</SettingsSubmitButton>
      </form>
    </main>
  );
};

export default ProfileSettings;
