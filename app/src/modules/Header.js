import React, { useEffect, useRef } from "react";
import { mount } from "header/HeaderModule";
import { useHistory } from 'react-router-dom'

import "./Header.css";
const HeaderModule = () => {
  const ref = useRef(null);
  const history = useHistory()

  useEffect(() => {
    const {
      // MF API upstream
      // upstream navigation
      onParentNavigate
    } = mount(ref.current, {
      onNavigate: ({ action, location }) => {
        const { pathname: nextPathname } = location
        const { pathname } = history.location
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      initialPath: history.location
    });
    history.listen(onParentNavigate)
  });


  return <div className="header-module" ref={ref} />;
};

export default HeaderModule;