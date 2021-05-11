import Img1 from "../Images/img-1.jpg";
import Img2 from "../Images/img-2.jpg";
import Img3 from "../Images/img-3.jpg";
import Img4 from "../Images/img-4.jpg";
import Img5 from "../Images/img-5.jpg";

export const useSlider = () => {
  const data = [
    {
      img: Img1,
      title: "Fancy looking workspaces",
    },
    {
      img: Img2,
      title: "Fully air conditionered",
    },
    {
      img: Img3,
      title: "Calm conference rooms",
    },
    {
      img: Img4,
      title: "Wi-Fi enabled",
    },
    {
      img: Img5,
      title: "Hygenic cafeteria",
    },
  ];
  return data;
};
