import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NotificationForm = () => {
  return (
    <div className="container border mt-4 p-4">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6">
          {/* Phone Number and Selection Options */}
          <div className="mb-3">
            <label className="form-label">Choose an Option:</label>
            <div className="d-flex align-items-center">
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="selectionOption"
                  id="Phonenumber"
                  value="name"
                />
                <label className="form-check-label" htmlFor="Phonenumber">
                  Phone Number
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="selectionOption"
                  id="selectAll"
                  value="all"
                />
                <label className="form-check-label" htmlFor="selectAll">
                  All
                </label>
              </div>
            </div>
          </div>

          {/* Phone Number Input */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              disabled
              id="phoneNumber"
            />
          </div>

          {/* Dropdown for Page Navigation */}
          <div className="mb-3">
            <label htmlFor="navigationDropdown" className="form-label">
              Navigate to page after clicking on notification badge
            </label>
            <select className="form-select" id="navigationDropdown">
              <option value="cart">Cart</option>
              <option value="wallet">Wallet</option>
              <option value="notification">Notification</option>
            </select>
          </div>

          {/* Send Button */}
          <button className="btn btn-primary w-100 mt-4">Send</button>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          {/* Title of Notification */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title of notification"
            />
          </div>

          {/* Details of Notification */}
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Details of notification in text"
            ></textarea>
          </div>

          {/* Picture Upload */}
          <div>
            <label htmlFor="notificationPicture" className="form-label">
              Picture to show in notification
            </label>
            <input
              type="file"
              className="form-control"
              id="notificationPicture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationForm;
