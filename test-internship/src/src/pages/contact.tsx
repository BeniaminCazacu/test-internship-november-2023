import React from "react";
import './contact.module.css';

const contact = () => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          id="surname"
          className="form-control"
          placeholder="Surname"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          id="phoneNumber"
          className="form-control"
          placeholder="Phone number"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Email"
        />
      </div>
      <button type="submit" className="btn btn-outline-primary" data-style="float: right;">Submit</button>
    </form>
  );
};

export default contact;
