import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./style.scss";

function Filter({ handleSubmit, onSearchChange }) {
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");

  function searchChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const fieldCheck = e.target.checked;
    onSearchChange(fieldName, fieldValue, fieldCheck);
  }
  return (
    <div className="filter">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="custom-input">
          <Label for="desc" className="mr-sm-2">
            Job Description
          </Label>
          <Input
            type="text"
            name="desc"
            id="description"
            placeholder="Filter by title, benefits, companies, expertise"
            onChange={searchChange}
          />
        </FormGroup>
        <FormGroup className="custom-input">
          <Label for="location" className="mr-sm-2">
            Location
          </Label>
          <Input
            type="text"
            name="location"
            id="location"
            placeholder="Filter by city, state, zip code or country"
            onChange={searchChange}
          />
        </FormGroup>
        <FormGroup className="custom-input checkbox">
          <Input
            type="checkbox"
            name="fulltime"
            id="fulltime"
            onChange={searchChange}
          />
          <Label for="fulltime" className="mr-sm-2">
            Full Time
          </Label>
        </FormGroup>
        <Button>Search</Button>
      </Form>
    </div>
  );
}

export default Filter;
