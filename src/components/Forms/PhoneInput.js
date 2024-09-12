// components/forms/PhoneInput.js
import { IMaskInput } from 'react-imask';

const PhoneInput = ({ label, name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor={name}>
                {label}
            </label>
            <IMaskInput
                mask="(00) 00000-0000"
                value={value}
                onAccept={(value) => onChange({ target: { name, value } })} // Ajusta a mudança de valor
                className="mt-1 block bg-primary-500 w-full rounded-md border-primary-400 shadow-sm focus:border-secondary-500 focus:ring focus:text-secondary-500 focus:ring-secondary-700 focus:ring-opacity-50"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default PhoneInput;
