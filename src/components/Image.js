import React, { Component } from "react";
import axios from 'axios'

export class Image extends Component {
  constructor(props) {
    super();
    this.state = {
      imageURL: " ",
    };
  }

  componentDidMount() {
    let apiURL = "https://source.unsplash.com/random";
    
    let this_ = this
    const axiosData = axios.get(apiURL)
      .then(
          function (response) {
            // handle success
            console.log('line 17 in did mount axios', response.data);
            // this_.setState(imageURL: response.data)
            return response.data
        }
)
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      console.log(axiosData)
      this.setState({ imageURL : axiosData })

  }
  render() {
    return <div>
        image component
    </div>;
  }
}

export default Image;
