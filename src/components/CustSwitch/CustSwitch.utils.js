import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 41,
    height: 23,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 17,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(20px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 3,
      "&.Mui-checked": {
        transform: "translateX(18px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "var(--primary)",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 17,
      height: 17,
      borderRadius: 9,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 19,
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "var(--primary)" : "var(--dark-grey)",
      boxSizing: "border-box",
    },
  }));