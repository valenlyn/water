var React = require("react");
var Layout = require('../layout/layout.jsx');

class Water extends React.Component {
  render() {

    // Get date
    const options = {month: 'long'};
    let month = new Date().toLocaleDateString("en-GB", options);
    let today = new Date().getDate() +" "+ month +" "+ new Date().getFullYear();

    console.log(this.props.plants);


    // Render plants
    let plants;

    if (this.props.plants == "") {
        plants = "No plants require watering today!"
    } else {
        plants = this.props.plants.map(plant => {
        return <p>{plant.name} {plant.nickname}</p>
    })
    }

    return (
        <Layout>

                <p>{today} </p>

                {plants}
                <a href="/new"><button class="plus">+</button></a>

        </Layout>
    );
  }
}

module.exports = Water;