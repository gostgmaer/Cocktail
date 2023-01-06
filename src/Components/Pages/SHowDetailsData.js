import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context/Context";
import { Link, useParams } from "react-router-dom";
import InvokeAPI from "../../APICall.js/ApiCall";
import { param } from "jquery";
import Loading from "../../Notification/Loading";
import { Audio } from "react-loader-spinner";
const SHowDetailsData = () => {
  const { id } = useParams();
  console.log(id);

  const { detailsCocktail, setdetailsCocktail, loading, setloading } =
    useGlobalContext();

  useEffect(() => {
    APIDETAILSCALL();
    console.log(detailsCocktail);
  }, [id]);
  const APIDETAILSCALL = async () => {
    try {
      const res = await InvokeAPI(
        "lookup.php",
        "get",
        '',
        {},
        (param = { i: id }),
        ""
      );
      if (res.drinks) {
        setdetailsCocktail(res.drinks);
      } else {
        setdetailsCocktail([]);
      }
      setTimeout(() => {
        setloading(false);
      }, 100);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  if (loading) {
    return (
      <div className=" justify-content-center">
        {" "}
        <Audio
          height="300"
          width="100%"
          radius="1000"
          color="#212529"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
  if (detailsCocktail.length < 1) {
    return (
      <div className="m-5">
        <Link to="/" className="btn btn-outline-primary">
          Go Home
        </Link>{" "}
        <p>Invalid id has been provided</p>{" "}
      </div>
    );
  } else {
    return (
      <div className="col-7 m-auto">
        <div className="m-2">
          <Link to="/" className="btn btn-outline-primary">
            Go Home
          </Link>
        </div>

        {detailsCocktail.map((cocktail) => {
          const {
            dateModified,
            strAlcoholic,
            strCategory,
            strIngredient2,
            strIngredient1,
            strIngredient3,
            strIngredient4,
            idDrink,
            strCreativeCommonsConfirmed,
            strDrink,
            strDrinkThumb,
            strGlass,
            strInstructions,
          } = cocktail;
          return (
            <div className="card" key={idDrink}>
              <img
                src={strDrinkThumb}
                className="card-img-top singleIng img-thumbnail"
                alt={strAlcoholic}
              />
              <div className="card-body">
                <h5 className="card-title">{strDrink}</h5>
                <p className="card-text">{strInstructions}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{dateModified}</li>
                <li className="list-group-item">{strAlcoholic}</li>
                <li className="list-group-item">
                  {strIngredient1}- {cocktail.strMeasure1}, {strIngredient2}, {strIngredient3}{" "}
                  {strIngredient4}
                </li>
              </ul>
              <div className="card-body">
                <span className="card-link fw-bold">{strCategory}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default SHowDetailsData;
