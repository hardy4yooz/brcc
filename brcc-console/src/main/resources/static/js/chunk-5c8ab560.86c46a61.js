(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c8ab560"],{"1bf1":function(e,t,r){"use strict";r("6d67"),r("c5f6");var a,o,n=r("f933"),i=r("ed08"),s={name:"Ellipsis",components:{Tooltip:n["a"]},props:{prefixCls:{type:String,default:"ant-pro-ellipsis"},tooltip:{type:Boolean},length:{type:Number,required:!0},lines:{type:Number,default:1},fullWidthRecognition:{type:Boolean,default:!1}},methods:{getStrDom:function(e,t){var r=this.$createElement;return r("span",[Object(i["a"])(e,this.length)+(t>this.length?"...":"")])},getTooltip:function(e,t){var r=this.$createElement;return r(n["a"],[r("template",{slot:"title"},[e]),this.getStrDom(e,t)])}},render:function(){var e=this.$props,t=e.tooltip,r=e.length,a=this.$slots.default.map((function(e){return e.text})).join(""),o=Object(i["c"])(a),n=t&&o>r?this.getTooltip(a,o):this.getStrDom(a,o);return n}},l=s,c=r("2877"),m=Object(c["a"])(l,a,o,!1,null,null,null);t["a"]=m.exports},"5ca2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("section",{staticClass:"add-btn"},[r("a-breadcrumb",{staticClass:"title"},[r("a-breadcrumb-item",{staticClass:"font-menu"},[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routerTo("/index")}}},[e._v("首页")])]),r("a-breadcrumb-item",[e._v("\n                产品线列表\n            ")])],1),r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("\n            新建产品线\n        ")])],1),r("a-divider",{staticClass:"divider"}),r("section",{staticClass:"content"},[r("a-table",{attrs:{columns:e.columns,"data-source":e.productLineData,"row-key":function(e){return e.id},pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"name",fn:function(t,a){return[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routeToProject(a)}}},[e._v(e._s(t))])]}},{key:"memo",fn:function(t){return[r("ellipsis",{attrs:{length:60,tooltip:""}},[e._v(e._s(t))])]}},{key:"members",fn:function(t){return[r("ellipsis",{attrs:{length:60,tooltip:""}},[e._v(e._s(t&&t.join()))])]}},{key:"operation",fn:function(t,a){return[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleAddMembers(a)}}},[e._v("添加成员")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.routeToProject(a)}}},[e._v("管理工程")])]}}])})],1),r("a-modal",{attrs:{title:e.formModal.title,visible:e.formModal.show,"mask-closable":!1,"confirm-loading":e.formModal.loading,"cancel-text":"取消","ok-text":"提交"},on:{ok:e.handleOk,cancel:function(t){return e.handleCancel("formModal")}}},[r("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.formData.id}],expression:"['id',{initialValue:formData.id}]"}]})],1),r("a-form-item",{attrs:{label:"产品线名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"产品线名称必填!"}],initialValue:e.formData.name}],expression:"['name',{rules: [{ required: true, message: '产品线名称必填!'}], initialValue: formData.name}]"}],attrs:{placeholder:"请输入产品线名称"}})],1),r("a-form-item",{attrs:{label:"简介"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{initialValue:e.formData.memo}],expression:"['memo', {initialValue: formData.memo}]"}],attrs:{placeholder:"请输入简介"}})],1)],1)],1),r("a-modal",{attrs:{title:e.memberModal.title,visible:e.memberModal.show,"mask-closable":!1,"confirm-loading":e.memberModal.loading},on:{ok:e.handleSubmit,cancel:function(t){return e.handleCancel("memberModal")}}},[r("a-form",{attrs:{form:e.memberForm,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-item",{attrs:{label:"id"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["productId",{initialValue:e.memberData.id}],expression:"['productId',{initialValue:memberData.id}]"}]})],1),r("a-form-item",{attrs:{label:"产品线管理员"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["members",{rules:[{required:!0,message:"管理员必填!"}],initialValue:e.memberData.members}],expression:"['members',{rules: [{ required: true, message: '管理员必填!'}],\n                initialValue: memberData.members}]"}],attrs:{type:"textarea",placeholder:"请输入管理员用户名，多个管理员间用英文逗号分隔"}})],1)],1)],1)],1)},o=[],n=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("7f7f"),r("28a5"),r("bd86")),i=r("1bf1");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={data:function(){return{productLineData:[],columns:[{title:"产品线ID",dataIndex:"id",align:"center"},{title:"产品线名称",dataIndex:"name",align:"center",scopedSlots:{customRender:"name"}},{title:"描述",dataIndex:"memo",align:"center",scopedSlots:{customRender:"memo"}},{title:"用户",dataIndex:"members",align:"center",scopedSlots:{customRender:"members"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},align:"center"}],loading:!1,pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(e,t){return"显示 ".concat(t[0]," ~ ").concat(t[1]," 条记录，共 ").concat(e," 条记录")}},formModal:{},formData:{},memberModal:{},memberData:{},labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},form:this.$form.createForm(this),memberForm:this.$form.createForm(this)}},components:{Ellipsis:i["a"]},created:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.loading=!0,this.$api.product.getProductList().then((function(t){0===t.status?e.productLineData=t.data.dataList||[]:e.$message.error(t.msg),e.loading=!1}))},handleTableChange:function(e,t,r){this.pagination.current=e.current,this.getTableData()},handleAdd:function(){this.formModal={show:!0,title:"新增产品线",loading:!1},this.formData={}},handleEdit:function(e){this.formModal={show:!0,title:"编辑产品线",loading:!1},this.formData=l({},e)},handleCancel:function(e){this[e].show=!1,this.form.resetFields(),this.memberForm.resetFields()},handleOk:function(){var e=this;this.form.validateFields((function(t){t||(e.formModal.loading=!0,e.$api.product.updateProduct(e.form.getFieldsValue()).then((function(t){0===t.status?(e.$message.success("操作成功"),e.getTableData(),e.formModal.show=!1,e.form.resetFields()):(e.$message.error(t.msg),e.formModal.loading=!1)})))}))},handleAddMembers:function(e){this.memberModal={show:!0,title:"编辑成员",loading:!1},this.memberData=l(l({},e),{},{members:e.members?e.members.join():[]})},handleSubmit:function(){var e=this;this.memberForm.validateFields((function(t){if(!t){e.memberModal.loading=!0;var r=e.memberForm.getFieldsValue(),a=r.productId,o=r.members;e.$api.product.addProductMember(a,o.split(",")).then((function(t){0===t.status?(e.$message.success("操作成功"),e.getTableData(),e.memberModal.show=!1,e.memberForm.resetFields()):(e.$message.error(t.msg),e.memberModal.loading=!1)})).catch((function(){e.memberModal.loading=!1}))}}))},routeToProject:function(e){this.$router.push({path:"listProject",query:{productId:e.id}}),localStorage.setItem("rcc-info",JSON.stringify(l(l({},JSON.parse(localStorage.getItem("rcc-info"))),{},{productId:e.id,productName:e.name})))},routerTo:function(e){this.$router.push(e)}}},m=c,u=r("2877"),d=Object(u["a"])(m,a,o,!1,null,null,null);t["default"]=d.exports},"5dbc":function(e,t,r){var a=r("d3f4"),o=r("8b97").set;e.exports=function(e,t,r){var n,i=t.constructor;return i!==r&&"function"==typeof i&&(n=i.prototype)!==r.prototype&&a(n)&&o&&o(e,n),e}},"6d67":function(e,t,r){"use strict";var a=r("5ca1"),o=r("0a49")(1);a(a.P+a.F*!r("2f21")([].map,!0),"Array",{map:function(e){return o(this,e,arguments[1])}})},"8b97":function(e,t,r){var a=r("d3f4"),o=r("cb7c"),n=function(e,t){if(o(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,r){return n(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:n}},aa77:function(e,t,r){var a=r("5ca1"),o=r("be13"),n=r("79e5"),i=r("fdef"),s="["+i+"]",l="​",c=RegExp("^"+s+s+"*"),m=RegExp(s+s+"*$"),u=function(e,t,r){var o={},s=n((function(){return!!i[e]()||l[e]()!=l})),c=o[e]=s?t(d):i[e];r&&(o[r]=c),a(a.P+a.F*s,"String",o)},d=u.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(m,"")),e};e.exports=u},c5f6:function(e,t,r){"use strict";var a=r("7726"),o=r("69a8"),n=r("2d95"),i=r("5dbc"),s=r("6a99"),l=r("79e5"),c=r("9093").f,m=r("11e9").f,u=r("86cc").f,d=r("aa77").trim,f="Number",p=a[f],b=p,h=p.prototype,g=n(r("2aeb")(h))==f,v="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():d(t,3);var r,a,o,n=t.charCodeAt(0);if(43===n||45===n){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+t}for(var i,l=t.slice(2),c=0,m=l.length;c<m;c++)if(i=l.charCodeAt(c),i<48||i>o)return NaN;return parseInt(l,a)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(g?l((function(){h.valueOf.call(r)})):n(r)!=f)?i(new b(y(t)),r,p):y(t)};for(var w,_=r("9e1e")?c(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;_.length>O;O++)o(b,w=_[O])&&!o(p,w)&&u(p,w,m(b,w));p.prototype=h,h.constructor=p,r("2aba")(a,f,p)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);