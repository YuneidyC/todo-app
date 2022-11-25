import React from "react";
import { toast } from "react-toastify";
import { withStorageListener } from "../App/withStorageListener";

const notify = (message, toggleShow) => {
    toast.info(message, {
        autoClose:false,
        onClose:toggleShow
    });
}

function ChangeAlert({ show, toggleShow, updateStorage }) {
    if (show) {
        return (
            <div className="ChangeAlert" onClick={notify(updateStorage, toggleShow)}>
            </div>
        )
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
