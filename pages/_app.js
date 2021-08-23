import "../styles/globals.css";
import App from "next/app";
import Layout from "../components/Layout";
import "semantic-ui-css/semantic.min.css";

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return <Layout></Layout>;
  }
}

export default MyApp;
