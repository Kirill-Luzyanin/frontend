import React, { useState } from 'react';
import Printer from '../Printer/Printer';
import './Textarea.css';

function Textarea() {
  let [znachenie,setValue] = useState<string>("");
  function inputChange(event:React.ChangeEvent<HTMLTextAreaElement>): void{
    setValue(event.target.value);
    console.log(event);
    
  }



  return ( <div>
    <textarea name="name" value = {znachenie} onChange = {inputChange} placeholder='Введите данные' />
    <Printer peredaem={znachenie} />
    </div>
  );

}

export default Textarea;