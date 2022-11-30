import React from "react";
import { toast } from "react-toastify";
import { useLocalListener } from "../App/useLocalListener";

import '../styles/ChangeAlert.css';

const notify = (message, toggleShow) => {
    toast.info(message, {
        autoClose: false,
        onClose: toggleShow,
        toastId: 'toastRefresh',
        className: 'toast-refresh',
        position: toast.POSITION.TOP_CENTER
    });
}

function ChangeAlert({ sincronize, updateStorage, setUpdateStorage }) {
    const { show, toggleShow } = useLocalListener({ sincronize, updateStorage, setUpdateStorage });
    if (show) {
        return (
            <div
                className="ChangeAlert"
                onClick={notify(updateStorage, toggleShow)}>
            </div>
        )
    }
}

export { ChangeAlert };
