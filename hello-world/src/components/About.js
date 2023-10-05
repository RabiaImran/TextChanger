import React from "react";

export default function About() {
  return (
    <div className="container">
        <h1 className="my-3"> About Us </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Texter
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Hello, this is texter.</strong> Given an input textarea and the task is to transform the lowercase characters into uppercase characters while taking input from user.
               It can be done using React, <code> that might help you with your query.</code>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
