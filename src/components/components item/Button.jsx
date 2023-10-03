const Button = ({ children, onClick , clase}) => {
    return <button className={clase} onClick={onClick}>{children}</button>;
    };
export default Button;