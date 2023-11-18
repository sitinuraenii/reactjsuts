import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import divroh from "../assets/img/divroh.jpeg";
import mentoring from "../assets/img/mentoring.jpeg";
import agustusan from "../assets/img/agustusan.jpeg";

const Work = () => {
  return (
    <>
      <Navigation />
      <section id="Work">
        <div className="Work text-center">
          <div className="Container">
            <div className="row text-center mb-5">
              <div className="col">
                <h1>Work Me</h1>
              </div>
            </div>
            <div class="row fs-5">
              <div class="col-md-4 mb-3">
                <div class="card text-center">
                  <img class="card-img-top" src={divroh} alt="divroh" />
                  <div class="card-body">
                    <div class="text center fw-bold">Divroh</div>
                    <p class="card-text">Pada saat memasuki semester 2 dari BEM KEMAKOM mengadakan oprec kepengurusan. Alasan mengikuti tersebut untuk mencari pengalaman dan wawasan baru dalam organisasi.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card text-center">
                  <img class="card-img-top" src={mentoring} alt="mentoring" />
                  <div class="card-body">
                    <div class="text center fw-bold">Mentoring</div>
                    <p class="card-text">Pada bulan September saya mengikuti kegiatan mentoring mahasiswa baru dengan materi peralihan dari siswa ke mahasiswa dan etika dalam perkuliahan yang diadakan dari program kerja BEM</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card text-center">
                  <img class="card-img-top" src={agustusan} alt="agustusan" />
                  <div class="card-body">
                    <div class="text center fw-bold">17 Agustus</div>
                    <p class="card-text">Pada saat memperingati 17 Agustusan saya mengikuti kepanitiaan untuk memeriahkan acara 17 Agustusan di kampung halaman. Pada acara tersebut banyak lomba yang diikuti oleh anak-anak sampai dewasa.</p>
                  </div>
                </div>
              </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#e9b384"
                fill-opacity="1"
                d="M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,106.7C672,107,768,149,864,154.7C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Work;
