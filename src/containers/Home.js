import React, { Component } from "react";
import Heading from "../components/Heading";
import Table from "../components/Table";
import "../styles/Home.css";
import axios from "axios";
import { connect } from "react-redux";
import { getResponse } from "../actions/AsyncActions";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      coloums: [
        { columName: "Room No.", dataindex: "room_no" },
        { columName: "Guest Name", dataindex: "guest_name" },
        { columName: "Request", dataindex: "request" },
        { columName: "Transmitted To", dataindex: "transmitted_to" },
        { columName: "Request Time", dataindex: "request_time" },
        { columName: "Fullfill Time", dataindex: "fullfill_time" },
        { columName: "Actions", dataindex: "actions" }
      ],
      rows: [
        {
          room_no: 101,
          guest_name: "Pooja Chauhan",
          request: "padding",
          transmitted_to: "Ravi Chauhan",
          request_time: "10:09Am",
          fullfill_time: "10h",
          actions: "Delete"
        }
      ]
    };
  }

  componentWillMount() {
    this.getData();
  }
  getData = () => {
    let url = "http://restaurant.sia.co.in/request/allPendingRequest";
    let data = {
      status: "",
      roomNumber: "",
      name: "",
      company: "",
      roomCode: "",
      bedroom: "",
      transmitted_to: ""
    };
    this.props.setData(url, data);
  };
  
  render() {
    if (this.props.userState.loading || !this.props.userState.tableData ) {
      return <div>loading...</div>
    } else {
      return (
        <div>
          <Heading />
          <div className="home_content">
            <Table
              THData={this.state.coloums}
              thPadding="20px 47.5px"
              TDData={this.props.userState.tableData}
            />
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  // return (userState = { state });
  return {
    userState: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setData: (url, data) => {
      dispatch(getResponse(url, data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
