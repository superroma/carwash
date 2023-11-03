import React from 'react'
import './SelectWash.css'

const CardScreen: React.FC = () => {
    const cards = [
        {
            id: 'express',
            title: 'Express',
            time: 3,
            price: 4,
            features: ['Shampoo', 'Car Body Wash'],
        },
        {
            id: 'daily',
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
            id: 'premium',
            title: 'Premium',
            time: 10,
            price: 8,
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
