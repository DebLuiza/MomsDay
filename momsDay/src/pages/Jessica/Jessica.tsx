import Banner from '../../components/Banner/Banner';
import Carrossel from '../../components/Carrossel/Carrossel';
import Carrossel2 from '../../components/Carrossel/Carrossel2';
import imgCarroussel01 from "../../assets/jessica/carrossel01.jpg";
import imgCarroussel02 from "../../assets/jessica/carrossel02.jpg";
import imgCarroussel03 from "../../assets/jessica/carrossel03.jpg";
import imgCarroussel04 from "../../assets/jessica/carrossel04.jpg";
import imgCarroussel05 from "../../assets/jessica/carrossel05.jpg";
import imgCarroussel06 from "../../assets/jessica/carrossel06.jpg";
import imgCarroussel07 from "../../assets/jessica/carrossel07.jpg";
import imgCarroussel0201 from "../../assets/jessica/carrossel0201.jpg";
import imgCarroussel0202 from "../../assets/jessica/carrossel0202.jpg";
import imgCarroussel0203 from "../../assets/jessica/carrossel0203.jpg";
import imgCarroussel0204 from "../../assets/jessica/carrossel0204.jpg";
import imgCarroussel0205 from "../../assets/jessica/carrossel0205.jpg";
import imgCarroussel0206 from "../../assets/jessica/carrossel0206.jpg";
import imgCarroussel0207 from "../../assets/jessica/carrossel0207.jpg";
import imgCarroussel0208 from "../../assets/jessica/carrossel0208.jpg";
import imgCarroussel0209 from "../../assets/jessica/carrossel0209.jpg";
import imgCarroussel0210 from "../../assets/jessica/carrossel0210.jpg";
import imgP01 from "../../assets/jessica/img_principal01.jpg";
import imgP02 from "../../assets/jessica/img_principal02.jpg";
import imgP03 from "../../assets/jessica/img_principal03.jpg";
import imgP04 from "../../assets/jessica/img_principal04.jpg";
import MensagemDedicatoria01 from '../../components/Dedicatoria/MensagemDedicatoria01';
import CarrosselDeFotos from '../../components/Picture/Picture';

export default function Jessica() {
  const imagens = [
    imgCarroussel01, imgCarroussel02, imgCarroussel03,
    imgCarroussel04, imgCarroussel05, imgCarroussel06, imgCarroussel07
  ];
  const imagens2 = [
    imgCarroussel0201, imgCarroussel0202, imgCarroussel0203,
    imgCarroussel0204, imgCarroussel0205, imgCarroussel0206,
    imgCarroussel0207, imgCarroussel0208, imgCarroussel0209, imgCarroussel0210
  ];

  const slides = [
    {
      imagemUrl: imgP01,
      legenda: "Feliz dia das mães!",
    },
    {
      imagemUrl: imgP02,
      legenda: "'Essas memórias me transportam de volta ao primeiro ano, uma experiência repleta de sabor e desafios. Recordo o cansaço das madrugadas, as preces silenciosas e os tantos momentos de alegria vividos neste corredor.'",
    },
    {
      imagemUrl: imgP03,
      legenda: "'Tem algo nessa imagem… é como se o abraço do Isaac estivesse ali, silencioso e cheio de amor'",
    },
    {
      imagemUrl: imgP04,
      legenda: "'Essa imagem traduz bem esse momento: menos colados, mas mais conectados de outros jeitos. Tem uma distância suave entre os momentos… como quem aprende a se ligar de outras formas.'",
    },
  ];

  return (
    <div>
      <CarrosselDeFotos slides={slides} />
      <Banner />
      <Carrossel imagens={imagens} />
      <MensagemDedicatoria01/>
      <Carrossel2 imagens={imagens2} />
    </div>
  );
}
