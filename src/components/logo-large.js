import React from 'react'

import PropTypes from 'prop-types'

import './logo-large.css'

const LogoLarge = (props) => {
  return (
    <div className={`logo-large-container ${props.rootClassName} `}>
      <img
        alt={props.Logo_alt}
        src={props.Logo_src}
        className="logo-large-logo"
      />
    </div>
  )
}

LogoLarge.defaultProps = {
  rootClassName: '',
  Logo_src:
    'https://tcnetstorage.blob.core.windows.net/tcnetpublic/TrustedCredsTransBW-Stacked-Bold-narrow.png',
  Logo_alt: 'pastedImage',
}

LogoLarge.propTypes = {
  rootClassName: PropTypes.string,
  Logo_src: PropTypes.string,
  Logo_alt: PropTypes.string,
}

export default LogoLarge
