import Link from './link' // block data

const blocks = [
  {
    links: [
      { href: 'https://www.envydigital-webdesign.co.uk', text: 'Vist our website 🚀' },
      { href: 'https://calendly.com/domenvy/30min', text: 'Lets grab a coffee  ☕' }
    ]
  },
  {
    title: 'Insights',
    links: [
      { href: 'https://www.linkedin.com/in/dom-newmarch-a554b697/', text: 'An introduction of me 👨🏼‍💻' },
      { href: 'https://www.linkedin.com/in/dom-newmarch-a554b697/', text: 'Latest projects 👨🏼‍💻' }
    ]
  }
]

export default function LinkContainer() {
  return (
    <>
      {blocks.map(block => (
        <div key={blocks.id} className="mt-8 w-full overflow-hidden">
          <h6 className="my-2 w-full text-center font-semibold text-gray-400">{block.title}</h6>
          {block.links && (
            <ul className="flex flex-col items-center space-y-4">
              {block.links.map(link => (
                <Link key={links.id} card={link} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  )
}
