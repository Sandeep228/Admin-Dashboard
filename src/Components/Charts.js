import AreaChart from "./Charts/AreaChart";
import BarChart from "./Charts/BarChart";
import DonutChart from "./Charts/DonutChart";
import { areaChartData, barChartData, donutChartData } from "./Data/chartsData";

const Charts = () => {
  return (
    <>
      <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Charts</h1>
        <div className="row mt-4">

          <div className="col-xl-8 col-lg-7">
            <AreaChart title={"Area Chart"} areaChartData={areaChartData} />
            <BarChart title={"Bar Chart"} barChartData={barChartData} />
          </div>

          <div className="col-xl-4 col-lg-5">
            <DonutChart title={"Donut Chart"} donutChartData={donutChartData} />
          </div>
        </div>

      </div>
    </>
  );
}

export default Charts;