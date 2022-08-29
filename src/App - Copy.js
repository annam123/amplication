import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

   <div className="container-fluid text-center">
         <div className="row content">
         <h1 className="float-start clearfix col-md-12"> Curd Application </h1>
         <div className="clearfix">
         <input className="col-md-2 float-start" id="myInput" type="text" placeholder="Search.."/>
         </div>
         <table id="myTable">
            <tr>
               
               <th onclick="sortTable(0)">Name <i className="fa fa-fw fa-sort"></i></th>
               <th onclick="sortTable(1)">Country <i className="fa fa-fw fa-sort"></i></th>
               <th onclick="sortTable(2)">Phone <i className="fa fa-fw fa-sort"></i></th>
               <th onclick="sortTable(3)">Email <i className="fa fa-fw fa-sort"></i></th>
               <th onclick="sortTable(4)">Address <i className="fa fa-fw fa-sort"></i></th>
               <th onclick="sortTable(5)">Status <i className="fa fa-fw fa-sort"></i></th>
            </tr>
            <tr>
               <td>
                  <table className="table">
                     <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th><i className="fa fa-eye" aria-hidden="true"></i> View</th>
                        <th><i className="fa fa-edit" aria-hidden="true"></i> Edit</th>
                        <th><i className="fa fa-ellipsis-v" aria-hidden="true"></i></th>
                     </tr>
                  </table>
                  Berglunds snabbkop
               </td>
               <td>India</td>
               <td>9854526524</td>
               <td>admin123@gmail.com</td>
               <td>464, Main Street, Chennai.</td>
               <td><button type="button" className="btn btn-success">Active</button></td>
            </tr>
            <tr>
               <td>North/South</td>
               <td>India</td>
               <td>9854526524</td>
               <td>admin123@gmail.com</td>
               <td>464, Main Street, Chennai.</td>
               <td><button type="button" class="btn btn-danger">Inactive</button></td>
            </tr>
            <tr>
               <td>Alfreds Futterkiste</td>
               <td>Germany</td>
               <td>9854526524</td>
               <td>admin123@gmail.com</td>
               <td>464, Main Street, Chennai.</td>
               <td><button type="button" class="btn btn-success">ctive</button></td>
            </tr>
            <tr>
               <td>Koniglich Essen</td>
               <td>Germany</td>
               <td>9854526524</td>
               <td>admin123@gmail.com</td>
               <td>464, Main Street, Chennai.</td>
               <td><button type="button" class="btn btn-danger">Inactive</button></td>
            </tr>
            <tr>
               <td>Magazzini Alimentari Riuniti</td>
               <td>Italy</td>
               <td>9854526524</td>
               <td>admin123@gmail.com</td>
               <td>464, Main Street, Chennai.</td>
               <td><button type="button" class="btn btn-success">Active</button></td>
            </tr>
            <tr>
               <td>Paris specialites</td>
               <td>France</td>
               <td>9854526524</td>
               <td>admin123@gmail.com</td>
               <td>464, Main Street, Chennai.</td>
               <td><button type="button" class="btn btn-danger">Inactive</button></td>
            </tr>
            <tr>
               <td>Island Trading</td>
               <td>UK</td>
               <td>9854526524</td>
               <td>admin123@gmail.com</td>
               <td>464, Main Street, Chennai.</td>
               <td><button type="button" class="btn btn-success">Active</button></td>
            </tr>
            <tr>
               <td>Laughing Bacchus Winecellars</td>
               <td>Canada</td>
               <td>9854526524</td>
               <td>admin123@gmail.com</td>
               <td>464, Main Street, Chennai.</td>
               <td><button type="button" class="btn btn-danger">Inactive</button></td>
            </tr>
         </table>
      </div> 
      </div>   
    
  );
}

export default App;
