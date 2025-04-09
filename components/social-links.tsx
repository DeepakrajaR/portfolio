import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { SiKaggle } from "react-icons/si"

export function SocialLinks() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-6">
      {/* Email contact */}
      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <Mail className="h-5 w-5" />
        <span>rajendran.d@northeastern.edu</span>
      </div>

      {/* Social media links */}
      <div className="flex items-center space-x-6">
        <Link
          href="https://github.com/deepakrajaR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
          aria-label="GitHub Profile"
        >
          <Github className="h-6 w-6" />
        </Link>
        <Link
          href="https://linkedin.com/in/deepakraja-rajendran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.kaggle.com/deepakrajar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
          aria-label="Kaggle Profile"
        >
          <SiKaggle className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

// Add default export that references the named export
export default SocialLinks
