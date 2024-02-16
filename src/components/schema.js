import * as Yup from 'yup'


const validationSchema = Yup.object({
    name:Yup.string().required('Name is required'),
    address:Yup.string().required('Address is required'),
    dob:Yup.date().nullable().required('Birth Date is required'),
    phone:Yup.string().required('Phone number is required').max(10,"Invalid Number!"),
    city:Yup.string().required('City is required'),
    country:Yup.string().required('Country is required'),
    image:Yup.string().required('Image is required'),
    state:Yup.string().required('State is required'),
    pincode:Yup.string().required('Pin code is required'),
  
  });

  export default validationSchema

  