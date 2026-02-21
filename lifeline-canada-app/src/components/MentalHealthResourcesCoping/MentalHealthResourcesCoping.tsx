import React from 'react';
import { Sparkles } from 'lucide-react';
import copingMain from '../../assets/copingMain.webp';
import copingPdf from '../../assets/Coping-With-Suicidal-Thoughts.pdf';

const MentalHealthResourcesCoping: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
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
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-1">
                                <p className="leading-relaxed">
                                    Suicidal thoughts can feel overwhelming, but help and practical strategies are available. If you are in immediate danger, call 911 or go to your nearest Emergency Room. The guidance below is adapted from The LifeLine Canada and is intended to provide practical steps and resources.
                                </p>

                                <p className="mt-4">
                                    Below is a PDF written by Dr. Joti Samra, R.Psych. and Dr. Dan Bilsker, R.Psych. (Lead Authors), Consortium for Organizational Mental Health (COMH; www.comh.ca), Faculty of Health Sciences, Simon Fraser University, Vancouver, BC.
                                </p>

                                <a
                                    href={copingPdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-purple-700 font-medium underline"
                                >
                                    Download PDF 
                                </a>
                            </div>

                            <div className="w-full md:w-80 lg:w-96 xl:w-[520px] relative flex-shrink-0 md:ml-6 overflow-visible">
                                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-20" />
                                <div className="relative animate-float transform md:scale-105 lg:scale-110 md:translate-x-8 shadow-2xl">
                                    <img
                                        src={copingMain}
                                        alt="Coping support illustration"
                                        className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New card: I'm seriously thinking about suicide */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50">
                        <h2 className="text-2xl font-bold">I'm seriously thinking about suicide. What should I do?</h2>
                        <h3 className="mt-3 text-purple-700 font-semibold">Practical Suggestions</h3>

                        <p className="mt-3 text-base text-gray-700 leading-relaxed">
                            If you are thinking about suicide, you are not alone. Many people have thoughts of suicide, for a number of reasons. Thoughts of suicide can be very scary. You probably feel hurt, confused, overwhelmed and hopeless about your future. You may feel sadness, grief, anger, guilt, shame, or emptiness. You may think that nothing can be done to change your situation. Your feelings may seem like they are just too much to handle right now.
                        </p>

                        <p className="mt-3 text-base text-gray-700 leading-relaxed">
                            It is important to know that thinking about suicide does not mean that you will lose control or act on these thoughts. Having thoughts of suicide does not mean you are weak, or 'crazy'. Many people think about suicide because they are looking for a way to escape the pain they are feeling.
                        </p>

                        <p className="mt-3 text-base text-gray-700 leading-relaxed">
                            <b>Even though your situation seems hopeless and you wonder if you can stand another minute of feeling this bad, there are ways to get through this and feel better. You don't have to face this situation alone. <i>Help is available.</i>
                            </b>
                        </p>

                        <p className="mt-3 font-medium text-base">Here are a few ideas you can use now:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2 text-base text-gray-700">
                            <li>
                                <strong>Connect with others:</strong> If you are worried that you may lose control or do something to hurt yourself, tell someone. Make sure you are around someone you trust. If you live alone, ask a friend or family member to stay with you. If you don't know anyone or can't reach friends or family members, call your local crisis line.
                            </li>
                            <li>
                                <strong>Keep your home safe:</strong> Get rid of things that could be used to hurt or kill yourself, such as pills, razor blades, or guns. If you are unable to do so, go to a place you can feel safe.
                            </li>
                            <li>
                                <strong>Develop a safety plan:</strong> It is very helpful to have a written safety plan when you have thoughts of hurting yourself. Have a trusted family member, friend, or professional help you to complete this safety plan. Keep this plan somewhere you can see or find easily. Write down the steps you will take to keep yourself safe. Follow the steps. If you follow these steps and still do not feel safe, call a crisis line, get yourself to a hospital emergency room or call 911.
                            </li>
                        </ul>
                    </div>

                    {/* New card: Safety Plan */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50">
                        <h2 className="text-2xl font-bold">Safety Plan</h2>
                        
                        <p className="mt-3 text-base text-gray-700 leading-relaxed">
                            If you have thoughts of hurting yourself, start at Step 1. Go through each step until you are safe. Remember: Suicidal thoughts can be very strong. It may seem they will last forever. With support and time, these thoughts will usually pass. When they pass, you can put energy into sorting out problems that have contributed to you feeling so badly. The hopelessness you may feel now will not last forever. It is important to reach out for help and support. You can get through this difficult time. Since it can be hard to focus and think clearly when you feel suicidal, copy this and put in places where you can easily use it, such as your purse, wallet or by the phone.
                        </p>

                        <ol className="list-decimal list-inside mt-4 space-y-2 text-base text-gray-700">
                            <li>Remind myself of my reasons for living</li>
                            <li>Call a friend or family member</li>
                            <li>Call a backup person if person above is not available</li>
                            <li>Call a care provider (psychologist, psychiatrist, therapist)</li>
                            <li>Call my local crisis line</li>
                            <li>Go somewhere I am safe</li>
                            <li>Go to the Emergency Room at the nearest hospital</li>
                            <li>If I feel that I can't get to the hospital safely, call 911 and request transportation to the hospital. They will send someone to transport me safely.</li>
                        </ol>
                    </div>

                    {/* New card: What Else Can I Do To Decrease Thoughts of Suicide? */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50">
                        <h2 className="text-2xl font-bold">What Else Can I Do To Decrease Thoughts of Suicide?</h2>

                        <div className="mt-4 space-y-4 text-base text-gray-700">
                            <div>
                                <h3 className="font-semibold text-purple-700">Problem Solve:</h3>
                                <p className="mt-2 leading-relaxed">
                                    It is always helpful to think of ways other than suicide that you can solve your problems. First, make a list of all the problems you are dealing with in your life. Second, make a list of all the solutions you can think of to those problems. You can ask someone you trust to help you with this. Dealing with 1 or 2 small problems can help to put an end to immediate feelings of suicide. Once you are thinking more clearly, you can tackle other bigger problems. You can find worksheets on Problem-Solving and Healthy Thinking in the Antidepressant Skills Workbook at www.heretohelp.bc.ca
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Think of Reasons for Living:</h3>
                                <p className="mt-2 leading-relaxed">
                                    Most people who think about suicide want to escape their pain, but they do not always want to die. When you feel low, it's easy to stay focused on things that are negative and upsetting in your life. This makes it easy to think of suicide as the only option. Start thinking about some reasons you have for living. For example, many people have relationships with loved ones, pets they love, religion, goals and dreams, or responsibilities to others in their life that give them reasons to live and prevent them from acting on their suicidal thoughts. Think of all of the reasons you have for living. Write them down. Remind yourself of them when you are feeling low.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Remember Things That Have Helped in the Past:</h3>
                                <p className="mt-2 leading-relaxed">
                                    Many people have had thoughts of suicide before. Think of some of the things that helped you feel better when you faced the same types of problems in the past. Some examples are: having faith and trust that time always helps; reaching out to friends and family; seeing a professional; going to a support group; following a safety plan; doing something you enjoy; not being alone; keeping a journal; or not drinking or using drugs.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Get Treatment for Mental Health Problems:</h3>
                                <p className="mt-2 leading-relaxed">
                                    It is important to get treatment for depression, anxiety, and alcohol and drug problems. Just seeing your family doctor may not be enough. It can help to see a mental health specialist, such as a psychologist or a psychiatrist. You can get referrals from your doctor or learn how to find a specialist from one of the referral lines listed on the last page. If you are already receiving treatment, speak up if your treatment plan is not working.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Do The Opposite of How You Feel:</h3>
                                <p className="mt-2 leading-relaxed">
                                    When you have thoughts of suicide, it can be helpful to do the opposite of how you feel. For example, when people feel depressed they usually want to be alone. Doing the opposite, for example getting in touch with others, can help with feelings of depression.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Talk To Someone</h3>
                                <p className="mt-2 leading-relaxed">
                                    Talk to a trusted friend, family member or professional. It is important to speak to someone you trust about how you feel. Sometimes just talking about how you feel can help. It is important to be open about all of your thoughts. If you have a suicide plan, it is important to tell someone what your plan is. People often say they are relieved that they shared how they felt with someone. Talking can help you feel less alone.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* New card: Some Common Problems & Solution Ideas */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50">
                        <h2 className="text-2xl font-bold">Some Common Problems & Solution Ideas:</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            {/* Problem 1: Depressed Mood */}
                            <div className="border-l-4 border-purple-500 pl-4">
                                <h3 className="font-semibold text-purple-700 text-lg">Problem: Depressed Mood</h3>
                                <p className="mt-2 font-medium text-base text-gray-700">Possible Solution:</p>
                                <ul className="list-disc ml-5 mt-2 space-y-2 text-base text-gray-700">
                                    <li>Call a crisis line for emotional support short-term problem-solving and referrals for longer term help.</li>
                                    <li>See your doctor to discuss options for treatment (medications, changes in medications, undiagnosed illnesses).</li>
                                    <li>Take care of yourself by resting, exercising regularly, eating regularly and spending time with friends.</li>
                                </ul>
                            </div>

                            {/* Problem 2: End of Relationship */}
                            <div className="border-l-4 border-purple-500 pl-4">
                                <h3 className="font-semibold text-purple-700 text-lg">Problem: End of Relationship</h3>
                                <p className="mt-2 font-medium text-base text-gray-700">Possible Solution:</p>
                                <ul className="list-disc ml-5 mt-2 space-y-2 text-base text-gray-700">
                                    <li>Talk to friends about the pain you feel.</li>
                                    <li>Get help from a crisis line or counselor.</li>
                                    <li>Join a social group.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* New card: How Can I Decrease Chances That I Will Feel Suicidal in the Future? */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50">
                        <h2 className="text-2xl font-bold">How Can I Decrease Chances That I Will Feel Suicidal in the Future?</h2>

                        <div className="mt-4 space-y-4 text-base text-gray-700">
                            <div>
                                <h3 className="font-semibold text-purple-700">Get Professional Support:</h3>
                                <p className="mt-2 leading-relaxed">
                                    You can get help and referrals from your doctor or from referral lines listed on the following page. If the first referral doesn't work for you, ask for another.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Identify high-risk triggers or situations:</h3>
                                <p className="mt-2 leading-relaxed">
                                    Think about the situations or factors that increase your feelings of despair and thoughts of suicide. Work to avoid those situations. For example, going to a bar and drinking with friends may increase feelings of depression. If this is a trigger for you, avoid going to a bar or seeing friends who drink.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Self Care:</h3>
                                <p className="mt-2 leading-relaxed">
                                    Taking good care of yourself is important to feel better. It is important to do the following:
                                </p>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Eat a healthy diet</li>
                                    <li>Get some exercise every day</li>
                                    <li>Get a good night's sleep</li>
                                    <li>Decrease or stop using alcohol or drugs, as these can make feelings of depression and suicide worse.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Follow Through with Prescribed Medications:</h3>
                                <p className="mt-2 leading-relaxed">
                                    If you take prescription medications, it is important to make sure you take them as your doctor directed. Speak to your doctor if medications aren't working or if side effects are causing you problems. If you have just begun taking antidepressants, it is important to know that symptoms of depression resolve at different rates. Physical symptoms such as energy or sleep may improve first. Improvement in mood may be delayed. Speak to your doctor if you are feeling worse.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Structure & Routine:</h3>
                                <p className="mt-2 leading-relaxed">
                                    Keep a regular routine as much as possible, even when your feelings seem out of control. Here are some tips for creating structure in your life:
                                </p>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Wake up at a regular time</li>
                                    <li>Have a regular bed time</li>
                                    <li>Have planned activities in your day, such as going for a walk or going to the gym</li>
                                    <li>Continue to go to work or school</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Do Things You Enjoy:</h3>
                                <p className="mt-2 leading-relaxed">
                                    When you are feeling very low, do an activity you enjoy. You may find that very few things bring you pleasure. Think of things you used to enjoy doing at times you didn't feel so depressed or suicidal. Do these things, even if they don't bring you enjoyment right now. Giving yourself a break from suicide thoughts can help, even if it's for a short time.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-purple-700">Think of Personal Goals:</h3>
                                <p className="mt-2 leading-relaxed">
                                    Think of personal goals you have for yourself, or that you've had in the past. Some examples are:
                                </p>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>Read a particular book</li>
                                    <li>Travel</li>
                                    <li>Get a pet</li>
                                    <li>Move to another place</li>
                                    <li>Learn a new hobby</li>
                                    <li>Volunteer</li>
                                    <li>Go back to school</li>
                                    <li>Start a family</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesCoping;