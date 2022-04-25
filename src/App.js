import logo from './usc-logo.png';
import logo_mobile from './usc-logo-mobile.png';
import undergrad from './undergrad.png';
import grad from './grad.png';
import phd from './doctoral.png';
import postdoc from './postdoc.png'
import './App.css';
import 'react-dropdown/style.css';
import InterestForm from './interestForm.js';
// import Testing from './formTest';

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">      
      <div class="logo-wrapper static-top pt-0 pb-0">
            <img src={logo_mobile} class="logo-mobile d-sm-none justify-content-right" alt="USC logo for mobile"/>
            <img src={logo} class="logo d-none d-sm-block justify-content-right" alt="USC logo"/>     
      </div>
      </header>
      <body class="container-fluid p-0 m-0">
        
        {/* ------------ HEADER SECTION ------------ */}
        <div class="heading-title pt-5 pb-3 bg-image d-flex align-items-center justify-content-center">
          <div class="container-fluid">
            <h3 class="d-flex pb-0 mb-0 container-fluid justify-content-center"><b>USC Ukraine Assistance Hub</b></h3>
            <p class="d-flex pt-0 mt-0 container-fluid justify-content-center"><br/>
              <p id="subhead">If you are a faculty member, postdoc, or student who has left or is 
              considering leaving Ukraine because of the war, USC may offer you a place to continue your research and studies. Funding, visa support, accommodation, 
              mentoring, and other resources are available.</p>
            </p>
          </div>
        </div>


        {/* ------------ INTRODUCTION SECTION CODE ------------ */}
        <div class="content container col-xs-6 mt-5 col-lg-7">

          <p>Please see <b>general pathways</b> as well as <b>specific opportunities</b> for students and scholars listed 
          below. Even if you do not see an existing opening, please submit your information through the Interest Form below. We will strive to connect you with specific 
          faculty and programs at USC.

          Over 350 USC-based faculty have expressed interest in supporting Ukrainian students and academics, and resources are continually being updated internally!<br/><br/>
        
          <b>For USC Faculty:</b> If you'd like to add your resources or collaboration interests, please use <a href="https://docs.google.com/forms/d/e/1FAIpQLScsXK-KFfQnGe8jyvtR-CmS8L5YMyZ7VFKplx59SuyymKmeJA/viewform" target='_blank' rel="noreferrer">this form</a>.<br/><br/>
        
          <i>This is a joint effort of USC faculty members with support and oversight by the Office of 
          Strategic and Global Initiatives at USC. For additional information, you can contact our working group directly via <a href="mailto:ukraineassistance@usc.edu">ukraineassistance@usc.edu</a>.</i>
          </p>
        </div>
        
          
        {/* ------------ GENERAL PATHWAYS SECTION ------------ */}
        <div class="content container justify-content-center col-xs-6 mt-5 col-lg-7">
          <h4 class="section-headers d-flex pb-0 mb-0 m-0 p-0 container-fluid ">
            General Pathways for Interested Scholars and Students
          </h4><br/>

          <table>
            <tr>
              <td class='table-program-pic'><p>
                <img src={undergrad} 
                alt='Undergraduate Program' class="img-fluid"></img></p>
              </td>
              <td>
                <p className='table-program-text'>
                  <b>Undergraduate Programs: </b>  
                  To learn more about undergraduate education at USC, please click <a target="_blank" rel="noreferrer" href="https://admission.usc.edu/">here</a>.<br/><br/>
                </p>
              </td>
            </tr>

            <tr>
              <td class='table-program-pic'>
                <p><img src={grad} 
                alt='Graduate Program' class="img-fluid"></img></p>
              </td>
              <td>
                <p className='table-program-text'>
                  <b>Master's Programs: </b> 
                  We may be able to offer support to continue your studies at USC. 
                  Funding, visa support, accommodation, mentoring, and other resources are available. To learn more, please fill out 
                  the <b><u><a href="#interest-form-link">interest form</a></u></b> here. A list of all master's programs at USC is available <a target="_blank" rel="noreferrer" href="https://gradadm.usc.edu/our-programs/">here</a>.<br/><br/>
                </p>
              </td>
            </tr>

            <tr>
              <td class='table-program-pic'>
                <p><img src={phd} 
                alt='PhD Program' class="img-fluid"></img></p>
              </td>
              <td>
                <p className='table-program-text'>
                  <b>PhD Programs: </b> 
                  PhD students at USC are supported by fellowships, teaching assistantships, research assistantships, or a combination of these funding sources.
                  We may be able to provide support that will enable you to continue your studies and research. Lab space and placement in specific research teams may be available. 
                  Funding, visa support, accommodation, mentoring, and other resources may also be available. To learn more, please fill out the <b><u><a href="#interest-form-link">interest form</a></u></b> here. 
                  To find out more about doctoral studies at USC, please visit the <a target="_blank" rel="noreferrer" href="https://graduateschool.usc.edu/">Graduate School</a>.
                  A list of all doctoral programs at USC is available <a target="_blank" rel="noreferrer" href="https://gradadm.usc.edu/our-programs/">here</a>.<br/><br/>
                </p>
              </td>
            </tr>

            <tr>
              <td class='table-program-pic'>
                <p><img src={postdoc} 
                alt='Postdoc and Visitng Faculty Programs' class="img-fluid"></img></p>
              </td>
              <td>
                <p className='table-program-text'>
                  <b>Postdoctoral and Visiting Faculty Opportunities: </b> 
                  We may be able to offer you to continue your work or research at USC. Research and teaching opportunities may be available. 
                  Funding, visa support, accommodation, mentoring, and other resources are available. To learn more, please fill out the  
                  <b> <u><a href="#interest-form-link">interest form</a></u></b> here. Please fill the form out even if you apply directly via <a target="_blank" rel="noreferrer" href="https://usccareers.usc.edu/">USC Careers</a>.
                </p>
              </td>
            </tr>
          </table>
          {/* ------------ INTEREST FORM SECTION ------------ */}
          <h4 class="form-header" id="interest-form-link">Interest Form</h4>
          <InterestForm></InterestForm>

          {/* <h4 class="form-header" id="interest-form-link">TEST TEST</h4>
          <Testing></Testing> */}

        </div>

        {/* ------------ CURRENT OPENINGS SECTION ------------ */}
        {/* <div class="content container justify-content-center col-xs-6 mt-5 col-lg-7">
          <h4 class="section-headers d-flex pb-0 mb-0 container-fluid justify-content-center">
            Current Openings Suitable for Ukrainian Scholars/Students at USC
          </h4><br/>

          <table>
            <tr>
              <tc>
                <h3>Opportunity 1</h3>
                <p>Type, School/Department</p>
                <a>URL</a>
              </tc>
              <br/><br/>
              <tc class="opening2">
                <h3>Opportunity 2</h3>
                <p>Type, School/Department</p>
                <a>URL</a>
              </tc>
            </tr>
          </table>

        </div> */}

      </body>

      <footer class="footer container-fluid static-top">
      </footer>
    </div>
  );
}
export default App;
