import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentation, Download, Paintbrush, Zap } from "lucide-react";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { FaFilePdf, FaFileWord, FaFilePowerpoint, FaFileExcel, FaMarkdown } from "react-icons/fa";
import { MdNote, MdAudiotrack } from "react-icons/md";
import { FaYoutube, FaGoogle } from "react-icons/fa";
import { Input } from "@/components/ui/input";


import { FaGoogleDrive, FaTelegramPlane, FaDropbox, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineChromeReaderMode, MdCalendarToday } from "react-icons/md";
import { SiNotion, SiMicrosoftonedrive } from "react-icons/si";

import { FaDesktop, FaShieldAlt } from "react-icons/fa"; // Desktop and Security icons



const cardData = [
  {
    image: "https://www.shutterstock.com/image-photo/ai-chat-bot-conversation-using-600nw-2325005943.jpg",
    title: "Tạo chatbot từ nhiều link khác nhau",
    content: "Từ những link web URLs, link google docs, đường dẫn file trên máy tính tạo nên một chatbot trên những dữ liệu của bạn",
  },
  {
    image: "https://genk.mediacdn.vn/2013/1378888541929.jpg",
    title: "Tổng hợp tài liệu và sửa trực tiếp trên file của bạn",
    content: "Từ những dữ liệu được cung cấp và prompt của bạn, sửa trực tiếp nội dung trên file của bạn bao gồm cả file trên máy tính lẫn file trên website",
  },
  {
    image: "https://static.scientificamerican.com/sciam/cache/file/CE2F81F9-6762-4A83-B55CD676290120FC_source.jpg?w=600",
    title: "Hệ thống đề xuất cho sản phẩm của bạn",
    content: "Đưa ra đề xuất dựa trên dữ liệu của người dùng, theo logic của bạn cung cấp",
  },

];

export default function PowerpointTemplatesLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link className="flex items-center space-x-2" to="#">
          <Presentation className="h-6 w-6" />
          <span className="font-bold text-xl">Poccom</span>
        </Link>
        <nav className="flex space-x-4 sm:space-x-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#templates"
          >
            Templates
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#pricing"
          >
            Pricing
          </Link>
        </nav>
      </header>

      <main className="flex-1 relative">

        {/* Sticker 1 */}
        <div className="absolute top-8 left-8 bg-yellow-400 text-black font-semibold rounded-full px-4 py-2 shadow-lg">
          Tạo nên trợ lí AI của bạn với chỉ 1 phút
        </div>
        
        {/* Sticker 2 */}
        <div className="absolute top-8 right-8 bg-green-500 text-white font-semibold rounded-full px-4 py-2 shadow-lg">
          Nhu cầu dùng AI nhanh cho EXE, SSG, SSB,..
        </div>


        <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              POCCOM
            </h1>
            <p className="text-xl text-muted-foreground">
              Trợ lí ảo AI tương tác trực tiếp với máy tính cá nhân, tự động hoàn thành các công việc của bạn.
              Cho phép bạn tạo Jarvis AI cho máy tính của mình.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" asChild>
                <Link to="#templates">Browse Templates</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="templates" className="bg-muted py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">  
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Những tính năng nổi bật mà chắc chắn sẽ truyền cảm hứng cho bạn
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {cardData.map((card, index) => (
                <Card key={index} className="overflow-hidden">
                  <Img
                    src={card.image}
                    alt={card.title}
                    loader={<div>Loading...</div>}
                    unloader={<div>Failed to load image</div>}
                  />
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{card.content}</p>
                    <Button className="w-full">Dùng thử ngay!</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 max-w-2xl text-center">
            {/* Title */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Tạo một trợ lí AI cho riêng bạn với tốc độ bàn thờ
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground mb-8">
              Nếu không tìm thấy tính năng phù hợp với nhu cầu của bạn, đừng ngần ngại mà hãy gõ yêu cầu vào đây để được thoả mãn nhu cầu
            </p>

            {/* Text above search bar */}
            <p className="text-sm font-medium text-gray-500 mb-2">
              Hãy ghi rõ những tính năng bạn cần, chúng tôi sẽ tạo ngay cho bạn
            </p>

            {/* Search bar */}
            <div className="flex items-center space-x-4 mb-6">
              <Input 
                type="text" 
                placeholder="Nhập nội dung của bạn..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              
              {/* Button */}
              <Button className="bg-primary text-white font-semibold px-4 py-2 rounded-lg">
                Tạo
              </Button>
            </div>

            {/* Boxed Notice Section */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 mt-8 shadow-md">
              <p className="text-base font-semibold text-gray-700">
                Để phục vụ cho các tác vụ AI nâng cao hơn hay tăng tỉ lệ chính xác thì hãy liên hệ với chúng tôi. 
                <span className="font-bold"> ĐẢM BẢO</span> những tác vụ AI đều sẽ làm được.
              </p>
              <p className="mt-4 text-sm font-medium text-gray-500">
                Thông tin liên hệ: Zalo 0978947091
              </p>
            </div>
          </div>
        </section>


        <section id="features" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Tạo trợ lý AI có thể thao tác trên máy tính làm hàng ngàn công việc khác nhau 
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center space-y-2">
                    <Paintbrush className="h-6 w-6" />
                    <span>Huấn luyện trên dữ liệu chuyên biệt của bạn - Kiểu nào cũng chơi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-center space-x-4 text-2xl">
                    <FaFilePdf title="PDF" style={{ color: "#E74C3C" }} /> {/* PDF */}
                    <FaFileWord title="Word" style={{ color: "#2A5599" }} /> {/* Word */}
                    <FaFilePowerpoint title="PowerPoint" style={{ color: "#D35400" }} /> {/* PowerPoint */}
                  </div>
                  <div className="flex justify-center space-x-4 text-2xl">
                    <FaFileExcel title="Excel" style={{ color: "#2E7D32" }} /> {/* Excel */}
                    <FaMarkdown title="Markdown" style={{ color: "#4A4A4A" }} /> {/* Markdown */}
                    <MdNote title="Note" style={{ color: "#FFB74D" }} /> {/* Note */}
                  </div>
                  <div className="flex justify-center space-x-4 text-2xl">
                    <MdAudiotrack title="Audio" style={{ color: "#1E88E5" }} /> {/* Audio */}
                    <FaYoutube title="YouTube" style={{ color: "#FF0000" }} /> {/* YouTube */}
                    <FaGoogle title="Google Site" style={{ color: "#4285F4" }} /> {/* Google */}
                  </div>
                </div>
              </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center space-y-2">
                    <Zap className="h-6 w-6" />
                    <span>Kết nối với những công cụ thịnh hành mà bạn muốn</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-center space-x-4 text-2xl">
                    <FaGoogleDrive title="Google Drive" style={{ color: "#0F9D58" }} /> {/* Google Drive */}
                    <SiNotion title="Notion" style={{ color: "#000000" }} /> {/* Notion */}
                    <MdOutlineChromeReaderMode title="Google Chrome" style={{ color: "#4285F4" }} /> {/* Google Chrome */}
                  </div>
                  <div className="flex justify-center space-x-4 text-2xl">
                    <FaTelegramPlane title="Telegram" style={{ color: "#0088CC" }} /> {/* Telegram */}
                    <FaDropbox title="Dropbox" style={{ color: "#007EE5" }} /> {/* Dropbox */}
                    <SiMicrosoftonedrive title="OneDrive" style={{ color: "#0078D4" }} /> {/* OneDrive */}
                  </div>
                  <div className="flex justify-center space-x-4 text-2xl">
                    <FaRegEnvelope title="Gmail" style={{ color: "#EA4335" }} /> {/* Gmail */}
                    <MdCalendarToday title="Google Calendar" style={{ color: "#EA4335" }} /> {/* Google Calendar */}
    
                  </div>
                </div>
              </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center space-y-2">
                    <Download className="h-6 w-6" />
                    <span>Tương tác như con người luôn</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex flex-col items-center space-y-2">
                  {/* Line 1 */}
                  <p className="text-muted-foreground">Tương tác trên giao diện máy tính</p>
                  {/* Line 2: Desktop Interaction Logo */}
                  <FaDesktop title="Desktop Interface" style={{ color: "#4A90E2", fontSize: "2rem" }} /> 
                  
                  {/* Line 3 */}
                  <p className="text-muted-foreground mt-4">Tương tác bằng liên kết bảo mật</p>
                  {/* Line 4: Secure Link Interaction Logo */}
                  <FaShieldAlt title="Secure Link" style={{ color: "#2ECC71", fontSize: "2rem" }} />
                </div>
              </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-muted py-16 md:py-24 lg:py-32 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
              Simple Pricing, Powerful Templates
            </h2>

            <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl">Basic Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$19.99</div>
                  <p className="text-muted-foreground mb-4">
                    Essential features for personal use
                  </p>
                  <hr className="border-gray-300 mb-4" />
                  <ul className="text-left space-y-2 mb-6">
                    <li>✓ Access to basic templates</li>
                    <li>✓ Standard updates</li>
                    <li>✓ Email support</li>
                    <li>✓ Personal use license</li>
                  </ul>
                  <Button className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl">Professional Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$39.99</div>
                  <p className="text-muted-foreground mb-4">
                    Advanced features for professionals
                  </p>
                  <hr className="border-gray-300 mb-4" />
                  <ul className="text-left space-y-2 mb-6">
                    <li>✓ Access to all templates</li>
                    <li>✓ Priority updates</li>
                    <li>✓ Premium email support</li>
                    <li>✓ Commercial use license</li>
                  </ul>
                  <Button className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Team Plan */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl">Team Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$79.99</div>
                  <p className="text-muted-foreground mb-4">
                    Collaborative tools for teams
                  </p>
                  <hr className="border-gray-300 mb-4" />
                  <ul className="text-left space-y-2 mb-6">
                    <li>✓ Shared access to all templates</li>
                    <li>✓ Team updates</li>
                    <li>✓ Priority support</li>
                    <li>✓ Team license</li>
                  </ul>
                  <Button className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$129.99</div>
                  <p className="text-muted-foreground mb-4">
                    Custom solutions for large organizations
                  </p>
                  <hr className="border-gray-300 mb-4" />
                  <ul className="text-left space-y-2 mb-6">
                    <li>✓ Full access to all templates</li>
                    <li>✓ Custom updates and support</li>
                    <li>✓ Dedicated account manager</li>
                    <li>✓ Enterprise license</li>
                  </ul>
                  <Button className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            © 2024 SlidesMaster. All rights reserved.
          </p>
          <nav className="flex justify-center space-x-4 sm:space-x-6">
            <Link className="text-sm hover:underline underline-offset-4" to="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" to="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
