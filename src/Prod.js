import React, { useState } from 'react'
//products [{},{}]
function Prod({ products }) {
    const [page, setPage] = useState(1)

    const selectPageHandler = (n) => {
        if (
            n >= 1 &&
            n <= products.length / 10 &&
            n !== page
        )
            setPage(n)
    }
    return (<>
        <p><span className='oo'>M</span>y Products</p>
        <div>


            {
                products.length > 0 && <div className='products'>

                    {
                        products.slice(page * 10 - 10, page * 10).map((prod) => {
                            return <span className='products__single' key={prod.id}>
                                <img src={prod.thumbnail} alt="img" />
                                <span>{prod.title}</span>
                            </span>
                        })
                    }
                </div>
            }

            {
                products.length > 0 && <div className='pagination'>
                    <span onClick={() => selectPageHandler(page - 1)}
                        className={page > 1 ? "" : "pagination__disable"}>Prev</span>
                    {
                        [...Array(products.length / 10)].map((_, i) => {

                            return <span
                                className={page === i + 1 ? "pagination__selected" : ""}
                                onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                        })
                    }

                    <span onClick={() => selectPageHandler(page + 1)}
                        className={page < products.length / 10 ? "" : "pagination__disable"}>Next</span>
 </div>
            }
        </div>

    </>)
}

export default Prod