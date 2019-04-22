var React = require("react");

class Nav extends React.Component {
  render() {


    return (
        <nav>
            <a href={this.props.link1}>{this.props.text1}</a>
            <a href={this.props.link2}>{this.props.text2}</a>
        </nav>
    );
  }
}

module.exports = Nav;