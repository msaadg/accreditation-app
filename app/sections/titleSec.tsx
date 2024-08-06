import { SubTitleBtn } from "../components/subTitleBtn";
import { TitleImage } from "../components/titleImage"

export const TitleSec = ({ bgImg, title, subTitle } : {
  bgImg: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <div>
      <TitleImage bgImg={bgImg} title={title} />
      
      <SubTitleBtn subTitle={subTitle} />
    </div>
  )
}