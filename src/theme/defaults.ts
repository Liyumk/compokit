import { CompoKitTheme } from "../components/CompoKit/CompoKitTheme";

const theme : CompoKitTheme = {
  progressIndicator: {
    root:{
      base: 'flex w-fit justify-center items-center gap-x-2',
    },
    indicate: {
      base: 'w-2 h-2 rounded-xl',
      appearance: {
        default:{
          selected: "bg-blue-900",
          others:'bg-blue-200' 
        },
        primary:{
          selected: "bg-blue-700",
          others: "bg-blue-200" 
        },
        help:{
          selected: "bg-purple-900",
          others: "bg-purple-200"
        },
        inverted:{
          selected: "bg-white",
          others: "bg-gray-200"
        },
      }
    }
  }
}

export default theme;