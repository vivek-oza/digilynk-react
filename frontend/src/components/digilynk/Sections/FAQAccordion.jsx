import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQAccordion() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* General Questions Section */}
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">General Questions</h2>
            <div className="mb-12 space-y-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="general-1">
                        <AccordionTrigger>How long does a website project usually take to complete?</AccordionTrigger>
                        <AccordionContent>
                            Typically, our website projects in Gandhinagar take between 3-6 weeks depending on complexity. Basic websites can be delivered in 2-3 weeks, while e-commerce platforms may require 4-6 weeks. We provide a clear timeline after understanding your requirements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="general-2">
                        <AccordionTrigger>How much does a website cost in India?</AccordionTrigger>
                        <AccordionContent>
                            At DigiLynk, our website development starts from ₹15,000 for basic websites. Professional business websites range between ₹25,000-₹50,000, while custom e-commerce solutions start from ₹60,000. We offer competitive pricing tailored to Indian businesses with transparent cost breakdowns.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="general-3">
                        <AccordionTrigger>How easy is it for me to change content myself?</AccordionTrigger>
                        <AccordionContent>
                            Very simple! We provide training on our user-friendly CMS. Most DigiLynk clients in Gujarat manage their own content updates effortlessly. We also offer optional maintenance packages if you prefer us to handle updates.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="general-4">
                        <AccordionTrigger>Can I create PPC landing pages myself?</AccordionTrigger>
                        <AccordionContent>
                            Yes, our system allows you to create landing pages easily. For our Gandhinagar clients, we also provide dedicated PPC services with optimized landing pages as part of our digital marketing packages.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="general-5">
                        <AccordionTrigger>We have a limited budget, will you still work with us?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely! We understand Indian SME budgets and offer scalable solutions. We can start with essential features and expand later. Ask us about our startup-friendly packages.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="general-6">
                        <AccordionTrigger>Do you outsource any work?</AccordionTrigger>
                        <AccordionContent>
                            No, DigiLynk has an in-house team of developers, designers, and marketers working from our Gandhinagar office. This ensures quality control and better communication for our clients across India.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Working with DigiLynk Section */}
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Working with DigiLynk</h2>
            <div className="mb-12 space-y-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="digilynk-1">
                        <AccordionTrigger>How many meetings can we have?</AccordionTrigger>
                        <AccordionContent>
                            We're flexible! Typically we have an initial consultation, design approval meeting, and pre-launch review. For our Gandhinagar clients, we're happy to meet in person. For others across India, we conduct productive virtual meetings.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="digilynk-2">
                        <AccordionTrigger>Do we have a dedicated account manager?</AccordionTrigger>
                        <AccordionContent>
                            Yes, every DigiLynk client gets a dedicated project coordinator based in our Gujarat office who speaks Hindi, English, and Gujarati for smooth communication.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="digilynk-3">
                        <AccordionTrigger>What are your payment terms?</AccordionTrigger>
                        <AccordionContent>
                            We work on a 40% advance, 40% after design approval, and 20% before launch. For our Indian clients, we accept UPI, bank transfers, and other local payment methods.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="digilynk-4">
                        <AccordionTrigger>We're not based in Gandhinagar, does that matter?</AccordionTrigger>
                        <AccordionContent>
                            Not at all! While our office is in Gandhinagar, we serve clients across India through online collaboration. Many of our successful projects are with clients from Mumbai, Delhi, Bangalore, and other cities.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Other Questions Section */}
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Other Questions</h2>
            <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="other-1">
                        <AccordionTrigger>What services does DigiLynk offer?</AccordionTrigger>
                        <AccordionContent>
                            We specialize in website development, e-commerce solutions, SEO, Google Ads, social media marketing, and branding services specifically tailored for Indian businesses. We also offer GST-compliant website solutions.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="other-2">
                        <AccordionTrigger>Where is DigiLynk located?</AccordionTrigger>
                        <AccordionContent>
                            Our headquarters are in Gandhinagar, Gujarat - India's growing IT hub. We're conveniently located for meetings with clients from Ahmedabad, Gandhinagar, and nearby areas, while equally equipped to serve pan-India clients remotely.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}



















// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"

// export function FAQAccordion() {
//     return (
//         <Accordion type="single" collapsible className="w-full">
//             {/* General Questions */}
//             <AccordionItem value="general-1">
//                 <AccordionTrigger>How long does a website project usually take to complete?</AccordionTrigger>
//                 <AccordionContent>
//                     The timeline varies depending on the project scope, but most standard websites take between 4-8 weeks from initial consultation to launch. More complex projects may take longer. We'll provide a detailed timeline after our initial discussion.
//                 </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="general-2">
//                 <AccordionTrigger>How much does a website cost?</AccordionTrigger>
//                 <AccordionContent>
//                     Website costs depend on your specific requirements. Our basic websites start from £2,000, while more complex solutions can range up to £15,000+. We offer transparent pricing and will provide a detailed quote after understanding your needs.
//                 </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="general-3">
//                 <AccordionTrigger>How easy is it for me to change content myself?</AccordionTrigger>
//                 <AccordionContent>
//                     Very easy! We build all our websites with user-friendly content management systems (like WordPress or custom CMS solutions) that allow you to update text, images, and most content without any technical knowledge.
//                 </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="general-4">
//                 <AccordionTrigger>Can I create PPC landing pages myself?</AccordionTrigger>
//                 <AccordionContent>
//                     Yes, we can set up a system that allows you to create and manage PPC landing pages yourself. Alternatively, we're happy to create and optimize them for you as part of our PPC management services.
//                 </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="general-5">
//                 <AccordionTrigger>We have a limited budget, will you still work with us?</AccordionTrigger>
//                 <AccordionContent>
//                     Absolutely. We believe in providing value at all budget levels. We'll work with you to prioritize the most important elements and can often suggest phased approaches to spread costs over time.
//                 </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="general-6">
//                 <AccordionTrigger>Do you outsource any work?</AccordionTrigger>
//                 <AccordionContent>
//                     No, all our work is done in-house by our dedicated team of designers, developers, and marketers based in our Manchester office. This ensures quality control and consistent communication.
//                 </AccordionContent>
//             </AccordionItem>

//             {/* Working with Shape */}
//             <AccordionItem value="shape-1">
//                 <AccordionTrigger>How many meetings can we have?</AccordionTrigger>
//                 <AccordionContent>
//                     We're flexible to your needs. Typically, we have an initial consultation, a planning meeting, design review sessions, and a pre-launch meeting. Additional meetings can be scheduled as needed - we never limit collaboration.
//                 </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="shape-2">
//                 <AccordionTrigger>Do we have a dedicated project manager?</AccordionTrigger>
//                 <AccordionContent>
//                     Yes, every project is assigned a dedicated project manager who will be your single point of contact throughout the process. They'll coordinate all aspects of your project and keep you updated at every stage.
//                 </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="shape-3">
//                 <AccordionTrigger>What are your payment terms?</AccordionTrigger>
//                 <AccordionContent>
//                     We typically work on a 50% deposit with the balance due before launch. For larger projects, we can arrange milestone payments. All terms will be clearly outlined in our proposal.
//                 </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="shape-4">
//                 <AccordionTrigger>We're not based in Manchester, does that matter?</AccordionTrigger>
//                 <AccordionContent>
//                     Not at all! While we're based in Manchester, we work with clients across the UK and internationally. We're experienced at remote collaboration through video calls, email, and project management tools.
//                 </AccordionContent>
//             </AccordionItem>

//             {/* Other Questions */}
//             <AccordionItem value="other-1">
//                 <AccordionTrigger>What services do you offer?</AccordionTrigger>
//                 <AccordionContent>
//                     We offer comprehensive digital services including website design and development, e-commerce solutions, SEO, PPC advertising, content creation, branding, and ongoing website maintenance and support.
//                 </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="other-2">
//                 <AccordionTrigger>Where are you based?</AccordionTrigger>
//                 <AccordionContent>
//                     Our office is located in central Manchester, but as mentioned, we work with clients nationwide and internationally. We're happy to meet in person if you're local or connect virtually if you're further away.
//                 </AccordionContent>
//             </AccordionItem>
//         </Accordion>
//     )
// }