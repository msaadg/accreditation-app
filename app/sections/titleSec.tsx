import { SubTitleBtn } from "../components/subTitleBtn";
import { TitleImage } from "../components/titleImage"

export const TitleSec = ({ bgImg, title, subTitle, redirectUrl, stampUrl } : {
  bgImg: string;
  title: string;
  subTitle: string;
  redirectUrl?: string;
  stampUrl?: string;
}) => {
  return (
    <div>
      <TitleImage bgImg={bgImg} title={title} stampUrl={stampUrl} />
      
      <SubTitleBtn subTitle={subTitle} redirectUrl={redirectUrl} />
    </div>
  )
}