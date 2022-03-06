const Colors = () => {
  let grayScale = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  let colors = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"];
  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
        <div className="row">

          <div className="col-lg-4">
            {/* Custom Text Color Utilities */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
              </div>
              <div className="card-body">
                {
                  grayScale.map(intensity => (
                    <p key={intensity} className={"p-3 m-0 text-gray-" + intensity + ((intensity<=400) ? (" bg-dark") : (""))}>{ ".text-gray-"+intensity }</p>
                  ))
                }
              </div>
            </div>

            {/* Custom Font Size Utilities */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
              </div>
              <div className="card-body">
                <p className="text-xs">.text-xs</p>
                <p className="text-lg mb-0">.text-lg</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            {/* Background Gradient Utilities */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities
                </h6>
              </div>
              <div className="card-body">
                {
                  colors.map(color => (
                    <div key={color} className={"px-3 py-5 text-white bg-gradient-" + color}>{".bg-gradient-"+color}</div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            {/* Grayscale Utilities */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities
                </h6>
              </div>
              <div className="card-body">
                {
                  grayScale.map(intensity => (
                    <div key={intensity} className={"p-3 bg-gray-" + intensity + ((intensity>400) ? (" text-white") : (""))}>{"bg-gray-" + intensity}</div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Colors;