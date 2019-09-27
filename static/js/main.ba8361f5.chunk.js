(window["webpackJsonpgame-scorecards"]=window["webpackJsonpgame-scorecards"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a(11),s=a(40),l=a(24),i=a(81),c=a(47),p=a(74),h=a(46),u="MILLE_BORNES_RESET_ALL",d="MILLE_BORNES_ADD_SCORE",g={scores:{}};!function(e){e.A="A",e.K="K",e.Q="Q",e.J="J",e.Ten="10",e.Nine="9",e.Eight="8",e.Seven="7",e.Six="6",e.Five="5",e.Four="4",e.Three="3",e.Two="2",e.Negative="Negative"}(n||(n={}));var m,y="SPLIT_RESET_ALL",f="SPLIT_ADD_VALUE",b="SPLIT_REMOVE_VALUE",O={scores:{}};!function(e){e[e.Light=0]="Light",e[e.Dark=1]="Dark"}(m||(m={}));var v="SYSTEM_CHANGE_THEME",P="SYSTEM_ADD_NAME",E="SYSTEM_REMOVE_NAME",j={selectedTheme:m.Dark,names:[]};var k,T=Object(c.c)({milleBornes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return Object(h.a)(e,(function(e){switch(t.type){case u:e.scores={};break;case d:e.scores[t.name]||(e.scores[t.name]=0),e.scores[t.name]=e.scores[t.name]+t.value}}))},split:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return Object(h.a)(e,(function(e){switch(t.type){case y:e.scores={};break;case f:e.scores[t.name]||(e.scores[t.name]={values:{A:0,K:0,Q:0,J:0,10:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0,Negative:0}});var a=e.scores[t.name].values[t.rank],r=t.rank===n.Negative?500:6;e.scores[t.name].values[t.rank]=(a+1)%r;break;case b:e.scores[t.name]||(e.scores[t.name]={values:{A:0,K:0,Q:0,J:0,10:0,9:0,8:0,7:0,6:0,5:0,4:0,3:0,2:0,Negative:0}});var o=e.scores[t.name].values[t.rank];e.scores[t.name].values[t.rank]=Math.max(0,o-1)}}))},system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return Object(h.a)(e,(function(e){switch(t.type){case v:e.selectedTheme=t.newTheme;break;case P:e.names.push(t.name);break;case E:var a=e.names.indexOf(t.name);a>-1&&e.names.splice(a,1)}}))}}),C=Object(c.d)(T,(k=[p.a],c.a.apply(void 0,Object(i.a)(k)))),w=a(14),D=a(15),A=a(18),S=a(17),F=a(19),N=a(159),R=a(150),x=a(58),W=a(138),V=a(80),I={palette:{primary:x.a,secondary:W.a,type:"light"}},L={palette:{primary:x.a,secondary:W.a,type:"dark"}},_=function(){function e(){Object(w.a)(this,e)}return Object(D.a)(e,null,[{key:"getTheme",value:function(t){switch(t){case m.Light:return e.light}return e.dark}}]),e}();_.light=Object(V.a)(I),_.dark=Object(V.a)(L);var B,K=a(139),M=a(153),J=a(141),Q=a(41),U=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("nav",null,r.createElement(K.a,{position:"static"},r.createElement(M.a,{value:this.props.location.pathname},r.createElement(J.a,{value:"/",label:"Home",to:"/",component:s.b}),r.createElement(J.a,{value:"/split",label:"Split",to:"/split",component:s.b}),r.createElement(J.a,{value:"/millebornes",label:"Mille Bornes",to:"/millebornes",component:s.b}),r.createElement(J.a,{value:"/about",label:"About",to:"/about",component:s.b})))))}}]),t}(r.Component),H=Object(Q.f)(U),G=a(152),Y=a(107),q=a(9),z=a(157),X=a(158),Z=a(156),$=a(142),ee=a(151),te=a(143),ae=a(144),ne=a(145),re=a(4),oe=a(77),se=a.n(oe),le=a(10);var ie=(B=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(A.a)(this,Object(S.a)(t).call(this,e))).dialogInputRef=void 0,a.dialogInputRef=r.createRef(),a.state={error:"",newName:"",showAddPlayerDialog:!1},a}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this;return r.createElement(r.Fragment,null,r.createElement(K.a,{position:"fixed",className:this.props.classes.appBar},r.createElement("div",{className:this.props.classes.chipWrapper},r.createElement(X.a,{icon:r.createElement(se.a,null),label:"Add Player",variant:"outlined",className:this.props.classes.chip,onClick:this.handleAdd}),this.props.names.map((function(t){return r.createElement(X.a,{key:t,label:t,variant:"outlined",className:e.props.classes.chip,onDelete:function(){return e.handleDelete(t)}})})))),r.createElement(Z.a,{open:this.state.showAddPlayerDialog,maxWidth:"xs",fullWidth:!0,onClose:this.handleDialogClose},r.createElement($.a,null,r.createElement(ee.a,{fullWidth:!0,required:!0,autoFocus:!0,value:this.state.newName,onChange:this.handleNewNameChange,onKeyPress:this.handleKeyPress,label:"Player or Team Name",ref:this.dialogInputRef}),0!==this.state.error.length?r.createElement(te.a,{error:!0},this.state.error):null),r.createElement(ae.a,null,r.createElement(ne.a,{variant:"contained",color:"primary",onClick:this.handleDialogClose},"Cancel"),r.createElement(ne.a,{disabled:0!==this.state.error.length||0===this.state.newName.length,onClick:this.handleAddName,variant:"contained",color:"primary"},"Add"))))}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&(0===this.state.error.length&&this.handleAddName(),e.preventDefault())}},{key:"handleNewNameChange",value:function(e){var t=e.target.value.trim(),a="";this.props.names.find((function(e){return e.toLowerCase()===t.toLowerCase()}))&&(a="Player or team already exists"),this.setState({error:a,newName:e.target.value})}},{key:"handleAddName",value:function(){var e=this.state.newName.trim();e.length>0&&(this.props.addName(e),this.setState({newName:""}),this.dialogInputRef.current&&this.dialogInputRef.current.focus())}},{key:"handleDialogClose",value:function(){this.setState({showAddPlayerDialog:!1,newName:""})}},{key:"handleAdd",value:function(){this.setState({showAddPlayerDialog:!0}),this.dialogInputRef.current&&this.dialogInputRef.current.focus()}},{key:"handleDelete",value:function(e){this.props.removeName(e)}}]),t}(r.Component),Object(q.a)(B.prototype,"handleKeyPress",[le.bind],Object.getOwnPropertyDescriptor(B.prototype,"handleKeyPress"),B.prototype),Object(q.a)(B.prototype,"handleNewNameChange",[le.bind],Object.getOwnPropertyDescriptor(B.prototype,"handleNewNameChange"),B.prototype),Object(q.a)(B.prototype,"handleAddName",[le.bind],Object.getOwnPropertyDescriptor(B.prototype,"handleAddName"),B.prototype),Object(q.a)(B.prototype,"handleDialogClose",[le.bind],Object.getOwnPropertyDescriptor(B.prototype,"handleDialogClose"),B.prototype),Object(q.a)(B.prototype,"handleAdd",[le.bind],Object.getOwnPropertyDescriptor(B.prototype,"handleAdd"),B.prototype),Object(q.a)(B.prototype,"handleDelete",[le.bind],Object.getOwnPropertyDescriptor(B.prototype,"handleDelete"),B.prototype),B),ce=Object(l.b)((function(e){return{names:e.system.names}}),(function(e){return{addName:function(t){return e(function(e){return{name:e,type:P}}(t))},removeName:function(t){return e(function(e){return{name:e,type:E}}(t))}}}))(re.a((function(e){return z.a({appBar:{top:"auto",bottom:0},chip:{margin:e.spacing(1)},chipWrapper:{display:"flex",flexWrap:"wrap"}})}))(ie)),pe=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(Y.a,null,"This is the home page where we provide useful details."),r.createElement(ce,null))}}]),t}(r.Component);var he,ue,de=a(104),ge=a(146),me=a(147),ye=a(148),fe={A:[0,30,70,120,180,200],K:[0,20,50,90,140,200],Q:[0,20,50,90,140,200],J:[0,20,50,90,140,200],10:[0,10,30,60,100,200],9:[0,10,30,60,100,200],8:[0,10,30,60,100,200],7:[0,10,30,60,100,200],6:[0,10,30,60,100,200],5:[0,10,30,60,100,200],4:[0,10,30,60,100,200],3:[0,10,30,60,100,200],2:[0,5,20,40,70,200],Negative:[]},be=(he=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this,t=this.props.scores[this.props.name];return r.createElement(de.a,{className:this.props.classes.scoreCardPaper},r.createElement(ge.a,{container:!0},r.createElement(ge.a,{item:!0,xs:6},r.createElement(Y.a,{variant:"h5"},this.props.name)),r.createElement(ge.a,{item:!0,xs:6,className:this.props.classes.right},r.createElement(Y.a,{variant:"h5"},this.calculateScore(t)))),r.createElement(me.a,{variant:"middle"}),this.createRow(t,n.A),this.createRow(t,n.K),this.createRow(t,n.Q),this.createRow(t,n.J),this.createRow(t,n.Ten),this.createRow(t,n.Nine),this.createRow(t,n.Eight),this.createRow(t,n.Seven),this.createRow(t,n.Six),this.createRow(t,n.Five),this.createRow(t,n.Four),this.createRow(t,n.Three),this.createRow(t,n.Two),r.createElement(ge.a,{container:!0,justify:"center",alignItems:"center",className:this.props.classes.row},r.createElement(ge.a,{item:!0,xs:4},r.createElement(ne.a,{variant:"outlined",onClick:function(){return e.handleIncrease(n.Negative)}},"-5")),r.createElement(ge.a,{item:!0,xs:4,className:this.props.classes.center},r.createElement(Y.a,{variant:"h5"},this.getRankValues(t,n.Negative))),r.createElement(ge.a,{item:!0,xs:4,className:this.props.classes.right},r.createElement(ne.a,{variant:"outlined",onClick:function(){return e.handleDecrease(n.Negative)}},"+5"))))}},{key:"getRankValues",value:function(e,t){var a=e?e.values[t]:0;return t===n.Negative?-5*a:fe[t][a]}},{key:"calculateScore",value:function(e){return this.getRankValues(e,n.Negative)+this.getRankValues(e,n.A)+this.getRankValues(e,n.K)+this.getRankValues(e,n.Q)+this.getRankValues(e,n.J)+this.getRankValues(e,n.Ten)+this.getRankValues(e,n.Nine)+this.getRankValues(e,n.Eight)+this.getRankValues(e,n.Seven)+this.getRankValues(e,n.Six)+this.getRankValues(e,n.Five)+this.getRankValues(e,n.Four)+this.getRankValues(e,n.Three)+this.getRankValues(e,n.Two)}},{key:"handleIncrease",value:function(e){this.props.addValue(this.props.name,e)}},{key:"handleDecrease",value:function(e){this.props.removeValue(this.props.name,e)}},{key:"createRow",value:function(e,t){for(var a=this,n=e?e.values[t]:0,o=[],s=0;s<6;s++){var l=this.props.classes.avatar;s===n&&(l="".concat(l," ").concat(this.props.classes.selectedAvatar)),o.push(r.createElement(ye.a,{key:"".concat(t.toString(),"-").concat(s),className:l},fe[t][s]))}return r.createElement(r.Fragment,null,r.createElement(ge.a,{container:!0,justify:"center",alignItems:"center",className:this.props.classes.row},r.createElement(ne.a,{variant:"outlined",onClick:function(){return a.handleIncrease(t)},style:{marginRight:10}},t.toString()),o),r.createElement(me.a,null))}}]),t}(r.Component),Object(q.a)(he.prototype,"getRankValues",[le.bind],Object.getOwnPropertyDescriptor(he.prototype,"getRankValues"),he.prototype),Object(q.a)(he.prototype,"calculateScore",[le.bind],Object.getOwnPropertyDescriptor(he.prototype,"calculateScore"),he.prototype),Object(q.a)(he.prototype,"handleIncrease",[le.bind],Object.getOwnPropertyDescriptor(he.prototype,"handleIncrease"),he.prototype),Object(q.a)(he.prototype,"handleDecrease",[le.bind],Object.getOwnPropertyDescriptor(he.prototype,"handleDecrease"),he.prototype),Object(q.a)(he.prototype,"createRow",[le.bind],Object.getOwnPropertyDescriptor(he.prototype,"createRow"),he.prototype),he),Oe=Object(l.b)((function(e){return{scores:e.split.scores}}),(function(e){return{addValue:function(t,a){return e(function(e,t){return{name:e,rank:t,type:f}}(t,a))},removeValue:function(t,a){return e(function(e,t){return{name:e,rank:t,type:b}}(t,a))}}}))(re.a((function(e){return z.a({scoreCardPaper:{margin:e.spacing(1),width:360,minWidth:360,padding:e.spacing(1)},avatar:{fontWeight:"bold",fontSize:16,height:30,width:30,margin:e.spacing(.5)},selectedAvatar:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},row:{marginTop:e.spacing(.25),marginBottom:e.spacing(.25)},right:{textAlign:"right"},center:{textAlign:"center"}})}))(be)),ve=(ue=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return 0===this.props.names.length?r.createElement(Y.a,null,"Go back to Home and add some players first!"):r.createElement(r.Fragment,null,r.createElement(ne.a,{color:"primary",variant:"contained",onClick:this.handleReset},"Reset All"),r.createElement("div",{className:this.props.classes.splitWrapper},this.props.names.map((function(e){return r.createElement(Oe,{key:e,name:e})}))))}},{key:"handleReset",value:function(){this.props.reset()}}]),t}(r.Component),Object(q.a)(ue.prototype,"handleReset",[le.bind],Object.getOwnPropertyDescriptor(ue.prototype,"handleReset"),ue.prototype),ue),Pe=Object(l.b)((function(e){return{names:e.system.names}}),(function(e){return{reset:function(){return e({type:y})}}}))(re.a((function(e){return z.a({splitWrapper:{display:"flex",flexWrap:"wrap"}})}))(ve)),Ee=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.createElement(Y.a,null,"This site was created by Shane DeSeranno, Donald Gill, and Lara Ramey to aid in scoring games.")}}]),t}(r.Component);var je,ke,Te=a(149),Ce=a(160),we=a(154),De=a(105),Ae=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(ge.a,{item:!0,xs:6,className:this.props.classes.right},r.createElement(Y.a,{className:this.props.classes.marginTop},this.props.name,":")),r.createElement(ge.a,{item:!0,xs:3,className:this.props.classes.center},r.createElement(we.a,{checked:this.props.played,onChange:this.props.togglePlayed})),r.createElement(ge.a,{item:!0,xs:3,className:this.props.classes.center},r.createElement(we.a,{disabled:!this.props.played,checked:this.props.coupFourre,onChange:this.props.toggleCoupFourre})))}}]),t}(r.Component),Se=Object(De.a)((function(e){return z.a({marginTop:{marginTop:10},right:{textAlign:"right"},center:{textAlign:"center",verticalAlign:"middle"}})}))(Ae),Fe=(je=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(A.a)(this,Object(S.a)(t).call(this,e))).state={showScoreDialog:!1,distance:0,rightOfWayPlayed:!1,rightOfWayPlayedCF:!1,drivingAcePlayed:!1,drivingAcePlayedCF:!1,fuelTankPlayed:!1,fuelTankPlayedCF:!1,punctureProofPlayed:!1,punctureProofPlayedCF:!1,delayedAction:!1,safeTrip:!1,extension:!1,shutout:!1},a}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(de.a,{className:this.props.classes.scoreCardPaper},r.createElement(Y.a,{variant:"h5"},this.props.name,": ",this.getScore()),r.createElement(me.a,null),r.createElement(ne.a,{className:this.props.classes.scoreButton,color:"primary",variant:"contained",onClick:this.handleScoreRound},"Add Score")),r.createElement(Z.a,{open:this.state.showScoreDialog,maxWidth:"xs",fullWidth:!0,onClose:this.handleDialogClose},r.createElement(Te.a,null,"Scoring for: ",this.props.name),r.createElement(me.a,null),r.createElement($.a,null,r.createElement(Y.a,{id:"distance-slider",gutterBottom:!0},"Distance"),r.createElement(Ce.a,{"aria-labelledby":"distance-slider",valueLabelDisplay:"on",step:25,min:0,max:1e3,marks:!0,value:this.state.distance,onChange:this.handleDistanceChanged}),r.createElement(ge.a,{container:!0},r.createElement(ge.a,{item:!0,xs:6,className:this.props.classes.right}),r.createElement(ge.a,{item:!0,xs:3,className:this.props.classes.center},r.createElement(Y.a,null,"Played")),r.createElement(ge.a,{item:!0,xs:3,className:this.props.classes.center},r.createElement(Y.a,null,"Coup-fourr\xe9")),r.createElement(Se,{name:"Right of Way",played:this.state.rightOfWayPlayed,coupFourre:this.state.rightOfWayPlayedCF,togglePlayed:this.handleToggleRightOfWay,toggleCoupFourre:this.handleToggleRightOfWayCF}),r.createElement(Se,{name:"Driving Ace",played:this.state.drivingAcePlayed,coupFourre:this.state.drivingAcePlayedCF,togglePlayed:this.handleToggleDrivingAce,toggleCoupFourre:this.handleToggleDrivingAceCF}),r.createElement(Se,{name:"Fuel Tank",played:this.state.fuelTankPlayed,coupFourre:this.state.fuelTankPlayedCF,togglePlayed:this.handleToggleFuelTank,toggleCoupFourre:this.handleToggleFuelTankCF}),r.createElement(Se,{name:"Puncture Proof",played:this.state.punctureProofPlayed,coupFourre:this.state.punctureProofPlayedCF,togglePlayed:this.handleTogglePunctureProof,toggleCoupFourre:this.handleTogglePunctureProofCF}),r.createElement(ge.a,{item:!0,xs:4,className:this.props.classes.right},r.createElement(Y.a,{className:this.props.classes.marginTop},"Delayed Action:")),r.createElement(ge.a,{item:!0,xs:2,className:this.props.classes.center},r.createElement(we.a,{disabled:this.state.distance<1e3,checked:this.state.delayedAction,onChange:this.handleToggleDelayedAction})),r.createElement(ge.a,{item:!0,xs:4,className:this.props.classes.right},r.createElement(Y.a,{className:this.props.classes.marginTop},"Safe Trip:")),r.createElement(ge.a,{item:!0,xs:2,className:this.props.classes.center},r.createElement(we.a,{disabled:this.state.distance<1e3,checked:this.state.safeTrip,onChange:this.handleToggleSafeTrip})),r.createElement(ge.a,{item:!0,xs:4,className:this.props.classes.right},r.createElement(Y.a,{className:this.props.classes.marginTop},"Shutout:")),r.createElement(ge.a,{item:!0,xs:2,className:this.props.classes.center},r.createElement(we.a,{disabled:this.state.distance<1e3,checked:this.state.shutout,onChange:this.handleToggleShutout})))),r.createElement(ae.a,null,r.createElement(ne.a,{variant:"contained",color:"primary",onClick:this.handleDialogClose},"Cancel"),r.createElement(ne.a,{onClick:this.handleUpdateScore,variant:"contained",color:"primary"},"Add"))))}},{key:"handleDistanceChanged",value:function(e,t){Array.isArray(t)&&(t=t[t.length-1]),this.setState({distance:t})}},{key:"handleToggleDelayedAction",value:function(){this.setState({delayedAction:!this.state.delayedAction})}},{key:"handleToggleShutout",value:function(){this.setState({shutout:!this.state.shutout})}},{key:"handleToggleSafeTrip",value:function(){this.setState({safeTrip:!this.state.safeTrip})}},{key:"handleToggleRightOfWay",value:function(){this.setState({rightOfWayPlayed:!this.state.rightOfWayPlayed,rightOfWayPlayedCF:!1})}},{key:"handleToggleRightOfWayCF",value:function(){this.setState({rightOfWayPlayedCF:!this.state.rightOfWayPlayedCF})}},{key:"handleToggleDrivingAce",value:function(){this.setState({drivingAcePlayed:!this.state.drivingAcePlayed,drivingAcePlayedCF:!1})}},{key:"handleToggleDrivingAceCF",value:function(){this.setState({drivingAcePlayedCF:!this.state.drivingAcePlayedCF})}},{key:"handleToggleFuelTank",value:function(){this.setState({fuelTankPlayed:!this.state.fuelTankPlayed,fuelTankPlayedCF:!1})}},{key:"handleToggleFuelTankCF",value:function(){this.setState({fuelTankPlayedCF:!this.state.fuelTankPlayedCF})}},{key:"handleTogglePunctureProof",value:function(){this.setState({punctureProofPlayed:!this.state.punctureProofPlayed,punctureProofPlayedCF:!1})}},{key:"handleTogglePunctureProofCF",value:function(){this.setState({punctureProofPlayedCF:!this.state.punctureProofPlayedCF})}},{key:"handleDialogClose",value:function(){this.setState({showScoreDialog:!1})}},{key:"handleUpdateScore",value:function(){var e=0;e+=this.state.distance,this.state.drivingAcePlayed&&(e+=100,this.state.drivingAcePlayedCF&&(e+=300)),this.state.fuelTankPlayed&&(e+=100,this.state.fuelTankPlayedCF&&(e+=300)),this.state.punctureProofPlayed&&(e+=100,this.state.punctureProofPlayedCF&&(e+=300)),this.state.rightOfWayPlayed&&(e+=100,this.state.rightOfWayPlayedCF&&(e+=300)),this.state.drivingAcePlayed&&this.state.fuelTankPlayed&&this.state.punctureProofPlayed&&this.state.rightOfWayPlayed&&(e+=300),1e3===this.state.distance&&(e+=400,this.state.shutout&&(e+=500),this.state.safeTrip&&(e+=300),this.state.extension&&(e+=200),this.state.delayedAction&&(e+=300)),this.props.addScore(this.props.name,e),this.setState({showScoreDialog:!1,distance:0,rightOfWayPlayed:!1,rightOfWayPlayedCF:!1,drivingAcePlayed:!1,drivingAcePlayedCF:!1,fuelTankPlayed:!1,fuelTankPlayedCF:!1,punctureProofPlayed:!1,punctureProofPlayedCF:!1,delayedAction:!1,safeTrip:!1,extension:!1,shutout:!1})}},{key:"getScore",value:function(){var e=this.props.scores[this.props.name];return e||0}},{key:"handleScoreRound",value:function(){this.setState({showScoreDialog:!0})}}]),t}(r.Component),Object(q.a)(je.prototype,"handleDistanceChanged",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleDistanceChanged"),je.prototype),Object(q.a)(je.prototype,"handleToggleDelayedAction",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleToggleDelayedAction"),je.prototype),Object(q.a)(je.prototype,"handleToggleShutout",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleToggleShutout"),je.prototype),Object(q.a)(je.prototype,"handleToggleSafeTrip",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleToggleSafeTrip"),je.prototype),Object(q.a)(je.prototype,"handleToggleRightOfWay",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleToggleRightOfWay"),je.prototype),Object(q.a)(je.prototype,"handleToggleRightOfWayCF",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleToggleRightOfWayCF"),je.prototype),Object(q.a)(je.prototype,"handleToggleDrivingAce",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleToggleDrivingAce"),je.prototype),Object(q.a)(je.prototype,"handleToggleDrivingAceCF",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleToggleDrivingAceCF"),je.prototype),Object(q.a)(je.prototype,"handleToggleFuelTank",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleToggleFuelTank"),je.prototype),Object(q.a)(je.prototype,"handleToggleFuelTankCF",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleToggleFuelTankCF"),je.prototype),Object(q.a)(je.prototype,"handleTogglePunctureProof",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleTogglePunctureProof"),je.prototype),Object(q.a)(je.prototype,"handleTogglePunctureProofCF",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleTogglePunctureProofCF"),je.prototype),Object(q.a)(je.prototype,"handleDialogClose",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleDialogClose"),je.prototype),Object(q.a)(je.prototype,"handleUpdateScore",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleUpdateScore"),je.prototype),Object(q.a)(je.prototype,"getScore",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"getScore"),je.prototype),Object(q.a)(je.prototype,"handleScoreRound",[le.bind],Object.getOwnPropertyDescriptor(je.prototype,"handleScoreRound"),je.prototype),je),Ne=Object(l.b)((function(e){return{scores:e.milleBornes.scores}}),(function(e){return{addScore:function(t,a){return e(function(e,t){return{name:e,value:t,type:d}}(t,a))}}}))(re.a((function(e){return z.a({marginTop:{marginTop:10},right:{textAlign:"right"},center:{textAlign:"center",verticalAlign:"middle"},scoreButton:{margin:e.spacing(1)},scoreCardPaper:{margin:e.spacing(1),width:170,padding:e.spacing(1),textAlign:"center"}})}))(Fe)),Re=(ke=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:this.props.classes.milleBornesWrapper},this.props.names.map((function(e){return r.createElement(Ne,{key:e,name:e})}))),r.createElement(ne.a,{color:"primary",variant:"contained",onClick:this.handleReset},"Reset All"))}},{key:"handleReset",value:function(){this.props.reset()}}]),t}(r.Component),Object(q.a)(ke.prototype,"handleReset",[le.bind],Object.getOwnPropertyDescriptor(ke.prototype,"handleReset"),ke.prototype),ke),xe=Object(l.b)((function(e){return{names:e.system.names}}),(function(e){return{reset:function(){return e({type:u})}}}))(re.a((function(e){return z.a({milleBornesWrapper:{display:"flex",flexWrap:"wrap"}})}))(Re)),We=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.createElement(G.a,{m:2},r.createElement(Q.c,null,r.createElement(Q.a,{exact:!0,path:"/",component:pe}),r.createElement(Q.a,{path:"/split",component:Pe}),r.createElement(Q.a,{path:"/millebornes",component:xe}),r.createElement(Q.a,{path:"/about",component:Ee})))}}]),t}(r.Component),Ve=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=_.getTheme(this.props.selectedTheme);return r.createElement(R.a,{theme:e},r.createElement(N.a,null),r.createElement(H,null),r.createElement(We,null))}}]),t}(r.Component),Ie=Object(l.b)((function(e){return{selectedTheme:e.system.selectedTheme}}),(function(e){return{}}))(Ve);o.render(r.createElement(s.a,null,r.createElement(l.a,{store:C},r.createElement(Ie,null))),document.getElementById("root"))},90:function(e,t,a){e.exports=a(103)}},[[90,1,2]]]);
//# sourceMappingURL=main.ba8361f5.chunk.js.map