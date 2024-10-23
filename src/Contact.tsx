import { useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  Offcanvas,
  Overlay,
  Popover,
  Row,
} from "react-bootstrap";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "./images/Code Merkezi.png";
import { IoIosMailUnread } from "react-icons/io";
import { RiUserLocationFill } from "react-icons/ri";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./anasayfa.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Contact = () => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [servicesDrop, setServicesDrop] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const ref = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleServices = (event: React.MouseEvent<HTMLLIElement>) => {
    setServicesDrop(!servicesDrop);
    setShowPopover(!showPopover);
    setTarget(event.currentTarget);
  };

  const handleWhastapp = () => {
    const phoneNumber = "+905335774740";
    const url =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      "Merhaba! Ürünleriniz hakkında bilgi almak istiyorum.";
    window.open(url, "_blank")?.focus();
  };

  return (
    <>
    <div className="wp" onClick={handleWhastapp}>
    <FaWhatsapp />
    </div>
      <Container fluid className="nav">
        <Container>
          <Row>
            <Col>
            <Nav.Link as={Link} to={"/"}>
              <img src={logo} width={100} style={{cursor: "pointer"}} />
              </Nav.Link>
            </Col>
            <Col className="d-flex justify-content-end align-items-center p-0">
              <div className="navbar-link pt-2 d-none d-sm-block">
                <ul>
                  <li
                    onMouseEnter={toggleServices}
                    onMouseLeave={() => {
                      setServicesDrop(false);
                      setShowPopover(false);
                    }}
                  >
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
                    <li><Nav.Link as={Link} to={"/"} className="text-dark">Anasayfa</Nav.Link></li>
                  <li><Nav.Link as={Link} to={"/about"} className="text-dark">Hakkımızda</Nav.Link></li>
                  <li>
                    <Nav.Link as={Link} className="text-dark" to={"/contact"}>
                      İletişim
                    </Nav.Link>
                  </li>
                </ul>
              </div>

              <Button
                variant="outline-dark"
                className="d-block d-sm-none"
                onClick={handleShow}
              >
                <RxHamburgerMenu />
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

      <Container fluid className="py-5 ulasin text-white">
        <Container className="py-5 d-flex flex-column justify-content-center mt-5">
          <h1 className="text-center">Bize Ulaşın</h1>
          <p className="text-center mt-3">
            Her türlü soru, görüş veya öneriniz için bizimle iletişime geçmekten
            çekinmeyin. İhtiyaç duyduğunuz her an yanınızdayız ve size en iyi
            hizmeti sunmak için buradayız. Geri dönüşlerinizi merakla bekliyoruz
            ve en kısa sürede yanıt vermek için çalışacağız. İletişim
            bilgilerimizi kullanarak ya da sosyal medya hesaplarımızdan bize
            ulaşabilirsiniz. Sizlerin görüşleri bizim için son derece değerli.
          </p>
        </Container>
      </Container>

      <Container className="mt-5 py-5 iletisim">
        <Row>
          <Col sm={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9619443000024!2d29.91998847654294!3d40.76286173449936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4583fc12402d%3A0xbc21054bf44eb1cd!2zR2Fra28gS2VydmFuc2FyYXkgxLDFnyBIYW7EsQ!5e0!3m2!1str!2str!4v1729683239483!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column justify-content-center">
          <h3>İletişim Bilgileri</h3>
            <ul>
              <li>
                <FaPhoneAlt /> 0 533 577 47 40
              </li>
              <li>
                <IoIosMailUnread /> info@codemerkezi.com
              </li>
              <li>
                <RiUserLocationFill /> Kemalpaşa, Eski Hamam Sk. No:1 Kat: 6 Daire: 72, 41200 İzmit/Kocaeli
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <footer className="py-3 bg-dark text-white ">
        <Container>
        © Code Merkezi Tüm Hakları Saklıdır
        </Container>
      </footer>
    </>
  );
};

export default Contact;
