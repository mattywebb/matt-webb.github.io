window.Modernizr=function(n,e,t){function r(n){d.cssText=n}function o(n,e){return r(prefixes.join(n+";")+(e||""))}function i(n,e){return typeof n===e}function u(n,e){return!!~(""+n).indexOf(e)}function c(n,e,r){for(var o in n){var u=e[n[o]];if(u!==t)return r===!1?n[o]:i(u,"function")?u.bind(r||e):u}return!1}var a="2.8.3",f={},s=e.documentElement,l="modernizr",p=e.createElement(l),d=p.style,v,y={}.toString,w={svg:"http://www.w3.org/2000/svg"},m={},g={},h={},b=[],E=b.slice,C,S={}.hasOwnProperty,T;T=i(S,"undefined")||i(S.call,"undefined")?function(n,e){return e in n&&i(n.constructor.prototype[e],"undefined")}:function(n,e){return S.call(n,e)},Function.prototype.bind||(Function.prototype.bind=function(n){var e=this;if("function"!=typeof e)throw new TypeError;var t=E.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=e.prototype;var i=new o,u=e.apply(i,t.concat(E.call(arguments)));return Object(u)===u?u:i}return e.apply(n,t.concat(E.call(arguments)))};return r}),m.svg=function(){return!!e.createElementNS&&!!e.createElementNS(w.svg,"svg").createSVGRect};for(var j in m)T(m,j)&&(C=j.toLowerCase(),f[C]=m[j](),b.push((f[C]?"":"no-")+C));return f.addTest=function(n,e){if("object"==typeof n)for(var r in n)T(n,r)&&f.addTest(r,n[r]);else{if(n=n.toLowerCase(),f[n]!==t)return f;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(s.className+=" "+(e?"":"no-")+n),f[n]=e}return f},r(""),p=v=null,f._version=a,f}(this,this.document);