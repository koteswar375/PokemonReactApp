(this["webpackJsonppokemon-react"]=this["webpackJsonppokemon-react"]||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(6),c=t.n(r),m=(t(12),t(4)),l=t(2),u=function(e,n){switch(n.type){case"RELEASE":return{pokemons:[].concat(Object(l.a)(e.pokemons),[n.pokemon]),capturedPokemons:e.capturedPokemons.filter((function(e){return e!==n.pokemon}))};case"CAPTURE":return{pokemons:e.pokemons.filter((function(e){return e!==n.pokemon})),capturedPokemons:[].concat(Object(l.a)(e.capturedPokemons),[n.pokemon])};case"ADD":return{pokemons:[].concat(Object(l.a)(e.pokemons),[n.pokemon]),capturedPokemons:Object(l.a)(e.capturedPokemons)};default:return e}},s=Object(a.createContext)(),i=function(e){var n=Object(a.useReducer)(u,{pokemons:[{id:1,name:"Bulbasaur"},{id:2,name:"Charmander"},{id:3,name:"Squirtle"}],capturedPokemons:[]}),t=Object(m.a)(n,2),r=t[0],c=t[1];return o.a.createElement(s.Provider,{value:{pokemons:r.pokemons,capturedPokemons:r.capturedPokemons,capture:function(e){c({type:"CAPTURE",pokemon:e})},release:function(e){c({type:"RELEASE",pokemon:e})},add:function(e){c({type:"ADD",pokemon:e})}}},e.children)},p=function(e){var n=Object(a.useContext)(s),t=n.pokemons,r=n.capture;return o.a.createElement("div",{className:"pokemon-list center-align z-depth-2 "},o.a.createElement("h3",null,"Pokemon List"),t.map((function(e){return o.a.createElement("div",null,o.a.createElement("h6",null,e.name),o.a.createElement("button",{className:"btn",onClick:function(){return r(e)}},"Capture"))})))},d=function(e){var n=Object(a.useContext)(s),t=n.capturedPokemons,r=n.release;return o.a.createElement("div",{className:"pokemon-captured-list center-align z-depth-2"},o.a.createElement("h3",null,"Pokemon Captured List"),t.map((function(e){return o.a.createElement("div",null,o.a.createElement("h6",null,e.name),o.a.createElement("button",{className:"btn",onClick:function(){return r(e)}},"Release"))})))},k=function(e){var n=Object(a.useState)(""),t=Object(m.a)(n,2),r=t[0],c=t[1],l=Object(a.useContext)(s).add;return o.a.createElement("form",{className:"pokemon-form"},o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{type:"text",value:r,id:"name",placeholder:"Enter name of pokemon",onChange:function(e){return c(e.target.value)}}),o.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault(),l({name:r,id:Math.floor(103838*Math.random())}),c("")}},"Add Pokemon")))};var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i,null,o.a.createElement("div",{class:"pokemon-container"},o.a.createElement(p,null),o.a.createElement(d,null)),o.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f4c903e7.chunk.js.map