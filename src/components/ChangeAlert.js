import React from "react";
import { toast } from "react-toastify";
import { useLocalListener } from "../App/useLocalListener";

const notify = (message, toggleShow) => {
    toast.info(message, {
        autoClose: false,
        onClose: toggleShow
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
