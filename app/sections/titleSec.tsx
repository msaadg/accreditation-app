import { SubTitleBtn } from "../components/subTitleBtn";
import { TitleImage } from "../components/titleImage"

export const TitleSec = ({ bgImg, title, subTitle, redirectUrl } : {
  bgImg: string;
  title: string;
  subTitle: string;
  redirectUrl?: string;
}) => {
  return (
    <div>
      <TitleImage bgImg={bgImg} title={title} />
      
      <SubTitleBtn subTitle={subTitle} redirectUrl={redirectUrl} />
    </div>
  )
}