import React from 'react';
import { useInputHandler } from '../../customHooks/useInputHandler';
import Button from '../Button/Button';
import FormTable from '../FormTable/FormTable';
import { Input } from '../index';
import styles from './form.module.css';

function Form() {
  const [showSubmittedForm, setShowSubmittedForm] = React.useState(false);
  const { inputState, inputUpdate } = useInputHandler(() => ({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    previousSchoolName: '',
    previousClass: '',
    grade: '',
    entryClass: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    contactNumber: '',
  }));
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSubmittedForm(true);
  };

  return (
    <>
      <form className={`${styles.form} ${styles.flex}}`} onSubmit={handleSubmit}>
        <div className={styles.formMain}>
          <div className={styles.formHeading}>
            <h2 className={styles.formPrimaryHeading}>School Registration</h2>
          </div>
          <h4 className={styles.formSubHeading}>Student Information</h4>

          <ul className={styles.formInputsWrapper}>
            <li className={styles.groupedInput}>
              <Input required inputUpdate={inputUpdate} name="firstName" label="First Name" type="text" />
              <Input required inputUpdate={inputUpdate} name="lastName" label="Last Name" type="text" />
            </li>
            <li className={styles.groupedInput}>
              <Input required inputUpdate={inputUpdate} label="Birth Date" name="dateOfBirth" type="date" />
              <div className={styles.selectContainer}>
                <label htmlFor="gender">Gender</label>
                <select required name="gender" id="gender" className={styles.select}>
                  <option value="" selected disabled>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                </select>
              </div>
            </li>
            <li className={styles.groupedInput}>
              <Input
                required
                inputUpdate={inputUpdate}
                placeHolder="example@example.com"
                label="Email"
                validateMessage="Invalid Email"
                type="email"
                name="email"
              />
            </li>
            <li className={styles.groupedInput}>
              <Input
                required
                inputUpdate={inputUpdate}
                label="Name of previous School "
                name="previousSchoolName"
                type="text"
              />
              <Input
                required
                inputUpdate={inputUpdate}
                label="Previous Class"
                name="previousClass"
                type="number"
                validateMessage="Invalid Number"
              />
            </li>
            <li className={styles.groupedInput}>
              <Input
                required
                inputUpdate={inputUpdate}
                name="grade"
                label="Grade"
                type="number"
                validateMessage="Invalid Number"
              />
              <Input
                required
                inputUpdate={inputUpdate}
                label="Entry Class"
                name="entryClass"
                type="number"
                validateMessage="Invalid Number"
              />
            </li>
            <li className={styles.groupedInput}>
              <Input required inputUpdate={inputUpdate} name="address1" label="Address Line 1" type="text" />
            </li>
            <li className={styles.groupedInput}>
              <Input required inputUpdate={inputUpdate} name="address2" label="Street Line 2" type="text" />
            </li>
            <li className={styles.groupedInput}>
              <Input required inputUpdate={inputUpdate} name="city" label="City" type="text" />
              <Input required inputUpdate={inputUpdate} name="state" label="State" type="text" />
            </li>
            <li className={styles.groupedInput}>
              <Input
                required
                inputUpdate={inputUpdate}
                name="zipCode"
                label="Zip  Code"
                type="number"
                validateMessage="Invalid Number"
              />
              <Input
                required
                inputUpdate={inputUpdate}
                name="contactNumber"
                label="Contact Number"
                type="number"
                validateMessage="Invalid Number"
              />
            </li>
          </ul>
          <div className={styles.buttonContainer}>
            <Button>Submit</Button>
          </div>
        </div>
      </form>
      {showSubmittedForm && <FormTable formState={inputState} />}
    </>
  );
}

export default Form;
