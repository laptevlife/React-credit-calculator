import React from 'react';
import Select from './Select/Select';


export default class InputData extends React.Component {

    

    //функции получают данные из инпутов и передают полученные значения в updatedata
    inputSum = (e)=> {
        let sum = Number(e.target.value) ;
        this.props.updatedata({creditSum : sum})
        // console.log(sum)
    }
 
    inputFirstPay = (e)=>{
        let firstpay = Number(e.target.value);
        // console.log('firstpay', typeof(firstpay))
        this.props.updatedata({firstPay : firstpay})
    }
    selectPeriod = (e) => {
        let period = parseInt(e.target.value, 10) ;
        this.props.updatedata({months : period})
    }
    inputPersent = (e) => {
        let persents = parseFloat(e.target.value, 10) ;
        this.props.updatedata({persents : persents})

    }
    comparison = (creditSum, firstPay)=>{
        if(creditSum<firstPay){
            console.log('error < 0')
            
        }
    }
    render() {
        // debugger;
    let {creditSum, firstPay, persents } = this.props.inputdata;
    let {prettify} = this.props;
    this.comparison(creditSum, firstPay);
  

        return (
            <div>
                <div className="cardd ">
                    <div className="center">
                        <div className="line">
                            <div className="headline">Стоимость: {prettify(creditSum)} ₽</div>
                            <input className='input' type="range" min="100000" max='1000000' step='1000'  value = {creditSum}  onChange={this.inputSum} />
                        </div>

                        <div className="line">
                            <div className="headline">Первоначальный взнос: {prettify(firstPay)} ₽</div>
                            <input className='input' type="range" min="0" max='1000000' step='1000' /* value = {this.props.inputdata.creditSum} */ onChange={this.inputFirstPay} />
                        </div>

                        <div className="line">
                            <div className="headline">Срок кредита (месяцы):</div>
                         
                         
                            <Select selectperiod={this.selectPeriod} />

                        </div>
                        <div className="line">
                            <div className="headline">Процентная ставка: {persents}%</div>
                            <input className='input' type="range" min='5' max='30' step="0.1" value = {this.props.inputdata.persents} onChange={this.inputPersent} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}