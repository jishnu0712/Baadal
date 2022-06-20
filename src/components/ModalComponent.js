import React from "react";
import { Button, Modal, Box, Typography } from '@mui/material/';

const style = { //modal style
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalComponent(props) {
    return (
        <Modal
            open={props.weatherData.error}
            onClose={props.resetStates}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Oops!
                </Typography>

                {props.weatherData.errorMsg}

                <Button
                    variant="outlined"
                    color="primary"
                    onClick={props.resetStates}
                    sx={{ color: "orange", m: '0 0 0 10px' }}>
                    Retry
                </Button>
            </Box>
        </Modal>
    )
}