'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Timeline from './timline'
import Timeline2 from './timeline2'

export default function SafetyEcosystemSection() {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Centered Title + Description */}
                <div
                    ref={sectionRef}
                    className={`
            text-center transition-all duration-1000 ease-out
            ${visible
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-12 scale-95'}
          `}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold font-heading text-black mb-4">
                        A Complete Safety Ecosystem
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                        Platform connecting tourists, law enforcement, and emergency services for safer travel.
                    </p>
                </div>

                {/* Image + Right-Aligned Text */}
                <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-4">

                    {/* Left: Smaller Image */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/use.png"
                            width={140}
                            height={140}
                            alt="Tourist Safety Illustration"
                            className="rounded-xl shadow-lg mt-[-27px]"
                        />
                    </div>

                    {/* Right: Text */}
                    <div    
                        className={`
    flex-1 text-left transition-all duration-1000 ease-out
    transform
    ${visible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'}
  `}
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-[27px] font-bold font-heading italic text-blue-500">
                            You&#39;ll figure it out.<br />
                            We&#39;ll show you how.
                        </h2>
                    </div>


                </div>
                <Timeline />
                <Timeline2 />
            </div>
        </section>
    )
}
