(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{19:function(n,e,r){},22:function(n,e,r){"use strict";r.r(e);var t=r(1),o=r(0),c=r(10),i=r.n(c),a=(r(19),r(4)),u=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},l=function(n,e,r){for(var t=r.x,o=r.y,c=0;c<n.tetromino.length;c+=1)for(var i=0;i<n.tetromino[c].length;i+=1)if(0!==n.tetromino[c][i]&&(!e[c+n.pos.y+o]||!e[c+n.pos.y+o][i+n.pos.x+t]||"clear"!==e[c+n.pos.y+o][i+n.pos.x+t][1]))return!0},d=r(2),s=r(3),f=r.p+"static/media/bg.d63cfd51.png";function b(){var n=Object(d.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(d.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"]);return p=function(){return n},n}var x=s.a.div(p(),f),h=s.a.div(b()),j=r(8),g={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},v=function(){var n="IJLOSTZ",e=n[Math.floor(Math.random()*n.length)];return g[e]},O=function(n,e){var r=Object(o.useState)(u()),t=Object(a.a)(r,2),c=t[0],i=t[1];return Object(o.useEffect)((function(){i((function(r){return function(r){var t=r.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,r){e.forEach((function(e,o){0!==e&&(t[r+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided&&e(),t}(r)}))}),[n,e]),[c,i]};function m(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"]);return m=function(){return n},n}var y=s.a.div(m(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width}));function w(){var n=Object(d.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"]);return w=function(){return n},n}var k=s.a.div(w(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),S=function(n){var e=n.type;return Object(t.jsx)(k,{type:e,color:g[e].color})},I=function(n){var e=n.stage;return Object(t.jsx)(y,{width:e[0].length,height:e.length,children:e.map((function(n){return n.map((function(n,e){return Object(t.jsx)(S,{type:n[0]},e)}))}))})};function J(){var n=Object(d.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center; \n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return J=function(){return n},n}var A=s.a.div(J(),(function(n){return n.gameOver?"red":"#999"})),L=function(n){var e=n.gameOver,r=n.text;return Object(t.jsx)(A,{gameOver:e,children:r})};function E(){var n=Object(d.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return E=function(){return n},n}var T=s.a.button(E()),Z=function(n){var e=n.callback;return Object(t.jsx)(T,{onClick:e,children:"Start Game"})},z=function(){var n=Object(o.useState)(null),e=Object(a.a)(n,2),r=(e[0],e[1]),c=Object(o.useState)(!1),i=Object(a.a)(c,2),d=i[0],s=i[1],f=function(){var n=Object(o.useState)({pos:{x:0,y:0},tetromino:g[0].shape,collided:!1}),e=Object(a.a)(n,2),r=e[0],t=e[1];return[r,function(n){var e=n.x,r=n.y,o=n.collided;t((function(n){return Object(j.a)(Object(j.a)({},n),{},{pos:{x:n.pos.x+=e,y:n.pos.y+=r},collided:o})}))},Object(o.useCallback)((function(){t({pos:{x:4,y:0},tetromino:v().shape,collided:!1})}),[])]}(),b=Object(a.a)(f,3),p=b[0],m=b[1],y=b[2],w=O(p,y),k=Object(a.a)(w,2),S=k[0],J=k[1];console.log("re-render");var A=function(n){l(p,S,{x:n,y:0})||m({x:n,y:0})},E=function(){l(p,S,{x:0,y:1})?(p.pos.y<1&&(console.log("GAME OVER!!!"),s(!0),r(null)),m({x:0,y:0,collided:!0})):m({x:0,y:1,collided:!1})};return Object(t.jsx)(x,{role:"button",tabIndex:"0",onKeyDown:function(n){return function(n){var e=n.keyCode;d||(37===e?A(-1):39===e?A(1):40===e&&E())}(n)},children:Object(t.jsxs)(h,{children:[Object(t.jsx)(I,{stage:S}),Object(t.jsxs)("aside",{children:[d?Object(t.jsx)(L,{gameOver:d,text:"Game Over"}):Object(t.jsxs)("div",{children:[Object(t.jsx)(L,{text:"Score"}),Object(t.jsx)(L,{text:"Rows"}),Object(t.jsx)(L,{text:"Level"})]}),Object(t.jsx)(Z,{callback:function(){console.log("test"),J(u()),y(),s(!1)}})]})]})})},C=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(z,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(t.jsx)(C,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.bfd9db30.chunk.js.map