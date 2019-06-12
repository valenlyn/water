var React = require("react");
var Layout = require('../layout/layout.jsx');
var Cards = require('../main/cards.jsx');
var Notification = require('../main/notification.jsx');
var Nav = require('../layout/nav.jsx');


class Water extends React.Component {
  render() {

    // Nav
    let nav = <Nav link1="/plants" text1="All Plants" link2="/new" text2="Add New" link3="/logout" text3="Log Out"/>

    // Get date
    const options = {month: 'long'};
    let month = new Date().toLocaleDateString("en-GB", options);
    let todayDisplay = new Date().getDate() + " "+ month;

    console.log(this.props.plants);

    // Render plants
    let plants;

    if (this.props.plants == "") {

        plants = "All your plants are hydrated :-)"

    } else if (this.props.new) {

        plants = "You have no plants. <a href="/new">Add your first one.</a>";

    } else {

        plants = this.props.plants.map(plant => {

            let plantLink = `/plants/${plant.id}`;

            return <Cards style="box" name={plant.name} nickname={plant.nickname} id={plant.id} img={plant.img} instructions={plant.instructions}/>

        })
    }

    let message;

    // If plant was just watered, plant's details go in here:
    if (this.props.nickname) {

        let daysLeftDisplay = parseInt(this.props.daysLeft);

        if (daysLeftDisplay === 1) {
            daysLeftDisplay = "tomorrow";
        } else if (daysLeftDisplay === 7) {
            daysLeftDisplay = "in a week";
        } else if (daysLeftDisplay === 14) {
             daysLeftDisplay = "in 2 weeks"
        } else if (daysLeftDisplay > 1) {
            daysLeftDisplay = "in " + daysLeftDisplay + " days";
        }

        console.log(this.props.id)
        let link = `/plants/${this.props.id}/edit`
        message = <Notification name={this.props.nickname} daysLeft={daysLeftDisplay} editLink={link}/>
    } else {
        message = <div class="notification"></div>;
    }


    return (
        <Layout>
            {nav}
            {message}

            <p class="date">{todayDisplay}</p>

            <div class="card-wrapper">
                <div class="row d-flex justify-content-center">
                    {plants}
                </div>

            </div>






        </Layout>
    );
  }
}

module.exports = Water;