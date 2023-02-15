import { CompoKitTheme } from "../components/CompoKit/CompoKitTheme";

const theme : CompoKitTheme = {
  avatar:{
    base: "flex justify-center items-center bg-gray-400",
    wrapper: "w-fit",
    default:"w-8 h-8",
    appearance:{
      circle: "rounded-full",
      square: "rounded-md"
    },
    disabled: "opacity-50",
    presence: {
      base: "rounded-full absolute",
      online: {
        base: "bg-green-500 border-2 border-white",
        xsmall: "",
        small: "w-3 h-3 bottom-0 -right-1",
        medium: "w-3.5 h-3. bottom-0 -right-1",
        large: "w-4 h-4 bottom-0 -right-1",
        xlarge: "w-5 h-5 bottom-2 right-0",
        xxlarge: ""
      },
      busy: {
        base: "flex justify-center items-center bg-red-500",
        innerBase: "w-1 h-2 bg-white -rotate-45",
        xsmall: "",
        small: "w-3 h-3  bottom-0 -right-1",
        medium: "w-3.5 h-3.5 bottom-0 -right-1",
        large: "w-4 h-4 bottom-0 -right-1",
        xlarge: "w-5 h-5 bottom-2 right-0",
        xxlarge: ""
      },
      focus: {
        base: "flex justify-center items-center bg-white border-4 border-gray-500",
        innerBase: " w-1.5 h-1.5 bg-gray-500 rounded-full",
        xsmall: "",
        small: "w-3 h-3bottom-0 -right-1",
        medium: "w-3.5 h-3.5 bottom-0 -right-1",
        large: "w-4 h-4 bottom-0 -right-1",
        xlarge: "w-5 h-5 bottom-2 right-0",
        xxlarge: ""
      },
      offline: {
        base: "flex justify-center items-center bg-gray-500 border-2 border-white",
        innerBase: " w-1.5 h-1.5 bg-gray-200 rounded-full",
        xsmall: "",
        small: "w-3 h-3 bottom-0 -right-1",
        medium: "w-3.5 h-3.5 bottom-0 -right-1",
        large: "w-4 h-4 bottom-0 -right-1",
        xlarge: "w-5 h-5 bottom-2 right-0",
        xxlarge: ""
      }
    },
    sizes:{
      xsmall: "w-4 h-4",
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-10 h-10",
      xlarge: "w-24 h-24",
      xxlarge: "w-32 h-32",
    },
    status:{
      base: "w-4 h-4 absolute top-0 -right-2 flex justify-center items-center rounded-full border border-white",
      approved: "bg-green-500",
      declined: "bg-red-500",
      locked: "bg-gray-500",  
    }
  },
   button: {
    base: "relative h-9 px-2.5 rounded font-medium flex items-center justify-between focus:outline-none",
      appearance: {
      default: "bg-[#091E420F]/[0.04] text-[#42526E] hover:bg-[#091E420F]/[0.08] focus:ring-2 focus:ring-[#091E420F]/[0.3]",
      danger: "bg-red-500 text-white hover:bg-red-700 border border-transparent focus:ring-2 focus:ring-red-300",
      link: "bg-transparent text-blue-600 hover:underline hover:text-blue-500",
      primary: 'bg-blue-600 text-white hover:bg-blue-500 border-transparent focus:ring-2 focus:ring-blue-300',
      subtle: 'bg-transparent text-[#42526E] hover:bg-[#091E420F]/[0.05] border-transparent focus:ring-4 focus:ring-[#42526E]/[0.5]',
      subtleLink: 'bg-transparent text-[#42526E] hover:underline',
      warning: 'bg-yellow-500 text-gray-900 hover:bg-yellow-600 border-transparent focus:ring-2 focus:ring-yellow-300',
    },
    disabled: "cursor-not-allowed opacity-50",
     selected: {
      default: "bg-[#091E420F]/[0.2] text-[#42526E]",
      danger: "bg-red-900 text-white ",
      link: "bg-transparent text-blue-600 underline",
      primary: 'bg-blue-800 text-white',
      subtle: 'bg-blue-100 text-blue-300',
      subtleLink: 'bg-transparent text-[#42526E]/[0.5] underline',
      warning: 'bg-yellow-700/[0.7]'
    },
    fitContainer: 'w-full',
    icon: {
      before: "mr-1",
      after: "ml-1"
    },
    overlay: "flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black/70 rounded",
    spacing: {compact: "h-7", default: "h-9", none: "h-auto px-0"},
    loading: "w-5 h-5 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent"
  },
  progressBar:{
    root: {
    outer: "w-full h-1.5 rounded-lg relative overflow-hidden",
    filler: "h-1.5 rounded-lg",
    appearance: {
      default: {
        inner: "bg-blue-900",
        outer: "bg-gray-100",
      },
      inverse: {
        inner: "bg-white",
        outer: "bg-blue-900"
      },
      success: {
        inner: "bg-green-500",
        outer: "bg-green-500"
      } 
    }
    }
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