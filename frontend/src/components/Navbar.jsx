import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bell, User } from "lucide-react" // For icons

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/logo.png" 
              alt="ALPS Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Toggle Navigation */}
          <ToggleGroup type="single" defaultValue="home" className="bg-gray-100 rounded-full p-2 w-64 flex">
            <ToggleGroupItem value="home" className="rounded-full data-[state=on]:bg-slate-800 data-[state=on]:text-white flex-1 text-center" style={{borderRadius: '24px'}}>
              Dashboard
            </ToggleGroupItem>
            <ToggleGroupItem value="learn" className="rounded-full data-[state=on]:bg-slate-800 data-[state=on]:text-white flex-1 text-center" style={{borderRadius: '24px'}}>
              Courses
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          <div className="bg-slate-800 rounded-full p-2">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar