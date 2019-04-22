var React = require("react");
var Layout = require('../layout/layout.jsx');
var Nav = require('../layout/nav.jsx');

class SignUp extends React.Component {
  render() {


    return (
      <Layout>
        <div class="landing">
            <div class="landing-text">Water your plants <br/>at the right time</div>
                <div class="row d-flex justify-content-center">

                    <div class="col-lg-4 col-sm-9 col-md-6">


                        <div class="sign-up">
                            <form method="POST" action="/signup">


                                    <input type="text" name="email" class="form-box form-text-2" id="exampleInputPassword1" placeholder="Email" autoFocus/>



                                    <input type="text" name="name" class="form-box  form-text-2" id="exampleInputPassword1" placeholder="Name"/>


                                    <input type="password" name="password" class="form-box  form-text-2" id="exampleInputPassword1" placeholder="Password"/>
                                    <br/>

                                <button type="submit" class="sign-up-btn">Sign Up</button>

                                </form>

                        </div>
                        <br/>
                            <a class="login" href="/login"><button class="login">Log In</button></a>

                    </div>
                </div>

        </div>
    </Layout>
    );
  }
}

module.exports = SignUp;