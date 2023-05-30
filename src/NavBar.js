import { Link } from "react-scroll";
export default function NavBar() {
  return (
    <div className="NavBar">
      <h1>CarbonChem Solutions</h1>
      <Link activeClass="active" to="technologyID" spy={true} smooth={true}>
        <button className="button-54" role="button">
          Technology
        </button>
      </Link>
      <Link activeClass="active" to="teamID" spy={true} smooth={true}>
        <button className="button-54" role="button">
          Team
        </button>
      </Link>
      <Link activeClass="active" to="contactID" spy={true} smooth={true}>
        <button className="button-54" role="button">
          Contact
        </button>
      </Link>
    </div>
  );
}
