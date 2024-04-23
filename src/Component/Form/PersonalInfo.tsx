import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface PersonalInfoProps {
    onNext: (values: PersonalInfoFormValues) => void;
    onPrevious: () => void;
}

interface PersonalInfoFormValues {
    fullName: string;
    email: string;
    dateOfBirth: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({onNext, onPrevious}) => {
    const formik = useFormik<PersonalInfoFormValues>({
        initialValues: {
            fullName: '',
            email: '',
            dateOfBirth: ''
        },

        validationSchema: Yup.object({
            fullName: Yup.string().required('Full name is Required!'),
            email: Yup.string().email('Email is Required!').required('Email is Required!'),
            dateOfBirth: Yup.string().required('Date of Birth is Required!')
        }),

        onSubmit: values => {
            onNext(values);
        }
    });

    return (
        <form className="flex flex-col justify-center" onSubmit={formik.handleSubmit}>

            <div className="mb-4">
                <label className="block mb-1" htmlFor="fullName">Full name</label>
                <input className="px-3 py-2 border rounded-md w-full" placeholder="Input your Name" type="text" {...formik.getFieldProps('fullName')} />
                {formik.touched.fullName && formik.errors.fullName ? (
                    <p>{formik.errors.fullName}</p>
                ) : null}
            </div>

            <div className="mb-4">
                <label className="block mb-1" htmlFor="email">Email</label>
                <input className="px-3 py-2 border rounded-md w-full" placeholder="Input your Email" type="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                    <p>{formik.errors.email}</p>
                ) : null}
            </div>

            <div className="mb-4">
                <label className="block mb-1" htmlFor="dateOfBirth">Date of Birth</label>
                <input className="px-3 py-2 border rounded-md w-full" placeholder="Input your Date of Birth" type="date" {...formik.getFieldProps('dateOfBirth')} />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.dateOfBirth}</p>
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

export default PersonalInfo;