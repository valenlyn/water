var React = require("react");

class Layout extends React.Component {
  render() {


    return (
      <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css?family=Chivo:300,400|Prata|Sarala" rel="stylesheet"/>
                <link rel="stylesheet" href="/style.css"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>


            </head>
            <body>

                <div class="layout-wrap">
                    {this.props.children}
                </div>

                <script type="text/javascript" src="jquery.min.js"></script>
                <script type="text/javascript" src="jquery.ui.widget.js"></script>
                <script type="text/javascript" src="jquery.iframe-transport.js"></script>
                <script type="text/javascript" src="jquery.fileupload.js"></script>
                <script type="text/javascript" src="jquery.cloudinary.js"></script>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

            </body>
        </html>
    );
  }
}

module.exports = Layout;