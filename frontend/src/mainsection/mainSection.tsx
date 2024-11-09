import {Groups} from './products/products'
import {Products} from './products/products'

const MainSection = () => {
    
  return (
    <div className='flex'>
        <div className='flex-1'>
            <Products />
        </div>
        <div className='flex  min-h-[100vh] me-5 p-3'>
            <Groups />
        </div>
    </div>
  )
}

export default MainSection