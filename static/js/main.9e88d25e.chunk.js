(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),o=t.n(r),i=(t(78),t(79),t(7)),c=t(8),s=t(11),m=t(9),d=t(10),u=t(71),h=t.n(u),y=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"container header"},l.a.createElement("img",{src:h.a,alt:"Let's play soccer",className:"headerLogo"}))}}]),a}(n.Component),p=t(72),b=t(21),f=t(24),g=t.n(f),E={apiKey:"AIzaSyDk9CxUO-wSaaCPEmFhih5OtkojPR5bdGw",authDomain:"soccer-gameon-final.firebaseapp.com",databaseURL:"https://soccer-gameon-final.firebaseio.com",projectId:"soccer-gameon-final",storageBucket:"",messagingSenderId:"1034908759476"};var v=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).getTodaysDate=function(){var e=new Date;return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()},e.gameOnNotification=function(){o.a.render(l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"Game On!"}}),document.getElementById("setGameStatus"))},e.waitingNotification=function(){o.a.render(l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"Waiting for players.."}}),document.getElementById("setGameStatus"))},e.gameScheduledNotification=function(){o.a.render(l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"Join the game"}}),document.getElementById("gameDayStatus"))},e.gameNotScheduledNotification=function(){o.a.render(l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"No game scheduled today.."}}),document.getElementById("gameDayStatus"))},e.gameStatus=function(){var a=e.gameScheduledNotification,t=e.gameNotScheduledNotification,n=(new Date).getDay(),l=0===n||2===n||4===n||6===n;!0===l?t():a();var r=e.gameOnNotification,o=e.waitingNotification,i=e.state.totalPlayers;!1===l&&i.length>=8?r():o()},g.a.initializeApp(E),e.state={teamColor:"",name:"",totalPlayers:[]},e.handleChange=e.handleChange.bind(Object(b.a)(Object(b.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=g.a.database().ref("players"),t={teamColordb:this.state.teamColor,namedb:this.state.name};a.push(t),this.setState({teamColor:"",name:""}),this.gameStatus()}},{key:"componentDidUpdate",value:function(e){e!==this.state&&this.gameStatus()}},{key:"componentDidMount",value:function(){var e=this;g.a.database().ref("players").on("value",function(a){var t=a.val(),n=[];for(var l in t)n.push({id:l,teamColordb:t[l].teamColordb,namedb:t[l].namedb});e.setState({totalPlayers:n})}),this.removeAllPlayers()}},{key:"removeItem",value:function(e){g.a.database().ref("/players/".concat(e)).remove(),console.log("player removed")}},{key:"removeAllPlayers",value:function(){var e=g.a.database().ref();(new Date).getHours()>=14?(e.remove(),console.log("All players removed")):console.log("Not 2pm yet")}},{key:"render",value:function(){var e=this,a=this.state.name.length>0,t=(new Date).getDay(),n=0===t||2===t||4===t||6===t,r=function(e){return{name:e.length<=1}}(this.state.name);return l.a.createElement("div",{className:"container bodyContent"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("h1",null,"Soccer Game Day - ",l.a.createElement("span",{id:"setDate"},this.getTodaysDate())),l.a.createElement("h2",{id:"setGameStatus"},"Players Count Status"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("h3",{id:"gameDayStatus"},"Game Schedule Status"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-row"},l.a.createElement("input",{type:"hidden",ref:"uid"}),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"playerName"},"First Name"),l.a.createElement("input",{id:"playerName",type:"text",ref:"name",name:"name",className:r.name?"form-control error":"form-control",placeholder:"First Name",pattern:"[a-zA-Z]+",value:this.state.name,onChange:this.handleChange,disabled:n,autoFocus:!0,autoComplete:"off"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",null,"Team",l.a.createElement("br",null),l.a.createElement("input",{type:"radio",name:"teamColor",required:!0,className:"teamColorRadio",value:"Any",checked:"Any"===this.state.teamColor,onChange:this.handleChange,disabled:n}),"Any",l.a.createElement("input",{type:"radio",name:"teamColor",className:"teamColorRadio",value:"White",checked:"White"===this.state.teamColor,onChange:this.handleChange,disabled:n}),"White",l.a.createElement("input",{type:"radio",name:"teamColor",className:"teamColorRadio",value:"Dark",checked:"Dark"===this.state.teamColor,onChange:this.handleChange,disabled:n}),"Dark"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!a},"Save")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12"},l.a.createElement("table",{className:"table-striped table-bordered playersList"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Team"),l.a.createElement("th",null,"Option"))),l.a.createElement("tbody",null,this.state.totalPlayers.map(function(a){return l.a.createElement("tr",{key:a.id},l.a.createElement("td",null,a.namedb),l.a.createElement("td",null,a.teamColordb),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.removeItem(a.id)},className:"btn btn-link"},"Delete")))}))))))}}]),a}(n.Component),k=[{title:"Game rules",rulesTab:"\n    1. Minimum of 8 players required to schedule a game. Game is on Monday, Wednesday and Friday between 12PM to 1PM.\n    2. Pick a team color of your choice. This helps everyone know if a balanced team can be formed.\n    3. This is a friendly game, keep it simple.\n    4. Players rotate being Goalkeeper, can also volunteer to catch a breath.\n    5. All experience levels welcome."},{title:"How to use the site?",rulesTab:'\n    1. Registration only works on Monday, Wednesday and Friday. If you see entry fields disabled, there is no game today.\n    2. If there are at least 8 players, you will see the status change from "waiting for players.." to "Game on!".\n    3. Name cannot be empty and only alphabets are accepted. Both name and team are required.\n    4. You can delete your entry, if you need to.\n    5. All entries of that day will be deleted after 2PM EST.\n    '},{title:"Future enhancements",rulesTab:"\n    1. Players will receive game status emails based on the minimum player requirement, 30 minutes before the game.\n    2. Social sign-in options, to let a player only delete their entry and not others.\n    3. Progressive web app.\n    "}],A=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container rulesAccordion"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("ul",{className:"accordion-list"},k.map(function(e,a){return l.a.createElement("li",{className:"accordion-list__item",key:a},l.a.createElement(N,e))}))))}}]),a}(n.Component),N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={tabIsOpen:!1},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.rulesTab,n=a.title,r=this.state.tabIsOpen;return l.a.createElement("div",{className:r?"accordion-item accordion-item--opened":"accordion-item",onClick:function(){e.setState({tabIsOpen:!r})}},l.a.createElement("div",{className:"accordion-item__line"},l.a.createElement("h3",{className:"accordion-item__title"},n),l.a.createElement("span",{className:"accordion-item__icon"})),l.a.createElement("div",{className:"accordion-item__inner"},l.a.createElement("div",{className:"accordion-item__content"},l.a.createElement("p",{className:"accordion-item__paragraph"},t))))}}]),a}(n.Component),w=A,C=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer container"},l.a.createElement("p",{className:"info-text"},"A website to help minimize few tasks to schedule a soccer game for my friends. This site was built using ReactJs and Firebase as backend DB."),l.a.createElement("ul",{className:"footer-social"},l.a.createElement("li",{className:"social-items"},"Be my social friend @"),l.a.createElement("li",{className:"social-items"},l.a.createElement("a",{href:"https://www.linkedin.com/in/aditya-thallapelly-43a505134/",target:"_blank",rel:"noopener noreferrer",className:"footer-href"},"LinkedIn")),l.a.createElement("li",{className:"social-items"},l.a.createElement("a",{href:"https://www.quora.com/profile/Aditya-Thallapelly",target:"_blank",rel:"noopener noreferrer",className:"footer-href"},"Quora")),l.a.createElement("li",{className:"social-items"},l.a.createElement("a",{href:"https://github.com/aditya1208",target:"_blank",rel:"noopener noreferrer",className:"footer-href"},"Github"))))}}]),a}(n.Component),S=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"centeredContent"},l.a.createElement(y,null),l.a.createElement(v,null),l.a.createElement("div",{className:"rulesPartition container"}),l.a.createElement(w,null),l.a.createElement(C,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAd+SURBVHhe7Z11yC3VGoeP3XFRwbgG1r3YilhXLCxM9GJgJzaKLXixMVFUELswsMUWCzuxA/WIil3YfY3fA2dgs/jN2Wtm1t7fN7PXA88f59uz5zvr3d+eWfG+ayaMCIvL/8nH5UfyV/nxpH/zc17PDIE55EXyd/nXZOT1iyXHZwbEEnKidB9AmRy/pMwk5p/yQ+mC3k8uZbw/k4gp5BPSBTvWJyXnySRga+mCXNVtZSYBTb8dhU/JTEPmln9IF+Cqcp55ZaYB60kX3LpuKDMN2EW6wNZ1N5lpwPbSBbauO8tMA9aWLrB1XVdmGjCbZJ7KBbeqv0nOl2nI3dIFuKr3yEwC1pQuwFXl8pdJxHXSBTnW62UmITPJl6ULdj953ywykxjWNh6ULuhlPiTnlJkA/sJZl9hE7i/PkDfK5+Rn8iv5jnxanic3klPJkGnkQfIL6T6AQl7nOI4fSaaVLJsyNbGvPE1y3X5Gfi5d0Pr5vtxDTi1D+IC3lKwe3ieflw9M+jc/5/XOM5dcRW4nj5aXSC4JBC7VBKDzDflfOZLrGTPK5SRrEAT9Ssll5GvpgjVM+X+sIzvP6vJc+ab8U7pgjCfvlcvLzsEN7yrpGj3e5RJ5jVxAdgYuSa6xbfInebKcXY4FSTsPt0nXyDZKN5feneuRDYIdZTFQfUsuLRtDz+X/Mmxcm31bbiEHxayS7rz7vXT9G0OvhW8KuUtd+nAYkywmU0Lvk2+D+324vmw1t0jXsFRyfzlKphits5T8o3S/p3AD2VpICx1WF/tFWfcaz7jsMunO2+sPkstZa7lCuoYNyl/kEdLNj5XBJe8l6c4XephsLYwd+mWvD8rH5CKyH1vJb6U7RyiTpK2e1jlHuoYNy+/k7tLB/YZZC/c+57Wy1TPKTFBys3WNG7Y3yd76Eb65JGW7Y51nyyqXwHHJidI1bqyk+orUoI3ll5N+1k9u4Mx4tx6WUcfDrHEovb3YHh/jkKVkJ6An4hrZFhk3tbpr28v0ktkA19DxLjMYR8pOLZDtJV1jU0l2IyPlq2XKLvUnsnP5XMzAMvnmGpxK1kYKFpJ0rftNdfTzYUl9SueglMw1OKWryhDSf6hZ56/cvadMbvCnyGFN5Q8VrrsvSNfwVJJxMjmmk0wOxkyD0PWlC9xZyK9yDU/prjIWxhx3SNfNZVDYqSVhxyMybHhKWSmcQVaFHLJj5M2SzBo+1M4n1f1HuiCmlIS8TCS3SxfEVJJ5sqDMRLCMHPQC1K0yEwkDNBfElFIynYlgYTnoBajXZd67JBLKCVwQU3qAzEQwjxz0AtT3MldERcKUgwtiSpmnykRAfu030gUxlfTcSCHKREBSmgvi5Kw6z0W1VCYCpi8+lS6IZZKAdlbws35uLjMR7CddAMukDI5tLigScq87eU/rszyGAesG70oXxDI3lYzm3WtlHi4zEewgXQDLJFkAjpfudSdd6VxvHgGj5VekC6KTMcT8Eqiudcc4ud9kIthMugCWeYgEai3c62WuIDMRVNkxlLKAYp36TOmOcbKSl4mgyrZJDOiKRAQ+FLbTcMc5O5G2OQyqbCzGlhcF7HfijnGSXJekdq/rULgfuwDFxjJkvRe4oskyT5CZCKpsKLaPLPiHpJrJHRfKmgqzx5k+LCpjN5th+6Xe0XWVlFI+9EwEF0oXwFAuaewe1EuVXtkaMtMH9k6P3ba190YOFFG645x0kTMRnCRdAEPDGzlUqZ7aU2YiiC0T7r2Rw5TyPemODaXKqk424kgSsyL4rAynyatsGX66zETyqnRBLKT3Fd7I4XLpjg/l/fTiMpEcJ10gC7lPhMwsmeV1x4eSmZ6pABt2la2DU0TvVvQo0nfHO1u9gctYwdLrqbKoTGItnQSHskzCR2UYeCdlbzkbsSH9Etb+JV3wnQfKzIBhP0QX/FDuMWO1b+LIwLpHbG36+TIzYCiedMF35mzEIUD9ngt+KNuVp4AyCPLDKHNjApQ8471l5ws5Y2AeK3YSkt1Rm8BGnjzF0527kE0AVpMjy8HSBSaUbMS6BfpUzV4g3XnL5DEZI5n9GPs0HHbXrgNBvVO6c/aTJeSRGu+sJF0gQrmk1c1GrJqkHXqsHBliS9rYmbQO5ATHLiGXyTMNYzbDbD3sixW7a9zKsg43SHe+ql4qO8820jU+lIez1IGNjVPVMLKq2fntNO6SrvGhO8k60MV156vrirKzsNlXTH06G8bUzUbkg3TnrCsPEOssh0rX6FC3iBULa/XunHXt9OO8Y8YefIOaTGUwqnfnrWtnt+cg19c1OJR90pvAwyndeetaFA91DlYQXYND15JNmSjduavKUnRnuV+6Rvf6mkxBnXp4J8+s6iwxO38yFZ4CxiIfSPc7YqUcu9NjEGZtXcML2e2TdKBUUI0VO70fyn6+y8pO0+8BlVxmUsPT2KpulsxDWlr/8K4Y/i3L0kzJB2aOaxBQncu+ve73hlI8OlJLxXwobApQXEqYkWUjzEFv100iN7tn8/i/n2Xvh8A3iAe38G0a2Zwvbpasb/c+vWZYsPo4n6QOnlqWMV4dnDDhb35kKZplwXKjAAAAAElFTkSuQmCC"},73:function(e,a,t){e.exports=t(159)},79:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.9e88d25e.chunk.js.map