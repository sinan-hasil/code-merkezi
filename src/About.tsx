import { useEffect, useRef, useState } from "react";
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
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import eftal from "./images/logo/eftral logo.png";
import savel from "./images/logo/savel-black.png";
import fiat from "./images/logo/fiat_logo1_2x.png";
import kia from "./images/logo/1fd96547asdasd-ogi-kia-removebg-preview-1.png";
import dede from "./images/logo/dba3780e13722dc65bb9969f1ffef4f060e27510.png";
import sigortam from "./images/logo/sigortamfast-new-logo-b4fbfc74-f.png";
import carman from "./images/logo/WhatsApp-Gorsel-2023-06-02-saat-18-300x145.png";
import logo from "./images/Code Merkezi.png";
import "./anasayfa.css";
import { FaWhatsapp } from "react-icons/fa";
import modal1 from "./images/firmbee-com-ir5lIkVFqC4-unsplash.jpg";
import modal2 from "./images/raymond-pang-mW0ioxoqFjo-unsplash.jpg";
import modal3 from "./images/austin-distel-wawEfYdpkag-unsplash.jpg";
import modal4 from "./images/shoper-slLo94wES2M-unsplash.jpg";
import modal5 from "./images/sistem-entegrasyon-hizmetleri.jpg";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  asd: string;
}

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

const About = () => {
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
                  <Nav.Link as={Link} to={"/"} className="text-dark">
                    Anasayfa
                  </Nav.Link>

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
              <a href="https://eftalfilo.com/" className="ms-5">
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
        <Container>© Code Merkezi Tüm Hakları Saklıdır</Container>
      </footer>
    </>
  );
};

export default About;
