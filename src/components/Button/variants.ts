import { ButtonVariant } from './enums';

export const BUTTON_VARIANTS = {
  [ButtonVariant.PRIMARY]:
    'text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  [ButtonVariant.SECONDARY]: '',
  [ButtonVariant.ERROR]:
    'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  [ButtonVariant.GHOST]:
    'bg-transparent hover:bg-gray-100 p-2 rounded-full transition-shadow',
  [ButtonVariant.PILL]:
    'flex items-center justify-center bg-blue-400/30 rounded-full p-1 hover:bg-blue-400/50 transition-colors',
  [ButtonVariant.PILL_CLEAR]:
    'flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 border border-gray-200 px-2 py-1.5 rounded-full ml-auto transition-colors',
  [ButtonVariant.GRADIENT]:
    'group relative flex items-center justify-center gap-2  px-5 py-3 text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 active:scale-100 w-full sm:w-auto sm:min-w-[200px] overflow-hidden',
};
