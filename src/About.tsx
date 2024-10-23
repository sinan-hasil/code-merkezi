import { useEffect, useRef, useState } from "react";
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
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import eftal from "./images/logo/eftral logo.png";
import savel from "./images/logo/savel-black.png";
import fiat from "./images/logo/fiat_logo1_2x.png";
import kia from "./images/logo/1fd96547asdasd-ogi-kia-removebg-preview-1.png";
import dede from "./images/logo/dba3780e13722dc65bb9969f1ffef4f060e27510.png";
import sigortam from "./images/logo/sigortamfast-new-logo-b4fbfc74-f.png";
import logo from "./images/Code Merkezi.png";
import "./anasayfa.css";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [servicesDrop, setServicesDrop] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [count, setCount] = useState<number>(0);
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
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

  const handleWhastapp = () => {
    const phoneNumber = "+905072992776";
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
                <img src={logo} width={100} style={{ cursor: "pointer" }} />
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
                  <li>
                    <Nav.Link as={Link} to={"/"} className="text-dark">
                      Anasayfa
                    </Nav.Link>
                  </li>
                  <li>hakkımızda</li>
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

      <div className="py-5">
        <div className="py-5 back-img">
          <h2 className="text-center text-white z-3">Hakkımızda</h2>
          <p className="text-center text-white z-3">
            Code Merkezi Teknoloji - Information Technologies
          </p>
        </div>
      </div>

      <div>
        <Container>
          <h4>Hedeflerimiz ve Değerlerimiz</h4>
          <p className="mt-4">
            Firmamız, dijital dünyada işletmelerin ihtiyaçlarına özel çözümler
            üreten bir yazılım şirketidir. Özellikle web uygulamaları alanında
            uzmanlaşarak, her büyüklükteki işletme için verimli ve yenilikçi
            projeler geliştiriyoruz. Amacımız, teknolojiyi iş süreçlerinin
            ayrılmaz bir parçası haline getirerek, müşterilerimizin dijital
            dönüşüm yolculuklarında güvenilir bir partner olmaktır. İşletmelerin
            özgün ihtiyaçlarına yönelik yazılım çözümleri sunarken, hızla
            değişen teknoloji dünyasında en yeni gelişmeleri takip ederek
            müşterilerimize rekabet avantajı sağlıyoruz.
          </p>
        </Container>
      </div>

      <div className="referances mt-5 mb-5 py-5">
        <h1 className="text-center">Referanslarımız</h1>
        <Container>
          <div className="logos">
            <div className="logos-slide">
              <img src={eftal} />
              <img src={savel} />
              <a href="https://sigortamfast.com/">
                <img src={sigortam} />
              </a>
              <img src={dede} style={{ height: "100px" }} />
              <a href="https://www.kia.com/tr/satis-merkezi/yetkili-servis-satici/efsane-otomotiv.html">
                <img src={kia} style={{ height: "80px" }} />
              </a>
              <a href="https://efsane.fiatbayi.com.tr/">
                <img src={fiat} style={{ height: "80px" }} />
              </a>
            </div>

            <div className="logos-slide">
              <a href="https://eftalfilo.com/">
                <img src={eftal} />
              </a>
              <a href="http://savelglobal.com/?category=Ta%C5%9F%C4%B1nabilir%20%C4%B0stasyon">
                <img src={savel} />
              </a>
              <a href="https://sigortamfast.com/">
                <img src={sigortam} />
              </a>
              <a href="https://www.kia.com/tr/satis-merkezi/yetkili-servis-satici/efsane-otomotiv.html">
                <img src={kia} style={{ height: "80px" }} />
              </a>
              <img src={dede} style={{ height: "100px" }} />
              <a href="https://efsane.fiatbayi.com.tr/">
                <img src={fiat} style={{ height: "80px" }} />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <h2>Misyonumuz</h2>
          <p>
            Misyonumuz, firmaların dijital süreçlerini güçlendiren, güvenilir ve
            ölçeklenebilir web uygulamaları geliştirmektir. Müşterilerimize özel
            olarak tasarladığımız çözümlerle, onların iş süreçlerini optimize
            etmeyi, büyümelerine katkı sağlamayı ve uzun vadeli iş birlikleri
            kurmayı hedefliyoruz. Teknolojiye olan tutkumuzu ve işimize olan
            bağlılığımızı her projede yansıtıyor, sektörde sürdürülebilir
            inovasyonun öncüsü olmayı amaçlıyoruz.
          </p>
        </Container>
      </div>

      <div
        className="services py-5 mt-5"
        style={{ backgroundColor: "#647f94" }}
      >
        <Container>
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

      <div className="mt-5 mb-5">
        <Container>
          <h2>Vizyonumuz</h2>
          <p>
            Vizyonumuz, web teknolojileri alanında global ölçekte tanınan ve
            tercih edilen bir yazılım şirketi olmak, müşterilerimize sunduğumuz
            özel çözümlerle sektörde fark yaratarak, firmaların dijital dönüşüm
            süreçlerine liderlik etmektir. Geliştirdiğimiz her projede
            mükemmeliyet ve kullanıcı odaklılık ilkesiyle hareket ediyor,
            yazılım dünyasında inovasyonun ve kalitenin simgesi olmayı
            hedefliyoruz.
          </p>
        </Container>
      </div>
      <footer className="py-3 bg-dark text-white ">
        <Container>
        © Code Merkezi Tüm Hakları Saklıdır
        </Container>
      </footer>
    </>
  );
};

export default About;
