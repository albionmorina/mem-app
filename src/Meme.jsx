import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <div>
                    <label>Top Text</label>
                        <input 
                            type="text"
                            className="form-input" 
                            placeholder="Shut up"
                        />
                    
                </div>
                <div>
                    <label>Bottom Text</label>
                    <input
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                        />
                    
                </div>
                <button className="form--button">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}