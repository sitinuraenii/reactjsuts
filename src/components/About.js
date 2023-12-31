import Card from "react-bootstrap/Card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { CardBody } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Navigation />
      <section id="About">
        <div className="About text-center">
          <div className="Container">
            <div className="row text-center mb-5">
              <div className="col ">
                <h1>About Me</h1>
              </div>
            </div>

            <div className="row justify-content-center fs-5">
              <div className="col-md-4 text-center mb-1">
                <Card>
                  <CardBody>
                    <Card.Title>Siti Nuraeni</Card.Title>
                    <Card.Text>Seorang mahasiswa di Universitas Pendidikan Indonesia dengan jurusan Pendidikan Ilmu Komputer Angkatan 2022. Sekarang saya sedang menjalani semester 3. </Card.Text>
                  </CardBody>
                </Card>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#e9b384"
                fillOpacity="1"
                d="M0,64L48,101.3C96,139,192,213,288,208C384,203,480,117,576,117.3C672,117,768,203,864,208C960,
                 213,1056,139,1152,112C1248,85,1344,107,1392,117.3L1440,128L1440,
                320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,
                320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
