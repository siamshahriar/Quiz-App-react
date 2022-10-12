import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blogContainer'>
            <div className='eachBlogQuestion'>
            <p className='blogQues'>What is the purpose of React Router?</p>    
            <p className='blogAns'>React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>    
            </div>
            <div className='eachBlogQuestion'>
            <p className='blogQues'>How Context Api works?</p>    
            <p className='blogAns'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>    
            </div>
            <div className='eachBlogQuestion'>
            <p className='blogQues'>What is the usage of useRef in React</p>    
            <p className='blogAns'>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>    
            </div>
        </div>
    );
};

export default Blog;