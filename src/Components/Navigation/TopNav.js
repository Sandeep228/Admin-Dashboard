import undraw_profile from "../img/undraw_profile.svg";
import undraw_profile_1 from "../img/undraw_profile_1.svg";
import undraw_profile_2 from "../img/undraw_profile_2.svg";
import undraw_profile_3 from "../img/undraw_profile_3.svg";

const TopNav = () => {

  const alertsData = [
    {
      date: "December 12, 2019",
      text: "A new monthly report is ready to download!",
      icon: "fa-file-alt",
      iconBackground: "bg-primary"
    },
    {
      date: "December 7, 2019",
      text: "$290.29 has been deposited into your account!",
      icon: "fa-donate",
      iconBackground: "bg-success"
    },
    {
      date: "December 2, 2019",
      text: "Spending Alert: We've noticed unusually high spending for your account.",
      icon: "fa-exclamation-triangle",
      iconBackground: "bg-warning"
    }
  ];

  const messagesData = [
    {
      img: undraw_profile_1,
      text: "Hi there! I am wondering if you can help me with a problem I've been having.",
      name: "Emily Fowler",
      statusIndicator: "bg-success",
      timePassed: "58m"
    },
    {
      img: undraw_profile_2,
      text: "I have the photos that you ordered last month, how would you like them sent to you?",
      name: "Jae Chun",
      statusIndicator: "",
      timePassed: "1d"
    },
    {
      img: undraw_profile_3,
      text: "Last month's report looks great, I am very happy with the progress so far, keep up the good work!",
      name: "Morgan Alvarez",
      statusIndicator: "bg-warning",
      timePassed: "2d"
    },
    {
      img: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
      text: "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...",
      name: "Chicken the Dog",
      statusIndicator: "bg-success",
      timePassed: "2w"
    }
  ]
  return (
    <>
      {/*  Topbar  */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/*  Sidebar Toggle (Topbar)  */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        {/*  Topbar Search  */}
        <form
          className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
              aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        {/*  Topbar Navbar  */}
        <ul className="navbar-nav ml-auto">

          {/*  Nav Item - Search Dropdown (Visible Only XS)  */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a href="/#" className="nav-link dropdown-toggle" id="searchDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw"></i>
            </a>
            {/*  Dropdown - Messages  */}
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small"
                    placeholder="Search for..." aria-label="Search"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/*  Nav Item - Alerts  */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a href="/#" className="nav-link dropdown-toggle" id="alertsDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-bell fa-fw"></i>
              {/*  Counter - Alerts  */}
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            {/*  Dropdown - Alerts  */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">
                Alerts Center
              </h6>
              {
                alertsData.map((alert, index) => (
                  <a href="/#" className="dropdown-item d-flex align-items-center" key={index}>
                    <div className="mr-3">
                      <div className={"icon-circle " + alert.iconBackground}>
                        <i className={"fas " + alert.icon + " text-white"}></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">{alert.date}</div>
                      {alert.text}
                    </div>
                  </a>
                ))
              }
              <a href="/#" className="dropdown-item text-center small text-gray-500">Show All Alerts</a>
            </div>
          </li>

          {/*  Nav Item - Messages  */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a href="/#" className="nav-link dropdown-toggle" id="messagesDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-envelope fa-fw"></i>
              {/*  Counter - Messages  */}
              <span className="badge badge-danger badge-counter">7</span>
            </a>
            {/*  Dropdown - Messages  */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown">
              <h6 className="dropdown-header">
                Message Center
              </h6>

              {
                messagesData.map((message, index) => (
                  <a href="/#" className="dropdown-item d-flex align-items-center" key={index}>
                    <div className="dropdown-list-image mr-3">
                      <img className="rounded-circle" src={message.img}
                        alt="..." />
                      <div className={"status-indicator " + message.statusIndicator}></div>
                    </div>
                    <div>
                      <div className="text-truncate">{message.text}</div>
                      <div className="small text-gray-500">{message.name + " · " + message.timePassed}</div>
                    </div>
                  </a>
                ))
              }
              <a href="/#" className="dropdown-item text-center small text-gray-500">Read More Messages</a>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/*  Nav Item - User Information  */}
          <li className="nav-item dropdown no-arrow">
            <a href="/#" className="nav-link dropdown-toggle" id="userDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
              <img className="img-profile rounded-circle" src={undraw_profile} alt="..."/>
            </a>
            {/*  Dropdown - User Information  */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown">
              <a href="/#" className="dropdown-item">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a href="/#" className="dropdown-item">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a href="/#" className="dropdown-item">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a href="/#" className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>

        </ul>

      </nav>
      {/*  End of Topbar  */}
    </>
  );
}

export default TopNav;