import SectionTitle from "../Common/SectionTitle";
import SinglePartnerShip from "./SinglePartnerShip";
import PartnerShipsData from "./PartnerShipsData";

const PartnerShips = () => {
    return (
        <>
            <section
                id="features"
                className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
            >
                <div className="container">
                    <SectionTitle
                        title="Ways of Partnering"
                        paragraph="We have a number of ways we can partner with you to deliver value to your business"
                        center
                    />

                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {PartnerShipsData.map((feature) => (
                            <SinglePartnerShip key={feature.id} feature={feature} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PartnerShips;
