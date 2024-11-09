import {useState, useEffect, EventHandler, MouseEventHandler} from 'react'
import { PDFViewer } from '@react-pdf/renderer';
// import { MyDocument } from 'react-pdf'

interface group  {
    gname: string,
}

interface product {
    itemName: string,
    itemPrice: number,
    itemGroup: number,
    itemUnit  : string,
}


export const Groups = () => {
    const [group, setGroup] = useState<group[]>([])

    const getGroups = async() =>{
        const res = await fetch('http://127.0.0.1:8000/groups/')
        const data = await res.json()
        setGroup(data)
    }
    useEffect(() => {
        getGroups()
    }, [])
  return (
    <div className='self-center  rounded-md border w-48 overflow-hidden'>
        {group.map((g, index)=><div key={index} className=' px-2 py-2 border-t first:border-t-0 text-left hover:cursor-pointer bg-gray-50'>{g.gname}</div>)}
    </div>
  )
}


export const Products = () => {
    const [products, setProducts] = useState<product[]>([])

    const [prodName, setProductName] = useState<string>("")
    const [price, setPrice] = useState<number>(1)
    const [pack, setPack] = useState<number>(1)
    const [unit, setUnit] = useState<string>("")

    useEffect(() => {
        const getProducts = async() =>{
            const res = await fetch('http://127.0.0.1:8000/items/')
            const products = await res.json()
            console.log(products)
            setProducts(products)
        }

        getProducts()
    }, [])

    const handleSubmit = async (e:MouseEventHandler<HTMLButtonElement | null>, newProduct: product) => {
        
        newProduct = {
            "itemName": prodName,
            "itemPrice": price,
            "itemGroup": pack,
            "itemUnit":unit
        }
        try {            
            const response = await fetch('http://127.0.0.1:8000/items/', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newProduct),
            });
    
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('POST request successful:', jsonResponse);
                } else {
                throw new Error('POST request failed');
                }
            console.log(newProduct)
            setProducts([...products, newProduct])
        } catch (error) {
            console.error('POST request failed:', error);
        }
        
        // e.currentTarget.reset()
        // e.preventDefault()
    }

    return (
      <div className="relative min-h-screen">
        <h1>Products</h1>
        <section className="flex flex-wrap px-5 py-3 gap-3">
          {products.map((p, index) => (
            <div
              className="px-5 py-1 rounded-0 border border-blue-200 inline-block bg-blue-50 text-left"
              key={index}
            >
              <div>
                <span className="font-bold text-blue-700">{p.itemName}</span>
              </div>
              {/* <div>Product Price: <span className='font-bold '>{p.itemPrice}</span></div>
                    <div>Item Unit:     <span className='font-bold '>{p.itemUnit}</span></div> */}
            </div>
          ))}
        </section>

        {/* <PDFViewer>
          <MyDocument />
        </PDFViewer> */}

        <section className="absolute bottom-10 left-4">
          <h2>Add New Product</h2>
          <form>
            <div className="my-2">
              <input
                type="text"
                placeholder="Product Name"
                value={prodName}
                className="border focus:outline-sky-200 py-1 px-2 rounded"
                onChange={(e) => setProductName(e.currentTarget.value)}
              />
            </div>
            <div className="my-2">
              <input
                type="number"
                value={price}
                placeholder="Product Price"
                className="border focus:outline-sky-200 py-1 px-2 rounded"
                onChange={(e) => setPrice(parseInt(e.currentTarget.value))}
              />
            </div>
            <div className="my-2">
              {/* <select>
                            <option value='Select Group'>Select Group</option>
                            {group.map(g => <option value={g.gname}>{g.gname}</option>)}
                        </select> */}
              <select
                className="border focus:outline-sky-200 py-1 px-2 rounded justify-self-start"
                onChange={(e) => setPack(parseInt(e.currentTarget.value))}
              >
                <option value="1">Materials</option>
                <option value="2">packaging</option>
                <option value="3">Finished Goods</option>
                <option value="4">Returns</option>
              </select>
            </div>
            <div className="my-2">
              <input
                type="text"
                placeholder="Product Unit"
                value={unit}
                className="border focus:outline-sky-200 py-1 px-2 rounded"
                onChange={(e) => setUnit(e.currentTarget.value)}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-700 rounded text-white px-4 py-1 my-2"
            >
              Add Product
            </button>
          </form>
        </section>
      </div>
    );
}
