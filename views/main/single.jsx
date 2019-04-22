var React = require('react');
var Layout = require('../layout/layout.jsx');
var Nav = require('../layout/nav.jsx');

class Single extends React.Component {

  render() {


    // Nav
    let nav = <Nav link1="/" text1="Home" link2="/new" text2="Add New"/>

    let editPage = `/plants/${this.props.plant.id}/edit`;
    let deletePage = `/plants/${this.props.plant.id}/delete`;

    return (
        <Layout>
        {nav}

            <div class="col-lg-8 m-5 mx-auto">
                <div class="date">{this.props.plant.nickname}</div>
                <hr/>
                <div class="row">
                    <div class="col-lg-6 col-sm-12 col-xs-12">

                        <img class="w-75 rounded mx-auto d-block" src={this.props.plant.img}/>
                    </div>
                    <div class="col-lg-6 col-xs-12">
                        <div class="font-weight-bold">Species / genus</div>
                        <p>{this.props.plant.name}</p>

                         <div class="font-weight-bold">Watering frequency</div>
                        <p>{this.props.plant.frequency}</p>

                         <div class="font-weight-bold">Instructions</div>
                         <p>{this.props.plant.instructions}</p>

                         <div class="font-weight-bold">Reminder type</div>
                         <p>{this.props.plant.reminder_type}</p>


                    </div>
                </div>
                <hr/>
                <a href={editPage}> <button class="btn btn-primary">Edit</button></a>
                <a href={deletePage}> <button class="btn btn-danger">Delete</button></a>
            </div>


        </Layout>

    );
  }
}

module.exports = Single;