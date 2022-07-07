import iconChat from '../../../assets/icon-chat.png'
import iconMoney from '../../../assets/icon-money.png'
import iconSecurity from '../../../assets/icon-security.png'

/**
 * Features component.
 * Displays the company values.
 *
 * @component
 * @example
 * return (
 *   <Features />
 * )
 */

function Features() {
  const bloc_list = [
    {
      img: iconChat,
      alt: 'Chat Icon',
      title: 'You are our #1 priority',
      text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      img: iconMoney,
      alt: 'Money Icon',
      title: 'More savings means higher rates',
      text: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      img: iconSecurity,
      alt: 'Security Icon',
      title: 'Security you can trust',
      text: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ]

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {bloc_list.map((element) => (
        <div className="feature-item" key={element.title}>
          <img src={element.img} alt={element.alt} className="feature-icon" />
          <h3 className="feature-item-title">{element.title}</h3>
          <p>{element.text}</p>
        </div>
      ))}
    </section>
  )
}

export default Features
