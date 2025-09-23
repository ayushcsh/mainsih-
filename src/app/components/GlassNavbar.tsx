"use client"

import { useState } from "react"
import Image from "next/image"
import { Home, User, Briefcase, Mail } from "lucide-react"

const GlassyNavbar = () => {
  const [activeItem, setActiveItem] = useState("Home")

  const navItems = [
    { name: "Home", icon: Home },
    { name: "About", icon: User },
    { name: "Services", icon: Briefcase },
    { name: "Contact", icon: Mail },
  ]

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "50px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
    padding: "8px",
  } as const

  const commonBtn =
    "relative group px-6 py-3 rounded-full transition-all duration-500 ease-out text-sm font-medium text-gray-700 hover:text-blue-800"

  return (
    <>
      {/* ---------- Left Logo + Title ---------- */}
      <div className="fixed top-6 left-8 z-50 flex items-center space-x-4">
        <Image
          src="/images/logo.png"
          alt="Next.js Logo"
          width={80}
          height={37}
          priority
        />
        <h1 className="pt-3 pr-10 text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent translate-x-[-20.5px]">
          MUSAFIR
        </h1>
      </div>

      {/* ---------- Center Glassy Nav ---------- */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="relative" style={glassStyle}>
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = activeItem === item.name
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className="relative group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-500 ease-out"
                  style={{
                    background: isActive ? "rgba(59,130,246,0.25)" : "transparent",
                    color: isActive ? "#1e40af" : "#374151",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    boxShadow: isActive
                      ? "0 6px 25px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.9)"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(59,130,246,0.15)"
                      e.currentTarget.style.transform = "scale(1.05)"
                      e.currentTarget.style.color = "#1e40af"
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(59,130,246,0.2)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent"
                      e.currentTarget.style.transform = "scale(1)"
                      e.currentTarget.style.color = "#374151"
                      e.currentTarget.style.boxShadow = "none"
                    }
                  }}
                >
                  <IconComponent
                    size={18}
                    className="transition-all duration-500"
                    style={{
                      filter: isActive ? "drop-shadow(0 0 12px rgba(59,130,246,0.7))" : "none",
                    }}
                  />
                  <span
                    className="transition-all duration-500"
                    style={{
                      textShadow: isActive ? "0 0 15px rgba(59,130,246,0.5)" : "none",
                    }}
                  >
                    {item.name}
                  </span>
                </button>
              )
            })}
          </div>
        </nav>
      </div>

      {/* ---------- Right Buttons ---------- */}
      <div className="fixed top-10.5 right-8 z-50 flex space-x-3">
        <button
          className={commonBtn}
          style={{
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(59,130,246,0.2)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "50px",
          }}
        >
          Download App
        </button>
        <button
          className={commonBtn}
          style={{
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(59,130,246,0.2)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "50px",
          }}
        >
          Authorities Login
        </button>
      </div>

      <style jsx>{`
        nav::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);
          border-radius: 50px;
          pointer-events: none;
        }
        nav::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, rgba(59,130,246,0.15), rgba(59,130,246,0.08), rgba(59,130,246,0.15));
          border-radius: 52px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        nav:hover::after {
          opacity: 1;
        }
      `}</style>
    </>
  )
}

export default GlassyNavbar
