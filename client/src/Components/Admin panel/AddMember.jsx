import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TermsAndCondition from '../TermsAndCondition';
import { useFormik } from 'formik';
import { formValidate } from '../../Schema';

const AddMember = () => {
  const navigate = useNavigate();
  const bodyFormData = new FormData();
  const [userFile, setUserFile] = useState([]);
  const [userData, setUserData] = useState('');
  const imageRef1 = useRef('');
  const imageRef2 = useRef('');
  const imageRef3 = useRef('');
  const imageRef4 = useRef('');
  const imageRef5 = useRef('');

  const initialValues = {
    firstName: '',
    fatherName: '',
    address: '',
    AadharNumber: '',
    AccountNumber: '',
    PanNumber: '',
    Mobile: '',
    email: '',
    formBasicCheckbox: '',
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const files = e.target.files[0];
    setUserFile({ ...userFile, [name]: files });
    // const file = e.target.files[0];
    // console.log(file);
    // setUserFile({ ...userFile, [name]: file });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      // validationSchema: formValidate,
      onSubmit: (values, action) => {
        SubmitHandler(values, action);
        // action.resetForm();
      },
    });

  const appendFormData = (values) => {
    bodyFormData.append('AadharPhoto', userFile.AadharPhoto);
    bodyFormData.append('bankPassbook', userFile.bankPassbook);
    bodyFormData.append('panCard', userFile.panCard);
    bodyFormData.append('passportSizePhoto', userFile.passportSizePhoto);
    bodyFormData.append('signaturePhoto', userFile.signaturePhoto);
    bodyFormData.append('data', JSON.stringify(values));
    setUserData(bodyFormData);
  };

  const SubmitHandler = async (values, action) => {
    appendFormData(values);
    for (const value of bodyFormData) {
      console.log(value);
    }

    // userFile.
    try {
      // const { data } = await axios.post('/register', bodyFormData, {
      // headers: {
      // 'Content-Type': 'multipart/form-data',
      // },
      // });
      // console.log(data);

      const { data } = await axios.post(
        '/register',

        userData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    // console.log(
    // '🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values',
    // values
    // );
    imageRef1.current.value = '';
    imageRef2.current.value = '';
    imageRef3.current.value = '';
    imageRef4.current.value = '';
    imageRef5.current.value = '';

    action.resetForm();
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ margin: '50px 0px' }}
      >
        <div className="shadow-lg bg-body rounded">
          <div className="text-center h3 mt-2">Add Member</div>
          <Form className="m-2 m-sm-5 w-75" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                type="text"
                placeholder="Enter Name"
              />
              {errors.firstName && touched.firstName ? (
                <p className=" text-danger">{errors.firstName}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="fatherName">
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.fatherName}
                name="fatherName"
                type="text"
                placeholder="Enter Father Name"
              />
              {errors.fatherName && touched.fatherName ? (
                <p className=" text-danger">{errors.fatherName}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.email}
                name="email"
                type="email"
                placeholder="Enter  Your Email"
              />
              {errors.email && touched.email ? (
                <p className=" text-danger">{errors.email}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="CPassword">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.Mobile}
                name="Mobile"
                type="text"
                placeholder="Enter your Phone Number"
              />
              {errors.Mobile && touched.Mobile ? (
                <p className=" text-danger">{errors.Mobile}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.address}
                name="address"
                type="text"
                placeholder="Enter Address"
              />
              {errors.address && touched.address ? (
                <p className=" text-danger">{errors.address}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="AadharNumber">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.AadharNumber}
                name="AadharNumber"
                type="text"
                placeholder="Enter Aadhar Number"
              />
              {errors.AadharNumber && touched.AadharNumber ? (
                <p className=" text-danger">{errors.AadharNumber}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="AadharPhoto">
              <Form.Label>Aadhar Photo</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                accept="image/x-png,image/gif,image/jpeg"
                name="AadharPhoto"
                type="file"
                ref={imageRef1}
                placeholder="Select Aadhar Photo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="AccountNumber">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.AccountNumber}
                name="AccountNumber"
                type="text"
                placeholder="Enter Account Number"
              />
              {errors.AccountNumber && touched.AccountNumber ? (
                <p className=" text-danger">{errors.AccountNumber}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="bankPassbook">
              <Form.Label>Bank Passbook Photo</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                name="bankPassbook"
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                ref={imageRef2}
                placeholder="Select Bank Passbook Photo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="PanNumber">
              <Form.Label>PAN Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.PanNumber}
                name="PanNumber"
                type="text"
                placeholder="Enter Pan Number"
              />
              {errors.PanNumber && touched.PanNumber ? (
                <p className=" text-danger">{errors.PanNumber}</p>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="panCard">
              <Form.Label>Pan Card Photo</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                name="panCard"
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                ref={imageRef3}
                placeholder="Select Pan Card Photo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="passportSizePhoto">
              <Form.Label>Passport Size Photo</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                accept="image/x-png,image/gif,image/jpeg"
                ref={imageRef4}
                name="passportSizePhoto"
                type="file"
                placeholder="Select Passport Size Photo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signature">
              <Form.Label>Signature Photo</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                accept="image/x-png,image/gif,image/jpeg"
                ref={imageRef5}
                name="signaturePhoto"
                type="file"
                placeholder="Select Signature Photo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onChange={handleChange}
                name="formBasicCheckbox"
                type="checkbox"
                label={<TermsAndCondition />}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddMember;
