'use strict'

// Packages
import PropTypes from 'prop-types'

// Theme
import { colors, typography } from './../theme'

const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}

      <style jsx>{`
        button {
          width: 100%;
          height: 36px;
          background: ${colors.white};
          border: none;
          color: ${colors.black};
          font-weight: ${typography.semibold};
          font-size: ${typography.f10};
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 2px;
          outline: none;
        }
      `}</style>
    </button>
  )
}

Button.defaultProps = {
  onClick: null,
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
