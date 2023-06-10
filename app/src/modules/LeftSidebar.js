import React, { useEffect, useRef } from "react";
import { mount } from "leftSideBar/leftSideBar";
import { useHistory } from 'react-router-dom'
import "./LeftSidebar.css";

const LeftSidebarModule = () => {
  const ref = useRef(null);
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate(path) {
        console.log('onModuleNavAng: ' + path)
      },
      korte: 'alma'
    });
    history.listen(onParentNavigate)
  }, []);
  return <div className="left-sidebar-module"><app-angular></app-angular></div>;
};

export default LeftSidebarModule;