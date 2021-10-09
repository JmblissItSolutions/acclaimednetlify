import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import APIUrl from "../Api"
import Resource from "./Resource"
import pdf from "../assets/images/pdf.png";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

const ResourceIdaho = () => {
    let location_id = 5
    const [pdfitems, setPdfItems] = useState([]);
    useEffect(async () => {
        const url = "/getLocationBrochures/" + `${location_id}`
        const result = await APIUrl.get(`${url}`)
        setPdfItems(result.data);
    }, []);
    const brocherlist = (pdfitems.brochures);
    const videolist = (pdfitems.videos);

    // pdf
    const [isPdf, setIsPdf] = useState(false);
    const [pdfID, setpdfID] = useState(false);
    const showpdf = (e) => {
        setIsPdf(true);
        setpdfID(e.target.id)
    }
    const handleOk = () => {
        setIsPdf(false);
    };
    const handleCancel = () => {
        setIsPdf(false);
    };
    // Modal
    const [isModalVisible, setisModalVisible] = useState(false);
    const [modalID, setModalID] = useState();
    const showModal = (e) => {
        setisModalVisible(true);
        setModalID(e.target.id)
    }
    const handleOk1 = () => {
        setisModalVisible(false);
    };
    const handleCancel1 = () => {
        setisModalVisible(false);
    };
    console.log(videolist)
    return (
        <>
            <Helmet>
                <title>See Benefits and Resource Guides for Home Warranty Services in Idaho</title>
                <meta name="description" content="Acclaimed Home Warranty has shared some of the useful resources for those looking out for home warranty plans in Idaho. Contact us today for more information." />
                <meta name="keywords" content="Acclaimed Home Warranty in idaho, useful resources home warranty plans in idaho"/>
            </Helmet>
            <Resource />
            <section className="location-header-name">
                <div className="inner">
                    <span className="big-upper">Idaho Resources</span>
                </div>
            </section>
            <section className="documents-light-back">
                <div className="container">
                    <h2>Documents</h2>
                    <div className="doc-cont">
                        {brocherlist ?
                            brocherlist.map((item) => {
                                return (
                                    <div className="doc" key={item.id}>
                                        <i className="achi-pdf">
                                            <img src={pdf} alt="pdf" className="pdf_img" id={item.file_name} onClick={showpdf} /></i>
                                        <p className="name">{item.title}</p>
                                        <Modal style={{ width: "680px", height: "400px" }} onOk={handleOk} visible={isPdf}
                                            onCancel={handleCancel}
                                            okButtonProps={{ disabled: true }}
                                            cancelButtonProps={{ disabled: true }}>
                                            <button className="clsbtn" onClick={handleCancel}>x</button>
                                            <iframe className="pdf_iframe" src={pdfID}></iframe>
                                        </Modal>
                                    </div>
                                );
                            })
                            : null
                        }
                    </div>
                </div>
            </section>
            <section className="videos-light-back">
                <div className="container">
                    <h2>videos</h2>
                    <div className="video-img">
                        {videolist ?
                            videolist.map((item) => {
                                return (
                                    <div className="vid-cont" key={item.id}>
                                        <div className="video">
                                            <div className="img-cont">
                                                <img src={item.thumb_nail} id={item.file_name} onClick={showModal} alt="video1" className="video1" />
                                                <p className="name">{item.title}</p>
                                                <Modal style={{ width: "680px", height: "400px" }} visible={isModalVisible} onOk={handleOk1}
                                                    onCancel={handleCancel1}
                                                    okButtonProps={{ disabled: true }}
                                                    cancelButtonProps={{ disabled: true }}>
                                                    <button className="clsbtn" onClick={handleCancel1}>x</button>
                                                    <iframe 
                                                    allow="accelerometer;
                                                    autoplay;
                                                    encrypted-media;
                                                    gyroscope;
                                                    picture-in-picture"
                                                    allowFullScreen
                                                    data-interval="false" className="pdf_iframe" src={modalID}></iframe>
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }) : null}
                    </div>
                </div>
            </section>
        </>
    )
};
export default ResourceIdaho;