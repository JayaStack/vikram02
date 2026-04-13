import { useState } from 'react'

const faculty = [
  { name: 'Dr. S. Rajalakshmi', dept: 'Computer Science', qual: 'Ph.D – IIT Madras', exp: '18 yrs', specialisation: 'Machine Learning, Data Analytics', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300' },
  { name: 'Prof. K. Venkatesh', dept: 'Computer Science', qual: 'M.Tech – NIT Trichy', exp: '12 yrs', specialisation: 'Cyber Security, Cloud Computing', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300' },
  { name: 'Dr. P. Anandhi', dept: 'Commerce', qual: 'Ph.D – University of Madras', exp: '22 yrs', specialisation: 'Financial Accounting, Taxation', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=300' },
  { name: 'Prof. R. Suresh Kumar', dept: 'Commerce', qual: 'M.Com, M.Phil', exp: '15 yrs', specialisation: 'Banking Management, Corporate Law', img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300' },
  { name: 'Dr. N. Priyanka', dept: 'Management', qual: 'Ph.D – Anna University', exp: '14 yrs', specialisation: 'HR Management, Organisational Behaviour', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300' },
  { name: 'Prof. A. Balasubramanian', dept: 'Management', qual: 'MBA – IIM Kozhikode', exp: '10 yrs', specialisation: 'Marketing, Business Strategy', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300' },
  { name: 'Dr. V. Meenakshi', dept: 'Science', qual: 'Ph.D – Madras University', exp: '20 yrs', specialisation: 'Applied Psychology, Counselling', img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300' },
  { name: 'Prof. C. Rajaram', dept: 'Arts', qual: 'M.A., M.Phil – English', exp: '16 yrs', specialisation: 'English Literature, Communication Skills', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300' },
]

const depts = ['All', 'Computer Science', 'Commerce', 'Management', 'Science', 'Arts']

export default function Faculty() {
  const [activeDept, setActiveDept] = useState('All')
  const filtered = activeDept === 'All' ? faculty : faculty.filter((f) => f.dept === activeDept)

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">Our Team</div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">Expert Faculty</h1>
          <p className="text-white/50 font-sans text-lg max-w-xl">
            140+ faculty members with industry experience, PhD qualifications, and a passion for teaching.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gold">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[['140+', 'Faculty Members'], ['78%', 'PhD Qualified'], ['12 yrs', 'Avg. Experience']].map(([v, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-white font-600">{v}</div>
                <div className="text-white/70 text-sm font-sans">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-12">
          {depts.map((d) => (
            <button key={d} onClick={() => setActiveDept(d)} className={`px-4 py-2 rounded-full text-xs font-sans font-600 transition-all ${activeDept === d ? 'bg-navy text-white' : 'bg-white border border-navy/10 text-navy/60 hover:text-navy'}`}>
              {d}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-navy/5 hover:-translate-y-1 hover:shadow-xl transition-all group">
              <div className="relative overflow-hidden h-56">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="bg-gold/80 text-white text-[10px] font-sans tracking-widest uppercase px-2 py-0.5 rounded-full">{f.dept}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-navy font-600">{f.name}</h3>
                <div className="text-gold text-xs font-sans mt-0.5 mb-3">{f.qual} · {f.exp}</div>
                <p className="text-muted text-xs font-sans">{f.specialisation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
