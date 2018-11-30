import React, { Component } from "react";
import API from "./utils/API";
import Button from "./components/Button";
import { Col, Container, Row } from "./components/Grid";
import Input from "./components/Input";
import Jumbotron from "./components/Jumbotron";
import { Table } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id
  },
  {
    title: "Repository Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name - b.name
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description"
  },
  {
    title: "Stars",
    dataIndex: "stargazers_count",
    key: "stargazers_count",
    sorter: (a, b) => a.stargazers_count - b.stargazers_count
  },
  {
    title: "License",
    dataIndex: "license",
    key: "license"
  },
  {
    title: "Forks",
    dataIndex: "forks",
    key: "forks",
    sorter: (a, b) => a.forks - b.forks
  },
  {
    title: "URL",
    dataIndex: "html_url",
    key: "html_url",
    render: (text, record) => (
      <a rel="noopener noreferrer" target="_blank" href={record.html_url}>
        See Repo <i class="fas fa-chevron-circle-right" />
      </a>
    )
  }
];

class App extends Component {
  state = {
    repos: null,
    GitRepoSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRepos(this.state.GitRepoSearch)
      .then(res => this.setState({ repos: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="12">
              <form>
                <Container>
                  <Row>
                    <Col size="10">
                      <Input
                        name="GitRepoSearch"
                        value={this.state.GitRepoSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search Git Repositories"
                      />
                    </Col>
                    <Col size="2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="12">
              {!this.state.repos ? (
                <h2 className="text-center text-muted">
                  {" "}
                  No Repositories to Display
                </h2>
              ) : (
                <div>
                  <h2 className="text-center text-muted">
                    Repositories found: {this.state.repos.total_count}
                  </h2>
                  <Table
                    style={{ margin: "1% auto", width: "95%" }}
                    columns={columns}
                    dataSource={this.state.repos.items}
                    bordered
                  />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
