import Button from "@mui/material/Button";
import { styles } from "./CustButton.utils";

export const CustButton = ({ text, onClick, color, className, disabled }) => {
  if (disabled) {
    return (
      <div className={className}>
        <Button
          disabled
          sx={{
            ...styles,
            "&.Mui-disabled": {
              background: "var(--dark-grey) 0% 0% no-repeat padding-box",
              color: "var(--light-grey)",
            },
            ":hover": {
              backgroundColor: "var(--dark-grey)",
            },
          }}
          variant="contained"
        >
          {text}
        </Button>
      </div>
    );
  }

  switch (color) {
    case "primary":
      return (
        <div className={className}>
          <Button sx={{ ...styles }} onClick={onClick} variant="contained">
            {text}
          </Button>
        </div>
      );
    case "red":
      return (
        <div className={className}>
          <Button
            sx={{
              ...styles,
              background: "#DD0D2D 0% 0% no-repeat padding-box",
              ":hover": {
                backgroundColor: "rgb(202, 10, 23)",
              },
            }}
            onClick={onClick}
            variant="contained"
          >
            {text}
          </Button>
        </div>
      );
    case "ghost":
      return (
        <div className={className}>
          <Button
            sx={{
              ...styles,
              background: "none",
              color: 'var(--primary)',
              ":hover": {
                backgroundColor: "var(--primary)",
                color: 'var(--white)'
              },
            }}
            onClick={onClick}
            variant="outlined"
          >
            {text}
          </Button>
        </div>
      );
  }
};
