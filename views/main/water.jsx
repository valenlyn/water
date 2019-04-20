var React = require("react");
var Layout = require('../layout/layout.jsx');
var Cards = require('../main/cards.jsx');
var Notification = require('../main/notification.jsx');


class Water extends React.Component {
  render() {

    // Get date
    const options = {month: 'long'};
    let month = new Date().toLocaleDateString("en-GB", options);
    let today = new Date().getDate() + " "+ month;

    console.log(this.props.plants);


    // Render plants
    let plants;

    if (this.props.plants == "") {
        plants = "All your plants are hydrated :-)"
    } else {
        plants = this.props.plants.map(plant => {
            let plantLink = `/plants/${plant.id}`

        return <Cards name={plant.nickname} nickname={plant.name} id={plant.id}/>
    })
    }

    let message;

    // If plant was just watered, plant's details go in here:
    if (this.props.nickname) {
        message = <Notification name={this.props.nickname} next_water_date={this.props.nextWaterDate}/>
    } else {
        message = <div class="notification"></div>;
    }


    return (
        <Layout>

            {message}

            <p class="date">{today} </p>

            <div class="card-wrapper">
                <div class="row d-flex">
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