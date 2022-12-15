import { useContext } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { SimpleFormControlArguments } from '../Core/SmartTypes';

const FileUploader = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };

    return (
        <div>
            <label htmlFor='formFileLg' className='form-label'>
                {control.props.label}
            </label>
            <input className='form-control form-control-lg' id='formFileLg' type='file' />
        </div>
    );
};

export default FileUploader;
