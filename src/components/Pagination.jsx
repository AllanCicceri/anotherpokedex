import ReactPaginate from "react-paginate";

function Pagination(){
    const liClassName = 'rounded shadow-sm border border-slate-50 px-2 hover:bg-slate-100'
    const handlePageClick = data => {
        console.log(data.selected)
    }

    return (
        <ReactPaginate 
                previousLabel='<<'
                nextLabel='>>'
                breakLabel='...'
                pageCount={20}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'bg-white px-4 py-3 flex justify-end border-t border-slate-200 text-slate-400'}
                pageClassName={liClassName}
                breakClassName={liClassName}
                previousClassName={liClassName}
                nextClassName={liClassName}
            />
    )
}

export default Pagination