import logo from './usc-logo.png';
import logo_mobile from './usc-logo-mobile.png';
import './App.css';
import 'react-dropdown/style.css';
import InterestForm from './interestForm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">      
      <div class="logo-wrapper static-top pt-0 pb-0">
            <img src={logo_mobile} class="logo-mobile d-sm-none justify-content-right"/>
            <img src={logo} class="logo d-none d-sm-block justify-content-right"/>     
      </div>
      </header>
      <body class="container-fluid p-0 m-0">
        
        {/* ------------ HEADER SECTION ------------ */}
        <div class="heading-title pt-5 pb-3 bg-image d-flex align-items-center justify-content-center">
          <div class="container-fluid">
            <h3 class="d-flex pb-0 mb-0 container-fluid justify-content-center"><b>USC Ukraine Assistance Hub</b></h3>
            <p class="d-flex pt-0 mt-0 container-fluid justify-content-center"><br/>
              <p>If you are a faculty member, postdoc, graduate, or undergraduate student who has left or is 
              considering leaving Ukraine because of the war, USC may offer you a place to continue your research, work or studies. Funding, visa support, accommodation, 
              mentoring, and other resources are available.</p>
            </p>
          </div>
        </div>


        {/* ------------ INTRODUCTION SECTION CODE ------------ */}
        <div class="content container justify-content-center col-xs-6 mt-5 col-lg-7">

          Please see <b>general pathways</b> as well as <b>specific opportunities</b> for students and scholars listed 
          below. Even if you do not see an existing opening, please submit your information through the Interest Form below. We will strive to connect you with specific 
          faculty and programs at USC.

          Over 350 USC-based faculty have expressed interest in supporting Ukrainian students and academics, and resources are continually being updated internally!<br/><br/>
        
          <b>For USC Faculty:</b> If you'd like to add your resources or collaboration interests, please use <a href="GOOGLEFORMLINK">this form</a>.<br/><br/>
        
          <i>This is a joint effort of USC faculty members with support and oversight by the Office of 
          Strategic and Global Initiatives at USC. For additional information, you can contact our working group directly via <a href="ukraineassistance@usc.edu">ukraineassistance@usc.edu</a>.</i>
        </div>
        
          
        {/* ------------ GENERAL PATHWAYS SECTION ------------ */}
        <div class="content container justify-content-center col-xs-6 mt-5 col-lg-7">
         <h1 class="section-headers d-flex pb-0 mb-0 container-fluid justify-content-center">
           <b>General Pathways for Interested Scholars and Students</b>
          </h1><br/>
          <p1 class="text-align-center">
            <div class="undergrad-pathway">
              <img src='https://lh3.googleusercontent.com/gZrEU4O47bhYHpxq4NIPuNE60pkGsdp_uSQP6I25iUW8Ab1fDJAozs_qxm7u2s_B972__w=s85' class='program-pic' alt='Undergraduate Program Picture'></img> <br></br>
              <p className='program-text'>
                <b>Undergraduate Programs:</b> leaving this empty before we know what we can offer. 
                To learn more about undergraduate education at USC, please click <a target="_blank" href="https://admission.usc.edu/">here</a>.<br/><br/>
              </p>
            </div>
            <div class="masters-pathway">
              <img src='https://lh3.googleusercontent.com/2YsteQ-Qykby1nz5RmXaMhZGwp2eD7Fd1suQv0uVmQ5jJdaL_E-Iu1cqZu_QMTPb3OjRRA=s85' class='program-pic' alt='Undergraduate Program Picture'></img> <br></br>
              <p className='program-text'>
                <b>Master's Programs:</b> We may be able to offer you to continue your studies at 
                USC while the war lasts. Funding, visa support, accommodation, mentoring, and other resources are available. To learn more, please fill out 
                the <b><u><a href="INTERESTFORMLINK">interest form</a></u></b> here. You may review a list of all master's programs at USC <a target="_blank" href="https://gradadm.usc.edu/our-programs/">here</a>.<br/><br/>
              </p> 
            </div>
            <div class="doctoral-pathway">
              <img src='https://lh3.googleusercontent.com/gfgvli9RsbGjX3hGuZ8EJQgPJw3nFeWohte_GPcsF-H4_xq5X59Zwol2CYAMqJtQQQjx=s85' class='program-pic' alt='Undergraduate Program Picture'></img> <br></br>
              <p className='program-text'>  
                <b>Doctoral Programs:</b> We may be able to offer you to continue your studies and 
                research at USC. Lab space and placement in specific research teams may be available. Funding, visa support, accommodation, mentoring, and other 
                resources are available. To learn more, please fill out the <b><u><a href="INTERESTFORMLINK">interest form</a></u></b> here. You may review a list of all doctoral programs at USC <a target="_blank" href="https://gradadm.usc.edu/our-programs/">here</a>.<br/><br/>
              </p> 
            </div>
            <div class="postdoc-pathway">
              <img src='https://lh3.googleusercontent.com/hKdbgcVNUOMm4WcEWikQvOtHlkESjufsQUEyQIsc38UyT-bre5E6-t3Y5aGPjC0QfEeHaO4=s85' class='program-pic' alt='Undergraduate Program Picture'></img> <br></br>
              <p className='program-text'>
                <b>Postdoctoral and Visiting Faculty Opportunities:</b> We may be able to offer you to 
                continue your work or research at USC. Research and teaching opportunities may be available. Funding, visa support, accommodation, mentoring, and 
                other resources are available. To learn more, please fill out the <b><u><a href="INTERESTFORMLINK">interest form</a></u></b> here. Please fill the form out even if you apply directly via <a target="_blank" href="https://usccareers.usc.edu/">USC Careers</a>.
              </p>  
            </div>
          </p1>
        </div> 



        {/* ------------ CURRENT OPENINGS SECTION ------------ */}
        <div class="content container justify-content-center col-xs-6 mt-5 col-lg-7">
          <h1 class="section-headers d-flex pb-0 mb-0 container-fluid justify-content-center">
            <b>Current Openings Suitable for Ukrainian Scholars/Students at USC</b>
          </h1><br/>


        </div>

        {/* ------------ INTEREST FORM SECTION ------------ */}

          <InterestForm id="interest-form-link"></InterestForm>

        {/* ------------ NON-USC OPPORTUNITIES SECTION ------------ */}
        <div class="content container justify-content-center col-xs-6 mt-5 col-lg-7">
          <h1 class="section-headers d-flex pb-0 mb-0 container-fluid justify-content-center">
            <b>Non-USC Opportunities Suitable for Ukrainian Scholars/Students</b>
          </h1><br/>


        </div>


      </body>

      <footer class="footer container-fluid static-top">
      </footer>
    </div>
  );
}
export default App;
