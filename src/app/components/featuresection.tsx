'use client'
import { Shield, MapPin, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
const features = [
  {
    icon: Shield,
    title: "Real-time Protection",
    description:
      "Instant alerts and emergency response coordination to keep tourists safe in unfamiliar environments.",
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    description:
      "Advanced GPS monitoring with geofencing capabilities for enhanced situational awareness.",
  },
  {
    icon: Phone,
    title: "Emergency Response",
    description:
      "Direct communication channels between tourists and local law enforcement agencies.",
  },
]

export default function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const [titleVisible, setTitleVisible] = useState(false)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Title observer
    const titleObserver = new IntersectionObserver(
      ([entry]) => setTitleVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (titleRef.current) titleObserver.observe(titleRef.current)

    // Card observers
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleCards(prev => {
            const newState = [...prev]
            newState[index] = entry.isIntersecting
            return newState
          })
        },
        { threshold: 0.2, rootMargin: "-50px 0px -50px 0px" }
      )
      observer.observe(card)
      return observer
    })

    return () => {
      titleObserver.disconnect()
      observers.forEach(obs => obs?.disconnect())
    }
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Image + Title */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16">
          
          {/* Left: Image */}
          <div className="">
            <Image
              src="/images/choose.png"
              width={100}
              height={100}
              alt="Tourist Safety Illustration"
              className="w-full max-w-lg mx-auto lg:mx-0 rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Animated Title & Description */}
          <div
            ref={titleRef}
            className={`
              flex-1 text-center lg:text-left transition-all duration-1000 ease-out mt-4
              ${titleVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'}
            `}
          >
            <h2 className="text-3xl text-gray-800 sm:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Why Choose Our{" "}
              <span className="text-blue-500">Safety Platform</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto lg:mx-0 text-lg">
              Comprehensive protection designed for modern travelers
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                ref={el => { cardRefs.current[index] = el }}
                className={`
                  group relative bg-white rounded-2xl p-8 
                  transition-all duration-700 ease-out shadow-md
                  ${visibleCards[index]
                    ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                    : 'opacity-0 translate-y-16 scale-90 rotate-1'}
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100
                `}
                style={{
                  transitionDelay: visibleCards[index]
                    ? `${index * 150}ms`
                    : `${(2 - index) * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="
                      w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center
                      transition-transform duration-300
                      group-hover:rotate-3 group-hover:scale-110
                    ">
                    <Icon className="w-8 h-8 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold font-heading text-gray-800 mb-4 transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
