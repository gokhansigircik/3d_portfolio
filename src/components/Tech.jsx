import React from 'react'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <section className="px-6 sm:px-16 py-16 text-white">
      <p className="text-secondary uppercase tracking-[0.35em] text-sm">Stack</p>
      <div className="mt-8 flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <div key={tech.name} className="bg-tertiary rounded-full px-5 py-3 text-secondary">{tech.name}</div>
        ))}
      </div>
    </section>
  )
}

export default Tech
