export const UserAvatar = ({ src }) => (
    <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center overflow-hidden cursor-pointer">
        <img src={src} alt="User" className="w-full h-full object-cover" />
    </div>
);