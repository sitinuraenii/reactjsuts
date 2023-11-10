import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="Hero text center">
        <div className="Container">
          <img src="assets/img/eni.jpg/" alt=""></img>
          <div class="row justify-content-center md-2">
            <div class="col-md-6 text-black text-center ">
              <h1>Siti Nuraeni</h1>
              <p>Mahasiswa</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f8f2f2"
              fill-opacity="1"
              d="M0,160L60,149.3C120,139,240,117,360,106.7C480,96,600,96,720,117.3C840,139,960,181,1080,176C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,
         320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,
         320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
