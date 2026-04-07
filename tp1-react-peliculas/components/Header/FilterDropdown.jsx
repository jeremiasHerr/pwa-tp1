export const FilterDropdown = ({ label, children}) => (
    <button className="px-3.5 py-1.5 text-[11px] font-bold text-slate-300 bg-slate-700/60 hover:bvg-slate-700 rounded-md transition-colors flex items-center gap-1.5">
        {label}
        {children}
    </button>
);