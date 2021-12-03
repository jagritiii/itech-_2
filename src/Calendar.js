import React from "react";
import time from "./componets/img/time.png";
import "./Calender.css";
import { Container } from "react-bootstrap";
import Navigation from "./componets/Navigation";

function Calendar() {
  return (
    <>
      <Navigation />
      <div className="event-container">
        <h3 className="year">2021</h3>
        {/* event */}
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">1</div>
              <div className="month">December</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Title</h3>
            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>
            <div className="event-timing">
              <img src={time} alt="time" /> 10:00 AM
            </div>
          </div>
        </div>
        {/* event */}
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">1</div>
              <div className="month">December</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Title</h3>
            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>
            <div className="event-timing">
              <img src={time} alt="time" /> 10:00 AM
            </div>
          </div>
        </div>
        {/* event */}
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">1</div>
              <div className="month">December</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Title</h3>
            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>
            <div className="event-timing">
              <img src={time} alt="time" /> 10:00 AM
            </div>
          </div>
        </div>
        <h3 class="year">2022</h3>
        {/* event */}
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">1</div>
              <div className="month">December</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Title</h3>
            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>
            <div className="event-timing">
              <img src={time} alt="time" /> 10:00 AM
            </div>
          </div>
        </div>
        {/* event */}
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">1</div>
              <div className="month">December</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Title</h3>
            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>
            <div className="event-timing">
              <img src={time} alt="time" /> 10:00 AM
            </div>
          </div>
        </div>
        {/* event */}
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">1</div>
              <div className="month">December</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Title</h3>
            <div className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>
            <div className="event-timing">
              <img src={time} alt="time" /> 10:00 AM
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calendar;