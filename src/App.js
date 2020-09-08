import React from 'react';
import InputData from './components/InputData/InputData';
import OutputData from './components/OutputData/OutputData';
import './App.css'

export default class App extends React.Component {
  state = {
    inputData: {
      creditSum: '',
      months: 6,
      persents: 22,
    },
    outputData: {
      totalSum: '',
      monthPayment: '',
      overPayment: '',
    }

  }


  updateData = (val) => {
    const { inputData } = this.state;
    let newData = { ...inputData, ...val };
 
    let res = this.calculation(newData);
    // console.log('res', res)

    this.setState(() => {
  
      return {
        inputData: newData,
        outputData: res
      }
    })
  }

  calculation = (newdata) => {
    const { creditSum, months, persents } = newdata;
    console.log('cr', creditSum)
    // i - ежемесячная процентная ставка
    // p = s * (i + i/(1+i)^n -1)
    let i = persents / 100 / 12;
    let x = Math.pow(i + 1, months) - 1;
    let y = i / x + i;
    let monthlyPayment = Math.round(creditSum * y);   /* Ежемесячный платеж */
    console.log(monthlyPayment)
    let totalPayment = Math.round(monthlyPayment * months);  /* Общая сумма платежа */
    console.log(totalPayment)
    // let overPay = totalPayment - creditSum ;
    let overPay = Math.round(totalPayment - creditSum) ;
    console.log(overPay)

    return {
      totalSum: totalPayment,
      monthPayment: monthlyPayment,
      overPayment: overPay
    }
  }



  render() {

    const { inputData } = this.state;
    console.log('state', this.state);
  


    return (
      <div className="container grid ">
        <InputData updatedata={this.updateData} inputdata={inputData} />
        <OutputData data={this.state.outputData} />
        {/* <button onClick= {()=>this.hendlOutput(totalPayment,monthlyPayment,overPay)} >calculate</button> */}
      </div>
    )
  }
}

// p = s * (i + i/(1+i)^n -1)
    // const {inputData} = this.state;
    // const { creditSum, months, persents } = this.state.inputData;
    // // const {totalSum, monthPayment, overPayment} = this.state;

    // // i - ежемесячная процентная ставка
    // // p = s * (i + i/(1+i)^n -1)
    // let i = persents / 100 / 12;
    // let x = Math.pow(i + 1, months) - 1;
    // let y = i / x + i;
    // let monthlyPayment = creditSum * y;   /* Ежемесячный платеж */
    // // console.log(monthlyPayment)
    // let totalPayment = monthlyPayment * months;  /* Общая сумма платежа */
    // // console.log(totalPayment)
    // let overPay  = totalPayment - creditSum;
    // // console.log(overPay)

    // hendlOutput = (totalPayment,monthlyPayment, overPay )=>{
  //   this.setState({
  //     totalSum: totalPayment,
  //     monthPayment: monthlyPayment,
  //     overPayment: overPay
  //   })
  //   console.log(this.state)
  // }

  // calculation = () => {
  //   const { creditSum, months, persents } = this.state.inputData;
  //   // i - ежемесячная процентная ставка
  //   // p = s * (i + i/(1+i)^n -1)
  //   let i = persents / 100 / 12;
  //   let x = Math.pow(i + 1, months) - 1;
  //   let y = i / x + i;
  //   let monthlyPayment = creditSum * y;   /* Ежемесячный платеж */
  //   console.log(monthlyPayment)
  //   let totalPayment = monthlyPayment * months;  /* Общая сумма платежа */
  //   console.log(totalPayment)
  //   let overPay = totalPayment - creditSum;
  //   console.log(overPay)
  //   this.setState({
  //     totalSum: totalPayment,
  //     monthPayment: monthlyPayment,
  //     overPayment: overPay
  //   })
  //   console.log(this.state)
  // }