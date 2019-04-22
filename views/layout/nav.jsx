var React = require("react");

class Nav extends React.Component {
  render() {

// <form method="POST" action="/logout"><input type="submit">Log Out</input></form>
    return (
        <nav>
            <a class="nav-link" href={this.props.link1}>{this.props.text1}</a>
            <a class="nav-link" href={this.props.link2}>{this.props.text2}</a>

        </nav>
    );
  }
}

module.exports = Nav;