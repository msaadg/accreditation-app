import { SubTitleBtn } from "../components/subTitleBtn";
import { TitleImage } from "../components/titleImage"

export const TitleSec = ({ bgImg, title, subTitle, redirectUrl, stampUrl, darken } : {
  bgImg: string;
  title: string;
  subTitle: string;
  redirectUrl?: string;
  stampUrl?: string;
  darken?: boolean;
}) => {
  return (
    <div>
      <TitleImage bgImg={bgImg} title={title} stampUrl={stampUrl} darken={darken} />
      
      <SubTitleBtn subTitle={subTitle} redirectUrl={redirectUrl} />
    </div>
  )
}