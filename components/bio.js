import BioContact from './bioContact'
export default function Bio() {
  return (
    <div className="flex flex-col items-center">
      {/* profile title */}
      <h1 className="w-fit text-3xl">Dom Newmarch</h1>

      {/* Bio section / use react quill */}
      <p className="">Owner/Developer // Envy Digital</p>
      <p className="">Frontend Developer // Parallax</p>

      {/* quick contact links */}
      <BioContact />

      {/* Tagline  */}
      <p>
        Transform <em className="font-semibold">your</em> digital presence
      </p>
    </div>
  )
}
