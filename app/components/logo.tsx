export const Logo = ({ logoUrl } : {
  logoUrl: string
}) => {
  return <div className="fixed ml-16 top-12 w-max-full z-50 bg-white border-r-4 border-l-4 rounded-b-xl border-customOrange shadow-md">
    <div className="flex justify-center">
      <img
      src={logoUrl}
      alt={"WSA Logo"}
      className="w-28 h-28 p-1" 
      />
    </div>
    <div className="p-1 bg-customOrange rounded-b-lg text-white">
      WSA Council EN
    </div>
  </div>
}