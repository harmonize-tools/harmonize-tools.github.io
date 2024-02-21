import SideNav from '@/app/ui/sidenav';
import Link from 'next/link';
import AuthorsList from '@/app/ui/components/authors-list';

const authors = [
    {
        name: "Raphael Saldanha",
        position: "Author, maintainer"
    },
    {
        name: "Reza Akbarinia",
        position: "Author"
    },
    { 
        name: "Patrick Valduriez",
        position: "Author"},
    {
        name: "Marcel Pedroso",
        position: "Author"
    },
    {
        name: "Victor Ribeiro",
        position: "Author"},
    {
        name: "Carlos Cardoso",
        position: "Author"
    },
    {
        name: "Eduardo Pena",
        position: "Author"
    },
    {
        name: "Fabio Porto",
        position: "Author"
    }
]

export default function ProjectLayout({children,}: {children: React.ReactNode;}) {
    return (
        <div className="flex h-full min-h-screen flex-col p-6">
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                </div>
                <div className="flex-grow md:p-6 md:p-12">{children}</div>
                <div className="w-full flex-none md:w-64">
                    <div className="flex h-full flex-col mt-14">
                        <h2 className="text-l font-medium mb-1">Links</h2>
                        <div className="mb-2">
                            <Link href="https://cloud.r-project.org/web/packages/brclimr/index.html">View on CRAN</Link>
                            <br></br>
                            <Link href="https://github.com/rfsaldanha/brclimr/">Report a bug</Link>
                        </div>
                        <h2 className="text-l font-medium mb-1">License</h2>
                        <div className="mb-2">
                            <Link href="https://rfsaldanha.github.io/brclimr/LICENSE.html">License</Link>
                            <Link href="https://opensource.org/license/mit/">MIT</Link> + file <Link href="https://rfsaldanha.github.io/brclimr/LICENSE-text.html">LICENSE</Link>
                        </div>
                        <h2 className="text-l font-medium mb-1">Citation</h2>
                        <div className="mb-2">
                            <Link href="https://rfsaldanha.github.io/brclimr/authors.html#citation">Citing brclimr</Link>
                        </div>
                        <h2 className="text-l font-medium mb-1">Developers</h2>
                        <AuthorsList authors={authors}></AuthorsList>
                        <h2 className="text-l font-medium mb-1">Dev status</h2>
                        <img className="w-24 mb-1" src="https://www.r-pkg.org/badges/version/brclimr" alt="CRAN status"></img>
                        <img className="w-32 mb-1" src="https://cranlogs.r-pkg.org/badges/brclimr"></img>
                        <img className="w-32 mb-1" src="https://github.com/rfsaldanha/brclimr/actions/workflows/R-CMD-check.yaml/badge.svg" alt="R-CMD-check"></img>
                    </div>
                </div>
            </div>
        </div>
    )};