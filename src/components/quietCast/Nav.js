import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons"

const Nav = ({libraryStatus, setLibraryStatus }) => {
    return (
        <div className='container'>
        <nav>
            <h1>Quiet Cast: Mixes & interviews from our favorite artists</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)} className={`${libraryStatus ? "display" : ""}`}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
        </div>
    );
}

export default Nav;