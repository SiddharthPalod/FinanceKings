import React from 'react'
import { Icon } from '@iconify/react';
import { useSnapshot } from "valtio";
import { state } from ".";

function Navbar() {
  const snap = useSnapshot(state);

  return (
    <div className="vertical-navbar">
      <ul>
        <li>
          <Icon icon="game-icons:vr-headset" color="#EEEEEE" width="15" />
        </li>
        <li 
         onClick={() => {
          const originalXOffset = window.scrollX;
          for (const key in state) {
              if (key == 'intro') {
                  state[key] = true;
              }
              else{
                  state[key] = false;
              }
          }
          window.scrollTo(originalXOffset, 0);}}
        >
        <Icon icon="material-symbols:home" width="15" />
        </li>
        <li>
        <Icon icon="zondicons:education" width="15" />
        </li>
        <li>
        <Icon icon="game-icons:progression" width="15" />
        </li>
        <li>
        <Icon icon="icon-park-solid:vr-glasses" width="15" />
        </li>
        <li
                 onClick={() => {
                  const originalXOffset = window.scrollX;
                  for (const key in state) {
                      if (key == 'about') {
                          state[key] = true;
                      }
                      else{
                          state[key] = false;
                      }
                  }
                  window.scrollTo(originalXOffset, 0);
                }}
        >
        <Icon icon="mdi:about-circle-outline"  width="18" />
        </li>
          
      </ul>
    </div>
  )
}

export default Navbar