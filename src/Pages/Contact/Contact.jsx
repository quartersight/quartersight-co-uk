import React, { Component } from "react";
import emailjs from "emailjs-com";
import { FaTimes } from "react-icons/fa";

class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      displayMessage: "",
      emailFrom: "",
      emailName: "",
      emailMessage: "",
      errorMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    this.setState({
      [field]: value,
      errorMessage: "",
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      emailFrom: this.state.emailFrom,
      emailName: this.state.emailName,
      emailMessage: this.state.emailMessage,
    };
    if (
      this.state.emailFrom === "" ||
      this.state.emailName === "" ||
      this.state.emailMessage === ""
    ) {
      this.setState({
        errorMessage: "Oops, it looks like you missed something!",
      });
    } else {
      console.log(formData);
      var service_id = "default_service";
      var template_id = "main_template";
      document.querySelector("#submitButton").value = "Sending...";
      emailjs
        .sendForm(
          service_id,
          template_id,
          e.target,
          "user_p5iSipiGV9eBSXFzqUhPK"
        )
        .then(
          (result) => {
            this.setState({
              displayMessage:
                "Thanks, your email has been sent! I'll be in touch as soon as possible!",
              emailFrom: "",
              emailName: "",
              emailMessage: "",
            });
            document.querySelector("#submitButton").value = "Submit Now";
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  closeMessage() {
    this.setState({
      displayMessage: "",
    });
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
                  {this.state.displayMessage ? (
                    <h6 className="text-center">
                      {this.state.displayMessage}{" "}
                      <FaTimes onClick={this.closeMessage} />
                    </h6>
                  ) : null}
                  <div className="modern-form__form-container">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-row">
                        <div className="col col-contact">
                          <div className="form-group modern-form__form-group--padding-r">
                            <input
                              className="form-control input input-tr"
                              type="text"
                              placeholder="Name"
                              autoFocus
                              onChange={this.handleChange}
                              name="emailName"
                              value={this.state.emailName}
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
                              onChange={this.handleChange}
                              name="emailFrom"
                              value={this.state.emailFrom}
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
                              onChange={this.handleChange}
                              name="emailMessage"
                              value={this.state.emailMessage}
                            ></textarea>
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col text-center">
                          {this.state.errorMessage ? (
                            <p>{this.state.errorMessage}</p>
                          ) : null}
                          <input
                            className="btn btn-primary submit-now"
                            type="submit"
                            value="Submit Now"
                            id="submitButton"
                          />
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
