import React, { Component } from 'react'
import loding from './loding.gif'
export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loding} alt="loding" />
      </div>
    )
  }
}
