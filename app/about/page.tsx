import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gradient-radial-complex bg-fixed min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div
          className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-12
                       border border-blue-500/20 shadow-glow"
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-white text-center
                         drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]"
          >
            About AI Mentorship
          </h1>
          <p className="mt-6 text-xl text-blue-100/90 text-center max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of AI practitioners through
            personalized mentorship and industry connections.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                         border border-blue-500/20 hover:border-blue-500/40
                         transform hover:-translate-y-1 transition-all duration-300
                         shadow-glow hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
          >
            <h2
              className="text-3xl font-bold text-white mb-4
                          drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]"
            >
              Our Mission
            </h2>
            <p className="text-blue-100/80 leading-relaxed">
              We believe in democratizing AI education by connecting aspiring
              practitioners with industry experts. Our platform bridges the gap
              between theoretical knowledge and practical application through
              personalized mentorship.
            </p>
          </div>

          <div
            className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                         border border-blue-500/20 hover:border-blue-500/40
                         transform hover:-translate-y-1 transition-all duration-300
                         shadow-glow hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
          >
            <h2
              className="text-3xl font-bold text-white mb-4
                          drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]"
            >
              Our Vision
            </h2>
            <p className="text-blue-100/80 leading-relaxed">
              To create a global community where AI knowledge flows freely,
              innovation thrives, and every aspiring AI practitioner has the
              support they need to succeed in their journey.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div
          className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-12
                       border border-blue-500/20 shadow-glow"
        >
          <h2
            className="text-3xl font-bold text-white mb-8 text-center
                         drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]"
          >
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Mentorship",
                description:
                  "Connect with industry professionals who have real-world experience in AI and machine learning.",
                icon: "🎯",
              },
              {
                title: "Personalized Learning",
                description:
                  "Get customized guidance tailored to your specific goals and learning pace.",
                icon: "📚",
              },
              {
                title: "Industry Connections",
                description:
                  "Build valuable relationships within the AI community and access career opportunities.",
                icon: "🤝",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-blue-500/5 backdrop-blur-sm rounded-xl p-6
                             border border-blue-500/10 hover:border-blue-500/30
                             transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-100/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "500+", label: "Active Mentors" },
            { number: "10,000+", label: "Students Mentored" },
            { number: "95%", label: "Success Rate" },
            { number: "50+", label: "Partner Companies" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-md rounded-xl p-6 text-center
                           border border-blue-500/20 hover:border-blue-500/40
                           transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div
          className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center
                       border border-blue-500/20 shadow-glow"
        >
          <h2
            className="text-3xl font-bold text-white mb-4
                         drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]"
          >
            Join Our Community
          </h2>
          <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto">
            Whether you&spos;re looking to learn or share your expertise,
            there&apos;s a place for you in our growing community of AI
            enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                            bg-white text-blue-950 font-semibold hover:bg-blue-50
                            transform hover:-translate-y-1 transition-all duration-300
                            shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            >
              Get Started
            </Link>
            <Link
              href="/top-mentors"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                            border border-blue-400/30 text-blue-100 
                            hover:bg-blue-500/10 hover:border-blue-400/50
                            transform hover:-translate-y-1 transition-all duration-300"
            >
              Meet Our Mentors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
