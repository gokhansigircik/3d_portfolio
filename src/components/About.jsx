import React from 'react'

const About = () => {
  return (
    <section id="about" className="px-6 sm:px-16 py-20 text-white">
      <p className="text-secondary uppercase tracking-[0.35em] text-sm">About</p>
      <h2 className="text-[36px] sm:text-[52px] font-black mt-2">Software with operator instincts.</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-5 text-secondary leading-7">
        <p className="bg-tertiary rounded-2xl p-6">Gokhan builds across frontend, backend, data, authentication, dashboards, APIs, and admin style workflows.</p>
        <p className="bg-tertiary rounded-2xl p-6">His engineering work includes foundation platform development, Upwork client builds, C.A.M.P.S, and Cashflows.</p>
        <p className="bg-tertiary rounded-2xl p-6">Nine years at Four Seasons shaped his ownership style: calm under pressure, precise handoffs, clear communication, and service quality.</p>
      </div>
    </section>
  )
}

export default About
