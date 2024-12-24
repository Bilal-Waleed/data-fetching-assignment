interface ButtonProps {
    button: string;
    className?: string;
  }
  
  export default function Button({ button, className }: ButtonProps) {
    return (
      <button
        className={`relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 transform active:scale-95 ${className}`}
      >
        {button}
        <span className="absolute inset-0 w-full h-full bg-indigo-400 opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-50"></span>
      </button>
    );
  }
  