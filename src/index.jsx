import React from 'react'
import ReactDOM from 'react-dom'
import '../public/app.css'
import image from 'static_img/me.jpg'
import { NestComponent } from './NestComponent'

// エントリポイントのファイルは編集すると live reload が発動してしまうので
// component は別ファイルにすること
function HelloMessage({ name }) {
  console.log('HelloMessage')
  return (
    <>
      <div><img src={image} />Hello {name}</div>
      <NestComponent />
    </>
  );
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('app')
);