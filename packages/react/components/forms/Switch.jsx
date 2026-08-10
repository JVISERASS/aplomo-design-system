import React from "react";

export function Switch({checked,defaultChecked=false,onChange,label,disabled,style,...rest}){
  const controlled=checked!==undefined;
  const [inner,setInner]=React.useState(defaultChecked);
  const value=controlled?checked:inner;
  const handle=e=>{ if(!controlled) setInner(e.target.checked); onChange&&onChange(e); };
  return (
    <label style={{display:"inline-flex",alignItems:"center",gap:"var(--ap-space-2)",cursor:disabled?"not-allowed":"pointer",opacity:disabled?.4:1,...style}} {...rest}>
      <input type="checkbox" checked={value} onChange={handle} disabled={disabled} style={{position:"absolute",opacity:0,width:0,height:0}}/>
      <span style={{width:30,height:18,padding:2,borderRadius:9,background:value?"var(--ap-gray-700)":"var(--ap-gray-200)",transition:"background-color var(--ap-dur-state) var(--ap-ease)",display:"inline-flex"}}>
        <span style={{width:14,height:14,borderRadius:7,background:"var(--ap-gray-0)",transform:value?"translateX(12px)":"none",transition:"transform var(--ap-dur-state) var(--ap-ease)"}}/>
      </span>
      {label&&<span style={{font:"var(--ap-text-ui)"}}>{label}</span>}
    </label>
  );
}
