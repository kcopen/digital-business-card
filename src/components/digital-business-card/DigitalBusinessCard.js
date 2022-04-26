import React from 'react'
import './DigitalBusinessCard.css'

export default function DigitalBusinessCard(){
    return (
        <div className="DBC">
            <img src="logo192.png" className="dbc--profile_picture"/>
            <table>
                <tr>
                    <td><p className="dbc--profile_name">Kyle Copenhaver</p></td>
                </tr>

                <tr>
                    <td><p className="dbc--job_title">Frontend Developer</p></td>
                </tr>

                <tr>
                    <td><button className="dbc--email">Email</button></td>
                    <td><button className="dbc--LinkedIn">LinkedIn</button></td>
                </tr>

                <tr>
                    <td>
                        <div className="dbc--about">
                            <h1>About</h1>
                            <p>
                                This is the about me paragraph. This is the about me paragraph.
                                This is the about me paragraph. This is the about me paragraph.
                                This is the about me paragraph. This is the about me paragraph.
                                This is the about me paragraph. This is the about me paragraph.
                                This is the about me paragraph. This is the about me paragraph.
                            </p>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="dbc--Interest">
                            <h1>Interest</h1>
                            <p>
                                This is the interest paragraph. This is the interest paragraph.
                                This is the interest paragraph. This is the interest paragraph.
                                This is the interest paragraph. This is the interest paragraph.
                                This is the interest paragraph. This is the interest paragraph.
                                This is the interest paragraph. This is the interest paragraph.
                            </p>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}