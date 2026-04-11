export const IconButton = ({ children, hasNotificacion}) => (
    <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
        {children}
        {hasNotificacion && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full border-2 border-[#10172A]"></span>
        )}
    </button>
);