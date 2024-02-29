import Abimon from './Abimon.jpg';
import Bg from './header-background.jpg';
import './main.css';






function Cv(){
  



    return(
        <>




  
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="pt-4 clearfix">
          <h1 className="site-title mb-0">Abimon David Rajan</h1>
          <div className="site-nav"> 
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link" href="#about" title="About"><span className="menu-title">About</span></a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#skills" title="Skills"><span className="menu-title">Skills</span></a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#experience" title="Experience"><span className="menu-title">Experience</span></a>
                </li>
                <li className="nav-item"><a className="nav-link" href="#education" title="Education"><span className="menu-title">Education</span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div className="page-content">
      <div className="container">
<div className="resume-container">
  <div className="shadow-1-strong bg-white my-5" id="intro">
    <div className="bg-info text-white">
      <div className="cover bg-image"><img src={Bg}alt='bg' />
        <div className="mask" style={{'backgroundColor': 'rgba(0, 0, 0, 0.7)','backdropFilter': 'blur(2px)'}}>
          <div className="text-center p-5">
            <div className="avatar p-1"><img className="img-thumbnail shadow-2-strong" alt='abimon' src={Abimon} width="160" height="160"/></div>
            <div className="header-bio mt-3">
              <div data-aos="zoom-in" data-aos-delay="0">
                <h2 className="h1">Abimon David Rajan</h2>
                <p>Python Full-Stack Developer</p>
              </div>
              <div className="header-social mb-3 d-print-none" data-aos="zoom-in" data-aos-delay="200">
                <nav role="navigation">
                  <ul className="nav justify-content-center"> 
                    <li className="nav-item"><a className="nav-link" href="https://wa.me/qr/ESU422LQKCDMG1" title="Whatsapp"><i className="fab fa-whatsapp"></i><span className="menu-title sr-only">Whatsapp</span></a>
                    </li>         
                    <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/abimon.d?igsh=MWdpa2IzNGxqaTRxMw==" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href=" https://www.linkedin.com/in/abimon-david-rajan-7507a42a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title="Linkedin"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">Linkedin</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>
  <div className="shadow-1-strong bg-white my-5 p-5" id="about">
    <div className="about-section">
      <div className="row">
        <div className="col-md-6">
          <h2 className="h2 fw-light mb-4">About Me</h2>
          <p>Hello! I’m Abimon David Rajan. I am passionate about  Web Design. I am a skilled <strong>Python Full-Stack developer</strong> and master of Python tools such as Django and ORM. I am a quick learner and a team worker that gets the job done.</p>
          <p>I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
        </div>
        <div className="col-md-5 offset-lg-1">
          <div className="row mt-2">
            <h2 className="h2 fw-light mb-4">Bio</h2>
            <div className="col-sm-5">
              <div className="pb-2 fw-bolder"><i className="far fa-calendar-alt pe-2 text-muted" style={{"width":"24px","opacity":"0.85"}}></i> Age</div>
            </div>
            <div className="col-sm-7">
              <div style={{"color": "black"}} className="pb-2">25</div>
            </div>
            <div className="col-sm-5">
              <div className="pb-2 fw-bolder"><i className="far fa-envelope pe-2 text-muted" style={{"width":"24px","opacity":"0.85"}}></i> Email</div>
            </div>
            <div className="col-sm-7">
              <div className="pb-2"><a style={{"color": "black"}} href="mailto:abimond77@gmail.com">abimond77@gmail.com</a></div>
            </div>
            <div className="col-sm-5">
              <div className="pb-2 fw-bolder"><i className="fab fa-linkedin pe-2 text-muted" style={{"width":"24px","opacity":"0.85"}}></i> Linkedin</div>
            </div>
            <div className="col-sm-7">
              <div className="pb-2"><a style={{"color": "black"}} href="https://www.linkedin.com/in/abimon-david-rajan-7507a42a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">abimon.d</a></div>
            </div>
            <div className="col-sm-5">
              <div className="pb-2 fw-bolder"><i className="fas fa-phone pe-2 text-muted" style={{"width":"24px","opacity":"0.85"}}></i> Phone</div>
            </div>
            <div className="col-sm-7">
              <div className="pb-2"><a style={{"color": "black"}} href="tel:+919629617541">9629617541</a></div>
            </div>
            <div className="col-sm-5">
              <div className="pb-2 fw-bolder"><i className="fas fa-map-marker-alt pe-2 text-muted" style={{"width":"24px","opacity":"0.85"}}></i> Address</div>
            </div>
            <div className="col-sm-7">
              <div style={{"color": "black"}} className="pb-2">Nagercoil</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="shadow-1-strong bg-white my-5 p-5" id="skills">
    <div className="skills-section">
      <h2 className="h2 fw-light mb-4">Professional Skills</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3"><span className="fw-bolder">HTML 5</span>
            <div className="progress my-2 rounded" style={{"height": "20px"}}>
              <div className="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style={{"width":" 95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">Master</div>
            </div>
          </div>
          <div className="mb-3"><span className="fw-bolder">CSS / Bootstrap 5</span>
            <div className="progress my-2 rounded" style={{"height": "20px"}}>
              <div className="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor=".skills-section" style={{"width": "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Expert</div>
            </div>
          </div>
          <div className="mb-3"><span className="fw-bolder">JavaScript</span>
            <div className="progress my-2 rounded" style={{"height": "20px"}}>
              <div className="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Advance</div>
            </div>
          </div>
          <div className="mb-3"><span className="fw-bolder">SQL</span>
            <div className="progress my-2 rounded" style={{"height": "20px"}}>
              <div className="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Advance</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3"><span className="fw-bolder">Python</span>
            <div className="progress my-2 rounded" style={{"height": "20px"}}>
              <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="400" data-aos-anchor=".skills-section" style={{"width": "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">Master</div>
            </div>
          </div>
          <div className="mb-3"><span className="fw-bolder">Django</span>
            <div className="progress my-2 rounded" style={{"height": "20px"}}>
              <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="400" data-aos-anchor=".skills-section" style={{"width":"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">Expert</div>
            </div>
          </div>
          <div className="mb-3"><span className="fw-bolder">JQuery</span>
            <div className="progress my-2 rounded" style={{"height": "20px"}}>
              <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="500" data-aos-anchor=".skills-section" style={{"width": "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Expert</div>
            </div>
          </div>
          <div className="mb-3"><span className="fw-bolder">React-Js</span>
            <div className="progress my-2 rounded" style={{"height": "20px"}}>
              <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="600" data-aos-anchor=".skills-section" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Beginner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="shadow-1-strong bg-white my-5 p-5" id="experience">
    <div className="work-experience-section">
      <h2 className="h2 fw-light mb-4">Work Experience</h2>
      <div className="timeline">
        <div className="timeline-card timeline-card-info" data-aos="fade-in" data-aos-delay="0">
          <div className="timeline-head px-4 pt-3">
            <div className="h5">Python intern <span className="text-muted h6">Suffix E-Solutions</span></div>
          </div>
          <div className="timeline-body px-4 pb-4">
            <div className="text-muted text-small mb-3">June, 2023 - Present</div>
            <div>Worked as an intern in phython full stack devoloper for 6 months within a period of time I did a projects based on django/python. </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="shadow-1-strong bg-white my-5 p-5" id="education">
    <div className="education-section">
      <h2 className="h2 fw-light mb-4">Education</h2>
      <div className="timeline">
        <div className="timeline-card timeline-card-success" data-aos="fade-in" data-aos-delay="0">
          <div className="timeline-head px-4 pt-3">
            <div className="h5">Masters in Computer Application <span className="text-muted h6">Anna University</span>          </div>
          </div>
          <div className="timeline-body px-4 pb-4">
            <div className="text-muted text-small mb-3">2021 - 2023</div>
            <div>CSI Institute of Technology, known as CSI Engineering College, is an engineering institution located in Thovalai, Kanyakumari, Tamil Nadu, India. CSI Institute of Technology is a Christian Minority Institution, established in 1995 by the Church of South India, Kanyakumari Diocese.</div>
          </div>
        </div>
        <div className="timeline-card timeline-card-success" data-aos="fade-in" data-aos-delay="200">
          <div className="timeline-head px-4 pt-3">
            <div className="h5">Bachelor of Computer Science <span className="text-muted h6">Government Arts and Science College </span>          </div>
          </div>
          <div className="timeline-body px-4 pb-4">
            <div className="text-muted text-small mb-3">2018 -2020/2021</div>
            <div>Delivering quality education to economically disadvantaged students in social welfare is essential. It helps them lead better lives and fosters responsible citizenship. Promoting education and civic responsibility among youth is vital for building an informed and conscientious society. Recent education policies focus on shaping students' lives with values and knowledge for a better future.</div>
          </div>
        </div>
        <div className="timeline-card timeline-card-success" data-aos="fade-in" data-aos-delay="400">
          <div className="timeline-head px-4 pt-3">
            <div className="h5">Full-Stack Python <span className="text-muted h6">Scope India</span>          </div>
          </div>
          <div className="timeline-body px-4 pb-4">
            <div className="text-muted text-small mb-3">June,2023 - Dec,2023</div>
            <div>A full stack developer is a tech professional who possesses a diverse skill set to handle both front-end and back-end development of web applications.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div></div>
    </div>
    <footer className="pt-4 pb-4 text-muted text-center d-print-none">
      <div className="container">
        <div className="my-3">
          <div className="h4">Abimon David Rajan</div>
          <div className="footer-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link" href="https://wa.me/qr/ESU422LQKCDMG1" title="Whatsapp"><i className="fab fa-whatsapp"></i><span className="menu-title sr-only">Whatsapp</span></a>
                </li>         
                <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/abimon.d?igsh=MWdpa2IzNGxqaTRxMw==" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></a>
                </li>
                <li className="nav-item"><a className="nav-link" href=" https://www.linkedin.com/in/abimon-david-rajan-7507a42a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title="Linkedin"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">Linkedin</span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
   
    

 

        </>
    )
}

export default Cv
