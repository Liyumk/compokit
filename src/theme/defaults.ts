import { CompoKitTheme } from "../components/CompoKit/CompoKitTheme";

const theme : CompoKitTheme = {
  progressIndicator: {
    root:{
      base: 'flex w-fit justify-center items-center gap-x-2',
    },
    indicate: {
      base: 'w-2 h-2 rounded-xl',
      color: {
        blueBlack: "bg-blue-900",
        lightGray: "bg-gray-200"
      }
    }
  }
}

export default theme;