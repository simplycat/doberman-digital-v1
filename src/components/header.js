import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/doberman-digital-horizontal-full-logo.svg"

const Header = ({ menuLinks }) => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="Doberman Digital Logo" width="100" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      aria-controls="navigations-08"
      aria-expanded="false"
      aria-label="Toggle navigation"
      data-toggle="collapse"
      data-target="#navigations-08"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navigations-08">
      <nav>
        <ul className="navbar-nav mr-auto" style={{ display: "flex", flex: 1 }}>
          {menuLinks.map(link => (
            <li className="nav-item" key={link.name}>
              <Link className="nav-link" to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </nav>
)

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
