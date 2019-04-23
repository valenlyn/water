var React = require('react');
var Layout = require('../layout/layout.jsx');
var Nav = require('../layout/nav.jsx');

class Delete extends React.Component {

  render() {


    // Nav
    let nav = <Nav link1="/" text1="Home" link2="/new" text2="Add New"/>;

    let deleteValue = `/plants/${this.props.plant.id}?_method=DELETE`


    return (
        <Layout>
        {nav}

            <div class="col-lg-8 m-5 mx-auto">
                <div class="date">
                    Are you sure you want to delete {this.props.plant.nickname}?</div>
                <hr/>

                <form method="POST" action={deleteValue} class="d-inline">
                    <button type="submit" class="btn btn-danger">Yes, I'm sure</button>
                </form>

            </div>


        </Layout>

    );
  }
}

module.exports = Delete;