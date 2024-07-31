"use client";

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const searchParams = useSearchParams();
        const todofilter = searchParams.get('todos')
  return (
    <nav>
        <Link href="/" className={todofilter===null ? "active": ""} > All </Link>
        <Link href="/?todos=active"    className={todofilter==="active" ? "active": ""} > Active </Link>
        <Link href="/?todos=completed"  className={todofilter==="completed" ? "active": ""}> Completed </Link>

    </nav>
  )
}

export default Navbar
