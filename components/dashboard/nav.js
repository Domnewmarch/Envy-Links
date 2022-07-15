import { icons } from 'react-icons'

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Links', href: '/links' },
  { name: 'Appearance', href: '/appearance ' },
  { name: 'Settings', href: '#' },
  { name: 'Upgrade', href: '#' }
]

export default function Nav() {
  return (
    <header className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="border-b py-2">
          <img className="w-12" src="/img/envy-logo.png" alt="" />
        </div>
        <div className="w-full py-4 flex items-center justify-between border-b lg:border-none">
          <div className="flex items-center">
            <div>
              <span className="font-semibold mr-1 text-sm">My Link:</span>
              <a className="underline envy-blue" href="https://domnewmarch-links.vercel.app/">
                domnewmarch-links.vercel.app
              </a>
            </div>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map(link => (
                <a key={link.name} href={link.href} className=" text-lg font-medium text-black hover:font-bold">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap space-x-6 lg:hidden">
          {navigation.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-500 hover:font-semibold hover:underline">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
