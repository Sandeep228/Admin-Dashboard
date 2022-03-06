import StatCards from "./SubComponents/StatCards";
import AreaChart from "./Charts/AreaChart";
import DonutChart from "./Charts/DonutChart";
import { areaChartData, donutChartData } from "./Data/chartsData";
import undraw_posting_photo from "./img/undraw_posting_photo.svg"

const Home = () => {
  const ProjectsCardData = [
    {
      title: "Server Migration",
      progress: "20",
      color: "bg-danger"
    },
    {
      title: "Sales Tracking",
      progress: "40",
      color: "bg-warning"
    },
    {
      title: "Customer Database",
      progress: "60",
      color: "",
    },
    {
      title: "Payout Details",
      progress: "80",
      color: "bg-info",
    },
    {
      title: "Account Setup",
      progress: "100",
      color: "bg-success",
    }
  ];
  const colors = [
    {
      name: "primary",
      rgb: "#4e73df",
      color: "text-white"
    },
    {
      name: "success",
      rgb: "#1cc88a",
      color: "text-white"
    },
    {
      name: "info",
      rgb: "#36b9cc",
      color: "text-white"
    },
    {
      name: "warning",
      rgb: "#f6c23e",
      color: "text-white"
    },
    {
      name: "danger",
      rgb: "#e74a3b",
      color: "text-white"
    },
    {
      name: "secondary",
      rgb: "#858796",
      color: "text-white"
    },
    {
      name: "light",
      rgb: "#f8f9fc",
      color: "text-black"
    },
    {
      name: "dark",
      rgb: "#5a5c69",
      color: "text-white"
    }
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</button>
        </div>

        <div className="row">
          <StatCards />
        </div>

        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <AreaChart title={"Earnings Overview"} areaChartData={areaChartData} showDropDown={true} />
          </div>
          <div className="col-xl-4 col-lg-5">
            <DonutChart title={"Donut Chart"} donutChartData={donutChartData} showDropDown={true} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            {/* <!-- Project Card Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
              </div>

              <div className="card-body">
                {
                  ProjectsCardData.map((element, index) => (
                    <div key={index}>
                      <h4 className="small font-weight-bold">{element.title}<span
                        className="float-right">{element.progress + "%"}</span></h4>
                      <div className="progress mb-4">
                        <div className={"progress-bar " + element.color} role="progressbar" style={{ width: element.progress + "%" }}
                          aria-valuenow={'"' + element.progress + '"'} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* <!-- Color System --> */}
            <div className="row">
              {
                colors.map((element, index) => (
                  <div className="col-lg-6 mb-4" key={index}>
                    <div className={"card shadow " + element.color + " bg-"+element.name}>
                      <div className="card-body">
                        <div className="text-capitalize">{element.name}</div>
                        <div className={"small " + element.color + "-50"}>{element.rgb}</div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            {/* <!-- Illustrations --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={undraw_posting_photo} alt="..." />
                </div>
                <p>Add some quality, svg illustrations to your project courtesy of <a
                  target="_blank" rel="noreferrer" href="https://undraw.co/">unDraw</a>, a
                  constantly updated collection of beautiful svg images that you can use
                  completely free and without attribution!</p>
                <a target="_blank" rel="noreferrer" href="https://undraw.co/">Browse Illustrations on
                  unDraw &rarr;</a>
              </div>
            </div>

            {/* <!-- Approach --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
              </div>
              <div className="card-body">
                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                  CSS bloat and poor page performance. Custom CSS classes are used to create
                  custom components and custom utility classes.</p>
                <p className="mb-0">Before working with this theme, you should become familiar with the
                  Bootstrap framework, especially the utility classes.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default Home;