import React from 'react'

const Button = props => (
    <span className="navbar-item">
      <a className="button is-light is-inverted" href={props.url}>
        <span className="icon">
            <i className="fab fa-github"></i>
        </span>
        <span>{props.text}</span>
      </a>
    </span>
)

export default Button 