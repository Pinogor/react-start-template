/*! For license information please see 729.384c326e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[729],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react-i18next/dist/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r9:()=>initReactI18next,Bd:()=>useTranslation_useTranslation});var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/void-elements/index.js");Object.create(null);const alreadyWarned={},utils_warnOnce=(...args)=>{utils_isString(args[0])&&alreadyWarned[args[0]]||(utils_isString(args[0])&&(alreadyWarned[args[0]]=new Date),((...args)=>{console?.warn&&(utils_isString(args[0])&&(args[0]=`react-i18next:: ${args[0]}`),console.warn(...args))})(...args))},loadedClb=(i18n,cb)=>()=>{if(i18n.isInitialized)cb();else{const initialized=()=>{setTimeout((()=>{i18n.off("initialized",initialized)}),0),cb()};i18n.on("initialized",initialized)}},loadNamespaces=(i18n,ns,cb)=>{i18n.loadNamespaces(ns,loadedClb(i18n,cb))},loadLanguages=(i18n,lng,ns,cb)=>{utils_isString(ns)&&(ns=[ns]),ns.forEach((n=>{i18n.options.ns.indexOf(n)<0&&i18n.options.ns.push(n)})),i18n.loadLanguages(lng,loadedClb(i18n,cb))},utils_isString=obj=>"string"==typeof obj,matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=m=>htmlEntities[m];let defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:text=>text.replace(matchHtmlEntity,unescapeHtmlEntity)};let i18nInstance;const initReactI18next={type:"3rdParty",init(instance){((options={})=>{defaultOptions={...defaultOptions,...options}})(instance.options.react),(instance=>{i18nInstance=instance})(instance)}},context_I18nContext=(0,react.createContext)();class ReportNamespaces{constructor(){this.usedNamespaces={}}addUsedNamespaces(namespaces){namespaces.forEach((ns=>{this.usedNamespaces[ns]??=!0}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const alwaysNewT=(i18n,language,namespace,keyPrefix)=>i18n.getFixedT(language,namespace,keyPrefix),useTranslation_useTranslation=(ns,props={})=>{const{i18n:i18nFromProps}=props,{i18n:i18nFromContext,defaultNS:defaultNSFromContext}=(0,react.useContext)(context_I18nContext)||{},i18n=i18nFromProps||i18nFromContext||i18nInstance;if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new ReportNamespaces),!i18n){utils_warnOnce("You will need to pass in an i18next instance by using initReactI18next");const notReadyT=(k,optsOrDefaultValue)=>{return utils_isString(optsOrDefaultValue)?optsOrDefaultValue:"object"==typeof(obj=optsOrDefaultValue)&&null!==obj&&utils_isString(optsOrDefaultValue.defaultValue)?optsOrDefaultValue.defaultValue:Array.isArray(k)?k[k.length-1]:k;var obj},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react?.wait&&utils_warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const i18nOptions={...defaultOptions,...i18n.options.react,...props},{useSuspense,keyPrefix}=i18nOptions;let namespaces=ns||defaultNSFromContext||i18n.options?.defaultNS;namespaces=utils_isString(namespaces)?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces?.(namespaces);const ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((n=>((ns,i18n,options={})=>i18n.languages&&i18n.languages.length?i18n.hasLoadedNamespace(ns,{lng:options.lng,precheck:(i18nInstance,loadNotPending)=>{if(options.bindI18n?.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):(utils_warnOnce("i18n.languages were undefined or empty",i18n.languages),!0))(n,i18n,i18nOptions))),memoGetT=((i18n,language,namespace,keyPrefix)=>(0,react.useCallback)(alwaysNewT(i18n,language,namespace,keyPrefix),[i18n,language,namespace,keyPrefix]))(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),getT=()=>memoGetT,getNewT=()=>alwaysNewT(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),[t,setT]=(0,react.useState)(getT);let joinedNS=namespaces.join();props.lng&&(joinedNS=`${props.lng}${joinedNS}`);const previousJoinedNS=((value,ignore)=>{const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=ignore?ref.current:value}),[value,ignore]),ref.current})(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((()=>{const{bindI18n,bindI18nStore}=i18nOptions;isMounted.current=!0,ready||useSuspense||(props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>{isMounted.current&&setT(getNewT)})):loadNamespaces(i18n,namespaces,(()=>{isMounted.current&&setT(getNewT)}))),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getNewT);const boundReset=()=>{isMounted.current&&setT(getNewT)};return bindI18n&&i18n?.on(bindI18n,boundReset),bindI18nStore&&i18n?.store.on(bindI18nStore,boundReset),()=>{isMounted.current=!1,i18n&&bindI18n?.split(" ").forEach((e=>i18n.off(e,boundReset))),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((e=>i18n.store.off(e,boundReset)))}}),[i18n,joinedNS]),(0,react.useEffect)((()=>{isMounted.current&&ready&&setT(getT)}),[i18n,keyPrefix,ready]);const ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((resolve=>{props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>resolve())):loadNamespaces(i18n,namespaces,(()=>resolve()))}))}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./node_modules/void-elements/index.js":module=>{module.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);