var React = require('react');
var Layout = require('../layout/layout.jsx');

class New extends React.Component {

  render() {

    return (
        <Layout>
            <div class="col-lg-6 col-xs-6">
                    <form method="POST" action="/new">
                        <h1>Add a new plant</h1>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Species / genus</label>
                                <input type="text" class="form-control" name="name" placeholder="Saguaro Cactus" autoFocus/>
                        </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Nickname</label>
                        <input type="text" name="nickname" class="form-control" id="exampleFormControlTextarea1" placeholder="Spike Jonze"/>
                    </div>



                        <label for="exampleFormControlInput1">Plant image</label>
                        <div class="input-group mb-3">
                          <div class="custom-file">
                            <input type="file" name="img" class="custom-file-input" id="inputGroupFile02"/>
                            <label class="custom-file-label" for="inputGroupFile02">Choose file...</label>
                          </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Select the date you want to water your plant next</label>
                            <div class='input-group date' id='datetimepicker3'>
                                <input type='date' name="next_water_date" class="form-control"/>
                            </div>
                        </div>


                        <div class="form-group">
                            <label for="exampleFormControlInput1">How often does your plant require watering? (In days)</label>
                                <input type="number" class="form-control" name="frequency" placeholder="10"/>
                        </div>

                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </form>
                        </div>

        </Layout>
    );
  }
}

module.exports = New;