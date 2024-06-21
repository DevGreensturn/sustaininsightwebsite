"use client";
import Link from "next/link";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [suppliersDropdownOpen, setSuppliersDropdownOpen] = useState(false);
    const [enterpriseDropdownOpen, setEnterpriseDropdownOpen] = useState(false);

    const handleSuppliersDropdownToggle = () => {
        setSuppliersDropdownOpen(!suppliersDropdownOpen);
        setEnterpriseDropdownOpen(false); // Close enterprise dropdown if open
    };

    const handleEnterpriseDropdownToggle = () => {
        setEnterpriseDropdownOpen(!enterpriseDropdownOpen);
        setSuppliersDropdownOpen(false); // Close suppliers dropdown if open
    };

    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
                <nav className="header_Navbar navbar navbar-expand-lg">
                    <Link href="/" className="navbar-brand">
                        <div className="flex items-center">
                            <img src="/Images/Logo-1.png" alt="Logo-1 image" className="h-8 mr-2" />
                        </div>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav d-flex flex-row-reverse collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li
                                className={`nav-item dropdown ${suppliersDropdownOpen ? 'show' : ''}`}
                                onMouseEnter={handleSuppliersDropdownToggle}
                                onMouseLeave={() => setSuppliersDropdownOpen(false)}
                            >
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    onClick={handleSuppliersDropdownToggle}
                                    aria-haspopup="true"
                                    aria-expanded={suppliersDropdownOpen ? 'true' : 'false'}
                                >
                                    Suppliers Assessment
                                </a>
                                <ul
                                    className={`dropdown-menu ${suppliersDropdownOpen ? "show" : ""}`}
                                    aria-labelledby="navbarDropdownSuppliers"
                                >
                                    <li><Link href="/suppliers-assessment"><span className="dropdown-item">Impact on Supply Chain</span></Link></li>
                                    <li><Link href="#"><span className="dropdown-item">Industries & Examples</span></Link></li>
                                    <li><Link href="#"><span className="dropdown-item">Plan & Pricing</span></Link></li>
                                </ul>
                            </li>
                            <li
                                className={`nav-item dropdown ${enterpriseDropdownOpen ? 'show' : ''}`}
                                onMouseEnter={handleEnterpriseDropdownToggle}
                                onMouseLeave={() => setEnterpriseDropdownOpen(false)}
                            >
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    onClick={handleEnterpriseDropdownToggle}
                                    aria-haspopup="true"
                                    aria-expanded={enterpriseDropdownOpen ? 'true' : 'false'}
                                >
                                    Enterprise Solutions
                                </a>
                                <ul
                                    className={`dropdown-menu ${enterpriseDropdownOpen ? "show" : ""}`}
                                    aria-labelledby="navbarDropdownEnterprise"
                                >
                                    <li><Link href="#"><span className="dropdown-item">Why Rating Suppliers</span></Link></li>
                                    <li><Link href="#"><span className="dropdown-item">Rating Methodology</span></Link></li>
                                    <li><Link href="#"><span className="dropdown-item">Rating Areas</span></Link></li>
                                    <li><Link href="#"><span className="dropdown-item">Plan & Pricing</span></Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/learning Center" className="nav-link">Learning Center</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/About us" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">                        
                            <Link
                                href="/#contact"
                                className="button-contact px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                            >
                                Contact us
                            </Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
