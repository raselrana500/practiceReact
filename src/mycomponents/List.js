import React, { Component } from 'react'

export default class List extends Component {

    myData=(data)=>{
        return <option>{data*5}</option>
    }

  render() {
    const country=[1,2,3,4,5,6,7,8,9,10];
    const dataItem=country.map(this.myData);
    return (
      <div>
        <select>
            {dataItem}
        </select>
      </div>
    )
  }
}
