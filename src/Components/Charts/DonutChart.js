import { Doughnut } from 'react-chartjs-2';
import DropDown from '../SubComponents/Dropdown';

const DonutChart = ({ title, donutChartData, showDropDown }) => {
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
          <div className="chart-pie pt-4">
            <Doughnut
              data={donutChartData.data}
              options={{ ...donutChartData.options }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DonutChart;