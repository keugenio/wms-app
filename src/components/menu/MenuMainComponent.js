import React from 'react';
import About from '../About';
import Certifications from '../Certifications';
import ProgramAndProjectManagement from '../ProgramAndProjectManagement';
import ProjectDesignAndEngineering from '../ProjectDesignAndEngineering';
import ConstructionManagement from '../ConstructionManagement';
import WhatWeDo from '../WhatWeDo';

export default function MenuMainComponent (props) {
  const {currentMenuComponent} = props;

  switch (currentMenuComponent) {
    case 'About WMS':
      return <About toggle={true}/>;
    case 'Certification':
      return (
        <Certifications />
      );
    case 'Program & Project Management':
      return (
        <ProgramAndProjectManagement />
      );
    case 'Project Design & Engineering':
      return (
        <ProjectDesignAndEngineering />
      );
      case 'Construction Management':
        return (
          <ConstructionManagement />
        );      
    case 'What We Do':
      return (
        <WhatWeDo />
      );      
    default:
      return (<div></div> )
  }
}