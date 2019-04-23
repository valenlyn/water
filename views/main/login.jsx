var React = require("react");
var Layout = require('../layout/layout.jsx');
var Nav = require('../layout/nav.jsx');

class LogIn extends React.Component {
  render() {

    // Nav
    let nav = <Nav link1="/" text1="Home"/>


    let emailStatus = "";
    let passwordStatus = "";
    let message = "";

    if (this.props.message === "Password is wrong") {
        emailStatus = "form-control is-valid";
        passwordStatus = "form-control is-invalid";
        message = "Password is incorrect";

    } else if (this.props.message === "Email not found") {
        emailStatus = "form-control is-invalid form-text-2";
        passwordStatus = "form-control form-text-2";
        message = "Email not found";
    } else {
        emailStatus = "form-control form-text-2";
        passwordStatus = "form-control form-text-2";
        message = "";
    }

    return (
      <Layout>

        {nav}

            <div class="row d-flex m-5 justify-content-center">
                <div class="col-lg-4 col-xs-8 col-sm-8">
                    <div class="date">Log in</div>
                    <form method="POST" action="/">
                        {message}
                        <div class="form-group">
                            <input type="text" name="email" class={emailStatus} id="exampleInputPassword1" placeholder="Email" value={this.props.email?this.props.email:''}/>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class={passwordStatus} id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <center><button type="submit" class="form-btn-2">Log in</button></center>
                    </form>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = LogIn;