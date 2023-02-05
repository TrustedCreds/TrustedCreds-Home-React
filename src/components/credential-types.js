import React from 'react'

import PropTypes from 'prop-types'

import './credential-types.css'

const CredentialTypes = (props) => {
  return (
    <section className={`credential-types-features ${props.rootClassName} `}>
      <div className="credential-types-title">
        <span className="credential-types-text">
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
        <span className="credential-types-text04">
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
      <div className="credential-types-cards">
        <div className="credential-types-container">
          <div className="card">
            <img
              alt={props.Icon_alt}
              src={props.Icon_src}
              className="credential-types-icon"
            />
            <span className="credential-types-text07">{props.text}</span>
            <span className="credential-types-text08">{props.text1}</span>
          </div>
          <div className="credential-types-publish card">
            <img
              alt={props.Icon_alt1}
              src={props.Icon_src1}
              className="credential-types-icon1"
            />
            <span className="credential-types-text09">{props.text2}</span>
            <span className="credential-types-text10">{props.text3}</span>
          </div>
        </div>
        <div className="credential-types-container1">
          <div className="card credential-types-analyze">
            <img
              alt={props.Icon_alt2}
              src={props.Icon_src2}
              className="credential-types-icon2"
            />
            <span className="credential-types-text11">{props.text4}</span>
            <span className="credential-types-text12">{props.text5}</span>
          </div>
          <div className="card">
            <img
              alt={props.Icon_alt3}
              src={props.Icon_src3}
              className="credential-types-icon3"
            />
            <span className="credential-types-text13">{props.text6}</span>
            <span className="credential-types-text14">{props.text7}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

CredentialTypes.defaultProps = {
  Icon_alt3: 'pastedImage',
  text4: 'Financial',
  Icon_src1: '/playground_assets/pastedimage-mimg-200h.png',
  rootClassName: '',
  text: 'Employment',
  text7:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  Icon_alt: 'pastedImage',
  Icon_src2: '/playground_assets/pastedimage-l6p-200h.png',
  Icon_alt2: 'pastedImage',
  Icon_src: '/playground_assets/pastedimage-fii6m-200h.png',
  text2: 'Education',
  text6: 'Legal',
  text5:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr',
  Icon_src3: '/playground_assets/pastedimage-vyi5-200h.png',
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  Icon_alt1: 'pastedImage',
}

CredentialTypes.propTypes = {
  Icon_alt3: PropTypes.string,
  text4: PropTypes.string,
  Icon_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text7: PropTypes.string,
  Icon_alt: PropTypes.string,
  Icon_src2: PropTypes.string,
  Icon_alt2: PropTypes.string,
  Icon_src: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  Icon_src3: PropTypes.string,
  text1: PropTypes.string,
  Icon_alt1: PropTypes.string,
}

export default CredentialTypes
