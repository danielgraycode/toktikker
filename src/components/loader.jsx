import React, { Component } from "react";

export default class Loader extends Component {
    render() {
      return (
        <div id="loader" class="text-center">
          <div class="spinner-border text-center loader" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  }