import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="crypto">
        <h1 className="header-title">WELCOME TO SANG FARMCARE ONLINE SHOP</h1>
        <nav className="nav">
          <Link to="/Products"><button type="button">PRODUCTS</button></Link>
          <Link to="/FAQs"><button type="button">FAQs</button></Link>
          <Link to="/About"><button type="button">ABOUT</button></Link>
          <Link to="/Consultant"><button type="button">TALK TO A CONSULTANT</button></Link>
          <Link to="/Contact"><button type="button">CONTACT</button></Link>
        </nav>
      </header>

      <div className="main-content">
        <div className="login-container">
          <section className="login-section">
            <h1>Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        </div>

        <section className="products">
          <h2>OUR PRODUCTS</h2>
          <div className="samples">
            <div className="product-item">
              <img src="public/images/pexels-tamara-elnova-218645958-12020221.jpg" alt="A blue watering can" className="product-image" />
              <p>Watering cans</p>
              <p>AVAILABLE FROM 5 LITRES- 15 LITRES</p>
              <button><a href="https://www.thrive.org.uk/get-gardening/watering-plants-outdoors">LEARN MORE</a></button>
            </div>
            <div className="product-item">
              <img src="public/images/pexels-greta-hoffman-7728012.jpg" alt="Seedling trays" className="product-image" />
              <p>GET PVC SEEDLING TRAYS AT DISCOUNTED PRICES</p>
              <p>SIZES FROM 150-850 SEEDLING CAPACITY TRAYS</p>
              <button><a href="https://grekkon-eldoret.co.ke/product/seedling-trays">LEARN MORE</a></button>
            </div>
            <div className="product-item">
              <img src="public/images/pexels-shvetsa-5231223.jpg" alt="Plants in a greenhouse" className="product-image" />
              <p>GET ACCESS TO HIGH YIELD SEEDLING VARIETIES OF VARIOUS PLANTS</p>
              <p>SEEDLINGS AVAILABLE 45 DAYS AFTER ORDER DATE</p>
              <button><a href="https://grekkon-eldoret.co.ke/product/affordable-greenhouses">LEARN MORE</a></button>
            </div>
            <div className="product-details">
              <article>
                Herbs are plants with savory or aromatic properties that are used for flavoring and garnishing food, for medicinal purposes, or for fragrances; excluding vegetables and other plants consumed for macronutrients. Culinary use typically distinguishes herbs from spices.

                A lot of people normally confuse herbs and spices, well, the essential difference between lies with what part of the plant they originate from. An herb is a leaf or other green part of the plant. Any other element of the plant would be considered a spice including dried bark, the roots, a berry, seeds, twigs, or other plant matter that is used to season or flavor a dish.
              </article>
              <article>
                Oregano is also part of the mint family. Oregano is a perennial plant but in colder climates can be grown as annually. Oregano is used for flavoring and is a staple herb of Italian American cuisine. Though typically used in small amounts, oregano packs in some important nutrients. Just one teaspoon of dried oregano can fulfill about 8% of your daily vitamin K needs.
              </article>
            </div>
            <div className="categories">
              <h2>CATEGORIES</h2>
              <ul>
                <li>Greenhouse PVC sheets</li>
                <li>Fertilisers (DAP, CAN, NPK)</li>
                <li>Greenhouse poles (Metallic and Timber)</li>
                <li>Irrigation Equipment</li>
                <li>Seedlings and Seedling trays</li>
                <li>Farm Equipment and Machinery</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-info">
            <p>
              Oregano is also part of the mint family. Oregano is a perennial plant but in colder climates can be grown as annually. Oregano is used for flavoring and is a staple herb of Italian American cuisine. Though typically used in small amounts, oregano packs in some important nutrients. Just one teaspoon of dried oregano can fulfill about 8% of your daily vitamin K needs.
            </p>
          </div>
          <div className="contact-info">
            <h2>Contacts</h2>
            <p>
              <a href="mailto:raysang98@gmail.com">Email</a><br />
              <a href="tel:+254737577012">Call us</a><br />
              <address>
                20200-2034<br />
                Nairobi,<br />
                Kenya
              </address>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
