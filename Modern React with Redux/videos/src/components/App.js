import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";
import config from "../config/config";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit("buildings");
    }

    onTermSubmit = async (term) => {
        const result = await youtube.get("/search", {
            params: {
                part: "snippet",
                type: "video",
                maxResults: 5,
                key: config.youTubeKey,
                q: term
            }
        });
        this.setState({ 
            videos: result.data.items, 
            selectedVideo: result.data.items[0] 
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container"> 
                <SearchBar onSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos}   onVideoSelect=    {this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;