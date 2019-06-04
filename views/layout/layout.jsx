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



            </body>
        </html>
    );
  }
}

module.exports = Layout;