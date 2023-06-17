import Navbar from "../Navbar/Navbar";
import "../Contact/Contact.scss"
import Footer from "../Footer/Footer";
import blueblur from "../img/blueblur.svg"

const Contact = () => {

  return (<>
        <Navbar />
        <div className="contact-landing">
            <h1>Get in Touch</h1>
            <h3>Stay Connected</h3>
        </div>
        <div className="contact-form">
        <div className="main-home-container">
        <div className="main-home-line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
            <img src={blueblur} alt="blueblur" className="blueblur" />
     

        <div className="format">
                <div className="one">
                    <form>
                    <input type="text" name="" id=""  placeholder="Your Name" required/>
                    <input type="email" name="" id=""  placeholder="Your Email"  required/>
                    <input type="number" name="" id=""  placeholder="Your Number"  required/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Share your thoughts?"></textarea>
                    <input type="submit" value="Submit" className="Submit" />
                    </form>

                </div>
                <div className="two">
                    Contact <br />
                  <span><div></div>Us</span>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi tempora nam quam maxime eaque tempore. Iste odio eligendi, quis nihil deserunt ab voluptates accusantium aperiam quia ratione harum natus.</p>
                </div>
        </div>
        <div className="contact-content">
                <div className="con1"></div>
                <div className="con2"></div>
                <div className="con3"></div>
        </div>
        </div>
        <Footer />
  </>
  );
};

export default Contact;
