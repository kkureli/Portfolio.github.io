import React from "react";
import style from "./Contact.module.css";
import { Wave } from "react-animated-text";
import Maps from "./Maps";
import Form from "./Form";

const Contact = React.memo(function Contact(props) {
  const ExampleOne = (text, delay) => (
    <Wave
      delay={delay}
      effectDuration={2}
      text={text}
      iterations={1}
      effect="verticalFadeIn"
      effectChange={2}
      effectDirection="up"
    />
  );

  return (
    <div className={style.home}>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("C", 1)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("o", 1.2)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("n", 1.3)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("t", 1.4)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("a", 1.5)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("c", 1.6)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("t ", 1.8)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("m", 1.9)}
            </span>
            <span className={[style.inline, "wobble-skew"].join(" ")}>
              {ExampleOne("e", 2)}
            </span>
            <div>
              <p>
                I am interested in freelance opportunities – especially
                ambitious or large projects. However, if you have other request
                or question, don’t hesitate to contact me using below form
                either.
              </p>
            </div>
            <div class="col p-0">
              <Form></Form>
            </div>
          </div>
          <div style={{ zIndex: "50" }} class="col-md-6 ">
            <p className={style.maps}>
              <Maps></Maps>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;