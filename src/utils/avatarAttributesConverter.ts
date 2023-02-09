import { Appearance, Size } from "../components/Avatar/Avatar";

export const imageSizeInRem = (sizeVal: Size) => {
  switch(sizeVal){
    case 'small':
      return 3;
    case 'medium':
      return 8;
    case 'large':
      return 12;
    default:
      return 6;
  }
}

export const avatarAppearance = (appearance: Appearance) => {
  switch(appearance){
    case 'circle':
      return 50;
    case 'square':
      return 10
  }
}