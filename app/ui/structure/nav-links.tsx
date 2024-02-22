const links = [
  {
    name: 'brclimr',
    href: '/brclimr',
    icon: '/icons/insect.svg',
  },
  {
    name: 'Dataset descriptions',
    href: '/dataset-descriptions',
    icon: '/icons/insect.svg',
  },
  {
    name: 'Data sources list',
    href: '/data-sources-list',
    icon: '/icons/insect.svg',
  },
  {
    name: 'Health data questionnaire',
    href: '/health-data-questionnaire',
    icon: '/icons/insect.svg',
  },
  { name: 'clim4health', href: '/clim4health', icon: '/icons/insect.svg' },
  {
    name: 'Health data tool',
    href: '/health-data-tool',
    icon: '/icons/insect.svg',
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-very-light-purple hover:text-dark-purple md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <img className="w-10" src={link.icon}></img>
            
            <p className="hidden text-base md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
