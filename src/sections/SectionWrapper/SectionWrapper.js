import "./SectionWrapper.css"

const SectionWrapper = (props) => {
  return (
    <div className="most-section">
      {props.children}
    </div>
  )
}

export default SectionWrapper
