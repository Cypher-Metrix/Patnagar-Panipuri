import React, { useState } from 'react'

export default function CounterCard({ counter, index }) {

    const { title, description, icon: Icon, color } = counter;

    return (
        <div className="w-full" key={index}>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <div className='counter-icon h-8 w-8 lg:h-12 lg:w-12'>
                    {Icon && <Icon className={`w-full h-full ${color}`} />}
                </div>
                {(title.trim() !== "" || description.trim() !== "") &&
                    <div className='counter-description flex flex-col items-center justify-center gap-2.5'>
                        <p className={`m-0 text-2xl lg:text-4xl font-semibold text-gray-700`}>{title}</p>
                        <span className='m-0 text-sm lg:text-base font-medium text-slate-400'>{description}</span>
                    </div>
                }
            </div>
        </div>
    )
}
