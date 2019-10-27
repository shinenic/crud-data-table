(this["webpackJsonpcrud-data-table"]=this["webpackJsonpcrud-data-table"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"handleInputChange",(function(){return O})),a.d(n,"addData",(function(){return _})),a.d(n,"updateData",(function(){return I})),a.d(n,"deleteData",(function(){return E})),a.d(n,"setInputMessage",(function(){return j})),a.d(n,"selectRow",(function(){return k}));var r=a(0),o=a.n(r),s=a(11),c=a.n(s),u=a(2),i=a(3),p=a(5),l=a(4),d=a(6),m=a(1),f="handle_input_change",h="add_data",b="update_data",g="set_input_message",v="delete_data",y="select_row";function O(e,t,a){return{type:f,payload:{inputMode:e,textbox:t,value:a}}}function _(e){return{type:h,payload:e}}function I(){return{type:b}}function E(e){return{type:v,payload:{no:e}}}function j(e,t,a,n){return{type:g,payload:{inputMode:e,textbox:t,bool:a,message:n}}}function k(e){return{type:y,payload:e}}var w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.handleChange(e.target.value),a.props.setInputState(a.props.check(e.target.value),a.props.defaultMessage)},a.handleKeyDown=function(e){"Enter"===e.key&&(a.props.actionOnKeyDown(),e.target.blur())},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"form-input"},o.a.createElement("input",{type:"text",className:this.props.editable?"form-input__textbox":"form-input__textbox form-input__textbox--disable",value:this.props.value,onChange:this.handleChange,onKeyDown:this.handleKeyDown,disabled:!this.props.editable}),o.a.createElement("div",{className:""===this.props.value?"form-input__placehoder":"form-input__placehoder form-input__placehoder--fixed"},this.props.name),this.props.editable&&o.a.createElement("div",{className:this.props.isFormatCorrect?"form-input__message":"form-input__message form-input__message--show"},this.props.message))}}]),t}(r.Component),C=Object(m.b)(null,n)(w),D=function(e,t){return 0===e.length||(0===t.length||!t.map((function(e){return e.name})).includes(e))},N=function(e,t){if(0===e.length)return!0;var a;switch(t){case"PHONE":a=/^[0-9+-]*$/;break;case"EMAIL":a=/^.+@[A-Za-z0-9_]+\..+$/;break;default:a=/./}return a.test(e)},x=["name has been used","please check the format","please check the format"],M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).formatCheck=[function(e){return D(e,a.props.data)},function(e){return N(e,"PHONE")},function(e){return N(e,"EMAIL")}],a.addData=function(){if(Object.keys(a.props.insertInput).reduce((function(e,t){return!!a.props.insertInput[t].isFormatCorrect&&(0===a.props.insertInput[t].value.length?(a.props.setInputMessage("insertInput",t,!1,"this field is required"),!1):e)}),!0)){var e=Object.keys(a.props.insertInput).reduce((function(e,t){return e[t]=a.props.insertInput[t].value,e}),{});a.props.addData(e),Object.keys(a.props.insertInput).map((function(e){return a.props.handleInputChange("insertInput",e,"")}))}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"form form-mobile"},Object.keys(this.props.insertInput).map((function(t,a){return o.a.createElement(C,{key:a,name:e.props.insertInput[t].name,value:e.props.insertInput[t].value,handleChange:function(a){return e.props.handleInputChange("insertInput",t,a)},setInputState:function(a,n){return e.props.setInputMessage("insertInput",t,a,n)},check:e.formatCheck[a],message:e.props.insertInput[t].message,isFormatCorrect:e.props.insertInput[t].isFormatCorrect,editable:!0,defaultMessage:x[a],actionOnKeyDown:e.addData})})),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.addData},"Insert")))}}]),t}(r.Component);var S=Object(m.b)((function(e){return{insertInput:e.root.insertInput,data:e.root.data}}),n)(M),F=a(8),H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).formatCheck=[function(e){var t=Object(F.a)(a.props.data);return t.splice(t.map((function(e){return e.no})).indexOf(a.props.rowValue.no),1),D(e,t)},function(e){return N(e,"PHONE")},function(e){return N(e,"EMAIL")}],a.updateDate=function(){return!!Object.keys(a.props.updateInput).reduce((function(e,t){return!!a.props.updateInput[t].isFormatCorrect&&(0===a.props.updateInput[t].value.length?(a.props.setInputMessage("updateInput",t,!1,"this field is required"),!1):e)}),!0)&&(a.props.updateData(),Object.keys(a.props.updateInput).map((function(e){return a.props.handleInputChange("updateInput",e,"")})),!0)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:this.props.editable?"row row--updating":"row"},o.a.createElement("div",null,o.a.createElement("div",null,this.props.rowValue.no)),Object.keys(this.props.updateInput).map((function(t,a){return o.a.createElement(C,{key:a,value:e.props.editable?e.props.updateInput[t].value:e.props.rowValue[t],handleChange:function(a){return e.props.handleInputChange("updateInput",t,a)},setInputState:function(a,n){return e.props.setInputMessage("updateInput",t,a,n)},check:e.formatCheck[a],message:e.props.updateInput[t].message,isFormatCorrect:e.props.updateInput[t].isFormatCorrect,defaultMessage:x[a],editable:e.props.editable,actionOnKeyDown:function(){e.updateDate()&&e.props.selectRow({no:-1})}})})),o.a.createElement("div",null,this.props.editable?o.a.createElement("img",{onClick:function(){e.updateDate()&&e.props.selectRow({no:-1})},className:"row__check-icon",alt:"check-icon"}):o.a.createElement("img",{onClick:function(){return-1===e.props.selectedData&&e.props.selectRow(e.props.rowValue)},style:-1!==this.props.selectedData?{filter:"invert(0.8)"}:{},className:"row__edit-icon",alt:"edit-icon"})),o.a.createElement("div",null,this.props.editable?o.a.createElement("img",{className:"row__recover-icon",alt:"recover-icon",onClick:function(){return e.props.selectRow({no:-1})}}):o.a.createElement("img",{className:"row__delete-icon",alt:"delete-icon",onClick:function(){return!e.props.editable&&e.props.deleteData(e.props.rowValue.no)}})))}}]),t}(r.Component);var A=Object(m.b)((function(e){return{updateInput:e.root.updateInput,data:e.root.data,selectedData:e.root.selectedData}}),n)(H),L=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={tableHead:[{name:"No",sort:"unset"},{name:"Name",sort:"unset"},{name:"Phone",sort:"unset"},{name:"Email",sort:"unset"}],sort:{sortBy:"no",method:"decrease"}},a.sortData=function(e,t){a.setState({sort:{sortBy:e,method:t}})},a.handleSortImg=function(e){var t=a.state.tableHead.map((function(e){return e.sort})),n=Object.assign({},a.state);4===t.reduce((function(e,t){return"unset"===t?e+1:e}),0)?n.tableHead[e].sort="decrease":"unset"!==t[e]?n.tableHead[e].sort="decrease"===n.tableHead[e].sort?"increase":"unset":(n.tableHead.map((function(e){return e.sort="unset"})),n.tableHead[e].sort="decrease"),a.setState({tableHead:n.tableHead}),a.sortData(a.state.tableHead[e].name.toLowerCase(),a.state.tableHead[e].sort)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"data-table"},o.a.createElement("div",{className:"row"},this.state.tableHead.map((function(t,a){return o.a.createElement("div",{key:a,onClick:function(){return e.handleSortImg(a)},className:"row__sortable-column"},t.name,"unset"===t.sort?o.a.createElement("img",{className:"row__sort-icon row__sort-icon--unset",alt:"sort-icon1"}):"decrease"===t.sort?o.a.createElement("img",{className:"row__sort-icon row__sort-icon--decrease",alt:"sort-icon2"}):o.a.createElement("img",{className:"row__sort-icon row__sort-icon--increase",alt:"sort-icon3"}))})),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("div",{className:"block"}),this.props.data.sort((function(t,a){return"unset"===e.state.sort.method?t.no-a.no:"no"===e.state.sort.sortBy?"decrease"===e.state.sort.method?t.no-a.no:a.no-t.no:"decrease"===e.state.sort.method?t[e.state.sort.sortBy]>a[e.state.sort.sortBy]?1:-1:a[e.state.sort.sortBy]>t[e.state.sort.sortBy]?1:-1})).map((function(t,a){return o.a.createElement(A,{key:a,rowValue:t,editable:t.no===e.props.selectedData})})),0===this.props.data.length&&o.a.createElement("div",{className:"no-data"},o.a.createElement("div",null,"No Data Found.")))}}]),t}(r.Component);var T=Object(m.b)((function(e){return{data:e.root.data,selectedData:e.root.selectedData}}),n)(L),V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={formExpand:void 0},a.formToggle=function(){var e=document.querySelector(".insert-toggle__button"),t=document.querySelector(".form-mobile");void 0===a.state.formExpand?(e.classList.add("insert-toggle__button--expand"),a.setState({formExpand:!0})):(e.classList.toggle("insert-toggle__button--expand"),e.classList.toggle("insert-toggle__button--close"),a.setState({formExpand:!a.state.formExpand})),t.classList.toggle("form-mobile--expand")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;[{name:"Tim",phone:"0981-495-798",email:"fs234@gamil.com"},{name:"Zed",phone:"0000-159-159",email:"zzz@gamil.com"},{name:"Cat",phone:"0956-785-498",email:"cat@gamil.com"},{name:"Annie",phone:"0198-458-498",email:"ani@hotmail.con.tw"},{name:"Gali5566",phone:"0198-498-452",email:"g5566@gamil.com"}].map((function(t){return e.props.addData(t)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"title"},o.a.createElement("span",null,"Data Table")),o.a.createElement("div",{className:"insert-toggle"},o.a.createElement("div",{className:"insert-toggle__button",onClick:this.formToggle},"+"))),o.a.createElement(S,null),o.a.createElement("div",{className:"data-table"},o.a.createElement(T,null)))}}]),t}(r.Component),B=Object(m.b)(null,n)(V),R=a(10),K={insertInput:{name:{name:"Name",value:"Jack",message:"name has been used",isFormatCorrect:!0},phone:{name:"Phone",value:"0900-465-725",message:"please check the format",isFormatCorrect:!0},email:{name:"Email",value:"fs@yahoo.com",message:"please check the format",isFormatCorrect:!0}},updateInput:{name:{name:"Name",value:"",message:"name has been used",isFormatCorrect:!0},phone:{name:"Phone",value:"",message:"please check the format",isFormatCorrect:!0},email:{name:"Email",value:"",message:"please check the format",isFormatCorrect:!0}},selectedData:-1,lastestNo:0,data:[]},P=Object(R.b)({root:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var a=Object.assign({},e[t.payload.inputMode]);return a[t.payload.textbox].value=t.payload.value,"updateInput"===t.payload.inputMode?Object.assign({},e,{updateInput:a}):"insertInput"===t.payload.inputMode?Object.assign({},e,{insertInput:a}):Object.assign({},e);case h:var n=Object.keys(t.payload).reduce((function(e,a){return e[a]=t.payload[a],e}),{});return n.no=e.lastestNo+1,Object.assign({},e,{data:[].concat(Object(F.a)(e.data),[n]),lastestNo:e.lastestNo+1});case b:var r=Object.keys(e.updateInput).reduce((function(t,a){return t[a]=e.updateInput[a].value,t}),{});r.no=e.selectedData;var o=e.data.map((function(e){return e.no})).indexOf(e.selectedData),s=Object(F.a)(e.data);return s.splice(o,1,r),Object.assign({},e,{data:Object(F.a)(s)});case v:var c=e.data.map((function(e){return e.no})).indexOf(t.payload.no);return e.data.splice(c,1),Object.assign({},e,{data:Object(F.a)(e.data)});case y:if(-1===t.payload.no)return Object.assign({},e,{selectedData:-1});var u=Object.assign({},e.updateInput);return Object.keys(u).map((function(e){u[e].value=t.payload[e],u[e].isFormatCorrect=!0})),Object.assign({},e,{selectedData:t.payload.no,updateInput:u});case g:var i=Object.assign({},e[t.payload.inputMode]);return i[t.payload.textbox].message=t.payload.message||i[t.payload.textbox].message,i[t.payload.textbox].isFormatCorrect=t.payload.bool,"updateInput"===t.payload.inputMode?Object.assign({},e,{updateInput:i}):"insertInput"===t.payload.inputMode?Object.assign({},e,{insertInput:i}):Object.assign({},e);default:return e}}});a(27);c.a.render(o.a.createElement((function(e){var t=e.children,a=e.initState,n=void 0===a?{}:a,r=Object(R.c)(P,n,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return o.a.createElement(m.a,{store:r},t)}),null,o.a.createElement(B,null)),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9ac84f98.chunk.js.map