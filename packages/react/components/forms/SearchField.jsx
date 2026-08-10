import React from "react";
import { Input } from "./Input.jsx";

export function SearchField({value,onChange,placeholder="Buscar",style,...rest}){
  return <Input icon="search" value={value} onChange={onChange} placeholder={placeholder} style={{width:260,...style}} {...rest}/>;
}
