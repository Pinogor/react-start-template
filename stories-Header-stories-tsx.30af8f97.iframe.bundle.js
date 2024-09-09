"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[566],{"./src/stories/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_header_Header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/header/Header.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Shared/Header",component:_components_header_Header__WEBPACK_IMPORTED_MODULE_1__.A};var Template=function Template(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_header_Header__WEBPACK_IMPORTED_MODULE_1__.A,{})};Template.displayName="Template";var Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Header />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>header_Header});__webpack_require__("./node_modules/react/index.js");var Logo=__webpack_require__("./src/components/logo/Logo.tsx"),ThemeSwitcher=__webpack_require__("./src/components/theme/ThemeSwitcher.tsx"),LanguageSwitcher=__webpack_require__("./src/components/i18n/LanguageSwitcher.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),header=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/header/header.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(header.A,options);header.A&&header.A.locals&&header.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Header=function Header(){return(0,jsx_runtime.jsxs)("header",{className:"header",children:[(0,jsx_runtime.jsx)(Logo.A,{}),(0,jsx_runtime.jsxs)("div",{className:"header-controls",children:[(0,jsx_runtime.jsx)(LanguageSwitcher.A,{}),(0,jsx_runtime.jsx)(ThemeSwitcher.A,{})]})]})};Header.displayName="Header";const header_Header=Header;try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/i18n/LanguageProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>LanguageProvider,o:()=>useLanguage});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),LanguageContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({toggleLanguage:function toggleLanguage(){}}),LanguageProvider=function LanguageProvider(_ref){var children=_ref.children,i18n=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.Bd)().i18n;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var savedLanguage=localStorage.getItem("language");savedLanguage&&i18n.changeLanguage(savedLanguage)}),[i18n]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LanguageContext.Provider,{value:{toggleLanguage:function toggleLanguage(){var newLanguage="en"===i18n.language?"ru":"en";i18n.changeLanguage(newLanguage),localStorage.setItem("language",newLanguage)}},children})};LanguageProvider.displayName="LanguageProvider";var useLanguage=function useLanguage(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LanguageContext)};try{LanguageProvider.displayName="LanguageProvider",LanguageProvider.__docgenInfo={description:"",displayName:"LanguageProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/i18n/LanguageProvider.tsx#LanguageProvider"]={docgenInfo:LanguageProvider.__docgenInfo,name:"LanguageProvider",path:"src/components/i18n/LanguageProvider.tsx#LanguageProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/i18n/LanguageSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>i18n_LanguageSwitcher});__webpack_require__("./node_modules/react/index.js");var LanguageProvider=__webpack_require__("./src/components/i18n/LanguageProvider.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),languageSwitcher=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/i18n/languageSwitcher.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(languageSwitcher.A,options);languageSwitcher.A&&languageSwitcher.A.locals&&languageSwitcher.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LanguageSwitcher=function LanguageSwitcher(){var toggleLanguage=(0,LanguageProvider.o)().toggleLanguage,_useTranslation=(0,es.Bd)(),i18n=_useTranslation.i18n,t=_useTranslation.t;return(0,jsx_runtime.jsx)("button",{className:"language-switcher-button",onClick:toggleLanguage,children:"en"===i18n.language?t("languageSwitcher.switchToRussian"):t("languageSwitcher.switchToEnglish")})};LanguageSwitcher.displayName="LanguageSwitcher";const i18n_LanguageSwitcher=LanguageSwitcher;try{LanguageSwitcher.displayName="LanguageSwitcher",LanguageSwitcher.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/i18n/LanguageSwitcher.tsx#LanguageSwitcher"]={docgenInfo:LanguageSwitcher.__docgenInfo,name:"LanguageSwitcher",path:"src/components/i18n/LanguageSwitcher.tsx#LanguageSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>logo_Logo});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),logo=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/logo/logo.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(logo.A,options);logo.A&&logo.A.locals&&logo.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Logo=function Logo(){return(0,jsx_runtime.jsx)("div",{className:"logo",children:"Logo"})};Logo.displayName="Logo";const logo_Logo=Logo;try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/theme/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useTheme,N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({theme:"light",toggleTheme:function toggleTheme(){}}),ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem("theme")||"light"),2),theme=_useState2[0],setTheme=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){document.documentElement.setAttribute("data-theme",theme)}),[theme]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ThemeContext.Provider,{value:{theme,toggleTheme:function toggleTheme(){var newTheme="light"===theme?"dark":"light";setTheme(newTheme),localStorage.setItem("theme",newTheme)}},children})};ThemeProvider.displayName="ThemeProvider";var useTheme=function useTheme(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext)};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/theme/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/components/theme/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/theme/ThemeSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>theme_ThemeSwitcher});__webpack_require__("./node_modules/react/index.js");var ThemeProvider=__webpack_require__("./src/components/theme/ThemeProvider.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),themeSwitcher=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/theme/themeSwitcher.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(themeSwitcher.A,options);themeSwitcher.A&&themeSwitcher.A.locals&&themeSwitcher.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeSwitcher=function ThemeSwitcher(){var _useTheme=(0,ThemeProvider.D)(),theme=_useTheme.theme,toggleTheme=_useTheme.toggleTheme,t=(0,es.Bd)().t;return(0,jsx_runtime.jsx)("button",{className:"theme-switcher-button",onClick:toggleTheme,children:t("light"===theme?"themeSwitcher.dark":"themeSwitcher.light")})};ThemeSwitcher.displayName="ThemeSwitcher";const theme_ThemeSwitcher=ThemeSwitcher;try{ThemeSwitcher.displayName="ThemeSwitcher",ThemeSwitcher.__docgenInfo={description:"",displayName:"ThemeSwitcher",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/theme/ThemeSwitcher.tsx#ThemeSwitcher"]={docgenInfo:ThemeSwitcher.__docgenInfo,name:"ThemeSwitcher",path:"src/components/theme/ThemeSwitcher.tsx#ThemeSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/header/header.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* src/components/header/header.css */\n\n.header {\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding: 10px 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; /* Разделяет элементы на противоположные стороны */\n}\n\n.header-controls {\n  display: flex;\n  flex-direction: column; /* Располагает элементы вертикально */\n  align-items: flex-end; /* Выравнивает элементы по правому краю */\n}\n\n.logo {\n  margin-right: auto; /* Отодвигает логотип к левому краю */\n}","",{version:3,sources:["webpack://./src/components/header/header.css"],names:[],mappings:"AAAA,qCAAqC;;AAErC;EACE,gBAAgB;EAChB,MAAM;EACN,uBAAuB;EACvB,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,8BAA8B,EAAE,kDAAkD;AACpF;;AAEA;EACE,aAAa;EACb,sBAAsB,EAAE,qCAAqC;EAC7D,qBAAqB,EAAE,yCAAyC;AAClE;;AAEA;EACE,kBAAkB,EAAE,qCAAqC;AAC3D",sourcesContent:["/* src/components/header/header.css */\n\n.header {\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding: 10px 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; /* Разделяет элементы на противоположные стороны */\n}\n\n.header-controls {\n  display: flex;\n  flex-direction: column; /* Располагает элементы вертикально */\n  align-items: flex-end; /* Выравнивает элементы по правому краю */\n}\n\n.logo {\n  margin-right: auto; /* Отодвигает логотип к левому краю */\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/i18n/languageSwitcher.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".language-switcher-button {\n  padding: 8px 12px;\n  border: none;\n  background-color: #2c2c2c;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.language-switcher-button:hover {\n  background-color: #2c2c2c;\n}","",{version:3,sources:["webpack://./src/components/i18n/languageSwitcher.css"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:[".language-switcher-button {\n  padding: 8px 12px;\n  border: none;\n  background-color: #2c2c2c;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.language-switcher-button:hover {\n  background-color: #2c2c2c;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/logo/logo.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".logo {\n  width: 50px;\n  height: 50px;\n  background-color: #333;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 20px;\n  font-weight: bold;\n}","",{version:3,sources:["webpack://./src/components/logo/logo.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB",sourcesContent:[".logo {\n  width: 50px;\n  height: 50px;\n  background-color: #333;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 20px;\n  font-weight: bold;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./src/components/theme/themeSwitcher.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".theme-switcher-button {\n  margin-bottom: 10px; /* Отступ между кнопками */\n  padding: 8px 12px;\n  border: none;\n  background-color: #2c2c2c;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.theme-switcher-button:hover {\n  background-color: #2c2c2c;\n}","",{version:3,sources:["webpack://./src/components/theme/themeSwitcher.css"],names:[],mappings:"AAAA;EACE,mBAAmB,EAAE,0BAA0B;EAC/C,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:[".theme-switcher-button {\n  margin-bottom: 10px; /* Отступ между кнопками */\n  padding: 8px 12px;\n  border: none;\n  background-color: #2c2c2c;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.theme-switcher-button:hover {\n  background-color: #2c2c2c;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);