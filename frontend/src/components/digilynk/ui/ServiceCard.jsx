// components/ServiceCard.tsx
export const ServiceCard = ({
    title,
    desc,
    img,
}) => (
    <div className="w-64 shrink-0 rounded-xl border bg-white/90 p-4 shadow dark:bg-black/40">
        <div className="flex items-center gap-3">
            <img src={img} alt="" className="h-10 w-10 rounded-full" />
            <h3 className="text-sm font-bold">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
);
