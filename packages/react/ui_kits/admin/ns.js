// Acceso tolerante al bundle del design system.
// Los componentes estructurales degradan a un contenedor real (nunca a un marcador),
// y toda ausencia se reporta por consola para que un render vacio sea diagnosticable.
(function(){
  var base=window.AplomoDesignSystem_c0efc3||{};
  // Orden estructural: cabeceras antes del contenido, acciones y pie despues.
  var SLOTS=["brand","title","header","topbar","label","nav","center","left","children","right","aside","actions","footer"];
  var warned={};
  function warn(name){ if(!warned[name]){warned[name]=1;console.error("[Aplomo] componente no disponible en el bundle: "+name);} }
  function fallback(name){
    var C=function(props){
      warn(name);
      // Si el componente recibe contenido, se comporta como contenedor: nunca se traga a sus hijos.
      var slots=[];
      if(props) SLOTS.forEach(function(k){ if(props[k]!==undefined&&props[k]!==null&&props[k]!==false) slots.push(props[k]); });
      if(slots.length) return React.createElement("div",{style:{display:"flex",flexDirection:"column",minWidth:0,flex:1}},slots.map(function(v,i){return React.createElement(React.Fragment,{key:i},v);}));
      return React.createElement("span",{style:{display:"inline-flex",alignItems:"center",height:20,padding:"0 6px",borderRadius:3,border:"1px dashed var(--ap-border-strong)",background:"var(--ap-surface-subtle)",color:"var(--ap-text-muted)",font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)"}},"⟪"+name+"⟫");
    };
    C.displayName="Fallback("+name+")";
    return C;
  }
  window.AP_UI=(typeof Proxy!=="undefined")?new Proxy(base,{get:function(t,k){
    if(k in t) return t[k];
    if(typeof k!=="string"||k[0]!==k[0].toUpperCase()) return undefined;
    return fallback(k);
  }}):base;
})();
