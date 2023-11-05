import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBtnGoHome from "../../components/UI/NavBtnGoHome";

const AddMovie = () => {
  const moviesList = localStorage.getItem("moviesList")
    ? JSON.parse(localStorage.getItem("moviesList"))
    : [];
  const [movie, setMovie] = useState({
    title: "",
    prodYear: "",
    description: "",
    img: "",
    id: "",
  });
  const username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";
  const navigate = useNavigate();

  const handleChange = (event) => {
    setMovie({
      ...movie,
      [event.target.name]: event.target.value,
      img: "/images/movie1-a.jpg",
      id: username,
    });
  };

  const submitNewMovie = (e) => {
    e.preventDefault();
    const tempMovies = [...moviesList];
    tempMovies.push(movie);
    localStorage.setItem("moviesList", JSON.stringify(tempMovies));
    navigate("/movies");
  };

  useEffect(() => {
    if (username === "") {
      navigate("/login");
    }
  }, [navigate, username]);

  useEffect(() => {}, [movie]);

  return (
    <Fragment>
      <main>
        {username !== "" && (
          <div className="username-div">
            <h3 className="username">{username}</h3>
          </div>
        )}
        <form className="movie-form" onSubmit={submitNewMovie}>
          <h2 className="add-movie-title">Add new movie</h2>
          <input
            type="text"
            className="add-movie-input"
            name="title"
            placeholder="Title"
            minLength="1"
            maxLength="75"
            required
            onChange={handleChange}
          ></input>
          <input
            type="text"
            className="add-movie-input"
            name="prodYear"
            placeholder="Production year"
            minLength="4"
            maxLength="4"
            required
            onChange={handleChange}
          ></input>
          <input
            type="text"
            className="add-movie-input"
            name="description"
            placeholder="Description"
            minLength="10"
            maxLength="200"
            required
            onChange={handleChange}
          ></input>
          <input
            type="submit"
            className="add-movie-btn"
            value="Add movie"
          ></input>
        </form>
        <NavBtnGoHome></NavBtnGoHome>
      </main>
    </Fragment>
  );
};

export default AddMovie;
