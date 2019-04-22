var React = require('react');
var Layout = require('../layout/layout.jsx');

class New extends React.Component {

  render() {


    return (
        <Layout>
            <div class="col-lg-6 col-xs-6">
                    <form method="POST" action="/new" enctype="multipart/form-data">
                        <div class="date">Add a new plant</div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Species / genus</label>
                                <input type="text" class="form-control" name="name" placeholder="Saguaro Cactus" autoFocus/>
                        </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Nickname</label>
                        <input type="text" name="nickname" class="form-control" id="exampleFormControlTextarea1" placeholder="Spike Jonze"/>
                    </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Select the date you want to water your plant next</label>
                            <div class='input-group date' id='datetimepicker3'>
                                <input type='date' name="next_water_date" class="form-control"/>
                            </div>
                        </div>


                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Plant's image</label>
                                <input type='file' id="img" name="img" src="#" class="form-control"/>
                        </div>

                        <div class="form-group">


                            <label for="exampleFormControlSelect1">Choose how you'd like to be reminded to water this plant</label>
                            <select class="form-control" id="exampleFormControlSelect1" name="reminder_type">
                                <option value="email">Email</option>
                                <option value="cal">Google calendar event</option>
                                <option>None</option>
                            </select>
                          </div>


                        <div class="form-group">
                            <label for="exampleFormControlInput1">How often does your plant require watering? (In days)</label>
                                <input type="number" class="form-control" name="frequency" placeholder="10"/>
                        </div>

                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                        <button type="submit" formaction="/newAndAnother" class="btn btn-primary mb-2 ml-2">Submit and add another</button>
                    </form>




                        </div>
        </Layout>
    );
  }
}

module.exports = New;