import React from "react";
import { Filter } from "../components/filter";
import { FilterData } from "../typings/typings";

interface State {
  filterData: FilterData;
}

//This is PureComponent, dont have any props that are passed for now, just state

export default class Recepies extends React.PureComponent<{}, State> {
  state: State = {
    filterData: {
      typeOfRecepie: "",
    },
  };

  render() {
    return (
      <>
        <div>
          <h1>Home page</h1>
          <Filter
            typeOfRecepie={this.state.filterData.typeOfRecepie}
            onChange={this.onValueChange}
          />
        </div>
      </>
    );
  }

  onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    this.setState({
      filterData: {
        ...this.state.filterData,
        [name]: value,
      },
    });
  };
}
