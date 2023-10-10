import '../styles/Button.scss';

function Button ({ children, buttonClass, onClick }) {
  const buttonClasses = buttonClass ? `button ${buttonClass}` : 'button';

  return (
      <button onClick={onClick} className={buttonClasses} >{ children }</button>
  )
}

export default Button;
