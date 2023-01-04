import React, { Component } from 'react'
import { images } from '../assets/img/images';
export default class Team extends Component {
  render() {
    return (
      <div className="container-fluid py-5" id="team">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: 3 }}
            >
              Team
            </h6>
            <h1 className="font-secondary display-4">Meet The Team</h1>
          </div>
          <div className="row justify-content-lg-start m-0 mb-4 pb-2 mb-sm-0 pb-sm-0">
            <div className="col-lg-6 p-0">
              <div className="row m-0">
                <div className="col-sm-6 p-0 text-center">
                  <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                    <h5 className="mb-2">Donald John</h5>
                    <p className="text-muted font-italic mb-2">
                      CEO &amp; Founder
                    </p>
                    <p>
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem
                    </p>
                    <div className="position-relative mb-2">
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 p-0" style={{ minHeight: 300 }}>
                  <img
                    className="position-absolute w-100 h-100"
                    src={images.team1}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-lg-end m-0 mb-4 pb-2 mb-sm-0 pb-sm-0">
            <div className="col-lg-6 p-0">
              <div className="row m-0">
                <div className="col-sm-6 p-0" style={{ minHeight: 300 }}>
                  <img
                    className="position-absolute w-100 h-100"
                    src={images.team2}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-sm-6 p-0 text-center">
                  <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                    <h5 className="mb-2">Adam Phillips</h5>
                    <p className="text-muted font-italic mb-2">Engineer</p>
                    <p>
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem
                    </p>
                    <div className="position-relative mb-2">
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-lg-start m-0 mb-4 pb-2 mb-sm-0 pb-sm-0">
            <div className="col-lg-6 p-0">
              <div className="row m-0">
                <div className="col-sm-6 p-0 text-center">
                  <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                    <h5 className="mb-2">Thomas Olsen</h5>
                    <p className="text-muted font-italic mb-2">Engineer</p>
                    <p>
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem
                    </p>
                    <div className="position-relative mb-2">
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 p-0" style={{ minHeight: 300 }}>
                  <img
                    className="position-absolute w-100 h-100"
                    src={images.team3}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-lg-end m-0">
            <div className="col-lg-6 p-0">
              <div className="row m-0">
                <div className="col-sm-6 p-0" style={{ minHeight: 300 }}>
                  <img
                    className="position-absolute w-100 h-100"
                    src={images.team4}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-sm-6 p-0 text-center">
                  <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                    <h5 className="mb-2">James Alien</h5>
                    <p className="text-muted font-italic mb-2">Engineer</p>
                    <p>
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem
                    </p>
                    <div className="position-relative mb-2">
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-outline-primary btn-square mr-1"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
