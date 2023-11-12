import logo from "../assets/img/eni.jpg";
import Navigation from "../components/Navigation";
const Hero = () => {
  return (
    <>
      <Navigation />
      <section id="Hero">
        <div className="Hero text center">
          <div className="Container">
            <div className="row justify-content-center ">
              <div className="col-md-6 text-black text-center ">
                <img src={logo} className="rounded-circle pb-4" alt="" width={200}></img>
                <h1>Siti Nuraeni</h1>
                <p>Mahasiswa</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#dac0a3"
                fillOpacity="1"
                d="M0,160L60,149.3C120,139,240,117,360,106.7C480,96,600,96,720,117.3C840,139,960,181,1080,176C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,
         320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,
         320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
