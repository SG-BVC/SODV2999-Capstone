import { Link, useNavigate, useParams } from "react-router-dom";
import { patternData } from "../pattern/patternData";
import { useMemo, useState } from "react";

export default function LifeLineTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const page = slug ? patternData[slug] : undefined;

  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [featuredSeed, setFeaturedSeed] = useState(0);

  const isAllowed = page?.category === "Mood & Inspiration";

  if (!page || !isAllowed) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-bold text-slate-900">Not Found</h1>
        <p className="mt-4 text-slate-600">No content available for this page.</p>
        <button
          onClick={() => navigate("/lifeline-app")}
          className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-white"
        >
          Back to LifeLine App
        </button>
      </div>
    );
  }

  const exploreMore = Object.entries(patternData)
    .filter(([key, value]) => key !== slug && value.category === "Mood & Inspiration")
    .slice(0, 6);

  const items = page.resources?.items ?? [];

  const allTags = useMemo(() => {
    return Array.from(new Set(items.flatMap((x) => x.tags ?? []))).sort((a, b) =>
      a.localeCompare(b)
    );
  }, [items]);

  const filteredResources = useMemo(() => {
    return items.filter((r) => {
      const q = search.trim().toLowerCase();
      const matchSearch =
        q === "" ||
        r.title.toLowerCase().includes(q) ||
        (r.description ?? "").toLowerCase().includes(q) ||
        (r.meta ?? "").toLowerCase().includes(q);

      const matchTags =
        activeTags.length === 0 || activeTags.every((t) => (r.tags ?? []).includes(t));

      return matchSearch && matchTags;
    });
  }, [items, search, activeTags]);

  const featuredPool = filteredResources.filter((x) => !!x.href);
  const featured = featuredPool.length ? featuredPool[featuredSeed % featuredPool.length] : null;

  const collage = items.slice(0, 8);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 text-sm text-slate-500">
        <Link to="/lifeline-app" className="text-blue-600 hover:underline">
          LifeLine App
        </Link>{" "}
        / {page.title}
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              <span>{page.icon}</span>
              <span>LifeLine Canada • Mood & Inspiration</span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {page.title}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              {page.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => navigate(-1)}
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Back
              </button>

              {page.heroImage && (
                <a
                  href={page.heroImage}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Open banner image
                </a>
              )}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {(page.sections ?? []).slice(0, 2).map((section, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h2 className="text-sm font-semibold text-slate-900">{section.heading}</h2>
                  <div className="mt-3 space-y-2">
                    {section.items.slice(0, 3).map((it, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                        <div className="text-sm leading-6 text-slate-700">{it}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] border-t border-slate-200 lg:border-l lg:border-t-0">
            {page.heroImage && (
              <img
                src={page.heroImage}
                alt={page.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/55 via-slate-950/25 to-indigo-950/35" />

            <div className="relative p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-semibold text-white/90">Featured posters</div>
                <div className="text-xs text-white/70">{items.length} picks</div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {collage.map((m) => (
                  <div key={m.title} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.title}
                        className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-white/10" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 line-clamp-2 text-[11px] font-semibold leading-4 text-white">
                      {m.title}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-white/10 p-4 text-sm text-white/90 backdrop-blur">
                Tip: Click any “Open” card below to see IMDb info.
              </div>
            </div>
          </div>
        </div>
      </div>

      {page.sections && page.sections.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">How to use this page</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {page.sections.map((section, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-lg">
                    {page.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900">{section.heading}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Small steps that support you right now.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-slate-800"
                    >
                      <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500" />
                      <div className="text-sm leading-6">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {page.resources && (
        <div className="mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">{page.resources.heading}</h2>
              <p className="mt-1 text-sm text-slate-500">
                {filteredResources.length} result{filteredResources.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                onClick={() => setFeaturedSeed((v) => v + 1)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                New featured
              </button>

              <button
                onClick={() => {
                  if (featured?.href) window.open(featured.href, "_blank");
                }}
                disabled={!featured?.href}
                className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              >
                Open featured
              </button>

              <button
                onClick={() => {
                  if (filteredResources.length === 0) return;
                  const pick = filteredResources[Math.floor(Math.random() * filteredResources.length)];
                  if (pick?.href) window.open(pick.href, "_blank");
                }}
                disabled={filteredResources.length === 0}
                className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-40"
              >
                Random pick
              </button>
            </div>
          </div>

          {featured && (
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid md:grid-cols-[260px_1fr]">
                <div className="relative h-56 md:h-full">
                  {featured.image ? (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-slate-200 to-purple-500/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {featured.icon || "⭐"} Featured pick
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold text-slate-900">{featured.title}</h3>
                  {featured.meta && <p className="mt-1 text-sm text-slate-500">{featured.meta}</p>}
                  {featured.description && (
                    <p className="mt-4 text-sm leading-7 text-slate-700">{featured.description}</p>
                  )}

                  {featured.tags && featured.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featured.tags.map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setActiveTags((prev) => (prev.includes(t) ? prev : [...prev, t]));
                          }}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <input
            type="text"
            placeholder={
              page.title.toLowerCase().includes("movie")
                ? "Search movies..."
                : page.title.toLowerCase().includes("video")
                ? "Search videos..."
                : page.title.toLowerCase().includes("book")
                ? "Search books..."
                : "Search..."
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-6 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {allTags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {allTags.map((t) => {
                const on = activeTags.includes(t);
                return (
                  <button
                    key={t}
                    onClick={() =>
                      setActiveTags((prev) =>
                        prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
                      )
                    }
                    className={
                      on
                        ? "rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white"
                        : "rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                    }
                  >
                    {t}
                  </button>
                );
              })}

              {activeTags.length > 0 && (
                <button
                  onClick={() => setActiveTags([])}
                  className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
                >
                  Clear
                </button>
              )}
            </div>
          )}

          <div className="mt-7">
            {filteredResources.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-700">
                No results found.
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                {filteredResources.map((r, i) => (
                  <a
                    key={i}
                    href={r.href || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="grid md:grid-cols-[170px_1fr]">
                      <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                        {r.image ? (
                          <img
                            src={r.image}
                            alt={r.title}
                            className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-white to-indigo-200" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 rounded-2xl bg-white/90 px-3 py-1.5 text-sm font-semibold text-slate-900">
                          {r.icon || "🎬"}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="truncate text-lg font-semibold text-slate-900">
                              {r.title}
                            </h3>
                            {r.meta && <p className="mt-1 text-xs text-slate-500">{r.meta}</p>}
                          </div>
                          {r.href && (
                            <span className="shrink-0 text-sm font-semibold text-blue-600">
                              Open
                            </span>
                          )}
                        </div>

                        {r.description && (
                          <p className="mt-3 text-sm leading-7 text-slate-600">{r.description}</p>
                        )}

                        {r.tags && r.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {r.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Explore More</h3>
          <Link to="/lifeline-app" className="text-sm font-semibold text-blue-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {exploreMore.map(([key, value]) => (
            <Link
              key={key}
              to={`/lifeline-app/${key}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-2xl">{value.icon}</div>
              <h4 className="mt-3 font-semibold text-slate-900 group-hover:text-indigo-600">
                {value.title}
              </h4>
              <p className="mt-1 text-sm leading-6 text-slate-500">{value.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}