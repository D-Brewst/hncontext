import React, { useRef, useState } from 'react';
import { searchHnApi } from '../utils/hnapi.js';
import { useHistoryContext } from '../utils/HistoryContext.js';

const Search = () => {
    const [results, setResults] = useState([]);
    const [history, setHistory] = useHistoryContext();

    const searchRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const term = searchRef.current.value.trim();
        const data = await searchHnApi(term);
        setResults(data.hits);
        if(term){
            const updatedHistory = [...history, term];
            setHistory(updatedHistory);
        }      
    }

    return (
        <div>
            <h3>Enter a search term to see related news articles.</h3>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                aria-disabled="false"
                ref={searchRef}
                placeholder="Search"
                />
                <div>
                    <button className="login__btn" type="submit">Submit</button>
                </div>
            </form>
            <p style={{display: searchRef.current && searchRef.current.value.trim() === "" ? 'block' : 'none' }}>Please enter a search term.</p>
            <div style={{display: searchRef.current && searchRef.current.value.trim() === "" ? 'none' : 'block' }}>
                <ul>
                    {results ? (
                        results.map((article) => (
                            <li style={{display: article.url && article.title ? 'block' : 'none' }} key={article.objectID}>
                                <a href={article.url}>{article.title}</a> 
                            </li>
                        ))
                    ) : (
                        <div></div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Search;