import React,{useState,useEffect} from 'react'
import Select from "react-select";

  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];




function MySelect() {
  const [selected, setSelected] = useState([]);
  const handleChange = (s) => {
    console.log(s,'s')
    localStorage.setItem('SELECT_VALUE_KEY', JSON.stringify(s));
    setSelected(s);
  };

  useEffect(() => {
    const lastSelected = JSON.parse(
      localStorage.getItem('SELECT_VALUE_KEY') ??'[]'
    );
    setSelected(lastSelected);
  }, []);

  return (
    <Select
      value={selected}
      onChange={handleChange}
      options={options}
      isMulti
    />
  );
}

export default MySelect;