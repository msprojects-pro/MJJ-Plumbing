import { 
  Phone, 
  Wrench, 
  Droplets, 
  Bath, 
  Activity, 
  Home, 
  Clock, 
  ShieldCheck, 
  ThumbsUp, 
  MapPin, 
  Mail,
  Star,
  Menu,
  X
} from "lucide-react";
import React, { useState } from "react";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen font-sans bg-white text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 md:px-10 py-5 flex justify-between items-center shrink-0">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative h-12 px-3 bg-gradient-to-b from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30 ring-1 ring-white/30 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,white_45%,transparent_65%)] opacity-20"></div>
              <span className="relative text-white font-black text-2xl italic tracking-wider pr-1 drop-shadow-md">MJJ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-blue-900">MJJ Plumbing</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold hidden sm:block">Home Improvements</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-900 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-blue-900 transition-colors">Why Choose Us</a>
            <a href="#reviews" className="hover:text-blue-900 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:07568338563" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shrink-0 shadow-md shadow-blue-200">
              07568 338563
            </a>
          </div>
          <button 
            className="md:hidden p-2 -mr-2 text-slate-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4 shadow-lg absolute w-full z-40">
          <a href="#services" className="block text-slate-600 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#why-us" className="block text-slate-600 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Why Choose Us</a>
          <a href="#reviews" className="block text-slate-600 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
          <a href="#contact" className="block text-slate-600 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <div className="pt-4 border-t border-slate-100">
            <a href="tel:07568338563" className="flex justify-center items-center gap-2 w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">
               <Phone className="w-4 h-4" /> 07568 338563
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-900 py-20 lg:py-32 shrink-0 flex items-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-100 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              <MapPin className="w-3.5 h-3.5" /> Serving Cambuslang & Glasgow
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Glasgow's Trusted Plumber — <br className="hidden md:block"/>
              <span className="text-blue-400">20 Years Experience</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mb-10">
              Professional, reliable, and swift plumbing services. From emergency leak repairs to complete medical adaptation bathrooms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07568338563" className="inline-flex justify-center items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-950/20 hover:bg-blue-50 transition-colors shrink-0 w-max">
                Request Emergency Callout
              </a>
              <a href="#services" className="inline-flex justify-center items-center gap-2 bg-blue-800 text-white border border-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shrink-0 w-max">
                View Portfolio
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 bg-blue-800/50 backdrop-blur-sm border-l border-white/10 flex flex-col justify-center p-8 lg:p-10 space-y-6 rounded-r-none md:rounded-l-2xl md:border-l-0 md:bg-blue-800/30 lg:bg-transparent">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-blue-400/20 flex items-center justify-center text-blue-300">
                ✓
              </div>
              <div>
                <h4 className="text-white font-bold">Fast Response</h4>
                <p className="text-blue-200 text-sm">On-site within 60 minutes for emergencies.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-blue-400/20 flex items-center justify-center text-blue-300">
                ✓
              </div>
              <div>
                <h4 className="text-white font-bold">Fully Insured</h4>
                <p className="text-blue-200 text-sm">Peace of mind for all home improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-24 shrink-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">Our Expertise</h3>
            <div className="hidden md:flex flex-grow bg-slate-100 rounded-full h-1 mx-8 mb-3"></div>
            <span className="text-blue-600 font-bold uppercase text-xs tracking-widest md:mb-1">Professional Services</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Bath className="w-8 h-8"/>} 
              title="Bathroom Installations" 
              description="Complete bathroom refits and installations. From design to flawless execution, building your dream bathroom."
            />
            <ServiceCard 
              icon={<Activity className="w-8 h-8"/>} 
              title="Emergency Plumbing" 
              description="Fast, reliable emergency response for burst pipes, flooding, or sudden breakdowns to protect your property."
            />
            <ServiceCard 
              icon={<Droplets className="w-8 h-8"/>} 
              title="Leak Repairs" 
              description="Expert detection and repair of all water leaks, preventing further damage and saving you money."
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-8 h-8"/>} 
              title="Medical Adaptation Bathrooms" 
              description="Specialized, accessible bathroom installations tailored to medical needs for safety, comfort, and independence."
            />
            <ServiceCard 
              icon={<Home className="w-8 h-8"/>} 
              title="General Plumbing" 
              description="Routine maintenance, fixture replacements, and general plumbing tasks handled cleanly and professionally."
            />
            <ServiceCard 
              icon={<Wrench className="w-8 h-8"/>} 
              title="Home Improvements" 
              description="Beyond plumbing, we offer general home improvement services to enhance your living space completely."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
               <div className="flex flex-col gap-2 mb-6">
                 <span className="text-blue-600 font-bold uppercase text-xs tracking-widest">Why Choose MJJ</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Built on 20 Years of Trust & Quality</h2>
               </div>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 When you invite a tradesperson into your home, you need to know they are reliable, skilled, and respectful. We pride ourselves on delivering an exceptional standard of work on every single job.
               </p>
               
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                     <Clock className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-900 mb-1">Fast Response Time</h4>
                     <p className="text-slate-600">We aim to be with you as quickly as possible, especially in emergency situations.</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                     <ThumbsUp className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-900 mb-1">Highly Experienced</h4>
                     <p className="text-slate-600">With over two decades in the trade, there's no plumbing issue we haven't successfully resolved.</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-900 mb-1">Reliable & Professional</h4>
                     <p className="text-slate-600">We turn up when we say we will, treat your property with respect, and clean up after ourselves.</p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
               <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-blue-100">
                  <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                    {/* Placeholder for an image */}
                    <div className="text-center p-8">
                       <ShieldCheck className="w-32 h-32 text-blue-500 mx-auto opacity-50 mb-4" />
                       <p className="text-blue-800 font-bold text-2xl opacity-70">MJJ Plumbing</p>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                  <div className="absolute -top-6 -right-6 w-48 h-48 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
               </div>
               
               <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:block">
                 <div className="flex items-center gap-4 mb-2">
                   <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-400 font-bold text-xs" style={{ zIndex: 10 - i }}>
                         U{i}
                       </div>
                     ))}
                   </div>
                   <div className="text-sm">
                     <div className="flex text-amber-400">
                       <Star className="w-4 h-4 fill-current"/>
                       <Star className="w-4 h-4 fill-current"/>
                       <Star className="w-4 h-4 fill-current"/>
                       <Star className="w-4 h-4 fill-current"/>
                       <Star className="w-4 h-4 fill-current"/>
                     </div>
                     <p className="font-bold text-slate-900">5.0 Rating</p>
                   </div>
                 </div>
                 <p className="text-slate-500 text-sm">Trusted by hundreds of customers in Glasgow.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 lg:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">Customer Feedback</h3>
            <div className="hidden md:flex flex-grow bg-slate-100 rounded-full h-1 mx-8 mb-3"></div>
            <span className="text-blue-600 font-bold uppercase text-xs tracking-widest md:mb-1">Testimonials</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard 
              name="Sarah M."
              location="Cambuslang"
              text="MJJ Plumbing came out quickly when a pipe burst in our kitchen. Very professional, fixed the issue efficiently, and the price was very reasonable. Highly recommend!"
            />
            <ReviewCard 
              name="David T."
              location="Glasgow Southside"
              text="We hired them to fit a medical adaptation bathroom for my elderly mother. The care and attention to detail they showed was incredible. It's made a huge difference to her life."
            />
            <ReviewCard 
              name="Fiona R."
              location="Rutherglen"
              text="Fitted a complete new bathroom for us. Arrived on time every day, cleaned up after themselves, and the finish is absolutely perfect. 20 years of experience really shows."
            />
          </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            <div className="w-full lg:w-5/12 p-10 lg:p-16 text-white bg-blue-900 relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                 <p className="text-blue-100 mb-10 text-lg">Need a quote or emergency repair? We're ready to help.</p>
                 
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-3 rounded-full">
                       <Phone className="w-6 h-6 text-blue-300" />
                     </div>
                     <div>
                       <p className="text-sm text-blue-200 mb-1">Call Us Directly</p>
                       <a href="tel:07568338563" className="text-2xl font-bold hover:text-blue-300 transition-colors">07568 338563</a>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-3 rounded-full">
                       <MapPin className="w-6 h-6 text-blue-300" />
                     </div>
                     <div>
                       <p className="text-sm text-blue-200 mb-1">Service Area</p>
                       <p className="text-lg font-medium">Cambuslang & Greater Glasgow</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-3 rounded-full">
                       <Mail className="w-6 h-6 text-blue-300" />
                     </div>
                     <div>
                       <p className="text-sm text-blue-200 mb-1">Email Us</p>
                       <p className="text-lg font-medium">info@mjjplumbing.co.uk</p>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Decorative background shapes */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50 blur-2xl"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50 blur-2xl"></div>
            </div>
            
            <div className="w-full lg:w-7/12 bg-white p-10 lg:p-16">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
               <ContactForm />
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-slate-900 text-white p-8 lg:p-12 border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Contact Our Glasgow Office</p>
              <h4 className="text-3xl md:text-4xl font-bold">07568 338563</h4>
              <p className="text-slate-400 text-sm md:text-base">Cambuslang, Glasgow, Scotland • Open 24/7 for Emergencies</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 max-w-[300px]">
                <p className="text-sm italic text-blue-200 mb-2 leading-relaxed">
                  "MJJ transformed our old bathroom into a stunning modern suite. The level of detail and professionalism was second to none."
                </p>
                <p className="text-xs font-bold text-white">— David R., Cambuslang</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-white flex items-center gap-2">
                <div className="relative h-8 px-2 bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30 ring-1 ring-white/30 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,white_45%,transparent_65%)] opacity-20"></div>
                  <span className="relative text-white font-black text-sm italic tracking-wider pr-1 drop-shadow-sm">MJJ</span>
                </div>
                MJJ Plumbing & Home Improvements
              </span>
            </div>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <h5 className="font-bold text-lg md:text-xl text-slate-800">{title}</h5>
      <p className="text-sm md:text-base text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

function ReviewCard({ name, location, text }: { name: string, location: string, text: string }) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-4">
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-sm md:text-base text-slate-500 italic leading-relaxed flex-grow">"{text}"</p>
      <div>
        <p className="font-bold text-sm text-slate-800">{name}</p>
        <p className="text-xs text-slate-500">{location}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
        <p className="text-slate-600 mb-6">Thank you for getting in touch. We will get back to you as soon as possible.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-blue-600 font-medium hover:text-blue-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
            placeholder="07..."
          />
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Required</label>
        <select 
          id="service" 
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors bg-white"
        >
          <option>Bathroom Installation</option>
          <option>Emergency Plumbing</option>
          <option>Leak Repair</option>
          <option>Medical Adaptation</option>
          <option>General Plumbing</option>
          <option>Other Enquiry</option>
        </select>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
        <textarea 
          id="message" 
          rows={4} 
          required 
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
          placeholder="Please describe your plumbing needs..."
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg transition-colors flex justify-center items-center gap-2 disabled:opacity-70 cursor-pointer shadow-md shadow-blue-200"
      >
        {status === "submitting" ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : "Send Message"}
      </button>
    </form>
  );
}
