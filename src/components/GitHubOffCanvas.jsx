import { useState } from "react";
import { Button, Offcanvas} from 'react-bootstrap'

export default function GitHubOffCanvas({show, handleClose}){
    return(
        <Offcanvas show={show} onHide={handleClose} placement='bottom'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Wow it's my Github!</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Wow look at this cool off canvas feature and no this isn't
                being practically utilized here I'm just trying to learn
                React better.

                Here's a link to the code repository for this web app!
            </Offcanvas.Body>
        </Offcanvas>
    )
}