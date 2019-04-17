var React = require("react");
var Layout = require('../layout/layout.jsx');

class Cards extends React.Component {
  render() {

    let link = `/plants/${this.props.id}`

    return (
        <div class="col-12-xs col-lg-3 mt-2 mb-2">
            <div class="card h-100">
                <img class="card-img-top" src="" alt={this.props.name} style={{height: '13rem',objectFit: 'cover'}}/>
                <div class="card-body">
                    <a href={link} class="text-decoration-none text-dark"><h4 class="card-title">{this.props.name}</h4></a>
                    <p class="card-text text-secondary mt-1">{this.props.nickname}</p>
                </div>
            </div>
        </div>
    );
  }
}

module.exports = Cards;