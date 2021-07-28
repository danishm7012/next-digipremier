import React from "react";
import Mailchimp from "react-mailchimp-form";

const Newsletter = () => {
  return (
    <div>
      <Mailchimp
        action="https://paradisegoc.us6.list-manage.com/subscribe/post?u=9feec17d423b94474dd440445&amp;id=291df29077"
        //Adding multiple fields:
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
        ]}
        // Change predetermined language
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Already This Email Exist",
          button: "Subscribe!",
        }}
        // Add a personalized class
        className="mailChimp-subscribe"
      />
    </div>
  );
};

export default Newsletter;
