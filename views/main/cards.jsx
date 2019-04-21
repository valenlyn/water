var React = require("react");
var Layout = require('../layout/layout.jsx');

class Cards extends React.Component {
  render() {

    let link = `/plants/${this.props.id}`;
    let formAction = `/watered/${this.props.id}`;

    return (
        <div class="col-s-2 col-md-6 col-lg-3 mt-2 mb-2">
            <div class="card h-100 m-2">

                <form method="POST">
                    <button type="submit" formaction={formAction} class="btn-lg btn-primary mb-1 ml-1 water">💧</button>
                </form>

                <img class="card-img-top" src={this.props.img} alt={this.props.nickname} style={{height: '13rem',objectFit: 'cover'}}/>

                   <a href={link} class="text-decoration-none text-dark"><h4 class="card-title">{this.props.nickname}</h4></a>


                <div class="card-body">



                    <p class="card-text text-secondary mt-1">{this.props.name}</p>

                </div>

            </div>
        </div>
    );
  }
}

module.exports = Cards;