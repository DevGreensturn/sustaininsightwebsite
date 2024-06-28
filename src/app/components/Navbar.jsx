"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/header.module.css"; // Import CSS modules if needed
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
        <header className={`fixed top-0 left-0 right-0 z-10 ${styles.header}`}>
            <nav className={`navbar  navbar-expand-lg `} style={{justifyContent:"space-between"}}>
                <Link href="/" className={`navbar-brand ${styles.navbar__brand}`}>
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
                <div className={` ${styles.navbar__brand}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto"> {/* ml-auto to align items to the right */}
                        <li
                            className={`nav-item dropdown ${suppliersDropdownOpen ? 'show' : ''}`}
                            onMouseEnter={handleSuppliersDropdownToggle}
                            onMouseLeave={() => setSuppliersDropdownOpen(false)}
                        >
                            <a
                                href="#"
                                className={`nav-link dropdown-toggle ${styles.nav_link} text-white`}
                                onClick={handleSuppliersDropdownToggle}
                                aria-haspopup="true"
                                aria-expanded={suppliersDropdownOpen ? 'true' : 'false'}
                            >
<<<<<<< HEAD
                                Suppliers Assessment
                            </a>
                            <ul className={`dropdown-menu ${suppliersDropdownOpen ? "show" : ""} ${styles.dropdown_menu}`}>
                                <li><Link href="#"><span className={styles.dropdown_item}>Impact on Supply Chain</span></Link></li>
                                <li><Link href="#"><span className={styles.dropdown_item}>Industries & Examples</span></Link></li>
                                <li><Link href="#"><span className={styles.dropdown_item}>Plan & Pricing</span></Link></li>
                            </ul>
                        </li>
                        <li
                            className={`nav-item dropdown ${enterpriseDropdownOpen ? 'show' : ''}`}
                            onMouseEnter={handleEnterpriseDropdownToggle}
                            onMouseLeave={() => setEnterpriseDropdownOpen(false)}
                        >
                            <a
                                href="#"
                                className={`nav-link dropdown-toggle ${styles.nav_link} text-white`}
                                onClick={handleEnterpriseDropdownToggle}
                                aria-haspopup="true"
                                aria-expanded={enterpriseDropdownOpen ? 'true' : 'false'}
=======
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
>>>>>>> d60692973d34e31aacf6c41af3380b11fd9a407b
                            >
                                Enterprise Solutions
                            </a>
                            <ul className={`dropdown-menu ${enterpriseDropdownOpen ? "show" : ""} ${styles.dropdown_menu}`}>
                                <li><Link href="#"><span className={styles.dropdown_item}>Why Rating Suppliers</span></Link></li>
                                <li><Link href="#"><span className={styles.dropdown_item}>Rating Methodology</span></Link></li>
                                <li><Link href="#"><span className={styles.dropdown_item}>Rating Areas</span></Link></li>
                                <li><Link href="#"><span className={styles.dropdown_item}>Plan & Pricing</span></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/learning Center" className={`nav-link ${styles.nav_link} text-white hover:underline`}>
                                Learning Center
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/aboutus"  className="nav-link  text-white hover:underline">About</Link>
                        </li>
                        <li className="nav-item">                        
                            <Link
<<<<<<< HEAD
                                href="/#contact"
                                className={`button-contact px-6 inline-block py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white ${styles.button_contact}`}
=======
                                href="/contact-us"
                                className="button-contact px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
>>>>>>> d60692973d34e31aacf6c41af3380b11fd9a407b
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
