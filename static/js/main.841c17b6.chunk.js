(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(8),o=a.n(c),r=(a(13),a(5)),i=a(3),l=a(4),u=a(7),d=a(6),h=(a(14),a(0)),j=["Guess the 2022 Season Mascot","Create a hack promoting equal access to CS education and host it on a  Tech domain!","Build a Search Hack using Jina AI","Build a Water Hack","Share your Chrome Dino Score","Create a Graphic about a Misconception in Technology","Build a Recipe Maker","Develop or Redesign your Portfolio Website","Use a Maps API","Create a Scheduler","Create a Financial Hack","Write a blog post about your plans for the 2022 Hackathon Season","Create a Random Number Generator","Build a Discord bot using Replit"],b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={tasks:j},e.handleSubmit=function(t){e.setState({tasks:[].concat(Object(r.a)(e.state.tasks),[t])})},e.handleDelete=function(t){var a=Object(r.a)(e.state.tasks);a.splice(t,1),e.setState({tasks:a})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsxs)("div",{className:"card frame",children:[Object(h.jsx)(p,{numTodos:this.state.tasks.length}),Object(h.jsx)(f,{tasks:this.state.tasks,onDelete:this.handleDelete})]})})}}]),a}(s.a.Component),p=(s.a.Component,function(e){return Object(h.jsx)("div",{className:"card-header",children:Object(h.jsxs)("h1",{className:"card-header-title header",children:["You have ",e.numTodos," Challenges to Try"]})})}),f=function(e){var t=e.tasks.map((function(t,a){return Object(h.jsx)(m,{content:t,id:a,onDelete:e.onDelete},a)}));return Object(h.jsx)("div",{className:"list-wrapper",children:t})},m=function(e){return Object(h.jsxs)("div",{className:"list-item",children:[Object(h.jsx)("div",{children:e.content}),Object(h.jsx)("div",{class:"delete is-pulled-right",onClick:function(){e.onDelete(e.id)},children:"Done"})]})},k=b,O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(k,{}),document.querySelector("#root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.841c17b6.chunk.js.map