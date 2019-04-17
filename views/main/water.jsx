var React = require("react");
var Layout = require('../layout/layout.jsx');
var Cards = require('../main/cards.jsx');

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
            let plantLink = `/plants/${plant.id}`

        return <Cards name={plant.nickname} nickname={plant.name} id={plant.id}/>
    })
    }

    return (
        <Layout>

                <p>{today} </p>

                <div class="row d-flex">
                    {plants}
                </div>

                <div class="wrapper">
                    <a href="/new"><button class="plus">+</button></a>
                </div>

        </Layout>
    );
  }
}

module.exports = Water;