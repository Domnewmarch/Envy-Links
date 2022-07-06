import Avatar from '../components/avatar'
import Bio from '../components/bio'
import ThemeToggle from '../components/darkButton'
import DesktopImage from '../components/desktopImage'
import Footer from '../components/footer'
import LinkBlock from '../components/linkBlock'
export default function Home() {
  return (
    <div className="relative flex">
      <div className="mt-12 mb-8 w-screen 2xl:w-6/12">
        <div className="mx-auto flex max-w-screen-sm flex-col items-center px-4">
          <ThemeToggle />
          <Avatar />
          <Bio />
          <LinkBlock />
          <Footer />
        </div>
      </div>
      <DesktopImage />
    </div>
  )
}
