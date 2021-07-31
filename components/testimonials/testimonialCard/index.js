import React from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
const TestimonialCard = ({ img, Name, details, desig, company }) => {
  return (
    <div>
      <div className="testimonial-card">
        <div className="img text-center">
          <Image src={img} className="rounded-circle" width={70} height={70} />
          <div className="text p-3">
            <p>{details}</p>
            <br />

            <div className="testimonail-name text-center">
              <h3>{Name}</h3>
              <p>
                {desig} | <span className="ml-2">{company}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="qutoes">
          <FaQuoteRight className="icons" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
