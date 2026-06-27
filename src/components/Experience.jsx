import React from 'react'
import { experiences } from '../constants'

const Experience = () => {
  return (
    <section className="px-6 sm:px-16 py-20 text-white">
      <p className="text-secondary uppercase tracking-[0.35em] text-sm">Experience</p>
      <h2 className="text-[36px] sm:text-[52px] font-black mt-2">Execution history.</h2>
      <div className="mt-10 space-y-5">
        {experiences.map((item) => (
          <article key={`${item.title}-${item.company_name}`} className="bg-tertiary rounded-2xl p-6">
            <p className="text-blue-300">{item.date}</p>
            <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
            <p className="text-secondary mt-1">{item.company_name}</p>
            <ul className="mt-4 list-disc ml-6 text-secondary space-y-2 leading-7">
              {item.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
