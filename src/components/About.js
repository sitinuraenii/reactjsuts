import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <section id="About">
      <div className="About text-center">
        <div class="Container">
          <div class="row text-center mb-5">
            <div class="col ">
              <h1>About Me</h1>
            </div>
          </div>
          <div class="row justify-content-center fs-5">
            <div class="col-md-4 text-center">
              <Card style={{ height: "13rem" }}>
                <Card.Body>
                  <Card.Title>HOLLA</Card.Title>
                  <Card.Text>Siti nuraeni mahasiswa upi semester 3</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5fcde6"
              fill-opacity="1"
              d="M0,64L48,101.3C96,139,192,213,288,208C384,203,480,117,576,117.3C672,117,768,203,864,208C960,
                 213,1056,139,1152,112C1248,85,1344,107,1392,117.3L1440,128L1440,
                320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,
                320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
