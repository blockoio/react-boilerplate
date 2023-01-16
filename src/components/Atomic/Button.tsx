import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearUser } from "utils/RTK/reducer/\buser";

interface IConfirmModal {
  content: string;
}

function ConfirmModal({ content }: IConfirmModal) {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearUser());
    localStorage.clear();
  };
  return (
    <Box>
      <Button variant="outlined" onClick={logOut} sx={{ mt: 3 }}>
        {content}
      </Button>
    </Box>
  );
}

export default ConfirmModal;
