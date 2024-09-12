// components/forms/Message.js
const Message = ({ message, type }) => {
    const messageStyle = type === 'error' ? 'text-red-500' : 'text-green-500';
    return (
        <p className={`mt-4 text-center ${messageStyle}`}>
            {message}
        </p>
    );
};

export default Message;
