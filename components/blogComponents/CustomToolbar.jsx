import React from "react";
import formats from './ToolbarOptions.js'

const renderOptions = (formatData)=>{
    const {className,options} = formatData;
    return (
        <select className = {className}>
            <option selected="selected"></option>
            {
                options.map((value,index) =>{
                    return (
                        <option value={value} key={index}></option>
                    )
                })
            }
        </select>
    )
}
const renderSingle = (formatData)=>{
    const {className,value} = formatData;
    return (
        <button className = {className} value = {value}></button>
    )
}
const CustomToolbar = () => (
    <div id="toolbar">
        {
            formats.map((classes, index) => {
                return (
                    <span className = "ql-formats" key={index}>
                        {
                            classes.map((formatData,index) => {

                                return formatData.options?renderOptions(formatData):renderSingle(formatData)
                            })
                        }
                    </span>
                )
            })
        }
    </div>
  )
  export default CustomToolbar;