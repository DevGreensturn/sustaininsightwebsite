"use client";
import React, { useState } from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/header.module.css";

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
        <header className={`${styles.header} sticky-top`}>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#00412E" }}>
                <Link href="/" className={`navbar-brand ${styles.navbar__brand}`}>
                    <img src="/Images/homepage/Logo-2.svg" alt="Logo-1 image" className="img-fluid" height={500}  width={350}/>
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
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li
                            className={`nav-item dropdown ${suppliersDropdownOpen ? 'show' : ''}`}
                            onMouseEnter={handleSuppliersDropdownToggle}
                            onMouseLeave={() => setSuppliersDropdownOpen(false)}
                        >
                            <a
                                href="#"
                                className={`nav-link dropdown-toggle ${styles.nav_link}`}
                                onClick={handleSuppliersDropdownToggle}
                                aria-haspopup="true"
                                aria-expanded={suppliersDropdownOpen ? 'true' : 'false'}
                            >
                                Suppliers Assessment
                            </a>
                            <ul className={`dropdown-menu ${suppliersDropdownOpen ? "show" : ""}`}>
                                <li><Link href="/suppliers-assessment" className={styles.dropdown_item}>Impact on Supply Chain</Link></li>
                                <li><Link href="#" className={styles.dropdown_item}>Industries & Examples</Link></li>
                                <li><Link href="/PricingSection" className={styles.dropdown_item}>Plan & Pricing</Link></li>
                            </ul>
                        </li>
                        <li
                            className={`nav-item dropdown ${enterpriseDropdownOpen ? 'show' : ''}`}
                            onMouseEnter={handleEnterpriseDropdownToggle}
                            onMouseLeave={() => setEnterpriseDropdownOpen(false)}
                        >
                            <a
                                href="#"
                                className={`nav-link dropdown-toggle ${styles.nav_link}`}
                                onClick={handleEnterpriseDropdownToggle}
                                aria-haspopup="true"
                                aria-expanded={enterpriseDropdownOpen ? 'true' : 'false'}
                            >
                                Enterprise Solutions
                            </a>
                            <ul className={`dropdown-menu ${enterpriseDropdownOpen ? "show" : ""}`}>
                                <li><Link href="#" className={styles.dropdown_item}>Why Rating Suppliers</Link></li>
                                <li><Link href="#" className={styles.dropdown_item}>Rating Methodology</Link></li>
                                <li><Link href="#" className={styles.dropdown_item}>Rating Areas</Link></li>
                                <li><Link href="/PricingSection" className={styles.dropdown_item}>Plan & Pricing</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/news" className={`nav-link ${styles.nav_link}`}>News</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/platform" className={`nav-link ${styles.nav_link}`}>Platform</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link href="/learning Center" className={`nav-link ${styles.nav_link}`}>
                                Learning Center
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link href="/aboutus" className={`nav-link ${styles.nav_link}`}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact-us" className={`nav-link ${styles.nav_link}`}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="http://devgreensturn.com/"
                                className={`btn btn-primary ${styles.button_contact}`}
                            >
                                <h6 className="text-center m-0">Login</h6>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
