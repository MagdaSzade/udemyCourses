import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui cointainer comments">
            <CommentDetail 
                author="Sam"  
                imgSrc={faker.image.avatar()} 
                time="Today 6PM" text="Nice blog"
            />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));