import ReactPaginate from "react-paginate";
import {returnOffSet} from '../assets/js/util'

function Pagination({pageClick}) {
    const liClassName = 'rounded shadow-sm border border-slate-50 px-2 hover:bg-slate-100'
    const ulClassName = 'bg-white px-4 py-3 flex justify-end border-t border-slate-200 text-slate-400'

    const handlePageClick = data => {
        const page = data.selected
        const offset = returnOffSet(page)

        pageClick(offset)
    }

    return (
        <div className="h-100px flex items-end justify-end overflow-hidden p-2">
            <ReactPaginate
                previousLabel='<<'
                nextLabel='>>'
                breakLabel='...'
                pageCount={15}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={ulClassName}
                pageClassName={liClassName}
                breakClassName={liClassName}
                previousClassName={liClassName}
                nextClassName={liClassName}
                activeClassName={'bg-slate-600'}
            />
        </div>
    )
}

export default Pagination