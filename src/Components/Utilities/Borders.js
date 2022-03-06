const Borders = () => {
  let colors = ["primary", "secondary", "success", "info", "warning", "danger", "dark"];

  return (
    <div className="container-fluid">

      {/* Page Heading */}
      <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>

      <div className="row">

        {/* Border Left Utilities */}
        <div className="col-lg-6">
          {
            colors.map(color => (
              <div className={"card mb-4 py-3 border-left-" + color}>
                <div className="card-body">
                  {".border-left-" + color}
                </div>
              </div>
            ))
          }
        </div>

        {/* Border Bottom Utilities */}
        <div className="col-lg-6">
          {
            colors.map(color => (
              <div className={"card mb-4 py-3 border-bottom-" + color}>
                <div className="card-body">
                  {".border-left-" + color}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Borders;