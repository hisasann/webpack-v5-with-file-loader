import React from 'react'
import ReactDOM from 'react-dom'
import '../public/app.css'
import image from 'static_img/me.jpg'

function HelloMessage({ name }) {
  return <div><img src={image} />Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('app')
);