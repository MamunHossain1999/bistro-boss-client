

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-5 w-5/12 mx-auto">
            <p className="text-yellow-600">{subHeading}</p>
            <p className="text-4xl border-y-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;