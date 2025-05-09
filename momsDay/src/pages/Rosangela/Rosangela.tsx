import Carrossel from '../../components/Carrossel/Carrossel';
import Carrossel2 from '../../components/Carrossel/Carrossel2';
import imgCarroussel01 from "../../assets/rosangela/imgrosangela01.jpg";
import imgCarroussel02 from "../../assets/rosangela/imgrosangela02.jpg";
import imgCarroussel03 from "../../assets/rosangela/imgrosangela03.jpg";
import imgCarroussel04 from "../../assets/rosangela/imgrosangela04.jpg";
import imgCarroussel05 from "../../assets/rosangela/imgrosangela05.jpg";
import imgCarroussel06 from "../../assets/rosangela/imgrosangela06.jpg";
import imgCarroussel07 from "../../assets/rosangela/imgrosangela07.jpg";
import imgCarroussel0201 from "../../assets/rosangela/img01.jpg";
import imgCarroussel0202 from "../../assets/rosangela/img02.jpg";
import imgCarroussel0203 from "../../assets/rosangela/img03.jpg";
import imgCarroussel0204 from "../../assets/rosangela/img04.jpg";
import imgCarroussel0205 from "../../assets/rosangela/img05.jpg";
import imgCarroussel0206 from "../../assets/rosangela/img06.jpg";
import imgCarroussel0207 from "../../assets/rosangela/img07.jpg";
import imgCarroussel0208 from "../../assets/rosangela/img08.jpg";
import imgCarroussel0209 from "../../assets/rosangela/img09.jpg";
import imgCarroussel0210 from "../../assets/rosangela/img10.jpg";
import MensagemRosangela from '../../components/Banner/Banner2';
import MensagemDiego from '../../components/Dedicatoria/MensagemDiego';
import MensagemDeb from '../../components/Dedicatoria/MensagemDeb';

export default function Rosangela() {
  const imagens = [
    imgCarroussel01, imgCarroussel02, imgCarroussel03,
    imgCarroussel04, imgCarroussel05, imgCarroussel06, imgCarroussel07
  ];
  const imagens2 = [
    imgCarroussel0201, imgCarroussel0202, imgCarroussel0203,
    imgCarroussel0204, imgCarroussel0205, imgCarroussel0206,
    imgCarroussel0207, imgCarroussel0208, imgCarroussel0209, imgCarroussel0210
  ];

  return (
    <div>
      <MensagemRosangela/>
      <Carrossel imagens={imagens} />
      <MensagemDiego/>
      <MensagemDeb/>
      <Carrossel2 imagens={imagens2} />
    </div>
  );
}
