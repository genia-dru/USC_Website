import logo from './usc-logo.png';
import logo_mobile from './usc-logo-mobile.png';
import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DataTable from './dataTable.js';


const options = [
  'one', 'two', 'three'
];

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

        <div class="heading-title pt-5 pb-3 bg-image d-flex align-items-center">
          <div class="container-fluid">
            <h3 class="d-flex pb-0 mb-0 container-fluid justify-content-center">USC Support for Ukraine</h3>
            <p class="d-flex  pt-0 mt-0 container-fluid justify-content-center">USC faculty offer support for scholars and students displaced by the war in Ukraine</p>
          </div>
        </div>

        <div class="content container justify-content-center col-xs-6 mt-5 col-lg-7">
          <p1 class="text-align-center">If you are a faculty member or a graduate student who left or is considering leaving Ukraine because of the war, USC 
          may offer you a temporary place to continue your work or studies. Funding and visa support are available. See below 
          for the available opportunities in each USC school. Please contact <a href="email@usc.edu">email@usc.edu</a> if you are interested or if you have
          any questions.</p1>
          
          <div class="department pt-4 row">
            <div class="col-lg">
              <h6 class="pt-3">School/Department:</h6>
            </div>
            <div class="dropdown col-lg">
              <Dropdown options={options} placeholder="Any"/>
            </div>
          </div>

          <div class="mt-3">
            <DataTable></DataTable>
          </div>



        </div>

      </body>


      <footer class="footer container-fluid static-top">

      </footer>

    </div>
  );
}

export default App;
