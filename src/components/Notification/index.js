import React from 'react';
import {
    Wrapper,
    ToastSuccess,
    ToastError,
    ToastInfo,
    ToastWarning,
    InnerContainer,
    OuterContainer,
    Button,
    Image
} from '~/components/Notification/styles';
import SuccessIcon from '~/assets/images/success_ic.svg';
import ErrorIcon from '~/assets/images/error_ic.svg';
import InfoIcon from '~/assets/images/info_ic.svg';
import WarningIcon from '~/assets/images/warning_ic.svg';
import { NOTIFICATION_TYPE } from '~/constants/common';
import toast from 'react-hot-toast';

const notification = (evt, title = '', description = '', type) => {
    return (
        <Wrapper>
            {
                renderNotificationByType(type,
                    <>
                        <OuterContainer>
                            {renderNotificationIcon(type)}
                        </OuterContainer>
                        <InnerContainer>
                            <p>{title}</p>
                            <p>{description}</p>
                        </InnerContainer>
                        <Button onClick={() => handleClose(evt)}>&times;</Button>
                    </>
                )
            }
        </Wrapper>
    );
}

const handleClose = (evt) => {
    toast.dismiss(evt.id);
}

const renderNotificationByType = (type = NOTIFICATION_TYPE.SUCCESS, children) => {
    switch (type) {
        case NOTIFICATION_TYPE.ERROR:
            return <ToastError>{children}</ToastError>;

        case NOTIFICATION_TYPE.INFO:
            return <ToastInfo>{children}</ToastInfo>;

        case NOTIFICATION_TYPE.WARNING:
            return <ToastWarning>{children}</ToastWarning>;

        default:
            return <ToastSuccess>{children}</ToastSuccess>;
    }
}

const renderNotificationIcon = (type = NOTIFICATION_TYPE.SUCCESS) => {
    switch (type) {
        case NOTIFICATION_TYPE.ERROR:
            return <Image src={ErrorIcon} />;

        case NOTIFICATION_TYPE.INFO:
            return <Image src={InfoIcon} />;

        case NOTIFICATION_TYPE.WARNING:
            return <Image src={WarningIcon} />;

        default:
            return <Image src={SuccessIcon} />;
    }
}

export {
    notification
}
