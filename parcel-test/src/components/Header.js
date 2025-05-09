import React from 'react'

const Header = () => {
  return (
    <div className="w-full py-4 bg-[#E6E7E9]">
      <div className="flex justify-between mx-10">
        <img className="w-[80px] h-[80px] " src={"https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg"} alt="logo"/>
        <div className="flex items-center">
          <span className="font-bold">Sanjeevi</span>
        </div>
      </div>
    </div>
  )
}

export default Header
