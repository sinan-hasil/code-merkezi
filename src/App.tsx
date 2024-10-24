import {
  Button,
  Col,
  Container,
  Modal,
  Nav,
  Offcanvas,
  Overlay,
  Popover,
  Row,
} from "react-bootstrap";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { IoArrowForward } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import eticaret from "./images/austin-distel-744oGeqpxPQ-unsplash.jpg";
import inovation from "./images/asdasd.png";
import software from "./images/altumcode-PNbDkQ2DDgM-unsplash.jpg";
import yazilim from "./images/niclas-illg-FJ5e_2f96h4-unsplash.jpg";
import yazilim1 from "./images/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg";
import software1 from "./images/austin-distel-wawEfYdpkag-unsplash.jpg";
import eftal from "./images/logo/eftral logo.png";
import savel from "./images/logo/savel-black.png";
import fiat from "./images/logo/fiat_logo1_2x.png";
import kia from "./images/logo/1fd96547asdasd-ogi-kia-removebg-preview-1.png";
import dede from "./images/logo/dba3780e13722dc65bb9969f1ffef4f060e27510.png";
import sigortam from "./images/logo/sigortamfast-new-logo-b4fbfc74-f.png";
import carman from "./images/logo/WhatsApp-Gorsel-2023-06-02-saat-18-300x145.png";
import ofis from "./images/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg";
import logo from "./images/Code Merkezi.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import modal1 from "./images/firmbee-com-ir5lIkVFqC4-unsplash.jpg";
import modal2 from "./images/raymond-pang-mW0ioxoqFjo-unsplash.jpg";
import modal3 from "./images/austin-distel-wawEfYdpkag-unsplash.jpg";
import modal4 from "./images/shoper-slLo94wES2M-unsplash.jpg";
import modal5 from "./images/sistem-entegrasyon-hizmetleri.jpg";
import { Link } from "react-router-dom";
import "./anasayfa.css";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  asd: string;
}

// Event handler tipleri
type ServiceClickHandler = (service: Service) => void;
type ToggleServicesHandler = (event: React.MouseEvent<HTMLLIElement>) => void;

const services: Service[] = [
  {
    title: "Web Uygulamaları",
    description:
      "Günümüzde web uygulamaları, işletmelerin dijital dönüşüm süreçlerinde önemli bir rol oynamaktadır. Kullanıcıların ihtiyaçlarına yönelik etkileşimli ve dinamik deneyimler sunarak, bilgiye erişimi kolaylaştırmakta ve iş süreçlerini optimize etmektedir.",
    imageUrl: modal1,
    asd: "Web uygulamaları, farklı platform ve cihazlarda erişilebilir olmaları sayesinde, kullanıcılar için büyük bir esneklik sunar. Bu uygulamalar, işletmelerin hizmetlerini geniş bir kitleye ulaştırmalarını sağlayarak müşteri memnuniyetini artırır.",
  },
  {
    title: "Mobil Uygulama Geliştirme",
    description:
      "Mobil uygulamalar, akıllı telefonlar ve tabletler gibi taşınabilir cihazlarda çalışan yazılımlardır. Günümüzde, kullanıcıların günlük yaşamlarını kolaylaştıran, bilgiye hızlı erişim sağlayan ve çeşitli hizmetlere ulaşmalarını mümkün kılan bu uygulamalar, teknolojinin önemli bir parçası haline gelmiştir.",
    imageUrl: modal2,
    asd: "Mobil uygulamalar, işletmelere müşterileriyle doğrudan etkileşim kurma imkanı sunar. Kullanıcı deneyimini artırarak, ürün ve hizmetleri daha etkili bir şekilde tanıtma ve satış yapma fırsatı yaratır. Ayrıca, kullanıcıların ihtiyaçlarına göre kişiselleştirilmiş deneyimler sunarak bağlılıklarını artırır.",
  },
  {
    title: "Masaüstü Yazılım",
    description:
      "Masaüstü yazılım, kişisel bilgisayarlar ve dizüstü bilgisayarlar üzerinde çalışan uygulamalardır. Bu yazılımlar, kullanıcıların bilgisayar donanımının tüm kaynaklarından tam anlamıyla faydalanarak güçlü ve kapsamlı çözümler sunmasını sağlar.",
    imageUrl: modal3,
    asd: "Masaüstü yazılımlar, genellikle kullanıcıların daha karmaşık ve yoğun işlem gerektiren görevleri gerçekleştirmesine olanak tanır. Bu yazılımlar, özellikle profesyonel alanlarda ve özel amaçlar için tasarlanmış uygulamalar olarak büyük önem taşır.",
  },
  {
    title: "Entegrasyon Hizmetleri",
    description:
      "Entegrasyon hizmetleri, farklı yazılım sistemleri, uygulamalar ve veri kaynakları arasında uyum ve etkileşim sağlamak amacıyla sunulan çözümlerdir. İşletmelerin teknolojik altyapılarını optimize etmelerine ve iş süreçlerini daha verimli hale getirmelerine yardımcı olur.",
    imageUrl: modal5,
    asd: "Günümüzde birçok işletme, farklı sistemlerin ve uygulamaların bir arada çalışmasını gerektiren karmaşık bir ortamda faaliyet göstermektedir. Entegrasyon hizmetleri, bu sistemler arasında veri akışını sağlamak, iş süreçlerini otomatikleştirmek ve bilgi paylaşımını kolaylaştırmak için kritik bir rol oynar.",
  },
  {
    title: "E-Ticaret Platformları Geliştirme",
    description:
      "E-ticaret platformları, işletmelerin ürün ve hizmetlerini çevrimiçi olarak sunmalarını sağlayan yazılım çözümleridir. Bu platformlar, müşterilere kolay bir alışveriş deneyimi sunarak, işletmelerin dijital pazardaki varlıklarını güçlendirmelerine yardımcı olur.",
    imageUrl: modal4,
    asd: "Gelişen teknoloji ile birlikte, e-ticaret sektörü hızla büyümekte ve daha fazla işletme çevrimiçi satış yapmayı tercih etmektedir. E-ticaret platformları, sadece satış yapmakla kalmaz; aynı zamanda stok yönetimi, müşteri ilişkileri yönetimi (CRM), analitik raporlama ve pazarlama otomasyonu gibi birçok önemli işlevi de entegre eder.",
  },
];

const App = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [servicesDrop, setServicesDrop] = useState<boolean>(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleServices: ToggleServicesHandler = (event) => {
    setServicesDrop(!servicesDrop);
    setShowPopover(!showPopover);
    setTarget(event.currentTarget);
  };

  const handleServiceClick: ServiceClickHandler = (service) => {
    setSelectedService(service);
    setShowModal(true);
    setServicesDrop(false);
    setShowPopover(false);
  };

  const handleWhatsapp = () => {
    const phoneNumber = "+905335774740";
    const url = `https://wa.me/${phoneNumber}?text=Merhaba! Ürünleriniz hakkında bilgi almak istiyorum.`;
    window.open(url, "_blank")?.focus();
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
    if (count1 < 250) {
      const timer = setInterval(() => {
        setCount1((prevCount1) => prevCount1 + 1);
      }, 3);
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
      <div className="wp" onClick={handleWhatsapp}>
        <FaWhatsapp />
      </div>
      <Container fluid className="nav">
        <Container>
          <Row>
            <Col>
              <Nav.Link as={Link} to={"/"}>
                <img src={logo} width={120} style={{ cursor: "pointer" }} />
              </Nav.Link>
            </Col>
            <Col className="d-flex justify-content-end align-items-center p-0">
              <div className="navbar-link pt-2 d-none d-sm-block">
                <ul>
                  <li
                    className="position-relative"
                    onMouseEnter={toggleServices}
                    onMouseLeave={() => {
                      setServicesDrop(false);
                      setShowPopover(false);
                    }}
                  >
                    <div
                      className="d-flex align-items-center gap-1"
                      style={{ cursor: "pointer" }}
                    >
                      Hizmetlerimiz
                      <MdOutlineKeyboardArrowDown
                        style={{
                          transform: `${
                            servicesDrop ? "rotate(180deg)" : "rotate(0deg)"
                          }`,
                          transition: "0.3s",
                        }}
                      />
                    </div>

                    <div ref={ref}>
                      <Overlay
                        show={showPopover}
                        target={target}
                        placement="bottom"
                        container={ref}
                        containerPadding={30}
                      >
                        <Popover
                          id="popover-contained"
                          style={{ width: "200px" }}
                        >
                          <Popover.Body className="p-0">
                            <ul className="list-unstyled m-0 d-flex flex-column">
                              {services.map((service) => (
                                <li
                                  key={service.title}
                                  className="px-3 py-2 hover-bg-light"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleServiceClick(service)}
                                >
                                  {service.title}
                                </li>
                              ))}
                            </ul>
                          </Popover.Body>
                        </Popover>
                      </Overlay>
                    </div>
                  </li>

                  <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>{selectedService?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column gap-5">
                      <div className="text-center mb-3">
                        <img
                          src={selectedService?.imageUrl}
                          alt={selectedService?.title}
                          className="img-fluid rounded"
                          style={{
                            height: "100%",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </div>
                      <p>{selectedService?.description}</p>
                      <p>{selectedService?.asd}</p>
                    </Modal.Body>
                  </Modal>

                  <li>
                    <Nav.Link as={Link} to={"/About"} className="text-dark">
                      Hakkımızda
                    </Nav.Link>
                  </li>
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
                      <Nav.Link as={Link} className="text-dark" to={"/"}>
                        Hizmetlerimiz
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={Link} className="text-dark" to={"/about"}>
                        Hakkımzıda
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={Link} className="text-dark" to={"/contact"}>
                        İletişim
                      </Nav.Link>
                    </li>
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
              <h1>Dijital Dünyanızı Şekillendirin</h1>
              <div className="mb-4 mt-3">
                <div>
                  <FcApproval /> Modern tasarımlar ve kullanıcı dostu
                  arayüzlerle markanızı etkileyici <br /> bir şekilde online
                  dünyada temsil edin.
                </div>
                <div className="mt-3">
                  <FcApproval /> Kullanıcıların her an erişebileceği, işlevsel
                  ve hızlı mobil uygulamalarla <br /> etkileşimi artırın.
                </div>
                <div className="mt-3">
                  <FcApproval /> Müşterilerinizi düşünerek, kullanıcı deneyimini
                  ön planda tutan <br /> projeler geliştirin.
                </div>
              </div>
              <Link to={"/services"}>
                <Button variant="dark" className="rounded">
                  Bilgi için <MdKeyboardArrowRight />
                </Button>
              </Link>
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
              <a href="https://sigortamfast.com/">
                <img src={sigortam} />
              </a>
              <a href="https://otoadam.com/carman-ikinciel-yetki-formu/">
                <img src={carman} />
              </a>
              <a href="https://www.otoshops.com/otoshops_dede_otomotiv?gad_source=1&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0csmOyIF7jYJ6aCi0Op-bjgIc9Z4ZFlj32Cbzh4l23O6P6AksG9bZ7iQaAm5zEALw_wcB">
                <img src={dede} style={{ height: "100px" }} />
              </a>
              <a href="https://www.kia.com/tr/satis-merkezi/yetkili-servis-satici/efsane-otomotiv.html">
                <img src={kia} style={{ height: "80px" }} />
              </a>
              <a href="https://efsane.fiatbayi.com.tr/" className="me-5">
                <img src={fiat} style={{ height: "80px" }} />
              </a>
            </div>

            <div className="logos-slide">
              <a href="https://eftalfilo.com/" style={{marginLeft: "100px"}}>
                <img src={eftal} />
              </a>
              <a href="https://otoadam.com/carman-ikinciel-yetki-formu/">
                <img src={carman} />
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
              <a href="https://www.otoshops.com/otoshops_dede_otomotiv?gad_source=1&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0csmOyIF7jYJ6aCi0Op-bjgIc9Z4ZFlj32Cbzh4l23O6P6AksG9bZ7iQaAm5zEALw_wcB">
                <img src={dede} style={{ height: "100px" }} />
              </a>
              <a href="https://efsane.fiatbayi.com.tr/">
                <img src={fiat} style={{ height: "80px" }} />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="everything bg-dark py-5 mt-5">
        <h1 className="text-white text-center">
          Code Merkezi ile herşeyi <br /> yapabilirsiniz
        </h1>
        <Container className="mt-5">
          <Row className="pb-5 border-bottom">
            <Col md={6} className="d-flex justify-content-center">
              <div className="card1 py-5 d-flex flex-column justify-content-between">
                <h1>Web site ve e-ticaret yazılımı</h1>
                <ul
                  className="mt-4"
                  style={{ listStyle: "none", padding: "0" }}
                >
                  <li>
                    <IoIosCheckmarkCircle /> Kullanıcı dostu
                  </li>
                  <li>
                    <IoIosCheckmarkCircle /> Yenilikçi
                  </li>
                  <li>
                    <IoIosCheckmarkCircle /> Güvenli
                  </li>
                </ul>
                <Link to={"/services"}>
                  <Button variant="light" className="mt-4 rounded-pill py-2">
                    Bilgi almak için <IoArrowForward />
                  </Button>
                </Link>
                <img className="img-fluid mt-5" src={eticaret} />
              </div>
            </Col>

            <Col md={6}>
              <Row className="gap-5">
                <Col md={12}>
                  <div className="card2 py-5 px-4 text-white m-0">
                    <h1>mobil uygulama geliştirme</h1>
                    <ul
                      className="mt-4"
                      style={{ listStyle: "none", padding: "0" }}
                    >
                      <li>
                        <IoIosCheckmarkCircle /> Performans Optimizasyonu
                      </li>
                      <li>
                        <IoIosCheckmarkCircle /> Uygulama Mağazası Optimizasyonu
                      </li>
                      <li>
                        <IoIosCheckmarkCircle /> Uygulama İçi Pazarlama
                      </li>
                    </ul>
                    <Link to={"/services"}>
                      <Button
                        variant="light"
                        className="mt-4 rounded-pill py-2"
                      >
                        Bilgi almak için <IoArrowForward />
                      </Button>
                    </Link>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="card3 py-5 px-4 m-0">
                    <h1>Masaüstü Yazılımı</h1>
                    <p>
                      İhtiyacınıza özel, verimli masaüstü uygulamalarıyla iş
                      süreçlerinizi güçlendirin.
                    </p>
                    <ul
                      className="mt-4"
                      style={{ listStyle: "none", padding: "0" }}
                    >
                      <li>
                        <IoIosCheckmarkCircle className="text-white" />{" "}
                        Özelleştirilmiş Çözümler
                      </li>
                      <li>
                        <IoIosCheckmarkCircle className="text-white" /> Yüksek
                        Performans
                      </li>
                      <li>
                        <IoIosCheckmarkCircle className="text-white" />{" "}
                        Kullanıcı Dostu Arayüz
                      </li>
                      <li>
                        <IoIosCheckmarkCircle className="text-white" />{" "}
                        Güvenilir Destek
                      </li>
                    </ul>
                    <Link to={"/services"}>
                      <Button
                        variant="light"
                        className="mt-4 rounded-pill py-2"
                      >
                        Bilgi almak için <IoArrowForward />
                      </Button>
                    </Link>
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
              <span>250'ün üzerinde mutlu müşteri</span>
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
          Zirveye Giden Yol: <br /> Müşteri Hedeflerinizi Gerçekleştirin
        </h1>
        <Container className="mt-5">
          <Row className="py-5">
            <Col
              className="d-flex flex-column justify-content-center"
              sm={12}
              md={6}
            >
              <h2>
                Performansınızı %100 oranında <br /> arttırım..
              </h2>
              <p className="text-muted mt-3">
                İş süreçlerinizdeki verimliliği artırmak için yenilikçi çözümler
                sunuyoruz. <br /> Özel olarak tasarlanmış yazılımlarımız,
                ihtiyaçlarınıza yönelik özelliklerle donatılarak, <br /> günlük
                görevlerinizi daha hızlı ve etkili bir şekilde
                gerçekleştirmenizi sağlar.
              </p>
              <Link to={"/services"}>
                <Button variant="light" className="mt-4 rounded-pill py-2">
                  Bilgi almak için <IoArrowForward />
                </Button>
              </Link>
            </Col>
            <Col
              sm={12}
              md={6}
              className="d-flex gap-5 d-flex justify-content-center"
            >
              <Col sm={12} md={8}>
                <img src={software} className="rounded" />
              </Col>
              <Row className="resp-row">
                <Col md={12} className="d-none d-md-block">
                  <img src={yazilim} className="rounded" />
                </Col>
                <Col md={12} className="d-flex align-items-end">
                  <img
                    src={yazilim1}
                    className="rounded"
                    style={{ height: "250px" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-5 py-5">
            <Col md={6}>
              <img src={software1} className="img-fluid rounded" />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <h1>İş Süreçlerinizi Hızlandırın</h1>
              <p>Verimliliğinizi artırarak işlerinizi daha hızlı tamamlayın!</p>
              <p>
                İş süreçlerinizi hızlandırmak için yenilikçi yazılım
                çözümlerimizle tanışın. <br /> İhtiyacınıza özel tasarlanan
                uygulamalar, iş akışlarınızı optimize ederek <br /> zaman ve
                kaynak tasarrufu sağlar. Kullanıcı dostu arayüzlerimiz sayesinde{" "}
                <br /> ekip üyeleriniz, görevlerini daha hızlı ve etkin bir
                şekilde yerine getirebilir.
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
            <Col sm={12} md={6} className="d-flex align-items-center">
              <img src={ofis} className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="py-3 bg-dark text-white ">
        <Container>© Code Merkezi Tüm Hakları Saklıdır</Container>
      </footer>
    </>
  );
};

export default App;
