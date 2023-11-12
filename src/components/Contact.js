import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />
      <section id="Contact">
        <div className="Contact">
          <div className="Container">
            <div className="row text-center ">
              <div className="col pt-3">
                <h1>Contact Me</h1>
              </div>
            </div>
            <div className="row justify-content-center md-1 ">
              <div className="col-md-6">
                <Form>
                  <Form.Group className="mb-2" controlId="nama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="nama" placeholder="sitinuraeni" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="sitinuraeni@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="asal">
                    <Form.Label>Asal</Form.Label>
                    <Form.Control type="asal" placeholder="Majalengka" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="pesan">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button as="input" type="submit" value="Kirim" />
                </Form>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#e9b384"
                fillOpacity="1"
                d="M0,0L48,0C96,0,192,0,288,26.7C384,53,480,107,576,106.7C672,107,768,53,864,42.7C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
