//componente que se renderizará cuando los productos no carguen
const CardProductSkeleton = () => {
    return (
        <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
            <div className="h-9 border-b border-slate-800 bg-slate-950/70 px-4 py-2">
                <div className="h-4 w-24 animate-pulse rounded bg-slate-700/70" />
            </div>

            <div className="bg-slate-950/40 p-4">
                <div className="h-40 w-full animate-pulse rounded-lg bg-slate-800/80" />
            </div>

            <div className="space-y-3 px-4 pb-4">
                <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-slate-700/80" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-slate-700/60" />
            </div>

            <div className="flex items-center justify-between gap-3">
                <div className="h-6 w-20 animate-pulse rounded bg-cyan-400/30" />
                <div className="h-8 w-20 animate-pulse rounded-md bg-slate-700/90" />
            </div>

        </div>
    </article>
  );
};

export default CardProductSkeleton;
