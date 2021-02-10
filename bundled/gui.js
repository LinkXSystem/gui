var gui=function(t){"use strict";
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const e=new WeakMap,n=t=>"function"==typeof t&&e.has(t),s="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},o={},r={},l=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${l}--\x3e`,c=new RegExp(`${l}|${a}`),d="$lit$";class h{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:h,values:{length:p}}=t;for(;a<p;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)u(e[t].name,d)&&s++;for(;s-- >0;){const e=h[a],n=f.exec(e)[2],s=n.toLowerCase()+d,i=t.getAttribute(s);t.removeAttribute(s);const o=i.split(c);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const s=t.parentNode,i=e.split(c),o=i.length-1;for(let e=0;e<o;e++){let n,o=i[e];if(""===o)n=m();else{const t=f.exec(o);null!==t&&u(t[2],d)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-d.length)+t[3]),n=document.createTextNode(o)}s.insertBefore(n,t),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(m(),t),n.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(m(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(n.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(l,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const u=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},p=t=>-1!==t.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class g{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o,r=0,l=0,a=i.nextNode();for(;r<n.length;)if(o=n[r],p(o)){for(;l<o.index;)l++,"TEMPLATE"===a.nodeName&&(e.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=e.pop(),a=i.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const _=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),v=` ${l} `;class x{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const o=f.exec(t);e+=null===o?t+(n?v:a):t.substr(0,o.index)+o[1]+o[2]+d+o[3]+l}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==_&&(e=_.createHTML(e)),t.innerHTML=e,t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class y{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new N(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!w(t))return t}let s="";for(let i=0;i<e;i++){s+=t[i];const e=n[i];if(void 0!==e){const t=e.value;if(b(t)||!w(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||b(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}const t=this.__pendingValue;t!==o&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const n=new g(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)n=e[s],void 0===n&&(n=new E(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o}}class k extends y{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new V(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class V extends N{}let S=!1;(()=>{try{const t={get capture(){return S=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class T{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(S?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */;const L=new class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new k(t,e.slice(1),n).parts}if("@"===i)return[new T(t,e.slice(1),s.eventContext)];if("?"===i)return[new C(t,e.slice(1),n)];return new y(t,e,n).parts}handleTextExpression(t){return new E(t)}};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */function M(t){let e=I.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},I.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(l);return n=e.keyString.get(s),void 0===n&&(n=new h(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const I=new Map,P=new WeakMap;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const $=(t,...e)=>new x(t,e,"html",L);class R{constructor(t){this.element=t}rotate(){}scale(){}translate(){}skew(){}matrix(t){const e=t||new Array(9).fill(0);if(this.element){const t=e.join(", ");this.element.style.transform=`matrix(${t})`}return this}}class H{constructor(t){this.element=t}setStyle(t){Object.entries(t).forEach((t=>{const[e,n]=t;this.element.style[e]=n}))}}class j extends HTMLElement{constructor(){super(),this._render()}static register(t){window.customElements.define(`${t}-element`,j)}connectedCallback(){console.warn("the unimplemented function: connectedCallback ！")}disconnectedCallback(){console.warn("the unimplemented function: disconnectedCallback ！")}adoptedCallback(){console.warn("the unimplemented function: adoptedCallback ！")}attributeChangedCallback(t,e,n){console.warn("the unimplemented function: attributeChangedCallback ！")}_handleInitialStyle(t){const e=document.createElement("style");t.appendChild(e)}_render(){const t=this.attachShadow({mode:"open"}),e=document.createElement("div");t.appendChild(e),this._handleInitialStyle(t);const n=this.render();this.element=e,this.primitive=new R(e),this.sheet=new H(e),n&&((t,e,n)=>{let s=P.get(e);void 0===s&&(i(e,e.firstChild),P.set(e,s=new E(Object.assign({templateFactory:M},n))),s.appendInto(e)),s.setValue(t),s.commit()})(n,e)}render(){}}class O extends j{static register(t){window.customElements.define(`${t}-box`,O)}constructor(){super()}connectedCallback(){const t=this.getAttribute("onRef");console.warn(t)}render(){return $`
            <div>
                <slot></slot>
            </div>
        `}}class F extends j{static register(t){window.customElements.define(`${t}-toolbar`,F)}static get observedAttributes(){return["position"]}constructor(){super()}connectedCallback(){const t=this.getAttribute("onRef");console.warn(t)}attributeChangedCallback(t,e,n){switch(t){case"position":this._handleUpdatePosition(n)}}_handleUpdatePosition(t){const e=this.shadowRoot;if(e){const n=e.querySelector(".toolbar"),s=e.querySelector(".content");(null==n?void 0:n.classList)&&n.classList.length>1&&n.classList.remove(n.classList[n.classList.length-1]),(null==s?void 0:s.classList)&&s.classList.length>1&&s.classList.remove(s.classList[s.classList.length-1]),null==n||n.classList.add(t),null==s||s.classList.add(t)}}_handleInitialStyle(t){const e=document.createElement("style");e.textContent="\n            .toolbar {\n                position: absolute;\n\n                min-width: 32px;\n                min-height: 32px;\n\n                border-radius: 4px 4px 4px 4px;\n                background: rgba(255, 255, 255, 1);\n                box-shadow: 0 1px 5px rgb(0 0 0 / 15%);\n            }\n\n            .toolbar.top {\n                top: 0.5em;\n                left: 50%;\n                transform: translateX(-50%);\n\n                align-items: center;\n                justify-content: center;\n\n                padding: 0 1.25em;\n            }\n\n            .toolbar.left {\n                top: 50%;\n                left: 0.5em;\n                transform: translateY(-50%);\n\n                flex-direction: column;\n            }\n\n            .toolbar.right {\n                top: 50%;\n                right: 0.5em;\n                transform: translateY(-50%);\n\n                flex-direction: column;\n            }\n\n            .control {\n                cursor: move;\n\n                width: auto;\n                height: 6px;\n\n                margin: 4px 2px 4px 2px;\n\n                background: #efefef;\n                border-radius: 3px 3px 3px 3px;\n            }\n\n            .content {\n                display: flex;\n            }\n\n            .content.top {\n                align-items: center;\n                justify-content: center;\n            }\n\n            .content.left {\n                flex-direction: column;\n            }\n\n            .content.right {\n                flex-direction: column;\n            }\n        ",t.appendChild(e)}render(){return $`
            <div class="toolbar top">
                <div class="control"></div>
                <div class="content top">
                    <slot><slot>
                </div>
            </div>
        `}}class q{constructor(){}static getInstance(){return B||(B=new q),B}getEventStack(){return this._EventStackCache||(this._EventStackCache=[]),this._EventStackCache}}let B;class W extends j{static register(t){window.customElements.define(`${t}-tool`,W)}static get observedAttributes(){return["command","tooltip"]}constructor(){super()}connectedCallback(){const t=this.shadowRoot;(null==t?void 0:t.querySelector(".tool"))&&this.addEventListener("click",this._handleClick.bind(this))}attributeChangedCallback(t,e,n){const s=this.shadowRoot,i=null==s?void 0:s.querySelector(".tool");i&&(i.dataset[t]=n)}_handleClick(t){const e=this.shadowRoot,n=null==e?void 0:e.querySelector(".tool");if(n){let t={};t.node=n,t.timestamp=window.performance.now(),Array.from(n.attributes).forEach((e=>{const{name:n,value:s}=e;t[n]=s}));const e=q.getInstance().getEventStack();e&&e.push(t)}}_handleInitialStyle(t){const e=document.createElement("style");e.textContent="\n            .tool {\n                cursor: pointer;\n\n                display: flex;\n                align-items: center;\n                justify-content: center;\n\n                width: 32px;\n                height: 32px;\n\n                transition: background 0.3s ease-in-out;\n            }\n\n            .tool:hover {\n                color: #ffffff;\n                background: #efefef;\n            }\n        ",t.appendChild(e)}render(){return $`
            <div class="tool">
                <slot></slot>
            </div>
        `}}class U extends j{static register(t){window.customElements.define(`${t}-icon`,U)}static get observedAttributes(){return["prefix","icon"]}constructor(){super()}connectedCallback(){const t=this.getAttribute("onRef");console.warn(t)}attributeChangedCallback(t,e,n){const s=this.shadowRoot;if(s){const t=s.querySelector(".icon");null==t||t.classList.add(n)}}render(){return $`
            <i class="icon">add</i>
        `}}var Y={getRuntime:function(){return q.getInstance()},render:function(t,e){const n=(new DOMParser).parseFromString(t,"text/xml");n.firstElementChild&&e.appendChild(n.firstElementChild)},register:function(t,e,n){e instanceof Array?e.forEach((e=>{e.register(t)})):e.register(),n&&n()}};return t.Box=O,t.Icon=U,t.Tool=W,t.Toolbar=F,t.default=Y,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
