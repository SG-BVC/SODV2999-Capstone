type Props = { children: React.ReactNode };

export default function PatternCard({ children }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-slate-700">{children}</div>
    </div>
  );
}
