import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import IconGroup from '../components/icon-group'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>TrustedCreds</title>
        <meta property="og:title" content="TrustedCreds" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <Link to="/" className="home-navlink">
          TrustedCreds
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <span className="home-text">For Individuals</span>
            <span className="home-text001">For Business</span>
            <span className="home-text002">Features</span>
            <span className="home-text003">Contact Us</span>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <button className="home-login button">Login</button>
          <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle"
            >
              <span className="home-text004">Signup</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
              <li data-thq="thq-dropdown" className="home-personal list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle1"
                >
                  <Link to="/personal-signup" className="home-personal1">
                    Personal
                  </Link>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="home-business list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle2"
                >
                  <Link to="/business-signup" className="home-business1">
                    Business
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image"
              />
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text005">About</span>
              <span className="home-text006">Features</span>
              <span className="home-text007">Pricing</span>
              <span className="home-text008">Team</span>
              <span className="home-text009">Blog</span>
            </nav>
            <div className="home-container2">
              <button className="home-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-hero">
        <header className="home-header">
          <h1 className="home-text010">
            Verify Credentials - Direct &amp; Instant
          </h1>
          <p className="home-text011">Trusted | Verifiable | Private</p>
          <div className="home-get-started">
            <span className="home-text012">Get started</span>
          </div>
        </header>
      </section>
      <section className="home-how-it-works-for-indivs">
        <div className="home-centered-container">
          <div className="home-heading">
            <span className="home-text013">
              How it works - for Individuals.
            </span>
            <span className="home-text014 title">
              <span className="home-text015"> Sharing Credentials is now </span>
              <span>Easier </span>
              <span>
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Safer</span>
              <span>.</span>
              <br></br>
            </span>
          </div>
          <div className="home-container3"></div>
          <div className="home-category">
            <div className="home-headng">
              <span className="home-text021">1:  SignUp and Activate</span>
              <span className="home-text022">
                <span className="home-text023">Claim your </span>
                <span className="home-text024">
                  decentralised
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text025">Identity</span>
                <span className="home-text026">,</span>
                <span className="home-text027"> and </span>
                <span className="home-text028">Secure Wallet.</span>
                <br></br>
              </span>
              <div className="home-get-started1 template-button">
                <span className="home-text030">Get started</span>
              </div>
            </div>
            <div className="home-container4">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-k5xi.svg"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category01">
              <div className="home-headng1">
                <span className="home-text031">2:  Keep adding Creds</span>
                <span className="home-text032">
                  <span>
                    build an
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text034">Immutable</span>
                  <span> chain of your Credentials. </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/identity-wallet-removebg-preview-1200w.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-category02">
              <div className="home-headng2">
                <span className="home-text037">3:  Share Chain of Creds</span>
                <span className="home-text038">
                  <span className="home-text039">You</span>
                  <span> Control what you share.</span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="https://tcnetstorage.blob.core.windows.net/tcnetpublic/Decentralized_Identity_icon.svg"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works-for-orgs">
        <div className="home-centered-container1">
          <div className="home-heading1">
            <span className="home-text042">
              How it works - For Organisations
            </span>
            <span className="home-text043 title">
              Background Verification - Trusted, Instant and Customisable.
            </span>
          </div>
          <div className="home-category03">
            <div className="home-headng3">
              <span className="home-text044">1:  Come Onboard</span>
              <span className="home-text045">
                we integrate with your SSO and HRMS. 
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text046">Get started</span>
              </div>
            </div>
            <div className="home-container5">
              <img
                alt="pastedImage"
                src="/playground_assets/hrms-sso-200w.png"
                className="home-pasted-image3"
              />
            </div>
          </div>
          <div className="home-row1">
            <div className="home-category04">
              <div className="home-headng4">
                <span className="home-text047">2: Contribute to Trust</span>
                <span className="home-text048">
                  <span>
                    Community of Organisations share Trusted Credentials.
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/ssl-certificate-chain-of-trust-feature-1200w.jpg"
                className="home-pasted-image4"
              />
            </div>
            <div className="home-category05">
              <div className="home-headng5">
                <span className="home-text051">3: Verify Instantly</span>
                <span className="home-text052">
                  <span>
                    Employees Instantly Share Credentials from Wallet.
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1663789669038-ba180c8c155a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGNyZWRlbnRpYWx8ZW58MHx8fHwxNjcyMjQwODcy&amp;ixlib=rb-4.0.3&amp;w=1200"
                className="home-pasted-image5"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">
            “Be yourself; everyone else is already taken.”
          </span>
          <span className="home-quote1">— Oscal Wilde</span>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container6">
            <div className="home-left">
              <span className="home-text055 sub-title">
                Individual&apos;s Registry of Trusted Credentials
              </span>
              <span className="home-text056 title">
                Individuals - Control your Identity
              </span>
              <span className="home-text057">
                <span>receive a Decentralised Identity.</span>
                <br></br>
                <br></br>
                <span>
                  Share Decentralised ID with Issuer (current Employer) or
                  Verifier (Future Employer).
                </span>
                <br></br>
                <br></br>
                <span>
                  Accept Credentials in your Secure Wallet, and control how much
                  to share with Verifying Org.
                </span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </span>
              <div className="home-get-started3 template-button">
                <span className="home-text069">Get started</span>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/playground_assets/identity-wallet-removebg-preview-1200w.png"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container2">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGNvbW11bml0eXxlbnwwfHx8fDE2NzIzOTU5Nzg&amp;ixlib=rb-4.0.3&amp;w=1200"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right">
              <span className="home-text070 sub-title">
                Evolution of Background Verification for Orgs.
              </span>
              <h2 className="home-text071 title">
                Enterprise  Verification Ecosystem
              </h2>
              <div className="home-category06">
                <span className="home-text072">Ecosystem</span>
                <span className="home-text073">
                  <span className="home-text074">
                    Credentials issued by one Org. are available for other Orgs.
                    - Online, Secure, and Distributed. 
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Unique Identifier of Employee links all Credentials -
                    Employment, Educational, among others.
                  </span>
                  <br></br>
                  <br></br>
                  <span>Transparent Lineage of Immutable Credentials.</span>
                  <br></br>
                  <br></br>
                  <span>Orgs. can design custom workflows.</span>
                  <br></br>
                </span>
                <span className="home-text085">Example -&gt;</span>
              </div>
              <div className="home-category07">
                <span className="home-text086">
                  Preserves Privacy, yet Instant
                </span>
                <span className="home-text087">
                  <span className="home-text088">
                    Employee shares the Unique Alphanumeric Identifier with
                    Org., to verify Credentials.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Verification Request can be Approved / Rejected Instantly by
                    Employee.
                  </span>
                  <br></br>
                  <br></br>
                  <span>Employee Controls What to Share. </span>
                  <br></br>
                  <br></br>
                  <span>
                    Lineage can be updated, but all modifications are
                    transparent.
                  </span>
                  <br></br>
                </span>
                <span className="home-text099">Example -&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-pricing-new">
        <div className="home-centered-container3">
          <div className="home-heading2">
            <span className="home-text100 title">Priced for All</span>
          </div>
          <div className="home-row2">
            <div className="home-category08">
              <div className="home-headng6">
                <span className="home-text101">FREE</span>
                <span className="home-text102">
                  <span>Build Community</span>
                  <br></br>
                </span>
              </div>
              <div className="home-get-started4 template-button">
                <span className="home-text105">
                  <span>Start Free</span>
                  <br></br>
                </span>
              </div>
              <div className="home-footer">
                <span className="home-text108">What&apos;s Included</span>
                <span className="home-text109">
                  <span>- Tokenised Basic Verifications</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-category09">
              <div className="home-headng7">
                <span className="home-text113">Pay as you Go</span>
                <span className="home-text114">
                  <span>Premium Features</span>
                  <br></br>
                </span>
              </div>
              <div className="home-get-started5 template-button">
                <span className="home-text117">
                  <span>Upgrade Now</span>
                  <br></br>
                </span>
              </div>
              <div className="home-footer1">
                <span className="home-text120">What&apos;s Included</span>
                <span className="home-text121">
                  <span>- Detailed Verifications</span>
                  <br></br>
                  <br></br>
                  <span>- Custom Workflows</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer2">
        <span className="home-text128">TrustedCreds</span>
        <span className="home-text129">
          © 2023 TrustedCreds, All Rights Reserved.
        </span>
        <IconGroup></IconGroup>
      </footer>
    </div>
  )
}

export default Home
