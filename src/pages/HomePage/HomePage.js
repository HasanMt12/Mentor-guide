import React from 'react'
import Hero from './Hero';
import Section from './Section';
import MainFeature from './MainFeture.js/MainFeature';
import './HomePage.css'
import AvailableFeature from './AvailableFeature';
import useTitle from './useTitle';
import BlogSection from './BlogSection';
const homePage = () =>{
    // useTitle('Mentor Hub Global')
    return (
        <div className='my-10'>
        <Hero></Hero>
        <Section></Section>
        <MainFeature></MainFeature>
        <BlogSection></BlogSection>
        </div>
    )
}
export default homePage;