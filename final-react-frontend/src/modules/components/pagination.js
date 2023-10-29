import { useEffect } from "react"

const Pagination = props => {

    const {
        currentPage,
        pageChange,
        numberOfItems,
        showNumbers
    } = props

    const totalPage = Math.ceil(numberOfItems / showNumbers)
    const pagesList = (totalPage) => {
        let content = []
        for (let i = 0; i < totalPage; i++)
            content.push(<button key={i} className="pagination" id="pagination-num" onClick={(e) => onClickHandler(e, i)}>{i + 1}</button>)
        return content
    }
    useEffect(() => {

    }, [currentPage])

    function onClickHandler(event, page) {
        pageChange(page)
        localStorage.setItem("currentPage", page)
        let els = document.querySelectorAll("#pagination-num")
        els.forEach(el => {
            el.disabled = false
        })
        event.target.disabled = true
    }
    if (numberOfItems <= showNumbers) {
        return <></>
    }
    return (
        <div>
            <button onClick={() => console.log(totalPage - 1, currentPage)} hidden>
                test
            </button>
            <div className="pagin-wrap">
                <button onClick={() => pageChange(currentPage - 1)} disabled={currentPage <= 0} className="pagination">
                    Prev
                </button>
                {pagesList(totalPage)}
                <button onClick={() => pageChange(currentPage + 1)} disabled={currentPage >= totalPage - 1} className="pagination">
                    Next
                </button>
            </div>

        </div>
    )
}

export default Pagination 