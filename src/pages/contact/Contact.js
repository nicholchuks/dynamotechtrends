import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="img2">
        <div className="contact_title2">
          <h1>Contact Us</h1>
        </div>
      </div>

      <article>
        <div className="article2">
          <div className="article2_1">
            <h2>Tip&nbsp;</h2>
            <p>
              Have a news tip or inside information about a topic we covered?
              Drop us a note at info@dynamotechtrends.com Please don’t use this
              email address to submit information about your company.
            </p>
            <p>
              We respect anonymity; if you prefer to remain anonymous, you can
              use the form below instead.
            </p>
          </div>
          <div className="article2_2">
            <h2>Advertise&nbsp;</h2>
            <p>
              For advertising inquiries, please contact us directly at
              info@dynamotechtrends.com both large or unique campaigns and
              requests-for-proposal and additional pricing information.
            </p>
            <p>
              If you would also like to partner with DynamoTechTrends at our
              next event, contact us at info@dynamotechtrends.com.
            </p>
          </div>
        </div>

        <hr className="hr" />

        <div className="founder">
          <h2>How can we help you</h2>
          <p>
            If you would like your company listed on DynamoTechTrends, please
            use our form to contact us.
          </p>

          <hr className="hr" />
        </div>

        <form className="form">
          <div className="display2">
            <div className="display display2_1">
              <label htmlFor="name">Your Name(required)</label>
              <input id="name" name="name" className="name" type="text" />
            </div>

            <div className="display display2_2">
              <label htmlFor="email">Your Email(required)</label>
              <input id="email" name="email" className="email" type="email" />
            </div>
          </div>

          <div className="display">
            <label htmlFor="text">Message</label>
            <textarea
              name="text"
              id="text"
              className="text"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button className="btn2">Send Message</button>
        </form>
      </article>
    </div>
  );
};

export default Contact;
