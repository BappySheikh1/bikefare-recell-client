import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-black text-white rounded-lg my-3'>
                <div className='w-1/2 mx-auto p-3 color-change'>
                   <h3 className='text-3xl font-semibold'>Question-1: What are the different ways to manage a state in a React application?</h3>
                   <p className='text-lg'>Ans: Managing state in your React apps isn’t as simple as using useState or useReducer, The Four Kinds of React State to Manage When we talk about state in our applications, it’s important to be clear about what types of state actually matter. <br />
                   There are four main types of state you need to properly manage in your React apps:
                   <br />
                   1. Local state
            
                   <br />
                   2. Global state
            
                   <br />
                   3. Server state
            
                   <br />
                   4. URL state
            

                   </p>
                </div>
            </div>

            <div className='bg-black text-white rounded-lg my-3'>
                <div className='w-1/2 mx-auto p-3 color-change'>
                   <h3 className='text-3xl font-semibold'>Question-2: How does prototypical inheritance work?</h3>
                   <p className='text-lg'>Ans: Every object with its methods and properties contains an internal and hidden property known as (Prototype). The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the (Prototype) of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto.

                   </p>
                </div>
            </div>

            <div className='bg-black text-white rounded-lg my-3'>
                <div className='w-1/2 mx-auto p-3 color-change'>
                   <h3 className='text-3xl font-semibold'>Question-3: What is a unit test? Why should we write unit tests?</h3>
                   <p className='text-lg'>Ans: Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. 
                   <br />
                   <br />
                   They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.


                   </p>
                </div>
            </div>
           
            <div className='bg-black text-white rounded-lg my-3'>
                <div className='w-1/2 mx-auto p-3 color-change'>
                   <h3 className='text-3xl font-semibold'>Question-4:  React vs. Angular vs. Vue?</h3>
                   <p className='text-lg'>Ans: React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website. 
                   <br />
                   Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                   <br />
                   Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.

                   </p>
                </div>
            </div>
           
        </div>
    );
};

export default Blogs;