import { Link } from "react-router-dom";
import "./Card.css";
import PropTypes from "prop-types";
export default function Card({ titre = "defaulttitle", img, link }) {
  return (
    <div className="card">
      <h1>{titre}</h1>
      <img src={img} alt="" />
      <Link to={link}>
        <button>click to go to a page</button>
      </Link>
    </div>
  );
}

Card.propTypes = {
  titre: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
};
