import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface AccountInfoProps {
    formData: any;
    onPrevious: () => void;
}

interface AccountInfoFormValues {
    username: string;
    password: string;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ formData, onPrevious }) => {
    const formik = useFormik<AccountInfoFormValues>({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username Required!'),
            password: Yup.string().required('Password Required!')
        }),
        onSubmit: values => {
            alert(JSON.stringify({ ...formData, ...values }));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input placeholder="Input your username" type="text" {...formik.getFieldProps('username')} />
                {formik.touched.username && formik.errors.username ? (
                    <p>{formik.errors.username}</p>
                ) : null}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input placeholder="Input your password" type="password" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? (
                    <p>{formik.errors.password}</p>
                ) : null}
            </div>

            <div>
                <button type="button" onClick={onPrevious}>Previous</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
};

export default AccountInfo;
