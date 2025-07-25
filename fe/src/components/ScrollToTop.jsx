import React, {useState, useEffect, useRef} from 'react'
import { useLocation } from 'react-router-dom'


const ScrollToTop = () => {

    const {pathname} = useLocation()

    useEffect(()=> {
        window.scroll(0,0);
    },[pathname])
    
  return null
}

export default ScrollToTop