import "./Filters.scss";
import arrow from "../../../../assets/img/Arrow down.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Filters = () => {
  const [value, setValue] = useState([0, 48000]);
  console.log(value);
  const handleChangeRange = (event, newValue) => {
    setValue(newValue);
  };

  const names = ["Внедорожный", "Van Городской", "Зимний"];
  function MultipleSelectCheckmarks() {
    const [personName, setPersonName] = useState([]);
    // }
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
  }
  return (
    <div className="filters">
      <div className="filters-wrapper">
        <h2 className="filters-header">Цена</h2>
        <Box sx={{ width: 200 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChangeRange}
            valueLabelDisplay="auto"
            min={0}
            max={48000}
            // getAriaValueText={}
          />
        </Box>
        <span>{value[0]}</span>
        <span>{value[1]}</span>

        <h3 className="filters-title"> Тип </h3>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
          {/* <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            // value={personName}
            // onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            // MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select> */}
        </FormControl>
        <h3 className="filters-title"> Для кого </h3>
        {/* <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3 className="filters-title"> Вес </h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
      </div>
      <button className="filters-button">
        Показать весь фильтр
        <img className="filters-button-img" src={arrow} alt="" />
      </button>
    </div>
  );
};

export default Filters;
