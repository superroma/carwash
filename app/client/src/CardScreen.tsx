import React, { useEffect, useState } from 'react'
import './CardScreen.css'

const CardScreen: React.FC = () => {
    const timeOutForShowingSelection: number = 5000;
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
    ];
    useEffect(() => {
        function handleResize() {
            const viewportWidth = window.innerWidth
            const viewportHeight = window.innerHeight
            const scaleX = viewportWidth / 1024 // 1024 is the base width set in the CSS
            const scaleY = viewportHeight / 600 // 600 is the base height set in the CSS
            const scale = Math.min(scaleX, scaleY)
            const container = document.querySelector(
                '.main-container'
            ) as HTMLElement

            container!.style.transform = `scale(${scale})`
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    const [washState, setWashState] = useState(-2);
    const showChoices = (): void => {
        setWashState(-1);
    }
    const processChoice = (index: number): void => {
        setWashState(index);
        setTimeout(() => {
            setWashState(-2);
        }, timeOutForShowingSelection)
    };
    const renderCarChoices = (): JSX.Element => {
        return (
            <div className="card-container">
                {cards.map((card, index) => (
                    <div key={index} className="card" onClick={() => { processChoice(index) }}>
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
    };
    const renderSelectedChoice = (): JSX.Element => {
        const card = cards[washState];
        return (
            <div className="selected-container">
                <p>Thank you for selecting <b>{card.title}</b>.</p>
                <p>Please wait {timeOutForShowingSelection/1000} sec. to continue.</p>
            </div>
        )
    };
    const renderWaiting = (): JSX.Element => {
        return (
            <div className="wating-container" onClick={showChoices}>
                <div>Touch the screen to choose car wash mode.</div>
            </div>
        )
    }
    const el = washState === -2 ? renderWaiting() : (washState === -1 ? renderCarChoices() : renderSelectedChoice() );
    return (<div className="main-container">{el}</div>);
}

export default CardScreen
