import React from "react";

function withStorageListener(WrappedComponent) {

    function hasTaskChanged(oldChange, newChange) {
        if(oldChange.id !== newChange.id) {
            return `The '${oldChange.text}' has been removed, please refresh`;
        }
        if (oldChange.text !== newChange.text) {
            return `The task '${oldChange.text}' has been modified by ${newChange.text}, please refresh`;
        }
        if (oldChange.completed !== newChange.completed) {
            if (newChange.completed === true) {
                return `The task '${oldChange.text}' has been completed, please refresh`;
            } else {
                return `The task '${oldChange.text}' has been moved to pending, please refresh`;
            }
        }
    }

    function getChangedTasks(oldValue, newValue) {
        let changed = '';
        let oldChange = JSON.parse(oldValue);
        let newChange = JSON.parse(newValue);
        let j = 0;

        if (newChange.length > oldChange.length) {
            return `The task '${newChange[newChange.length - 1].text}' has been added, please refresh`;
        }

        for (let i = 0; i < oldChange.length; i++) {
            changed = hasTaskChanged(oldChange[i], newChange[j]);
            j++;
            if (changed !== undefined) {
                return changed;
            }
        }
    }

    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1') {
                setStorageChange(true);
                props.setUpdateStorage(getChangedTasks(change.oldValue, change.newValue));
            }
        });

        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
                updateStorage={props.updateStorage}
            />
        )
    }
}

export { withStorageListener };
