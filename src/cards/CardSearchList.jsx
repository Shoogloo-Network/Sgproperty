import { useState, useMemo, useEffect } from "react";
import "./CardSearchList.css";
import CardSearchListData from "./CardSearchListData";

const CardSearchList = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [displayData, setDisplayData] = useState([]);
    const [buttonsData, setButtonsData] = useState([]);

    useEffect(() => {
        data();
    }, []); // Empty dependency array ensures it runs only once.

    const data = async () => {
        try {
            const response = await fetch("http://localhost:8000/buttonsData");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const dataRes = await response.json();
            setButtonsData(dataRes);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    useEffect(() => {
        if (buttonsData && buttonsData.length > 0) {
            const initialData = buttonsData[0].data || [];
            setDisplayData(initialData);
        }
    }, [buttonsData]);

    const memoizedCardList = useMemo(() => {
        return (
            <CardSearchListData
                key={buttonsData.find((btn) => btn.id === activeTab)?.id}
                cities={displayData || []}
            />
        );
    }, [displayData]);

    const handleClick = (btnId) => {
        setActiveTab(btnId);
        const newData = buttonsData.find((btn) => btn.id === btnId)?.data || [];
        setDisplayData(newData);
    };

    if (!buttonsData || buttonsData.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div>
            <div className="button-container">
                {buttonsData.map((button) => (
                    <button
                        key={button.id}
                        className={`button ${
                            activeTab === button.id ? "button-active" : ""
                        }`}
                        onClick={() => handleClick(button.id)}
                    >
                        {button.lableName}
                    </button>
                ))}
            </div>
            {memoizedCardList}
        </div>
    );
};

export default CardSearchList;