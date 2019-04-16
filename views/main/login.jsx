var React = require("react");
var Layout = require('../layout/layout.jsx');

class LogIn extends React.Component {
  render() {

    let usernameStatus = "";
    let passwordStatus = "";
    let message = "";

    if (this.props.message === "Password is wrong") {
        usernameStatus = "form-control is-valid";
        passwordStatus = "form-control is-invalid";
        message = "Password is incorrect";
    } else if (this.props.message === "Username not found") {
        usernameStatus = "form-control is-invalid";
        passwordStatus = "form-control";
        message = "Username not found";
    } else {
        usernameStatus = "form-control";
        passwordStatus = "form-control";
        message = "";
    }

    console.log(this.props);
    return (
      <Layout>
            <div class="row d-flex m-5 justify-content-center">
                <div class="col-3">
                    <form method="POST" action="/">
                        {message}
                        <div class="form-group">
                            <input type="text" name="username" class={usernameStatus} id="exampleInputPassword1" placeholder="Username" value={this.props.username?this.props.username:''} autoFocus/>
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