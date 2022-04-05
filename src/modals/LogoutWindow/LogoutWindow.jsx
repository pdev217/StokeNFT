import { useSelector, useDispatch } from "react-redux";
//web3
import { useWeb3React } from "@web3-react/core";
//redux
import { close } from "../../redux/slices/logoutModalSlice";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
//components
import { CustButton } from "../../components/CustButton/CustButton";
//styles
import { style } from "./LogoutWindow.utils";
//hook
import useAuth from "../../hooks/useAuth";

export const LogoutWindow = () => {
  const { isOpened } = useSelector((state) => state.logoutModal);
  const dispatch = useDispatch();
  const { deactivate } = useWeb3React();
  const { logout } = useAuth()

  const handleClose = () => {
    dispatch(close());
  };

  const handleLogout = async () => {
    deactivate();
    await logout()
    handleClose();
  };

  return (
    <Modal
      open={isOpened}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ fontFamily: "Poppins, sans-serif" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Do you really want to log out?
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
          <CustButton color="primary" onClick={handleLogout} text="yes" />
          <CustButton color="primary" onClick={handleClose} text="no" />
        </div>
      </Box>
    </Modal>
  );
};
