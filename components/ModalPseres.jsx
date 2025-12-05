import { Box, Modal } from "@mui/material";


export default function ModalPseres({children,open,setOpen}) {
  return (
    <>
        <Modal
              open={open}
              onClose={() => setOpen(false)}
            >
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: '#C39E72',
                boxShadow: 24,
                p: 4,
                typography:"'Century Gothic'",
                borderRadius:"14px",
                color:"#f6f1e1"
              }}>
                {children}
              </Box>
            </Modal>
    </>
  )
}
