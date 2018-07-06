/* eslint-disable */

import React from 'react'
import tachyons from 'tachyons'

export default() => (<header className="headroom self-start w-100 z-max headroom--top headroom--not-bottom">
  <div className="mw9 pa2 ph5">
    <div className="cf">

      <div className=" w-100 w-80-ns pl2-ns pt2  pt0-ns">

        <ul className="dib list w-100 pa0 ma0 pt1 mt2">
          <li className="w-20-ns  mb1 mr3 f2 fw4 pa0 pt3 pt0-ns ttu tracked" style={{
              color: 'linear-gradient(135deg, #1eaedb, #8AC6DE)'
            }}>
            <a href="/">
              Musclebutter
            </a>
          </li>

          <li className="dib dim mb1 mr3 mr4-ns f3 f3-ns fw4 tr-ns dark-gray">
            <a className=" tracked link near-black hover-light-blue no-underline" href="/bio/">Bio</a>
          </li>
          <li className="dib dim mb1 mr3 mr4-ns f3 f3-ns fw4 tr-ns dark-gray">
            <a className=" tracked link near-black hover-light-blue:focus no-underline" href="https://www.massagebook.com/San_Francisco~Massage~MuscleButter?src=external#services">Services</a>
          </li>
          <li className="dib dim mb1 mr3 mr4-ns f3 f3-ns fw4 tr-ns dark-gray">
            <a className=" tracked link near-black hover-light-blue:focus no-underline" href="/contact/">Contact</a>
          </li>
          <li className="dib dim mb1 f3 f3-ns fw4 tr-ns dark-gray">
            <a className=" tracked link near-black hover-light-blue:focus no-underline" href="https://www.massagebook.com/profiles/publicBooking/1545497?src=external">Book Now</a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</header>)