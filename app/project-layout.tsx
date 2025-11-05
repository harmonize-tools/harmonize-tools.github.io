
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-screen grow p-6 md:p-12 md:p-6">
          
          <div className="grid grid-cols-none md:grid-cols-5">
            <div className="project md:col-span-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
