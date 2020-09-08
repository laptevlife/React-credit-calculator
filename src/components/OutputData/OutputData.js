import React from 'react';


export default class OutputData extends React.Component {
    render() {
        //   debugger;
        return (
            <div>
                <div className="card ">


                    <div className="center ">
                        <div className="line">
                            <div className="headline">Общая сумма : {this.props.data.totalSum}</div>
                            {/* <input className='input' type="text" value = {this.props.data.totalSum} readOnly /> */}
                        </div>
                        <div className="line">
                            <div className="headline">Ежемесячная плата :  {this.props.data.monthPayment} </div>
                            {/* <input className='input' type="text" value = {this.props.data.monthPayment} readOnly/> */}
                        </div>
                        <div className="line">
                            <div className="headline">Общая переплата : {this.props.data.overPayment}</div>
                            {/* <input className='input' type="text" value = {this.props.data.overPayment} readOnly /> */}
                        </div>


                    </div>
                    
                </div>
            </div>
        )
    }
}