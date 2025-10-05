import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import LogoGrid from "@/components/LogoGrid";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-black">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400 rounded-full blur-3xl opacity-10"></div>
        </div>
        
        <div className="container relative z-10 text-center px-6">
          {/* Logo with Subtle Glow */}
          <div className="flex justify-center mb-8 group">
            <div className="relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Logo variant="crestWhite" size={80} />
            </div>
          </div>
          
          {/* Main Heading with Production-Safe Gradient */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-4">
            <span className="bg-gradient-to-r from-white to-gold-500 bg-clip-text text-transparent">
              ORION APEX
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-gold-500">
            CAPITAL
          </h2>
          
          {/* Premium Tagline */}
          <div className="mt-8 mb-6">
            <p className="text-xl md:text-3xl font-light bg-gradient-to-r from-neutral-100 to-teal-400 bg-clip-text text-transparent">
              Precision • Growth • Legacy
            </p>
          </div>
          
          {/* Enhanced Description */}
          <p className="mt-8 text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light">
            We deploy <span className="text-gold-500 font-semibold">disciplined, risk-managed strategies</span> across crypto markets 
            and digital assets—<span className="text-teal-400 font-semibold">aligning exceptional returns</span> with long-term purpose.
          </p>
          
          {/* Premium Call-to-Action Buttons */}
          <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
            <Button href="/services" className="bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Explore Strategies
            </Button>
            <Button href="/contact" variant="secondary" className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300">
              Partner With Us
            </Button>
          </div>
          
          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-gold-500 group-hover:text-gold-400 transition-colors">$50M+</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">Assets Under Management</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-teal-400 group-hover:text-teal-300 transition-colors">98.7%</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">Uptime Reliability</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-neutral-100 group-hover:text-white transition-colors">5+ Years</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">Market Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <LogoGrid />

      {/* Premium Services Section */}
      <section className="container py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-100 to-gold-500 bg-clip-text text-transparent">
            Disciplined Operator Lanes
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Two distinct verticals. One unified approach to <span className="text-gold-500">systematic wealth creation</span>.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Crypto Trading Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-75 transition-all duration-500"></div>
            <a href="/services#crypto" className="relative bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 block hover:transform hover:scale-[1.02] transition-all duration-500 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-xl">
                  <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-white group-hover:text-gold-400 transition-colors">
                    Crypto Trading
                  </h3>
                  <div className="text-gold-500 text-sm font-semibold uppercase tracking-wider">
                    High Frequency • Low Risk
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Short-term setups with <strong className="text-white">strict risk controls</strong> and volatility gates. 
                Systematic execution meets disciplined capital allocation.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  Risk-managed position sizing
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  Automated volatility gates
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  Performance tracking & analytics
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-gold-500 font-semibold group-hover:text-gold-400 transition-colors">
                  Explore Strategy →
                </span>
              </div>
            </a>
          </div>


          {/* Website Investing Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition-all duration-500"></div>
            <a href="/services#websites" className="relative bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 block hover:transform hover:scale-[1.02] transition-all duration-500 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-white group-hover:text-purple-400 transition-colors">
                    Website Investing
                  </h3>
                  <div className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                    Digital Assets • Growth Hacking
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-300 mb-6 leading-relaxed">
                <strong className="text-white">Acquire → Improve → Recycle.</strong> Operator math over hype. 
                Systematic value creation in digital properties.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Due diligence & valuation
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Growth optimization systems
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Strategic exit planning
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  Learn Process →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Premium Layout */}
      <section className="container py-20">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 via-teal-400 to-gold-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition-all duration-700"></div>
          <div className="relative bg-gradient-to-br from-navy-800/90 to-navy-900/90 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-12">
            <div className="md:flex items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
                  <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Featured Case Study</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  KPI Dashboard for Multi-Club Fitness Operator
                </h3>
                
                <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                  Transformed operational efficiency through data visualization and automated reporting systems.
                </p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center group/metric">
                    <div className="text-2xl md:text-3xl font-bold text-gold-500 group-hover/metric:text-gold-400 transition-colors">
                      +2.8pp
                    </div>
                    <div className="text-sm text-neutral-400 uppercase tracking-wider">
                      Retention Increase
                    </div>
                  </div>
                  <div className="text-center group/metric">
                    <div className="text-2xl md:text-3xl font-bold text-teal-400 group-hover/metric:text-teal-300 transition-colors">
                      6-8 hrs
                    </div>
                    <div className="text-sm text-neutral-400 uppercase tracking-wider">
                      Weekly Time Saved
                    </div>
                  </div>
                  <div className="text-center group/metric">
                    <div className="text-2xl md:text-3xl font-bold text-purple-400 group-hover/metric:text-purple-300 transition-colors">
                      100%
                    </div>
                    <div className="text-sm text-neutral-400 uppercase tracking-wider">
                      Data Accuracy
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button href="/freelance/kpi-dashboard-fitness" variant="primary">
                    Read Full Case Study
                  </Button>
                  <Button href="/freelance" variant="outline">
                    View All Work
                  </Button>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="mt-8 md:mt-0 md:w-80">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-teal-400/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-navy-700/50 to-navy-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-neutral-400">Monthly Revenue</div>
                        <div className="text-green-400 text-sm font-semibold">↗ +18.2%</div>
                      </div>
                      <div className="h-2 bg-navy-900/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-gold-500 to-teal-400 rounded-full animate-pulse" style={{width: '75%'}}></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                          <div className="text-lg font-bold text-white">$247K</div>
                          <div className="text-xs text-neutral-400">This Month</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-neutral-300">$209K</div>
                          <div className="text-xs text-neutral-400">Last Month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Insights Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-100 to-teal-400 bg-clip-text text-transparent">
            Market Insights
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Deep analysis and strategic frameworks from the front lines of <span className="text-teal-400">modern capital markets</span>.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((p, index) => (
            <div key={p.slug} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                index === 0 ? 'from-gold-500 to-yellow-500' :
                index === 1 ? 'from-teal-400 to-blue-500' :
                'from-purple-500 to-pink-500'
              } rounded-2xl blur opacity-20 group-hover:opacity-60 transition-all duration-500`}></div>
              
              <a
                href={`/insights/${p.slug}`}
                className="relative bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 block hover:transform hover:scale-[1.02] transition-all duration-500 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    index === 0 ? 'bg-gold-500/20 text-gold-500' :
                    index === 1 ? 'bg-teal-400/20 text-teal-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    {new Date(p.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
                
                <h3 className={`font-bold text-xl mb-4 group-hover:${
                  index === 0 ? 'text-gold-400' :
                  index === 1 ? 'text-teal-400' :
                  'text-purple-400'
                } transition-colors text-white`}>
                  {p.title}
                </h3>
                
                <p className="text-neutral-300 mb-6 leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className={`${
                    index === 0 ? 'text-gold-500 group-hover:text-gold-400' :
                    index === 1 ? 'text-teal-400 group-hover:text-teal-300' :
                    'text-purple-400 group-hover:text-purple-300'
                  } transition-colors`}>
                    Read Analysis
                  </span>
                  <svg className="w-4 h-4 text-current transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/insights" variant="outline" className="px-8">
            View All Insights
          </Button>
        </div>
      </section>

      {/* Premium Closing CTA */}
      <section className="container py-24">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 via-teal-400 via-purple-500 to-gold-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-all duration-1000"></div>
          <div className="relative bg-gradient-to-br from-navy-800/90 to-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,184,0,0.1),transparent_70%)]"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-6 py-3 mb-8">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-gold-500 font-bold text-sm uppercase tracking-wider">Elite Partnership</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-gold-500 to-teal-400 bg-clip-text text-transparent leading-tight">
                Ready to Align Execution with Outcomes?
              </h3>
              
              <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join the <span className="text-gold-500 font-semibold">elite operators</span> who understand that 
                <span className="text-teal-400 font-semibold"> systematic wealth creation</span> requires both 
                <span className="text-white font-semibold">disciplined strategy and flawless execution</span>.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                <Button href="/contact" variant="primary" className="px-10 py-4 text-lg font-bold">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Schedule Consultation
                </Button>
                
                <Button href="/freelance" variant="secondary" className="px-8 py-4 text-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Our Work
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div className="group cursor-pointer">
                  <div className="text-2xl md:text-3xl font-bold text-gold-500 group-hover:text-gold-400 transition-colors mb-2">
                    Confidential
                  </div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    NDA Protected Engagements
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl md:text-3xl font-bold text-teal-400 group-hover:text-teal-300 transition-colors mb-2">
                    Exclusive
                  </div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Limited Client Roster
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-neutral-200 transition-colors mb-2">
                    Results-Driven
                  </div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    Performance-Based Outcomes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
