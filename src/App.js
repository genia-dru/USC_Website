import logo from './usc-logo.png';
import logo_mobile from './usc-logo-mobile.jpeg'
import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">      
      <nav class="navbar static-top pt-0 pb-0">
            <img src={logo_mobile} class="d-sm-none w-25 h-25"/>
            <img src={logo} class="d-none d-sm-block"/>     
      </nav>
      </header>
      <body class="container-fluid p-0 m-0">
        <div class="heading-title pt-5 pb-3 bg-image d-flex align-items-center">
          <div class="container-fluid">
            <h3 class="d-flex pb-0 mb-0 container-fluid justify-content-center">USC Support for Ukraine</h3>
            <p class="d-flex  pt-0 mt-0 container-fluid justify-content-center">USC faculty offer support for scholars and students displaced by the war in Ukraine</p>
          </div>
        </div>
        <div class="content container justify-content col-xs-6 mt-5 col-lg-7">
          <p1 class="text-justify">If you are a faculty member or a graduate student who left or is considering leaving Ukraine because of the war, USC 
          may offer you a temporary place to continue your work or studies. Funding and visa support are available. See below 
          for the available opportunities in each USC school. Please contact <a href="email@usc.edu">email@usc.edu</a> if you are interested or if you have
          any questions.
          </p1>
          <div class="resources pt-4 row">
            <div class="col-lg">
              <h6 class="pt-3">Resources:</h6>
            </div>
            <div class="col-lg">
              <Dropdown options={options} placeholder="Everything"/>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
