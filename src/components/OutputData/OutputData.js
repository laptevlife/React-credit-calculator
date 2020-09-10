import React from 'react';


export default class OutputData extends React.Component {
    render() {
       let {totalSum, monthPayment, overPayment} = this.props.data;
       let {prettify} = this.props;
        return (
            <div>
                <div className="cardd ">

                    <div className="flex-out">
                    
                        <div className="center out left">
                        <div className="line">
                                <div className="headline">Сумма кредита:   </div>                                                                 
                            </div>
                            <div className="line">
                                <div className="headline hl-mt">Общая сумма выплаты: <br></br> <span>(с учетом переплаты, без первоначального взноса)</span>  </div>                              
                            </div>
                            <div className="line">
                                <div className="headline">Ежемесячная плата:   </div>                          
                                                                       
                            </div>
                            <div className="line">
                                <div className="headline">Общая переплата:</div>
                              
                               
                                
                            </div>
                        </div>
                        <div className="center right">
                            <div className="line">
                                <div className="headline">{prettify(totalSum-overPayment) } ₽</div>
                            </div>
                            <div className="line">
                                <div className="headline">{prettify(totalSum - 0) } ₽</div>
                            </div>
                            <div className="line">
                                <div className="headline">{prettify(monthPayment - 0)} ₽</div>
                            </div>
                            <div className="line">
                                <div className="headline">{prettify(overPayment - 0)} ₽</div>
                            </div>
                            


                        </div>

                    </div>


                </div>
            </div>
        )
    }
}