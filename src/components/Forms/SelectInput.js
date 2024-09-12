// components/forms/SelectInput.js
const SelectInput = ({ label, name, value, onChange, options, required = false }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor={name}>
                {label}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="mt-1 block bg-primary-500 w-full rounded-md border-primary-400 shadow-sm focus:border-secondary-500 focus:ring focus:text-secondary-500 focus:ring-secondary-700 focus:ring-opacity-50"
                required={required}
            >
                <option value="" disabled>
                    Selecione
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
