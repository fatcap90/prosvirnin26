import React from "react";

import "./styles.css";
import image from "assets/img/jpg/process.jpeg"

const MainPage = props => {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card">
            <img
              src={image}
              className="card-img-top"
              alt="element image"
            />

            <div className="card-body">
              <h5 className="card-title">Kawasaki Ninja</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/details" className="btn btn-primary">
                Подробнее
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card">
            <img
              src={image}
              className="card-img-top"
              alt="element image"
            />

            <div className="card-body">
              <h5 className="card-title">Kawasaki Ninja</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/details" className="btn btn-primary">
                Подробнее
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card">
            <img
              src={image}
              className="card-img-top"
              alt="element image"
            />

            <div className="card-body">
              <h5 className="card-title">Kawasaki Ninja</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/details" className="btn btn-primary">
                Подробнее
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card">
            <img
              src={image}
              className="card-img-top"
              alt="element image"
            />

            <div className="card-body">
              <h5 className="card-title">Kawasaki Ninja</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/details" className="btn btn-primary">
                Подробнее
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card">
            <img
              src={image}
              className="card-img-top"
              alt="element image"
            />

            <div className="card-body">
              <h5 className="card-title">Kawasaki Ninja</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/details" className="btn btn-primary">
                Подробнее
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 mt-4 mb-4 text-center">
          <button className="btn btn-outline-dark">Показать еще</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
