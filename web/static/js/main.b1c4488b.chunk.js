(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),c=n.n(r),o=(n(15),n(1)),i=n(2),l=n(4),u=n(3),m=n(5),p=n(6),h=(n(16),function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={servers:[],websocketConnected:!0},n.websocketMessage=n.websocketMessage.bind(Object(p.a)(Object(p.a)(n)));var a,s=window.location;return a="https:"===s.protocol?"wss:":"ws:",a+="//"+s.host,a+=s.pathname+"getstats",n.socket=new WebSocket(a),n.socket.onopen=function(e){console.log("websocket opened"),n.setState({websocketConnected:!0})},n.socket.onclose=function(e){console.log("websocket closed"),n.setState({websocketConnected:!1})},n.socket.onmessage=function(e){n.websocketMessage(e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"websocketMessage",value:function(e){var t=JSON.parse(e.data),n=[];for(var a in t)n.push(t[a]);this.setState({servers:n})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"Websocket"},s.a.createElement(b,{state:this.state.websocketConnected})),s.a.createElement("div",{className:"Servers"},s.a.createElement("table",null,s.a.createElement(k,null),s.a.createElement("tbody",null,s.a.createElement(d,{servers:this.state.servers})))))}}]),t}(a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("span",{className:"Websocket-".concat(this.props.state)},!0===this.props.state?"Connected":"Disconnected")}}]),t}(a.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.servers.map(function(e){return s.a.createElement(v,{key:e.stats.hostname,server:e})});return s.a.createElement("div",null,e)}}]),t}(a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("tr",{className:"Server"},s.a.createElement("td",{className:"Hostname"},this.props.server.stats.hostname),s.a.createElement("td",{className:"Cpu"},!0===this.props.server.online?this.props.server.stats.cpu+"%":"OFFLINE"),s.a.createElement("td",{className:"Memory"},!0===this.props.server.online?this.props.server.stats.memory+"%":"OFFLINE"),s.a.createElement("td",{className:"Disk"},!0===this.props.server.online?this.props.server.stats.disk+"%":"OFFLINE"))}}]),t}(a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("thead",null,s.a.createElement("tr",{className:"ServersHeading"},s.a.createElement("th",null,"Hostname"),s.a.createElement("th",null,"CPU Usage"),s.a.createElement("th",null,"Memory Usage"),s.a.createElement("th",null,"Disk Usage")))}}]),t}(a.Component),O=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b1c4488b.chunk.js.map