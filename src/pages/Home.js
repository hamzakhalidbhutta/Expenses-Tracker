import React from 'react';
import Header from "./../components/Header";
import Balance from "./../components/Balance";
import Expenditure from '../components/Expenditure';
import TransectionsList from '../components/TransectionsList';
import TransectionForm from '../components/Transectionform';
const Home = () => {
    return (
        <div className="homeContainer">
            <Header />
            <Balance />
            <Expenditure />
            <TransectionsList />   
            <TransectionForm />     
        </div>
    )
}

export default Home
