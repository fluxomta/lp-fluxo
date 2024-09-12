// components/forms/SubmitButton.js
import Icons from "../Global/Icons";
const SubmitButton = ({ label }) => {
    return (
        <button
            type="submit"
            className="flex items-center justify-center group btn md:btn-large focus:border-secondary-500 focus:ring focus:ring-secondary-700 focus:ring-opacity-50"
        >
            {label}
            <Icons.AngleRight className='w-6 ml-2 transition-transform duration-300 transform group-hover:translate-x-1 ' />
        </button>
    );
};

export default SubmitButton;
