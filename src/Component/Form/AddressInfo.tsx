import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface AddressInfoProps {
    formData: any;
    onNext: (values: AddressInfoFormValues) => void;
    onPrevious: () => void;
}

interface AddressInfoFormValues {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
}

const AddressInfo: React.FC<AddressInfoProps> = ({formData, onNext, onPrevious}) => {
    const formik = useFormik<AddressInfoFormValues>({
        initialValues: {
            streetAddress: '',
            city: '',
            state: '',
            zipCode: ''
        },

        validationSchema: Yup.object({
            streetAddress: Yup.string().required('Address is Required!'),
            city: Yup.string().required('City is Required!'),
            state: Yup.string().required('State is Required!'),
            zipCode: Yup.string().matches(/^\d{5}$/, 'Invalid zipCode').required('ZIP Code is Required!')
        }),

        onSubmit: values => {
            onNext(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label className="block mb-1" htmlFor="streetAddress">Address</label>
                <input className="px-3 py-2 border rounded-md w-full" placeholder="Input your address" type="text" {...formik.getFieldProps('streetAddress')} />
                {formik.touched.streetAddress && formik.errors.streetAddress ? (
                    <p>{formik.errors.streetAddress}</p>
                ) : null}
            </div>

            <div>
                <label className="block mb-1" htmlFor="city">City</label>
                <input className="px-3 py-2 border rounded-md w-full" placeholder="Input your city" type="text" {...formik.getFieldProps('city')} />
                {formik.touched.city && formik.errors.city ? (
                    <p>{formik.errors.city}</p>
                ) : null}
            </div>

            <div>
                <label className="block mb-1" htmlFor="state">State</label>
                <input className="px-3 py-2 border rounded-md w-full" placeholder="Input your state" type="text" {...formik.getFieldProps('state')} />
                {formik.touched.state && formik.errors.state ? (
                    <p>{formik.errors.state}</p>
                ) : null}
            </div>

            <div>
                <label className="block mb-1" htmlFor="zipCode">ZIP Code</label>
                <input className="px-3 py-2 border rounded-md w-full" placeholder="Input your ZIP Code" type="text" {...formik.getFieldProps('zipCode')} />
                {formik.touched.zipCode && formik.errors.zipCode ? (
                    <p>{formik.errors.zipCode}</p>
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

export default AddressInfo;
