(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0936":function(t,e,n){var a=n("6ca7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("85cb").default;r("d76c2c42",a,!0,{sourceMap:!1,shadowMode:!1})},"31af":function(t,e,n){t.exports=n.p+"img/person.9cb95bf6.svg"},"4b09":function(t,e,n){t.exports=n.p+"img/clothes.2b623ebd.svg"},"62fe":function(t,e,n){"use strict";var a=n("0936"),r=n.n(a);r.a},"6ca7":function(t,e,n){var a=n("abd8");e=a(!1),e.push([t.i,".cytoscape--container[data-v-d6337bee]{text-align:left;position:relative;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff}.cytoscape--container .cytoscape--container__graph[data-v-d6337bee],.cytoscape--container .cytoscape--container__loading[data-v-d6337bee]{position:absolute;top:0;left:0;right:0;bottom:0}.cytoscape--container .cytoscape--container__graph .text[data-v-d6337bee],.cytoscape--container .cytoscape--container__loading .text[data-v-d6337bee]{padding:10px}",""]),t.exports=e},a6bf:function(t,e,n){"use strict";n("c354");var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cytoscape--container"},[n("div",{ref:"cytoscapeBox",staticClass:"cytoscape--container__graph"}),t._t("legend",null,{data:t.data,category:t.category})],2)},r=[],o=(n("7ae7"),n("86dd"),n("09ee"),n("af82"),n("5d5d"),n("a677"),n("1a8c"),n("4423"),n("ce6b"),n("79dd"),n("3a20"),n("b3f9"),n("baa4"),n("3547"),n("ef8e"),n("3e5e"),n("9a14"),n("252a"),n("419a"),n("e980")),c=n("0d94"),s=n("d15f"),i=n.n(s),u={_cxttap:function(t){var e=t.target;this.elements().unselect(),e!==this&&this.elements(e).select()},_select:function(t){var e=t.target;if(e!==this){var n=this.elements(":selected"),a=this.collection();a=e.isNode()?n.closedNeighborhood():a.merge(n).merge(n.connectedNodes());var r=this.elements().difference(a);r.removeClass("hover").addClass("unhover"),a.removeClass("unhover").addClass("hover")}},_unselect:function(){this.elements().removeClass("unhover").removeClass("hover")}};function l(t){var e="",n=[];return["select","unselect","cxttap"].forEach((function(a){e?t.on(a,e,u["_".concat(a)]):t.on(a,u["_".concat(a)]),n.push((function(){e?t.off(a,e,u["_".concat(a)]):t.off(a,u["_".concat(a)])}))})),n}var d=l,y=(n("e90c"),n("c1f4"),n("c1b0"),n("f4a0"),n("7267"),n("d780"),n("54d0")),f=function(t){return"[object Object]"===Object.prototype.toString.call(t)},h=function(t){return"[object Array]"===Object.prototype.toString.call(t)},g=function(t){return"[object Function]"===Object.prototype.toString.call(t)},p=function(t){return void 0===t},v=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"merge",n=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;if(f(n)&&f(a))for(var r in a)f(a[r])?(n[r]=f(n[r])?n[r]:{},n[r]=t(e,n[r],a[r])):h(a[r])?(n[r]=h(n[r])?n[r]:[],n[r]=t(e,n[r],a[r])):p(a[r])||(n[r]=a[r]);else h(n)&&h(a)&&("merge"===e?a.forEach((function(r,o){f(r)?(n[o]=f(n[o])?n[o]:{},n[o]=t(e,n[o],r)):h(r)?(n[o]=h(n[o])?n[o]:[],n[o]=t(e,n[o],r)):p(r)||(n[o]=a[o])})):"concat"===e?n=n.concat(a):"findSelector"===e?a.forEach((function(a){var r=n.find((function(t){return t.selector===a.selector}));r?r=t(e,r,a):n.push(a)})):n=a);return n},m=function t(){var e=Array.from(arguments);if(!(e.length<2))return e[1]=v.apply(void 0,Object(y["a"])(e)),e.splice(2,1),e.length>2?t.apply(void 0,Object(y["a"])(e)):2===e.length?e[1]:null},b=function(){var t=Array.from(arguments);return m.apply(void 0,["merge"].concat(Object(y["a"])(t)))},k=function(){var t=Array.from(arguments);return m.apply(void 0,["concat"].concat(Object(y["a"])(t)))},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return(t||"")+Number(Math.random().toString().substr(3,e)+Date.now()).toString(36)},I=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=(t||"").toLowerCase();if(n&&I.test(n)){if(4===n.length){for(var a="#",r=1;r<4;r+=1)a+=n.slice(r,r+1).concat(n.slice(r,r+1));n=a}for(var o=[],s=1;s<7;s+=2)o.push(parseInt("0x"+n.slice(s,s+2)));return o.push(e),"rgba("+o.join(",")+")"}if(/^(rgb|RGB)/.test(t)){var i=t.replace(/(?:\(|\)|rgba|RGBA|rgb|RGB)*/g,"").split(","),u=Object(c["a"])(i,3),l=u[0],d=u[1],y=u[2];return"rgba(".concat(l,", ").concat(d,", ").concat(y,", ").concat(e,")")}return t}var O={"z-index":2},_={"z-index":1},S=["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],j={nodes:{key:"category",styles:S.map((function(t){return b({},O,{"background-color":t,"border-color":t})}))},edges:{key:"category",styles:[JSON.parse(JSON.stringify(_))]}},x={style:[{selector:":active",style:{"overlay-opacity":0}},{selector:"node",style:JSON.parse(JSON.stringify(O))},{selector:"edge",style:JSON.parse(JSON.stringify(_))},{selector:".hover",style:{"background-opacity":1,"background-image-opacity":1,"z-index":99}},{selector:"edge.hover",style:{width:2,"z-index":98}},{selector:".unhover",style:{opacity:.3}},{selector:"edge.unhover",style:{width:1,opacity:.3}}]},D={name:"vcytoscape",props:{option:{type:Object,default:function(){return{}}},category:{type:Object,default:function(){return{}}},data:{type:[Array,Object],default:function(){return[]}}},data:function(){return{$cytoscapeInstance:null,events:[],cacheRandomIdMap:{},filters:{},$layout:null,$removeData:null}},computed:{unifyData:function(){return h(this.data)?this.filterEdgeWithoutNode({nodes:this.data.filter((function(t){return"nodes"===t.group})),edges:this.data.filter((function(t){return"edges"===t.group}))}):this.filterEdgeWithoutNode(this.data)},nodesCategorys:function(){var t=this,e=Array.from(new Set(this.unifyData.nodes.map((function(e){return t.dataByCategory(e.data,"nodes")})).filter((function(t){return!!t}))));return e},nodesCategoryBy:function(){if(this.category&&this.category.nodes){if(h(this.category.nodes))return this.category.nodes;if(f(this.category.nodes))return this.category.nodes.key}return null},edgesCategorys:function(){var t=this,e=Array.from(new Set(this.unifyData.edges.map((function(e){return t.dataByCategory(e.data,"edges")})).filter((function(t){return!!t}))));return e},edgesCategoryBy:function(){if(this.category&&this.category.edges){if(h(this.category.edges))return this.category.edges;if(f(this.category.edges))return this.category.edges.key}return null},categoryNameToClass:function(){var t=this,e={};return this.nodesCategorys.forEach((function(n){e["nodes_".concat(n)]=t.getCacheRandomId("nodes_".concat(n),"node_class_")})),this.edgesCategorys.forEach((function(n){e["edges_".concat(n)]=t.getCacheRandomId("edges_".concat(n),"edge_class_")})),e},categoryConfig:function(){var t=this,e=[],n={};return this.category&&Object.keys(this.category).forEach((function(a){var r=t.category[a],o=j[a].styles,c=t["".concat(a,"Categorys")];if(h(r))e=e.concat(r.map((function(e,r){var c=e.name,s=e.style,i=e.status,u=r%o.length;return n[a+"_"+c]=i,{selector:".".concat(t.categoryNameToClass[a+"_"+c]),style:b({},o[u],s)}})));else{var s=r.styles||[],i=r.status||[];if(i){var u=h(i);c.forEach((function(t,e){var r=u?e%i.length:i[t];n[a+"_"+t]=i[r]}))}s&&(h(s)?e=e.concat(c.map((function(e,n){var r=n%s.length,c=n%o.length;return{selector:".".concat(t.categoryNameToClass[a+"_"+e]),style:b({},o[c],s[r])}}))):f(s)&&(e=e.concat(c.map((function(e,n){var r=n%o.length;return{selector:".".concat(t.categoryNameToClass[a+"_"+e]),style:b({},o[r],s[e]||{})}})))))}})),{styles:e,status:n}},cytoscapeOptions:function(){var t=this.layoutName?{layout:{name:this.layoutName}}:{},e=k({},x,{style:this.categoryConfig.styles},this.option||{},t);return e}},watch:{unifyData:{handler:function(t){this.setData(t)},deep:!0},cytoscapeOptions:{handler:function(t){this.$cytoscapeInstance&&this.setOptions(t)},deep:!0}},methods:{getCacheRandomId:function(t,e,n){return this.cacheRandomIdMap[t]=this.cacheRandomIdMap[t]||C(e,n),this.cacheRandomIdMap[t]},getDataFromKey:function(t,e){if(!e||e.length<1)return t;if(1===e.length)return t[e[0]];var n=e.shift();return this.getDataFromKey(t[n]||{},e)},dataByCategory:function(t,e){if(h(this["".concat(e,"CategoryBy")])){var n=this["".concat(e,"CategoryBy")].find((function(e){return e.matching&&e.matching(t)}));return n?g(n.name)?n.name(t):n.name:void 0}var a=(this["".concat(e,"CategoryBy")]||"").split(".");return this.getDataFromKey(t,a)},getDataWithClassesFromType:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nodes",n=this.dataByCategory(t.data,e);return t.classes=t.classes||[],b(t,this.categoryConfig.status[e+"_"+n]),n&&t.classes.push(this.categoryNameToClass[e+"_"+n]),t},getDataWithClasses:function(t){var e=this,n=JSON.parse(JSON.stringify(t||{})),a=n.nodes,r=n.edges;return a.map((function(t){return e.getDataWithClassesFromType(t,"nodes")})).concat(r.map((function(t){return e.getDataWithClassesFromType(t,"edges")})))},getAllElements:function(){return this.$cytoscapeInstance&&this.$cytoscapeInstance.elements().merge(this.$removeData||this.$cytoscapeInstance.collection())},setOptions:function(t){var e=this;this.$cytoscapeInstance&&(this.$cytoscapeInstance.startBatch(),Object.keys(t).forEach((function(n){e.$cytoscapeInstance[n]&&e.$cytoscapeInstance[n](t[n])})),this.$cytoscapeInstance.endBatch(),this.reLayout())},filterEdgeWithoutNode:function(t){var e=t.nodes||[],n=e.map((function(t){var e=t.data;return e.id})),a=(t.edges||[]).filter((function(t){var e=t.data;return n.includes(e.source)&&n.includes(e.target)}));return{nodes:e,edges:a}},setData:function(t){var e=this.getDataWithClasses(t);if(!this.$cytoscapeInstance)return this.createCytoscape(e);this.$cytoscapeInstance.startBatch();var n=this.getAllElements(),a=n.filter((function(t){return!e.some((function(e){return t.id()===e.data.id}))}));this.$cytoscapeInstance.remove(a);var r=[];e.forEach((function(t,e){var a=n.$id(t.data.id);if(a&&a.length)for(var o=Object.keys(t),c=o.length,s=0;s<c;s++){var i=o[s];switch(i){case"data":JSON.stringify(a.data())!==JSON.stringify(t.data)&&a.data(t.data);break;case"selected":t.selected?a.select():a.unselect();break;case"selectable":t.selectable?a.selectify():a.unselectify();break;case"locked":t.locked?a.lock():a.unlock();break;case"grabbable":t.grabbable?a.grabify():a.ungrabify();break;case"pannable":t.pannable?a.panify():a.unpanify();break}}else r.push(t)})),this.$cytoscapeInstance.add(r),this.$cytoscapeInstance.endBatch(),this.renderFilter(),this.reLayout()},createCytoscape:function(t){var e=this,n=b({},this.cytoscapeOptions,{container:this.$refs.cytoscapeBox,elements:t||[]});n.layout={name:"null"},this.$cytoscapeInstance=i()(n),this.events=this.events.concat(d(this.$cytoscapeInstance));for(var a=function(){var t=Object(c["a"])(o[r],2),n=t[0],a=t[1],s=function(t){a(t)};e.$cytoscapeInstance.on(n,s),e.events.push((function(){e.$cytoscapeInstance.off(n,s)}))},r=0,o=Object.entries(this.$listeners);r<o.length;r++)a();this.$cytoscapeInstance.ready(),t&&t.length&&this.reLayout()},reLayout:function(){this.$layout&&this.$layout.stop(),this.$layout=this.$cytoscapeInstance.layout(this.cytoscapeOptions.layout),this.$layout.run()},destroy:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$layout&&t.$layout.stop(),!t.$cytoscapeInstance){e.next=7;break}return e.next=4,t.events.forEach((function(t){t()}));case 4:return t.events=[],e.next=7,t.$cytoscapeInstance.destroy();case 7:t.filters={},t.$removeData=null;case 9:case"end":return e.stop()}}),e)})))()},resetFilter:function(t,e){t?delete this.filters[t]:this.filters={},this.renderFilter(e)},filterByFunction:function(t,e,n){var a=e||C("func");return this.filters[a]=t,this.renderFilter(n),a},renderFilter:function(t){var e=this;if(this.$cytoscapeInstance){this.$cytoscapeInstance.startBatch();var n=this.getAllElements(),a=n;Object.keys(this.filters).forEach((function(t){a=e.filters[t](a)}));var r=a.nodes(),o=a.edges().filter((function(t){return r.contains(t.target())&&r.contains(t.source())}));return a=r.merge(o),this.$removeData=n.difference(a),this.$cytoscapeInstance.remove(this.$removeData),this.$cytoscapeInstance.add(a),this.$cytoscapeInstance.endBatch(),t&&this.reLayout(),this.$cytoscapeInstance.emit("update"),a}}},mounted:function(){this.setData(this.unifyData)},beforeDestroy:function(){this.destroy()}},B=D,M=(n("62fe"),n("623f")),w=Object(M["a"])(B,a,r,!1,null,"d6337bee",null),N=w.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-legend",{attrs:{data:t.legendData,option:t.option},model:{value:t.legendModel,callback:function(e){t.legendModel=e},expression:"legendModel"}})},T=[],A=n("3a61"),F={name:"vcytoscapeLegend",components:{vueLegend:A["vueLegend"]},props:{category:{type:[Object,Array],default:function(){return{}}},option:{type:Object,default:function(){return{}}},data:{type:[Array,Object],default:function(){return[]}},type:{type:String,default:"nodes"},model:{type:Object}},model:{prop:"model",event:"change"},data:function(){return{innerModel:{}}},computed:{categoryInType:function(){return this.category&&this.category[this.type]},legendModel:{get:function(){return b({},this.model||this.innerModel)},set:function(t){this.innerModel=t,this.$emit("change",t)}},legendData:function(){var t=this;return this.categorys.map((function(e){var n=t.categoryParams[e]||{},a=n.style,r=n.formatter,o=a.backgroundColor,c=a.backgroundImage,s=a.backgroundPosition,i=a.backgroundRepeat,u=a.backgroundSize,l=a.borderColor;return Object.assign({},{activeTagStyle:{backgroundColor:o,backgroundImage:c,backgroundPosition:s,backgroundRepeat:i,backgroundSize:u,borderColor:l},tagStyle:{borderStyle:a.borderStyle},activeTextStyle:{color:a.borderColor||a.backgroundColor},formatter:r},{name:e})}))},categoryParams:function(){var t=this,e={};if(this.categoryInType)if(h(this.categoryInType))this.categoryInType.forEach((function(n,a){var r=n.name,o=n.style,c=n.formatter,s=a%j[t.type].styles.length;e[r]=e[r]||{},e[r].style=b({},j[t.type].styles[s],o),e[r].formatter=c}));else{var n=this.categoryInType.styles||{};h(n)?this.categorys.forEach((function(a,r){var o=r%n.length,c=r%j[t.type].styles.length;e[a]=e[a]||{},e[a].style=b({},j[t.type].styles[c],n[o])})):f(n)&&this.categorys.forEach((function(a,r){var o=r%j[t.type].styles.length;e[a]=e[a]||{},e[a].style=b({},j[t.type].styles[o],n[a]||{})}))}return this.getTransStyle(e)},unifyData:function(){return h(this.data)?{nodes:this.data.filter((function(t){return"nodes"===t.group})),edges:this.data.filter((function(t){return"edges"===t.group}))}:this.data},categorys:function(){var t=this,e=Array.from(new Set((this.unifyData[this.type]||[]).map((function(e){return t.dataByCategory(e.data)})).filter((function(t){return!!t}))));return e},categoryBy:function(){if(this.categoryInType){if(h(this.categoryInType))return this.categoryInType;if(f(this.categoryInType))return this.categoryInType.key}return null}},methods:{getTransStyle:function(t){var e="nodes"===this.type;return Object.keys(t).forEach((function(n){t[n].style={backgroundColor:t[n].style["background-color"]?$(t[n].style["background-color"],t[n].style["background-opacity"]||1):"none",backgroundImage:t[n].style["background-image"]?"url(".concat(t[n].style["background-image"],")"):"none",backgroundPosition:"center",backgroundRepeat:t[n].style["background-repeat"],backgroundSize:"".concat(t[n].style["background-width"]," ").concat(t[n].style["background-height"]),borderColor:e?t[n].style["border-color"]:t[n].style["line-color"],borderStyle:e?t[n].style["border-style"]||"not specified":t[n].style["line-style"]||"not specified"}})),t},getDataFromKey:function(t,e){if(!e||e.length<1)return t;if(1===e.length)return t[e[0]];var n=e.shift();return this.getDataFromKey(t[n]||{},e)},dataByCategory:function(t){if(h(this.categoryBy)){var e=this.categoryBy.find((function(e){return e.matching&&e.matching(t)}));return e?g(e.name)?e.name(t):e.name:void 0}var n=(this.categoryBy||"").split(".");return this.getDataFromKey(t,n)}}},R=F,J=Object(M["a"])(R,E,T,!1,null,null,null),z=J.exports;e["a"]={install:function(t,e){t.component(N.name,N),t.component(z.name,z),e.beforeCreate&&e.beforeCreate(i.a)}}},bf3e:function(t,e,n){t.exports=n.p+"img/computer.5b459181.svg"},df9d:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("7ae7"),n("1a8c"),n("c354"),n("f4a0"),n("3a20"),n("7267");var a=["hospital","clothes","computer","person","flower","tree","desk","house","water","cup"],r=["has","goto","love"],o=["2017","2018","2019"];function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return(t||"")+Number(Math.random().toString().substr(3,e)+Date.now()).toString(36)}function s(t){for(var e=[],n=0;n<t;n++){var r=a[Math.floor(Math.random()*a.length)],o={id:c("node_"),group:r,parent:r};o.label=o.group+"-node"+n,e.push({group:"nodes",data:o,id:o.id})}return e}function i(t,e){for(var n=[],a=0;a<e-1;a++){var s=t[a+1].data.id,i=t[Math.floor(Math.sqrt(a))].data.id,u={target:s,source:i,id:c("edge_"),group:r[Math.floor(Math.random()*r.length)],time:o[Math.floor(Math.random()*o.length)]+"-"+Math.ceil(12*Math.random())+"-"+Math.ceil(30*Math.random())};u.label="edge"+a,u.name="edge"+a,n.push({data:u,group:"edges",id:u.id})}return n}function u(t){var e=s(t),n=i(e,t);return e.concat(n)}u(20)},ea42:function(t,e,n){t.exports=n.p+"img/hospital.8a4eafbc.svg"}}]);
//# sourceMappingURL=chunk-common.958e7f9a.js.map