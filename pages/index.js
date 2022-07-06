import Avatar from '../components/avatar'
import Bio from '../components/bio'
import LinkBlock from '../components/linkBlock'
export default function Home() {
  return (
    <div className="relative flex">
      <div className="mt-12 mb-8 w-screen 2xl:w-6/12">
        <div className="mx-auto flex max-w-screen-sm flex-col items-center px-4">
          <Avatar />
          <Bio />
          <LinkBlock />
        </div>
      </div>
    </div>
  )
}
