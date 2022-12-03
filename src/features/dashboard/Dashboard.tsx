import GridCardsControl from '../../library/ComplexControls/GridCardsControl';
import FiltersControl from '../../library/SimpleControls/FiltersControl';

const dashboard = () => {
    return (
        <>
            <div className='row'>
                <div className='col-3'>
                    <FiltersControl />
                </div>
                <div className='col-9'>
                    <GridCardsControl />
                </div>
            </div>
        </>
    );
};

export default dashboard;
