const GridCardsControl = () => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='col-3 card m-3' data-aos='zoom-in' data-aos-delay='400'>
                <div className='bi bi-person-circle text-center' style={{ fontSize: '4rem' }}></div>
                <div className='card-body'>
                    <h5 className='card-title text-center'>Its time to make Introductions!</h5>
                    <p className='card-text text-center'>1 out of 3 activities completed</p>
                </div>
                <div className='card-footer text-muted text-center'>
                    <button className='btn btn-primary rounded-pill text-center align-self-end'>Complete Now</button>
                </div>
            </div>
            <div className='col-3 card m-3' data-aos='zoom-in' data-aos-delay='400'>
                <div className='bi bi-person-circle text-center' style={{ fontSize: '4rem' }}></div>
                <div className='card-body'>
                    <h5 className='card-title text-center'>Let The Communications Begin</h5>
                    <p className='card-text text-center'>1 out of 3 activities completed</p>
                </div>
                <div className='card-footer text-muted text-center'>
                    <button className='btn btn-primary rounded-pill text-center align-self-end'>Complete Now</button>
                </div>
            </div>
            <div className='col-3 card m-3' data-aos='zoom-in' data-aos-delay='400'>
                <div className='bi bi-person-circle text-center' style={{ fontSize: '4rem' }}></div>
                <div className='card-body'>
                    <h5 className='card-title text-center'>Feel the Joy of Contributing</h5>
                    <p className='card-text text-center'>1 out of 3 activities completed</p>
                </div>
                <div className='card-footer text-muted text-center'>
                    <button className='btn btn-primary rounded-pill text-center align-self-end'>Complete Now</button>
                </div>
            </div>
        </div>
    );
};

export default GridCardsControl;
