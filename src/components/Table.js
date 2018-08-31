import React, { Component } from "react";

export default class Table extends Component {
  renderTH = () => {
    return this.props.THData.map((value, key) => {
      return (
        <th
          key={key}
          style={{
            padding: this.props.thPadding
          }}
        >
          {value.columName}
        </th>
      );
    });
  };
  renderAllKey = obj => {
    let x=0;
    
    return Object.keys(obj).map(key => {
      let _tempIndex = this.props.THData[x++].dataindex;
      return <td key={key}>{obj[_tempIndex]}</td>;
    });
  };
  renderTD = () => {
    return this.props.TDData.map((value, key) => {

      // let _tempIndex = this.props.THData[key].dataindex;
      //console.log(_tempIndex,'************',key);
      

      let len = Object.keys(value).length;
      let arr = new Array(len);
      return <tr key={key + "r"}>{this.renderAllKey(value)}</tr>;
    });
  };
  render() {
    
    return (
      <div>
        <table border="2">
          <tbody>
            {/*Table heading  */}
            <tr>{this.renderTH()}</tr>

            {/*Table Data  */}
            {this.renderTD()}
          </tbody>
        </table>
      </div>
    );
  }
}
