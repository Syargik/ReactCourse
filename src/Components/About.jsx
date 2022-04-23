import React from 'react'

export default function About() {
    return (
        <div className="about">
            <div className="about__container _container">
                <div className="text__decoration">
                    <svg className="left">
                        <use xlinkHref="#left"></use>
                    </svg>
                    <h1>Об RitmStyle</h1>
                    <svg className="right">
                        <use xlinkHref="#right"></use>
                    </svg>
                </div>
                <div className="about__content">
                    <div className="about__item">
                        <div className="about__text">
                            <h1>RitmStyle массаж</h1>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget
                                mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet
                                amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.
                                Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis
                                amet
                                diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant
                                tortor
                                at tempor.</h2>
                        </div>
                        <div>
                            <div className="about__image">
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div>
                            <div className="about__image">
                            </div>
                        </div>
                        <div className="about__text">
                            <h1>RitmStyle гидротерапия</h1>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget
                                mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet
                                amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.
                                Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis
                                amet
                                diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant
                                tortor
                                at tempor.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
