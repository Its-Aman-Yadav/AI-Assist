import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInput(promptText);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSent();
    };

    return (
        <div className="main">
            <div className="nav">
            <p>AI Assist</p>
                <img src={assets.user} alt="" />
            </div>
            <div className="main-container">
                {!showResults ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hi Sir, </span>
                            </p>
                            <p>How Can i Help You Today?</p>
                        </div>
                        <div className="cards">
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick(
                                        "Suggest Some Place To visit in Noida"
                                    )
                                }
                            >
                                <p>Suggest Some Place To visit in Noida</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("What to do in my free time?")
                                }
                            >
                                <p>What to do in my free time? </p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("How to make paneer tikka masala")
                                }
                            >
                                <p>How to make paneer tikka masala?</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    handleCardClick(
                                        "Create a Simple landing page for a youtuber "
                                    );
                                }}
                            >
                                <p>Create a Simple landing landing page for a youtuber</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>

                        <div className="cards">
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick(
                                        "I am feeling bored"
                                    )
                                }
                            >
                                <p>I am feeling bored</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Who is Virat Kohli?")
                                }
                            >
                                <p>Who is Virat Kohli?</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("What is a LLM Model in AI?")
                                }
                            >
                                <p>What is a LLM Model in AI</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    handleCardClick(
                                        "What is 200+200*55?"
                                    );
                                }}
                            >
                                <p>What is 200+200*55?</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <form onSubmit={handleSubmit}>
                        <div className="search-box">
                            <input
                                onChange={(e) => {
                                    setInput(e.target.value);
                                }}
                                value={input}
                                type="text"
                                placeholder="Enter the Prompt Here"
                            />
                            <div>
                               
                                <button type="submit">
                                    <img src={assets.send_icon} alt="" />
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="bottom-info">
                        <p>Info may be false, use with caution</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
