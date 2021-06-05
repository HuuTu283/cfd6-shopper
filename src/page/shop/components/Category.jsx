
import { NavLink } from 'react-router-dom';

export default function Category({ title, slug }) {
    return (
        <li className="nav-item">
            <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href={slug}>
                {title}
            </a>
        </li>
    )
}
