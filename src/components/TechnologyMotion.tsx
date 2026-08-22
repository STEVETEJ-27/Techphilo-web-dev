import './TechnologyMotion.css'
import { BarChart3, Bot, Brain, Crown, Handshake, Laptop, Map, MessagesSquare, Palette, Puzzle, Rocket, Smartphone, Telescope, Tent, Wallet, Wrench } from 'lucide-react'

const row1 = [
  { label: 'Artificial Intelligence', Icon: Bot },
  { label: 'Financial Literacy', Icon: Wallet },
  { label: 'Entrepreneurship', Icon: Rocket },
  { label: 'Design Thinking', Icon: Palette },
  { label: 'Machine Learning', Icon: Brain },
  { label: 'Communication', Icon: MessagesSquare },
  { label: 'Leadership', Icon: Crown },
  { label: 'Data Science', Icon: BarChart3 },
]

const row2 = [
  { label: 'Project-Based Learning', Icon: Wrench },
  { label: 'Coding & Technology', Icon: Laptop },
  { label: 'Critical Thinking', Icon: Telescope },
  { label: 'Collaboration', Icon: Handshake },
  { label: 'Digital Fluency', Icon: Smartphone },
  { label: 'Problem Solving', Icon: Puzzle },
  { label: 'Explorer Passport', Icon: Map },
  { label: 'Grand Expo', Icon: Tent },
]

function MarqueeItem({ item }: { item: typeof row1[0] }) {
  return (
    <div className="motion-item">
      <span className="motion-item__icon"><item.Icon size={20} strokeWidth={1.7} /></span>
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
