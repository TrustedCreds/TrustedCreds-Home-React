import React from 'react'

import PropTypes from 'prop-types'

import './branding.css'

const Branding = (props) => {
  return (
    <div className={`branding-container ${props.rootClassName} `}>
      <img
        alt={props.Branding_alt}
        src={props.Branding_src}
        className="branding-branding"
      />
    </div>
  )
}

Branding.defaultProps = {
  rootClassName: '',
  Branding_src:
    'https://tcnetstorage.blob.core.windows.net/tcnetpublic/TrustedCredsTransBW-Stacked-Bold-narrow.png',
  Branding_alt: 'pastedImage',
}

Branding.propTypes = {
  rootClassName: PropTypes.string,
  Branding_src: PropTypes.string,
  Branding_alt: PropTypes.string,
}

export default Branding
