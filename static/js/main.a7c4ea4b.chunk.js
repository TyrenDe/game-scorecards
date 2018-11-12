(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(11),i=n(36),o=n(2),u=n(3),l=n(5),c=n(4),s=n(6),h=n(8),v=n(19),d={PrimaryBackgroundColor:"#41464e",SecondaryBackgroundColor:"#282c34",InverseBackgroundColor:"#EEE9E1",PrimaryColor:"white",InverseColor:"black",LinkColor:"#61dafb",LinkHoverColor:"#acf1ff"},f=v,m=f.default,g=(f.css,f.createGlobalStyle),p=(f.keyframes,f.ThemeProvider),b=m,k=n(35);function y(){var e=Object(h.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 1vmin);\n  color: ",";\n"]);return y=function(){return e},e}var O,j=b.div(y(),function(e){return e.theme.SecondaryBackgroundColor},function(e){return e.theme.PrimaryColor}),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement(j,null,a.createElement("nav",null,a.createElement("ul",null,a.createElement("li",null,a.createElement(k.a,{to:"/"},"Home")),a.createElement("li",null,a.createElement(k.a,{to:"/split"},"Split")),a.createElement("li",null,a.createElement(k.a,{to:"/about"},"About")))))}}]),t}(a.Component),x=n(38),S=n(37),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.title="Game Scorecards: "+this.getPageName()}}]),t}(a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"getPageName",value:function(){return"Home"}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("p",null,"This is the home page where we provide useful details."))}}]),t}(w);!function(e){e.Ace="A",e.King="K",e.Queen="Q",e.Jack="J",e.Ten="10",e.Nine="9",e.Eight="8",e.Seven="7",e.Six="6",e.Five="5",e.Four="4",e.Three="3",e.Two="2"}(O||(O={}));var R=O;function V(){var e=Object(h.a)(["\n  background: ",";\n  border: 1px solid ",";\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 34px;\n  height: 34px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  width: 55px;\n  color: ",';\n\n  ::after {\n    clear: both;\n    content: "";\n    display: table;\n  }\n']);return V=function(){return e},e}function T(){var e=Object(h.a)(["\n  background: ",";\n  color: ",";\n  border: 1px solid ",";\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 34px;\n  height: 34px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  width: 55px;\n"]);return T=function(){return e},e}var N=b.button(T(),function(e){return e.theme.SecondaryBackgroundColor},function(e){return e.theme.PrimaryColor},function(e){return e.theme.InverseBackgroundColor}),F=b("div")(V(),function(e){return e.isSelected?e.theme.PrimaryBackgroundColor:e.theme.InverseBackgroundColor},function(e){return e.isSelected?e.theme.PrimaryColor:e.theme.SecondaryBackgroundColor},function(e){return e.isSelected?e.theme.PrimaryColor:e.theme.InverseColor}),P=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){this.props.onClick(e)}},{key:"renderValue",value:function(e){return a.createElement(F,{isSelected:this.props.selected==e},this.props.values[e])}},{key:"render",value:function(){var e=this;return a.createElement("div",{className:"splitRow"},a.createElement(N,{onClick:function(t){e.handleClick(t)}},this.props.rank),this.renderValue(0),this.renderValue(1),this.renderValue(2),this.renderValue(3),this.renderValue(4),this.renderValue(5))}}]),t}(a.Component);function B(){var e=Object(h.a)(["\n  float: left;\n"]);return B=function(){return e},e}function A(){var e=Object(h.a)(["\n  margin: 0px 0px 0px 40px;\n"]);return A=function(){return e},e}function J(){var e=Object(h.a)(["\n  float: left;\n  margin: 0px 20px 0px 20px;\n"]);return J=function(){return e},e}function K(){var e=Object(h.a)(["\n  width: ",'px;\n  margin-bottom: 10px;\n\n   ::after {\n    clear: both;\n    content: "";\n    display: table;\n  }\n']);return K=function(){return e},e}var Q=b.div(K(),385),I=b.div(J()),z=b(I)(A()),H=b.button(B()),D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={negatives:0,values:{A:0,K:0,Q:0,J:0,10:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0}},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"calculateScore",value:function(){return-5*this.state.negatives+t.getRankValues(R.Ace)[this.state.values[R.Ace]]+t.getRankValues(R.King)[this.state.values[R.King]]+t.getRankValues(R.Queen)[this.state.values[R.Queen]]+t.getRankValues(R.Jack)[this.state.values[R.Jack]]+t.getRankValues(R.Ten)[this.state.values[R.Ten]]+t.getRankValues(R.Nine)[this.state.values[R.Nine]]+t.getRankValues(R.Eight)[this.state.values[R.Eight]]+t.getRankValues(R.Seven)[this.state.values[R.Seven]]+t.getRankValues(R.Six)[this.state.values[R.Six]]+t.getRankValues(R.Five)[this.state.values[R.Five]]+t.getRankValues(R.Four)[this.state.values[R.Four]]+t.getRankValues(R.Three)[this.state.values[R.Three]]+t.getRankValues(R.Two)[this.state.values[R.Two]]}},{key:"renderRow",value:function(e){var n=this;return a.createElement(P,{rank:e,values:t.getRankValues(e),selected:this.state.values[e],onClick:function(t){n.addOne(e)}})}},{key:"copyState",value:function(){return{negatives:this.state.negatives,values:{A:this.state.values[R.Ace],K:this.state.values[R.King],Q:this.state.values[R.Queen],J:this.state.values[R.Jack],10:this.state.values[R.Ten],9:this.state.values[R.Nine],8:this.state.values[R.Eight],7:this.state.values[R.Seven],6:this.state.values[R.Six],5:this.state.values[R.Five],4:this.state.values[R.Four],3:this.state.values[R.Three],2:this.state.values[R.Two]}}}},{key:"addOne",value:function(e){var t=this.copyState();t.values[e]=(t.values[e]+1)%6,this.setState(t)}},{key:"addNegative",value:function(){var e=this.copyState();e.negatives++,this.setState(e)}},{key:"subNegative",value:function(){var e=this.copyState();e.negatives--,e.negatives<0&&(e.negatives=0),this.setState(e)}},{key:"render",value:function(){var e=this;return a.createElement("div",null,a.createElement(Q,null,a.createElement(H,{onClick:function(){return e.subNegative()}},"+5"),a.createElement(I,null,"Negative: ",-5*this.state.negatives),a.createElement(H,{onClick:function(){return e.addNegative()}},"-5"),a.createElement(z,null,"Score: ",this.calculateScore())),this.renderRow(R.Ace),this.renderRow(R.King),this.renderRow(R.Queen),this.renderRow(R.Jack),this.renderRow(R.Ten),this.renderRow(R.Nine),this.renderRow(R.Eight),this.renderRow(R.Seven),this.renderRow(R.Six),this.renderRow(R.Five),this.renderRow(R.Four),this.renderRow(R.Three),this.renderRow(R.Two))}}],[{key:"getRankValues",value:function(e){switch(e){case R.Ace:return[0,30,70,120,180,200];case R.King:case R.Queen:case R.Jack:return[0,20,50,90,140,200];case R.Ten:case R.Nine:case R.Eight:case R.Seven:case R.Six:case R.Five:case R.Four:case R.Three:return[0,10,30,60,100,200];case R.Two:return[0,5,20,40,70,200];default:return[]}}}]),t}(a.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"getPageName",value:function(){return"Split"}},{key:"render",value:function(){return a.createElement(D,null)}}]),t}(w),G=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"getPageName",value:function(){return"About"}},{key:"render",value:function(){return a.createElement("div",null,"This site was created by Shane DeSeranno and Donald Gill to aid in game scoring.")}}]),t}(w);function M(){var e=Object(h.a)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 1vmin);\n  color: ",";\n  padding: 5px;\n"]);return M=function(){return e},e}var U=b.div(M(),function(e){return e.theme.PrimaryColor}),q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement(U,null,a.createElement(x.a,null,a.createElement(S.a,{exact:!0,path:"/",component:C}),a.createElement(S.a,{path:"/split",component:L}),a.createElement(S.a,{path:"/about",component:G})))}}]),t}(a.Component);function W(){var e=Object(h.a)(['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: ',";\n  }\n\n  nav ul {\n    list-style: none;\n    overflow: hidden;\n    position: relative;\n  }\n\n  nav ul li {\n    float: left;\n    margin: 0 20px 0 0;\n  }\n\n  a, a:visited {\n    color: ",";\n  }\n\n  a:hover {\n    color: ",";\n  }\n"]);return W=function(){return e},e}var X=g(W(),function(e){return e.theme.PrimaryBackgroundColor},function(e){return e.theme.LinkColor},function(e){return e.theme.LinkHoverColor}),Y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement(p,{theme:d},a.createElement("div",null,a.createElement(X,null),a.createElement(E,null),a.createElement(q,null)))}}]),t}(a.Component);r.render(a.createElement(i.a,null,a.createElement(Y,null)),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.a7c4ea4b.chunk.js.map