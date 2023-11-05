import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const NavButtonReadMore = (props) => {

  const navigate = useNavigate();
  const url = `/movies/${props.movie.title}`;

  const readMore = () => {
    navigate(url, {
      state: {
        movie: props.movie,
      },
    });
  };

  return (
    <Fragment>
      <div className="read-more-btn-div">
        <button
          className="read-more-btn"
          type="button"
          onClick={() => readMore()}
        >
          Read more
        </button>
      </div>
    </Fragment>
  );
};

export default NavButtonReadMore;
