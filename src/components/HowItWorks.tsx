import { Clock, Dumbbell, Apple, Activity, MessageCircle, Heart } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: <Dumbbell className="text-blue-500 w-6 h-6" />, title: "Personal Training", text: "Burn Fat rapidly using science-based workouts. Daily 1-on-1 Exercise Feedback so you learn to train safely." },
    { icon: <Apple className="text-green-500 w-6 h-6" />, title: "Diet Plan", text: "Regular Indian Diet - No fancy foods. Calories, Protein all done for you. Learn how to eat for life." },
    { icon: <Activity className="text-yellow-500 w-6 h-6" />, title: "Plan Changes", text: "Changes to your training & diet plan are made as and when required based on your constant progress monitoring." },
    { icon: <Clock className="text-purple-500 w-6 h-6" />, title: "Progress Tracking", text: "Daily progress tracking. Regular progress assessment so you continue to make rapid progress and course adjust." },
    { icon: <MessageCircle className="text-indigo-500 w-6 h-6" />, title: "Daily Support", text: "Daily coaching support at your fingertips. Exercise correction, meal feedback, mindset priming on Telegram chat." },
    { icon: <Heart className="text-red-500 w-6 h-6" />, title: "Motivation", text: "We are just one text away anytime you face inner resistance. Monthly check-In calls to ensure everything is smooth." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">How <span className="text-blue-500">Coaching</span> Works?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to succeed, structured in a daily system that is impossible to fail.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
