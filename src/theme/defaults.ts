import { CompoKitTheme } from "../components/CompoKit/CompoKitTheme";

const theme : CompoKitTheme = {
   button: {
    base: "h-9 px-2.5 rounded font-medium",
      appearance: {
      default: "bg-[#091E420F]/[0.04] text-[#42526E] hover:bg-[#091E420F]/[0.08] border border-transparent focus:ring-4 focus:ring-[#091E420F]/[0.5]",
      danger: "bg-red-500 text-white hover:bg-red-700 border border-transparent focus:ring-4 focus:ring-red-300",
      link: "bg-transparent text-blue-600 hover:underline hover:text-blue-500 border-transparent focus:ring-4 focus:ring-blue-300",
      primary: 'bg-blue-600 text-white hover:bg-blue-500 border-transparent focus:ring-4 focus:ring-blue-300',
      subtle: 'bg-transparent text-[#42526E] hover:bg-[#091E420F]/[0.05] border-transparent focus:ring-4 focus:ring-[#42526E]/[0.5]',
      subtleLink: 'bg-transparent text-[#42526E] hover:underline border-transparent focus:ring-4 focus:ring-[#42526E]/[0.5]',
      warning: 'bg-yellow-500 text-gray-900 hover:bg-yellow-600 border-transparent focus:ring-2 focus:ring-yellow-300',
    },
     selected: {
      default: "bg-[#091E420F]/[0.2] text-[#42526E]",
      danger: "bg-red-900 text-white ",
      link: "bg-blue-800 text-blue-600 underline",
      primary: 'bg-blue-800 text-white',
      subtle: 'bg-blue-100 text-blue-300',
      subtleLink: 'bg-transparent text-[#42526E]/[0.5] underline',
      warning: 'bg-yellow-700/[0.7]'
    },
    disabled: "cursor-not-allowed opacity-50",
    fitContainer: 'w-full',
    icon: "w-16 h-16",
    spacing: {compact: "h-7", default: "h-9", none: "h-auto px-0"}
  },
  progressIndicator: {
    root:{
      base: 'flex w-fit justify-center items-center',
      spacing: {
      comfortable: 'gap-x-2',
      cozy: 'gap-x-1.5',
      compact: 'gap-x-1'
      }
    },
    indicate: {
      base: 'rounded-xl',
      pointer: 'cursor-pointer',
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
      },
      size: {
        small: 'w-1 h-1',
        default: 'w-2 h-2',
        large: 'w-3 h-3' 
      },
     
    }
  },
}

export default theme;