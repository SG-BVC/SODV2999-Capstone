import { useParams, useNavigate, Link } from 'react-router-dom';
import { patternData } from './patternData';

export default function PatternTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const page = slug ? patternData[slug] : undefined;

  if (!page) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p className="mt-4 text-slate-600">
          No content available for this page.
        </p>
        <button
          onClick={() => navigate('/pattern')}
          className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-white"
        >
          Back to Pattern Interrupts
        </button>
      </div>
    );
  }

  const exploreMore = Object.entries(patternData)
    .filter(([key]) => key !== slug)
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-slate-500">
        <Link to="/pattern" className="text-blue-600 hover:underline">
          Pattern Interrupts
        </Link>{' '}
        / {page.title}
      </div>

      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-800 p-10 text-white shadow-lg">
        <p className="text-xs uppercase tracking-widest text-slate-300">
          Pattern Interrupts
        </p>

        <h1 className="mt-2 text-4xl font-bold">{page.title}</h1>

        <p className="mt-4 max-w-2xl text-slate-200">
          {page.description}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:opacity-90"
        >
          Back
        </button>
      </div>

      {/* Content Sections */}
      {page.sections && (
        <div className="mt-10 space-y-10">
          {page.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-slate-900">
                {section.heading}
              </h2>

              <div className="mt-4 space-y-3">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-slate-100 p-4 text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Explore More */}
      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Explore More
          </h3>
          <Link
            to="/pattern"
            className="text-sm text-blue-600 hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {exploreMore.map(([key, value]) => (
            <Link
              key={key}
              to={`/pattern/${key}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="text-2xl">{value.icon}</div>
              <h4 className="mt-3 font-semibold text-slate-900 group-hover:text-indigo-600">
                {value.title}
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                {value.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
