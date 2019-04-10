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
// web app manifest does not have png icon of at least 192px
// manifest does not have png icon of at least 512px
// consider using a service worker, register a service worker, unable to fetch start URL via service worker.
// page tab order - game rules tab.., chnage table div to main, add skip to main content, focus colors, color contrast, set focus to game on on change
// remove unused css 2.28f28c55.chunk.css
// efficient cache policy for static assets
// db security measures?
// analytics
// delete only self entered entry // add authentications
// no game scheduled today.. next game on {day}


// future enhancements 
// send email if status is game on
// send email if status is still waiting before 30min of 12pm est