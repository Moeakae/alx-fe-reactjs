
import { useFormik } from "formik";
import *as Yup from "yup";
const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
},
validationSchema: Yup.object({ 
    username: Yup.string().required("Username is required"),
    email: Yup.string()
    .email("Invalid email addresss")
     .required("email is required"),
    password: Yup.string()
    .min(6, "password must be at least 6 characters")
     .required("password is required"),
}),
onSubmit: (values) => { 
    console.log("Form values:", values)
    alert("User registered successfully!");
},
});
return (
    <form onSubmit={formik.handleSubmit}>
        <h2>User Registration</h2>
        <div>
            <label>Username:</label>
            <input type="text" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.value.username} />
            {formik.touched.email && formik.errors.email ? (
                <p style={{ color: 'red' }}>{formik.errors.email}</p>
            ) :null}
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
                <p style={{ color: 'red'}}>{formik.errors.password}</p>
            ) : null}
        </div>
        <button type="submit">Submit</button>
    </form>
);
}
export default FormikForm;