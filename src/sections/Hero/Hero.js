import "./Hero.css" ;
import { Button } from "../../components";
const Hero = () => {
  return (
    <div>
          <div className=" main-hero">
            <div className="hero-text">
              <p>Welcome To Cyborg</p>
              <h1>
                <span>BROWSE</span> OUR POPULAR GAMES HERE
              </h1>
              <Button> Browse Now </Button>
            </div>
        </div>
    </div>
  )
}

export default Hero
