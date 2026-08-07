import './TechnologyMotion.css'

const row1 = [
  { label: 'Artificial Intelligence', icon: '🤖' },
  { label: 'Financial Literacy', icon: '💰' },
  { label: 'Entrepreneurship', icon: '🚀' },
  { label: 'Design Thinking', icon: '🎨' },
  { label: 'Machine Learning', icon: '🧠' },
  { label: 'Communication', icon: '🗣️' },
  { label: 'Leadership', icon: '👑' },
  { label: 'Data Science', icon: '📊' },
]

const row2 = [
  { label: 'Project-Based Learning', icon: '🛠️' },
  { label: 'Coding & Technology', icon: '💻' },
  { label: 'Critical Thinking', icon: '🔭' },
  { label: 'Collaboration', icon: '🤝' },
  { label: 'Digital Fluency', icon: '📱' },
  { label: 'Problem Solving', icon: '🧩' },
  { label: 'Explorer Passport', icon: '🗺️' },
  { label: 'Grand Expo', icon: '🎪' },
]

function MarqueeItem({ item }: { item: typeof row1[0] }) {
  return (
    <div className="motion-item">
      <span className="motion-item__icon">{item.icon}</span>
      <span className="motion-item__label">{item.label}</span>
      <span className="motion-item__dot" />
    </div>
  )
}

export default function TechnologyMotion() {
  const doubled1 = [...row1, ...row1]
  const doubled2 = [...row2, ...row2]

  return (
    <section className="tech-motion" aria-label="TechPhilo capabilities marquee">
      <div className="tech-motion__fade-left" />
      <div className="tech-motion__fade-right" />

      <div className="tech-motion__row tech-motion__row--ltr" aria-hidden="true">
        {doubled1.map((item, i) => (
          <MarqueeItem key={i} item={item} />
        ))}
      </div>

      <div className="tech-motion__row tech-motion__row--rtl" aria-hidden="true">
        {doubled2.map((item, i) => (
          <MarqueeItem key={i} item={item} />
        ))}
      </div>
    </section>
  )
}
