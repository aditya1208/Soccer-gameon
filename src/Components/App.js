import React, { Component } from 'react';
import HeaderComp from "./HeaderComp";
import DisplayTableComp from "./DisplayTableComp";
import RulesComp from './RulesComp';
import FooterComp from './FooterComp';



class App extends Component {

  render() {
    return (
      <div className="centeredContent">
        <HeaderComp />
        <DisplayTableComp />
        <div className="rulesPartition container"></div>
        <RulesComp />
        <FooterComp />
      </div>
    );
  }
}

export default App;


// delete db after 2pm everyday - done
// enable registration only on M W F, add message "no game scheduled today" on T and TH - done
// basic name validation - regex(no special chars), required.. - done

// split to components
// header logo
// rules
// add styles
// site info in footer - tech used, future enhancements

// send email if status is game on
// send email if status is still waiting before 30min of 12pm est