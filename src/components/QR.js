import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router'
import "./styles.css";
import QRCode from "qrcode.react";
import axios from "axios";
import {Row,Col} from "react-bootstrap"

const Qrpopup = (props) => {

    return (
        <div className="popup-box">
            <div className="boxQR">
                <span className="close-icon" onClick={props.handleClose}>
                    x
                </span>
                <div className="div-payment-pic">
                    <div>
                        <center className="center"><h2>กรุณาดาวโหลด QR code ด้านล่าง</h2></center>
                        <Row>
                            <Col>
                                <center>
                                    <QRCode size={165} id="qr-gen" value={props.getUrlcheckIn} />
                                    <h3 className="space-top">CheckIn</h3>
                                </center>
                            </Col>
                            <Col>
                                <center>
                                    <QRCode size={165} id="qr-gen" value={props.getUrlcheckOut} />
                                    <h3 className="space-top">CheckOut</h3>
                                </center>

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Qrpopup;
