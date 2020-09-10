import React from 'react';
import InputData from './components/InputData/InputData';
import OutputData from './components/OutputData/OutputData';
import './App.css'

export default class App extends React.Component {




  state = {
    inputData: {
      creditSum: 0,
      firstPay: 0,
      months: 6,
      persents: 7.7,
    },
    outputData: {
      totalSum: '',
      monthPayment: '',
      overPayment: '',
    }

  }

  //Получает новые значения из инпутов и формирует новый обьект InputData 
  updateData = ( val ) => {
    const { inputData } = this.state;
    let newData = { ...inputData, ...val };
    //заново сформированный обьект INputData передается функции calculation, которая возвращает обьект вычесленных значений в переменную res
    let res = this.calculation( newData );
    // console.log('res', res)

    this.setState(() => {
  
      return {
        inputData: newData,
        outputData: res
      }
    })
  }
  // this.updateData(inputData);
  

  //Функция рассчета 
  calculation = (newdata) => {
    const { creditSum, firstPay, months, persents } = newdata;
   
    // i - ежемесячная процентная ставка
    // p = s * (i + i/(1+i)^n -1)
    let i = persents / 100 / 12;
    let x = Math.pow(i + 1, months) - 1;
    let y = i / x + i;
    let creditSumWithoFirstPay = creditSum - firstPay;
    let monthlyPayment = Math.round(creditSumWithoFirstPay * y);   /* Ежемесячный платеж */
    // console.log(monthlyPayment)
    let totalPayment =  Math.round(monthlyPayment * months);  /* Общая сумма платежа */
    // console.log(totalPayment)
    let overPay =  Math.round(totalPayment - creditSumWithoFirstPay);
    // let overPay = Math.round(totalPayment - creditSumWithoFirstPay) ;
    // console.log(overPay)

    return {
      totalSum: totalPayment,
      monthPayment: monthlyPayment,
      overPayment: overPay
    }
  }
  

  prettify = (num)=> {
      let n = num.toString();
      return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }



  render() {

    const { inputData , outputData } = this.state;
    // console.log('state', this.state);
    // this.calculation(inputData)
    // this.updateData(inputData)


    return (
      <div className="container grid card">
        <InputData updatedata={this.updateData} inputdata={inputData} prettify={this.prettify}  />
        <OutputData data={outputData} prettify={this.prettify} />
        {/* <button onClick= {()=>this.hendlOutput(totalPayment,monthlyPayment,overPay)} >calculate</button> */}
      </div>
    )
  }
}
