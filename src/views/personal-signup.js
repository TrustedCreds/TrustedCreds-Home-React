import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import IconGroup from '../components/icon-group'
import './personal-signup.css'

const PersonalSignup = (props) => {
  return (
    <div className="personal-signup-container">
      <Helmet>
        <title>TrustedCreds</title>
        <meta property="og:title" content="TrustedCreds" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="personal-signup-navbar-interactive"
      >
        <Link to="/" className="personal-signup-navlink">
          TrustedCreds
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="personal-signup-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="personal-signup-nav"
          >
            <span className="personal-signup-text">For Individuals</span>
            <span className="personal-signup-text01">For Business</span>
            <span className="personal-signup-text02">Features</span>
            <span className="personal-signup-text03">Contact Us</span>
          </nav>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="personal-signup-btn-group"
        >
          <button className="personal-signup-login button">Login</button>
          <div
            data-thq="thq-dropdown"
            className="personal-signup-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="personal-signup-dropdown-toggle"
            >
              <span className="personal-signup-text04">Signup</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="personal-signup-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="personal-signup-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="personal-signup-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="personal-signup-personal list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="personal-signup-dropdown-toggle1"
                >
                  <Link
                    to="/personal-signup"
                    className="personal-signup-personal1"
                  >
                    Personal
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="personal-signup-business list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="personal-signup-dropdown-toggle2"
                >
                  <Link
                    to="/business-signup"
                    className="personal-signup-business1"
                  >
                    Business
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="personal-signup-burger-menu">
          <svg viewBox="0 0 1024 1024" className="personal-signup-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="personal-signup-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="personal-signup-nav1"
          >
            <div className="personal-signup-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="personal-signup-image"
              />
              <div
                data-thq="thq-close-menu"
                className="personal-signup-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="personal-signup-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="personal-signup-nav2"
            >
              <span className="personal-signup-text05">About</span>
              <span className="personal-signup-text06">Features</span>
              <span className="personal-signup-text07">Pricing</span>
              <span className="personal-signup-text08">Team</span>
              <span className="personal-signup-text09">Blog</span>
            </nav>
            <div className="personal-signup-container2">
              <button className="personal-signup-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="personal-signup-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="personal-signup-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="personal-signup-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="personal-signup-icon10"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="personal-signup-hero">
        <h1 className="personal-signup-text10">
          Claim your Decentralised Id and Wallet
        </h1>
        <p className="personal-signup-text11">Trusted | Verifiable | Private</p>
      </section>
      <section className="personal-signup-quote-container">
        <div className="personal-signup-quote">
          <span className="personal-signup-message">
            “Be yourself; everyone else is already taken.”
          </span>
          <span className="personal-signup-quote1">— Oscal Wilde</span>
        </div>
      </section>
      <section className="personal-signup-signup-form">
        <span className="personal-signup-text12">Welcome to TrustedCreds!</span>
        <span className="personal-signup-text13">
          <span className="personal-signup-text14">
            -  Create a Decentralised ID and Get Wallet .
          </span>
          <br className="personal-signup-text15"></br>
          <span className="personal-signup-text16">
            -  Secure Credentials in Wallet, and Share ID with Orgs.
          </span>
          <br></br>
          <span>-  You Control what you share.</span>
          <br></br>
        </span>
        <div className="personal-signup-centered-container">
          <form name="personal-signup-form" className="personal-signup-form">
            <span className="personal-signup-text20">Personal Signup</span>
            <span className="personal-signup-text21">
              <span>Fields marked with &quot;</span>
              <span className="personal-signup-text23">*</span>
              <span>&quot; are mandatory.</span>
            </span>
            <div className="personal-signup-container3">
              <div className="personal-signup-container4">
                <label className="personal-signup-text25">
                  <span className="personal-signup-text26">
                    First or Given Name
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="personal-signup-text27">*</span>
                  <span className="personal-signup-text28">:</span>
                </label>
                <label className="personal-signup-text29">
                  Last or Family Name:
                </label>
                <label className="personal-signup-text30">
                  <span>
                    Date of Birth
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="personal-signup-text32">*</span>
                  <span>:</span>
                </label>
                <label className="personal-signup-text34">
                  Personal Email:
                </label>
                <label className="personal-signup-text35">Corp. Email:</label>
                <label className="personal-signup-text36">
                  <span>Name of Employer</span>
                  <span className="personal-signup-text38">*</span>
                  <span>:</span>
                </label>
                <label className="personal-signup-text40">
                  <span>Phone</span>
                  <span className="personal-signup-text42">*</span>
                  <span>:</span>
                </label>
                <label className="personal-signup-text44">
                  <span>Password</span>
                  <span className="personal-signup-text46">*</span>
                  <span>:</span>
                </label>
              </div>
              <div className="personal-signup-container5">
                <input
                  type="text"
                  required
                  placeholder="first name"
                  autoComplete="given-name"
                  className="personal-signup-textinput input"
                />
                <input
                  type="text"
                  required
                  placeholder="last name"
                  autoComplete="family-name"
                  className="personal-signup-textinput1 input"
                />
                <input
                  type="date"
                  required
                  placeholder="last name"
                  autoComplete="family-name"
                  className="personal-signup-textinput2 input"
                />
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="personal-signup-textinput3 input"
                />
                <input
                  type="email"
                  placeholder="name@workemail.com"
                  className="personal-signup-textinput4 input"
                />
                <input
                  type="email"
                  required
                  placeholder="Company / Business / Shop"
                  className="personal-signup-textinput5 input"
                />
                <input
                  type="email"
                  required
                  placeholder="+91-9876543210"
                  className="personal-signup-textinput6 input"
                />
                <input
                  type="password"
                  required
                  placeholder="password"
                  className="personal-signup-textinput7 input"
                />
              </div>
            </div>
          </form>
          <button type="submit" className="personal-signup-button button">
            Signup
          </button>
        </div>
      </section>
      <footer className="personal-signup-footer">
        <span className="personal-signup-text48">TrustedCreds</span>
        <span className="personal-signup-text49">
          © 2023 TrustedCreds, All Rights Reserved.
        </span>
        <IconGroup></IconGroup>
      </footer>
    </div>
  )
}

export default PersonalSignup
