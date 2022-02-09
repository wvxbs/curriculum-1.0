import React from 'react'

const Button = props => (
    <span className="navbar-item">
      <a className="button is-light" href={props.url}>
        {props.text}
        <span className="icon">
            <i className={props.icon}></i>
        </span>
      </a>
    </span>
)

export default Button 