import { Appearance } from "../common/types"

export const appearanceConverter = (value: Appearance | undefined) => {
  switch(value){
    case 'success':
      return '#4CAF50';
    case 'danger': 
      return '#f44336';
    case 'warning':
      return 'orange';
    case 'info':
      return '#008CBA';
    case 'idle':
      return 'gray';
    default:
      return 'gray';
  }
  
}