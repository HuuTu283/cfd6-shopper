import React, { useEffect, useState } from 'react'

import mapApi from '../../service/mapApi';


export default function StoreLocator() {
    let [list, setList] = useState({
        listMap: []
    })
    let [mapActive, setMapActive] = useState(0)
    let [map, setMap] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.448346875867!2d106.76756766897437!3d10.776932339609958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525d2e0e85d09%3A0xd254a361d3b6e84!2zMjk3IMSQLiBMw6ogVsSDbiBUaOG7i25oIG514buRaSBkw6BpLCBDw6F0IEzDoWksIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1624511690170!5m2!1sen!2sus')

    useEffect(async () => {
        let res = await mapApi.location()
        console.log(res)
        if (res) {
            setList({
                listMap: res
            })
        }
    }, [])
    console.log(list?.listMap?.data);


    function mapChange(index) {
        setMapActive(index)
        setMap(list.listMap.data[index].google_map)
    }



    return (
        <>
            {/* BREADCRUMB */}
            <nav className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Breadcrumb */}
                            <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="contact-us.html">Contact Us</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    Store Locator
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </nav>
            {/* HEADER */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                            {/* Heading */}
                            <h3 className="mb-10 text-center">Store Locator</h3>
                            {/* Search */}
                            <div className="input-group input-group-merge">
                                <input className="form-control" type="search" placeholder="Enter Country or City" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-border" type="submit">
                                        <i className="fe fe-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* MAP */}
            <section className="py-12 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4">
                            {/* Card */}
                            <div className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0 shadow" style={{ overflow: "auto" }}>

                                {/* {
                                    list?.listMap?.data.map((e, i) =>
                                        <div className={`card-body google-map ${mapActive === i ? "active" : ""}`} key={i} onClick={mapChange.bind(null, i)}>
                                            <p className="font-weight-bold">
                                                {e.name}
                                            </p>
                                            <p className="text-gray-500">
                                                {e.address}
                                            </p>
                                            <p>
                                                <strong>Phone:</strong> <br />
                                                <a className="text-gray-500" href={`tel:${e.phone}`}>{e.phone}</a>
                                            </p>
                                            <p className="mb-0">
                                                <strong>Store Hours:</strong> <br />
                                                <span className="text-gray-500">{e.time}</span>
                                            </p>
                                        </div>
                                    )
                                } */}

                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8">
                            {/* Map */}
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe src={map} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
