import React from "react";

// TODO: Link the button to Homepage/Login page


export class NotFound extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1 className="display-4">404! Page not found.</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    )
  }
}
