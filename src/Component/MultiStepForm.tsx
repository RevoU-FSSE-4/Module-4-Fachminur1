import React, { useState } from "react";
import PersonalInfo from "./Form/PersonalInfo";
import AccountInfo from "./Form/AccountInfo";
import AddressInfo from "./Form/AddressInfo";


const MultiStepForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({});

    const onNextStep = (data: any) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    const onPreviousStep = () => {
        setStep(step - 1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalInfo onNext={onNextStep} onPrevious={onPreviousStep} />;
            case 2:
                return <AddressInfo formData={formData} onNext={onNextStep} onPrevious={onPreviousStep} />;
            case 3:
                return <AccountInfo formData={formData} onPrevious={onPreviousStep} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Multi-Step Form</h1>
            <div>{renderStep()}</div>
        </div>
    );
};

export default MultiStepForm;
