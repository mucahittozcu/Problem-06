// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <>
    <link href="path/to/tailwind.css" rel="stylesheet"></link>
    <span className=' text-white  space-y-4 font-medium '>
      <div className="mt-8 flex justify-center space-x-4 rounded-2xl ">

      <button className=' bg-green-500 w-48 h-24 rounded-xl'>Create</button>

      <button className=' bg-orange-500 w-48 h-24 rounded-xl'>Update</button>

      <button className=' bg-red-500 w-48 h-24 rounded-xl'>Delete</button>
      </div>

       <div className="flex justify-center items-center text-center">
      <h1 className="flex items-center justify-center bg-blue-200  w-2/4 h-24 rounded-xl">Testing Tailwind</h1>
       </div>
    </span>
    </>
  )
}
