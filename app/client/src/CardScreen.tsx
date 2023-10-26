import React, { useEffect } from 'react'
import './CardScreen.css'

const CardScreen: React.FC = () => {
    const cards = [
        {
            title: 'Express',
            time: 3,
            price: 4,
            features: ['Shampoo', 'Car Body Wash'],
        },
        {
            title: 'Daily',
            time: 7,
            price: 6,
            features: [
                'Washing the bottom of the car',
                'Shampoo',
                'Foam',
                'Car Body Wash',
                'Light Drying',
            ],
        },
        {
            title: 'Premium',
            time: 10,
            price: 6,
            features: [
                'Wahing the bottom of the car',
                'Shampoo',
                'Foam',
                'Car Body Wash',
                'Osmosis',
                'Drying',
            ],
        },
    ]
    useEffect(() => {
        function handleResize() {
            const viewportWidth = window.innerWidth
            const viewportHeight = window.innerHeight
            const scaleX = viewportWidth / 1024 // 1024 is the base width set in the CSS
            const scaleY = viewportHeight / 600 // 600 is the base height set in the CSS
            const scale = Math.min(scaleX, scaleY)
            const container = document.querySelector(
                '.card-container'
            ) as HTMLElement

            container!.style.transform = `scale(${scale})`
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div className="card-container">
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <div className="card-header">{card.title}</div>
                    <div className="card-price">
                        {card.price} € - {card.time} min
                    </div>
                    <ul className="card-features">
                        {card.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default CardScreen
