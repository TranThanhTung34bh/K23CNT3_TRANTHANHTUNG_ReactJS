import React from 'react'
import TttLoginComp from './TttLoginComp';
import TttLogoutComp from './TttLogoutComp';

export default function TttLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var TttLoginControl = isLoggedIn?<TttLoginComp />: <TttLogoutComp />;
  return (
    <div>
      {TttLoginControl}
    </div>
  )
}
