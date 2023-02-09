export const modalWidthConverter =  (value: string | undefined) => {
  switch(value){
    case 'small':
      return 20
    case 'medium':
      return 25
    case 'large':
      return 50
    default:
      return 30
  }
}