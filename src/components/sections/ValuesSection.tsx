import ValueCard from "@/components/ui/ValueCard";

export default function ValuesSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-[#05DAFF] text-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                    <div className="w-16 sm:w-24 h-1 bg-black mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <ValueCard
                        title="CREATIVE"
                        description="We push boundaries and explore new ideas to create unique gaming experiences."
                    />
                    <ValueCard
                        title="QUALITY"
                        description="We are committed to delivering polished, bug-free games that players love."
                    />
                    <ValueCard
                        title="FUN"
                        description="At the heart of everything we do is the goal to bring joy and entertainment."
                    />
                </div>
            </div>
        </section>
    );
}
