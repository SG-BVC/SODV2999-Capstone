import React from "react";
import { Sparkles } from "lucide-react";

const MentalHealthResourcesPTSD: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Post Traumatic Stress Disorder
                    </span>
                </h1>

                <div className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <p className="leading-relaxed">
                        During a traumatic event, people think that their life or the lives of others are in danger. They may feel afraid or feel that they have no control over what is happening. These feelings of lack of control and fear can balloon into confusion, challenges with memory, or intense emotion.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        Combat-related PTSD has existed as long as war itself. The condition was called “soldier’s heart” in the Civil War, “shell shock” in World War I, and “Combat fatigue” in World War II. Despite the fact that the condition has been around for thousands of years, it is sometimes still difficult, or controversial, to diagnose.
                    </p>
                </div>

                <div className="mt-6 bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50 text-gray-700">
                    <h2 className="text-2xl font-bold">What is Post-Traumatic Stress Disorder?</h2>

                    <p className="mt-3 leading-relaxed">
                        Post-Traumatic Stress Disorder (PTSD) is an anxiety disorder that can occur after a person has been through a traumatic event. These events can include:
                    </p>

                    <ul className="list-disc ml-6 mt-3 space-y-1 text-base text-gray-700">
                        <li>Natural disasters</li>
                        <li>Car crashes</li>
                        <li>Sexual or physical assaults</li>
                        <li>Terrorist attacks</li>
                        <li>Combat during wartime</li>
                    </ul>

                    <h3 className="mt-6 text-xl font-semibold text-purple-700">PTSD Signs &amp; Symptoms:</h3>

                    <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
                        <li>Having recurrent nightmares</li>
                        <li>Acting or feeling as though the traumatic event were happening again, sometimes called a “flashback”</li>
                        <li>Being physically responsive, such as experiencing a surge in your heart rate or sweating, to reminders of the traumatic event</li>
                        <li>Having a difficult time falling or staying asleep</li>
                        <li>Feeling more irritable or having outbursts of anger</li>
                        <li>Feeling constantly “on guard” or like danger is lurking around every corner</li>
                        <li>Making an effort to avoid thoughts, feelings, or conversations about the traumatic event</li>
                        <li>A loss of interest in important, once positive, activities</li>
                        <li>Experiencing difficulties having positive feelings, such as happiness or love</li>
                    </ul>

                    <h3 className="mt-6 text-xl font-semibold text-purple-700">Here are some strategies to help with PTSD:</h3>

                    <ul className="list-disc ml-6 mt-3 space-y-1 text-base text-gray-700">
                        <li>Find a therapist.</li>
                        <li>Join a support group or other support services.</li>
                        <li>Find a peer mentor.</li>
                        <li>Meditate.</li>
                    </ul>

                    <p className="mt-3 leading-relaxed">
                        Sometimes PTSD can lead to unhealthy behavior like substance abuse or taking unnecessary risks. Sharing your experiences, feelings, and fears with others, whether with friends, family, or a professional, can lessen the burden.
                    </p>

                    <p className="mt-4">
                        Source:{" "}
                        <a
                            href="https://www.brainline.org/topic/post-traumatic-stress-disorder-ptsd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-700 font-medium underline"
                        >
                            Brainline.org
                        </a>
                    </p>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Resources for Post Traumatic Stress Disorder
                    </h2>

                    <div className="mt-6 grid gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://www.ptsdassociation.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                PTSD Association of Canada
                            </a>
                            <p className="mt-2 leading-relaxed">Non-profit dedicated to those who suffer from &amp; those at risk for PTSD as well as those who care for traumatized individuals.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://www.ptsd.va.gov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                US National Centre for PTSD
                            </a>
                            <p className="mt-2 leading-relaxed">Dedicated to research &amp; education on trauma &amp; PTSD</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://www.ptsd.va.gov/understand/related/suicide_ptsd.asp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                PTSD and Suicide
                            </a>
                            <p className="mt-2 leading-relaxed">Connections between the experience of a traumatic event, PTSD &amp; suicide risk.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://lop.parl.ca/staticfiles/PublicWebsite/Home/ResearchPublications/BackgroundPapers/PDF/2011-97-e.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                PTSD &amp; Mental Health of Military
                            </a>
                            <p className="mt-2 leading-relaxed">Discover this Canadian government Parliamentary Information &amp; Research Service paper. Downloadable PDF</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://ptsdresolution.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                PTSD Resolution
                            </a>
                            <p className="mt-2 leading-relaxed">UK outreach programme helps veterans struggling to reintegrate into a normal work &amp; family life.</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://www.youtube.com/watch?v=EqDs-2qvd_Y"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Hope for Recovery
                            </a>
                            <p className="mt-2 leading-relaxed">YouTube Video helping one to understand PTSD</p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a
                                href="https://homecomingvets.wordpress.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
                            >
                                Homecoming Vets &amp; the Crossroads of Humanity
                            </a>
                            <p className="mt-2 leading-relaxed">A reintegration site for veterans &amp; their families.</p>
                        </div>
                    </div>
                </div>

                <div
                    role="alert"
                    className="mt-8 p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 shadow-md text-amber-900"
                >
                    <h2 className="text-2xl font-bold">Getting Treatment</h2>
                    <p className="mt-3 leading-relaxed">
                        As with depression or anxiety, getting the right treatment for PTSD depends a great deal on the individual. Sometimes counseling called cognitive-behavioral therapy is effective. Additionally, medicines known as SSRIs can help, too. Sometimes a combination of both therapies proves successful. Treatment can help people with PTSD feel more in control of their emotions and result in fewer symptoms, but some symptoms like bad memories or super-sensitivity to sounds and lights may linger.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesPTSD;