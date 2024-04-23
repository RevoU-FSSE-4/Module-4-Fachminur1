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
                <label className="block mb-1" htmlFor="username">Username</label>
                <input className="px-3 py-2 border rounded-md w-full" placeholder="Input your username" type="text" {...formik.getFieldProps('username')} />
                {formik.touched.username && formik.errors.username ? (
                    <p>{formik.errors.username}</p>
                ) : null}
            </div>

            <div>
                <label className="block mb-1" htmlFor="password">Password</label>
                <input className="px-3 py-2 border rounded-md w-full" placeholder="Input your password" type="password" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? (
                    <p>{formik.errors.password}</p>
                ) : null}
            </div>

            <div className="flex justify-between">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" type="button" onClick={onPrevious}>
                    Previous
                 </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" type="submit">
                    Next
                </button>
            </div>
        </form>
    );
};

export default AccountInfo;
