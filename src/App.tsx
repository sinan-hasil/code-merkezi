import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { IoArrowForward } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import eticaret from "./images/ozel-eticaret-yazilimi.jpg";
import inovation from "./images/teknolojik-inovasyon.jpg";
import software from "./images/sotware.avif";
import software1 from "./images/work-editor-text-learn.jpg";
import eftal from "./images/logo/eftral logo.png";
import savel from "./images/logo/savel-black.png";
import fiat from "./images/logo/fiat_logo1_2x.png";
import kia from "./images/logo/1fd96547asdasd-ogi-kia-removebg-preview-1.png";
import dede from "./images/logo/dba3780e13722dc65bb9969f1ffef4f060e27510.png";
import sigortam from "./images/logo/sigortamfast-new-logo-b4fbfc74-f.png";
import ofis from "./images/atasehir-image2.png";
// import { FaXTwitter } from "react-icons/fa6";
// import { ImLinkedin2 } from "react-icons/im";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import "./anasayfa.css";

const App = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [servicesDrop, setServicesDrop] = useState<boolean>(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const ref = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleServices = (event: React.MouseEvent<HTMLLIElement>) => {
    setServicesDrop(!servicesDrop);
    setShowPopover(!showPopover);
    setTarget(event.currentTarget);
  };

  useEffect(() => {
    if (count < 40) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 30);

      return () => clearInterval(timer);
    }
  }, [count]);

  useEffect(() => {
    if (count1 < 500) {
      const timer = setInterval(() => {
        setCount1((prevCount1) => prevCount1 + 1);
      }, 2);

      return () => clearInterval(timer);
    }
  }, [count1]);

  useEffect(() => {
    if (count2 < 48) {
      const timer = setInterval(() => {
        setCount2((prevCount2) => prevCount2 + 1);
      }, 30);

      return () => clearInterval(timer);
    }
  }, [count2]);

  return (
    <>
      <Container fluid className="nav">
        <Container>
          <Row>
            <Col>
              <h4>Novatech</h4>
            </Col>
            <Col className="d-flex justify-content-end p-0">
              <div className="navbar-link pt-2 d-none d-sm-block">
                <ul>
                  <li onClick={toggleServices}>
                    Hizmetlerimiz
                    <MdOutlineKeyboardArrowDown
                      id="dropdown-basic"
                      style={{
                        transform: `${
                          servicesDrop ? "rotate(180deg)" : "rotate(0deg)"
                        }`,
                        transition: "0.3s",
                      }}
                    />
                    {servicesDrop ? (
                      <>
                        <div ref={ref}>
                          <Overlay
                            show={showPopover}
                            target={target}
                            placement="bottom"
                            container={ref}
                            containerPadding={90}
                          >
                            <Popover id="popover-contained">
                              <Popover.Body className="px-2 py-2">
                                <ul className="d-flex flex-column">
                                  <li>Web Uygulamaları</li>
                                  <li>Mobil Uygulama Geliştirme</li>
                                  <li>Masaüstü Yazılım</li>
                                  <li>Entegrasyon Hizmetleri</li>
                                  <li>E-Ticaret Platformları Geliştirme</li>
                                  <li>Ödeme Sistemleri Entegrasyonu</li>
                                </ul>
                              </Popover.Body>
                            </Popover>
                          </Overlay>
                        </div>
                      </>
                    ) : null}
                  </li>
                  <li>
                    Misyonumuz <MdOutlineKeyboardArrowDown />
                  </li>
                  <li>
                    hakkımızda <MdOutlineKeyboardArrowDown />
                  </li>
                  <li>İletişim</li>
                </ul>
              </div>

              <Button
                variant="primary"
                className="d-block d-sm-none"
                onClick={handleShow}
              >
                Launch
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <ul>
                    <li>
                      Hizmetlerimiz <MdOutlineKeyboardArrowDown />
                    </li>
                    <li>
                      Misyonumuz <MdOutlineKeyboardArrowDown />
                    </li>
                    <li>
                      hakkımızda <MdOutlineKeyboardArrowDown />
                    </li>
                    <li>İletişim</li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="hero-section py-5">
        <Container className="py-5">
          <Row className="py-5">
            <Col
              sm={12}
              md={6}
              className="d-flex flex-column justify-content-center mb-sm-5"
            >
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <div className="mb-4 mt-3">
                <div>
                  <FcApproval /> Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Sed atque vitae facilis?
                </div>
                <div>
                  <FcApproval /> Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Sed atque vitae facilis?
                </div>
              </div>
              <Button variant="dark" className="rounded-pill">
                Bilgi için <MdKeyboardArrowRight />
              </Button>
            </Col>
            <Col sm={12} md={6} className="mt-sm-2">
              <img className="img-fluid" src={inovation} />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="referances mt-5 mb-5 py-5">
        <h1 className="text-center">Referanslarımız</h1>
        <Container>
          <div className="logos">
            <div className="logos-slide">
              <img src={eftal} />
              <img src={savel} />
              <img src={sigortam} />
              <img src={dede} style={{ height: "100px" }} />
              <img src={kia} style={{ height: "80px" }} />
              <img src={fiat} style={{ height: "80px" }} />
            </div>

            <div className="logos-slide">
              <img src={eftal} />
              <img src={savel} />
              <img src={sigortam} />
              <img src={dede} style={{ height: "100px" }} />
              <img src={kia} style={{ height: "80px" }} />
              <img src={fiat} style={{ height: "80px" }} />
            </div>
          </div>
        </Container>
      </div>

      <div className="everything bg-dark py-5 mt-5">
        <h1 className="text-white text-center">
          Novatech ile herşeyi <br /> yapabilirsiniz
        </h1>
        <Container className="mt-5">
          <Row className="pb-5 border-bottom">
            <Col md={6} className="d-flex justify-content-center">
              <div className="card1 py-5">
                <h1>Web site ve e-ticaret yazılımı</h1>
                <ul className="mt-4">
                  <li>Kullanıcı dostu</li>
                  <li>Yenilikçi</li>
                  <li>Güvenli</li>
                </ul>
                <Button variant="light" className="mt-4 rounded-pill py-2">
                  Bilgi almak için <IoArrowForward />
                </Button>
                <img className="img-fluid mt-5" src={eticaret} />
              </div>
            </Col>

            <Col md={6}>
              <Row className="gap-5">
                <Col md={12}>
                  <div className="card2 py-5 px-4 text-white">
                    <h1>mobil uygulama geliştirme</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit, dolores?
                    </p>
                    <Button variant="light" className="rounded-pill py-2">
                      Bilgi almak için <IoArrowForward />
                    </Button>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="card3 py-5 px-4">
                    <h1>Yazılım eğitimleri</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium, rerum?
                    </p>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <Button variant="light" className="rounded-pill py-2">
                      Bilgi almak için <IoArrowForward />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="number mt-4 d-flex justify-content-between">
            <div className="text-white">
              <p className="fs-1">{count}+</p>
              <span>Toplamda 40'dan fazla ekip üyesi</span>
            </div>
            <div className="text-white">
              <p className="fs-1">{count1}+</p>
              <span>500'ün üzerinde mutlu müşteri</span>
            </div>
            <div className="text-white">
              <p className="fs-1">{count2} saat</p>
              <span>48 saat içerisinde proje inceleme hızı</span>
            </div>
          </div>
        </Container>
      </div>

      <div className="about mt-5">
        <h1 className="text-center">
          Müşteri hedeflerini zirveye <br /> taşıma ile ilgili info
        </h1>
        <Container className="mt-5">
          <Row className="py-5">
            <Col sm={12} md={6}>
              <h2>
                Performansınızı %100 oranında <br /> arttırım..
              </h2>
              <p className="text-muted mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
                Cumque similique sequi harum nulla necessitatibus <br /> labore
                mollitia possimus ab vitae illo, sint libero nostrum non <br />{" "}
                expedita tenetur laborum. Tenetur, accusantium quis.
              </p>
              <Button variant="outline-dark rounded-pill py-2">
                Bilgi almak için <IoArrowForward />
              </Button>
            </Col>
            <Col
              sm={12}
              md={6}
              className="d-flex gap-5 d-flex justify-content-center"
            >
              <Row>
                <Col sm={12} md={8}>
                  <div className="backg1 mt-5">
                    <img src={software} />
                  </div>
                </Col>
                <Col sm={12} md={4} className="d-none d-md-block">
                  <div className="backg2">
                    <img src={software} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-5 py-5">
            <Col md={6}>
              <img src={software1} className="img-fluid rounded" />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <h1>
                İş hızlandırma süreçlerinde <br />
                lhsdfşslkd
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde{" "}
                <br />
                ex inventore incidunt, numquam beatae qui earum aspernatur sint{" "}
                <br />
                optio vel? Veniam odit, eum mollitia sequi ullam sunt corrupti{" "}
                <br />
                dolor.
              </p>
              <Button variant="outline-dark" className="w-25 rounded-pill">
                Bilgi almak için <IoArrowForward />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="slogan mt-5">
        <Container className="py-5">
          <h1 className="text-center">Engellerinizi Şimdi Beraber Aşalım</h1>
          <Row className="mt-5">
            <Col sm={12} md={6}>
              <img src={ofis} className="img-fluid rounded" />
            </Col>
            <Col
              sm={12}
              md={6}
              className="d-flex flex-column justify-content-center gap-5"
            >
              <div className="contact-3">
                <div>
                  <h4>İletişime geçelim</h4>
                  <span className="text-muted">
                    Küresel iş gücü danışmanlarımızda bir görüşme ayarlayın.{" "}
                    Ekibinizin ihtiyaçlarına uygun ücretsiz bir hesap <br />{" "}
                    oluşturacağız.
                  </span>
                </div>
              </div>

              <div className="contact-1">
                <div>
                  <h4>İhtiyaçlarınızı Belirleyelim</h4>
                  <span className="text-muted">
                    Sorunun çözümü ile ilgili olan detayları tespit edelim
                  </span>
                </div>
              </div>

              <div className="contact-2">
                <div>
                  <h4>Çözüm Önerilerimizi Hazırlayalım</h4>
                  <span className="text-muted">
                    İhtiyaçlarınızı planlamaktan ekip üyelerinize desteğe kadar
                    özel ekibimiz sorunsuz bir şekilde kurulum yapmanıza
                    yardımcı olacak
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <footer className="bg-dark py-5">
        <Container>
          <Row className="border-bottom">
            <Col sm={12} md={3} className="w-100">
              <h3 className="text-white">İletişim</h3>
              <FaXTwitter className="text-white" />
              <ImLinkedin2 className="text-white" />
              <FaFacebookF className="text-white" />
              <FaInstagram className="text-white" />
            </Col>

            <Col sm={12} md={3} className="text-white">
              <h3>Nasıl çalışır</h3>
              <ul>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
              </ul>
            </Col>

            <Col sm={12} md={3} className="text-white">
              <h3>Çözümler</h3>
              <ul>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
              </ul>
            </Col>

            <Col sm={12} md={3} className="text-white">
              <h3>Kaynaklar</h3>
              <ul>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
              </ul>
            </Col>
          </Row>
          <div className="d-flex w-100 justify-content-between text-white mt-4">
            <span>© Copyright 2024, Tüm hakları saklıdır</span>
            <ul className="and">
              <li>Politikamız</li>
              <li>Hizmet şartları</li>
            </ul>
          </div>
        </Container>
      </footer> */}
    </>
  );
};

export default App;
