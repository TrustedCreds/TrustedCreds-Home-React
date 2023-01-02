import React from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <section className="features-features">
      <div className="features-title">
        <span className="features-text">
          <span>
            Let&apos;s grow your social media
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>presence</span>
        </span>
        <span className="features-text04">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>eiusmod tempor incididunt.</span>
        </span>
      </div>
      <div className="features-cards">
        <div className="features-container">
          <div className="card">
            <img
              alt={props.Icon_alt}
              src={props.Icon_src}
              className="features-icon"
            />
            <span className="features-text07">{props.text}</span>
            <span className="features-text08">{props.text1}</span>
          </div>
          <div className="features-publish card">
            <img
              alt={props.Icon_alt1}
              src={props.Icon_src1}
              className="features-icon1"
            />
            <span className="features-text09">{props.text2}</span>
            <span className="features-text10">{props.text3}</span>
          </div>
        </div>
        <div className="features-container1">
          <div className="card features-analyze">
            <img
              alt={props.Icon_alt2}
              src={props.Icon_src2}
              className="features-icon2"
            />
            <span className="features-text11">{props.text4}</span>
            <span className="features-text12">{props.text5}</span>
          </div>
          <div className="card">
            <img
              alt={props.Icon_alt3}
              src={props.Icon_src3}
              className="features-icon3"
            />
            <span className="features-text13">{props.text6}</span>
            <span className="features-text14">{props.text7}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

Features.defaultProps = {
  text5:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  Icon_src1: '/playground_assets/pastedimage-mimg-200h.png',
  Icon_src2: '/playground_assets/pastedimage-l6p-200h.png',
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  text4: 'Analyze',
  Icon_src3: '/playground_assets/pastedimage-vyi5-200h.png',
  Icon_src: '/playground_assets/pastedimage-fii6m-200h.png',
  Icon_alt: 'pastedImage',
  Icon_alt3: 'pastedImage',
  Icon_alt2: 'pastedImage',
  text6: 'Get leads',
  text2: 'Publish',
  Icon_alt1: 'pastedImage',
  text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr',
  text: 'Schedule',
  text7:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
}

Features.propTypes = {
  text5: PropTypes.string,
  Icon_src1: PropTypes.string,
  Icon_src2: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  Icon_src3: PropTypes.string,
  Icon_src: PropTypes.string,
  Icon_alt: PropTypes.string,
  Icon_alt3: PropTypes.string,
  Icon_alt2: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  Icon_alt1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text7: PropTypes.string,
}

export default Features
