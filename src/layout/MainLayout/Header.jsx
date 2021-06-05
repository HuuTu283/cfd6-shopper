import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useTranslate } from "../../core/Translate";




export default function Header() {
    let { t, selectLanguage, languague } = useTranslate();

    function changeLanguage(lang) {
        selectLanguage(lang)
    }

    let { login } = useSelector(store => store.authReducer)


    return (
        <>
            {/* NAVBAR */}
            <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
                <div className="container">
                    {/* Promo */}
                    <div className="mr-xl-8">
                        <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">{t('Free shipping worldwide')}</span>
                    </div>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="topbarCollapse">
                        {/* Nav */}
                        <ul className="nav nav-divided navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                    <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> {t('United States')}
                                </a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" /> {t('United States')}
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" /> {t('Canada')}
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" /> {t('Germany')}
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                    {t('English')}
                                </a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#!">{t('USD')}</a>
                                    <a className="dropdown-item" href="#!">{t('EUR')}</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                    {
                                        languague === 'en' ? 'English' : 'Việt Nam'
                                    }
                                </a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#" onClick={e => changeLanguage('en')} >{t('English')}</a>
                                    <a className="dropdown-item" href="#" onClick={e => changeLanguage('vi')}>{t('Việt Nam')}</a>
                                </div>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav mr-8">
                            <li className="nav-item">
                                <Link className="nav-link" to="/doi-tra-va-giao-hang">{t('Shipping')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">{t('FAQ')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/lien-he">{t('Contact')}</Link>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-medium" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/">
                        {t('Shopper')}.
                    </Link>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                {/* data-toggle="dropdown" */}
                                <Link className="nav-link" to="/">{t('Home')}</Link>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index.html">{t('Default')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-classic.html">{t('Classic')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-fashion.html">{t('Fashion')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-boxed.html">{t('Boxed')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-simple.html">{t('Simple')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-asymmetric.html">{t('Asymmetric')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-sidenav.html">{t('Sidenav')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-landing.html">{t('Landing')}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown position-static">
                                {/* Toggle */}
                                <Link className="nav-link" to="/">{t('Catalog')}</Link>
                                {/* Menu */}
                                <div className="dropdown-menu w-100">
                                    {/* Tabs */}
                                    <form className="mb-2 mb-lg-0 border-bottom-lg">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* Nav */}
                                                    <nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
                                                        <a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
                                                            {t('Women')}
                                                        </a>
                                                        <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                                            {t('Men')}
                                                        </a>
                                                        <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                                            {t('Kids')}
                                                        </a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Tab content */}
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="navTab">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">{t('Clothing')}</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('All Clothing')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Blouses & Shirts')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Coats & Jackets')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Dresses')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Hoodies & Sweats')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Denim')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Jeans')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Jumpers & Cardigans')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Leggings')}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">{t('Shoes & Boots')}</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('All Shoes & Boots')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Branded Shoes')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Boots')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Heels')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Trainers')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Sandals')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Shoes')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Wide Fit Shoes')}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">{t('Bags & Accessories')}</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('All Bags & Accessories')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Accessories')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Bags & Purses')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Luggage')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Belts')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Hats')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Hair Accessories')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Jewellery')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Travel Accessories')}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">{t('Collections')}</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('All Collections')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Occasionwear')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Going Out')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Workwear')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Holiday Shop')}</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" href="./shop.html">{t('Jean Fit Guide')}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-4 d-none d-lg-block">
                                                                {/* Card */}
                                                                <div className="card">
                                                                    {/* Image */}
                                                                    <img className="card-img" src="/img/products/product-110.jpg" alt="..." />
                                                                    {/* Overlay */}
                                                                    <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                                                        <div className="text-center">
                                                                            <a className="btn btn-white stretched-link" href="./shop.html">
                                                                                {t('Shop Sweaters')} <i className="fe fe-arrow-right ml-2" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" to="/cua-hang">{t('Shop')}</Link>
                                {/* Menu */}
                                <div className="dropdown-menu" style={{ minWidth: '650px' }}>
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">{t('Shop')}</div>
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">{t('Default')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop-topbar.html">{t('Topbar')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop-collapse.html">{t('Collapse')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop-simple.html">{t('Simple')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop-masonry.html">{t('Masonry')}</a>
                                                        </li>
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">{t('Product')}</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product.html">{t('Default')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-images-left.html">{t('Images Left')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-image-grid.html">{t('Image Grid')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-image-slider.html">{t('Image Slider')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-images-stacked.html">{t('Images Stacked')}</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">{t('Support')}</div>
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/gio-hang">{t('Shopping Cart')}</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/thanh-toan">{t('Checkout')}</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/dat-hang-thanh-cong">{t('Order Completed')}</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/doi-tra-va-giao-hang">{t('Shipping & Returns')}</Link>
                                                        </li>
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">{t('Account')}</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-order.html">{t('Order')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-orders.html">{t('Orders')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-wishlist.html">{t('Wishlist')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-personal-info.html">{t('Personal Info')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-address.html">{t('Addresses')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-address-edit.html">{t('Addresses: New')}</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-payment.html">{t('Payment')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-payment-edit.html">{t('Payment: New')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-payment-choose.html">{t('Payment: Choose')}</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./auth.html">{t('Auth')}</a>
                                                        </li>
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">{t('Modals')}</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                                                                {t('Newsletter: Horizontal')}
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                                                                {t('Newsletter: Vertical')}
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                                                                {t('Product')}
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                                                                {t('Search')}
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                                                                {t('Shopping Cart')}
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                                                                {t('Size Chart')}
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                                                                {t('Wait List')}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" to="/">{t('Pages')}</Link>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./about.html">{t('About')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./contact-us.html">{t('Contact Us')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./store-locator.html">{t('Store Locator')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./faq.html">{t('FAQ')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./coming-soon.html">{t('Coming Soon')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./404.html">{t('404')}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" to="/">{t('Blog')}</Link>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./blog.html">{t('Blog')}</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./blog-post.html">{t('Blog Post')}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="docs/getting-started.html">{t('Docs')}</a>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                    <i className="fe fe-search" />
                                </a>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                {
                                    login
                                        ? <Link className="nav-link" to="/tai-khoan">
                                            <i class="fas fa-user"></i>
                                        </Link>
                                        :
                                        <Link className="nav-link" to="/tai-khoan">
                                            <i className="fe fe-user" />
                                        </Link>
                                }
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/tai-khoan/yeu-thich">
                                    <i className="fe fe-heart" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                                    <span data-cart-items={2}>
                                        <i className="fe fe-shopping-cart" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* PROMO */}
            <div className="py-3 bg-dark bg-pattern mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Text */}
                            <div className="text-center text-white">
                                <span className="heading-xxs letter-spacing-xl">
                                    ⚡️ {t('Happy Holiday Deals on Everything')} ⚡️
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
