//mui
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
//component
import { AntSwitch } from "./CustSwitch.utils";

export const CustSwitch = ({ className, defaultChecked, onChange }) => {
  return (
    <div className={className}>
      <Stack direction="row" spacing={1} alignItems="center">
        <AntSwitch
          onChange={onChange}
          defaultChecked={defaultChecked}
          inputProps={{ "aria-label": "ant design" }}
        />
      </Stack>
    </div>
  );
};
