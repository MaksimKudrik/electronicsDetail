const Home = () => {
    return (
        <div className="home_page">
            <h1 className="page_title"></h1>
            <div className="catalog">
                {/* <электроника /> */}
                <div className="electronic">
                    <div className="electronic__container">
                            <h2 className="electronic__title">Электронные компоненты для LEGO SPIKE Prime</h2>
                            <a href="/electronics" 
                                className="electronic__card">
                                <div className="electronic__img"></div>
                                    <p className="electronic__text">Датчики расстояния, цвета и нажатия, большой и средний сервомоторы</p>    
                            </a>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home