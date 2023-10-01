import './Button.scss'

function Button ({ children, buttonClass }) {
  const buttonClasses = buttonClass ? `button ${buttonClass}` : 'button';

  return (
      <button className={buttonClasses} >{ children }</button>
  )
}

export default Button;
