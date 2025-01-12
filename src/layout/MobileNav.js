import { useState } from 'react'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-20 p-2 bg-[#1B998B] rounded-md"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-10 bg-[#2D3047] bg-opacity-90">
          <nav className="flex items-center justify-center h-full">
            <ul className="space-y-8 text-center">
              {['About', 'Experience', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                  <div
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl text-white hover:text-[#FFFD82] transition-colors"
                    onClick={toggleMenu}
                  >
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNav

