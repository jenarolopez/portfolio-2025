

const LeftColumn = () => {
  return (
    <div className="lg:sticky lg:top-0 lg:h-screen w-full lg:w-1/3 lg:flex lg:flex-col lg:justify-between p-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <p className="text-xl mb-8">Full Stack Developer</p>
        <nav className="hidden lg:block">
          <ul className="space-y-4">
            {['About', 'Experience', 'Work', 'Contact'].map((item) => (
              <li key={item}>
                <div href={`#${item.toLowerCase()}`} className="text-[#1B998B] hover:text-[#FFFD82] transition-colors">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 lg:mt-0 hidden lg:block">
        <p className="text-sm">© 2023 Your Name. All rights reserved.</p>
      </div>
    </div>
  )
}

export default LeftColumn

