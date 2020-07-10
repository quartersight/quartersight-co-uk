import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container main-content">
          <div className="row">
            <div className="col">
              <section className="getintouch">
                <div className="container modern-form">
                  <div className="text-center">
                    <h4>Get in touch</h4>
                  </div>
                  <hr className="modern-form__hr" />
                  <div className="modern-form__form-container">
                    <form>
                      <div className="form-row">
                        <div className="col col-contact">
                          <div className="form-group modern-form__form-group--padding-r">
                            <input
                              className="form-control input input-tr"
                              type="text"
                              placeholder="Name"
                              autoFocus
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col col-contact">
                          <div className="form-group modern-form__form-group--padding-l">
                            <input
                              className="form-control input input-tr"
                              type="text"
                              placeholder="Email"
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <div className="form-group modern-form__form-group--padding-t">
                            <textarea
                              className="form-control input modern-form__form-control--textarea"
                              placeholder="Message"
                            ></textarea>
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col text-center">
                          <button
                            className="btn btn-primary submit-now"
                            type="submit"
                          >
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
