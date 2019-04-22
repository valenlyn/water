var React = require("react");
var Layout = require('../layout/layout.jsx');
var Cards = require('../main/cards.jsx');
var Notification = require('../main/notification.jsx');


class Water extends React.Component {
  render() {

    // Get date
    const options = {month: 'long'};
    let month = new Date().toLocaleDateString("en-GB", options);
    let todayDisplay = new Date().getDate() + " "+ month;

    console.log(this.props.plants);


    // Calculate how many days plant is overdue
    // Do two maps to find plants that are > 1 day overdue (i.e. next_water_date = yesterday's date)
    // let today = new Date();
    // let difference = Math.round((today - this.props.plants.next_water_date)/(1000*60*60*24));
    // let itemsElements = this.props.bar.map(fruit => {

      // return fruit.colors.map(color => {
      //           return <ListItem color={color} foo={fruit.name}/>
      //       })
      //                       });



    // Render plants
    let plants;

    if (this.props.plants == "") {

        plants = "All your plants are hydrated :-)"

    } else {

        plants = this.props.plants.map(plant => {

            let plantLink = `/plants/${plant.id}`;

            return <Cards style="box" name={plant.name} nickname={plant.nickname} id={plant.id} img={plant.img} instructions={plant.instructions}/>

        })
    }

    let message;

    // If plant was just watered, plant's details go in here:
    if (this.props.nickname) {

        let daysLeftDisplay = this.props.daysLeft;

        if (daysLeftDisplay === 1) {
            daysLeftDisplay = "tomorrow";
        } else if (daysLeftDisplay === 7) {
            daysLeftDisplay = "in a week";
        } else if (daysLeftDisplay === 14) {
             daysLeftDisplay = "in 2 weeks"
        } else if (daysLeftDisplay > 1) {
            daysLeftDisplay = "in " + daysLeftDisplay + " days";
        }


        message = <Notification name={this.props.nickname} daysLeft={daysLeftDisplay}/>
    } else {
        message = <div class="notification"></div>;
    }


    return (
        <Layout>

            {message}

            <p class="date">{todayDisplay} </p>

            <div class="card-wrapper">
                <div class="row d-flex justify-content-center">
                    {plants}
                </div>
            </div>

            <div class="wrapper">
                <a href="/new"><button class="plus">+</button></a>
            </div>




        </Layout>
    );
  }
}

module.exports = Water;