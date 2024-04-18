type SampleComponentProps ={
    title: string;
    description: string;
}

function PropsOneComponent({title, description}: SampleComponentProps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <hr/>
        </div>
    );
}

export default PropsOneComponent;