import React from 'react';


export default class Select extends React.Component {
    
    render() {
        // console.log('ref', this.refs.xxx)
        // this.refs.xxx.style.border = '2px solid red';
        const monthesArr = [6, 12, 18, 24, 30, 36, 42, 48,54,60];
        const optionsArr = monthesArr.map(e=>{
            return(
                { value:e, label:e}
            )
        })
        const options = optionsArr.map(i=><option key = {i.label} value = {i.value}>{i.label} </option> )
        // console.log(options)
        return (
            <div>
                <select onChange= {this.props.selectperiod}  ref='xxx'>
                   {options}
                </select>

            </div>
        )
    }
}