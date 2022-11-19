import React from 'react';
import "./RightContent.css"
import NavRight from '../NavRight/NavRight';
import './RightContent.scss'
import { TbArrowBarToRight } from "react-icons/tb";
import { IoAlert } from "react-icons/io5";

const RightContent = () => {
    const dummyUpdates = [
        {
            profileImg: "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
            username: "Squirtle",
            assignmentTitle: "Essay 1",
            dueDate: "03/20/2019",
            assignmentUrl: "google.com",
            actionText: "was just created and assigned.",
            alert: true
        },
        {
            profileImg: "https://img.pokemondb.net/sprites/home/normal/pikachu.png",
            username: "Squirtle",
            assignmentTitle: "Essay 2",
            dueDate: "05/11/2019",
            assignmentUrl: "google.com",
            actionText: "due date updated.",
            alert: false
        },
        {
            profileImg: "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
            username: "Squirtle",
            assignmentTitle: "Quiz",
            dueDate: "03/03/2019",
            assignmentUrl: "google.com",
            actionText: "was just created and assigned.",
            alert: true
        },
        {
            profileImg: "https://img.pokemondb.net/sprites/home/normal/pikachu.png",
            username: "Pikachu",
            assignmentTitle: "Exam",
            dueDate: "03/08/2019",
            assignmentUrl: "google.com",
            actionText: "due date updated.",
            alert: false
        },
        {
            profileImg: "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
            username: "Squirtle",
            assignmentTitle: "Essay 1",
            dueDate: "03/20/2019",
            assignmentUrl: "google.com",
            actionText: "was just created and assigned.",
            alert: false
        },
        {
            profileImg: "https://img.pokemondb.net/sprites/home/normal/pikachu.png",
            username: "Squirtle",
            assignmentTitle: "Essay 2",
            dueDate: "05/11/2019",
            assignmentUrl: "google.com",
            actionText: "due date updated.",
            alert: false
        },
        {
            profileImg: "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
            username: "Squirtle",
            assignmentTitle: "Quiz",
            dueDate: "03/03/2019",
            assignmentUrl: "google.com",
            actionText: "was just created and assigned.",
            alert: false
        },
        {
            profileImg: "https://img.pokemondb.net/sprites/home/normal/pikachu.png",
            username: "Pikachu",
            assignmentTitle: "Exam",
            dueDate: "03/08/2019",
            assignmentUrl: "google.com",
            actionText: "due date updated.",
            alert: false
        },
        
    ]

    return (
        <div className='RightContent'>
            <NavRight />
            <div className='updateContainer'>
                <div className='updateActionContainer'>
                    <span className='collapse'><TbArrowBarToRight /></span>
                    <span className='updates'>
                        <span className='alert'>2</span>
                        <span className='copy'>Updates</span>
                    </span>
                </div>
                <hr />
                <div className='updateContent'>
                    {
                        dummyUpdates.map((i) => {
                            console.log(i)
                            return (
                                <div className='notificationContainer'>
                                    <div className='contentContainer'>
                                        <div className='left'>
                                            <div className='imgContainerMain'>
                                                {i.alert && <div className='alert'><IoAlert /></div>}
                                                <div className='imgContainer'>
                                                    <img src ={i.profileImg}/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className='right'>
                                            <span className='username'>{i.username}</span>
                                            <div className='date'>{i.dueDate}</div>
                                            <div className='assignmentText'><span>{i.assignmentTitle} </span>{i.actionText}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    {/* <div className='assignmentContainer'>
                        <div className='postUserInfo'>
                            <div className='postUserLeft'>
                                <div className='postImgContainer'>
                                    <img src ="https://www.clipartmax.com/png/middle/417-4172375_haha-pokemon-female-pikachu-sprite.png"/>
                                </div>
                                <span>Username</span>
                            </div>
                            <div>03/08/2019</div>
                        </div>
                        <div className='assignmentText'>this is where the text goes</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default RightContent;