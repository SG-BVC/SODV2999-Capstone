import React from "react";
import { Sparkles } from 'lucide-react';

const MentalHealthResourcesCoping: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Coping with Suicidal Thoughts
                    </span>
                </h1>

                <div className="mt-6 space-y-6 text-gray-700">
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
                        <p className="leading-relaxed">
                            Suicidal thoughts can feel overwhelming, but help and practical strategies are available. If you are in immediate danger, call 911 or go to your nearest Emergency Room. The guidance below is adapted from The LifeLine Canada and is intended to provide practical steps and resources.
                        </p>

                        <a
                            href="https://thelifelinecanada.ca/wp-content/uploads/2016/09/Coping-With-Suicidal-Thoughts.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-purple-700 font-medium underline"
                        >
                            Download the full PDF (The LifeLine Canada)
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-white/60 backdrop-blur-sm p-5 rounded-lg shadow transition-shadow hover:shadow-2xl">
                            <h2 className="text-lg font-semibold">Immediate actions</h2>
                            <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-gray-700">
                                <li>Tell someone you trust — don't be alone if you fear acting.</li>
                                <li>Call your local crisis line for immediate support and referrals.</li>
                                <li>Remove means of self-harm from your environment if possible.</li>
                                <li>Go to the Emergency Room or call 911 if you are at imminent risk.</li>
                                <li>Create and keep a visible safety plan with step-by-step actions.</li>
                            </ul>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm p-5 rounded-lg shadow">
                            <h2 className="text-lg font-semibold">Safety plan (example)</h2>
                            <ol className="list-decimal ml-6 mt-3 space-y-1 text-sm text-gray-700">
                                <li>Remind myself of my reasons for living.</li>
                                <li>Call a friend or family member.</li>
                                <li>Call a backup person if the first person is unavailable.</li>
                                <li>Call my care provider (psychologist, psychiatrist, therapist).</li>
                                <li>Call my local crisis line.</li>
                                <li>Go somewhere I am safe.</li>
                                <li>Go to the Emergency Room at the nearest hospital.</li>
                                <li>If I can’t get to hospital safely, call 911 and request transport.</li>
                            </ol>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm p-5 rounded-lg shadow">
                            <h2 className="text-lg font-semibold">Coping strategies</h2>
                            <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-gray-700">
                                <li>Problem-solve immediate issues by listing problems and small solutions.</li>
                                <li>Think of reasons for living and write them down to refer to when low.</li>
                                <li>Remember what has helped you in the past (support, activities, therapy).</li>
                                <li>Seek treatment for depression, anxiety, or substance issues — ask for referrals.</li>
                                <li>Do the opposite of urges (e.g., reach out instead of isolating).</li>
                                <li>Talk openly with someone you trust about your thoughts and plans.</li>
                            </ul>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm p-5 rounded-lg shadow">
                            <h2 className="text-lg font-semibold">Self-care & follow-up</h2>
                            <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-gray-700">
                                <li>Maintain sleep, regular meals, and daily activity or exercise.</li>
                                <li>Follow prescribed medications and discuss concerns with your doctor.</li>
                                <li>Keep a regular routine and plan small, achievable activities.</li>
                                <li>Identify triggers and avoid high-risk situations where possible.</li>
                                <li>Consider personal goals and small steps toward them (hobby, volunteering).</li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600">
                        Source: The LifeLine Canada — "Coping with Suicidal Thoughts". Visit{' '}
                        <a
                            href="https://thelifelinecanada.ca/coping-with-suicidal-thoughts/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-700 underline ml-1"
                        >
                            thelifelinecanada.ca
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesCoping;