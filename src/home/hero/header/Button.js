import React from 'react'

const Button = props => (
    <a className="navbar-item">
      <a className="button is-dark" href={props.url}>
        {props.text}
        <div className="icon">
            <i className={props.icon}></i>
        </div>
      </a>
    </a>
)

export default Button 