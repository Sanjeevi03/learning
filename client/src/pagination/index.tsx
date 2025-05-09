import axios from 'axios';
import { useEffect, useState } from 'react'
import "./index.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPagSize] = useState(10)


  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products?limit=500");
      setProducts(data.products);
      const copy = data.products.slice(0,10+1)
      setFiltered(copy)
    } catch (e: any) {
      console.log("Failed to get all products:", e.message);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const totalProductLength = products.length
  const paginationLength = Array.from({length: Math.ceil(totalProductLength/ pageSize)  }, (_, index:any) => index)

  const handlePageChange = (where:number) => {
    setPage(where)
  }

  const start = page * pageSize;
  const end = start + pageSize;
 
  

  console.log('page', page, start, end)

  return (
    <>
      <div className='pagination-container'>
        <button disabled={page <= 1} className={`prev-btn ${page <= 1 && "btn-disabled"}`} onClick={() => handlePageChange(page-1)}>{"<"}</button>
        {
        paginationLength.map((i:number) => (
          <div key={i+'sa'}>
            <button className={`pagination-btn ${page === i && 'active'}`} onClick={() => handlePageChange(i)}>{i+1}</button>
          </div>
        ))
      }
      <button disabled={page >= paginationLength.length-1} className={`next-btn ${page >= paginationLength.length-1 && "btn-disabled"}`} onClick={() => handlePageChange(page+1)}>{">"}</button>
      </div>
      <div className='card-container'>
        {
          products.length > 0 ? 
          products.slice(start, end).map((item:any, ind:Number) => (
              <div key={`${ind}ke`} className='card'>
                <img src={item.thumbnail} alt={item.title}/>
                <span>{item.title}</span>
              </div>
            ))
          : <>No product found.</>
        }
      </div>
    </>
  )
}

export default Pagination