var React = require("react");

class Notification extends React.Component {
  render() {



    return (

            <div class="notification">
            <div class="col-12 d-flex justify-content-center">
                <div class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
                    <strong>Thanks!</strong> {this.props.name} is scheduleded to be watered again on {this.props.next_water_date}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                 </div>
            </div>
            </div>


    );
  }
}

module.exports = Notification;