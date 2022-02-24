import React from 'react'

const Button = props => (
    <div className="navbar-item">
      <a className="button is-dark" href={props.url}>
        <span>{props.text}</span>
        <span className="icon">
          <i className={props.icon}></i>
        </span>
      </a>
    </div>
)

export default Button 