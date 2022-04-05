import { useState, useEffect } from "react";
//components
import TextField from "@mui/material/TextField";
//styles
import { useStyles } from "../../page-components/CreateNFTPage/CreateNFTPage.utils";

export const CustTextField = ({ name, label, modalData, setModalData, index }) => {
  const muiClasses = useStyles();
  const [fieldName, setFieldName] = useState(name);

  const handleChange = (newValue, label, index) => {
    const data = [...modalData];
    if (label === 'Type') data[index].type = newValue;
    else if (label === 'Name') data[index].name = newValue;
    else if (label === 'Value') data[index].value = newValue;
    else if (label === 'Max Value') data[index].maxValue = newValue;

    setModalData([...data])
  }
  useEffect(() => {
    handleChange(fieldName, label, index);
  }, [fieldName])

  return (
    <TextField
      fullWidth
      id=""
      label={label}
      variant="outlined"
      sx={{ marginTop: "16px", width: "45%", maxWidth: "290px", marginRight: "16px" }}
      className={muiClasses.textField}
      value={fieldName}
      onChange={({ target: { value } }) => setFieldName(value)}
      InputLabelProps={{
        style: { color: "#FFFFFF4D" },
      }}
      InputProps={{ style: { color: "white" } }}
    />
  );
};
