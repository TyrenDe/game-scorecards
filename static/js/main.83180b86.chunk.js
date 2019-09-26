(window["webpackJsonpgame-scorecards"]=window["webpackJsonpgame-scorecards"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a(9),s=a(38),c=a(30),i=a(79),l=a(46),p=a(72),u=a(51);!function(e){e.A="A",e.K="K",e.Q="Q",e.J="J",e.Ten="10",e.Nine="9",e.Eight="8",e.Seven="7",e.Six="6",e.Five="5",e.Four="4",e.Three="3",e.Two="2",e.Negative="Negative"}(n||(n={}));var h,m="SPLIT_RESET_ALL",d="SPLIT_ADD_VALUE",b="SPLIT_REMOVE_VALUE",y={scores:{}};!function(e){e[e.Light=0]="Light",e[e.Dark=1]="Dark"}(h||(h={}));var g="SYSTEM_CHANGE_THEME",v="SYSTEM_ADD_NAME",f="SYSTEM_REMOVE_NAME",O={selectedTheme:h.Dark,names:[]};var j,E=Object(l.c)({split:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return Object(u.a)(e,(function(e){switch(t.type){case m:e.scores={};break;case d:e.scores[t.name]||(e.scores[t.name]={values:{A:0,K:0,Q:0,J:0,10:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0,Negative:0}});var a=e.scores[t.name].values[t.rank],r=t.rank===n.Negative?500:6;e.scores[t.name].values[t.rank]=(a+1)%r;break;case b:e.scores[t.name]||(e.scores[t.name]={values:{A:0,K:0,Q:0,J:0,10:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0,Negative:0}});var o=e.scores[t.name].values[t.rank];e.scores[t.name].values[t.rank]=Math.max(0,o-1)}}))},system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return Object(u.a)(e,(function(e){switch(t.type){case g:e.selectedTheme=t.newTheme;break;case v:e.names.push(t.name);break;case f:var a=e.names.indexOf(t.name);a>-1&&e.names.splice(a,1)}}))}}),k=Object(l.d)(E,(j=[p.a],l.a.apply(void 0,Object(i.a)(j)))),w=a(12),N=a(13),R=a(16),D=a(15),A=a(17),C=a(154),S=a(144),T=a(57),P=a(131),V=a(78),x={palette:{primary:T.a,secondary:P.a,type:"light"}},I={palette:{primary:T.a,secondary:P.a,type:"dark"}},L=function(){function e(){Object(w.a)(this,e)}return Object(N.a)(e,null,[{key:"getTheme",value:function(t){switch(t){case h.Light:return e.light}return e.dark}}]),e}();L.light=Object(V.a)(x),L.dark=Object(V.a)(I);var F,K=a(132),_=a(148),W=a(135),M=a(39),J=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("nav",null,r.createElement(K.a,{position:"static"},r.createElement(_.a,{value:this.props.location.pathname},r.createElement(W.a,{value:"/",label:"Home",to:"/",component:s.b}),r.createElement(W.a,{value:"/split",label:"Split",to:"/split",component:s.b}),r.createElement(W.a,{value:"/millebornes",label:"Mille Bornes",to:"/millebornes",component:s.b}),r.createElement(W.a,{value:"/about",label:"About",to:"/about",component:s.b})))))}}]),t}(r.Component),Q=Object(M.f)(J),B=a(146),H=a(140),G=a(19),Y=a(152),U=a(151),q=a(150),z=a(136),X=a(145),Z=a(137),$=a(138),ee=a(139),te=a(5),ae=a(75),ne=a.n(ae),re=a(20);var oe=(F=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(R.a)(this,Object(D.a)(t).call(this,e))).dialogInputRef=void 0,a.dialogInputRef=r.createRef(),a.state={error:"",newName:"",showAddPlayerDialog:!1},a}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this;return r.createElement(r.Fragment,null,r.createElement(K.a,{position:"fixed",className:this.props.classes.appBar},r.createElement("div",{className:this.props.classes.chipWrapper},r.createElement(U.a,{icon:r.createElement(ne.a,null),label:"Add Player",variant:"outlined",className:this.props.classes.chip,onClick:this.handleAdd}),this.props.names.map((function(t){return r.createElement(U.a,{key:t,label:t,variant:"outlined",className:e.props.classes.chip,onDelete:function(){return e.handleDelete(t)}})})))),r.createElement(q.a,{open:this.state.showAddPlayerDialog,maxWidth:"xs",fullWidth:!0,onClose:this.handleDialogClose},r.createElement(z.a,null,r.createElement(X.a,{fullWidth:!0,required:!0,autoFocus:!0,value:this.state.newName,onChange:this.handleNewNameChange,onKeyPress:this.handleKeyPress,label:"Player or Team Name",ref:this.dialogInputRef}),0!==this.state.error.length?r.createElement(Z.a,{error:!0},this.state.error):null),r.createElement($.a,null,r.createElement(ee.a,{variant:"contained",color:"primary",onClick:this.handleDialogClose},"Cancel"),r.createElement(ee.a,{disabled:0!==this.state.error.length||0===this.state.newName.length,onClick:this.handleAddName,variant:"contained",color:"primary"},"Add"))))}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&(0===this.state.error.length&&this.handleAddName(),e.preventDefault())}},{key:"handleNewNameChange",value:function(e){var t=e.target.value.trim(),a="";this.props.names.find((function(e){return e.toLowerCase()===t.toLowerCase()}))&&(a="Player or team already exists"),this.setState({error:a,newName:e.target.value})}},{key:"handleAddName",value:function(){var e=this.state.newName.trim();e.length>0&&(this.props.addName(e),this.setState({newName:""}),this.dialogInputRef.current&&this.dialogInputRef.current.focus())}},{key:"handleDialogClose",value:function(){this.setState({showAddPlayerDialog:!1,newName:""})}},{key:"handleAdd",value:function(){this.setState({showAddPlayerDialog:!0}),this.dialogInputRef.current&&this.dialogInputRef.current.focus()}},{key:"handleDelete",value:function(e){this.props.removeName(e)}}]),t}(r.Component),Object(G.a)(F.prototype,"handleKeyPress",[re.bind],Object.getOwnPropertyDescriptor(F.prototype,"handleKeyPress"),F.prototype),Object(G.a)(F.prototype,"handleNewNameChange",[re.bind],Object.getOwnPropertyDescriptor(F.prototype,"handleNewNameChange"),F.prototype),Object(G.a)(F.prototype,"handleAddName",[re.bind],Object.getOwnPropertyDescriptor(F.prototype,"handleAddName"),F.prototype),Object(G.a)(F.prototype,"handleDialogClose",[re.bind],Object.getOwnPropertyDescriptor(F.prototype,"handleDialogClose"),F.prototype),Object(G.a)(F.prototype,"handleAdd",[re.bind],Object.getOwnPropertyDescriptor(F.prototype,"handleAdd"),F.prototype),Object(G.a)(F.prototype,"handleDelete",[re.bind],Object.getOwnPropertyDescriptor(F.prototype,"handleDelete"),F.prototype),F),se=Object(c.b)((function(e){return{names:e.system.names}}),(function(e){return{addName:function(t){return e(function(e){return{name:e,type:v}}(t))},removeName:function(t){return e(function(e){return{name:e,type:f}}(t))}}}))(te.a((function(e){return Y.a({appBar:{top:"auto",bottom:0},chip:{margin:e.spacing(1)},chipWrapper:{display:"flex",flexWrap:"wrap"}})}))(oe)),ce=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(H.a,null,"This is the home page where we provide useful details."),r.createElement(se,null))}}]),t}(r.Component);var ie,le,pe=a(103),ue=a(141),he=a(142),me=a(143),de={A:[0,30,70,120,180,200],K:[0,20,50,90,140,200],Q:[0,20,50,90,140,200],J:[0,20,50,90,140,200],10:[0,10,30,60,100,200],9:[0,10,30,60,100,200],8:[0,10,30,60,100,200],7:[0,10,30,60,100,200],6:[0,10,30,60,100,200],5:[0,10,30,60,100,200],4:[0,10,30,60,100,200],3:[0,10,30,60,100,200],2:[0,5,20,40,70,200],Negative:[]},be=(ie=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this,t=this.props.scores[this.props.name];return r.createElement(pe.a,{className:this.props.classes.scoreCardPaper},r.createElement(ue.a,{container:!0},r.createElement(ue.a,{item:!0,xs:6},r.createElement(H.a,{variant:"h5"},this.props.name)),r.createElement(ue.a,{item:!0,xs:6,className:this.props.classes.right},r.createElement(H.a,{variant:"h5"},this.calculateScore(t)))),r.createElement(he.a,{variant:"middle"}),this.createRow(t,n.A),this.createRow(t,n.K),this.createRow(t,n.Q),this.createRow(t,n.J),this.createRow(t,n.Ten),this.createRow(t,n.Nine),this.createRow(t,n.Eight),this.createRow(t,n.Seven),this.createRow(t,n.Six),this.createRow(t,n.Five),this.createRow(t,n.Four),this.createRow(t,n.Three),this.createRow(t,n.Two),r.createElement(ue.a,{container:!0,justify:"center",alignItems:"center",className:this.props.classes.row},r.createElement(ue.a,{item:!0,xs:4},r.createElement(ee.a,{variant:"outlined",onClick:function(){return e.handleIncrease(n.Negative)}},"-5")),r.createElement(ue.a,{item:!0,xs:4,className:this.props.classes.center},r.createElement(H.a,{variant:"h5"},this.getRankValues(t,n.Negative))),r.createElement(ue.a,{item:!0,xs:4,className:this.props.classes.right},r.createElement(ee.a,{variant:"outlined",onClick:function(){return e.handleDecrease(n.Negative)}},"+5"))))}},{key:"getRankValues",value:function(e,t){var a=e?e.values[t]:0;return t===n.Negative?-5*a:de[t][a]}},{key:"calculateScore",value:function(e){return this.getRankValues(e,n.Negative)+this.getRankValues(e,n.A)+this.getRankValues(e,n.K)+this.getRankValues(e,n.Q)+this.getRankValues(e,n.J)+this.getRankValues(e,n.Ten)+this.getRankValues(e,n.Nine)+this.getRankValues(e,n.Eight)+this.getRankValues(e,n.Seven)+this.getRankValues(e,n.Six)+this.getRankValues(e,n.Five)+this.getRankValues(e,n.Four)+this.getRankValues(e,n.Three)+this.getRankValues(e,n.Two)}},{key:"handleIncrease",value:function(e){this.props.addValue(this.props.name,e)}},{key:"handleDecrease",value:function(e){this.props.removeValue(this.props.name,e)}},{key:"createRow",value:function(e,t){for(var a=this,n=e?e.values[t]:0,o=[],s=0;s<6;s++){var c=this.props.classes.avatar;s===n&&(c="".concat(c," ").concat(this.props.classes.selectedAvatar)),o.push(r.createElement(me.a,{key:"".concat(t.toString(),"-").concat(s),className:c},de[t][s]))}return r.createElement(r.Fragment,null,r.createElement(ue.a,{container:!0,justify:"center",alignItems:"center",className:this.props.classes.row},r.createElement(ee.a,{variant:"outlined",onClick:function(){return a.handleIncrease(t)},style:{marginRight:10}},t.toString()),o),r.createElement(he.a,null))}}]),t}(r.Component),Object(G.a)(ie.prototype,"getRankValues",[re.bind],Object.getOwnPropertyDescriptor(ie.prototype,"getRankValues"),ie.prototype),Object(G.a)(ie.prototype,"calculateScore",[re.bind],Object.getOwnPropertyDescriptor(ie.prototype,"calculateScore"),ie.prototype),Object(G.a)(ie.prototype,"handleIncrease",[re.bind],Object.getOwnPropertyDescriptor(ie.prototype,"handleIncrease"),ie.prototype),Object(G.a)(ie.prototype,"handleDecrease",[re.bind],Object.getOwnPropertyDescriptor(ie.prototype,"handleDecrease"),ie.prototype),Object(G.a)(ie.prototype,"createRow",[re.bind],Object.getOwnPropertyDescriptor(ie.prototype,"createRow"),ie.prototype),ie),ye=Object(c.b)((function(e){return{scores:e.split.scores}}),(function(e){return{addValue:function(t,a){return e(function(e,t){return{name:e,rank:t,type:d}}(t,a))},removeValue:function(t,a){return e(function(e,t){return{name:e,rank:t,type:b}}(t,a))}}}))(te.a((function(e){return Y.a({scoreCardPaper:{margin:e.spacing(1),width:320,minWidth:320,padding:e.spacing(1)},avatar:{fontWeight:"bold",fontSize:16,height:30,width:30,margin:e.spacing(.5)},selectedAvatar:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},row:{marginTop:e.spacing(.25),marginBottom:e.spacing(.25)},right:{textAlign:"right"},center:{textAlign:"center"}})}))(be)),ge=(le=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return 0===this.props.names.length?r.createElement(H.a,null,"Go back to Home and add some players first!"):r.createElement(r.Fragment,null,r.createElement(ee.a,{color:"primary",variant:"contained",onClick:this.handleReset},"Reset All"),r.createElement("div",{className:this.props.classes.splitWrapper},this.props.names.map((function(e){return r.createElement(ye,{key:e,name:e})}))))}},{key:"handleReset",value:function(){this.props.reset()}}]),t}(r.Component),Object(G.a)(le.prototype,"handleReset",[re.bind],Object.getOwnPropertyDescriptor(le.prototype,"handleReset"),le.prototype),le),ve=Object(c.b)((function(e){return{names:e.system.names}}),(function(e){return{reset:function(){return e({type:m})}}}))(te.a((function(e){return Y.a({splitWrapper:{display:"flex",flexWrap:"wrap"}})}))(ge)),fe=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.createElement(H.a,null,"This site was created by Shane DeSeranno, Donald Gill, and Lara Ramey to aid in scoring games.")}}]),t}(r.Component),Oe=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.createElement(H.a,null,"Coming soon!")}}]),t}(r.Component),je=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.createElement(B.a,{m:2},r.createElement(M.c,null,r.createElement(M.a,{exact:!0,path:"/",component:ce}),r.createElement(M.a,{path:"/split",component:ve}),r.createElement(M.a,{path:"/millebornes",component:Oe}),r.createElement(M.a,{path:"/about",component:fe})))}}]),t}(r.Component),Ee=function(e){function t(){return Object(w.a)(this,t),Object(R.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=L.getTheme(this.props.selectedTheme);return r.createElement(S.a,{theme:e},r.createElement(C.a,null),r.createElement(Q,null),r.createElement(je,null))}}]),t}(r.Component),ke=Object(c.b)((function(e){return{selectedTheme:e.system.selectedTheme}}),(function(e){return{}}))(Ee);o.render(r.createElement(s.a,null,r.createElement(c.a,{store:k},r.createElement(ke,null))),document.getElementById("root"))},89:function(e,t,a){e.exports=a(102)}},[[89,1,2]]]);
//# sourceMappingURL=main.83180b86.chunk.js.map