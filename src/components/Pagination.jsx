import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { convertObjectToQuery, convertQueryToObject } from 'utils';


export default function Pagination({ currentPage, totalPage }) {
    let { url } = useRouteMatch()

    if (totalPage === 1) return [];

    let start = currentPage - 6;
    if (start < 1) {
        start = 1;
    }
    let end = start + 6;
    if (end > totalPage) {
        end = totalPage;
    }

    function renderPage() {
        let list = [];
        for (let i = start; i <= end; i++) {
            let objUrl = convertQueryToObject()
            objUrl.page = i
            let queryString = convertObjectToQuery(objUrl)

            list.push(
                <li className={`page-item ${currentPage === i ? "active" : ''} `}>
                    <Link to={`${url}?${queryString}`} className="page-link">
                        {i}
                    </Link>
                </li>
            );
        }
        return list;
    }

    return (
        /* Pagination */
        <nav nav className="d-flex justify-content-center justify-content-md-end" >
            <ul className="pagination pagination-sm text-gray-400">
                {
                    currentPage > 1 && <li className="page-item">
                        <Link className="page-link page-link-arrow" to={`${url}?${convertObjectToQuery({ ...convertQueryToObject(), page: currentPage - 1 })}`}>
                            <i className="fa fa-caret-left" />
                        </Link>
                    </li>
                }
                {renderPage()}
                {
                    currentPage < totalPage && <li className="page-item">
                        <Link className="page-link page-link-arrow" to={`${url}?${convertObjectToQuery({ ...convertQueryToObject(), page: currentPage + 1 })}`}>
                            <i className="fa fa-caret-right" />
                        </Link>
                    </li>
                }
            </ul>
        </nav >
    )
}
