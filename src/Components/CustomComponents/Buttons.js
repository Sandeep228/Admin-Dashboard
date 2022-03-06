const Buttons = () => {

  const circleButtons = [
    {
      class: "btn-primary",
      icon: "fab fa-facebook-f"
    },
    {
      class: "btn-success",
      icon: "fas fa-check"
    },
    {
      class: "btn-info",
      icon: "fas fa-info-circle"
    },
    {
      class: "btn-warning",
      icon: "fas fa-exclamation-triangle"
    },
    {
      class: "btn-danger",
      icon: "fas fa-trash"
    }
  ];

  const circleButtonTitles = [
    {
      name: ".btn-circle",
      classes: "btn-circle"
    },
    {
      name: ".btn-circle .btn-sm",
      classes: "btn-circle btn-sm"
    },
    {
      name: ".btn-circle .btn-lg",
      classes: "btn-circle btn-lg"
    }
  ];

  const splitButtons = [
    {
      class: "btn-primary",
      icon: "fas fa-flag",
      name: "Split Button Primary"
    },
    {
      class: "btn-success",
      icon: "fas fa-check",
      name: "Split Button Success"
    },
    {
      class: "btn-info",
      icon: "fas fa-info-circle",
      name: "Split Button Info"
    },
    {
      class: "btn-warning",
      icon: "fas fa-exclamation-triangle",
      name: "Split Button Warning"
    },
    {
      class: "btn-danger",
      icon: "fas fa-trash",
      name: "Split Button Danger"
    },
    {
      class: "btn-secondary",
      icon: "fas fa-arrow-right",
      name: "Split Button Secondary"
    },
    {
      class: "btn-light",
      icon: "fas fa-arrow-right",
      name: "Split Button Light"
    },
  ]

  return (
    <div className="container-fluid">

      {/*  Page Heading  */}
      <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

      <div className="row">

        <div className="col-lg-6">

          {/*  Circle Buttons  */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
            </div>
            <div className="card-body">
              <p>Use Font Awesome Icons (included with this theme package) along with the circle
                buttons as shown in the examples below!</p>
              {
                circleButtonTitles.map((title, index) => (
                  <div key={index}>
                    <div className="mt-4 mb-2">
                      <code>{title.name}</code>
                    </div>
                    {
                      circleButtons.map((button, index) => (
                        <button className={"btn " + button.class + " " + title.classes} key={index}><i className={button.icon}></i></button>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>

          {/*  Brand Buttons  */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
            </div>
            <div className="card-body">
              <p>Google and Facebook buttons are available featuring each company's respective
                brand color. They are used on the user login and registration pages.</p>
              <p>You can create more custom buttons by adding a new color variable in the
                <code>_variables.scss</code> file and then using the Bootstrap button variant
                mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                file.</p>
              <button className="btn btn-google btn-block"><i className="fab fa-google fa-fw"></i>
                .btn-google</button>
              <button className="btn btn-facebook btn-block"><i
                className="fab fa-facebook-f fa-fw"></i> .btn-facebook</button>
            </div>
          </div>

        </div>

        <div className="col-lg-6">

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
            </div>
            <div className="card-body">
              <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                the markup in the examples below. The examples below also use the
                <code>.text-white-50</code> helper class on the icons for additional styling,
                but it is not required.</p>
                {
                  splitButtons.map((button, index) => (
                    <div className="my-2" key={index}>
                    <button className={"btn btn-icon-split " + button.class}>
                      <span className="icon text-white-50">
                        <i className={button.icon}></i>
                      </span>
                      <span className="text">{ button.name }</span>
                    </button>
                    </div>
                  ))
                }
              <div className="mb-4"></div>
              <p>Also works with small and large button classes!</p>
              <button className="btn btn-primary btn-icon-split btn-sm">
                <span className="icon text-white-50">
                  <i className="fas fa-flag"></i>
                </span>
                <span className="text">Split Button Small</span>
              </button>
              <div className="my-2"></div>
              <button className="btn btn-primary btn-icon-split btn-lg">
                <span className="icon text-white-50">
                  <i className="fas fa-flag"></i>
                </span>
                <span className="text">Split Button Large</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Buttons;