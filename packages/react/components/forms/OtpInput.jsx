import React from "react";

/** Codigo de un solo uso: celdas independientes, MONO 1 y tabular-nums. Avanza y retrocede solo. */
export function OtpInput({length=6,value="",onChange,label,error,disabled,style,...rest}){
  const refs=React.useRef([]);
  const chars=String(value).slice(0,length).split("");
  const set=(i,ch)=>{
    const next=chars.slice();
    next[i]=ch.replace(/\D/g,"").slice(-1)||"";
    const joined=next.join("").slice(0,length);
    onChange&&onChange(joined);
    if(next[i]&&refs.current[i+1]) refs.current[i+1].focus();
  };
  const onKey=(i,e)=>{
    if(e.key==="Backspace"&&!chars[i]&&refs.current[i-1]) refs.current[i-1].focus();
    if(e.key==="ArrowLeft"&&refs.current[i-1]) refs.current[i-1].focus();
    if(e.key==="ArrowRight"&&refs.current[i+1]) refs.current[i+1].focus();
  };
  return (
    <div style={{display:"grid",gap:"var(--ap-space-1)",...style}} {...rest}>
      {label&&<span style={{font:"var(--ap-text-label)",color:"var(--ap-text-secondary)"}}>{label}</span>}
      <div style={{display:"flex",gap:"var(--ap-space-2)"}}>
        {Array.from({length}).map((_,i)=>(
          <input key={i} ref={el=>{refs.current[i]=el;}} value={chars[i]||""} disabled={disabled}
            inputMode="numeric" maxLength={1} aria-label={"Digito "+(i+1)}
            onChange={e=>set(i,e.target.value)} onKeyDown={e=>onKey(i,e)}
            onPaste={e=>{const t=(e.clipboardData.getData("text")||"").replace(/\D/g,"").slice(0,length);if(t){e.preventDefault();onChange&&onChange(t);}}}
            style={{width:40,height:"var(--ap-control-h-lg)",textAlign:"center",background:disabled?"var(--ap-surface-subtle)":"var(--ap-surface)",border:"1px solid "+(error?"var(--ap-error)":"var(--ap-border-input)"),borderRadius:"var(--ap-radius-control)",outline:"none",font:"var(--ap-weight-medium) var(--ap-size-19)/1 var(--ap-font-core)",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums"}}/>))}
      </div>
      {error&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-error)"}}>{error}</span>}
    </div>
  );
}
