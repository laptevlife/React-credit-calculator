import React from 'react';
import Select from './Select/Select';


export default class InputData extends React.Component {
    inputSum = (e) => {
        let sum = Number(e.target.value) ;
        this.props.updatedata({creditSum : sum})
        // console.log(sum)
    }
    selectPeriod = (e) => {
        let period = parseInt(e.target.value, 10) ;
        this.props.updatedata({months : period})
    }
    inputPersent = (e) => {
        let persents = parseFloat(e.target.value, 10) ;
        this.props.updatedata({persents : persents})

    }
    render() {
 
        return (
            <div>
                <div className="card ">
                    <div className="center">
                        <div className="line">
                            <div className="headline">Ввести сумму кредита : {this.props.inputdata.creditSum}</div>
                            <input className='input' type="range" min="100000" max='1000000' /* value = {this.props.inputdata.creditSum} */ onChange={this.inputSum} />
                        </div>
                        <div className="line">
                            <div className="headline">Месяцы</div>
                         
                         
                            <Select selectperiod={this.selectPeriod} />

                        </div>
                        <div className="line">
                            <div className="headline">%</div>
                            <input className='input' type="number" step="0.01" min="0" value = {this.props.inputdata.persents} onChange={this.inputPersent} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}