import React from 'react';


export default class OutputData extends React.Component {
    render() {
        //   debugger;
        return (
            <div>
                <div className="card ">

                    <div className="flex">
                        <div className="center out left">
                            <div className="line">
                                <div className="headline">Общая сумма : </div>
                                {/* <input className='input' type="text" value = {this.props.data.totalSum} readOnly /> */}
                            </div>
                            <div className="line">
                                <div className="headline">Ежемесячная плата :   </div>
                                {/* <input className='input' type="text" value = {this.props.data.monthPayment} readOnly/> */}
                            </div>
                            <div className="line">
                                <div className="headline">Общая переплата :</div>
                                {/* <input className='input' type="text" value = {this.props.data.overPayment} readOnly /> */}
                            </div>
                        </div>
                        <div className="center out">
                            <div className="line">
                                <div className="headline">{this.props.data.totalSum}</div>
                                {/* <input className='input' type="text" value = {this.props.data.totalSum} readOnly /> */}
                            </div>
                            <div className="line">
                                <div className="headline">{this.props.data.monthPayment} </div>
                                {/* <input className='input' type="text" value = {this.props.data.monthPayment} readOnly/> */}
                            </div>
                            <div className="line">
                                <div className="headline">{this.props.data.overPayment}</div>
                                {/* <input className='input' type="text" value = {this.props.data.overPayment} readOnly /> */}
                            </div>


                        </div>

                    </div>


                </div>
            </div>
        )
    }
}