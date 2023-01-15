import "./Footer.scss"
import ellipseblur from "../img/ellipse.svg"

export default function Footer() {

  return (<>
  
  <div className="footer-wrapper">
        <div className="main-footer-circle">
            <img className="ellipseblur" src={ellipseblur} alt="ellipse" />
            <div className="logo"></div>
            <h1>Newsletter</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nostrum ullam! Quod aliquam dolorem iusto ad provident. Accusamus, quia. Debitis eum quis provident doloremque non dolore repellendus vel quam sunt.</p>
            <input type="text" placeholder="Enter your email" className="footer-input-email" />
            <p className="input-text"> Ex quis culpa veritatis laudantium corporis? Quos dolores unde, molestiae placeat exercitationem praesentium perferendis, odit saepe quibusdam illo doloribus eligendi error dicta!</p>

        </div>

        <div className="main-footer-footer">
            <div className="footer-wrapper">
        <div className="main-home-line">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="main-footer-links">
            <div className="links">
             
                <div><div className="box"></div><h2>COMPANY</h2></div>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Product</li>
                <li>Contact</li>
                </ul>
            </div>
            <div className="links">
             
             <div><div className="box"></div><h2>COMPANY</h2></div>
             <ul>
             <li>Home</li>
             <li>About</li>
             <li>Services</li>
             <li>Product</li>
             <li>Contact</li>
             </ul>
         </div>
         <div className="links">
             <div><div className="box"></div><h2>COMPANY</h2></div>
             <ul>
             <li>Home</li>
             <li>About</li>
             <li>Services</li>
             <li>Product</li>
             <li>Contact</li>
             </ul>
         </div>
         </div>
            <div className="sperator-line-footer"></div>
            <div className="footer-policy-section">
                <div className="one"> &#169; 2023 Allrights Reserved by CyBridge</div>
                <div className="two">
                    <ul>
                        <li>Terms of Services</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>

                </div>
            </div>
            <div className="sperator-line-footer"></div>
            </div>
            <div className="footer-end-text">
                
                <div className="text">
                Protect the Data</div></div>
        
        </div>
            
  </div>
  </>);
}