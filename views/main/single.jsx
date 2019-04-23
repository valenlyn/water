var React = require('react');
var Layout = require('../layout/layout.jsx');
var Nav = require('../layout/nav.jsx');

class Single extends React.Component {

  render() {


    // Nav
    let nav = <Nav link1="/" text1="Home" link2="/new" text2="Add New" link3="/logout" text3="Log Out"/>

    let editPage = `/plants/${this.props.plant.id}/edit`;
    let deletePage = `/plants/${this.props.plant.id}/delete`;

    var reminder;
    if (this.props.plant.reminder_type === "email") {
        reminder = "Email";
    } else if (this.props.plant.reminder_type === "cal") {
        reminder = "Google Calendar event";
    } else {
        reminder = "None";
    }

    var frequencyMsg;
    if (this.props.plant.frequency === 1) {
        frequencyMsg = "Daily";
    } else {
        frequencyMsg = "Every "+ this.props.plant.frequency +" days";
    }

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
                        <div class="font-weight-bold form-text">Species / genus</div>
                        <p class="form-text-2">{this.props.plant.name}</p>

                         <div class="font-weight-bold form-text">Watering frequency</div>
                        <p class="form-text-2">{frequencyMsg}</p>

                         <div class="font-weight-bold form-text">Instructions</div>
                         <p class="form-text-2">{this.props.plant.instructions}</p>

                         <div class="font-weight-bold form-text">Reminder type</div>
                         <p class="form-text-2">{reminder}</p>


                    </div>
                </div>
                <hr/>
                <a href={editPage}> <button class="form-btn-2">Edit</button></a>
                <a href={deletePage}> <button class="form-btn">Delete</button></a>
            </div>


        </Layout>

    );
  }
}

module.exports = Single;