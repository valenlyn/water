var React = require('react');
var Layout = require('../layout/layout.jsx');
var Nav = require('../layout/nav.jsx');

class New extends React.Component {

  render() {

    // Nav
    let nav = <Nav link1="/" text1="Home" link3="/logout" text3="Log Out"/>


    return (
        <Layout>
            {nav}
            <div class="col-lg-12 col-xs-12 d-flex justify-content-center">
                    <form method="POST" action="/new" enctype="multipart/form-data">

                        <div class="date mt-2 mb-2">Add a new plant</div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label class="form-text" for="exampleFormControlTextarea1">Name</label>
                            <input type="text" name="nickname" class="form-control form-text-2 " id="exampleFormControlTextarea1" placeholder="Spike Jonze" autoFocus/>
                        </div>

                        <div class="form-group col-md-6">
                            <label class="form-text" for="exampleFormControlInput1">Species / genus</label>
                                <input type="text" class="form-control form-text-2" name="name" placeholder="Saguaro Cactus"/>
                        </div>

                    </div>

                        <div class="form-group">
                            <label class="form-text" for="exampleFormControlTextarea1">Date you want to water your plant next</label>
                            <div class='input-group form-text-2 ' id='datetimepicker3'>
                                <input type='date' name="next_water_date" class="form-control"/>
                            </div>
                        </div>


                        <div class="form-group">
                            <label class="form-text" for="exampleFormControlInput1">How often does your plant require watering? (In days)</label>
                                <input type="number" class="form-control form-text-2" name="frequency" placeholder="10"/>
                        </div>

                        <div class="form-group">
                            <label class="form-text" for="exampleFormControlTextarea1">Add some instructions on how to care for your plant</label>
                            <textarea class="form-control form-text-2" id="exampleFormControlTextarea1" rows="2" name="instructions" placeholder="Water all the way through; soil at the bottom of the pot should be damp"></textarea>
                        </div>

                        <div class="form-group">
                            <label class="form-text" for="exampleFormControlSelect1">How would you like to be reminded to care for this plant?</label>
                            <select class="form-control form-text-2" id="exampleFormControlSelect1" name="reminder_type">
                                <option value="email">Email</option>
                                <option value="cal">Google calendar event</option>
                                <option>No thanks!</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-text" for="exampleFormControlTextarea1">Plant's image</label>
                                <input type='file' id="img" name="img" src="#" class="form-control form-text-2"/>
                        </div>

                        <button type="submit" class="form-btn">Submit</button>
                    </form>


                        </div>
        </Layout>
    );
  }
}

module.exports = New;