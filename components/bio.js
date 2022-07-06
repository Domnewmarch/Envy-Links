import BioContact from './bioContact'
export default function Bio() {
  return (
    <div className="flex flex-col items-center">
      {/* profile title */}
      <h1 className="w-fit text-3xl">Dom Newmarch</h1>

      {/* Bio section / use react quill */}
      <p className="">
        Owner ~ <em className="font-semibold envy-blue">Envy Digital</em>
      </p>
      <p className="">Frontend Developer ~ Parallax</p>

      {/* quick contact links */}
      <BioContact />

      {/* Tagline  */}
      <p>
        <em className="font-semibold envy-blue">Design // </em> <em className="font-semibold envy-blue">Develop // </em>
        <em className="font-semibold envy-blue">Results </em>
      </p>
    </div>
  )
}
