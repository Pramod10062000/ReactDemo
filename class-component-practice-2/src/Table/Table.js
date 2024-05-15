import { Component } from "react";

import './Table.css';

class Table extends Component {


  constructor(props) {
    super(props)
    // console.log(this.props.list)
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product</th>
              <th scope="col">Amount</th>

            </tr>
          </thead>
          <tbody>
            {
              this.props.list.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td>{obj.id}</td>
                    <td>{obj.product}</td>
                    <td>{obj.amount}</td>
                  </tr>
                )

              })


            }
            {/* <tr>
      <th scope="row">1</th>
      <td>Samsung A20</td>
      <td>20,000</td>
    </tr> */}


          </tbody>
        </table>


      </div>
    )
  }

}
export default Table