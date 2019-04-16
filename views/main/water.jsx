var React = require("react");
var Layout = require('../layout/layout.jsx');

class Water extends React.Component {
  render() {
    // Get date
    const options = {month: 'long'};
    let month = new Date().toLocaleDateString("en-GB", options);
    let today = new Date().getDate() +" "+ month +" "+ new Date().getFullYear();

    // Render plants
    let plants = this.props.plants.map(plant => {
        return <p>{plant.name} {plant.nickname}</p>
    })

    return (
        <Layout>
            <p>{today} plants that need watering</p>
            {plants}
        </Layout>
    );
  }
}

module.exports = Water;