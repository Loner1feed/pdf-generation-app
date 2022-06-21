import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { contentStyles } from "../../consts/contentStyles";
import { cmToPx } from "../../helpers/cmToPx";
import { widthSetter } from "../../helpers/widthSetter";

export const PreviewModal = ({ setOpen, open, data }) => {
  const handleClose = () => setOpen(false);
  const { margins, format } = useSelector((state) => state.editor);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              paddingTop: `${cmToPx(margins.top)}px`,
              paddingBottom: `${cmToPx(margins.bottom)}px`,
              paddingRight: `${cmToPx(margins.right)}px`,
              paddingLeft: `${cmToPx(margins.left)}px`,
              width: `${widthSetter(format)}px`,
              margin: "0 auto",
              background: "#fff",
              position: "absolute",
              right: "50%",
              transform: "translateX(50%)",
              top: "50px",
              zIndex: 5,
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: `<link rel="stylesheet" type="text/css" id="mce-u0" crossorigin="anonymous" referrerpolicy="origin" href="https://cdn.tiny.cloud/1/no-api-key/tinymce/6.0.3-5/skins/ui/oxide/content.min.css"> <link rel="stylesheet" type="text/css" id="mce-u1" crossorigin="anonymous" referrerpolicy="origin" href="https://cdn.tiny.cloud/1/no-api-key/tinymce/6.0.3-5/skins/content/default/content.min.css"> <style>${contentStyles}</style> ${data}`,
              }}
            ></div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
