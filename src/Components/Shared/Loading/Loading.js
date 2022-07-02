import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div style={{ height: "100px", width: "100px", marginTop: "100px" }} className="spinner-border text-primary" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

export default Loading;