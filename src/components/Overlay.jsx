import React from 'react'

function Overlay() {
    let addplayerfirst = ""
    const playerlist = JSON.parse(localStorage.getItem("players"))

    if (playerlist.length > 0) {
          addplayerfirst = ""
    } else {
      addplayerfirst = <div className="absolute top-0 left-0 w-full h-full flex justify-center bg-black/80 py-[20vh]">
      <div className="py-4 px-8 text-lg text-white rounded-lg font-medium text-center"
      >
      <h3>Please add players name first</h3>
            <Link
                  className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-500 rounded-lg hover:opacity-75 mt-5"
                  to="/player"
              >

                  Add Players
              </Link>
      </div>
  </div>
    }
  return (
    <div>{addplayerfirst}</div>
  )
}

export default Overlay