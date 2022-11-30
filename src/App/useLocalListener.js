import React from 'react';

function useLocalListener({ sincronize, updateStorage, setUpdateStorage }) {
    function hasTaskChanged(oldChange, newChange) {
        if (newChange !== undefined) {
            if (oldChange.id !== newChange.id ||
                oldChange.text !== newChange.text ||
                oldChange.completed !== newChange.completed) {
                return `There are changes, please click this notification to reload`;
            }
        }
    }

    function getChangedTasks(oldValue, newValue) {
        let changed = '';
        let oldChange = JSON.parse(oldValue);
        let newChange = JSON.parse(newValue);
        let j = 0;

        if (newChange.length > oldChange.length) {
            return `The task '${
                newChange[newChange.length - 1].text
            }' has been added, please refresh`;
        }

        for (let i = 0; i < oldChange.length; i++) {
            changed = hasTaskChanged(oldChange[i], newChange[j]);
            j++;
            if (changed !== undefined) {
                return changed;
            }
        }
    }

    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            setStorageChange(true);
            setUpdateStorage(getChangedTasks(change.oldValue, change.newValue));
        }
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    };

    return {
        show: storageChange,
        toggleShow,
        updateStorage: updateStorage,
    };
}

export { useLocalListener };
