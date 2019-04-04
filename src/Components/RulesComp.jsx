import React, { Component } from 'react';

const data = [
  {
    title: 'Game rules',
    rulesTab: `
    1. Minimum of 8 players required to schedule a game. Games on Monday, Wednesday and Friday between 12PM to 1PM.
    2. Pick a team color of your choice. This helps everyone know if a team can be formed.
    3. This is a friendly game, keep it simple.
    4. Players rotate being Goalkeeper, can also volunteer to catch a breath.
    5. All experience levels welcome.`
  },
  {
    title: 'How to use the site?',
    rulesTab: `
    1. Registration only works on Monday, Wednesday and Friday. If you see entry fields disabled, there is no game today.
    2. If there are at least 8 players, you will see the status change from "waiting for players.." to "Game on!".
    3. Name cannot be empty and only alphabets are accepted. Both name and team are required.
    4. You can delete your entry, if you need to.
    5. All entries of that day will be deleted after 2PM EST.
    `
  }
]

export class RulesComp extends Component {
  render() {
    return (
      <div className="container rulesAccordion">
        <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
      </div>
    )
  }
}

class AccordionItem extends Component {
    state = {
      tabIsOpen: false
    }
    
    render () {
      const {
        props: {
          rulesTab,
          title
        },
        state: {
            tabIsOpen
        }
      } = this
      
      return (
        <div className={tabIsOpen ? "accordion-item accordion-item--opened" : "accordion-item"} 
            onClick={()=>{this.setState({tabIsOpen: !tabIsOpen})}}>
            <div className="accordion-item__line">
                <h3 className="accordion-item__title">
                    {title}
                </h3>
                <span className="accordion-item__icon"/>
            </div>
            <div className="accordion-item__inner">
                <div className="accordion-item__content">
                    <p className="accordion-item__paragraph">
                        {rulesTab}
                    </p>
                </div>
            </div>
        </div>
      )
    }
  }
  

export default RulesComp;
