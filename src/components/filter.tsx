import React from "react";
import { CustomInput } from "./commons/customInput";

interface Props {
  typeOfRecepie: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Use functional component when you dont have complex logic and states, but only props and HTML rendering

export const Filter: React.FC<Props> = (props) => (
  <>
    <div>
      <h2>Filter Recepies</h2>
      <br />
      <div className="filter-div">
        <CustomInput
          label="Naziv recepta: "
          name="typeOfRecepie"
          type="text"
          value={props.typeOfRecepie}
          onChange={props.onChange}
        />
      </div>
    </div>
  </>
);
