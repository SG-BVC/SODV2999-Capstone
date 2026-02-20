import React from "react";
import { Sparkles } from "lucide-react";

const MentalHealthResourcesWarningSigns: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            Warning Signs
          </span>
        </h1>

        <div className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
          <p className="leading-relaxed">
            What leads to suicide? There is no single cause for suicide. Suicide
            most often occurs when stressors exceed current coping abilities of
            someone suffering from a mental health condition. Depression is the
            most common condition associated with suicide, and it is often
            undiagnosed or untreated.
          </p>

          <p className="mt-4 leading-relaxed">
            Conditions like depression, anxiety and substance problems, especially
            when unaddressed, increase risk for suicide. Yet it's important to
            note that most people who actively manage their mental health
            conditions lead fulfilling lives.
          </p>
        </div>

        <div className="mt-6 bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50 text-gray-700">
          <h2 className="text-2xl font-bold">Suicide Warning Signs</h2>

          <p className="mt-3 leading-relaxed">
            Something to look out for when concerned that a person may be
            suicidal is a change in behavior or the presence of entirely new
            behaviors. This is of sharpest concern if the new or changed behavior
            is related to a painful event, loss, or change. Most people who take
            their lives exhibit one or more warning signs, either through what
            they say or what they do.
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">If a person talks about:</h3>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-base text-gray-700">
              <li>Being a burden to others</li>
              <li>Feeling trapped</li>
              <li>Experiencing unbearable pain</li>
              <li>Having no reason to live</li>
              <li>Killing themselves</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Specific things to look out for include:</h3>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-base text-gray-700">
              <li>Increased use of alcohol or drugs</li>
              <li>Looking for means, such as searching online for materials</li>
              <li>Acting recklessly</li>
              <li>Withdrawing from activities</li>
              <li>Isolating from family and friends</li>
              <li>Sleeping too much or too little</li>
              <li>Visiting/calling people to say goodbye</li>
              <li>Giving away prized possessions</li>
              <li>Aggression</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Those in crisis often display one or more of the following moods:</h3>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-base text-gray-700">
              <li>Depression</li>
              <li>Loss of interest</li>
              <li>Rage</li>
              <li>Irritability</li>
              <li>Humiliation</li>
              <li>Anxiety</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50 text-gray-700">
          <h2 className="text-2xl font-bold">Suicide Risk Factors</h2>

          <p className="mt-3 leading-relaxed">
            Risk factors are characteristics or conditions that increase the
            chance that a person may try to take their life.
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Health Factors</h3>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-base text-gray-700">
              <li>Mental health conditions</li>
              <li>Depression</li>
              <li>Bipolar (manic-depressive) disorder</li>
              <li>Schizophrenia</li>
              <li>Borderline/antisocial personality disorder</li>
              <li>Conduct disorder</li>
              <li>Psychotic disorders/symptoms</li>
              <li>Anxiety disorders</li>
              <li>Substance abuse disorders</li>
              <li>Serious or chronic health condition/pain</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Environmental Factors</h3>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-base text-gray-700">
              <li>Stressful life events which may include a death, divorce, or job loss</li>
              <li>Prolonged stress factors which may include harassment, bullying, relationship problems, and unemployment</li>
              <li>Access to lethal means including firearms and drugs</li>
              <li>Exposure to another person's suicide, or to graphic or sensationalized accounts of suicide</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Historical Factors</h3>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-base text-gray-700">
              <li>Previous suicide attempts</li>
              <li>Family history of suicide attempt</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 py-12 rounded-xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-center">
          <p className="max-w-3xl mx-auto text-center text-lg text-gray-800 mb-4">
            For further helpful information see our <a href="/resources/how-to-help" className="text-purple-700 font-medium underline">How Can I Help Someone</a> and other resources on our <a href="/resources" className="text-purple-700 font-medium underline">Resources page</a>.
          </p>

          <p className="max-w-3xl mx-auto text-center italic text-xl font-semibold text-red-600 mb-6">
            If you, or someone you know is in crisis, call 911 immediately!
          </p>

          <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-6">
            See our directory of mental health crisis support in your area
          </p>

          <div>
            <a
              href="/crisis-lines"
              style={{ color: '#ffffff' }}
              className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-[1.02] transform transition"
            >
              CRISIS LINES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthResourcesWarningSigns;