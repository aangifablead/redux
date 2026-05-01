import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reorderList } from "./features/listSlice";

const DraggableList = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.listSlice);
    const [draggedIdx, setDraggedIdx] = useState(null);
    console.log(items, 'itemsitems')
    const handleDragStart = (index) => {
        setDraggedIdx(index);
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Required to allow dropping
    };

    console.log(draggedIdx,'draggedIdxdraggedIdx')
    const handleDrop = (index) => {
        if (draggedIdx === index) return;
        dispatch(reorderList({ fromIndex: draggedIdx, toIndex: index }));

        // Logging the order: Since Redux state updates are async, 
        // we calculate the order for the log based on the logic.
        const updatedOrder = [...items];
        const [item] = updatedOrder.splice(draggedIdx, 1);
        updatedOrder.splice(index, 0, item);

        console.log("Updated Order:", updatedOrder.map(i => i.content));
        setDraggedIdx(null);
    };

    return (
        <div className="list-container">
            <h2>List Order</h2>
            <div className="items-wrapper">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index)}
                        className="drag-item"
                    >
                        <span className="handle">⠿</span> {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DraggableList;