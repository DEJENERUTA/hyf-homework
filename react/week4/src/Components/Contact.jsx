import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-primary display-4 mt-5 text-center mb-3">Let's Talk</h2>
          <div className="heading-underline mx-auto"></div>
          <div className="d-none alert alert-danger mt-5" role="alert">
            Please fill out the form correctly. <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form name="contact" className="mt-5" method="POST" data-netlify="true" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input name="name" type="text" className="form-control form-control-lg" id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} autoComplete="off" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input type="email" className="form-control form-control-lg" id="email" aria-describedby="emailHelp"
                name="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange} autoComplete="off" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea className="form-control form-control-lg" placeholder="Your Message" name="message" id="message"
                rows="3" value={this.state.message} onChange={this.handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-primary text-white send-message">Send Message</button>
          </form>
        </div>
      </section>
    )
  }
}

