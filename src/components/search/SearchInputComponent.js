import React, { useState, useRef, useEffect } from 'react'

var LINK_NAME = 'links_url'
const SearchInputComponent = () => {
    // localStorage.setItem([]);
    const [data, setData] = useState("")
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const links = useRef([]);
    links.current = JSON.parse(localStorage.getItem(LINK_NAME))

    async function getData() {
        if (url.length > 0) {
            setLoading(true);
            let data = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(data => data.json()).catch((err) => err);
            // console.log(data);

            if (data.result) {
                if (localStorage.getItem(LINK_NAME) !== null) {
                    let dataList = JSON.parse(localStorage.getItem(LINK_NAME)) || [];
                    dataList.push({ short_link: data.result.short_link, original_link: data.result.original_link })
                    localStorage.setItem(LINK_NAME, JSON.stringify(dataList));
                }
                else {
                    let dataList = [];
                    dataList.push({ short_link: data.result.short_link, original_link: data.result.original_link })
                    localStorage.setItem(LINK_NAME, JSON.stringify(dataList))
                }
            }

            setData(data);
            setLoading(false);
            setUrl("");
        }
        else {
            document.querySelector('.Form-Container .input-container').style.setProperty('--placeholder-color', 'hsl(0, 87%, 67%)');
            document.querySelector('.Form-Container .input-container input').style.border = '6px solid red';
            document.querySelector('.Form-Container .input-container p').style.display = 'block';
        }
    }

    function handleUrlChange(e) {
        setUrl(e.target.value);
    }

    function handleClipboardCopy(index) {
        navigator.clipboard
            .writeText(document.getElementById('link' + index).textContent)
            .then(
                success => console.log("text copied"),
                err => console.log("error copying text")
            );
    }

    function handleCopyAnim(event) {
        event.currentTarget.style.backgroundColor = 'hsl(257, 27%, 26%)';
        event.currentTarget.textContent = 'Copied!';
    }

    useEffect(() => {
    }, [])

    return (
        <div className='SEARCH-INPUT'>
            <div className='Form-Container' >
                <form onSubmit={e => e.preventDefault()}>
                    <div className="input-container">
                        <input onChange={e => {
                            handleUrlChange(e);
                            document.querySelector('.Form-Container form .input-container').style.setProperty('--placeholder-color', 'hsl(257, 7%, 63%)');
                            document.querySelector('.Form-Container .input-container input').style.border = 'none';
                            document.querySelector('.Form-Container .input-container p').style.display = 'none';
                        }} value={url} id='url' type="text" placeholder='Shorten a link here...' />
                        <p>Please enter a url!</p>
                    </div>
                    <button className='button-clicked' onClick={getData} type="submit">Shorten It!</button>
                </form>
            </div>
            <div className='Search-Results-Container'>{loading ? <p>Shortening url...</p> :
                links.current !== null ?
                    links.current.map((item, idx) => {
                        return <div className='Result-Container' key={idx}>
                            <p className='Orig-Link'>{item.original_link}</p>
                            <div>
                                <p className='Result' id={"link" + idx}>
                                    {item.short_link}
                                </p>
                                <button className='Copy-Result-Button button-clicked' onClick={(e) => { handleClipboardCopy(idx); handleCopyAnim(e) }}>Copy</button>
                            </div>
                        </div>
                    }) : data?.error}
            </div>
        </div>
    )
}

export default SearchInputComponent