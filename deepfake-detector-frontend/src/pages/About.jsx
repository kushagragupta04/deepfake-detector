import { Shield, Brain, FileVideo, CheckCircle, Users } from "lucide-react"

function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">About DeepShield</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Protecting truth in the age of synthetic media
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            Our Technology
          </h2>
          <div className="bg-gray-800 rounded-xl shadow-md p-8 mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <Brain className="mr-2 h-6 w-6" />
              Advanced CNN-Based Detection
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              DeepShield employs state-of-the-art Convolutional Neural Networks (CNNs) to analyze video frames at a
              granular level. Our proprietary algorithms can detect subtle inconsistencies in facial movements,
              lighting, and texture patterns that are imperceptible to the human eye.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border border-gray-700 rounded-lg p-5 hover:shadow-lg transition-shadow bg-gray-900">
                <h4 className="font-medium text-gray-200 mb-2">Frame-by-Frame Analysis</h4>
                <p className="text-gray-400">
                  Our system examines temporal consistency across video frames, identifying unnatural transitions that
                  indicate manipulation.
                </p>
              </div>
              <div className="border border-gray-700 rounded-lg p-5 hover:shadow-lg transition-shadow bg-gray-900">
                <h4 className="font-medium text-gray-200 mb-2">Facial Biometric Verification</h4>
                <p className="text-gray-400">
                  We analyze over 68 facial landmark points to detect inconsistencies in expressions and movements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all">
              <div className="text-blue-400 mb-4">
                <FileVideo className="h-10 w-10" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Media Organizations</h3>
              <p className="text-gray-400">
                Helping journalists verify the authenticity of video content before publication.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all">
              <div className="text-blue-400 mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Content Platforms</h3>
              <p className="text-gray-400">
                Enabling social media and content platforms to filter out manipulated videos.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all">
              <div className="text-blue-400 mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Individuals</h3>
              <p className="text-gray-400">
                Providing tools for anyone to verify the authenticity of video content they encounter.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            In an era where AI-generated deepfakes are becoming increasingly sophisticated, DeepShield stands as a
            crucial line of defense against misinformation. We are committed to developing accessible tools that empower
            users to distinguish between authentic and manipulated media, preserving trust in digital communication.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-gray-400">Real-time analysis with results in seconds</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-gray-400">High accuracy rate exceeding 95%</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-gray-400">Continuous model improvement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;