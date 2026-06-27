import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 sm:px-16 pt-24 text-white">
      <div className="max-w-5xl">
        <p className="text-secondary uppercase tracking-[0.35em] text-sm mb-5">Full Stack Software Developer</p>
        <h1 className="font-black text-[44px] sm:text-[72px] leading-tight">
          Data driven web applications for business workflows.
        </h1>
        <p className="mt-6 text-secondary text-[18px] max-w-3xl leading-8">
          React, Next.js, Python, FastAPI, Flask, Java, Spring Boot, PostgreSQL, MySQL, MongoDB, REST APIs, and the operations judgment to turn requirements into usable software.
        </p>
      </div>
    </section>
  )
}

export default Hero
