import React from 'react';

const ResolveButtons = ({onClickControlButton, isDonor, dealStatus, dealId}) => {
    let button1Text;
    let button2Text;
    let callingMethod1;
    let callingMethod2;
    
    if(isDonor) {
        switch(dealStatus) {
            case 1:
                button1Text = 'Aprove';
                callingMethod1 = 'ApproveDeal';
                button2Text = 'Decline';
                callingMethod2 = 'DeclineDeal';
                break;

            case 3: 
                button1Text = 'Close';
                callingMethod1 = 'CloseDeal';
                button2Text = 'Decline';
                callingMethod2 = 'DeclineDeal';
                break;

        }
    } else {
        if(dealStatus === 2) {
            button1Text = 'Book recieved';
            callingMethod1 = 'BookRecieved';
            button2Text = 'Decline';
            callingMethod2 = 'DeclineDeal';
        }
    }

    if(!button1Text) {
        return (
            <div className='message badge badge-warning'>
                Waiting approwing from another side.
            </div>
        )
    }

    return (
        <div className='deals__control'>
            <button
                onClick={onClickControlButton}
                className = 'btn btn-success'
                data-method={`${callingMethod1}`}
                data-id={`${dealId}`}>
                {button1Text}
            </button>
            <button
                onClick={onClickControlButton}
                className='btn btn-warning'
                data-method={`${callingMethod2}`}
                data-id={`${dealId}`}>
                {button2Text}
            </button> 
        </div>
                
        )
}

export {ResolveButtons};
