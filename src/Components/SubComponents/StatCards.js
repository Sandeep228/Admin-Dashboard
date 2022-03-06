const StatCards = () => {
  const cardsData = [
    {
      borderColor: "border-left-primary",
      title: "Earnings (Monthly)",
      text: "$40,000",
      icon: "fa-calendar"
    },
    {
      borderColor: "border-left-success",
      title: "Earnings (Annual)",
      text: "$215,000",
      icon: "fa-dollar-sign"
    },
    {
      borderColor: "border-left-info",
      title: "Tasks",
      text: "50%",
      icon: "fa-clipboard-list",
      progress: "50"
    },
    {
      borderColor: "border-left-warning",
      title: "Pending Requests",
      text: "18",
      icon: "fa-comments"
    }
  ]

  return (
    <>
      <div className="row">
        {
          cardsData.map((data, index) => (
            <div className="col-xl-3 col-md-6 mb-4" key={index}>
              <div className={"card " + data.borderColor + " shadow h-100 py-2"}>
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">{data.title}</div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{data.text}</div>
                        </div>
                        {
                          (data.progress) ? (
                            <div className="col">
                              <div className="progress progress-sm mr-2">
                                <div className="progress-bar bg-info" role="progressbar"
                                  style={{ width: "50%", ariaValueNow: "50", ariaValueMin: "0", ariaValueMax: "100" }}></div>
                              </div>
                            </div>
                          ) : (<></>)
                        }
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className={"fas " + data.icon + " fa-2x text-gray-300"}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default StatCards;