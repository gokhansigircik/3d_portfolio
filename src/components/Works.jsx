import React from 'react'
import { projects } from '../constants'

const Works = () => {
  return (
    <section id="work" className="px-6 sm:px-16 py-20 text-white">
      <p className="text-secondary uppercase tracking-[0.35em] text-sm">Selected work</p>
      <h2 className="text-[36px] sm:text-[52px] font-black mt-2">Projects built around real workflows.</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article key={project.name} className="bg-tertiary rounded-2xl p-5 flex flex-col">
            <img src={project.image} alt={`${project.name} preview`} className="rounded-xl h-44 w-full object-cover" />
            <h3 className="text-white font-bold text-[24px] mt-5">{project.name}</h3>
            <p className="text-secondary mt-3 leading-7 flex-1">{project.description}</p>
            <a href={project.source_code_link} target="_blank" rel="noreferrer" className="text-blue-300 mt-5">View repository</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Works
