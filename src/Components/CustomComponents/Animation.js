const Animation = () => {

  const data = [
    {
      type: "grow",
      title: "Grow In Animation Utilty",
      code: ".animated--grow-in",
      note: "Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar."
    },
    {
      type: "fade",
      title: "Fade In Animation Utilty",
      code: ".animated--fade-in",
      note: "Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!"
    }
  ];

  const nav = <nav class="navbar navbar-expand navbar-light bg-light mb-4">
    <a href="/#" class="navbar-brand">Navbar</a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a href="/#" class="nav-link dropdown-toggle" id="navbarDropdown"
          role="button" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu dropdown-menu-right animated--grow-in"
          aria-labelledby="navbarDropdown">
          <a href="/#" class="dropdown-item">Action</a>
          <a href="/#" class="dropdown-item">Another action</a>
          <div class="dropdown-divider"></div>
          <a href="/#" class="dropdown-item">Something else here</a>
        </div>
      </li>
    </ul>
  </nav>

  const dropdownButton = <div class="dropdown mb-4">
    <button class="btn btn-primary dropdown-toggle" type="button"
      id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false">
      Dropdown
    </button>
    <div class="dropdown-menu animated--fade-in"
      aria-labelledby="dropdownMenuButton">
      <a href="/#" class="dropdown-item" >Action</a>
      <a href="/#" class="dropdown-item" >Another action</a>
      <a href="/#" class="dropdown-item" >Something else here</a>
    </div>
  </div>

  return (
    <div class="container-fluid">
      <h1 class="h3 mb-1 text-gray-800">Animation Utilities</h1>
      <div class="row mt-4">
        {
          data.map(element => (
            <div class="col-lg-6">
              <div class="card position-relative">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">{ element.title }</h6>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <code>{ element.code }</code>
                  </div>
                  <div class="small mb-1">Navbar Dropdown Example:</div>
                  { nav }
                  { (element.type==="fade") ? (dropdownButton) : (<></>) }
                  <p class="mb-0 small">{element.note}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Animation;