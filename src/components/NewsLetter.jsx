import React, { useState } from 'react'
import { NewsLetterData } from '../assets/data'
import IntroText from './shared/_IntroText'
import { FiLoader } from 'react-icons/fi'
import toast from 'react-hot-toast'

export default function NewsLetter() {
    const { settings, intoTextContent, backgroundImage } = NewsLetterData

    const [email, setEmail] = useState('')
    const [validationError, setValidationError] = useState('')
    const [loading, setLoading] = useState(false)

    const isValidEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    }

    const handleChange = (e) => {
        const value = e.target.value
        setEmail(value)

        if (!value) {
            setValidationError('Email is required')
        } else if (!isValidEmail(value)) {
            setValidationError('Please enter a valid email address')
        } else {
            setValidationError('')
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || validationError) {
            toast.error(validationError || 'Invalid email')
            return
        }

        setLoading(true)

        try {
            const formData = new FormData()
            formData.append('email', email)

            const response = await fetch(import.meta.env.VITE_WEBAPP_URL, {
                method: 'POST',
                body: formData,
            })

            const result = await response.json()

            if (result.success) {
                setEmail('')
                toast.success('Thanks for subscribing!')
            } else if (result.duplicate) {
                toast.error('This email is already subscribed.')
            } else {
                toast.error('Failed to subscribe. Please try again.')
            }
        } catch (err) {
            toast.error('Network error. Please try again.', err.message);
        } finally {
            setLoading(false)
        }
    }

    const isFormValid = email && !validationError

    return (
        <section
            className="newsletter-section relative"
            id="newsletter"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className='inset absolute left-0 top-0 bottom-0 right-0 bg-black/50' />
            <div className="inner-wrap">
                <div className="container relative">
                    <IntroText
                        settings={settings}
                        intoTextContent={intoTextContent}
                    />

                    <div className="w-full mt-8 lg:mt-12">
                        <div className="w-full lg:w-7/12">
                            <form
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col lg:flex-row items-start gap-2.5"
                                noValidate
                            >
                                <div className="w-full flex-1">
                                    <div className={`bg-white h-10 lg:h-12 rounded-sm flex items-center justify-start ${validationError
                                        ? 'border border-red-500'
                                        : 'border border-transparent'
                                        }`}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className={`w-full bg-transparent border-none px-4 outline-none text-sm lg:text-base`}
                                        />
                                    </div>

                                    {validationError && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {validationError}
                                        </p>
                                    )}
                                </div>

                                <div className="buttons-group mt-0">
                                    <button
                                        type="submit"
                                        disabled={!isFormValid || loading}
                                        className={`btn button-primary flex items-center justify-center gap-1.5 h-10 lg:h-12 px-5
                                            ${!isFormValid
                                                ? 'opacity-50 cursor-not-allowed'
                                                : ''
                                            }
                                        `}
                                    >
                                        Subscribe {loading && (
                                            <FiLoader className="animate-spin text-white text-sm" />
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
