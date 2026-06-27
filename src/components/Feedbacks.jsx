import React from 'react'
import { testimonials } from '../constants'

const Feedbacks = () => {
  return (
    <section className="px-6 sm:px-16 py-20 text-white">
      <p className="text-secondary uppercase tracking-[0.35em] text-sm">Positioning</p>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {testimonials.map((item) => (
          <article key={item.name} className="bg-tertiary rounded-2xl p-6">
            <p className="text-secondary leading-7">{item.testimonial}</p>
            <h3 className="mt-5 font-bold">{item.name}</h3>
            <p className="text-blue-300 text-sm">{item.designation}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Feedbacks
