import "./Button.css"

const Button = (props) => {
  return (
    <div>
      <a className="btn-hero" href="#">
        {props.children}
      </a>
    </div>
  );
}

export default Button
