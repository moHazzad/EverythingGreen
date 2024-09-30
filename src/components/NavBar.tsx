import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import { Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from '../../public/logo.png.webp'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'SOLUTIONS', href: '#' },
    { name: 'BLOG', href: '#' },
    { name: 'CONTACT', href: '#' },
  ]

  return (
    <>
    
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
    <div className="bg-orange-500 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:contact@concinnitylimited.com" className="text-white text-sm hover:underline">
              contact@concinnitylimited.com
            </a>
            
          </div>
          <div className="flex space-x-2">
            <span className="text-white text-sm">Follow us:</span>
              <a href="#" className="text-white hover:text-black transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-white hover:text-black transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-white hover:text-black transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-white hover:text-black transition-colors">
                <Youtube size={16} />
              </a>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Concinnity Logo" width={180} />
            
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-white hover:text-orange-500 transition-colors">
                {item.name}
              </a>
            ))}
           <Button variant="outline" className="text-white border-white hover:bg-orange-500 hover:text-white transition-colors">
              TOOLS
            </Button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
            <Button variant="ghost" className="p-0 md:hidden">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black text-white">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} className="text-white hover:text-orange-500 transition-colors">
                    {item.name}
                  </a>
                ))}
                <Button variant="outline" className="text-white border-white hover:bg-orange-500 hover:text-white transition-colors">
                  TOOLS
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      
    </header>
    </>
  )
}

export default NavBar