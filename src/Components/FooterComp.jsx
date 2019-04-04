import React, { Component } from 'react'

export class FooterComp extends Component {
  render() {
    return (
        <footer className="footer container">
            <p className="info-text">A website to help minimize few tasks to schedule a soccer game for my friends. This site was built using ReactJs and Firebase as backend DB.</p>
            <ul className="footer-social">
              <li className="social-items">Be my social friend @</li>
              <li className="social-items"><a href="https://www.linkedin.com/in/aditya-thallapelly-43a505134/" target="_blank" rel="noopener noreferrer" className="footer-href">LinkedIn</a></li>
              <li className="social-items"><a href="https://www.quora.com/profile/Aditya-Thallapelly" target="_blank" rel="noopener noreferrer" className="footer-href">Quora</a></li>
              <li className="social-items"><a href="https://github.com/aditya1208" target="_blank" rel="noopener noreferrer" className="footer-href">Github</a></li>
            </ul>            
        </footer>
    )
  }
}

export default FooterComp;
