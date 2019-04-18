var React = require("react");
var Layout = require('../layout/layout.jsx');

class LogIn extends React.Component {
  render() {

    let emailStatus = "";
    let passwordStatus = "";
    let message = "";

    if (this.props.message === "Password is wrong") {
        emailStatus = "form-control is-valid";
        passwordStatus = "form-control is-invalid";
        message = "Password is incorrect";

    } else if (this.props.message === "Email not found") {
        emailStatus = "form-control is-invalid";
        passwordStatus = "form-control";
        message = "Email not found";
    } else {
        emailStatus = "form-control";
        passwordStatus = "form-control";
        message = "";
    }

    return (
      <Layout>
            <div class="row d-flex m-5 justify-content-center">
                <div class="col-3">
                    <form method="POST" action="/">
                        {message}
                        <div class="form-group">
                            <input type="text" name="email" class={emailStatus} id="exampleInputPassword1" placeholder="Email" value={this.props.email?this.props.email:''}/>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class={passwordStatus} id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Log in</button>
                        <span class="login">or <a href="/">Sign Up</a></span>
                    </form>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = LogIn;