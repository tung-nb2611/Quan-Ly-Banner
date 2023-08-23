import React, { Component } from "react";
import './Login.css'
export default class Login extends Component {
    render() {
        return (
            <form>
				<img src={require('./Logo.png')} alt=""></img>
                <h1>Trang quản lý banner</h1>
				<h5>Đăng nhập vào tài khoản của bạn</h5>
				<div className="form">
					<div className="form-group">
						<label>Username</label>
						<input type="email" className="form-control" placeholder="Enter username" />
					</div>

					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" placeholder="Enter password" />
					</div>
					<button type="submit" className="btn btn-primary btn-block">LOG IN</button>
				</div>


                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                
            </form>
        );
    }
}