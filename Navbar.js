import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// export class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     navStyle: {
  //       backgroundColor: '#071F38'
  //     }
  //   };
  // }
  // style={this.state.navStyle}

const Navbar = () => {

    return (
      <nav className="navbar sticky-top navbar-expand-xxl">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">NewsHuB</Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
