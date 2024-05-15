import { Component } from "react";

import './Form.css';

class Form extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label >Product</label>
                        <input name='product' onChange={this.props.onChangeHandler} type="text" className="form-control"  placeholder="Enter Product" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input name='amount' onChange={this.props.onChangeHandler} type="text" className="form-control" placeholder="Enter Amount" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <button onClick={this.props.onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

        )
    }

}
export default Form