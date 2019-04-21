var React = require("react");
var Layout = require('../layout/layout.jsx');

class Cards2 extends React.Component {
  render() {

    let link = `/plants/${this.props.id}`;
    let formAction = `/watered/${this.props.id}`;

    return (

            <div class={this.props.style}>
                <img class="card-img" src={this.props.img} alt={this.props.nickname} style={{height: '14rem',objectFit: 'cover'}}/>
                <a href={link} class="box-title"><h4 class="">{this.props.nickname}</h4></a>
                <span class="box-instructions"><span class="box-subtitle">{this.props.name}</span> / {this.props.instructions}</span>

                <div class="actions">
                    <form method="POST">
                        <button type="submit" formaction={formAction} class="water">mark as watered</button>

                    </form>

                </div>

            </div>


    );
  }
}

module.exports = Cards2;