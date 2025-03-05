const Button = ({ className, onClick, icon }) => {
    return (
        <button
            className={className}
            onClick={onClick}
        > {icon} </button>
    );
};

export default Button;