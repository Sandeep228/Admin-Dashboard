import tablesData from "./Data/tablesData.json";
import $ from "jquery";
import { useEffect } from "react";
import "datatables.net";

const Tables = () => {

  useEffect(() => {
    $('#dataTable').DataTable();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>

        {/* DataTables Example */}
        <div className="card shadow my-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    tablesData.map((row, index) => (
                      <tr key={index}>
                        {
                          Object.keys(row).map((key, index) => (
                            <td key={index}>{ row[key] }</td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Tables;