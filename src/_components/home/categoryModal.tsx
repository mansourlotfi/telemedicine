import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

interface IProps {
  open: boolean;
  handleClose: any;
  title: string;
  type: string;
}
export default function CategoryModal(props: IProps) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-description" sx={style}>
          <Typography
            id="modal-modal-title"
            style={{ font: "inherit" }}
            variant="h6"
            component="h2"
          >
            {props.title}{" "}
          </Typography>

          <Typography
            id="modal-modal-description"
            style={{ font: "inherit", lineHeight: 2 }}
            sx={{ mt: 2 }}
          >
            {props.type}{" "}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
