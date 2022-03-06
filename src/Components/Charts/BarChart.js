import { Bar } from 'react-chartjs-2';
import DropDown from '../SubComponents/Dropdown';

const BarChart = ({ title, barChartData, showDropDown }) => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
          {
            (showDropDown) ? (<DropDown />) : (<></>)
          }
        </div>
        <div className="card-body">
          <div className="chart-bar">
            <Bar
              data={barChartData.data}
              options={barChartData.options}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BarChart;
