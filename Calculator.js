import { evaluate } from 'mathjs';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide, faXmark, faDeleteLeft, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faC, faPercent, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'
const Calculator = () => {
    const [value, setValue] = useState('');

    return ( <
        div className = "container" >
        <
        input type = 'text'
        id = "valueContainer"
        value = { value }
        /> <
        table >
        <
        tbody >
        <
        tr >
        <
        td onClick = {
            () => setValue("") } > < FontAwesomeIcon icon = { faC }
        /></td >
        <
        td onClick = {
            () => setValue(`${parseInt(value)/100}`) } > < FontAwesomeIcon icon = { faPercent }
        /></td >
        <
        td onClick = {
            () => setValue(`${value.slice(0,value.length-1)}`) } > < FontAwesomeIcon icon = { faDeleteLeft }
        /></td >
        <
        td onClick = {
            () => setValue(`${value} /`) } > < FontAwesomeIcon icon = { faDivide }
        /></td >
        <
        /tr> <
        tr >
        <
        td onClick = {
            () => setValue(`${value}7`) } > < FontAwesomeIcon icon = { fa7 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value}8`) } > < FontAwesomeIcon icon = { fa8 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value}9`) } > < FontAwesomeIcon icon = { fa9 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value} *`) } > < FontAwesomeIcon icon = { faXmark }
        /></td >
        <
        /tr> <
        tr >
        <
        td onClick = {
            () => setValue(`${value}4`) } > < FontAwesomeIcon icon = { fa4 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value}5`) } > < FontAwesomeIcon icon = { fa5 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value}6`) } > < FontAwesomeIcon icon = { fa6 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value} -`) } > < FontAwesomeIcon icon = { faMinus }
        /></td >
        <
        /tr> <
        tr >
        <
        td onClick = {
            () => setValue(`${value}1`) } > < FontAwesomeIcon icon = { fa1 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value}2`) } > < FontAwesomeIcon icon = { fa2 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value}3`) } > < FontAwesomeIcon icon = { fa3 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value} +`) } > < FontAwesomeIcon icon = { faPlus }
        /></td >
        <
        /tr> <
        tr >
        <
        td onClick = {
            () => setValue(`${value}00`) } > < FontAwesomeIcon icon = { fa0 }
        /><FontAwesomeIcon icon={fa0}/ > < /td> <
        td onClick = {
            () => setValue(`${value}0`) } > < FontAwesomeIcon icon = { fa0 }
        /></td >
        <
        td onClick = {
            () => setValue(`${value} .`) } > < p > . < /p></td >
        <
        td onClick = {
            () => setValue(evaluate(value)) } > < FontAwesomeIcon icon = { faEquals }
        /></td >
        <
        /tr> <
        /tbody> <
        /table> <
        /div>
    )
}
export default Calculator;