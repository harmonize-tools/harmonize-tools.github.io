
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full grow p-6 md:p-12">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-none md:grid-cols-5">
              <div className="project md:col-span-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
