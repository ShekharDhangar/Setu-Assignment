import { useInputHandler } from '../../customHooks/useInputHandler';
import Button from '../Button/Button';
import { Input } from '../index';
import styles from './Form.module.css';

function Form() {
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
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form Submitted');
  }
  return (
    <form className={`${styles.form} ${styles.flex}}`} onSubmit={handleSubmit}>
      <div className={styles.formMain}>
        <div className={styles.formHeading}>
          <h2 className={styles.formPrimaryHeading}>School Registration</h2>
        </div>
        {/* <div className={styles.formSubHeading}> */}
        <h4 className={styles.formSubHeading}>Student Information</h4>
        {/* </div> */}

        <ul className={styles.formInputsWrapper}>
          <li className={styles.groupedInput}>
            <Input inputUpdate={inputUpdate} name="firstName" label="First Name" type="text" required />
            <Input inputUpdate={inputUpdate} name="lastName" label="Last Name" type="text" required />
          </li>
          <li className={styles.groupedInput}>
            <Input inputUpdate={inputUpdate} label="Birth Date" name="dateOfBirth" type="date" required />
            <div className={styles.selectContainer}>
              <label htmlFor="cars">Gender</label>
              <select required name="gender" id="cars" className={styles.select}>
                <option value="Gender" disabled>
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
              inputUpdate={inputUpdate}
              placeHolder="example@example.com"
              required
              label="Email"
              type="email"
              name="email"
            />
          </li>
          <li className={styles.groupedInput}>
            <Input
              inputUpdate={inputUpdate}
              required
              label="Name of previous School "
              name="previousSchoolName"
              type="text"
            />
            <Input inputUpdate={inputUpdate} required label="Previous Class" name="previousClass" type="number" />
          </li>
          <li className={styles.groupedInput}>
            <Input inputUpdate={inputUpdate} required name="grade" label="Grade" type="number" />
            <Input inputUpdate={inputUpdate} required label="Entry Class" name="entryClass" type="number" />
          </li>
          <li className={styles.groupedInput}>
            <Input inputUpdate={inputUpdate} required name="address1" label="Address Line 1" type="text" />
          </li>
          <li className={styles.groupedInput}>
            <Input inputUpdate={inputUpdate} name="address2" label="Street Line 2" type="text" />
          </li>
          <li className={styles.groupedInput}>
            <Input inputUpdate={inputUpdate} required name="city" label="City" type="text" />
            <Input inputUpdate={inputUpdate} required name="state" label="State" type="text" />
          </li>
          <li className={styles.groupedInput}>
            <Input inputUpdate={inputUpdate} required name="zipCode" label="Zip  Code" type="number" />
            <Input
              inputUpdate={inputUpdate}
              required
              name="contactNumber"
              maxLength="10"
              label="Contact Number"
              type="number"
            />
          </li>
        </ul>
        <div className={styles.buttonContainer}>
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  );
}

export default Form;
