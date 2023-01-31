import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import IconGroup from '../components/icon-group'
import './personal-profile.css'

const PersonalProfile = (props) => {
  return (
    <div className="personal-profile-container">
      <Helmet>
        <title>TrustedCreds</title>
        <meta property="og:title" content="TrustedCreds" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="personal-profile-navbar-interactive"
      >
        <Link to="/" className="personal-profile-navlink">
          TrustedCreds
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="personal-profile-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="personal-profile-nav"
          >
            <span className="personal-profile-text">For Business</span>
            <span className="personal-profile-text01">For Individuals</span>
            <span className="personal-profile-text02">Features</span>
            <span className="personal-profile-text03">Contact Us</span>
          </nav>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="personal-profile-btn-group"
        >
          <div
            data-thq="thq-dropdown"
            className="personal-profile-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="personal-profile-dropdown-toggle"
            >
              <span className="personal-profile-text04">More</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="personal-profile-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="personal-profile-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="personal-profile-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="personal-profile-view-credentials list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="personal-profile-dropdown-toggle1"
                >
                  <Link
                    to="/business-signup"
                    className="personal-profile-view-credentials1"
                  >
                    View Credentials
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="personal-profile-logout list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="personal-profile-dropdown-toggle2"
                >
                  <Link to="/" className="personal-profile-logout1">
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="personal-profile-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="personal-profile-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="personal-profile-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="personal-profile-nav1"
          >
            <div className="personal-profile-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="personal-profile-image"
              />
              <div
                data-thq="thq-close-menu"
                className="personal-profile-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="personal-profile-icon04"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="personal-profile-nav2"
            >
              <span className="personal-profile-text05">About</span>
              <span className="personal-profile-text06">Features</span>
              <span className="personal-profile-text07">Pricing</span>
              <span className="personal-profile-text08">Team</span>
              <span className="personal-profile-text09">Blog</span>
            </nav>
            <div className="personal-profile-container2">
              <button className="personal-profile-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="personal-profile-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="personal-profile-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="personal-profile-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="personal-profile-icon10"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="personal-profile-signup-form">
        <span className="personal-profile-text10">
          Welcome to TrustedCreds!
        </span>
        <div className="personal-profile-centered-container">
          <form name="personal-signup-form" className="personal-profile-form">
            <span className="personal-profile-text11">Personal Profile</span>
            <span className="personal-profile-text12">
              <span>Fields marked with &quot;</span>
              <span className="personal-profile-text14">*</span>
              <span>&quot; are mandatory.</span>
            </span>
            <div className="personal-profile-container3">
              <div className="personal-profile-container4">
                <label className="personal-profile-text16">
                  <span className="personal-profile-text17">
                    First or Given Name
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="personal-profile-text18">*</span>
                  <span className="personal-profile-text19">:</span>
                </label>
                <label className="personal-profile-text20">
                  Last or Family Name:
                </label>
                <label className="personal-profile-text21">
                  <span>
                    Date of Birth
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="personal-profile-text23">*</span>
                  <span>:</span>
                </label>
                <label className="personal-profile-text25">
                  Personal Email:
                </label>
                <label className="personal-profile-text26">Corp. Email:</label>
                <label className="personal-profile-text27">
                  <span>Name of Employer</span>
                  <span className="personal-profile-text29">*</span>
                  <span>:</span>
                </label>
                <label className="personal-profile-text31">
                  <span>Phone</span>
                  <span className="personal-profile-text33">*</span>
                  <span>:</span>
                </label>
                <label className="personal-profile-text35">Aadhaar Id:</label>
                <label className="personal-profile-profile-pic">
                  Profile Pic:
                </label>
              </div>
              <div className="personal-profile-container5">
                <label className="personal-profile-text36">First Name</label>
                <label className="personal-profile-text37">Last Name</label>
                <label className="personal-profile-text38">Nov 2, 2008</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="personal-profile-textinput input"
                />
                <input
                  type="email"
                  placeholder="name@workemail.com"
                  className="personal-profile-textinput1 input"
                />
                <input
                  type="email"
                  required
                  placeholder="Company / Business / Shop"
                  className="personal-profile-textinput2 input"
                />
                <input
                  type="email"
                  required
                  placeholder="+91-9876543210"
                  className="personal-profile-textinput3 input"
                />
                <input
                  type="text"
                  required
                  placeholder="1111-2222-3333"
                  className="personal-profile-textinput4 input"
                />
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="personal-profile-image1"
                />
              </div>
            </div>
            <button type="submit" className="personal-profile-button button">
              Save Profile
            </button>
          </form>
        </div>
      </section>
      <footer className="personal-profile-footer">
        <span className="personal-profile-text39">TrustedCreds</span>
        <span className="personal-profile-text40">
          © 2023 TrustedCreds, All Rights Reserved.
        </span>
        <IconGroup></IconGroup>
      </footer>
    </div>
  )
}

export default PersonalProfile
