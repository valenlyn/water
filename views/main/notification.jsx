var React = require("react");

class Notification extends React.Component {
  render() {

    return (

            <div class="notification">
            <div class="col-12 d-flex justify-content-center">
                <div class="alert alert-success alert-dismissible fade show mt-2" role="alert">
                    Thanks! {this.props.name} is scheduled to be watered again {this.props.daysLeft}. <a href="#" class="alert-link">Edit reminders.</a>
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