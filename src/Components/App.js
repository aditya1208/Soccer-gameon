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



// enable registration only on M W F, add message "no game scheduled today" on T and TH - done
// basic name validation - regex(no special chars), required.. - done
// split to components - done
// header logo - done
// rules - done
// add styles -done, can improve
// site info in footer - tech used - done
// last entry not getting deleted - was problem with db.. fixed
// delete db after 2pm everyday - done

// WIP
// api key hide or env variables? in gitignore file?
// db security measures?
// analytics
// delete only self entered entry // add authentications
// no game scheduled today.. next game on {day}


// future enhancements 
// send email if status is game on
// send email if status is still waiting before 30min of 12pm est