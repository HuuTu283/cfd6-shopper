import React from 'react'
import Category from './Category';

export default function LeftShop({ category }) {
    return (
        <div className="col-12 col-md-4 col-lg-3">
            {/* Filters */}
            <form className="mb-10 mb-md-0">
                <ul className="nav nav-vertical" id="filterNav">
                    {
                        category.map((value) => <Category
                            {...value} key={value.id}
                        />)
                    }
                </ul>
            </form>
        </div>

    )
}
