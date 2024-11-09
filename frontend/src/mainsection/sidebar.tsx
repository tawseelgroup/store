import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Sidebar = () => {

  return (
    <section className=' bg-blue-300 flex'>
        <div className='px-3 py-2 border-e'>
            <main>
                <div>
                    <div className='roboto-bold text-2xl text-blue-500 ' >Tawseel Group</div>
                </div>
                <div className='flex justify-center my-3 items-center gap-x-2'>

                    <h2 className='roboto-medium text-blue-400'>Inventory Mnagement</h2>
                </div>
                <hr />

                <ul className='ml-2'>
                    <Link to="/stock" className='text-left text-lg text-gray-600 py-2 text-md font-semibold flex gap-x-1'>
                        <p>Stock</p>
                    </Link>
                    {/* <Link to="/production" className='text-left text-lg text-gray-600 py-2 text-md font-semibold flex gap-x-1'>
                        <img src="public\images\groups.png" alt="products" width={20} />
                        <p>Groups</p>
                    </Link> */}
                    <Link to="/products" className='text-left text-lg text-gray-600 py-2 text-md font-semibold flex gap-x-1'>
                        <img src="public\images\product.png" alt="products" width={20} />
                        <p>Products</p>
                    </Link>
                    <Link to="/purchase" className='text-left text-lg text-gray-600 py-2 text-md font-semibold flex gap-x-1'>
                        <img src="public\images\purchase.png" alt="products" width={20} />
                        <p>Purchase</p>
                    </Link>
                    <Link to="/production" className='text-left text-lg text-gray-600 py-2 text-md font-semibold flex gap-x-1'>
                        <img src="public\images\order.png" alt="stock" width={20}/>
                        <p>Production</p>
                    </Link>
                    <Link to="#" className='text-left text-lg text-gray-600 py-2 text-md font-semibold flex gap-x-1'>
                        <img src="public\images\reports.png" alt="stock" width={20}/>
                        <p>Reports</p>
                    </Link>

                </ul>
            </main>
        </div>
        <div className='flex-1 bg-white'>
            <Outlet />
        </div>
    </section>
  )
}

export default Sidebar