import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="px-6 sm:px-16 py-20 text-white">
      <p className="text-secondary uppercase tracking-[0.35em] text-sm">Contact</p>
      <h2 className="text-[36px] sm:text-[52px] font-black mt-2">Ready for software engineering roles.</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        <a className="bg-tertiary rounded-2xl p-6" href="mailto:gokhansigircik@hotmail.com">gokhansigircik@hotmail.com</a>
        <a className="bg-tertiary rounded-2xl p-6" href="https://www.linkedin.com/in/gokhan-sigircik/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="bg-tertiary rounded-2xl p-6" href="https://github.com/gokhansigircik" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}

export default Contact
