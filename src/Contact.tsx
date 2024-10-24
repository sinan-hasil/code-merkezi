import { useRef, useState } from "react";
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
import logo from "./images/Code Merkezi.png";
import { IoIosMailUnread } from "react-icons/io";
import { RiUserLocationFill } from "react-icons/ri";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./anasayfa.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import modal1 from "./images/firmbee-com-ir5lIkVFqC4-unsplash.jpg";
import modal2 from "./images/raymond-pang-mW0ioxoqFjo-unsplash.jpg";
import modal3 from "./images/austin-distel-wawEfYdpkag-unsplash.jpg";
import modal4 from "./images/shoper-slLo94wES2M-unsplash.jpg";
import modal5 from "./images/sistem-entegrasyon-hizmetleri.jpg";
import modal6 from "./images/cardmapr-nl-XH2JFgT4Abc-unsplash.jpg";
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
    asd: "Web uygulamaları, farklı platform ve cihazlarda erişilebilir olmaları sayesinde, kullanıcılar için büyük bir esneklik sunar. Bu uygulamalar, işletmelerin hizmetlerini geniş bir kitleye ulaştırmalarını sağlayarak müşteri memnuniyetini artırır."
  },
  {
    title: "Mobil Uygulama Geliştirme",
    description: "Mobil uygulamalar, akıllı telefonlar ve tabletler gibi taşınabilir cihazlarda çalışan yazılımlardır. Günümüzde, kullanıcıların günlük yaşamlarını kolaylaştıran, bilgiye hızlı erişim sağlayan ve çeşitli hizmetlere ulaşmalarını mümkün kılan bu uygulamalar, teknolojinin önemli bir parçası haline gelmiştir.",
    imageUrl: modal2,
    asd: "Mobil uygulamalar, işletmelere müşterileriyle doğrudan etkileşim kurma imkanı sunar. Kullanıcı deneyimini artırarak, ürün ve hizmetleri daha etkili bir şekilde tanıtma ve satış yapma fırsatı yaratır. Ayrıca, kullanıcıların ihtiyaçlarına göre kişiselleştirilmiş deneyimler sunarak bağlılıklarını artırır."
  },
  {
    title: "Masaüstü Yazılım",
    description: "Masaüstü yazılım, kişisel bilgisayarlar ve dizüstü bilgisayarlar üzerinde çalışan uygulamalardır. Bu yazılımlar, kullanıcıların bilgisayar donanımının tüm kaynaklarından tam anlamıyla faydalanarak güçlü ve kapsamlı çözümler sunmasını sağlar.",
    imageUrl: modal3,
    asd: "Masaüstü yazılımlar, genellikle kullanıcıların daha karmaşık ve yoğun işlem gerektiren görevleri gerçekleştirmesine olanak tanır. Bu yazılımlar, özellikle profesyonel alanlarda ve özel amaçlar için tasarlanmış uygulamalar olarak büyük önem taşır."
  },
  {
    title: "Entegrasyon Hizmetleri",
    description: "Entegrasyon hizmetleri, farklı yazılım sistemleri, uygulamalar ve veri kaynakları arasında uyum ve etkileşim sağlamak amacıyla sunulan çözümlerdir. İşletmelerin teknolojik altyapılarını optimize etmelerine ve iş süreçlerini daha verimli hale getirmelerine yardımcı olur.",
    imageUrl: modal5,
    asd: "Günümüzde birçok işletme, farklı sistemlerin ve uygulamaların bir arada çalışmasını gerektiren karmaşık bir ortamda faaliyet göstermektedir. Entegrasyon hizmetleri, bu sistemler arasında veri akışını sağlamak, iş süreçlerini otomatikleştirmek ve bilgi paylaşımını kolaylaştırmak için kritik bir rol oynar."
  },
  {
    title: "E-Ticaret Platformları Geliştirme",
    description: "E-ticaret platformları, işletmelerin ürün ve hizmetlerini çevrimiçi olarak sunmalarını sağlayan yazılım çözümleridir. Bu platformlar, müşterilere kolay bir alışveriş deneyimi sunarak, işletmelerin dijital pazardaki varlıklarını güçlendirmelerine yardımcı olur.",
    imageUrl: modal4,
    asd: "Gelişen teknoloji ile birlikte, e-ticaret sektörü hızla büyümekte ve daha fazla işletme çevrimiçi satış yapmayı tercih etmektedir. E-ticaret platformları, sadece satış yapmakla kalmaz; aynı zamanda stok yönetimi, müşteri ilişkileri yönetimi (CRM), analitik raporlama ve pazarlama otomasyonu gibi birçok önemli işlevi de entegre eder."
  },
  {
    title: "Ödeme Sistemleri Entegrasyonu",
    description: "Ödeme sistemleri entegrasyonu, e-ticaret ve çevrimiçi hizmet sağlayıcıları için hayati bir süreçtir. Bu entegrasyon, müşterilerin alışveriş yaparken güvenli ve kolay bir şekilde ödeme yapmalarını sağlamak için gerekli olan teknolojik altyapıyı oluşturur.",
    imageUrl: modal6,
    asd: "Günümüzde, tüketicilerin alışveriş yaparken farklı ödeme yöntemlerine erişim beklediği bir ortamda, işletmelerin bu beklentilere yanıt verebilmesi önemlidir. Kredi kartları, banka kartları, dijital cüzdanlar ve kripto paralar gibi çeşitli ödeme seçeneklerinin entegrasyonu, kullanıcı deneyimini iyileştirir ve dönüşüm oranlarını artırır."
  },
];

const Contact = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [servicesDrop, setServicesDrop] = useState<boolean>(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

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

                  <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    
                  >
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
                  <Nav.Link as={Link} to={"/"} className="text-dark">
                      Anasayfa
                    </Nav.Link>
                  </li>

                  <li>
                    <Nav.Link as={Link} to={"/About"} className="text-dark">
                      hakkımızda
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
