var React = require('react');
var Layout = require('../layout/layout.jsx');
var Nav = require('../layout/nav.jsx');

class Edit extends React.Component {

  render() {
    var reminder;

    // Nav
    let nav = <Nav link1="/" text1="Home"/>;
    let actionLink = `/plants/${this.props.plant.id}?_method=PUT`

    // if (this.props.plant.reminder_type === 'email') {
    //     reminder = `<option value="email">Email</option>
    //                 <option value="cal">Google calendar event</option>
    //                 <option>None!</option>`;
    // } else if (this.props.plant.reminder_type === 'cal') {
    //     reminder = `<option value="cal">Google calendar event</option>
    //                 <option value="email">Email</option>
    //                 <option>None!</option>`
    // }

    return (
        <Layout>
            {nav}
            <div class="col-lg-12 col-xs-12 d-flex justify-content-center">
                    <form method="POST" action={actionLink} enctype="multipart/form-data">

                        <div class="date mt-2 mb-2">Edit {this.props.plant.nickname}</div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label class="form-text" for="exampleFormControlTextarea1">Name</label>
                            <input type="text" name="nickname" class="form-control form-text-2 " id="exampleFormControlTextarea1" value={this.props.plant.nickname} autoFocus/>
                        </div>

                        <div class="form-group col-md-6">
                            <label class="form-text" for="exampleFormControlInput1">Species / genus</label>
                                <input type="text" class="form-control form-text-2" name="name" value={this.props.plant.name}/>
                        </div>

                    </div>

                        <div class="form-group">
                            <label class="form-text" for="exampleFormControlTextarea1">Date you want to water your plant next</label>
                            <div class='input-group form-text-2 ' id='datetimepicker3'>
                                <input type='date' name="next_water_date" value={this.props.plant.next_water_date} class="form-control"/>
                            </div>
                        </div>


                        <div class="form-group">
                            <label class="form-text" for="exampleFormControlInput1">How often does your plant require watering? (In days)</label>
                                <input type="number" class="form-control form-text-2" name="frequency" value={this.props.plant.frequency}/>
                        </div>

                        <div class="form-group">
                            <label class="form-text" for="exampleFormControlTextarea1">Add some instructions on how to care for your plant</label>
                            <textarea class="form-control form-text-2" id="exampleFormControlTextarea1" rows="2" name="instructions" value={this.props.plant.instructions}></textarea>
                        </div>

                        <div class="form-group">
                            <label class="form-text" for="exampleFormControlSelect1">How would you like to be reminded to care for this plant?</label>
                            <select class="form-control form-text-2" id="exampleFormControlSelect1" name="reminder_type">
                                <option value="email">Email</option>
                                <option value="cal">Google calendar event</option>
                                <option>None</option>
                            </select>
                        </div>

                        <button type="submit" class="form-btn">Submit</button>
                    </form>


                        </div>
        </Layout>
    );
  }
}

module.exports = Edit;