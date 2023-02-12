import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import IconGroup from '../components/icon-group'
import './business-h-r-m-s.css'

const BusinessHRMS = (props) => {
  return (
    <div className="business-h-r-m-s-container">
      <Helmet>
        <title>TrustedCreds</title>
        <meta property="og:title" content="TrustedCreds" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="business-h-r-m-s-navbar-interactive"
      >
        <Link to="/" className="business-h-r-m-s-navlink">
          TrustedCreds
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="business-h-r-m-s-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="business-h-r-m-s-nav"
          >
            <span className="business-h-r-m-s-text">For Individuals</span>
            <span className="business-h-r-m-s-text01">For Business</span>
            <span className="business-h-r-m-s-text02">Features</span>
            <span className="business-h-r-m-s-text03">Contact Us</span>
          </nav>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="business-h-r-m-s-btn-group"
        >
          <div
            data-thq="thq-dropdown"
            className="business-h-r-m-s-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="business-h-r-m-s-dropdown-toggle"
            >
              <span className="business-h-r-m-s-text04">More</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="business-h-r-m-s-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="business-h-r-m-s-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="business-h-r-m-s-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="business-h-r-m-s-view-credentials list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="business-h-r-m-s-dropdown-toggle1"
                >
                  <Link
                    to="/personal-signup11"
                    className="business-h-r-m-s-view-credentials1"
                  >
                    View Credentials
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="business-h-r-m-s-logout list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="business-h-r-m-s-dropdown-toggle2"
                >
                  <Link to="/" className="business-h-r-m-s-logout1">
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="business-h-r-m-s-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="business-h-r-m-s-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="business-h-r-m-s-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="business-h-r-m-s-nav1"
          >
            <div className="business-h-r-m-s-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="business-h-r-m-s-image"
              />
              <div
                data-thq="thq-close-menu"
                className="business-h-r-m-s-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="business-h-r-m-s-icon04"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="business-h-r-m-s-nav2"
            >
              <span className="business-h-r-m-s-text05">About</span>
              <span className="business-h-r-m-s-text06">Features</span>
              <span className="business-h-r-m-s-text07">Pricing</span>
              <span className="business-h-r-m-s-text08">Team</span>
              <span className="business-h-r-m-s-text09">Blog</span>
            </nav>
            <div className="business-h-r-m-s-container2">
              <button className="business-h-r-m-s-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="business-h-r-m-s-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="business-h-r-m-s-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="business-h-r-m-s-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="business-h-r-m-s-icon10"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="business-h-r-m-s-signup-form">
        <span className="business-h-r-m-s-text10">
          Welcome to TrustedCreds!
        </span>
        <div className="business-h-r-m-s-centered-container">
          <form name="personal-signup-form" className="business-h-r-m-s-form">
            <span className="business-h-r-m-s-text11">
              DMart HR Management System - Simulator
            </span>
            <div className="business-h-r-m-s-container3">
              <div className="business-h-r-m-s-container4">
                <label className="business-h-r-m-s-text12">
                  <span>Name of Employer</span>
                  <span className="business-h-r-m-s-text14">*</span>
                  <span>:</span>
                </label>
                <label className="business-h-r-m-s-text16">
                  <span className="business-h-r-m-s-text17">
                    Full Name
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="business-h-r-m-s-text18">*</span>
                  <span className="business-h-r-m-s-text19">:</span>
                </label>
                <label className="business-h-r-m-s-text20">
                  <span>
                    Date of Birth
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="business-h-r-m-s-text22">*</span>
                  <span>:</span>
                </label>
                <label className="business-h-r-m-s-text24">
                  Personal Email:
                </label>
                <label className="business-h-r-m-s-text25">Work Email:</label>
                <label className="business-h-r-m-s-text26">Phone No.</label>
                <label className="business-h-r-m-s-text27">
                  <span>Designation</span>
                  <span className="business-h-r-m-s-text29">*</span>
                  <span>:</span>
                </label>
                <label className="business-h-r-m-s-text31">
                  <span>Work Office Location</span>
                  <span className="business-h-r-m-s-text33">*</span>
                  <span>:</span>
                </label>
                <label className="business-h-r-m-s-text35">
                  <span>Duration in Org.</span>
                  <span className="business-h-r-m-s-text37">*</span>
                  <span>:</span>
                </label>
                <label className="business-h-r-m-s-text39">
                  <span>Exit Date</span>
                  <span className="business-h-r-m-s-text41">*</span>
                  <span>:</span>
                </label>
                <label className="business-h-r-m-s-label">Aadhaar Id:</label>
                <label className="business-h-r-m-s-text43">
                  Additional Proof Docs.
                </label>
                <label className="business-h-r-m-s-profile-pic">
                  Pic of Relieving Certificate:
                </label>
              </div>
              <div className="business-h-r-m-s-container5">
                <label className="business-h-r-m-s-text44">
                  Avenue Supermart Ltd.
                </label>
                <input
                  type="text"
                  placeholder="Ramakrishna Lomani"
                  className="business-h-r-m-s-textinput input"
                />
                <input
                  type="date"
                  placeholder="abc@gmail.com"
                  className="business-h-r-m-s-textinput01 input"
                />
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="business-h-r-m-s-textinput02 input"
                />
                <input
                  type="email"
                  placeholder="name@workemail.com"
                  className="business-h-r-m-s-textinput03 input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="business-h-r-m-s-textinput04 input"
                />
                <input
                  type="text"
                  required
                  placeholder="Asst. Floor Incharge"
                  className="business-h-r-m-s-textinput05 input"
                />
                <input
                  type="text"
                  required
                  placeholder="Whitefield, Bangalore"
                  className="business-h-r-m-s-textinput06 input"
                />
                <input
                  type="text"
                  required
                  placeholder="2 years 3 Month"
                  className="business-h-r-m-s-textinput07 input"
                />
                <input
                  type="date"
                  value="02/11/2022"
                  required
                  placeholder="Exit "
                  className="business-h-r-m-s-textinput08 input"
                />
                <input
                  type="text"
                  required
                  placeholder="1111-2222-3333"
                  className="business-h-r-m-s-textinput09 input"
                />
                <button className="business-h-r-m-s-button button">
                  Upload Docs.
                </button>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="business-h-r-m-s-image1"
                />
              </div>
            </div>
            <button type="submit" className="business-h-r-m-s-button1 button">
              Send to TrustedCreds
            </button>
          </form>
        </div>
      </section>
      <footer className="business-h-r-m-s-footer">
        <span className="business-h-r-m-s-text45">TrustedCreds</span>
        <span className="business-h-r-m-s-text46">
          © 2023 TrustedCreds, All Rights Reserved.
        </span>
        <IconGroup></IconGroup>
      </footer>
    </div>
  )
}

export default BusinessHRMS
