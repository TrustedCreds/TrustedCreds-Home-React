import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import IconGroup from '../components/icon-group'
import './business-signup.css'

const BusinessSignup = (props) => {
  return (
    <div className="business-signup-container">
      <Helmet>
        <title>TrustedCreds</title>
        <meta property="og:title" content="TrustedCreds" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="business-signup-navbar-interactive"
      >
        <Link to="/" className="business-signup-navlink">
          TrustedCreds
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="business-signup-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="business-signup-nav"
          >
            <span className="business-signup-text">For Individuals</span>
            <span className="business-signup-text01">For Business</span>
            <span className="business-signup-text02">Features</span>
            <span className="business-signup-text03">Contact Us</span>
          </nav>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="business-signup-btn-group"
        >
          <Link to="/login" className="business-signup-login button">
            Login
          </Link>
          <div
            data-thq="thq-dropdown"
            className="business-signup-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="business-signup-dropdown-toggle"
            >
              <span className="business-signup-text04">Signup</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="business-signup-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="business-signup-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="business-signup-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="business-signup-personal list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="business-signup-dropdown-toggle1"
                >
                  <Link
                    to="/personal-signup"
                    className="business-signup-personal1"
                  >
                    Personal
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="business-signup-business list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="business-signup-dropdown-toggle2"
                >
                  <Link
                    to="/business-signup"
                    className="business-signup-business1"
                  >
                    Business
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="business-signup-burger-menu">
          <svg viewBox="0 0 1024 1024" className="business-signup-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="business-signup-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="business-signup-nav1"
          >
            <div className="business-signup-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="business-signup-image"
              />
              <div
                data-thq="thq-close-menu"
                className="business-signup-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="business-signup-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="business-signup-nav2"
            >
              <span className="business-signup-text05">About</span>
              <span className="business-signup-text06">Features</span>
              <span className="business-signup-text07">Pricing</span>
              <span className="business-signup-text08">Team</span>
              <span className="business-signup-text09">Blog</span>
            </nav>
            <div className="business-signup-container2">
              <button className="business-signup-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="business-signup-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="business-signup-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="business-signup-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="business-signup-icon10"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="business-signup-hero">
        <h1 className="business-signup-text10">
          Claim your Decentralised Id and Wallet
        </h1>
        <p className="business-signup-text11">Trusted | Verifiable | Private</p>
      </section>
      <section className="business-signup-quote-container">
        <div className="business-signup-quote">
          <span className="business-signup-message">
            “ Efficiency is doing things right; effectiveness is doing the right
            things. ”
          </span>
          <span className="business-signup-quote1">— Peter Druker</span>
        </div>
      </section>
      <section className="business-signup-signup-form">
        <span className="business-signup-text12">Welcome to TrustedCreds!</span>
        <span className="business-signup-text13">
          <span className="business-signup-text14">
            -  Be a Verified Issuer of Credentials .
          </span>
          <br className="business-signup-text15"></br>
          <span>- Issue and Verify Trusted Credentials.</span>
          <br></br>
          <span>-  Define Custom Workflows.</span>
          <br></br>
        </span>
        <div className="business-signup-centered-container">
          <form name="personal-signup-form" className="business-signup-form">
            <span className="business-signup-text20">Business Signup</span>
            <span className="business-signup-text21">
              <span className="business-signup-text22">
                Fields marked with &quot;
              </span>
              <span className="business-signup-text23">*</span>
              <span className="business-signup-text24">&quot;</span>
              <span className="business-signup-text25"> are mandatory.</span>
            </span>
            <div className="business-signup-container3">
              <div className="business-signup-container4">
                <label className="business-signup-text26">
                  <span className="business-signup-text27">
                    Name  of Business
                  </span>
                  <span className="business-signup-text28">*</span>
                  <span className="business-signup-text29">:</span>
                </label>
                <label className="business-signup-text30">
                  <span>Identification No. </span>
                  <span className="business-signup-text32">*</span>
                  <span>: </span>
                </label>
                <label className="business-signup-text34">
                  Industry Class:
                </label>
                <label className="business-signup-text35">
                  <span>
                    Contact Email
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="business-signup-text37">*</span>
                  <span>:</span>
                </label>
                <label className="business-signup-text39">
                  <span>Contact Phone </span>
                  <span className="business-signup-text41">*</span>
                  <span>:</span>
                </label>
                <label className="business-signup-text43">Website:</label>
                <label className="business-signup-text44">
                  <span>Number of Employees</span>
                  <span>:</span>
                </label>
                <label className="business-signup-text47">
                  <span>
                    Address
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="business-signup-text49">*</span>
                  <span>:</span>
                </label>
                <label className="business-signup-text51">
                  <span>Password</span>
                  <span className="business-signup-text53">*</span>
                  <span>:</span>
                </label>
              </div>
              <div className="business-signup-container5">
                <input
                  type="text"
                  required
                  placeholder="Company / Business / Shop"
                  autoComplete="given-name"
                  className="business-signup-textinput input"
                />
                <input
                  type="text"
                  required
                  placeholder="TIN No."
                  autoComplete="family-name"
                  className="business-signup-textinput1 input"
                />
                <select name="Industry" className="business-signup-select">
                  <option value="Healthcare" selected>
                    Healthcare
                  </option>
                  <option value="Logistics">Logistics</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Technology">Technology</option>
                </select>
                <input
                  type="email"
                  required
                  placeholder="name@workemail.com"
                  className="business-signup-textinput2 input"
                />
                <input
                  type="tel"
                  required
                  placeholder="+91-9876543210"
                  className="business-signup-textinput3 input"
                />
                <input
                  type="email"
                  placeholder="business-website.com"
                  className="business-signup-textinput4 input"
                />
                <select
                  name="employeecount"
                  className="business-signup-select1"
                >
                  <option value="1 - 100" selected>
                    1 - 100
                  </option>
                  <option value="101 - 1000">101 - 1000</option>
                  <option value="1001 - 5000">1001 - 5000</option>
                  <option value="5001 - 50000">5001 - 50000</option>
                  <option value="More than 50000">More than 50000</option>
                </select>
                <textarea
                  placeholder="Postal Address of Business HQ"
                  className="business-signup-textarea textarea"
                ></textarea>
                <input
                  type="password"
                  required
                  placeholder="password"
                  className="business-signup-textinput5 input"
                />
              </div>
            </div>
            <button type="submit" className="business-signup-button button">
              Signup
            </button>
          </form>
        </div>
      </section>
      <footer className="business-signup-footer">
        <span className="business-signup-text55">TrustedCreds</span>
        <span className="business-signup-text56">
          © 2023 TrustedCreds, All Rights Reserved.
        </span>
        <IconGroup></IconGroup>
      </footer>
    </div>
  )
}

export default BusinessSignup
