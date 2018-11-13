(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,n,t){e.exports=t(35)},35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(11),o=t(37),c=t(2),i=t(3),l=t(5),u=t(4),s=t(6),f=t(8),m=t(20),h={PrimaryBackgroundColor:"#41464e",SecondaryBackgroundColor:"#282c34",InverseBackgroundColor:"#EEE9E1",PrimaryColor:"white",InverseColor:"black",LinkColor:"#61dafb",LinkHoverColor:"#acf1ff"},d=m,v=d.default,p=(d.css,d.createGlobalStyle),b=(d.keyframes,d.ThemeProvider),g=v,k=t(36);function y(){var e=Object(f.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 1vmin);\n  color: ",";\n"]);return y=function(){return e},e}var O,j=g.div(y(),function(e){return e.theme.SecondaryBackgroundColor},function(e){return e.theme.PrimaryColor}),E=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.createElement(j,null,r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(k.a,{to:"/"},"Home")),r.createElement("li",null,r.createElement(k.a,{to:"/split"},"Split")),r.createElement("li",null,r.createElement(k.a,{to:"/about"},"About")))))}}]),n}(r.Component),x=t(39),C=t(38),S=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){document.title="Game Scorecards: "+this.getPageName()}}]),n}(r.Component),w=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"getPageName",value:function(){return"Home"}},{key:"render",value:function(){return r.createElement("div",null,r.createElement("p",null,"This is the home page where we provide useful details."))}}]),n}(S),N=t(14);!function(e){e.Ace="A",e.King="K",e.Queen="Q",e.Jack="J",e.Ten="10",e.Nine="9",e.Eight="8",e.Seven="7",e.Six="6",e.Five="5",e.Four="4",e.Three="3",e.Two="2"}(O||(O={}));var P=[O.Ace,O.King,O.Queen,O.Jack,O.Ten,O.Nine,O.Eight,O.Seven,O.Six,O.Five,O.Four,O.Three,O.Two];function B(){var e=Object(f.a)(["\n  background: ",";\n  border: 1px solid ",";\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 34px;\n  height: 34px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  width: 55px;\n  color: ",';\n\n  ::after {\n    clear: both;\n    content: "";\n    display: table;\n  }\n']);return B=function(){return e},e}function T(){var e=Object(f.a)(["\n  background: ",";\n  color: ",";\n  border: 1px solid ",";\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 34px;\n  height: 34px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  width: 55px;\n"]);return T=function(){return e},e}var F=g.button(T(),function(e){return e.theme.SecondaryBackgroundColor},function(e){return e.theme.PrimaryColor},function(e){return e.theme.InverseBackgroundColor}),A=g("div")(B(),function(e){return e.isSelected?e.theme.PrimaryBackgroundColor:e.theme.InverseBackgroundColor},function(e){return e.isSelected?e.theme.PrimaryColor:e.theme.SecondaryBackgroundColor},function(e){return e.isSelected?e.theme.PrimaryColor:e.theme.InverseColor}),I=function(e){function n(e){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).call(this,e))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"handleClick",value:function(e){this.props.onClick(e)}},{key:"render",value:function(){var e=this;return r.createElement("div",{className:"splitRow"},r.createElement(F,{onClick:function(n){e.handleClick(n)}},this.props.rank),this.props.values.map(function(n,t){return r.createElement(A,{isSelected:e.props.selected==t},e.props.values[t])}))}}]),n}(r.Component);function J(){var e=Object(f.a)(["\n  float: left;\n"]);return J=function(){return e},e}function R(){var e=Object(f.a)(["\n  margin: 0px 0px 0px 40px;\n"]);return R=function(){return e},e}function z(){var e=Object(f.a)(["\n  float: left;\n  margin: 0px 20px 0px 20px;\n"]);return z=function(){return e},e}function H(){var e=Object(f.a)(["\n  width: ",'px;\n  margin-bottom: 10px;\n\n   ::after {\n    clear: both;\n    content: "";\n    display: table;\n  }\n']);return H=function(){return e},e}var K=g.div(H(),385),Q=g.div(z()),D=g(Q)(R()),L=g.button(J()),V=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={negatives:0,values:{A:0,K:0,Q:0,J:0,10:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0}},t}return Object(s.a)(n,e),Object(i.a)(n,[{key:"calculateScore",value:function(){var e=-5*this.state.negatives,t=!0,r=!1,a=void 0;try{for(var o,c=P[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var i=o.value;e+=n.getRankValues(i)[this.state.values[i]]}}catch(l){r=!0,a=l}finally{try{t||null==c.return||c.return()}finally{if(r)throw a}}return e}},{key:"renderRow",value:function(e){var t=this;return r.createElement(I,{rank:e,values:n.getRankValues(e),selected:this.state.values[e],onClick:function(n){t.addOne(e)}})}},{key:"addOne",value:function(e){var n=Object(N.a)({},this.state);n.values[e]=(n.values[e]+1)%6,this.setState(n)}},{key:"addNegative",value:function(){var e=Object(N.a)({},this.state);e.negatives++,this.setState(e)}},{key:"subNegative",value:function(){var e=Object(N.a)({},this.state);e.negatives--,e.negatives<0&&(e.negatives=0),this.setState(e)}},{key:"render",value:function(){var e=this;return r.createElement("div",null,r.createElement(K,null,r.createElement(L,{onClick:function(){return e.addNegative()}},"-5"),r.createElement(Q,null,"Negative: ",-5*this.state.negatives),r.createElement(L,{onClick:function(){return e.subNegative()}},"+5"),r.createElement(D,null,"Score: ",this.calculateScore())),P.map(function(t){return r.createElement(I,{rank:t,values:n.getRankValues(t),selected:e.state.values[t],onClick:function(n){e.addOne(t)}})}))}}],[{key:"getRankValues",value:function(e){switch(e){case O.Ace:return[0,30,70,120,180,200];case O.King:case O.Queen:case O.Jack:return[0,20,50,90,140,200];case O.Ten:case O.Nine:case O.Eight:case O.Seven:case O.Six:case O.Five:case O.Four:case O.Three:return[0,10,30,60,100,200];case O.Two:return[0,5,20,40,70,200];default:return[]}}}]),n}(r.Component),G=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"getPageName",value:function(){return"Split"}},{key:"render",value:function(){return r.createElement(V,null)}}]),n}(S),M=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"getPageName",value:function(){return"About"}},{key:"render",value:function(){return r.createElement("div",null,"This site was created by Shane DeSeranno and Donald Gill to aid in game scoring.")}}]),n}(S);function U(){var e=Object(f.a)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 1vmin);\n  color: ",";\n  padding: 5px;\n"]);return U=function(){return e},e}var q=g.div(U(),function(e){return e.theme.PrimaryColor}),W=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.createElement(q,null,r.createElement(x.a,null,r.createElement(C.a,{exact:!0,path:"/",component:w}),r.createElement(C.a,{path:"/split",component:G}),r.createElement(C.a,{path:"/about",component:M})))}}]),n}(r.Component);function X(){var e=Object(f.a)(['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: ',";\n  }\n\n  nav ul {\n    list-style: none;\n    overflow: hidden;\n    position: relative;\n  }\n\n  nav ul li {\n    float: left;\n    margin: 0 20px 0 0;\n  }\n\n  a, a:visited {\n    color: ",";\n  }\n\n  a:hover {\n    color: ",";\n  }\n"]);return X=function(){return e},e}var Y=p(X(),function(e){return e.theme.PrimaryBackgroundColor},function(e){return e.theme.LinkColor},function(e){return e.theme.LinkHoverColor}),Z=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.createElement(b,{theme:h},r.createElement(r.Fragment,null,r.createElement(Y,null),r.createElement(E,null),r.createElement(W,null)))}}]),n}(r.Component);a.render(r.createElement(o.a,null,r.createElement(Z,null)),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.9ead3a23.chunk.js.map