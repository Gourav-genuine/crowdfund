import React from 'react'

const Backed = () => {
    return (
        <>
            <section className="lg:w-2/3 lg:mx-auto border-2 rounded-lg bg-white mt-10 mx-5 px-5 py-10 flex-col text-center  items-center justify-center">
                <div className="md:flex md:justify-between md:mx-2">
                    <p className=" border-b border-gray-200 pb-3 md:mt-5 "><span className="font-bold text-4xl">$89,914</span><br/> of $100,000 backed</p>
                    <p className=" border-b border-gray-200 pb-3 mt-5 "><span className="font-bold text-4xl">5,007</span><br/> total backers</p>
                    <p className=" border-b border-gray-200 pb-3 mt-5 "><span className="font-bold text-4xl">56</span><br/>days left</p>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full">
                    <p className="btn py-2 rounded-full w-9/12"></p>
                </div>
            </section>
        </>
    )
}

export default Backed
